chrome.storage.local.get('spiderSwitch', function (result) {
    spiderSwitch = result.spiderSwitch;
    if (spiderSwitch) {
        console.log("------------------欢迎使用SpiderCrawl------------------");
        console.log("------------------正在监听网络请求------------------");
    }
});

