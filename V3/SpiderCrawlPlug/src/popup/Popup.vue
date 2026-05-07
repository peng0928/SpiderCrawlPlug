<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Message } from '@arco-design/web-vue'

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

// 自定义模板管理
const showTemplateManager = ref(false)
const customTemplates = ref<Array<{ name: string, code: string }>>([])
const newTemplateName = ref('')
const editingTemplateIndex = ref(-1)

// 使用正则表达式进行基础语法检查（避免使用eval/new Function）
const validateJsCode = (code: string): boolean => {
  if (!code.trim()) {
    jsValidationError.value = ''
    return true
  }

  // 基础语法检查
  const checks = [
    // 检查括号匹配
    { regex: /\(/g, pair: ')' },
    // 检查花括号匹配
    { regex: /\{/g, pair: '}' },
    // 检查方括号匹配
    { regex: /\[/g, pair: ']' },
  ]

  for (const check of checks) {
    const openCount = (code.match(check.regex) || []).length
    const closeRegex = new RegExp(`\\${check.pair}`, 'g')
    const closeCount = (code.match(closeRegex) || []).length
    if (openCount !== closeCount) {
      jsValidationError.value = `语法错误: ${check.pair} 括号不匹配`
      return false
    }
  }

  // 检查常见的语法问题
  const commonIssues = [
    { pattern: /\b(function|if|for|while|switch)\s*\([^)]*$/m, message: '函数或语句括号未闭合' },
    { pattern: /catch\s*\([^)]*$/m, message: 'catch语句括号未闭合' },
    { pattern: /=\s*$/m, message: '赋值语句不完整' },
  ]

  for (const issue of commonIssues) {
    if (issue.pattern.test(code)) {
      jsValidationError.value = issue.message
      return false
    }
  }

  jsValidationError.value = ''
  return true
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
    dynamicJsCode: dynamicJsCode.value,
    customTemplates: customTemplates.value,
  }

  chrome.storage.sync.set(config, () => {
    if (chrome.runtime.lastError) {
      console.error('保存失败:', chrome.runtime.lastError)
      Message.error('保存失败: ' + chrome.runtime.lastError.message)
    } else {
      console.log('配置已保存')
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
          hookJJM: hookJJM.value,
        },
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
  editingTemplateIndex.value = -1
  setAll()
  Message.info('已清空')
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
    // 可以通过postMessage发送到插件
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

  console.log('[Hook] Console拦截器已加载');
})();`,

    'fetch': `// Fetch/XHR请求拦截
(function() {
  // Hook Fetch
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    console.log('[Fetch Hook] 请求URL:', args[0]);
    console.log('[Fetch Hook] 请求配置:', args[1]);
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
    console.log('[XHR Hook] 请求方法:', this._hookMethod);
    console.log('[XHR Hook] 请求URL:', this._hookUrl);
    console.log('[XHR Hook] 请求体:', body);
    return originalXHRSend.call(this, body);
  };

  console.log('[Hook] 请求拦截器已加载');
})();`,

    'cookie': `// Cookie操作监控
(function() {
  try {
    const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');

    if (cookieDescriptor) {
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
    }

    // 监控localStorage
    const originalSetItem = Storage.prototype.setItem;
    const originalGetItem = Storage.prototype.getItem;
    const originalRemoveItem = Storage.prototype.removeItem;

    Storage.prototype.setItem = function(key, value) {
      console.log('[Storage Set] 键:', key, '值:', value);
      originalSetItem.call(this, key, value);
    };

    Storage.prototype.getItem = function(key) {
      const value = originalGetItem.call(this, key);
      if (value) console.log('[Storage Get] 键:', key, '值:', value);
      return value;
    };

    Storage.prototype.removeItem = function(key) {
      console.log('[Storage Remove] 键:', key);
      originalRemoveItem.call(this, key);
    };

    console.log('[Hook] Cookie/Storage监控已加载');
  } catch(e) {
    console.error('[Hook] 监控加载失败:', e);
  }
})();`,

    'debugger': `// 绕过debugger反调试
(function() {
  // 方法1: 重写debugger语句
  window.__defineGetter__('debugger', function() {});

  // 方法2: 阻止debugger的执行
  const originalEval = window.eval;
  window.eval = function(code) {
    if (code && code.toString().includes('debugger')) {
      console.log('[Anti-Debug] 拦截debugger语句');
      return;
    }
    return originalEval.call(this, code);
  };

  // 方法3: 定时清空debugger相关的定时器
  const originalSetInterval = window.setInterval;
  window.setInterval = function(fn, time) {
    if (fn.toString().includes('debugger')) {
      console.log('[Anti-Debug] 拦截debugger定时器');
      return null;
    }
    return originalSetInterval.call(this, fn, time);
  };

  console.log('[Hook] 反Debugger已加载');
})();`,
  }

  return templates[type] || ''
}

// 应用模板
const applyTemplate = (type: string) => {
  const template = getJsTemplate(type)
  if (template) {
    dynamicJsCode.value = template
    validateJsCode(template)
    Message.success('模板已应用')
  }
}

// 应用自定义模板
const applyCustomTemplate = (index: number) => {
  if (!Array.isArray(customTemplates.value)) {
    Message.warning('模板数据异常')
    return
  }

  const template = customTemplates.value[index]
  if (template) {
    dynamicJsCode.value = template.code
    editingTemplateIndex.value = -1
    validateJsCode(template.code)
    Message.success(`已应用模板: ${template.name}`)
  }
}

// 打开模板管理器
const openTemplateManager = () => {
  showTemplateManager.value = true
}

// 关闭模板管理器
const closeTemplateManager = () => {
  showTemplateManager.value = false
  newTemplateName.value = ''
  editingTemplateIndex.value = -1
}

// 添加新模板
const addTemplate = () => {
  const name = newTemplateName.value.trim()

  if (!name) {
    Message.warning('请输入模板名称')
    return
  }

  // 确保是数组
  if (!Array.isArray(customTemplates.value)) {
    customTemplates.value = []
  }

  // 检查是否重名
  const exists = customTemplates.value.some(t => t.name === name)
  if (exists) {
    Message.error('模板名称已存在，请使用其他名称')
    return
  }

  // 创建一个空模板
  customTemplates.value.push({
    name: name,
    code: `// ${name}\n// 在此编写你的自定义 Hook 代码\n\n(function() {\n  console.log('[${name}] 已加载');\n})();`,
  })

  Message.success('模板创建成功')
  newTemplateName.value = ''
  saveCustomTemplates()
}

// 删除模板
const deleteTemplate = (index: number) => {
  if (!Array.isArray(customTemplates.value)) return

  const template = customTemplates.value[index]
  if (!template) return

  const confirmed = confirm(`确定要删除模板"${template.name}"吗？此操作不可恢复。`)

  if (confirmed) {
    customTemplates.value.splice(index, 1)

    // 如果正在编辑这个模板，清除编辑状态
    if (editingTemplateIndex.value === index) {
      editingTemplateIndex.value = -1
      dynamicJsCode.value = ''
    } else if (editingTemplateIndex.value > index) {
      // 如果删除的是前面的模板，调整编辑索引
      editingTemplateIndex.value--
    }

    saveCustomTemplates()
    Message.success('模板已删除')
  }
}

// 编辑模板
const editTemplate = (index: number) => {
  if (!Array.isArray(customTemplates.value)) return

  const template = customTemplates.value[index]
  if (!template) return

  dynamicJsCode.value = template.code
  editingTemplateIndex.value = index
  validateJsCode(template.code)

  // 关闭模板管理器
  showTemplateManager.value = false

  Message.info({
    content: `正在编辑: ${template.name}`,
    duration: 2000,
  })
}

// 保存当前代码到模板
const saveToTemplate = () => {
  const code = dynamicJsCode.value.trim()

  if (!code) {
    Message.warning('代码不能为空')
    return
  }

  if (!validateJsCode(code)) {
    Message.error('代码存在语法错误，请修正后再保存')
    return
  }

  // 确保是数组
  if (!Array.isArray(customTemplates.value)) {
    customTemplates.value = []
  }

  if (editingTemplateIndex.value >= 0 && customTemplates.value[editingTemplateIndex.value]) {
    // 更新现有模板
    const template = customTemplates.value[editingTemplateIndex.value]
    template.code = code
    saveCustomTemplates()
    Message.success(`模板"${template.name}"已更新`)
    editingTemplateIndex.value = -1
  } else {
    // 创建新模板
    const name = prompt('请输入模板名称：')
    if (!name || !name.trim()) {
      return
    }

    const trimmedName = name.trim()

    // 检查是否重名
    const exists = customTemplates.value.some(t => t.name === trimmedName)
    if (exists) {
      Message.error('模板名称已存在，请使用其他名称')
      return
    }

    customTemplates.value.push({
      name: trimmedName,
      code: code,
    })

    saveCustomTemplates()
    Message.success('模板保存成功')
  }
}

// 保存自定义模板到storage
const saveCustomTemplates = () => {
  // 确保是数组
  if (!Array.isArray(customTemplates.value)) {
    customTemplates.value = []
  }

  console.log('保存模板，数量:', customTemplates.value.length)

  chrome.storage.sync.set({ customTemplates: customTemplates.value }, () => {
    if (chrome.runtime.lastError) {
      console.error('保存失败:', chrome.runtime.lastError)
      Message.error('保存失败: ' + chrome.runtime.lastError.message)
    } else {
      console.log('保存成功')
    }
  })
}

// 注入代码到当前页面（测试用）
const injectToCurrentPage = async () => {
  if (!dynamicJsCode.value.trim()) {
    Message.warning('请先编写代码')
    return
  }

  if (!validateJsCode(dynamicJsCode.value)) {
    Message.error('代码存在语法错误')
    return
  }

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: 'INJECT_JS_CODE',
        payload: {
          code: dynamicJsCode.value,
        },
      }, (response) => {
        if (chrome.runtime.lastError) {
          Message.error('注入失败，请刷新页面后重试')
        } else if (response && response.success) {
          Message.success('代码注入成功')
        }
      })
    }
  } catch (error) {
    console.error('注入失败:', error)
    Message.error('注入失败')
  }
}

// 复制代码到剪贴板
const copyToClipboard = async () => {
  if (dynamicJsCode.value) {
    try {
      await navigator.clipboard.writeText(dynamicJsCode.value)
      Message.success('已复制到剪贴板')
    } catch (error) {
      console.error('复制失败:', error)
      Message.error('复制失败')
    }
  }
}

onMounted(() => {
  chrome.storage.sync.get([
    'spiderSwitch', 'hookJson', 'hookInput', 'hookUrl', 'hookXhr',
    'hookCookie', 'hookType', 'hookDebug', 'hookJJM',
    'dynamicJsEnabled', 'dynamicJsCode', 'customTemplates',
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

    // 关键修复：确保 customTemplates 始终是数组
    if (Array.isArray(result.customTemplates)) {
      customTemplates.value = result.customTemplates
    } else {
      customTemplates.value = []
      console.log('初始化 customTemplates 为空数组')
    }

    console.log('加载的模板数量:', customTemplates.value.length)

    if (dynamicJsCode.value && dynamicJsEnabled.value) {
      validateJsCode(dynamicJsCode.value)
    }
  })
})
</script>

<template>
  <main>
    <div class="popup-container">
      <div class="header">
        <div class="header-left">
          <div class="title">Spider Crawl Plug</div>
          <div class="subtitle">网络抓包与Hook工具</div>
        </div>
        <div class="">
          <a-switch type="round" v-model:model-value="spiderSwitch" size="large" />

        </div>

      </div>

      <div class="content">
        <a-collapse :default-active-key="['1', '2']" :bordered="false">
          <a-collapse-item header="⚙️ HOOK 配置" key="1">
            <div class="config-grid">
              <a-button type="primary" long @click="openBackground">
                <template #icon>
                  <icon-launch />
                </template>
                打开抓包中心
              </a-button>
              <a-input
                v-model:model-value="hookInput"
                placeholder="输入 Hook 关键字..."
                allow-clear
                size="medium"
              >
                <template #prefix>
                  <icon-search />
                </template>
              </a-input>

              <div class="select-wrapper">
                <label class="field-label">注入时机</label>
                <a-select v-model:model-value="hookType" size="medium">
                  <a-option value="document start">文档开始渲染时</a-option>
                  <a-option value="document end">文档渲染完成后</a-option>
                </a-select>
              </div>

              <div class="switch-grid">
                <div class="switch-item">
                  <a-switch type="round" v-model:model-value="hookJson" size="small" />
                  <span>JSON Hook</span>
                </div>
                <div class="switch-item">
                  <a-switch type="round" v-model:model-value="hookUrl" size="small" />
                  <span>URL 编解码</span>
                </div>
                <div class="switch-item">
                  <a-switch type="round" v-model:model-value="hookXhr" size="small" />
                  <span>XHR/Fetch</span>
                </div>
                <div class="switch-item">
                  <a-switch type="round" v-model:model-value="hookCookie" size="small" />
                  <span>Cookie 监控</span>
                </div>
                <div class="switch-item">
                  <a-switch type="round" v-model:model-value="hookJJM" size="small" />
                  <span>加解密 Hook</span>
                </div>
                <div class="switch-item">
                  <a-switch type="round" v-model:model-value="hookDebug" size="small" />
                  <span>反 Debugger</span>
                </div>
              </div>
            </div>
          </a-collapse-item>

          <!-- 动态JS代码注入面板 -->
          <a-collapse-item header="📝 自定义 JS 注入" key="2">
            <div class="js-injector-wrapper">
              <!-- 顶部工具栏 -->
              <div class="injector-toolbar">
                <div class="toolbar-left">
                  <a-switch type="round" v-model:model-value="dynamicJsEnabled" />
                  <span class="switch-label">启用注入</span>
                </div>
                <div class="toolbar-right" v-if="dynamicJsCode">
                  <a-tooltip content="清空代码">
                    <a-button shape="circle" size="small" @click="clearDynamicJs">
                      <template #icon>
                        <icon-delete />
                      </template>
                    </a-button>
                  </a-tooltip>
                  <a-tooltip content="复制代码">
                    <a-button shape="circle" size="small" @click="copyToClipboard">
                      <template #icon>
                        <icon-copy />
                      </template>
                    </a-button>
                  </a-tooltip>
                </div>
              </div>

              <!-- 内容区域（仅在启用时显示） -->
              <div v-if="dynamicJsEnabled" class="injector-content">
                <!-- 模板选择区 -->
                <div class="templates-area">
                  <div class="area-header">
                    <div class="header-left">
                      <icon-apps class="header-icon" />
                      <span class="header-title">快速模板</span>
                    </div>
                  </div>

                  <!-- 内置模板 -->
                  <div class="template-grid">
                    <div
                      class="template-card builtin"
                      @click="applyTemplate('console')"
                    >
                      <div class="card-icon">🖥️</div>
                      <div class="card-title">Console</div>
                      <div class="card-desc">控制台拦截</div>
                    </div>

                    <div
                      class="template-card builtin"
                      @click="applyTemplate('fetch')"
                    >
                      <div class="card-icon">🌐</div>
                      <div class="card-title">请求拦截</div>
                      <div class="card-desc">Fetch/XHR</div>
                    </div>

                    <div
                      class="template-card builtin"
                      @click="applyTemplate('cookie')"
                    >
                      <div class="card-icon">🍪</div>
                      <div class="card-title">Cookie</div>
                      <div class="card-desc">存储监控</div>
                    </div>

                    <div
                      class="template-card builtin"
                      @click="applyTemplate('debugger')"
                    >
                      <div class="card-icon">🛡️</div>
                      <div class="card-title">反调试</div>
                      <div class="card-desc">绕过保护</div>
                    </div>
                  </div>

                  <!-- 自定义模板 -->
                  <div v-if="Array.isArray(customTemplates) && customTemplates.length > 0" class="custom-section">
                    <div class="divider">
                      <span>自定义模板</span>
                    </div>
                    <div class="template-cards">
                      <div
                        v-for="(tpl, idx) in customTemplates"
                        :key="idx"
                        class="t-card custom"
                        @click="applyCustomTemplate(idx)"
                      >
                        <div class="t-icon">⭐</div>
                        <div class="t-name">{{ tpl.name }}</div>
                        <div class="t-actions" @click.stop>
                          <a-button shape="circle" size="mini" type="text" @click="editTemplate(idx)">
                            <template #icon>
                              <icon-edit />
                            </template>
                          </a-button>
                          <a-popconfirm content="确定删除？" @ok="deleteTemplate(idx)">
                            <a-button shape="circle" size="mini" type="text" status="danger">
                              <template #icon>
                                <icon-delete />
                              </template>
                            </a-button>
                          </a-popconfirm>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- 代码编辑器 -->
                <div class="editor-area">
                  <div class="editor-header">
                    <div class="header-info">
                      <icon-code class="editor-icon" />
                      <span class="editor-title">JavaScript 代码</span>
                    </div>
                    <div class="header-status">
                      <span v-if="editingTemplateIndex >= 0" class="editing-indicator">
                        <icon-edit />
                        编辑: {{ customTemplates[editingTemplateIndex]?.name }}
                      </span>
                      <span class="auto-save-hint">
                        <icon-check-circle />
                        自动保存
                      </span>
                    </div>
                  </div>

                  <div class="editor-container">
                    <textarea
                      v-model="dynamicJsCode"
                      class="code-editor"
                      placeholder="// 在此编写要注入到页面的 JavaScript 代码&#10;// 示例：Hook 全局函数&#10;(function() {&#10;  if (window.targetFunction) {&#10;    const original = window.targetFunction;&#10;    window.targetFunction = function(...args) {&#10;      console.log('[Hook]', args);&#10;      return original.apply(this, args);&#10;    };&#10;  }&#10;})();"
                      spellcheck="false"
                    ></textarea>
                  </div>

                  <!-- 验证提示 -->
                  <transition name="fade">
                    <div v-if="jsValidationError" class="validation-message error">
                      <icon-close-circle class="message-icon" />
                      <span>{{ jsValidationError }}</span>
                    </div>
                  </transition>
                  <transition name="fade">
                    <div class="validation-message success">
                      <icon-check-circle class="message-icon" />
                      <span>语法检查通过 • 刷新页面后自动生效</span>
                    </div>
                  </transition>
                </div>
              </div>

              <!-- 未启用时的提示 -->
              <div v-else class="disabled-hint">
                <icon-info-circle class="hint-icon" />
                <span>开启开关以启用自定义 JS 注入功能</span>
              </div>
            </div>
          </a-collapse-item>
        </a-collapse>

        <div class="footer">

        </div>
      </div>
    </div>

    <!-- 模板管理对话框 -->
    <a-modal
      v-model:visible="showTemplateManager"
      title="📦 模板管理"
      width="350px"
      :footer="false"
      @cancel="closeTemplateManager"
      unmountOnClose
    >
      <div class="template-manager">
        <!-- 添加新模板 -->
        <div class="add-template-form">
          <a-input
            v-model="newTemplateName"
            placeholder="输入新模板名称..."
            @press-enter="addTemplate"
            allow-clear
          >
            <template #suffix>
              <a-button type="primary" size="small" @click="addTemplate">
                <template #icon>
                  <icon-plus />
                </template>
                添加
              </a-button>
            </template>
          </a-input>
        </div>

        <!-- 模板列表 -->
        <div v-if="customTemplates.length === 0" class="empty-state">
          <div class="empty-icon">📭</div>
          <div class="empty-text">暂无自定义模板</div>
          <div class="empty-hint">在上方输入名称并点击添加</div>
        </div>

        <div v-else-if="Array.isArray(customTemplates)" class="tpl-list">
          <div class="list-count">我的模板 ({{ customTemplates.length }})</div>
          <div
            v-for="(tpl, idx) in customTemplates"
            :key="idx"
            class="tpl-row"
          >
            <div class="row-main">
              <div class="tpl-avatar">⭐</div>
              <div class="tpl-info">
                <div class="tpl-name">{{ tpl.name }}</div>
                <div class="tpl-code">{{ tpl.code.substring(0, 80) }}{{ tpl.code.length > 80 ? '...' : '' }}</div>
              </div>
            </div>
            <div class="row-btns">
              <a-tooltip content="应用">
                <a-button shape="circle" size="mini" @click="applyCustomTemplate(idx)">
                  <template #icon>
                    <icon-play-arrow />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="编辑">
                <a-button shape="circle" size="mini" status="warning" @click="editTemplate(idx)">
                  <template #icon>
                    <icon-edit />
                  </template>
                </a-button>
              </a-tooltip>
              <a-popconfirm content="确定删除？" @ok="deleteTemplate(idx)">
                <a-tooltip content="删除">
                  <a-button shape="circle" size="mini" status="danger">
                    <template #icon>
                      <icon-delete />
                    </template>
                  </a-button>
                </a-tooltip>
              </a-popconfirm>
            </div>
          </div>
        </div>

        <div v-else class="error-state">
          <div class="error-icon">⚠️</div>
          <div class="error-text">模板数据异常</div>
        </div>
      </div>
    </a-modal>
  </main>
</template>

<style scoped>
@import "tailwindcss";

/* 主容器 - 渐变背景 */
.popup-container {
  width: 480px;
  min-height: 600px;
  max-height: 700px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.popup-container::-webkit-scrollbar {
  display: none;
}

/* 头部区域 */
.header {
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  flex: 1;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

/* 内容区域 */
.content {
  padding: 1px;
  background: rgba(255, 255, 255, 0.95);
  margin: 2px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* 配置网格 */
.config-grid {
  display: grid;
  gap: 12px;
}

.field-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.select-wrapper {
  margin-top: 4px;
}

.switch-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 8px;
}

.switch-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f9fafb;
  border-radius: 8px;
  transition: all 0.2s;
}

.switch-item:hover {
  background: #f3f4f6;
  transform: translateY(-1px);
}

.switch-item span {
  font-size: 13px;
  color: #4b5563;
  font-weight: 500;
}

/* JS注入器 */
.js-injector-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.injector-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
  color: white;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.switch-label {
  font-size: 14px;
  font-weight: 600;
}

.toolbar-right {
  display: flex;
  gap: 8px;
}

/* 内容区域 */
.injector-content {
  background: #fafbfc;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 16px;
}

/* 模板区域 */
.templates-area {
  margin-bottom: 20px;
}

.area-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-icon {
  font-size: 16px;
  color: #667eea;
}

.header-title {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 12px;
}

.template-card {
  position: relative;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  background: white;
}

.template-card.builtin {
  border-color: #e5e7eb;
}

.template-card.builtin:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
}

.template-card.custom {
  border-color: #10b981;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}

.template-card.custom:hover {
  border-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
}

.card-icon {
  font-size: 24px;
  margin-bottom: 6px;
}

.card-title {
  font-size: 13px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2px;
}

.card-desc {
  font-size: 11px;
  color: #6b7280;
}

.card-actions {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}

.template-card.custom:hover .card-actions {
  opacity: 1;
}

/* 自定义模板分区 */
.custom-templates-section {
  margin-top: 16px;
}

.section-divider {
  display: flex;
  align-items: center;
  margin: 16px 0 12px;
}

.section-divider::before,
.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, #e5e7eb, transparent);
}

.divider-text {
  padding: 0 12px;
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
}

/* 编辑器区域 */
.editor-area {
  background: white;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.editor-icon {
  font-size: 16px;
  color: #667eea;
}

.editor-title {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.header-status {
  display: flex;
  align-items: center;
  gap: 12px;
}

.editing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #f59e0b;
  background: #fef3c7;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;
}

.auto-save-hint {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #10b981;
  font-weight: 500;
}

.editor-container {
  position: relative;
}

.code-editor {
  width: 100%;
  min-height: 240px;
  max-height: 400px;
  padding: 14px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 12px;
  line-height: 1.7;
  color: #1f2937;
  background: #ffffff;
  border: none;
  resize: vertical;
  tab-size: 2;
}

.code-editor:focus {
  outline: none;
  background: #fafbfc;
}

.code-editor::placeholder {
  color: #9ca3af;
  font-style: italic;
}

/* 验证消息 */
.validation-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  margin-top: 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.validation-message.error {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.validation-message.success {
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}

.message-icon {
  font-size: 16px;
  flex-shrink: 0;
}

/* 禁用提示 */
.disabled-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px 20px;
  background: #f9fafb;
  border: 1px dashed #d1d5db;
  border-radius: 0 0 12px 12px;
  color: #9ca3af;
  font-size: 13px;
}

.hint-icon {
  font-size: 20px;
}

/* Fade 过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Arco Design 覆盖 */
:deep(.arco-btn-circle) {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
}

:deep(.arco-btn-circle:hover) {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: scale(1.1);
}

:deep(.arco-btn[type="text"]) {
  padding: 4px !important;
}

:deep(.arco-tooltip) {
  font-size: 12px;
}
</style>
