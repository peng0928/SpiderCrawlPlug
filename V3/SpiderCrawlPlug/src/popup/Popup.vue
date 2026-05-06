<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

// 基础配置
const hookInput = ref('')
const hookType = ref('document start')
const hookJson = ref(false)
const spiderSwitch = ref(false)
const hookUrl = ref(false)
const hookXhr = ref(false)
const hookCookie = ref(false)
const hookDebug = ref(false)
const hookJJM = ref(false)

// 动态JS代码配置（注入到页面）
const dynamicJsEnabled = ref(false)
const dynamicJsCode = ref('')
const jsValidationError = ref('')

// 验证JS代码语法
const validateJsCode = (code: string): boolean => {
  if (!code.trim()) return true

  try {
    new Function(code)
    jsValidationError.value = ''
    return true
  } catch (error: any) {
    jsValidationError.value = `语法错误: ${error.message}`
    return false
  }
}

// 保存所有配置
const setAll = () => {
  const config = {
    hookInput: hookInput.value,
    spiderSwitch: spiderSwitch.value,
    hookJson: hookJson.value,
    hookType: hookType.value,
    hookDebug: hookDebug.value,
    hookCookie: hookCookie.value,
    hookXhr: hookXhr.value,
    hookUrl: hookUrl.value,
    hookJJM: hookJJM.value,
    dynamicJsEnabled: dynamicJsEnabled.value,
    dynamicJsCode: dynamicJsCode.value
  }

  chrome.storage.sync.set(config, () => {
    if (chrome.runtime.lastError) {
      console.error('保存失败:', chrome.runtime.lastError)
    }
  })

  // 通知当前活动标签页更新注入脚本
  notifyCurrentTab()
}

// 通知当前标签页配置已更新
const notifyCurrentTab = async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: 'UPDATE_HOOK_CONFIG',
        payload: {
          dynamicJsEnabled: dynamicJsEnabled.value,
          dynamicJsCode: dynamicJsCode.value,
          hookInput: hookInput.value,
          hookJson: hookJson.value,
          hookUrl: hookUrl.value,
          hookXhr: hookXhr.value,
          hookCookie: hookCookie.value,
          hookDebug: hookDebug.value,
          hookJJM: hookJJM.value
        }
      }).catch(() => {
        // 页面可能未注入content script，忽略错误
      })
    }
  } catch (error) {
    console.error('通知失败:', error)
  }
}

// 监听动态JS代码变化
watch(dynamicJsCode, (newCode) => {
  if (dynamicJsEnabled.value) {
    validateJsCode(newCode)
  }
  setAll()
})

watch(dynamicJsEnabled, () => {
  setAll()
  if (!dynamicJsEnabled.value) {
    jsValidationError.value = ''
  }
})

// 监听其他配置变化
watch([hookInput, hookType, hookJson, spiderSwitch, hookUrl, hookXhr, hookCookie, hookDebug, hookJJM], () => {
  setAll()
})

// 打开后台页面
const openBackground = () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('options.html'),
  })
}

// 清空动态JS代码
const clearDynamicJs = () => {
  dynamicJsCode.value = ''
  jsValidationError.value = ''
  setAll()
}

// 获取动态JS模板（注入到页面的代码）
const getJsTemplate = (type: string) => {
  const templates: Record<string, string> = {
    'console': `// Console Hook - 拦截控制台输出
(function() {
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = function(...args) {
    // 发送到插件后台
    if (window.__CHROME_EXTENSION__) {
      window.__CHROME_EXTENSION__.postMessage({
        type: 'console_log',
        data: args
      });
    }
    originalLog.apply(console, args);
  };

  console.warn = function(...args) {
    if (window.__CHROME_EXTENSION__) {
      window.__CHROME_EXTENSION__.postMessage({
        type: 'console_warn',
        data: args
      });
    }
    originalWarn.apply(console, args);
  };

  console.error = function(...args) {
    if (window.__CHROME_EXTENSION__) {
      window.__CHROME_EXTENSION__.postMessage({
        type: 'console_error',
        data: args
      });
    }
    originalError.apply(console, args);
  };
})();`,

    'fetch': `// Fetch/XHR请求拦截
(function() {
  // Hook Fetch
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    console.log('[Fetch Hook] 请求:', args[0]);
    // 可以在这里记录或修改请求
    return originalFetch.apply(this, args);
  };

  // Hook XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  const originalXHRSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    this._hookMethod = method;
    this._hookUrl = url;
    return originalXHROpen.apply(this, [method, url, ...rest]);
  };

  XMLHttpRequest.prototype.send = function(body) {
    console.log('[XHR Hook]', this._hookMethod, this._hookUrl, body);
    return originalXHRSend.call(this, body);
  };
})();`,

    'cookie': `// Cookie操作监控
(function() {
  const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');

  Object.defineProperty(document, 'cookie', {
    get: function() {
      const value = cookieDescriptor.get.call(this);
      console.log('[Cookie Get]', value);
      return value;
    },
    set: function(value) {
      console.log('[Cookie Set]', value);
      return cookieDescriptor.set.call(this, value);
    }
  });

  // 监控localStorage
  const originalSetItem = Storage.prototype.setItem;
  const originalGetItem = Storage.prototype.getItem;
  const originalRemoveItem = Storage.prototype.removeItem;

  Storage.prototype.setItem = function(key, value) {
    console.log('[Storage Set]', key, value);
    originalSetItem.call(this, key, value);
  };

  Storage.prototype.getItem = function(key) {
    const value = originalGetItem.call(this, key);
    if (value) console.log('[Storage Get]', key, value);
    return value;
  };

  Storage.prototype.removeItem = function(key) {
    console.log('[Storage Remove]', key);
    originalRemoveItem.call(this, key);
  };
})();`,

    'debugger': `// 绕过debugger反调试
(function() {
  // 禁用debugger语句
  const originalEval = window.eval;
  window.eval = function(code) {
    if (code && code.includes('debugger')) {
      console.log('[Anti-Debug] 拦截debugger语句');
      return;
    }
    return originalEval.call(this, code);
  };

  // 覆盖Function构造器
  const OriginalFunction = window.Function;
  window.Function = function(...args) {
    const body = args[args.length - 1];
    if (body && body.includes('debugger')) {
      console.log('[Anti-Debug] 拦截Function中的debugger');
      return function() {};
    }
    return new OriginalFunction(...args);
  };

  // 定时清除定时器中的debugger
  setInterval(() => {
    if (window._debuggerInterval) clearInterval(window._debuggerInterval);
  }, 100);
})();`
  }

  return templates[type] || ''
}

// 应用模板
const applyTemplate = (type: string) => {
  const template = getJsTemplate(type)
  if (template) {
    dynamicJsCode.value = template
  }
}

// 注入代码到当前页面（测试用）
const injectToCurrentPage = async () => {
  if (!dynamicJsCode.value.trim()) {
    return
  }

  if (!validateJsCode(dynamicJsCode.value)) {
    return
  }

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      // 通过content script注入代码到页面
      chrome.tabs.sendMessage(tab.id, {
        type: 'INJECT_JS_CODE',
        payload: {
          code: dynamicJsCode.value
        }
      }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('注入失败，请刷新页面后重试')
        }
      })
    }
  } catch (error) {
    console.error('注入失败:', error)
  }
}

onMounted(() => {
  chrome.storage.sync.get([
    'spiderSwitch', 'hookJson', 'hookInput', 'hookUrl', 'hookXhr',
    'hookCookie', 'hookType', 'hookDebug', 'hookJJM',
    'dynamicJsEnabled', 'dynamicJsCode'
  ], (result) => {
    hookInput.value = result.hookInput || ''
    hookJson.value = result.hookJson || false
    hookUrl.value = result.hookUrl || false
    hookXhr.value = result.hookXhr || false
    hookType.value = result.hookType || 'document start'
    hookCookie.value = result.hookCookie || false
    hookDebug.value = result.hookDebug || false
    hookJJM.value = result.hookJJM || false
    spiderSwitch.value = result.spiderSwitch || false
    dynamicJsEnabled.value = result.dynamicJsEnabled || false
    dynamicJsCode.value = result.dynamicJsCode || ''

    if (dynamicJsCode.value && dynamicJsEnabled.value) {
      validateJsCode(dynamicJsCode.value)
    }
  })
})
</script>

<template>
  <main>
    <div class="body bg-gray-50 h-auto p-6">
      <div class="p-3 flex justify-between">
        <div class="flex text-center items-center gap-1">
          <div class="block font-semibold">监听</div>
          <a-switch type="round" v-model:model-value="spiderSwitch" />
        </div>
        <div>
          <button type="button" class="btn btn-primary" @click="openBackground">抓包中心</button>
        </div>
      </div>

      <div class="w-full max-w-md">
        <a-collapse :default-active-key="['1', '2']">
          <a-collapse-item header="HOOK 配置面板" key="1">
            <div class="grid gap-3">
              <div class="">
                <a-input v-model:model-value="hookInput" placeholder="输入 Hook 关键字..." allow-clear />
              </div>

              <div class="">
                <label class="block text-md font-medium mb-1">注入方式</label>
                <a-select placeholder="Please select ..." v-model:model-value="hookType">
                  <a-option value="document start">开始渲染注入</a-option>
                  <a-option value="document end">渲染完成注入</a-option>
                </a-select>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookJson" />
                  <label class="ml-3 block">JSON函数</label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookUrl" />
                  <label class="ml-3 block">url编码、解码</label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookXhr" />
                  <label class="ml-3 block">Xhr/Fetch拦截</label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookCookie" />
                  <label class="ml-3 block">Cookie拦截</label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookJJM" />
                  <label class="ml-3 block">加解密方法</label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookDebug" />
                  <label class="ml-3 block">绕过瑞数Debugger</label>
                </div>
              </div>
            </div>
          </a-collapse-item>

          <!-- 动态JS代码注入面板 - 注入到页面 -->
          <a-collapse-item header="页面JS代码注入" key="2">
            <div class="grid gap-3">
              <!-- 动态JS开关 -->
              <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                  <a-switch type="line" v-model:model-value="dynamicJsEnabled" />
                  <label class="block font-medium">启用自定义Hook代码</label>
                </div>
                <div class="flex gap-2">
                  <a-button size="small" @click="clearDynamicJs" v-if="dynamicJsCode">清空</a-button>
                  <a-button size="small" type="primary" @click="injectToCurrentPage" :disabled="!dynamicJsEnabled || !dynamicJsCode">
                    立即注入
                  </a-button>
                </div>
              </div>

              <!-- 模板选择 -->
              <div v-if="dynamicJsEnabled">
                <label class="block text-sm font-medium mb-1">快速模板（注入到页面）</label>
                <div class="flex gap-2 flex-wrap">
                  <a-button size="small" @click="applyTemplate('console')">Console拦截</a-button>
                  <a-button size="small" @click="applyTemplate('fetch')">请求拦截</a-button>
                  <a-button size="small" @click="applyTemplate('cookie')">Cookie/Storage监控</a-button>
                  <a-button size="small" @click="applyTemplate('debugger')">反Debugger</a-button>
                </div>
              </div>

              <!-- JS代码编辑器 -->
              <div v-if="dynamicJsEnabled">
                <label class="block text-sm font-medium mb-1">
                  自定义Hook代码（将注入到目标页面执行）
                  <span class="text-xs text-gray-500 ml-2">刷新页面后生效</span>
                </label>
                <textarea
                  v-model="dynamicJsCode"
                  class="w-full h-56 font-mono text-xs p-2 border rounded-md bg-gray-900 text-gray-100"
                  placeholder="// 此代码将注入到目标网页中执行
// 可以Hook页面中的任何JavaScript函数

// 示例：Hook某个全局函数
(function() {
  if (window.targetFunction) {
    const originalFunc = window.targetFunction;
    window.targetFunction = function(...args) {
      console.log('[Hook] 调用targetFunction', args);
      // 可以修改参数或返回值
      return originalFunc.apply(this, args);
    };
  }
})();"
                  :class="{ 'border-red-500': jsValidationError }"
                ></textarea>

                <!-- 验证错误提示 -->
                <div v-if="jsValidationError" class="text-red-500 text-xs mt-1">
                  {{ jsValidationError }}
                </div>

                <!-- 使用提示 -->
                <div class="mt-2 text-xs text-gray-500 bg-gray-100 p-2 rounded">
                  <div class="font-medium mb-1">💡 注入说明：</div>
                  <ul class="list-disc list-inside space-y-1">
                    <li>代码将在页面加载时自动注入执行</li>
                    <li>修改代码后需<strong class="text-red-500">刷新页面</strong>重新注入</li>
                    <li>可使用 <strong>立即注入</strong> 按钮测试（无需刷新）</li>
                    <li>建议使用IIFE避免变量污染</li>
                    <li>Hook的函数越多，页面性能影响越大</li>
                  </ul>
                </div>
              </div>
            </div>
          </a-collapse-item>
        </a-collapse>
      </div>
    </div>
  </main>
</template>

<style>
@import "tailwindcss";
@plugin "daisyui";

.body {
  font-family: "Microsoft Yahei";
  width: 420px;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  max-height: 650px;
}

.body::-webkit-scrollbar {
  width: 6px;
}

.body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.body::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

textarea {
  resize: vertical;
  font-family: 'Courier New', 'Monaco', monospace;
  line-height: 1.4;
}
</style>
