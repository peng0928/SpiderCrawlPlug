// content.js
function hook() {
  const s = document.createElement('script');
  s.src = chrome.runtime.getURL('src/contentScript/inject.ts');

  s.onload = () => s.remove();
  (document.head || document.documentElement).appendChild(s);
}

// 1. 注入一个隐藏节点，仅做数据容器
const div = document.createElement('div');
div.id = '_cs_bridge_';
div.style.display = 'none';
document.documentElement.appendChild(div);

// 2. 写一个工具函数：content → 页面实时同步
function pushToPage(obj) {
  // 以 JSON 字符串形式塞到节点属性里
  div.setAttribute('data-payload', JSON.stringify(obj));
}

// 3. 立刻写一条
chrome.storage.sync.get(['spiderSwitch', 'hookJson', 'hookInput', 'hookUrl', 'hookXhr', 'hookCookie', 'hookType', 'hookDebug'], (result) => {
  pushToPage({
    spiderSwitch: result.spiderSwitch,
    hookJson: result.hookJson,
    hookInput: result.hookInput,
    hookUrl: result.hookUrl,
    hookXhr: result.hookXhr,
    hookCookie: result.hookCookie,
    hookType: result.hookType,
    hookDebug: result.hookDebug,
  });
  if (result.hookType === 'document start') {
    // 确保DOM加载后注入
    hook()
  }
})

