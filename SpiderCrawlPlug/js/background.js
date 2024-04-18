console.log("background");
let dataflag = true;
let dataType = null;

function testBackground() {
    alert("你好，我是background！");
}

$("#get_data").click((e) => {
    dataflag = true;
    dataType = null;
    get_data(dataflag, dataType);
});
$("#get_Xhr").click((e) => {
    dataType = ['xhr', 'preflight'];
    get_data(dataflag, dataType);
});
$("#get_Doc").click((e) => {
    dataType = ['document', 'preflight'];

    get_data(dataflag, dataType);
});
$("#get_Css").click((e) => {
    dataType = ['stylesheet', 'font'];
    get_data(dataflag, dataType);
});
$("#get_Js").click((e) => {
    dataType = ['script'];
    get_data(dataflag, dataType);
});
$("#get_Img").click((e) => {
    dataType = ['image'];
    get_data(dataflag, dataType);
});
$("#get_Media").click((e) => {
    dataType = false;
    get_data(dataflag);
});
$("#get_Manifest").click((e) => {
    dataType = false;

    get_data(dataflag);
});
$("#get_WS").click((e) => {
    dataType = ['websocket'];

    get_data(dataflag, dataType);
});
$("#get_Wasm").click((e) => {
    dataType = false;
    get_data(dataflag, dataType);
});
$("#get_Other").click((e) => {
    dataType = ['other'];
    get_data(dataflag, dataType);
});
$("#get_data_last").click((e) => {
    dataflag = false;
    dataType = false;
    get_data(dataflag);
});

$("#clear_data").click((e) => {
    clear_data();
});
$("#del_data").click((e) => {
    console.log(e);
    del_data();
});
const db_version = 1;

function clear_data() {
    Toast('清除缓存', '成功')
    let tbody = document.getElementById("tbody"); // 获取表格的tbody元素
    tbody.innerHTML = "";
    var numElement = document.getElementById("num");
    numElement.innerHTML = 0;
}

function del_data() {
    // 检查数据库是否存在并删除

    clear_data();
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
        const cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function (event) {
            const cursor = event.target.result;
            console.log(cursor);
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
}

let lc = 1;

function get_data(e, getType = null) {
    lc = 0;
    var numElement = document.getElementById("num");
    numElement.innerHTML = 0;
    var searchValue = search()
    let tbody = document.getElementById("tbody"); // 获取表格的tbody元素
    tbody.innerHTML = "";
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
        var cursorRequest = null;
        if (e) {
            cursorRequest = store.openCursor();
        } else {
            cursorRequest = store.openCursor(null, "prev");
        }
        cursorRequest.onsuccess = function (event) {
            const cursor = event.target.result;
            if (cursor) {
                valueStr = JSON.stringify(cursor.value)
                if (searchValue == false) {
                    make_data(cursor, getType)
                } else {
                    if (valueStr.includes(searchValue)) {
                        make_data(cursor, getType)
                    } else {
                    }
                }
                cursor.continue();
            } else {
                // 所有记录都已处理完毕
                console.log("没有更多数据了！");
                const uniqueArray = [...new Set(typeMap)];
                console.log(uniqueArray);
            }

        };

        cursorRequest.onerror = function (event) {
            console.error("读取数据时发生错误:", event.target.errorCode);
        };
    };

    request.onerror = function (event) {
        console.error("打开IndexedDB时发生错误:", event.target.errorCode);
    };
}

let typeMap = [];

function make_data(cursor, getType) {
    const htmlString = cursor.value.content;
    const url = cursor.value.request.url;
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

    if (getType) {
        if (!(getType.includes(resourceType))) {
            return
        }
    }

    // 为当前数据创建一个新的表格行
    const row = tbody.insertRow();
    row.insertCell().innerHTML = `<td><input style="width: 15px;height: 15px" type="checkbox" class="select-checkbox" pid="${cursor.value.id}"></td>`;
    row.insertCell().innerHTML = `<td style="width: 10px;">${lc}</td>`;
    row.insertCell().innerHTML = `<td style="width: 500px;white-space: nowrap;">${get_time(
        cursor.value.timestamp
    )}</td>`;
    row.insertCell().innerHTML = `<td ">${httpVersion}</td>`;
    row.insertCell().textContent = method;
    // row.insertCell().innerHTML = `<td style="background-color: green; width: 50px">${extractDomain(url)}</td>`;
    docDomain(row, extractDomain(url))
    urlParse(url, resourceType, row, cursor);
    row.insertCell().innerHTML = `<td>${status}</td>`;
    row.insertCell().textContent = bodySize;
    typeMap.push(resourceType);
    if (resourceType == "image" && htmlString) {
        var img = document.createElement("img");
        if (htmlString.startsWith('data:') || htmlString.startsWith('<?xml')) {
            img.src = htmlString; // 设置图片源为Base64字符串
        } else {
            img.src = "data:image/png;base64," + htmlString; // 设置图片源为Base64字符串
        }
        img.alt = "Base64 Image"; // 设置图片的替代文本
        if (htmlString.startsWith('<?xml')) {
            row.insertCell().innerHTML = `<div style="max-width: 80px;">${htmlString}</div>`;
        } else {
            row.insertCell().innerHTML = `<div style="max-width: 80px;"><img style="max-width: 80px; max-height: 100px;" src="data:image/png;base64,${htmlString}" alt="Base64 Image"></div>`;
        }
    } else {
        row.insertCell().textContent = resourceType;
    }
    // row.insertCell().innerHTML  = action();

    lc = lc + 1;
    var numElement = document.getElementById("num");
    numElement.innerHTML = lc;
    row.addEventListener('click', function (event) {
        const checkbox = this.querySelector('.select-checkbox');
        checkbox.checked = !checkbox.checked;
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({
            container: "body",
            height: 100,
        });
    });
}

function get_time(timestamp) {
    // 假设我们有一个时间戳
    timestamp = Number(timestamp);
    // 使用 toISOString 方法转换为 ISO 格式的字符串
    var isoString = new Date(timestamp).toISOString();

    // 截取我们需要的部分，去掉 'Z' 表示的 UTC 时区
    var formattedDate = isoString.slice(0, -1).replace(/T/, " ");

    // 输出结果
    return formattedDate;
}

function truncatedUrl(url) {
    const maxNum = 80;
    const minNum = 40;
    if (url && url.length > maxNum) {
        // 截取前30位和后30位，中间用...连接
        return (
            url.substring(0, minNum) + "..." + url.substring(url.length - minNum)
        );
    }
    return url;
}

function ModalAction(action) {
    var rowData = action;
    console.log(rowData.id);
    db_search(rowData.id, function (result) {
        if (result) {
            console.log("Data retrieved:");
            // // 使用行数据填充模态框
            GeneralModalBody(result);
            ParamsModalBody(result);
            HeadersModel(result.request.headers);
            RespHeadersModel(result.response.headers)
            ResponseModalBody(result);
        } else {
            console.log("No data or error occurred.");
        }
    });
    // 显示模态框
    $("#exampleModal").modal("show");
}

function GeneralModalBody(Data) {
    var ModalBody = document.getElementById("GeneralModalBody");
    ModalBody.innerHTML = `
    <div style="display: flex;align-items: center;">
    <div style="min-width: 20%;">Request URL:</div> <div> ${Data.request.url}</div></div>
    <div style="display: flex;align-items: center;">
    <div style="min-width: 20%;">Request MethodL:</div> <div> ${Data.request.method}</div></div>
    <div style="display: flex;align-items: center;">
    <div style="min-width: 20%;">Status Code:</div> <div> ${Data.response.status}</div></div>
  `;
}

function ResponseModalBody(Data) {
    PreviewModalBody(Data);
    ActionModalBody(Data)
    var ModalBody = document.getElementById("ResponseModalBody");
    ModalBody.textContent = Data.content || "";
}

function ActionModalBody(Data) {
    var ModalBody = document.getElementById("ActionModalBody");
    var curlData = curlApi(Data.request)
    ModalBody.innerHTML = `<button type="button" class="btn btn-outline-success" id="crul${Data.id}">Curl</button>`;
    var curlButton = document.getElementById(`crul${Data.id}`);
    curlButton.addEventListener('click', function () {
        // 调用copyApi函数，并传递所需的参数
        copyApi(curlData);
    });

}

function PreviewModalBody(Data) {
    const resourceType = Data._resourceType;
    var ModalBody = document.getElementById("PreviewModalBody");
    ModalBody.textContent = "";
    var htmlString = Data.content || "";
    if (resourceType == "document") {
        var parser = new DOMParser();
        var doc = parser.parseFromString(htmlString, "text/html");
        var bodyContent = doc.body.innerHTML;
        var div = document.createElement("div");
        div.innerHTML = bodyContent;
        ModalBody.appendChild(div);
    } else if (resourceType == "image") {
        var img = document.createElement("img");
        if (htmlString.startsWith('data:')) {
            img.src = htmlString; // 设置图片源为Base64字符串
        } else {
            img.src = "data:image/png;base64," + htmlString; // 设置图片源为Base64字符串
        }
        if (htmlString.startsWith('<?xml')) {
            ModalBody.innerHTML = `<div style="max-width: 80px;">${htmlString}</div>`;
        } else {
            img.alt = "Base64 Image";
            try {
                ModalBody.appendChild(img);
            } catch {
                ModalBody.textContent = Data.content;
            }
        }

    } else {
        try {
            var jsonData = JSON.parse(htmlString);
            jsoneditorApi(jsonData, 'PreviewModalBody')
        } catch {
            ModalBody.textContent = Data.content;
        }
    }
}

function ParamsModalBody(Data) {
    var ParamsBody = document.getElementById("ParamsModalBody");
    var DataBody = document.getElementById("DataModalBody");
    ParamsBody.textContent = ""
    DataBody.textContent = ""
    try {
        ParamsBody.textContent = param_to_string(Data.request.queryString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
    try {
        var htmlString = Data.request.postData.text;
        try {
            var jsonData = JSON.parse(htmlString);
            jsoneditorApi(jsonData, 'DataModalBody')
        } catch {
            DataBody.textContent = htmlString;
        }
    } catch {
    }
}

function HeadersModel(Data) {
    var ModalBody = document.getElementById("HeadersModalBody");
    ModalBody.innerHTML = "";
    Data.forEach((item, index) => {
        ModalBody.appendChild(document.createElement("div")).innerHTML = `
    <div style="
    display: flex;
    align-items: center;"
    >
      <div style="min-width: 20%;">${item.name.replace(/^:/, "")}:</div>
      <div>${item.value}</div>
    </div>
    `;
    });
}

function RespHeadersModel(Data) {
    var ModalBody = document.getElementById("RespHeadersModalBody");
    ModalBody.innerHTML = "";
    Data.forEach((item, index) => {
        ModalBody.appendChild(document.createElement("div")).innerHTML = `
    <div style="
    display: flex;
    align-items: center;"
    >
      <div style="min-width: 20%;">${item.name.replace(/^:/, "")}:</div>
      <div>${item.value}</div>
    </div>
    `;
    });
}

function extractDomain(url) {
    // 正则表达式匹配 URL 中的域名部分
    var domainPattern = /[^:\/?#]+:\/\/([^\/?#:]+)[^\/?#:]*/;
    var match = url.match(domainPattern);
    if (!url.startsWith("http")) {
        return "";
    }
    if (match && match[1]) {
        // 如果匹配成功，返回域名部分
        return match[1];
    }

    // 如果不是有效的 URL 或匹配失败，返回空字符串
    return "";
}

function db_search(idToSearch, callback) {
    const request = indexedDB.open("myDatabase", db_version);

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
        console.log("Database opened successfully with version: ", db.version);

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

$(document).ready(function () {
    // 监听collapse的show和hide事件
    $("#Headerscollapse")
        .on("show.bs.collapse", function () {
            // 当collapse显示时，改变图标
            $("#toggleIcon")
                .removeClass("bi bi-caret-right-fill")
                .addClass("bi bi-caret-down-fill");
        })
        .on("hide.bs.collapse", function () {
            $("#toggleIcon")
                .removeClass("bi bi-caret-down-fill")
                .addClass("bi bi-caret-right-fill");
        });
    $("#Generalcollapse")
        .on("show.bs.collapse", function () {
            // 当collapse显示时，改变图标
            $("#GeneralIcon")
                .removeClass("bi bi-caret-right-fill")
                .addClass("bi bi-caret-down-fill");
        })
        .on("hide.bs.collapse", function () {
            $("#GeneralIcon")
                .removeClass("bi bi-caret-down-fill")
                .addClass("bi bi-caret-right-fill");
        });
    $("#RespHeaderscollapse")
        .on("show.bs.collapse", function () {
            // 当collapse显示时，改变图标
            $("#ResptoggleIcon")
                .removeClass("bi bi-caret-right-fill")
                .addClass("bi bi-caret-down-fill");
        })
        .on("hide.bs.collapse", function () {
            $("#ResptoggleIcon")
                .removeClass("bi bi-caret-down-fill")
                .addClass("bi bi-caret-right-fill");
        });
});

function search() {
    const inputElement = document.getElementById('search');
    const inputValue = inputElement.value.trim() || false;
    console.log('search:', inputValue); // 打印输入框的值
    return inputValue
}

function docDomain(row, data) {
    var div = document.createElement('td');
    div.innerHTML = `<div style="width: 100px; word-wrap: break-word;">${data}</div>`;
    row.appendChild(div)
}

function urlParse(url, resourceType, row, cursor) {
    map = {
        "script": '#FF1744',
        "image": 'gray',
        "document": 'green',
        "xhr": 'blue',
        "stylesheet": '#424242',
    }
    var colorStr = map[resourceType] || 'blue';
    var div = document.createElement('td');
    var p = document.createElement('p');

    p.setAttribute('data-toggle', 'tooltip');
    p.setAttribute('data-placement', 'top');
    p.setAttribute('title', url); // 假设url是有效的URL字符串
    p.style.color = colorStr;
    p.style.fontSize = '16px';
    p.innerHTML = truncatedUrl(url); // 设置p元素的innerHTML为截断后的URL

    // 将p元素添加到div中
    div.appendChild(p);

    // 将当前行的数据添加到div的data属性中
    div.dataset.row = JSON.stringify({id: cursor.value.id});

    // 为div添加点击事件监听器
    div.addEventListener("click", function () {
        ModalAction(JSON.parse(div.dataset.row)); // 传递行数据给ModalAction函数
    });
    row.appendChild(div)
}

function param_to_string(data) {
    var param = new URLSearchParams();

    // 遍历数据数组，将每一项添加到URLSearchParams对象中
    data.forEach(item => {
        param.append(item.name, item.value);
    });

    return param.toString();
}


$(function () {
    $("#Headerscollapse").collapse({
        toggle: true,
    });
    $("#RespHeaderscollapse").collapse({
        toggle: true,
    });
    $("#Generalcollapse").collapse({
        toggle: true,
    });
});
let ctrlPressed = false;
let shiftPressed = false;
let lastKeyPress = null;
document.addEventListener("keydown", function (event) {
    // 检查是否同时按下了Ctrl和X
    if (event.key === 'Control' || event.key === 'ControlLeft') {
        ctrlPressed = true;
    } else if (event.key === 'Shift' || event.key === 'ShiftLeft') {
        shiftPressed = true;
    }

    // 如果按下了 X 键，并且 Ctrl 和 Shift 都已被按下
    if (event.key === 'x' || event.key === 'X') {
        if (ctrlPressed && shiftPressed) {
            // 执行特定函数
            del_data();
        }
        lastKeyPress = event.key;
    }

    // 重置状态
    if (event.key === lastKeyPress) {
        ctrlPressed = false;
        shiftPressed = false;
    }
});

function jsoneditorApi(initialJson, bid) {
    const container = document.getElementById(bid)
    container.innerText = ''
    const options = {
        'mode': 'code',
        'enableTransform': false,
    }
    const editor = new JSONEditor(container, options)
    editor.set(initialJson)
}

$(function () {
    get_data(true);
})


function curlApi(request) {
    console.log(request);
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

// curlApi({
//     method: method,
//     url: url,
//     headers: cursor.value.request.headers,
//     body: bodydata,
// })
function copyApi(e) {
    console.log(e)
    // 获取toast的引用
    Toast('Curl', '复制成功')
    navigator.clipboard.writeText(e).then(function () {
        console.log('Text copied to clipboard');
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

function Toast(title = "", content = "") {
    var myToast = $('#myToast');
    document.getElementById('toastTitle').innerText = title
    document.getElementById('toastBody').innerText = content
    $('#myToast').toast({delay: 1000}); // 设置3秒后自动消失
    myToast.toast('show');
}


document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('sponsorLink');
    var qrcode = document.getElementById('qrcode');

    link.addEventListener('mouseover', function (event) {
        // 显示二维码
        qrcode.style.display = 'block';
        // 设置二维码的位置，可以根据实际情况调整
        qrcode.style.left = event.pageX + 'px';
        qrcode.style.top = event.pageY + 'px';
    });

    link.addEventListener('mouseout', function () {
        // 隐藏二维码
        qrcode.style.display = 'none';
    });
});

function del_one_data(pid) {
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

// 监听整个document的click事件
document.addEventListener('click', function (event) {
    // 检查点击的是否是复选框
    const isChecked = Array.from(document.querySelectorAll('.select-checkbox')).some(el => el.checked);
    // 根据是否有复选框被选中，显示或隐藏删除按钮
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.style.display = isChecked ? 'inline-block' : 'none';
    // 检查点击的是否是删除按钮
    if (event.target.id === 'deleteButton') {
        // 找到所有选中的复选框所在的行并删除它们
        document.querySelectorAll('.select-checkbox:checked').forEach(checkbox => {
            var pid = checkbox.getAttribute('pid')
            del_one_data(pid)
            var numElement = document.getElementById("num");
            lc = lc - 1
            numElement.innerHTML = lc;
            checkbox.closest('tr').remove();
        });
        // 删除后隐藏删除按钮，因为至少有一个复选框被选中的情况不再成立
        deleteButton.style.display = 'none';
    }
});