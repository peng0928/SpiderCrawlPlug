import{d as ye,r as c,x as j,f as we,h as i,c as u,o as d,a as o,i as t,p as n,l as M,j as N,F as oe,q as te,t as H,m as be,w as Ce,y as He,T as se,b as Ee}from"./chunk-CUp3Vo2h.js";import{M as p,A as Se,c as Te}from"./chunk-DcYvkcCT.js";const Je={class:"popup-container"},Ie={class:"header"},Me={class:""},Re={class:"content"},Oe={class:"config-grid"},Xe={class:"select-wrapper"},Ue={class:"switch-grid"},Ae={class:"switch-item"},Ve={class:"switch-item"},$e={class:"switch-item"},De={class:"switch-item"},Ne={class:"switch-item"},ze={class:"switch-item"},xe={class:"js-injector-wrapper"},Fe={class:"injector-toolbar"},Le={class:"toolbar-left"},je={key:0,class:"toolbar-right"},qe={key:0,class:"injector-content"},Pe={class:"templates-area"},Ge={class:"area-header"},Be={class:"header-left"},We={class:"template-grid"},Ke={key:0,class:"custom-section"},Qe={class:"template-cards"},Ye=["onClick"],Ze={class:"t-name"},eo={class:"editor-area"},oo={class:"editor-header"},to={class:"header-info"},so={class:"header-status"},lo={key:0,class:"editing-indicator"},no={class:"auto-save-hint"},ao={class:"editor-container"},io={key:0,class:"validation-message error"},ro={class:"validation-message success"},co={key:1,class:"disabled-hint"},uo={class:"template-manager"},vo={class:"add-template-form"},po={key:0,class:"empty-state"},mo={key:1,class:"tpl-list"},go={class:"list-count"},_o={class:"row-main"},fo={class:"tpl-info"},ko={class:"tpl-name"},ho={class:"tpl-code"},yo={class:"row-btns"},wo={key:2,class:"error-state"},bo=ye({__name:"Popup",setup(z){const k=c(""),h=c("document start"),y=c(!1),C=c(!1),E=c(!1),S=c(!1),T=c(!1),J=c(!1),I=c(!1),g=c(!1),r=c(""),w=c(""),A=c(!1),a=c([]),R=c(""),_=c(-1),O=s=>{if(!s.trim())return w.value="",!0;const e=[{regex:/\(/g,pair:")"},{regex:/\{/g,pair:"}"},{regex:/\[/g,pair:"]"}];for(const b of e){const m=(s.match(b.regex)||[]).length,x=new RegExp(`\\${b.pair}`,"g"),D=(s.match(x)||[]).length;if(m!==D)return w.value=`语法错误: ${b.pair} 括号不匹配`,!1}const v=[{pattern:/\b(function|if|for|while|switch)\s*\([^)]*$/m,message:"函数或语句括号未闭合"},{pattern:/catch\s*\([^)]*$/m,message:"catch语句括号未闭合"},{pattern:/=\s*$/m,message:"赋值语句不完整"}];for(const b of v)if(b.pattern.test(s))return w.value=b.message,!1;return w.value="",!0},V=()=>{const s={hookInput:k.value,spiderSwitch:C.value,hookJson:y.value,hookType:h.value,hookDebug:J.value,hookCookie:T.value,hookXhr:S.value,hookUrl:E.value,hookJJM:I.value,dynamicJsEnabled:g.value,dynamicJsCode:r.value,customTemplates:a.value};chrome.storage.sync.set(s,()=>{chrome.runtime.lastError?(console.error("保存失败:",chrome.runtime.lastError),p.error("保存失败: "+chrome.runtime.lastError.message)):console.log("配置已保存")}),le()},le=async()=>{try{const[s]=await chrome.tabs.query({active:!0,currentWindow:!0});s?.id&&chrome.tabs.sendMessage(s.id,{type:"UPDATE_HOOK_CONFIG",payload:{dynamicJsEnabled:g.value,dynamicJsCode:r.value,hookInput:k.value,hookJson:y.value,hookUrl:E.value,hookXhr:S.value,hookCookie:T.value,hookDebug:J.value,hookJJM:I.value}}).catch(()=>{})}catch(s){console.error("通知失败:",s)}};j(r,s=>{g.value&&O(s),V()}),j(g,()=>{V(),g.value||(w.value="")}),j([k,h,y,C,E,S,T,J,I],()=>{V()});const ne=()=>{chrome.tabs.create({url:chrome.runtime.getURL("options.html")})},ae=()=>{r.value="",w.value="",_.value=-1,V(),p.info("已清空")},ie=s=>({console:`// Console Hook - 拦截控制台输出
(function() {
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = function(...args) {
    // 可以通过postMessage发送到插件
    if (window.__CHROME_EXTENSION__) {
      window.__CHROME_EXTENSION__.postMessage({
        type: 'console_log',
        data: args
      });
    }
    originalLog.apply(console, args);
  };

  console.warn = function(...args) {
    if (window.__CHROME_EXTENSION__) {
      window.__CHROME_EXTENSION__.postMessage({
        type: 'console_warn',
        data: args
      });
    }
    originalWarn.apply(console, args);
  };

  console.error = function(...args) {
    if (window.__CHROME_EXTENSION__) {
      window.__CHROME_EXTENSION__.postMessage({
        type: 'console_error',
        data: args
      });
    }
    originalError.apply(console, args);
  };

  console.log('[Hook] Console拦截器已加载');
})();`,fetch:`// Fetch/XHR请求拦截
(function() {
  // Hook Fetch
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    console.log('[Fetch Hook] 请求URL:', args[0]);
    console.log('[Fetch Hook] 请求配置:', args[1]);
    // 可以在这里记录或修改请求
    return originalFetch.apply(this, args);
  };

  // Hook XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  const originalXHRSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    this._hookMethod = method;
    this._hookUrl = url;
    return originalXHROpen.apply(this, [method, url, ...rest]);
  };

  XMLHttpRequest.prototype.send = function(body) {
    console.log('[XHR Hook] 请求方法:', this._hookMethod);
    console.log('[XHR Hook] 请求URL:', this._hookUrl);
    console.log('[XHR Hook] 请求体:', body);
    return originalXHRSend.call(this, body);
  };

  console.log('[Hook] 请求拦截器已加载');
})();`,cookie:`// Cookie操作监控
(function() {
  try {
    const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');

    if (cookieDescriptor) {
      Object.defineProperty(document, 'cookie', {
        get: function() {
          const value = cookieDescriptor.get.call(this);
          console.log('[Cookie Get]', value);
          return value;
        },
        set: function(value) {
          console.log('[Cookie Set]', value);
          return cookieDescriptor.set.call(this, value);
        }
      });
    }

    // 监控localStorage
    const originalSetItem = Storage.prototype.setItem;
    const originalGetItem = Storage.prototype.getItem;
    const originalRemoveItem = Storage.prototype.removeItem;

    Storage.prototype.setItem = function(key, value) {
      console.log('[Storage Set] 键:', key, '值:', value);
      originalSetItem.call(this, key, value);
    };

    Storage.prototype.getItem = function(key) {
      const value = originalGetItem.call(this, key);
      if (value) console.log('[Storage Get] 键:', key, '值:', value);
      return value;
    };

    Storage.prototype.removeItem = function(key) {
      console.log('[Storage Remove] 键:', key);
      originalRemoveItem.call(this, key);
    };

    console.log('[Hook] Cookie/Storage监控已加载');
  } catch(e) {
    console.error('[Hook] 监控加载失败:', e);
  }
})();`,debugger:`// 绕过debugger反调试
(function() {
  // 方法1: 重写debugger语句
  window.__defineGetter__('debugger', function() {});

  // 方法2: 阻止debugger的执行
  const originalEval = window.eval;
  window.eval = function(code) {
    if (code && code.toString().includes('debugger')) {
      console.log('[Anti-Debug] 拦截debugger语句');
      return;
    }
    return originalEval.call(this, code);
  };

  // 方法3: 定时清空debugger相关的定时器
  const originalSetInterval = window.setInterval;
  window.setInterval = function(fn, time) {
    if (fn.toString().includes('debugger')) {
      console.log('[Anti-Debug] 拦截debugger定时器');
      return null;
    }
    return originalSetInterval.call(this, fn, time);
  };

  console.log('[Hook] 反Debugger已加载');
})();`})[s]||"",$=s=>{const e=ie(s);e&&(r.value=e,O(e),p.success("模板已应用"))},P=s=>{if(!Array.isArray(a.value)){p.warning("模板数据异常");return}const e=a.value[s];e&&(r.value=e.code,_.value=-1,O(e.code),p.success(`已应用模板: ${e.name}`))},re=()=>{A.value=!1,R.value="",_.value=-1},G=()=>{const s=R.value.trim();if(!s){p.warning("请输入模板名称");return}if(Array.isArray(a.value)||(a.value=[]),a.value.some(v=>v.name===s)){p.error("模板名称已存在，请使用其他名称");return}a.value.push({name:s,code:`// ${s}
// 在此编写你的自定义 Hook 代码

(function() {
  console.log('[${s}] 已加载');
})();`}),p.success("模板创建成功"),R.value="",K()},B=s=>{if(!Array.isArray(a.value))return;const e=a.value[s];if(!e)return;confirm(`确定要删除模板"${e.name}"吗？此操作不可恢复。`)&&(a.value.splice(s,1),_.value===s?(_.value=-1,r.value=""):_.value>s&&_.value--,K(),p.success("模板已删除"))},W=s=>{if(!Array.isArray(a.value))return;const e=a.value[s];e&&(r.value=e.code,_.value=s,O(e.code),A.value=!1,p.info({content:`正在编辑: ${e.name}`,duration:2e3}))},K=()=>{Array.isArray(a.value)||(a.value=[]),console.log("保存模板，数量:",a.value.length),chrome.storage.sync.set({customTemplates:a.value},()=>{chrome.runtime.lastError?(console.error("保存失败:",chrome.runtime.lastError),p.error("保存失败: "+chrome.runtime.lastError.message)):console.log("保存成功")})},ce=async()=>{if(r.value)try{await navigator.clipboard.writeText(r.value),p.success("已复制到剪贴板")}catch(s){console.error("复制失败:",s),p.error("复制失败")}};return we(()=>{chrome.storage.sync.get(["spiderSwitch","hookJson","hookInput","hookUrl","hookXhr","hookCookie","hookType","hookDebug","hookJJM","dynamicJsEnabled","dynamicJsCode","customTemplates"],s=>{k.value=s.hookInput||"",y.value=s.hookJson||!1,E.value=s.hookUrl||!1,S.value=s.hookXhr||!1,h.value=s.hookType||"document start",T.value=s.hookCookie||!1,J.value=s.hookDebug||!1,I.value=s.hookJJM||!1,C.value=s.spiderSwitch||!1,g.value=s.dynamicJsEnabled||!1,r.value=s.dynamicJsCode||"",Array.isArray(s.customTemplates)?a.value=s.customTemplates:(a.value=[],console.log("初始化 customTemplates 为空数组")),console.log("加载的模板数量:",a.value.length),r.value&&g.value&&O(r.value)})}),(s,e)=>{const v=i("a-switch"),b=i("icon-launch"),m=i("a-button"),x=i("icon-search"),D=i("a-input"),Q=i("a-option"),ue=i("a-select"),Y=i("a-collapse-item"),F=i("icon-delete"),X=i("a-tooltip"),de=i("icon-copy"),ve=i("icon-apps"),L=i("icon-edit"),Z=i("a-popconfirm"),pe=i("icon-code"),ee=i("icon-check-circle"),me=i("icon-close-circle"),ge=i("icon-info-circle"),_e=i("a-collapse"),fe=i("icon-plus"),ke=i("icon-play-arrow"),he=i("a-modal");return d(),u("main",null,[o("div",Je,[o("div",Ie,[e[18]||(e[18]=o("div",{class:"header-left"},[o("div",{class:"title"},"Spider Crawl Plug"),o("div",{class:"subtitle"},"网络抓包与Hook工具")],-1)),o("div",Me,[t(v,{type:"round","model-value":C.value,"onUpdate:modelValue":e[0]||(e[0]=l=>C.value=l),size:"large"},null,8,["model-value"])])]),o("div",Re,[t(_e,{"default-active-key":["1","2"],bordered:!1},{default:n(()=>[t(Y,{header:"⚙️ HOOK 配置",key:"1"},{default:n(()=>[o("div",Oe,[t(m,{type:"primary",long:"",onClick:ne},{icon:n(()=>[t(b)]),default:n(()=>[e[19]||(e[19]=M(" 打开抓包中心 ",-1))]),_:1}),t(D,{"model-value":k.value,"onUpdate:modelValue":e[1]||(e[1]=l=>k.value=l),placeholder:"输入 Hook 关键字...","allow-clear":"",size:"medium"},{prefix:n(()=>[t(x)]),_:1},8,["model-value"]),o("div",Xe,[e[22]||(e[22]=o("label",{class:"field-label"},"注入时机",-1)),t(ue,{"model-value":h.value,"onUpdate:modelValue":e[2]||(e[2]=l=>h.value=l),size:"medium"},{default:n(()=>[t(Q,{value:"document start"},{default:n(()=>[...e[20]||(e[20]=[M("文档开始渲染时",-1)])]),_:1}),t(Q,{value:"document end"},{default:n(()=>[...e[21]||(e[21]=[M("文档渲染完成后",-1)])]),_:1})]),_:1},8,["model-value"])]),o("div",Ue,[o("div",Ae,[t(v,{type:"round","model-value":y.value,"onUpdate:modelValue":e[3]||(e[3]=l=>y.value=l),size:"small"},null,8,["model-value"]),e[23]||(e[23]=o("span",null,"JSON Hook",-1))]),o("div",Ve,[t(v,{type:"round","model-value":E.value,"onUpdate:modelValue":e[4]||(e[4]=l=>E.value=l),size:"small"},null,8,["model-value"]),e[24]||(e[24]=o("span",null,"URL 编解码",-1))]),o("div",$e,[t(v,{type:"round","model-value":S.value,"onUpdate:modelValue":e[5]||(e[5]=l=>S.value=l),size:"small"},null,8,["model-value"]),e[25]||(e[25]=o("span",null,"XHR/Fetch",-1))]),o("div",De,[t(v,{type:"round","model-value":T.value,"onUpdate:modelValue":e[6]||(e[6]=l=>T.value=l),size:"small"},null,8,["model-value"]),e[26]||(e[26]=o("span",null,"Cookie 监控",-1))]),o("div",Ne,[t(v,{type:"round","model-value":I.value,"onUpdate:modelValue":e[7]||(e[7]=l=>I.value=l),size:"small"},null,8,["model-value"]),e[27]||(e[27]=o("span",null,"加解密 Hook",-1))]),o("div",ze,[t(v,{type:"round","model-value":J.value,"onUpdate:modelValue":e[8]||(e[8]=l=>J.value=l),size:"small"},null,8,["model-value"]),e[28]||(e[28]=o("span",null,"反 Debugger",-1))])])])]),_:1}),t(Y,{header:"📝 自定义 JS 注入",key:"2"},{default:n(()=>[o("div",xe,[o("div",Fe,[o("div",Le,[t(v,{type:"round","model-value":g.value,"onUpdate:modelValue":e[9]||(e[9]=l=>g.value=l)},null,8,["model-value"]),e[29]||(e[29]=o("span",{class:"switch-label"},"启用注入",-1))]),r.value?(d(),u("div",je,[t(X,{content:"清空代码"},{default:n(()=>[t(m,{shape:"circle",size:"small",onClick:ae},{icon:n(()=>[t(F)]),_:1})]),_:1}),t(X,{content:"复制代码"},{default:n(()=>[t(m,{shape:"circle",size:"small",onClick:ce},{icon:n(()=>[t(de)]),_:1})]),_:1})])):N("",!0)]),g.value?(d(),u("div",qe,[o("div",Pe,[o("div",Ge,[o("div",Be,[t(ve,{class:"header-icon"}),e[30]||(e[30]=o("span",{class:"header-title"},"快速模板",-1))])]),o("div",We,[o("div",{class:"template-card builtin",onClick:e[10]||(e[10]=l=>$("console"))},[...e[31]||(e[31]=[o("div",{class:"card-icon"},"🖥️",-1),o("div",{class:"card-title"},"Console",-1),o("div",{class:"card-desc"},"控制台拦截",-1)])]),o("div",{class:"template-card builtin",onClick:e[11]||(e[11]=l=>$("fetch"))},[...e[32]||(e[32]=[o("div",{class:"card-icon"},"🌐",-1),o("div",{class:"card-title"},"请求拦截",-1),o("div",{class:"card-desc"},"Fetch/XHR",-1)])]),o("div",{class:"template-card builtin",onClick:e[12]||(e[12]=l=>$("cookie"))},[...e[33]||(e[33]=[o("div",{class:"card-icon"},"🍪",-1),o("div",{class:"card-title"},"Cookie",-1),o("div",{class:"card-desc"},"存储监控",-1)])]),o("div",{class:"template-card builtin",onClick:e[13]||(e[13]=l=>$("debugger"))},[...e[34]||(e[34]=[o("div",{class:"card-icon"},"🛡️",-1),o("div",{class:"card-title"},"反调试",-1),o("div",{class:"card-desc"},"绕过保护",-1)])])]),Array.isArray(a.value)&&a.value.length>0?(d(),u("div",Ke,[e[36]||(e[36]=o("div",{class:"divider"},[o("span",null,"自定义模板")],-1)),o("div",Qe,[(d(!0),u(oe,null,te(a.value,(l,f)=>(d(),u("div",{key:f,class:"t-card custom",onClick:U=>P(f)},[e[35]||(e[35]=o("div",{class:"t-icon"},"⭐",-1)),o("div",Ze,H(l.name),1),o("div",{class:"t-actions",onClick:e[14]||(e[14]=be(()=>{},["stop"]))},[t(m,{shape:"circle",size:"mini",type:"text",onClick:U=>W(f)},{icon:n(()=>[t(L)]),_:2},1032,["onClick"]),t(Z,{content:"确定删除？",onOk:U=>B(f)},{default:n(()=>[t(m,{shape:"circle",size:"mini",type:"text",status:"danger"},{icon:n(()=>[t(F)]),_:1})]),_:2},1032,["onOk"])])],8,Ye))),128))])])):N("",!0)]),o("div",eo,[o("div",oo,[o("div",to,[t(pe,{class:"editor-icon"}),e[37]||(e[37]=o("span",{class:"editor-title"},"JavaScript 代码",-1))]),o("div",so,[_.value>=0?(d(),u("span",lo,[t(L),M(" 编辑: "+H(a.value[_.value]?.name),1)])):N("",!0),o("span",no,[t(ee),e[38]||(e[38]=M(" 自动保存 ",-1))])])]),o("div",ao,[Ce(o("textarea",{"onUpdate:modelValue":e[15]||(e[15]=l=>r.value=l),class:"code-editor",placeholder:`// 在此编写要注入到页面的 JavaScript 代码
// 示例：Hook 全局函数
(function() {
  if (window.targetFunction) {
    const original = window.targetFunction;
    window.targetFunction = function(...args) {
      console.log('[Hook]', args);
      return original.apply(this, args);
    };
  }
})();`,spellcheck:"false"},null,512),[[He,r.value]])]),t(se,{name:"fade"},{default:n(()=>[w.value?(d(),u("div",io,[t(me,{class:"message-icon"}),o("span",null,H(w.value),1)])):N("",!0)]),_:1}),t(se,{name:"fade"},{default:n(()=>[o("div",ro,[t(ee,{class:"message-icon"}),e[39]||(e[39]=o("span",null,"语法检查通过 • 刷新页面后自动生效",-1))])]),_:1})])])):(d(),u("div",co,[t(ge,{class:"hint-icon"}),e[40]||(e[40]=o("span",null,"开启开关以启用自定义 JS 注入功能",-1))]))])]),_:1})]),_:1}),e[41]||(e[41]=o("div",{class:"footer"},null,-1))])]),t(he,{visible:A.value,"onUpdate:visible":e[17]||(e[17]=l=>A.value=l),title:"📦 模板管理",width:"350px",footer:!1,onCancel:re,unmountOnClose:""},{default:n(()=>[o("div",uo,[o("div",vo,[t(D,{modelValue:R.value,"onUpdate:modelValue":e[16]||(e[16]=l=>R.value=l),placeholder:"输入新模板名称...",onPressEnter:G,"allow-clear":""},{suffix:n(()=>[t(m,{type:"primary",size:"small",onClick:G},{icon:n(()=>[t(fe)]),default:n(()=>[e[42]||(e[42]=M(" 添加 ",-1))]),_:1})]),_:1},8,["modelValue"])]),a.value.length===0?(d(),u("div",po,[...e[43]||(e[43]=[o("div",{class:"empty-icon"},"📭",-1),o("div",{class:"empty-text"},"暂无自定义模板",-1),o("div",{class:"empty-hint"},"在上方输入名称并点击添加",-1)])])):Array.isArray(a.value)?(d(),u("div",mo,[o("div",go,"我的模板 ("+H(a.value.length)+")",1),(d(!0),u(oe,null,te(a.value,(l,f)=>(d(),u("div",{key:f,class:"tpl-row"},[o("div",_o,[e[44]||(e[44]=o("div",{class:"tpl-avatar"},"⭐",-1)),o("div",fo,[o("div",ko,H(l.name),1),o("div",ho,H(l.code.substring(0,80))+H(l.code.length>80?"...":""),1)])]),o("div",yo,[t(X,{content:"应用"},{default:n(()=>[t(m,{shape:"circle",size:"mini",onClick:U=>P(f)},{icon:n(()=>[t(ke)]),_:2},1032,["onClick"])]),_:2},1024),t(X,{content:"编辑"},{default:n(()=>[t(m,{shape:"circle",size:"mini",status:"warning",onClick:U=>W(f)},{icon:n(()=>[t(L)]),_:2},1032,["onClick"])]),_:2},1024),t(Z,{content:"确定删除？",onOk:U=>B(f)},{default:n(()=>[t(X,{content:"删除"},{default:n(()=>[t(m,{shape:"circle",size:"mini",status:"danger"},{icon:n(()=>[t(F)]),_:1})]),_:1})]),_:2},1032,["onOk"])])]))),128))])):(d(),u("div",wo,[...e[45]||(e[45]=[o("div",{class:"error-icon"},"⚠️",-1),o("div",{class:"error-text"},"模板数据异常",-1)])]))])]),_:1},8,["visible"])])}}}),Co=(z,k)=>{const h=z.__vccOpts||z;for(const[y,C]of k)h[y]=C;return h},Ho=Co(bo,[["__scopeId","data-v-ddd8ee04"]]),q=Ee(Ho);q.use(Se);q.use(Te);q.mount("#app");
