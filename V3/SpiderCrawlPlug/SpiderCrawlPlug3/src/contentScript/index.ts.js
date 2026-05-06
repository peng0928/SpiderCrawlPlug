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
  if (result.hookType === "document start") {
    hook();
  }
});
