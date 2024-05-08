// 拦截请求
const CD = chrome.devtools;
// Chrome DevTools Extension中不能使用console.log
const log = (...params) =>
    CD.inspectedWindow.eval(`console.log(...${JSON.stringify(params)})`);

var indexedDB =
    window.indexedDB ||
    window.webkitIndexedDB ||
    window.mozIndexedDB ||
    window.msIndexedDB;
if (!indexedDB) {
    log("not support IndexedDB", indexedDB);
} else {
    log("support IndexedDB", indexedDB);
}
const db_version = 1;
let spiderSwitch = null;


chrome.devtools.network.onRequestFinished.addListener(async (...args) => {
    chrome.storage.local.get('spiderSwitch', function (result) {
        spiderSwitch = result.spiderSwitch;
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
            const request = indexedDB.open("myDatabase", db_version);

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
                // log("Data added to IndexedDB", timestamp);
            };

            request.onerror = function (event) {
                log("打开IndexedDB时发生错误:", event.target.errorCode);
            };
        } catch (err) {
            log(err.stack || err.toString());
        }
    } else {
    }
});

