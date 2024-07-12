const {createApp, ref, onMounted, computed} = Vue
const {createVuetify} = Vuetify
const vuetify = createVuetify()

function get_time(timestamp) {
    // 假设我们有一个时间戳
    timestamp = Number(timestamp);
    // 使用 toISOString 方法转换为 ISO 格式的字符串
    var isoString = new Date(timestamp).toISOString();

    // 截取我们需要的部分，去掉 'Z' 表示的 UTC 时区
    var formattedDate = isoString.slice(10, -5).replace(/T/, " ");

    // 输出结果
    return formattedDate;
}

function getColor(t) {
    if (!t) {
        t = {}
    }
    t = t.type
    const colorDict = {
        "image": "blue",
        "stylesheet": "deep-purple-darken-1",
        "script": "red",
    }
    return colorDict[t] || "green";
}

function formatTime(item) {
    timeNow = item.time || 0
    timeString = timeNow > 1000 ? String((timeNow / 1000).toFixed(2)) + 's' : String(timeNow) + 'ms';
    return timeString;
}

function getIcon(e) {
    if (!e) {
        e = {}
    }
    e = e.type
    const codeStr = String(e);
    const IconDict = {
        "document": "mdi mdi-file-document",
        "stylesheet": "mdi mdi-language-css3",
        "image": "mdi mdi-image",
        "font": "mdi mdi-format-size",
        "script": "mdi mdi-script-text",
    }
    Icon = IconDict[codeStr] || 'mdi mdi-file-document';
    return Icon
}

const App = {
    setup() {
        const dbVersion = ref(2);
        const dbName = ref('SpiderCrawlData');
        const tab = ref('NetWork');
        const spiderTab = ref('Header');
        const requestObject = ref({
            header: {},
            payload: {},
            response: {},
            cookie: {},
        });
        const headerIcon = ref({
            "general": true,
            "request": true,
            "response": true,
            "payload": true,
            "reqPayload": true,
            "cookie": true,
            "reqCookie": true,
        });
        const pdfPreviewUrl = ref('');
        const curlPyString = ref('');
        const curlString = ref('');
        const pdfData = ref('');
        const htmlStr = ref('');
        const textLabel = ref(
            {
                a: `请输入字符串...`
            }
        );
        const ToolBoxTab = ref('ToolBoxFormat');
        const FormatValue = ref('Cookie');
        const FormatInput = ref('');
        const FormatOutput = ref('');
        const spiderCheckbox = ref({
            all: {value: true, label: "all"},
            xhr: {value: false, label: "xhr"},
            doc: {value: false, label: "doc"},
            css: {value: false, label: "css"},
            js: {value: false, label: "Js"},
            img: {value: false, label: "Img"},
            media: {value: false, label: "Media"},
            manifest: {value: false, label: "Manifest"},
            ws: {value: false, label: "WS"},
            wasm: {value: false, label: "Wasm"},
            other: {value: false, label: "Other"},
        });
        const search = ref('');
        const db = ref(null);
        const data = ref([]);
        const drawer = ref(true);
        const rail = ref(true);
        const spiderSwitch = ref(false);
        const spiderDialog = ref(false);
        const NetWorkSelectValue = ref([
            "Xhr",
            "Doc",
            "Css",
            "Js",
            "Img",
            "Media",
            "Manifest",
            "WS",
            "Wasm",
            "Other",
        ]);
        const NetWorkSelect = ref([
            "Xhr",
            "Doc",
            "Css",
            "Js",
            "Img",
            "Media",
            "Manifest",
            "WS",
            "Wasm",
            "Other",
        ]);
        const headers = ([
            // 定义你想要展示的列头
            {title: 'start', key: 'start', fixed: true},
            {title: 'code', value: 'code'},
            {title: 'method', value: 'method'},
            {title: 'url', value: 'url', maxWidth: 600,},
            {title: 'time', value: 'time'},
            {title: 'size', value: 'Size'},
            {title: 'type', value: 'type'},
            {title: 'version', value: 'version'},
        ])
        const snackbar = ref(false)
        const snackbar_text = ref('')
        const snackbar_color = ref("success")
        const snackbar_ico = ref("mdi-check-circle")
        const logger = (text, ico = "mdi-check-circle", color = "success") => {
            snackbar_color.value = color;
            snackbar_text.value = text;
            snackbar_ico.value = ico;
            snackbar.value = true;
        }
        const checkBoxDict = {
            xhr: ['fetch', 'xhr'],
            doc: ['document'],
            css: ['font', 'stylesheet'],
            Js: ['script'],
            Img: ['image'],
            Media: ['media'],
            Manifest: ['manifest'],
            WS: ['ws'],
            Wasm: ['wasm'],
            Other: ['other'],
        }
        const checkBoxList = ref([])
        const selected = ref([])
        const typeList = ref([])
        const openDB = async () => {
            NetWorkData.value = [];
            checkBoxList.value = [];
            Object.values(spiderCheckbox.value).forEach(item => {
                    checkBoxValue = item.value
                    checkBoxLabel = item.label
                    if (checkBoxValue) {
                        checkBoxValueList = checkBoxDict[checkBoxLabel] || []
                        checkBoxValueList.forEach(function (value, index) {
                            checkBoxList.value.push(value)
                        })
                    }
                }
            );
            const request = indexedDB.open(dbName.value, dbVersion.value);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains("myDataStore")) {
                    db.createObjectStore("myDataStore", {
                        keyPath: "id",
                        autoIncrement: true,
                    });
                }
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction("myDataStore", "readwrite");
                const store = transaction.objectStore("myDataStore");
                var cursorRequest = null;
                if (1) {
                    cursorRequest = store.openCursor();
                } else {
                    cursorRequest = store.openCursor(null, "prev");
                }
                cursorRequest.onsuccess = function (event) {
                    const cursor = event.target.result;
                    if (cursor) {
                        executeData(cursor)
                        cursor.continue();
                    } else {
                        // 所有记录都已处理完毕
                        console.log("没有更多数据了！");
                        logger('数据加载完成')
                    }

                };

                cursorRequest.onerror = function (event) {
                    console.error("读取数据时发生错误:", event.target.errorCode);
                };
            };

            request.onerror = (event) => {
                console.error('Error opening database:', event.target.error);
            };
        };
        const executeData = (cursor) => {
            var dataItem = {};
            const valueStr = JSON.stringify(cursor.value)
            const id = cursor.value.id;
            const content = cursor.value.content;
            const url = cursor.value.request.url;
            const datetime = get_time(cursor.value.timestamp);
            const timsMS = parseInt(cursor.value.time);
            const resourceType = cursor.value._resourceType;
            const httpVersion = cursor.value.request.httpVersion;
            const status = cursor.value.response.status;
            const method = cursor.value.request.method;
            const bodySize = cursor.value.response.content.size;
            var bodydata = "";
            try {
                bodydata = cursor.value.request.postData.text;

            } catch {
            }
            dataItem = {
                id: id,
                start: datetime,
                code: status,
                method: method,
                url: url,
                time: timsMS,
                Size: bodySize,
                type: resourceType,
                version: httpVersion,
                bodydata: bodydata,
                content: content,
            }
            if (!typeList.value.includes(resourceType)) {
                typeList.value.push(resourceType)
                console.log(typeList)
            }

            spiderCheckboxAll = spiderCheckbox.value.all.value
            const searchString = search.value.trim()
            if (spiderCheckboxAll) {
                if (searchString) {
                    if (valueStr.includes(searchString)) {
                        NetWorkData.value.push(dataItem);
                    }
                } else {
                    NetWorkData.value.push(dataItem);
                }
            } else {
                console.log(resourceType, checkBoxList.value)
                if (checkBoxList.value.includes(resourceType)) {
                    if (searchString) {
                        if (valueStr.includes(searchString)) {
                            NetWorkData.value.push(dataItem);
                        }
                    } else {
                        NetWorkData.value.push(dataItem);
                    }
                }
            }
        };

        const del_one_data = async (pid) => {
            const request = indexedDB.open(dbName.value, dbVersion.value);
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
                const request = store.delete(Number(pid));
                request.onsuccess = function (e) {
                    console.log('Item deleted successfully');
                };

                request.onerror = function (e) {
                    console.error('Delete error:', e);
                };
                transaction.oncomplete = function () {
                    // 可选：关闭数据库连接
                    db.close();
                };
                transaction.onerror = function (e) {
                    console.error('Transaction error:', e);
                };
            };

            request.onerror = function (event) {
                console.error("打开IndexedDB时发生错误:", event.target.errorCode);
            };
        }

        const deleteData = async () => {
            if (selected.value.length > 0) {
                Object.values(selected.value).forEach(item => {
                    del_one_data(item)
                    NetWorkData.value = NetWorkData.value.filter(query => query.id !== item);
                })
                selected.value = []
                // openDB()
            } else {
                const request = indexedDB.open(dbName.value, dbVersion.value);
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
                    const cursorRequest = store.openCursor();

                    cursorRequest.onsuccess = function (event) {
                        const cursor = event.target.result;
                        if (cursor) {
                            // 为当前数据创建一个新的表格行
                            cursor.delete();
                            console.log("记录已删除:", cursor.value);
                            // 继续移动游标到下一个记录
                            cursor.continue();
                        } else {
                            // 所有记录都已处理完毕
                            console.log("没有更多数据了！");
                        }
                    };

                    cursorRequest.onerror = function (event) {
                        console.error("读取数据时发生错误:", event.target.errorCode);
                    };
                };

                request.onerror = function (event) {
                    console.error("打开IndexedDB时发生错误:", event.target.errorCode);
                };
                NetWorkData.value = []
            }

            logger('删除完成', 'mdi mdi-close-circle', 'red')
        };
        const getCrawlStatus = async (db) => {
            chrome.storage.local.get('spiderSwitch', function (result) {
                spiderSwitch.value = result.spiderSwitch;
            });
        };
        const spiderSwitchChange = () => {
            if (spiderSwitch.value) {
                chrome.storage.local.set({'spiderSwitch': false}, function () {
                    spiderSwitch.value = false;
                    logger('Stop', 'mdi mdi-close-circle', 'red')
                });
            } else {
                chrome.storage.local.set({'spiderSwitch': true}, function () {
                    spiderSwitch.value = true;
                    logger('Start')
                });
            }
        }
        const base64ToBlob = (base64, type) => {
            try {
                var binaryString = window.atob(base64);
                const len = binaryString.length;
                const bytes = new Uint8Array(len);

                for (let i = 0; i < len; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }

                return new Blob([bytes], {type});
            } catch {
                return stringToBlob(base64, type);
            }
        }
        const stringToBlob = (str, type) => {
            const blob = new Blob([str], {type});
            return blob;
        }
        const pdfPreview = () => {
            console.log(pdfData)
            try {
                var blob = base64ToBlob(pdfData.value, "application/pdf");
                var url = URL.createObjectURL(blob);
            } catch (e) {
                url = "";
            }
            pdfPreviewUrl.value = url
        }
        onMounted(() => {
            getCrawlStatus();
            openDB();
        });
        const NetWorkData = ref([]);

        // Method
        const handleCheckbox = () => {
            all_flag = spiderCheckbox.value.all.value
            other_flag = false
            console.log(spiderCheckbox.value)
            Object.values(spiderCheckbox.value).forEach(item => {
                    checkBoxValue = item.value
                    label = item.label
                    console.log(item)
                    if (label !== "all") {
                        if (checkBoxValue) {
                            other_flag = true
                        }
                    }
                }
            )
            if (other_flag) {
                spiderCheckbox.value.all.value = false
            } else {
                spiderCheckbox.value.all.value = true
            }
        }
        const changeTab = (e) => {
            tab.value = e;
        }
        const dbFindById = (idToSearch, callback) => {
            const request = indexedDB.open(dbName.value, dbVersion.value);

            request.onupgradeneeded = function (event) {
                const db = event.target.result;

                // 检查对象存储是否存在，如果不存在则创建它
                if (!db.objectStoreNames.contains("myDataStore")) {
                    db.createObjectStore("myDataStore", {
                        keyPath: "id",
                        autoIncrement: true,
                    });
                }
            };

            request.onsuccess = function (event) {
                const db = event.target.result;
                // 执行查询操作
                const transaction = db.transaction("myDataStore", "readonly");
                const objectStore = transaction.objectStore("myDataStore");

                // 创建一个请求来获取指定id的数据
                const getRequest = objectStore.get(idToSearch);

                getRequest.onsuccess = function () {
                    if (getRequest.result) {
                        callback(getRequest.result);
                    } else {
                        console.log("No data found with id: ", idToSearch);
                        callback(null);
                    }
                };

                getRequest.onerror = function (event) {
                    console.error(
                        "Error occurred while retrieving data: ",
                        event.target.errorCode
                    );
                };
            };

            request.onerror = function (event) {
                console.error("Error opening database: ", event.target.errorCode);
            };
        }

        const rowClicked = (item, data) => {
            // 这里的item是被点击的行的数据
            const rowIndex = item.target.tabIndex;
            if (String(rowIndex) !== '0') {
                dbFindById(data.item.id, DataPackage)
                spiderDialog.value = true
            }

        }
        const DataPackage = (e) => {
            general = {
                URL: e.request.url,
                Method: e.request.method,
                Code: e.response.status,
                Address: e.serverIPAddress,
            }
            content = e.response.content
            ResponseHeader = e.response.headers
            RequestHeader = e.request.headers
            queryString = e.request.queryString
            header = {
                general: general,
                request: RequestHeader,
                response: ResponseHeader,
            }
            try {
                postData = e.request.postData;
            } catch {
                postData = null;
            }
            payload = {
                query: queryString,
                postData: postData,
            }
            response = {
                content: content,
                text: e.content
            }
            cookie = {
                request: e.request.cookies,
                response: e.response.cookies
            }
            requestObject.value = {
                header: header,
                payload: payload,
                response: response,
                cookie: cookie,
                request: e.request,
            }
            console.log(requestObject.value)
        }

        const UpdateInFormat = () => {
            const selectetype = FormatValue.value;
            const formattedValue = {};
            if (FormatInput.value) {
                if (selectetype === "Cookie") {
                    console.log(FormatInput)
                    try {
                        try {
                            const cookieArray = JSON.parse(FormatInput.value);
                            if (Array.isArray(cookieArray)) {
                                cookieArray.forEach((cookie) => {
                                    formattedValue[cookie.name] = cookie.value;
                                });
                                FormatOutput.value = formattedValue;
                            } else {
                                FormatOutput.value = "格式错误"
                            }
                        } catch (error) {
                            FormatInput.value.split(";").forEach((item) => {
                                const [key, value] = item.trim().split("=");
                                formattedValue[key] = value;
                            });
                            FormatOutput.value = formattedValue;
                        }
                    } catch (error) {
                        console.error("无法解析输入的 JSON 字符串", error);
                        FormatOutput.value = "格式错误"
                    }
                }
                if (selectetype === "Header") {
                    const inputdata = FormatInput.value
                        .replaceAll(":\n", ":")
                        .replaceAll("：\n", ":");
                    console.log(inputdata);
                    inputdata.split("\n").forEach((item) => {
                        const [key, value] = item.replace(":", "&&&").split("&&&");
                        formattedValue[key] = value
                    });
                    FormatOutput.value = formattedValue;
                }
                if (selectetype === "JSon") {
                    try {
                        const inputdata = JSON.parse(FormatInput.value);
                        FormatOutput.value = inputdata;
                    } catch (e) {
                        console.log(e);
                        FormatOutput.value = "";
                    }
                }
            } else {
                FormatOutput.value = "";
            }
            FormatOutput.value = JSON.stringify(FormatOutput.value, null, 2);
        };
        const copyToClipboard = () => {
            const fakeTextArea = document.createElement("textarea");
            fakeTextArea.value = FormatOutput.value;
            const cookieString = Object.entries(FormatOutput.value)
                .map(([key, value]) => `${key}=${value}`)
                .join("; ");
            document.body.appendChild(fakeTextArea);
            fakeTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(fakeTextArea);
            logger("已复制到剪贴板");
        };
        const copyToCStr = () => {
            const fakeTextArea = document.createElement("textarea");
            const cookieString = Object.entries(JSON.parse(FormatOutput.value))
                .map(([key, value]) => `${key}=${value}`)
                .join("; ");
            fakeTextArea.value = cookieString;
            document.body.appendChild(fakeTextArea);
            fakeTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(fakeTextArea);
            logger("已复制到剪贴板");
        };
        const copyToCys = () => {
            const fakeTextArea = document.createElement("textarea");
            fakeTextArea.value = FormatOutput.value;
            document.body.appendChild(fakeTextArea);
            fakeTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(fakeTextArea);
            logger("已复制到剪贴板");
        };
        const handleCurl = () => {
            curlPyString.value = curlToPy(curlString.value)
        };
        const handleHeaderIcon = (e) => {
            const status = headerIcon.value[e]
            if (status) {
                headerIcon.value[e] = false
            } else {
                headerIcon.value[e] = true
            }
        };
        const handleCurlStr = (e) => {
            const curlCommand = curlApi(e)
            navigator.clipboard.writeText(curlCommand).then(function () {
                logger('Curl复制成功', 'mdi mdi-curling')
            }, function () {
                logger('Curl复制失败', 'mdi mdi-curling', 'error')
            });
        };
        const curlApi = (request) => {
            const method = request.method;
            const url = request.url;
            const headers = request.headers;
            var body = ""
            try {
                body = request.postData.text;
            } catch {
            }
            var curlCommand = `curl '${url}'`;

            if (headers) {
                headers.forEach((value, key) => {
                    curlCommand += ` -H '${value.name.replace(/^:/, "")}: ${value.value}'`;
                });
            }

            if (body) {
                curlCommand += ` --data-raw '${body}'`;
            }
            return curlCommand
        }
        const JSonFomat = (e) => {
            try {
                e = JSON.parse(e);
            } catch {

            }
            return JSON.stringify(e, null, 2);
        };
        const resetDb = () => {
            const deleteRequest = indexedDB.deleteDatabase(dbName.value);
            deleteRequest.onsuccess = () => {
                logger('重置成功');
            };
            deleteRequest.onerror = (event) => {
                logger('重置失败', event);
            };
        }
        return {
            requestObject,
            spiderTab,
            headerIcon,
            spiderDialog,
            curlString,
            curlPyString,
            htmlStr,
            selected,
            textLabel,
            pdfData,
            FormatOutput,
            FormatInput,
            FormatValue,
            ToolBoxTab,
            spiderCheckbox,
            snackbar_color,
            snackbar_text,
            snackbar_ico,
            snackbar,
            headers,
            search,
            NetWorkSelectValue,
            NetWorkSelect,
            spiderSwitch,
            NetWorkData,
            tab,
            drawer,
            rail,
            db,
            data,
            logger,
            changeTab,
            openDB,
            rowClicked,
            getColor,
            getIcon,
            spiderSwitchChange,
            deleteData,
            formatTime,
            UpdateInFormat,
            copyToClipboard,
            copyToCStr,
            copyToCys,
            pdfPreview,
            pdfPreviewUrl,
            handleCurl,
            handleHeaderIcon,
            handleCurlStr,
            handleCheckbox,
            JSonFomat,
            resetDb,
        }

    }
};
const app = Vue.createApp(App);
app.use(vuetify);
app.mount("#app");