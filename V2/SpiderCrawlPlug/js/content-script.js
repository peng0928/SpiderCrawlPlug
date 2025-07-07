chrome.storage.local.get('spiderSwitch', function (result) {
    spiderSwitch = result.spiderSwitch;
    if (spiderSwitch) {
        console.log("------------------正在监听网络请求------------------");
    }
});

chrome.storage.local.get(['hookJson', 'HookInput', 'hookUrl', 'hookXhr', 'hookCookie', 'hookType', 'hookDebug'], function (result) {
    console.log(result);
    hookJson = result.hookJson;
    HookInput = String(result.HookInput);
    hookUrl = result.hookUrl;
    hookXhr = result.hookXhr;
    hookCookie = result.hookCookie;
    hookType = result.hookType;
    hookDebug = result.hookDebug;
    if (hookType !== 'document start') {
        return
    }
    if (hookJson) {
        // 确保DOM加载后注入
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectHookJson(HookInput));
        } else {
            injectHookJson(HookInput);
        }
    }
    if (hookUrl) {
        // 确保DOM加载后注入
        document.addEventListener('DOMContentLoaded', injectHookUrl(HookInput));
    }
    if (hookXhr) {
        // 确保DOM加载后注入
        console.log("------------------正在监听XHR请求------------------")
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectHookXhr(HookInput));
        } else {
            injectHookXhr(HookInput);
        }
    }
    if (hookCookie) {
        // 确保DOM加载后注入
        console.log("------------------正在Hook Cookie------------------")
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectHookCookie(HookInput));
        } else {
            injectHookCookie(HookInput);
        }
    }
    if (hookDebug) {
        // 确保DOM加载后注入
        console.log("------------------正在Hook hookDebugger------------------")
        injectHookDebugger()
    }
});

function injectHookJson(e) {
    const script = document.createElement('script');
    script.textContent = `
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.documentElement.appendChild(iframe);
    let log = iframe.contentWindow.console.log;
    function HJSOn(e) {

    const jsonHooks = {
        originalParse: JSON.parse,
        originalStringify: JSON.stringify,
        enabled: true,
        logLevel: 'verbose', // 'verbose' | 'minimal' | 'none'

        parse: function (text, reviver) {
            if (!this.enabled || this.logLevel === 'none') {
                return this.originalParse.call(this, text);
            }
            const isVerbose = this.logLevel === 'verbose';
            isVerbose && log('%c[JSON.parse]', 'color: #4CAF50; font-weight: bold');
            isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', text);
            try {
                const result = this.originalParse.call(this, text);
                if (e) {
                if (text.includes(e) || String(result).includes(e)){
                    debugger;
                }}
                isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
                return result;
            } catch (error) {
                log('%c错误:', 'color: #F44336; font-weight: bold');
                log(error);
                throw error;
            }
        },

        stringify: function (value, replacer, space) {
            if (!this.enabled || this.logLevel === 'none') {
                return this.originalStringify.call(this, value, replacer, space);
            }

            const isVerbose = this.logLevel === 'verbose';
            isVerbose && log('%c[JSON.stringify]', 'color: #4CAF50; font-weight: bold');
            isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', value);
            try {

                const result = this.originalStringify.call(this, value, replacer, space);
                 if (e){
                if (result.includes(e)){
                    debugger;
                    }
                }
                log('%c结果: ', 'color: #2196F3; font-weight: bold', result);
                return result;
            } catch (error) {
                log('%c错误:', 'color: #F44336; font-weight: bold', error);
                throw error;
            }
        },

        enable: function () {
            this.enabled = true;
            log('%cJSON Hooks 已启用', 'color: #4CAF50; font-weight: bold');
        },

        disable: function () {
            this.enabled = false;
            log('%cJSON Hooks 已禁用', 'color: #F44336; font-weight: bold');
        },

        setLogLevel: function (level) {
            this.logLevel = level;
            log('%c日志级别设置为: %c', 'color: #2196F3; font-weight: bold', level);
        },

        restore: function () {
            JSON.parse = this.originalParse;
            JSON.stringify = this.originalStringify;
            log('%c已恢复原始 JSON 方法', 'color: #4CAF50; font-weight: bold');
        }
    };

    // 应用 Hook
    JSON.parse = jsonHooks.parse.bind(jsonHooks);
    JSON.stringify = jsonHooks.stringify.bind(jsonHooks);

    // 暴露控制接口
    window.JSONHooks = jsonHooks;

    log('%cJSON 方法 Hook 已安装', 'color: #4CAF50; font-weight: bold');
    log('%c使用 JSONHooks 对象控制 Hook 行为:', 'color: #2196F3; font-weight: bold');
    log('%cJSONHooks.enable()/disable() - 启用/禁用 Hook', 'color: #9C27B0;');
    log('%cJSONHooks.setLogLevel("verbose"|"minimal"|"none") - 设置日志级别', 'color: #9C27B0;');
    log('%cJSONHooks.restore() - 恢复原始方法', 'color: #9C27B0;');
    };
    HJSOn('${e}');
    `;
    document.documentElement.appendChild(script);
    script.remove();
}

function injectHookUrl(e) {
    const script = document.createElement('script');
    script.textContent = `
  function Hook(e) {
      const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.documentElement.appendChild(iframe);
    const log = iframe.contentWindow.console.log;
  const urlHooks = {
    original: {
      encodeURI: encodeURI,
      encodeURIComponent: encodeURIComponent,
      decodeURI: decodeURI,
      decodeURIComponent: decodeURIComponent,
      escape: escape,
      unescape: unescape
    },

    enabled: true,
    logLevel: 'verbose', // 'verbose' | 'minimal' | 'none'
    warnDeprecated: true,

    encodeURI: function(uri) {
      if (!this.enabled || this.logLevel === 'none') {
        return this.original.encodeURI.call(this, uri);
      }

      const isVerbose = this.logLevel === 'verbose';
      isVerbose && log('%c[encodeURI] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', uri);

      try {
        const startTime = performance.now();
        const result = this.original.encodeURI.call(this, uri);
        const endTime = performance.now();
        isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
         if (e){
                if (uri.includes(e) || result.includes(e)){
                    debugger;
                }
            }
        return result;
      } catch (error) {
        console.error('%c失败!', 'color: #F44336; font-weight: bold');
        console.error('%c错误:', 'color: #F44336; font-weight: bold', error.message);
        throw error;
      }
    },

    encodeURIComponent: function(component) {
      if (!this.enabled || this.logLevel === 'none') {
        return this.original.encodeURIComponent.call(this, component);
      }

      const isVerbose = this.logLevel === 'verbose';
      isVerbose && log('%c[encodeURIComponent] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', component);

      try {
        const startTime = performance.now();
        const result = this.original.encodeURIComponent.call(this, component);
        const endTime = performance.now();
        isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
        if (e){
                if (String(component).includes(e) || result.includes(e)){
                    debugger;
                }
            }
        return result;
      } catch (error) {
        console.error('%c失败!', 'color: #F44336; font-weight: bold');
        console.error('%c错误:', 'color: #F44336; font-weight: bold', error.message);
        throw error;
      }
    },

    decodeURI: function(encodedURI) {
      if (!this.enabled || this.logLevel === 'none') {
        return this.original.decodeURI.call(this, encodedURI);
      }

      const isVerbose = this.logLevel === 'verbose';
      isVerbose && log('%c[decodeURI] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', encodedURI);

      try {
        const startTime = performance.now();
        const result = this.original.decodeURI.call(this, encodedURI);
        const endTime = performance.now();
        isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
        if (e){
                if (encodedURI.includes(e) || result.includes(e)){
                    debugger;
                }
            }
        return result;
      } catch (error) {
        console.error('%c失败!', 'color: #F44336; font-weight: bold');
        console.error('%c错误:', 'color: #F44336; font-weight: bold', error.message);
        throw error;
      }
    },

    decodeURIComponent: function(encodedComponent) {
      if (!this.enabled || this.logLevel === 'none') {
        return this.original.decodeURIComponent.call(this, encodedComponent);
      }

      const isVerbose = this.logLevel === 'verbose';
      isVerbose && log('%c[decodeURIComponent] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', encodedComponent);

      try {
        const startTime = performance.now();
        const result = this.original.decodeURIComponent.call(this, encodedComponent);
        const endTime = performance.now();
        isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
        if (e){
                if (encodedComponent.includes(e) || result.includes(e)){
                    debugger;
                }
            }
        return result;
      } catch (error) {
        console.error('%c失败!', 'color: #F44336; font-weight: bold');
        console.error('%c错误:', 'color: #F44336; font-weight: bold', error.message);
        throw error;
      }
    },

    escape: function(str) {
      if (!this.enabled || this.logLevel === 'none') {
        return this.original.escape.call(this, str);
      }

      if (this.warnDeprecated) {
        console.warn('%c警告: escape() 已弃用，请使用 encodeURIComponent()',
                     'color: #FF9800; font-weight: bold');
      }

      const isVerbose = this.logLevel === 'verbose';
      isVerbose && log('%c[escape] 开始转义', 'color: #4CAF50; font-weight: bold');
      isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', str);

      try {
        const startTime = performance.now();
        const result = this.original.escape.call(this, str);
        const endTime = performance.now();
        isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
           if (e){
                if (str.includes(e) || result.includes(e)){
                    debugger;
                }
            }
        return result;
      } catch (error) {
        console.error('%c失败!', 'color: #F44336; font-weight: bold');
        console.error('%c错误:', 'color: #F44336; font-weight: bold', error.message);
        throw error;
      }
    },

    unescape: function(str) {
      if (!this.enabled || this.logLevel === 'none') {
        return this.original.unescape.call(this, str);
      }

      if (this.warnDeprecated) {
        console.warn('%c警告: unescape() 已弃用，请使用 decodeURIComponent()',
                     'color: #FF9800; font-weight: bold');
      }

      const isVerbose = this.logLevel === 'verbose';
      isVerbose && log('%c[unescape] 开始反转义', 'color: #4CAF50; font-weight: bold');
      isVerbose && log('%c输入:', 'color: #2196F3; font-weight: bold', str);

      try {
        const startTime = performance.now();
        const result = this.original.unescape.call(this, str);
        const endTime = performance.now();
        isVerbose && log('%c结果:', 'color: #2196F3; font-weight: bold', result);
        if (e){
                if (str.includes(e) || result.includes(e)){
                    debugger;
                }
            }
        return result;
      } catch (error) {
        console.error('%c失败!', 'color: #F44336; font-weight: bold');
        console.error('%c错误:', 'color: #F44336; font-weight: bold', error.message);
        throw error;
      } 
    },

    enable: function() {
      this.enabled = true;
      log('%cURL Hooks 已启用', 'color: #4CAF50; font-weight: bold');
    },

    disable: function() {
      this.enabled = false;
      log('%cURL Hooks 已禁用', 'color: #F44336; font-weight: bold');
    },

    setLogLevel: function(level) {
      this.logLevel = level;
    },

    toggleDeprecationWarnings: function(enable) {
      this.warnDeprecated = enable;
    },

    restore: function() {
      encodeURI = this.original.encodeURI;
      encodeURIComponent = this.original.encodeURIComponent;
      decodeURI = this.original.decodeURI;
      decodeURIComponent = this.original.decodeURIComponent;
      escape = this.original.escape;
      unescape = this.original.unescape;
      log('%c已恢复原始 URL 方法', 'color: #4CAF50; font-weight: bold');
    }
  };
  encodeURI = urlHooks.encodeURI.bind(urlHooks);
  encodeURIComponent = urlHooks.encodeURIComponent.bind(urlHooks);
  decodeURI = urlHooks.decodeURI.bind(urlHooks);
  decodeURIComponent = urlHooks.decodeURIComponent.bind(urlHooks);
  escape = urlHooks.escape.bind(urlHooks);
  unescape = urlHooks.unescape.bind(urlHooks);

  // 暴露控制接口
  window.URLHooks = urlHooks;

  log('%cURL 编码/解码方法 Hook 已安装', 'color: #4CAF50; font-weight: bold');
  log('%c使用 URLHooks 对象控制 Hook 行为:', 'color: #2196F3; font-weight: bold');
  log('%cURLHooks.enable()/disable() - 启用/禁用 Hook', 'color: #9C27B0;');
  log('%cURLHooks.setLogLevel("verbose"|"minimal"|"none") - 设置日志级别', 'color: #9C27B0;');
  log('%cURLHooks.toggleDeprecationWarnings(true|false) - 切换弃用警告', 'color: #9C27B0;');
  log('%cURLHooks.restore() - 恢复原始方法', 'color: #9C27B0;');}
  Hook('${e}');
    `;
    document.documentElement.appendChild(script);
    script.remove();
}

function injectHookXhr(e) {

    const script = document.createElement('script');
    script.textContent = `
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.documentElement.appendChild(iframe);
const log = iframe.contentWindow.console.log;

function HookFetch(e) {
const originalFetch = window.fetch;
window.fetch = async function(...args) {
// 请求拦截
let requestInfo = args[0];
let requestInit = args[1] || {};
log('%c[Fetch Request]', 'color: blue; font-weight: bold');
log('请求URL:', typeof requestInfo === 'string' ? requestInfo : requestInfo.url);
log('请求方法:', requestInit.method || 'GET');
log('请求头:', requestInit.headers || {});
log('请求体:', requestInit.body);
// 开始时间记录
const startTime = Date.now();

try {
  const response = await originalFetch.apply(this, args);
  
  // 克隆响应以便读取而不影响原始流
  const clonedResponse = response.clone();
  const textResponse = response.clone();
  
  // 响应拦截
  
  // 读取响应体
  const data = await clonedResponse.json().catch(() => null);
  const text = await textResponse.text().catch(() => null);
  const content = data || text;
  log('%c[Fetch Response]', 'color: red; font-weight: bold');
  log('响应状态:', clonedResponse.status);
  log('响应头:', Object.fromEntries(clonedResponse.headers.entries()));
  log('响应体:', content);
  
  // 计算请求耗时
  const endTime = Date.now();
  log('请求耗时:', endTime - startTime + 'ms');
  log('-'.repeat(180));
  console.groupEnd();
  return response;
} catch (error) {
  log('请求错误:', error);
  console.groupEnd();
  throw error;
}
};

console.log('Fetch hook已安装');
}
function Hook(e) {
    // 保存原始的XMLHttpRequest对象
    const originalXHR = window.XMLHttpRequest;
    // 重写XMLHttpRequest构造函数
    window.XMLHttpRequest = function() {
        const xhr = new originalXHR();
        
        // 保持原型链完整
        Object.setPrototypeOf(xhr, originalXHR.prototype);
        
        // 保存原始的open方法
        const originalOpen = xhr.open;
        
        // 保存原始的send方法
        const originalSend = xhr.send;
        
        // 保存原始的setRequestHeader方法
        const originalSetRequestHeader = xhr.setRequestHeader;
        
        // 用于存储请求头
        const requestHeaders = {};
        
        // 重写open方法
        xhr.open = function(method, url) {
            this._method = method;
            this._url = url;
            
            // 可以在这里修改请求方法或URL
            // method = 'GET'; // 示例：强制改为GET请求
            // url = url.replace('example.com', 'proxy.example.com'); // 示例：修改URL
           if (e){
                if (url.includes(e)){
                    debugger;
                }
            }
            return originalOpen.apply(this, arguments);
        };
        
        // 重写setRequestHeader方法
        xhr.setRequestHeader = function(header, value) {
            requestHeaders[header] = value;
             if (e){
                if (header.includes(e) || String(value).includes(e)){
                    debugger;
                }
            }
            return originalSetRequestHeader.apply(this, arguments);
        };
        
        // 重写send方法
        xhr.send = function(data) {
            // 请求发送前的处理
            const requestData = data;
           if (e){
                if (String(data).includes(e)){
                    debugger;
                }
            }
            // 打印请求信息
            log('%c[XHR Request]: %s %s', 'color: blue; font-weight: bold',this._method, this._url);
            log('%c[data]:', 'color: green; font-weight: bold', data)
            log('%c[headers]:', 'color: green; font-weight: bold', requestHeaders)
            
            // 监听readyState变化
            this.addEventListener('readystatechange', function() {
                if (this.readyState === 4) {
                    // 请求完成
                    let response = this.response;
                    
                    try {
                        // 尝试解析JSON响应
                        response = JSON.parse(this.responseText);
                    } catch (e) {
                        // 不是JSON格式，保持原样
                    }
                    
                    // 可以在这里修改响应数据
                    // if (typeof response === 'object') {
                    //     response.modified = true; // 示例：修改响应数据
                    // }
                    
                    // 打印响应信息
                    if (e){
                    if (this._url.includes(e) ||String(this.status).includes(e) || String(this.statusText).includes(e) || String(response).includes(e)){
                        debugger;
                    }}
                    log('%c[XHR Response]: %s', 'color: red; font-weight: bold', this._method, this._url);
                    log('%c[响应]:', 'color: green; font-weight: bold', {
                        url: this._url,
                        status: this.status,
                        statusText: this.statusText,
                        headers: this.getAllResponseHeaders(),
                        response: response
                    });
                    log('-'.repeat(180));
                }
            });
            
            return originalSend.apply(this, arguments);
        };
        return xhr;
    };
    
     // 隐藏重写痕迹
    Object.defineProperty(window, 'XMLHttpRequest', {
        configurable: false,
        writable: false
    });
}
log('%cXHR Hook 已安装', 'color: #4CAF50; font-weight: bold');
Hook('${e}');
HookFetch('${e}');
`;
    document.documentElement.appendChild(script);
    script.remove();
}

function injectHookCookie(e) {
    const script = document.createElement('script');
    script.textContent = `
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.documentElement.appendChild(iframe);
const log = iframe.contentWindow.console.log;
function Hook(e) {

var cookie_cache = document.cookie;

Object.defineProperty(document, 'cookie', {
    get: function() {
        log('%c[Cookie Get]: ', 'color: #4CAF50; font-weight: bold', cookie_cache);
        if (e){
                if (cookie_cache.includes(e)){
                    debugger;
                }
            }
        return cookie_cache;
    },
    set: function(val) {
        log('%c[Cookie Set]: ', 'color: red; font-weight: bold', val);
        if (e){
                if (val.includes(e)){
                    debugger;
                }
            }
    }
})

}

  log('%cCookie Hook 已安装', 'color: #4CAF50; font-weight: bold');
  Hook('${e}');
`;
    document.documentElement.appendChild(script);
    script.remove();
}

function injectHookDebugger() {
    'use strict';
    // 立即注入主页面
    injectScript(window);

    // 同步监听DOM变化，避免等待事件循环
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === "IFRAME") {
                    // 立即尝试注入，不等待iframe加载完成
                    try {
                        injectScript(node.contentWindow);
                    } catch (e) {
                        console.log(e);
                    } // 跨域静默失败
                    // 同时绑定load事件作为兜底
                    node.addEventListener('load', () => {
                        try {
                            injectScript(node.contentWindow);
                        } catch (e) {
                            console.log(e);
                        }
                    });
                }
            });
        });
    });

    // 在document元素上立即开始监听（早于body存在）
    observer.observe(document.documentElement, {
        childList: true, subtree: true
    });
    Array.from(document.getElementsByTagName('iframe')).forEach(iframe => {
        try {
            if (iframe.contentWindow) injectScript(iframe.contentWindow);
        } catch (e) {
            console.log(e);
        }
    });
}

function injectScript(targetWindow) {
    try {
        const script = targetWindow.document.createElement('script');
        script.textContent = `(${injectionCode.toString()})(window);`; // 内联关键代码
        targetWindow.document.documentElement.appendChild(script);
        script.remove();
    } catch (e) {
        console.log(e);
    }
}

// 内联的注入脚本核心逻辑
function injectionCode(currentWindow) {
    'use strict';
    console.log("Injected script is running in", currentWindow.location.href);
    if (!window.top.MY_EXTENSION_FUNC_) {
        window.top.MY_EXTENSION_FUNC_ = {
            'Array_isArray': window.top.Array.isArray,
            'Array_prototype_forEach': window.top.Array.prototype.forEach,
            'Array_prototype_indexOf': window.top.Array.prototype.indexOf,
            'Array_prototype_join': window.top.Array.prototype.join,
            'Array_prototype_shift': window.top.Array.prototype.shift,
            'Array_prototype_some': window.top.Array.prototype.some,
            'Blob': window.top.Blob,
            'CompositionEvent': window.top.CompositionEvent,
            'CustomEvent': window.top.CustomEvent,
            'CustomEvent_prototype_AT_TARGET': window.top.CustomEvent.prototype.AT_TARGET,
            'DOMParser': window.top.DOMParser,
            'DOMParser_prototype_parseFromString': window.top.DOMParser.prototype.parseFromString,
            'Date_now': window.top.Date.now,
            'Document_prototype_createElementNS': window.top.Document.prototype.createElementNS,
            'Document_prototype_getElementsByTagName': window.top.Document.prototype.getElementsByTagName,
            'Element_prototype_remove': window.top.Element.prototype.remove,
            'Element_prototype_removeAttribute': window.top.Element.prototype.removeAttribute,
            'Element_prototype_setAttribute': window.top.Element.prototype.setAttribute,
            'Error': window.top.Error,
            'FileReader': window.top.FileReader,
            'FileReader_prototype_readAsBinaryString': window.top.FileReader.prototype.readAsBinaryString,
            'FileReader_prototype_readAsText': window.top.FileReader.prototype.readAsText,
            'Function': window.top.Function,
            'Function_toString': window.top.Function.toString,
            'JSON_parse': window.top.JSON.parse,
            'JSON_stringify': window.top.JSON.stringify,
            'KeyboardEvent': window.top.KeyboardEvent,
            'Math_floor': window.top.Math.floor,
            'Math_max': window.top.Math.max,
            'Math_min': window.top.Math.min,
            'Math_random': window.top.Math.random,
            'MouseEvent': window.top.MouseEvent,
            'MutationObserver': window.top.MutationObserver,
            'MutationObserver_prototype_disconnect': window.top.MutationObserver.prototype.disconnect,
            'Number': window.top.Number,
            'Number_MAX_SAFE_INTEGER': window.top.Number.MAX_SAFE_INTEGER,
            'Number_prototype_toString': window.top.Number.prototype.toString,
            'Object_apply': window.top.Object.apply,
            'Object_bind': window.top.Object.bind,
            'Object_defineProperties': window.top.Object.defineProperties,
            'Object_defineProperty': window.top.Object.defineProperty,
            'Object_getOwnPropertyDescriptors': window.top.Object.getOwnPropertyDescriptors,
            'Object_getOwnPropertyNames': window.top.Object.getOwnPropertyNames,
            'Object_hasOwnProperty': window.top.Object.hasOwnProperty,
            'Object_keys': window.top.Object.keys,
            'Object_prototype_hasOwnProperty': window.top.Object.prototype.hasOwnProperty,
            'Object_prototype_toString': window.top.Object.prototype.toString,
            'Object_values': window.top.Object.values,
            'Promise': window.top.Promise,
            'Promise_prototype_catch': window.top.Promise.prototype.catch,
            'Promise_prototype_constructor': window.top.Promise.prototype.constructor,
            'Promise_prototype_then': window.top.Promise.prototype.then,
            'Proxy': window.top.Proxy,
            'ReadableStream': window.top.ReadableStream,
            'RegExp': window.top.RegExp,
            'String': window.top.String,
            'String_fromCharCode': window.top.String.fromCharCode,
            'String_prototype_charCodeAt': window.top.String.prototype.charCodeAt,
            'String_prototype_indexOf': window.top.String.prototype.indexOf,
            'String_prototype_replace': window.top.String.prototype.replace,
            'String_prototype_replaceAll': window.top.String.prototype.replaceAll,
            'String_prototype_slice': window.top.String.prototype.slice,
            'String_prototype_split': window.top.String.prototype.split,
            'String_prototype_substr': window.top.String.prototype.substr,
            'String_prototype_toLowerCase': window.top.String.prototype.toLowerCase,
            'String_prototype_toUpperCase': window.top.String.prototype.toUpperCase,
            'String_prototype_trim': window.top.String.prototype.trim,
            'Symbol_toStringTag': window.top.Symbol.toStringTag,
            'Symbol_unscopables': window.top.Symbol.unscopables,
            'URLSearchParams_prototype_toString': window.top.URLSearchParams.prototype.toString,
            'URL_createObjectURL': window.top.URL.createObjectURL,
            'URL_revokeObjectURL': window.top.URL.revokeObjectURL,
            'Uint8Array': window.top.Uint8Array,
            'Window': window.top.Window,
            'XMLHttpRequest': window.top.XMLHttpRequest,
            'XMLHttpRequest_prototype_DONE': window.top.XMLHttpRequest.prototype.DONE,
            'XMLHttpRequest_prototype_HEADERS_RECEIVED': window.top.XMLHttpRequest.prototype.HEADERS_RECEIVED,
            'XMLHttpRequest_prototype_LOADING': window.top.XMLHttpRequest.prototype.LOADING,
            'XMLHttpRequest_prototype_OPENED': window.top.XMLHttpRequest.prototype.OPENED,
            'XMLHttpRequest_prototype_UNSENT': window.top.XMLHttpRequest.prototype.UNSENT,
            'XMLHttpRequest_prototype_open': window.top.XMLHttpRequest.prototype.open,
            'XMLHttpRequest_prototype_send': window.top.XMLHttpRequest.prototype.send,
            'addEventListener': window.top.addEventListener,
            'alert': window.top.alert,
            'atob': window.top.atob,
            'btoa': window.top.btoa,
            'clearInterval': window.top.clearInterval,
            'clearTimeout': window.top.clearTimeout,
            'close': window.top.close,
            'confirm': window.top.confirm,
            'console_assert': window.top.console.assert,
            'console_clear': window.top.console.clear,
            'console_context': window.top.console.context,
            'console_count': window.top.console.count,
            'console_countReset': window.top.console.countReset,
            'console_createTask': window.top.console.createTask,
            'console_debug': window.top.console.debug,
            'console_dir': window.top.console.dir,
            'console_dirxml': window.top.console.dirxml,
            'console_error': window.top.console.error,
            'console_group': window.top.console.group,
            'console_groupCollapsed': window.top.console.groupCollapsed,
            'console_groupEnd': window.top.console.groupEnd,
            'console_info': window.top.console.info,
            'console_log': window.top.console.log,
            'console_memory': window.top.console.memory,
            'console_profile': window.top.console.profile,
            'console_profileEnd': window.top.console.profileEnd,
            'console_table': window.top.console.table,
            'console_time': window.top.console.time,
            'console_timeEnd': window.top.console.timeEnd,
            'console_timeLog': window.top.console.timeLog,
            'console_timeStamp': window.top.console.timeStamp,
            'console_trace': window.top.console.trace,
            'console_warn': window.top.console.warn,
            'decodeURI': window.top.decodeURI,
            'decodeURIComponent': window.top.decodeURIComponent,
            'dispatchEvent': window.top.dispatchEvent,
            'encodeURI': window.top.encodeURI,
            'encodeURIComponent': window.top.encodeURIComponent,
            'escape': window.top.escape,
            'eval': window.top.eval,
            'parseFloat': window.top.parseFloat,
            'parseInt': window.top.parseInt,
            'postMessage': window.top.postMessage,
            'prompt': window.top.prompt,
            'removeEventListener': window.top.removeEventListener,
            'setInterval': window.top.setInterval,
            'setTimeout': window.top.setTimeout,
            'unescape': window.top.unescape,
        };
        (function () {
            'use strict';
            const isString = (obj) => window.top.MY_EXTENSION_FUNC_.Object_prototype_toString.call(obj) === '[object String]';
            const isArray = (obj) => window.top.MY_EXTENSION_FUNC_.Object_prototype_toString.call(obj) === '[object Array]';
            const isObject = (obj) => window.top.MY_EXTENSION_FUNC_.Object_prototype_toString.call(obj) === '[object Object]';

            function removeDebuggerFromString(str) {
                if (str.includes('debugger')) {
                    if (window.top.MY_EXTENSION_FUNC_.my_print) {
                        window.top.MY_EXTENSION_FUNC_.console_log(`hook debugger -> "${str}"`);
                    }
                }
                return str.replace(/(^|[^a-zA-Z0-9$_])debugger;?([^a-zA-Z0-9$_]|$)/g, '$1$2').replace(/\\x64\\x65\\x62\\x75\\x67\\x67\\x65\\x72/g, '').replace(/(d|D)(e|E)(b|B)(u|U)(g|G){2}(e|E)(r|R)/g, '');
            }

            function removeDebuggerFromArray(arr, visited) {
                return arr.map((item) => removeDebugger(item, visited));
            }

            function removeDebuggerFromObject(obj, visited) {
                if (visited.has(obj)) return obj;
                visited.add(obj);
                const result = {};
                for (const key in obj) {
                    if (window.top.MY_EXTENSION_FUNC_.Object_prototype_hasOwnProperty.call(obj, key)) {
                        result[key] = removeDebugger(obj[key], visited);
                    }
                }
                return result;
            }

            function removeDebugger(obj, visited = new WeakSet()) {
                if (isString(obj)) {
                    return removeDebuggerFromString(obj);
                } else if (isArray(obj)) {
                    return removeDebuggerFromArray(obj, visited);
                } else if (isObject(obj)) {
                    return removeDebuggerFromObject(obj, visited);
                }
                return obj;
            }

            window.top.MY_EXTENSION_FUNC_.removeDebugger = removeDebugger;
        })();
    } else {
        window.top.MY_EXTENSION_FUNC_.console_log('already exist original_window');
    }


    (function (current_window) {
        'use strict';
        window.top.MY_EXTENSION_FUNC_.my_print = 1;

        function creat_proxy(func_list) {
            const originalfunc = func_list[0][func_list[1]];
            window.top.MY_EXTENSION_FUNC_.Object_defineProperty(func_list[0], func_list[1], {
                value: new window.top.MY_EXTENSION_FUNC_.Proxy(originalfunc, {
                    apply(target, thisArg, argumentsList) {
                        for (var i = 0; i < argumentsList.length; i++) {
                            argumentsList[i] = window.top.MY_EXTENSION_FUNC_.removeDebugger(argumentsList[i]);
                        }
                        return Reflect.apply(target, thisArg, argumentsList);
                    },
                }), enumerable: 1,
            })
        }

        var hook_list = [[current_window, 'eval'], [current_window, 'Function'], [current_window.Function.prototype, 'constructor'], [current_window, 'setInterval'], [current_window, 'setTimeout']];
        for (var i = 0; i < hook_list.length; i++) {
            creat_proxy(hook_list[i]);
        }
        ;

        (function () {
            'use strict';
            window.top.MY_EXTENSION_FUNC_.Object_defineProperty(current_window.console, 'clear', {
                value: new window.top.MY_EXTENSION_FUNC_.Proxy(current_window.console.clear, {
                    apply(target, thisArg, argumentsList) {
                        window.top.MY_EXTENSION_FUNC_.console_log('apply clear');
                        return;
                    }
                }), enumerable: 1,
            })
        }());
        (function () {
            'use strict';
            window.top.MY_EXTENSION_FUNC_.Object_defineProperty(current_window.Math, 'random', {
                value: new window.top.MY_EXTENSION_FUNC_.Proxy(current_window.Math.random, {
                    apply(target, thisArg, argumentsList) {
                        // window.top.MY_EXTENSION_FUNC_.console_log('apply random');
                        return 0.5;
                    },
                }), enumerable: 1,
            });
        }());

    }(currentWindow));
    window.top.MY_EXTENSION_FUNC_.console_log('over!');
}




