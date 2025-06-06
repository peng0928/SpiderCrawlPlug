﻿chrome.storage.local.get('spiderSwitch', function (result) {
    spiderSwitch = result.spiderSwitch;
    if (spiderSwitch) {
        console.log("------------------正在监听网络请求------------------");
    }
});

chrome.storage.local.get(['hookJson', 'HookInput', 'hookUrl', 'hookXhr', 'hookCookie'], function (result) {
    hookJson = result.hookJson;
    HookInput = String(result.HookInput);
    hookUrl = result.hookUrl;
    hookXhr = result.hookXhr;
    hookCookie = result.hookCookie;
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
        console.log("------------------正在监听XHR请求------------------")
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectHookCookie(HookInput));
        } else {
            injectHookCookie(HookInput);
        }
    }
});

function injectHookJson(e) {
    const script = document.createElement('script');
    script.textContent = `
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
            isVerbose && console.log('%c[JSON.parse]', 'color: #4CAF50; font-weight: bold');
            isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', text);
            try {
                const result = this.originalParse.call(this, text);
                if (e) {
                if (text.includes(e) || String(result).includes(e)){
                    debugger;
                }}
                isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
                return result;
            } catch (error) {
                console.log('%c错误:', 'color: #F44336; font-weight: bold');
                console.log(error);
                throw error;
            }
        },

        stringify: function (value, replacer, space) {
            if (!this.enabled || this.logLevel === 'none') {
                return this.originalStringify.call(this, value, replacer, space);
            }

            const isVerbose = this.logLevel === 'verbose';
            isVerbose && console.log('%c[JSON.stringify]', 'color: #4CAF50; font-weight: bold');
            isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', value);
            try {

                const result = this.originalStringify.call(this, value, replacer, space);
                 if (e){
                if (result.includes(e)){
                    debugger;
                    }
                }
                console.log('%c结果: ', 'color: #2196F3; font-weight: bold', result);
                return result;
            } catch (error) {
                console.log('%c错误:', 'color: #F44336; font-weight: bold', error);
                throw error;
            }
        },

        enable: function () {
            this.enabled = true;
            console.log('%cJSON Hooks 已启用', 'color: #4CAF50; font-weight: bold');
        },

        disable: function () {
            this.enabled = false;
            console.log('%cJSON Hooks 已禁用', 'color: #F44336; font-weight: bold');
        },

        setLogLevel: function (level) {
            this.logLevel = level;
            console.log('%c日志级别设置为: %c', 'color: #2196F3; font-weight: bold', level);
        },

        restore: function () {
            JSON.parse = this.originalParse;
            JSON.stringify = this.originalStringify;
            console.log('%c已恢复原始 JSON 方法', 'color: #4CAF50; font-weight: bold');
        }
    };

    // 应用 Hook
    JSON.parse = jsonHooks.parse.bind(jsonHooks);
    JSON.stringify = jsonHooks.stringify.bind(jsonHooks);

    // 暴露控制接口
    window.JSONHooks = jsonHooks;

    console.log('%cJSON 方法 Hook 已安装', 'color: #4CAF50; font-weight: bold');
    console.log('%c使用 JSONHooks 对象控制 Hook 行为:', 'color: #2196F3; font-weight: bold');
    console.log('%cJSONHooks.enable()/disable() - 启用/禁用 Hook', 'color: #9C27B0;');
    console.log('%cJSONHooks.setLogLevel("verbose"|"minimal"|"none") - 设置日志级别', 'color: #9C27B0;');
    console.log('%cJSONHooks.restore() - 恢复原始方法', 'color: #9C27B0;');
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
      isVerbose && console.log('%c[encodeURI] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', uri);

      try {
        const startTime = performance.now();
        const result = this.original.encodeURI.call(this, uri);
        const endTime = performance.now();
        isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
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
      isVerbose && console.log('%c[encodeURIComponent] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', component);

      try {
        const startTime = performance.now();
        const result = this.original.encodeURIComponent.call(this, component);
        const endTime = performance.now();
        isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
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
      isVerbose && console.log('%c[decodeURI] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', encodedURI);

      try {
        const startTime = performance.now();
        const result = this.original.decodeURI.call(this, encodedURI);
        const endTime = performance.now();
        isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
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
      isVerbose && console.log('%c[decodeURIComponent] ', 'color: #4CAF50; font-weight: bold');
      isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', encodedComponent);

      try {
        const startTime = performance.now();
        const result = this.original.decodeURIComponent.call(this, encodedComponent);
        const endTime = performance.now();
        isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
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
      isVerbose && console.log('%c[escape] 开始转义', 'color: #4CAF50; font-weight: bold');
      isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', str);

      try {
        const startTime = performance.now();
        const result = this.original.escape.call(this, str);
        const endTime = performance.now();
        isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
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
      isVerbose && console.log('%c[unescape] 开始反转义', 'color: #4CAF50; font-weight: bold');
      isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', str);

      try {
        const startTime = performance.now();
        const result = this.original.unescape.call(this, str);
        const endTime = performance.now();
        isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
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
      console.log('%cURL Hooks 已启用', 'color: #4CAF50; font-weight: bold');
    },

    disable: function() {
      this.enabled = false;
      console.log('%cURL Hooks 已禁用', 'color: #F44336; font-weight: bold');
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
      console.log('%c已恢复原始 URL 方法', 'color: #4CAF50; font-weight: bold');
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

  console.log('%cURL 编码/解码方法 Hook 已安装', 'color: #4CAF50; font-weight: bold');
  console.log('%c使用 URLHooks 对象控制 Hook 行为:', 'color: #2196F3; font-weight: bold');
  console.log('%cURLHooks.enable()/disable() - 启用/禁用 Hook', 'color: #9C27B0;');
  console.log('%cURLHooks.setLogLevel("verbose"|"minimal"|"none") - 设置日志级别', 'color: #9C27B0;');
  console.log('%cURLHooks.toggleDeprecationWarnings(true|false) - 切换弃用警告', 'color: #9C27B0;');
  console.log('%cURLHooks.restore() - 恢复原始方法', 'color: #9C27B0;');}
  Hook('${e}');
    `;
    document.documentElement.appendChild(script);
    script.remove();
}

function injectHookXhr(e) {
    const script = document.createElement('script');
    script.textContent = `
function Hook(e) {
    // 保存原始的XMLHttpRequest对象
    const originalXHR = window.XMLHttpRequest;

    // 重写XMLHttpRequest构造函数
    window.XMLHttpRequest = function() {
        const xhr = new originalXHR();
        
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
            console.log(header, value)
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
            
            // 可以在这里修改请求数据
            // if (data) {
            //     try {
            //         const jsonData = JSON.parse(data);
            //         jsonData.modified = true; // 示例：修改请求数据
            //         data = JSON.stringify(jsonData);
            //         console.log('%c[Request Data]', 'color: blue; font-weight: bold');
            //     } catch (e) {
            //     }
            // }
           if (e){
                if (String(data).includes(e)){
                    debugger;
                }
            }
            // 打印请求信息
            console.log('%c[XHR Request]: %s %s', 'color: blue; font-weight: bold',this._method, this._url);
            console.log('%c[data]:', 'color: green; font-weight: bold', data)
            console.log('%c[headers]:', 'color: green; font-weight: bold', requestHeaders)
            
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
                    console.log('%c[XHR Response]: %s', 'color: red; font-weight: bold', this._url);
                    console.log('%c[响应]:', 'color: green; font-weight: bold', {
                        url: this._url,
                        status: this.status,
                        statusText: this.statusText,
                        headers: this.getAllResponseHeaders(),
                        response: response
                    });
                    console.log('-'.repeat(180));
                    console.log(\n\n);
                    // 如果需要，可以在这里触发自定义事件
                    const event = new CustomEvent('xhrHookResponse', {
                        detail: {
                            url: this._url,
                            status: this.status,
                            response: response
                        }
                    });
                    window.dispatchEvent(event);
                }
            });
            
            return originalSend.apply(this, arguments);
        };
        return xhr;
    };
}

  console.log('%cXHR Hook 已安装', 'color: #4CAF50; font-weight: bold');
  Hook('${e}');
`;
    document.documentElement.appendChild(script);
    script.remove();
}

function injectHookCookie(e) {
    const script = document.createElement('script');
    script.textContent = `
function Hook(e) {
var cookie_cache = document.cookie;

Object.defineProperty(document, 'cookie', {
    get: function() {
        console.log('%c[Cookie Get]: ', 'color: #4CAF50; font-weight: bold', cookie_cache);
        if (e){
                if (cookie_cache.includes(e)){
                    debugger;
                }
            }
        return cookie_cache;
    },
    set: function(val) {
        console.log('%c[Cookie Set]: ', 'color: red; font-weight: bold', val);
        if (e){
                if (val.includes(e)){
                    debugger;
                }
            }
    }
})

}

  console.log('%cCookie Hook 已安装', 'color: #4CAF50; font-weight: bold');
  Hook('${e}');
`;
    document.documentElement.appendChild(script);
    script.remove();
}