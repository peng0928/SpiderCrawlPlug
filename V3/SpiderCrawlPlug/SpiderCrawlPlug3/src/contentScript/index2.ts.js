function hook() {
  const s = document.createElement("script");
  s.src = chrome.runtime.getURL("src/contentScript/inject2.ts");
  s.onload = () => s.remove();
  (document.head || document.documentElement).appendChild(s);
}
const div = document.createElement("div");
div.id = "_cs_bridge_2";
div.style.display = "none";
document.documentElement.appendChild(div);
function pushToPage(obj) {
  div.setAttribute("data-payload2", JSON.stringify(obj));
}
chrome.storage.sync.get(["spiderSwitch", "hookJson", "hookInput", "hookUrl", "hookXhr", "hookCookie", "hookType", "hookDebug", "hookJJM"], (result) => {
  pushToPage({
    spiderSwitch: result.spiderSwitch,
    hookJson: result.hookJson,
    hookInput: result.hookInput,
    hookUrl: result.hookUrl,
    hookXhr: result.hookXhr,
    hookCookie: result.hookCookie,
    hookType: result.hookType,
    hookDebug: result.hookDebug,
    hookJJM: result.hookJJM
  });
  if (result.hookType === "document end") {
    hook();
  }
});
function injectDynamicCode(code) {
  window.postMessage({
    type: "INJECT_CODE",
    code
  }, "*");
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "INJECT_JS_CODE") {
    injectDynamicCode(message.payload.code);
    sendResponse({ success: true });
    return true;
  }
  if (message.type === "UPDATE_HOOK_CONFIG") {
    if (message.payload.dynamicJsEnabled && message.payload.dynamicJsCode) {
      injectDynamicCode(message.payload.dynamicJsCode);
    }
    sendResponse({ success: true });
    return true;
  }
  return true;
});
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync") {
    const newConfig = {};
    if (changes.dynamicJsEnabled) {
      newConfig.dynamicJsEnabled = changes.dynamicJsEnabled.newValue;
    }
    if (changes.dynamicJsCode) {
      newConfig.dynamicJsCode = changes.dynamicJsCode.newValue;
    }
    if (Object.keys(newConfig).length > 0) {
      pushToPage(newConfig);
      if (newConfig.dynamicJsEnabled && newConfig.dynamicJsCode) {
        injectDynamicCode(newConfig.dynamicJsCode);
      }
    }
  }
});
