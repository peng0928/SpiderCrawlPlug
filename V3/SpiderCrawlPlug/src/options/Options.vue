<script setup lang="ts">
import {ref, reactive, onMounted, computed} from 'vue'
import {Message} from '@arco-design/web-vue';
import {IconHome, IconCalendar,} from '@arco-design/web-vue/es/icon';
import {Icon} from '@arco-design/web-vue';
import {JsonViewer} from '@anilkumarthakur/vue3-json-viewer';
import '@anilkumarthakur/vue3-json-viewer/styles.css';

const IconFont = Icon.addFromIconFontCn({src: '../../public/js/icon.js'});

const tabName = ref('NetWork');
const spiderSwitch = ref(false);
const searchValue = ref("");
const NetWorkData = ref([]);
const lastProcessedIds = ref(new Set());
const collapsed = ref(false);
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 66,
    slotName: 'ind'
  },
  {
    title: '时间',
    dataIndex: 'start',
    sortable: {
      sortDirections: ['ascend', 'descend'],
      // defaultSortOrder: "descend"
    },
    slotName: 'start',
  },
  {
    title: 'code',
    dataIndex: 'code', slotName: 'code',
    sortable: {
      sortDirections: ['ascend', 'descend']
    }
  },
  {
    title: 'method',
    dataIndex: 'method',
    slotName: 'method',
  },
  {
    title: 'url',
    dataIndex: 'url',
    slotName: 'url',
    width: 777,
    ellipsis: true,
  },
  {
    title: 'time',
    dataIndex: 'time',
    slotName: 'time',
  },
  {
    title: 'size',
    dataIndex: 'Size',
    slotName: 'size'
  },
  {
    title: 'type',
    dataIndex: 'type',
    slotName: 'type',
    filterable: {
      filters: [
        {
          text: '文档',
          value: 'document',
        },
        {
          text: 'xhr',
          value: 'xhr',
        },
        {
          text: 'stylesheet',
          value: 'stylesheet',
        },
        {
          text: 'script',
          value: 'script',
        },
        {
          text: 'font',
          value: 'font',
        },
        {
          text: 'image',
          value: 'image',
        },

      ],
      filter: (value: any, row: any) => row.type.includes(value),
    }
  },
  {
    title: 'version',
    dataIndex: 'version',
    slotName: 'version',
    width: 158
  },
]
const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
});
const setAll = () => {
  chrome.storage.sync.set({spiderSwitch: spiderSwitch.value})
}
const selectedKeys = ref([]);
const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  // Message.info({
  //   content,
  //   duration: 2000,
  // });
  collapsed.value = val;
}

// 获取indexDB数据
const dbVersion = ref(2);
const dbName = ref('SpiderCrawlData');
const tab = ref('NetWork');
const spiderTab = ref('Header');
const requestObject = ref({
  header: {},
  payload: {},
  response: {
    content: {
      mimeType: ""
    },
    text: ""
  },
  cookie: {
    response: {},
    request: {}
  },
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
const drawer = ref(true);
const rail = ref(true);
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
  checkBoxList.value = [];
  const request = indexedDB.open(dbName.value, dbVersion.value);

  request.onupgradeneeded = (event: any) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains("myDataStore")) {
      db.createObjectStore("myDataStore", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  };

  request.onsuccess = (event: any) => {
    const db = event.target.result;
    const transaction = db.transaction("myDataStore", "readwrite");
    const store = transaction.objectStore("myDataStore");
    var cursorRequest = null;
    if (1) {
      cursorRequest = store.openCursor();
    } else {
      cursorRequest = store.openCursor(null, "prev");
    }
    cursorRequest.onsuccess = function (event: any) {
      const cursor = event.target.result;
      if (cursor) {
        // 只处理新数据
        if (!lastProcessedIds.value.has(cursor.value.id)) {
          executeData(cursor);
          lastProcessedIds.value.add(cursor.value.id);
        }
        cursor.continue();
      } else {
        console.log('数据加载完成');
      }
    };
    cursorRequest.onerror = function (event: any) {
      console.error("读取数据时发生错误:", event.target.errorCode);
    };
  };

  request.onerror = (event: any) => {
    console.error('Error opening database:', event.target.error);
  };
};
const executeData = (cursor: any) => {
  let dataItem = {};
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
  }

  const spiderCheckboxAll = spiderCheckbox.value.all.value
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

const del_one_data = async (pid: any) => {
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
  if (selectedKeys.value.length > 0) {
    Object.values(selectedKeys.value).forEach(item => {
      console.log(item)
      del_one_data(item)
      NetWorkData.value = NetWorkData.value.filter(query => query.id !== item);
    })
  }
};
const getCrawlStatus = async () => {
  chrome.storage.sync.get(['spiderSwitch'], (result) => {
    spiderSwitch.value = result.spiderSwitch;
  })

};

const base64ToBlob = (base64: any, type: any) => {
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
const stringToBlob = (str: any, type: any) => {
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
const dbInterval = ref("");

onMounted(() => {
  getCrawlStatus();
  openDB();
  // dbInterval.value = setInterval(() => {
  //   openDB();
  // }, 5000);
});


// Method
const changeTabName = (e: any) => {
  tabName.value = e
  console.log(tabName.value)
}
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
const rowClicked = (data: any) => {
  // 这里的item是被点击的行的数据
  dbFindById(data.id, DataPackage)
}
const DataPackage = (e: any) => {
  let postData;
  const general = {
    URL: e.request.url,
    Method: e.request.method,
    Code: e.response.status,
    Address: e.serverIPAddress,
  }
  const content = e.response.content
  const ResponseHeader = e.response.headers
  const RequestHeader = e.request.headers
  const queryString = e.request.queryString
  const header = {
    general: general,
    request: RequestHeader,
    response: ResponseHeader,
  }
  try {
    postData = e.request.postData;
  } catch {
    postData = null;
  }
  const payload = {
    query: queryString,
    postData: postData,
  }
  const response = {
    content: content,
    text: e.content
  }
  const cookie = {
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
  visible.value = true
}
const UpdateInFormat = (e:any) => {
  const selectetype = FormatValue.value;
  const formattedValue = {};
  if (e) {
    if (selectetype === "Cookie") {
      try {
        try {
          const cookieArray = JSON.parse(e);
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
      const inputdata = e
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
        const inputdata = JSON.parse(e);
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
  console.log('FormatOutput', e, FormatOutput.value)

};
const UpselectFormat = () => {
  const e =  FormatInput.value
  console.log('input', e, FormatInput.value)
  const selectetype = FormatValue.value;
  const formattedValue = {};
  if (e) {
    if (selectetype === "Cookie") {
      try {
        try {
          const cookieArray = JSON.parse(e);
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
      const inputdata = e
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
        const inputdata = JSON.parse(e);
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
  console.log('FormatOutput', e, FormatOutput.value)

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
  Message.success("已复制到剪贴板");
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
  Message.success("已复制到剪贴板");
};
const copyToCys = () => {
  const fakeTextArea = document.createElement("textarea");
  fakeTextArea.value = FormatOutput.value;
  document.body.appendChild(fakeTextArea);
  fakeTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(fakeTextArea);
  Message.success("已复制到剪贴板");
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
    Message.success('Curl复制成功')
  }, function () {
    Message.error('Curl复制失败')
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
    Message.info('重置成功');
  };
  deleteRequest.onerror = (event) => {
    Message.error('重置失败', event);
  };
}
const get_time = (timestamp: any) => {
  // 假设我们有一个时间戳
  timestamp = Number(timestamp);
  // 使用 toISOString 方法转换为 ISO 格式的字符串
  var isoString = new Date(timestamp).toISOString();

  // 截取我们需要的部分，去掉 'Z' 表示的 UTC 时区
  var formattedDate = isoString.slice(10, -5).replace(/T/, " ");

  // 输出结果
  return formattedDate;
};
const getColor = (t: any) => {
  const code = t.code;
  if (code >= 200 && code < 300) {
    return 'green';
  } else if (code >= 300 && code < 400) {
    return 'blue';
  } else if (code >= 400 && code < 500) {
    return 'orange';
  } else if (code >= 500 && code < 600) {
    return 'red';
  } else {
    return 'gray';
  }
};
const formatTime = (item: any) => {
  const timeNow = item.time || 0
  const timeString = timeNow > 1000 ? String((timeNow / 1000).toFixed(2)) + ' s' : String(timeNow) + ' ms';
  return timeString;
};
const formatSize = (size: any) => {
  if (size < 1024) {
    return size + ' B';
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  } else if (size < 1024 * 1024 * 1024) {
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  } else {
    return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
};
const getIcon = (e: any) => {
  if (!e) {
    e = {}
  }
  e = e.type
  const codeStr = String(e);
  const IconDict = {
    "document": "icon-documents",
    "stylesheet": "icon-Stylesheet",
    "image": "icon-image",
    "font": "icon-font",
    "script": "icon-script",
  }
  const Icon = IconDict[codeStr] || 'icon-weizhigeshi';
  return Icon
};
const filteredData = computed(() => {
  if (!searchValue.value) return NetWorkData.value
  return NetWorkData.value.filter(item =>
      JSON.stringify(item).includes(searchValue.value.trim())
  )
})
const visible = ref(false);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
}
// 数组中的字典聚合
const aggregate = <T extends Record<PropertyKey, unknown>>(arr: T[]): T => {
  const res = {} as T;
  if (!arr) return res;
  arr.forEach(item => {
    const name = item.name;
    const value = item.value;
    res[name] = value;
  })
  return JSON.stringify(res);
};
const try_parse = (e: any) => {
  try {
    e = JSON.parse(e)
  } catch (err) {
  }
  console.log(e)
  return e;
}
</script>

<template>
  <a-layout class="h-[100vh]">
    <a-layout-sider
        theme="dark"
        breakpoint="lg"
        :width="220"
        collapsible
        :collapsed="collapsed"
        @collapse="onCollapse"
    >
      <div class="items-center text-center text-white font-bold text-base p-3 flex gap-2">
        <icon-font type="icon-wangluozhuabao" :size="20"/>
        <div v-if="!collapsed">
          SpiderCrawlPlug
        </div>
      </div>
      <a-menu
          :defaultOpenKeys="['1']"
          :defaultSelectedKeys="['1']"

      >
        <a-menu-item key="1" @click="changeTabName('NetWork')">
          <IconHome/>
          抓包
        </a-menu-item>
        <a-menu-item key="2" @click="changeTabName('Tool')">
          <IconCalendar/>
          工具箱
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <div class="pt-5 pl-5 pr-5 pb-3 flex justify-between">
          <div class="flex gap-2 items-center text-center ">
            <div class="text-md font-bold flex gap-2 items-center">
              监听
            </div>
            <a-switch type="round" v-model:model-value="spiderSwitch" @click="setAll"/>
          </div>
          <div class="flex gap-3 items-center text-center ">
            <a-button type="primary" status="danger" @click="deleteData" v-if="selectedKeys.length>0">
              <template #icon>
                <icon-delete/>
              </template>
              删除 {{ selectedKeys.length }} 个
            </a-button>
            <a-button type="primary" @click="openDB">
              <template #icon>
                <icon-refresh/>
              </template>
              刷新
            </a-button>
            <a-input-search placeholder="输入搜索关键字" search-button v-model="searchValue"/>
          </div>
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-content class="pr-5 pl-5">
          <div v-if="tabName==='NetWork'">
            <a-table row-key="id" :columns="columns" :data="filteredData"
                     :row-selection="rowSelection" :pagination="false" :sticky-header="0.1"
                     v-model:selectedKeys="selectedKeys">
              <template #code="{ record,rowIndex }">
                <div class="flex gap-1 items-center text-center font-bold text-md">
                  <icon-font :type="getIcon(record)" :size="18"/>
                  <a-tag :color="getColor(record)"> {{ record.code }}
                  </a-tag>
                </div>
              </template>
              <template #start="{ record,rowIndex }">
                <a-tag color="arcoblue">
                  {{ record.start }}
                </a-tag>
              </template>
              <template #url="{ record,rowIndex }">
                <a-tag color="blue" @click="rowClicked(record)">
                  {{ record.url }}
                </a-tag>
              </template>
              <template #method="{ record,rowIndex }">
                <a-tag color="cyan">
                  {{ record.method }}
                </a-tag>
              </template>
              <template #ind="{ record,rowIndex }">
                <a-tag>
                  {{ rowIndex + 1 }}
                </a-tag>
              </template>
              <template #time="{ record,rowIndex }">
                <a-tag>
                  {{ formatTime(record) }}
                </a-tag>
              </template>
              <template #size="{ record,rowIndex }">
                <a-tag>
                  {{ formatSize(record.Size) }}
                </a-tag>
              </template>
              <template #type="{ record,rowIndex }">
                <div v-if="record.type=='image'">
                  <img style="max-width: 80px; max-height: 100px;"
                       v-if="record.content && !record.content.startsWith('<?xml')"
                       :src="`data:image/png;base64,${record.content}`"
                       alt="Base64 Image">
                  <div style="max-width: 80px;" v-else v-html="record.content"></div>
                </div>
                <div v-else>
                  <a-tag>
                    {{ record.type }}
                  </a-tag>
                </div>
              </template>
              <template #version="{ record,rowIndex }">
                <a-tag>
                  {{ record.version }}
                </a-tag>
              </template>
            </a-table>
          </div>
          <div v-else>
            <!-- 1. ToolBoxFormat -->
            <a-tabs>
              <a-tab-pane key="ToolBoxFormat" title="cookie格式化">
                <!-- 顶部工具栏 -->
                <div class="flex justify-between">
                  <a-select
                      :style="{width:'320px'}"
                      v-model="FormatValue"
                      placeholder="格式化类型"
                      @change="UpselectFormat"
                  >
                    <a-option value="Cookie">Cookie</a-option>
                    <a-option value="Header">Header</a-option>
                    <a-option value="JSon">JSon</a-option>
                  </a-select>

                  <a-space>
                    <a-button type="primary" @click="copyToClipboard">复制 JSON</a-button>
                    <a-button type="primary" @click="copyToCStr">复制 字符串</a-button>
                    <a-button type="primary" @click="copyToCys">压缩</a-button>
                  </a-space>
                </div>
                <!-- 输入/输出区域 -->
                <div class="mt-5 flex justify-between">
                  <div class="w-[48%]">
                    <a-textarea
                        v-model:model-value="FormatInput"
                        :placeholder="textLabel.a"
                        :auto-size="{
                              minRows:23,
                              maxRows:23
                            }"
                        allow-clear
                        @input="UpdateInFormat"
                    />
                  </div>

                  <div class="text-left ml-5 w-[48%]">
                    <JsonViewer
                        :data="try_parse(FormatOutput)"
                        :darkMode="true"
                        class="break-all max-h-[688px] overflow-y-auto w-full">
                    </JsonViewer>
                  </div>
                </div>
              </a-tab-pane>

              <!-- 2. ToolBoxPdf -->
              <a-tab-pane key="ToolBoxPdf" title="pdf预览">
                <a-row justify="center">
                  <a-col :span="22">
                    <a-textarea
                        v-model="pdfData"
                        placeholder="请输入base64字符"
                        :auto-size="{
                              minRows:2,
                              maxRows:8
                            }"
                        allow-clear
                        @input="pdfPreview"
                    />
                    <div class="flex text-center items-center justify-center p-3">
                      <a :href="pdfPreviewUrl" target="_blank">点击此处全屏查看</a>
                    </div>
                  </a-col>
                </a-row>

                <div
                    style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding-bottom: 5%;
                "
                >
                  <iframe
                      :src="pdfPreviewUrl"
                      width="90%"
                      height="700vh"
                      frameborder="0"
                  />
                </div>
              </a-tab-pane>

              <!-- 3. ToolBoxHtml -->
              <a-tab-pane key="ToolBoxHtml" title="Html预览">
                <a-row justify="center">
                  <a-col :span="22">
                    <a-textarea
                        v-model="htmlStr"
                        placeholder="请输入Html字符"
                        :auto-size="{
                              minRows:5,
                              maxRows:15
                            }"
                        allow-clear
                    />
                  </a-col>
                </a-row>

                <a-card
                    class="max-h-[666px] overflow-y-auto m-5">
                  <div style="width: 99%" v-html="htmlStr"/>
                </a-card>
              </a-tab-pane>

              <!-- 4. ToolBoxCurl -->
              <a-tab-pane key="ToolBoxCurl" title="在线curl">
                <a-row :style="{ height: 'calc(90vh - 5%)', paddingTop: '20px' }">
                  <a-col :span="12">
                    <a-textarea
                        v-model="curlString"
                        :placeholder="textLabel.a"
                        :rows="23"
                        allow-clear
                        @input="handleCurl"
                    />
                  </a-col>

                  <a-col :span="12" style="overflow-y: auto">
                    <div class="output" v-html="curlPyString"/>
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-layout-content>
        <a-layout-footer></a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>

  <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel" :footer="false" :closable="false"
           width="66%">
    <a-tabs style="height: auto; max-height: 88%; min-height: 333px">
      <a-tab-pane key="1">
        <template #title>
          <icon-font type="icon-icon-qingqiutou"/>
          Header
        </template>

        <div class="grid gap-6 max-h-[789px] overflow-y-auto ">
          <a-collapse :default-active-key="['1']" :bordered="false">
            <a-collapse-item header="常规" key="1">
              <div v-for="(value, key, index) in requestObject.header.general"
                   :key="index">
                <div class="flex text-md font-normal">
                  <div class="w-72">{{ key }}</div>
                  <div class="min-w-0 flex-1 break-all">{{ value }}</div>
                </div>
              </div>
            </a-collapse-item>
          </a-collapse>
          <a-collapse :default-active-key="['1']" :bordered="false">
            <a-collapse-item header="响应标头" key="1">
              <div v-for="(value, key, index) in requestObject.header.response"
                   :key="index">
                <div class="flex text-md font-normal">
                  <div class="w-72 ">{{ value.name }}</div>
                  <div class="min-w-0 flex-1 break-all">{{ value.value }}</div>
                </div>
              </div>
            </a-collapse-item>
          </a-collapse>
          <a-collapse :default-active-key="['1']" :bordered="false">
            <a-collapse-item header="请求标头" key="1">
              <div v-for="(value, key, index) in requestObject.header.request"
                   :key="index">
                <div class="flex text-md font-normal">
                  <div class="w-72 ">{{ value.name }}</div>
                  <div class="min-w-0 flex-1 break-all">
                    {{ value.value }}
                  </div>

                </div>
              </div>
            </a-collapse-item>
          </a-collapse>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #title>
          <icon-font type="icon-qingqiucanshu"/>
          Payload
        </template>
        <div class="grid gap-5">
          <div v-if="JSON.stringify(requestObject.payload.query) != '[]'">
            <div class="text-md font-bold pb-1 ">URL参数</div>
            <JsonViewer
                :data="try_parse(aggregate(requestObject.payload.query))"
                :darkMode="true"
                class="break-all max-h-[388px] overflow-y-auto"
            />
          </div>
          <div v-if="requestObject.payload.postData">
            <div class="text-md font-bold text-blue-600 pb-1">请求参数</div>
            <JsonViewer
                :data="try_parse(requestObject.payload.postData.text)"
                :darkMode="true"
                class="break-all max-h-[388px] overflow-y-auto">
            </JsonViewer>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #title>
          <icon-font type="icon-yulan"/>
          Preview
        </template>
        <div>
          <div v-if="!requestObject.response.content.mimeType.includes('image')">
            <div class="p-3"
                 v-if="requestObject.response.content.mimeType.includes('application/json')">
              <JsonViewer
                  :data="try_parse(requestObject.response.text)"
                  :darkMode="true"
                  class="break-all max-h-[688px] overflow-y-auto">
              </JsonViewer>
            </div>
            <div v-else v-html="requestObject.response.text" class="max-h-[666px] overflow-y-auto break-all"></div>
          </div>
          <div v-else class="p-10 flex items-center justify-center ">
            <img class="items-center text-center"
                 style="min-width: 6vw; min-height: 6vh; max-width: 50vw; max-height: 50vh"
                 v-if="requestObject.response.text && !requestObject.response.text.startsWith('<?xml')"
                 :src="`data:image/png;base64,${requestObject.response.text}`"
                 alt="Base64 Image">
            <div style="max-width: 80%;" v-else v-html="requestObject.response.text"></div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="4">
        <template #title>
          <icon-font type="icon-xiangying"/>
          Response
        </template>
        <div class="max-h-[666px] overflow-y-auto break-all p-3">
          {{ requestObject.response.text }}
        </div>
      </a-tab-pane>
      <a-tab-pane key="5">
        <template #title>
          <icon-font type="icon--cookie"/>
          cookie
        </template>
        <div class="grid gap-3">
          <div v-if="requestObject.cookie.request.length>0"
               class="">
            <div class="text-md font-bold pb-1 ">请求Cookie</div>
            <JsonViewer
                :data="try_parse(aggregate(requestObject.cookie.request))"
                :darkMode="true"
                class="break-all max-h-[388px] overflow-y-auto"
            />
          </div>
          <div v-if="requestObject.cookie.response.length > 0">
            <div class="text-md font-bold pb-1 text-yellow-600">响应Cookie</div>
            <JsonViewer
                :data="try_parse(aggregate(requestObject.cookie.response))"
                :darkMode="true"
                class="break-all max-h-[388px] overflow-y-auto"
            />
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<style>
@import "tailwindcss";

@plugin "daisyui";
</style>
