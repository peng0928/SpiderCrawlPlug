console.log("background is running");chrome.runtime.onMessage.addListener(o=>{o.type==="COUNT"&&console.log("background has received a message from popup, and count is ",o?.count)});
