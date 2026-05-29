function hook() {
  const s = document.createElement("script");
  s.src = chrome.runtime.getURL("src/contentScript/inject.ts");
  s.onload = () => s.remove();
  (document.head || document.documentElement).appendChild(s);
}
const div = document.createElement("div");
div.id = "_cs_bridge_";
div.style.display = "none";
document.documentElement.appendChild(div);
function pushToPage(obj) {
  div.setAttribute("data-payload", JSON.stringify(obj));
}
chrome.storage.sync.get(["spiderSwitch", "hookJson", "hookInput", "hookUrl", "hookXhr", "hookCookie", "hookType", "hookDebug", "hookJJM", "dynamicJsEnabled", "dynamicJsCode"], (result) => {
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
    dynamicJsCode: result.dynamicJsCode
  });
  hook();
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
    window.postMessage({
      type: "UPDATE_HOOK_CONFIG",
      payload: message.payload
    }, "*");
    sendResponse({ success: true });
    return true;
  }
  return true;
});
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync") {
    const newConfig = {};
    if (changes.spiderSwitch) {
      newConfig.spiderSwitch = changes.spiderSwitch.newValue;
    }
    if (changes.hookJson) {
      newConfig.hookJson = changes.hookJson.newValue;
    }
    if (changes.hookInput) {
      newConfig.hookInput = changes.hookInput.newValue;
    }
    if (changes.hookUrl) {
      newConfig.hookUrl = changes.hookUrl.newValue;
    }
    if (changes.hookXhr) {
      newConfig.hookXhr = changes.hookXhr.newValue;
    }
    if (changes.hookCookie) {
      newConfig.hookCookie = changes.hookCookie.newValue;
    }
    if (changes.hookDebug) {
      newConfig.hookDebug = changes.hookDebug.newValue;
    }
    if (changes.hookJJM) {
      newConfig.hookJJM = changes.hookJJM.newValue;
    }
    if (changes.dynamicJsEnabled) {
      newConfig.dynamicJsEnabled = changes.dynamicJsEnabled.newValue;
    }
    if (changes.dynamicJsCode) {
      newConfig.dynamicJsCode = changes.dynamicJsCode.newValue;
    }
    if (Object.keys(newConfig).length > 0) {
      pushToPage(newConfig);
      window.postMessage({
        type: "UPDATE_HOOK_CONFIG",
        payload: newConfig
      }, "*");
    }
  }
});
