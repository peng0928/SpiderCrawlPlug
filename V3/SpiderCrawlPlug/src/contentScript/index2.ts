// content.js
function hook() {
  const s = document.createElement('script');
  s.src = chrome.runtime.getURL('src/contentScript/inject2.ts');
  s.onload = () => s.remove();
  (document.head || document.documentElement).appendChild(s);
}


// 1. 注入一个隐藏节点，仅做数据容器
const div = document.createElement('div');
div.id = '_cs_bridge_2';
div.style.display = 'none';
document.documentElement.appendChild(div);

// 2. 写一个工具函数：content → 页面实时同步
function pushToPage(obj) {
  // 以 JSON 字符串形式塞到节点属性里
  div.setAttribute('data-payload2', JSON.stringify(obj));
}

// 3. 立刻写一条
chrome.storage.sync.get(['spiderSwitch', 'hookJson', 'hookInput', 'hookUrl', 'hookXhr', 'hookCookie', 'hookType', 'hookDebug', 'hookJJM'], (result) => {
  pushToPage({
    spiderSwitch: result.spiderSwitch,
    hookJson: result.hookJson,
    hookInput: result.hookInput,
    hookUrl: result.hookUrl,
    hookXhr: result.hookXhr,
    hookCookie: result.hookCookie,
    hookType: result.hookType,
    hookDebug: result.hookDebug,
    hookJJM: result.hookJJM,

  });
  if (result.hookType === 'document end') {
    hook();
  }
})

// 通过postMessage注入动态代码（避免CSP）
function injectDynamicCode(code: string) {
  window.postMessage({
    type: 'INJECT_CODE',
    code: code,
  }, '*')
}

// 监听来自popup的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'INJECT_JS_CODE') {
    // 通过postMessage注入代码
    injectDynamicCode(message.payload.code)
    sendResponse({ success: true })
    return true
  }
  if (message.type === 'UPDATE_HOOK_CONFIG') {
    if (message.payload.dynamicJsEnabled && message.payload.dynamicJsCode) {
      injectDynamicCode(message.payload.dynamicJsCode)
    }
    sendResponse({ success: true })
    return true
  }
  return true
})

// 监听存储变化，实时更新配置
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    const newConfig: any = {}
    if (changes.dynamicJsEnabled) {
      newConfig.dynamicJsEnabled = changes.dynamicJsEnabled.newValue
    }
    if (changes.dynamicJsCode) {
      newConfig.dynamicJsCode = changes.dynamicJsCode.newValue
    }
    if (Object.keys(newConfig).length > 0) {
      pushToPage(newConfig)
      if (newConfig.dynamicJsEnabled && newConfig.dynamicJsCode) {
        injectDynamicCode(newConfig.dynamicJsCode)
      }
    }
  }
})

