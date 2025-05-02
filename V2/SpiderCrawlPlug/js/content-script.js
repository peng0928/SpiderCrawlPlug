chrome.storage.local.get('spiderSwitch', function (result) {
    spiderSwitch = result.spiderSwitch;
    if (spiderSwitch) {
        console.log("------------------正在监听网络请求------------------");
    }
});
let HookInput = "";
 chrome.storage.local.get(['HookInput'], (result) => {
    HookInput =  result;
})

chrome.storage.local.get('hookJson', function (result) {
    result = result.hookJson;
    if (result) {
        console.log("------------------hookJson------------------");
        // 确保DOM加载后注入
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectHook);
        } else {
            injectHook(chrome);
        }
    }
});

function injectHook(chrome) {
    const script = document.createElement('script');
    script.textContent = `
    function HJSOn(chrome) {
    const jsonHooks = {
        originalParse: JSON.parse,
        originalStringify: JSON.stringify,
        enabled: true,
        logLevel: 'verbose', // 'verbose' | 'minimal' | 'none'

        parse: function (text, reviver) {
            if (!this.enabled || this.logLevel === 'none') {
                return this.originalParse.call(this, text, reviver);
            }

            const isVerbose = this.logLevel === 'verbose';
            isVerbose && console.log('%c[JSON.parse]', 'color: #4CAF50; font-weight: bold');
            isVerbose && console.log('%c输入:', 'color: #2196F3; font-weight: bold', text);

            try {
                const result = this.originalParse.call(this, text, reviver);
                isVerbose && console.log('%c结果:', 'color: #2196F3; font-weight: bold', result);
                return result;
            } catch (error) {
                console.error('%c错误:', 'color: #F44336; font-weight: bold', error);
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
                console.log('%c结果: %c', 'color: #2196F3; font-weight: bold',result);
                return result;
            } catch (error) {
                console.error('%c错误:', 'color: #F44336; font-weight: bold', error);
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
    HJSOn(chrome);
    `;
    document.documentElement.appendChild(script);
    script.remove();
}

