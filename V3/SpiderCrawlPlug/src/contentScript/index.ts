// content.js
// 注入外部脚本文件而不是内联代码
function hook() {
  const s = document.createElement('script')
  s.src = chrome.runtime.getURL('src/contentScript/inject.ts') // 改为.js文件
  s.onload = () => s.remove();
  (document.head || document.documentElement).appendChild(s)
}

// 1. 注入一个隐藏节点，仅做数据容器
const div = document.createElement('div')
div.id = '_cs_bridge_'
div.style.display = 'none'
document.documentElement.appendChild(div)

// 2. 写一个工具函数：content → 页面实时同步
function pushToPage(obj: any) {
  div.setAttribute('data-payload', JSON.stringify(obj))
}

// 3. 传递配置到页面
chrome.storage.sync.get(['spiderSwitch', 'hookJson', 'hookInput', 'hookUrl', 'hookXhr', 'hookCookie', 'hookType', 'hookDebug', 'hookJJM', 'dynamicJsEnabled', 'dynamicJsCode'], (result) => {
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
    dynamicJsEnabled: result.dynamicJsEnabled,
    dynamicJsCode: result.dynamicJsCode,
  })
  // 注入hook脚本
  hook()
  // 如果有动态JS代码，也注入

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
    // 通知inject.ts更新配置并动态注入
    window.postMessage({
      type: 'UPDATE_HOOK_CONFIG',
      payload: message.payload
    }, '*')
    sendResponse({ success: true })
    return true
  }
  return true
})

// 监听存储变化，实时更新配置
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    const newConfig: any = {}

    // 收集所有变化的配置项
    if (changes.spiderSwitch) {
      newConfig.spiderSwitch = changes.spiderSwitch.newValue
    }
    if (changes.hookJson) {
      newConfig.hookJson = changes.hookJson.newValue
    }
    if (changes.hookInput) {
      newConfig.hookInput = changes.hookInput.newValue
    }
    if (changes.hookUrl) {
      newConfig.hookUrl = changes.hookUrl.newValue
    }
    if (changes.hookXhr) {
      newConfig.hookXhr = changes.hookXhr.newValue
    }
    if (changes.hookCookie) {
      newConfig.hookCookie = changes.hookCookie.newValue
    }
    if (changes.hookDebug) {
      newConfig.hookDebug = changes.hookDebug.newValue
    }
    if (changes.hookJJM) {
      newConfig.hookJJM = changes.hookJJM.newValue
    }
    if (changes.dynamicJsEnabled) {
      newConfig.dynamicJsEnabled = changes.dynamicJsEnabled.newValue
    }
    if (changes.dynamicJsCode) {
      newConfig.dynamicJsCode = changes.dynamicJsCode.newValue
    }

    // 如果有配置变化，通知inject.ts动态更新
    if (Object.keys(newConfig).length > 0) {
      pushToPage(newConfig)
      window.postMessage({
        type: 'UPDATE_HOOK_CONFIG',
        payload: newConfig
      }, '*')
    }
  }
})

