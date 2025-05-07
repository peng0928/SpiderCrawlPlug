// 拦截请求
const CD = chrome.devtools;
// Chrome DevTools Extension中不能使用console.log
const log = (...params) =>
    CD.inspectedWindow.eval(`console.log(...${JSON.stringify(params)});`);
const debug = () =>  CD.inspectedWindow.eval(`debugger;`);
let db_version = 2;
let db_name = 'SpiderCrawlData';
let spiderSwitch = null;
let requestHook = null;
log('SpiderCrawl db_version:', db_version, 'db_name:', db_name)

chrome.devtools.network.onRequestFinished.addListener(async (...args) => {
    chrome.storage.local.get(['spiderSwitch', 'hookRequest'], function (result) {
        spiderSwitch = result.spiderSwitch;
        requestHook = result.hookRequest;
    });
    if (spiderSwitch) {
        try {
            const [
                {
                    // 请求的类型，查询参数，以及url
                    request: {method, queryString, url, postData},
                    response: {bodySize, status, header},
                    getContent,
                },
            ] = args;


            var timestamp = (new Date().getTime() + 8 * 60 * 60 * 1000).toString();
            const content = await new Promise((res, rej) => getContent(res));
            const data = {
                ...args[0],
                content: content,
            };
            const query = {...data, timestamp: timestamp};
            // 打开IndexedDB
            const request = indexedDB.open(db_name, db_version);
            request.onupgradeneeded = function (event) {
                const db = event.target.result;
                if (!db.objectStoreNames.contains("myDataStore")) {
                    db.createObjectStore("myDataStore", {
                        keyPath: "id",
                        autoIncrement: true,
                    });
                }
            };

            request.onsuccess = function (event) {
                const db = event.target.result;
                const transaction = db.transaction("myDataStore", "readwrite");
                const store = transaction.objectStore("myDataStore");
                store.add(query);
            };

            request.onerror = function (event) {
                log("SpiderCrawl onerror", event.target.errorCode);
            };
        } catch (err) {
            log(err.stack || err.toString());
        }
    }
    if (requestHook) {
        try {
            const [
                {
                    // 请求的类型，查询参数，以及url
                    request: {method, queryString, url, postData},
                    response: {bodySize, status, header},
                    getContent,
                },
            ] = args;


            var timestamp = (new Date().getTime() + 8 * 60 * 60 * 1000).toString();
            const content = await new Promise((res, rej) => getContent(res));
            const data = {
                ...args[0],
                content: content,
            };
            const query = {...data, timestamp: timestamp};
            log(`[Request] ${method} ${url}`,'\n[params]', queryString,'\n[data]', postData)
            log("[Response]", status, url, data)
        } catch (err) {
            log(err.stack || err.toString());
        }
    }
});

