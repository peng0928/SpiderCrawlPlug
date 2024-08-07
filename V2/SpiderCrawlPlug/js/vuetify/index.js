/*!
* Vuetify v3.6.11
* Forged by John Leider
* Released under the MIT License.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Vuetify={},e.Vue)}(this,(function(e,t){"use strict"
const a="undefined"!=typeof window,l=a&&"IntersectionObserver"in window,o=a&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),n=a&&"EyeDropper"in window
function r(e,t,a){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,a)}function i(e,t){return e.get(s(e,t))}function s(e,t,a){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:a
throw new TypeError("Private element is not present on this object")}function u(e,t,a){const l=t.length-1
if(l<0)return void 0===e?a:e
for(let o=0;o<l;o++){if(null==e)return a
e=e[t[o]]}return null==e||void 0===e[t[l]]?a:e[t[l]]}function c(e,t){if(e===t)return!0
if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1
if(e!==Object(e)||t!==Object(t))return!1
const a=Object.keys(e)
return a.length===Object.keys(t).length&&a.every((a=>c(e[a],t[a])))}function d(e,t,a){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:u(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a):a}function v(e,t,a){if(!0===t)return void 0===e?a:e
if(null==t||"boolean"==typeof t)return a
if(e!==Object(e)){if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}if("string"==typeof t)return d(e,t,a)
if(Array.isArray(t))return u(e,t,a)
if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return Array.from({length:e},((e,a)=>t+a))}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function m(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function g(e){if(e&&"$el"in e){const t=e.$el
return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const h=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),y=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"})
function b(e){return Object.keys(e)}function V(e,t){return t.every((t=>e.hasOwnProperty(t)))}function w(e,t){const a={},l=new Set(Object.keys(e))
for(const o of t)l.has(o)&&(a[o]=e[o])
return a}function S(e,t,a){const l=Object.create(null),o=Object.create(null)
for(const n in e)t.some((e=>e instanceof RegExp?e.test(n):e===n))&&!a?.some((e=>e===n))?l[n]=e[n]:o[n]=e[n]
return[l,o]}function k(e,t){const a={...e}
return t.forEach((e=>delete a[e])),a}function x(e,t){const a={}
return t.forEach((t=>a[t]=e[t])),a}const N=/^on[^a-z]/,C=e=>N.test(e),_=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],I=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "]
function B(e){const[t,a]=S(e,[N]),l=k(t,_),[o,n]=S(a,["class","style","id",/^data-/])
return Object.assign(o,t),Object.assign(n,l),[o,n]}function P(e){return null==e?[]:Array.isArray(e)?e:[e]}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return Math.max(t,Math.min(a,e))}function R(e){const t=e.toString().trim()
return t.includes(".")?t.length-t.indexOf(".")-1:0}function T(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0"
return e+a.repeat(Math.max(0,t-e.length))}function D(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0"
return a.repeat(Math.max(0,t-e.length))+e}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3
if(e<t)return`${e} B`
const a=1024===t?["Ki","Mi","Gi"]:["k","M","G"]
let l=-1
for(;Math.abs(e)>=t&&l<a.length-1;)e/=t,++l
return`${e.toFixed(1)} ${a[l]}B`}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0
const l={}
for(const t in e)l[t]=e[t]
for(const o in t){const n=e[o],r=t[o]
m(n)&&m(r)?l[o]=F(n,r,a):Array.isArray(n)&&Array.isArray(r)&&a?l[o]=a(n,r):l[o]=r}return l}function $(e){return e.map((e=>e.type===t.Fragment?$(e.children):e)).flat()}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
if(M.cache.has(e))return M.cache.get(e)
const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()
return M.cache.set(e,t),t}function O(e,t){if(!t||"object"!=typeof t)return[]
if(Array.isArray(t))return t.map((t=>O(e,t))).flat(1)
if(t.suspense)return O(e,t.ssContent)
if(Array.isArray(t.children))return t.children.map((t=>O(e,t))).flat(1)
if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component]
if(t.component.subTree)return O(e,t.component.subTree).flat(1)}return[]}M.cache=new Map
var L=new WeakMap,z=new WeakMap
class j{constructor(e){r(this,L,[]),r(this,z,0),this.size=e}push(e){var t,a,l
i(L,this)[i(z,this)]=e,t=z,a=this,l=(i(z,this)+1)%this.size,t.set(s(t,a),l)}values(){return i(L,this).slice(i(z,this)).concat(i(L,this).slice(0,i(z,this)))}}function H(e){const a=t.reactive({}),l=t.computed(e)
return t.watchEffect((()=>{for(const e in l.value)a[e]=l.value[e]}),{flush:"sync"}),t.toRefs(a)}function W(e,t){return e.includes(t)}function U(e){return e[2].toLowerCase()+e.slice(3)}const Y=()=>[Function,Array]
function G(e,a){return!!(e[a="on"+t.capitalize(a)]||e[`${a}Once`]||e[`${a}Capture`]||e[`${a}OnceCapture`]||e[`${a}CaptureOnce`])}function q(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
if(Array.isArray(e))for(const t of e)t(...a)
else"function"==typeof e&&e(...a)}function K(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ")
return[...e.querySelectorAll(a)]}function X(e,t,a){let l,o=e.indexOf(document.activeElement)
const n="next"===t?1:-1
do{o+=n,l=e[o]}while((!l||null==l.offsetParent||!(a?.(l)??1))&&o<e.length&&o>=0)
return l}function Z(e,t){const a=K(e)
if(t)if("first"===t)a[0]?.focus()
else if("last"===t)a.at(-1)?.focus()
else if("number"==typeof t)a[t]?.focus()
else{const l=X(a,t)
l?l.focus():Z(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||a[0]?.focus()}function Q(e){return null==e||"string"==typeof e&&""===e.trim()}function J(){}function ee(e,t){if(!(a&&"undefined"!=typeof CSS&&void 0!==CSS.supports&&CSS.supports(`selector(${t})`)))return null
try{return!!e&&e.matches(t)}catch(e){return null}}function te(e){return e.some((e=>!t.isVNode(e)||e.type!==t.Comment&&(e.type!==t.Fragment||te(e.children))))?e:null}function ae(e,a){const l=t.shallowRef()
return t.watchEffect((()=>{l.value=e()}),{flush:"sync",...a}),t.readonly(l)}function le(){const e=t.shallowRef(),a=t=>{e.value=t}
return Object.defineProperty(a,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(a,"el",{enumerable:!0,get:()=>g(e.value)}),a}const oe=["top","bottom"],ne=["start","end","left","right"]
function re(e,t){let[a,l]=e.split(" ")
return l||(l=W(oe,a)?"start":W(ne,a)?"top":"center"),{side:ie(a,t),align:ie(l,t)}}function ie(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function se(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ue(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function ce(e){return{side:e.align,align:e.side}}function de(e){return W(oe,e.side)?"y":"x"}class ve{constructor(e){let{x:t,y:a,width:l,height:o}=e
this.x=t,this.y=a,this.width=l,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function pe(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function fe(e){return Array.isArray(e)?new ve({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function me(e){const t=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform
if(l){let o,n,r,i,s
if(l.startsWith("matrix3d("))o=l.slice(9,-1).split(/, /),n=+o[0],r=+o[5],i=+o[12],s=+o[13]
else{if(!l.startsWith("matrix("))return new ve(t)
o=l.slice(7,-1).split(/, /),n=+o[0],r=+o[3],i=+o[4],s=+o[5]}const u=a.transformOrigin,c=t.x-i-(1-n)*parseFloat(u),d=t.y-s-(1-r)*parseFloat(u.slice(u.indexOf(" ")+1)),v=n?t.width/n:e.offsetWidth+1,p=r?t.height/r:e.offsetHeight+1
return new ve({x:c,y:d,width:v,height:p})}return new ve(t)}function ge(e,t,a){if(void 0===e.animate)return{finished:Promise.resolve()}
let l
try{l=e.animate(t,a)}catch(e){return{finished:Promise.resolve()}}return void 0===l.finished&&(l.finished=new Promise((e=>{l.onfinish=()=>{e(l)}}))),l}const he=new WeakMap
function ye(e,t){Object.keys(t).forEach((a=>{if(C(a)){const l=U(a),o=he.get(e)
if(null==t[a])o?.forEach((t=>{const[a,n]=t
a===l&&(e.removeEventListener(l,n),o.delete(t))}))
else if(!o||![...o]?.some((e=>e[0]===l&&e[1]===t[a]))){e.addEventListener(l,t[a])
const n=o||new Set
n.add([l,t[a]]),he.has(e)||he.set(e,n)}}else null==t[a]?e.removeAttribute(a):e.setAttribute(a,t[a])}))}function be(e,t){Object.keys(t).forEach((t=>{if(C(t)){const a=U(t),l=he.get(e)
l?.forEach((t=>{const[o,n]=t
o===a&&(e.removeEventListener(a,n),l.delete(t))}))}else e.removeAttribute(t)}))}const Ve=2.4,we=.2126729,Se=.7151522,ke=.072175,xe=.03,Ne=12.82051282051282,Ce=.06
function _e(e,t){const a=(e.r/255)**Ve,l=(e.g/255)**Ve,o=(e.b/255)**Ve,n=(t.r/255)**Ve,r=(t.g/255)**Ve,i=(t.b/255)**Ve
let s,u=a*we+l*Se+o*ke,c=n*we+r*Se+i*ke
if(u<=xe&&(u+=(xe-u)**1.45),c<=xe&&(c+=(xe-c)**1.45),Math.abs(c-u)<5e-4)return 0
if(c>u){const e=1.25*(c**.55-u**.58)
s=e<.001?0:e<.078?e-e*Ne*Ce:e-Ce}else{const e=1.25*(c**.62-u**.57)
s=e>-.001?0:e>-.078?e-e*Ne*Ce:e+Ce}return 100*s}function Ie(e){t.warn(`Vuetify: ${e}`)}function Be(e){t.warn(`Vuetify error: ${e}`)}const Pe=.20689655172413793,Ae=e=>e>Pe**3?Math.cbrt(e):e/(3*Pe**2)+4/29,Re=e=>e>Pe?e**3:3*Pe**2*(e-4/29)
function Te(e){const t=Ae,a=t(e[1])
return[116*a-16,500*(t(e[0]/.95047)-a),200*(a-t(e[2]/1.08883))]}function De(e){const t=Re,a=(e[0]+16)/116
return[.95047*t(a+e[1]/500),t(a),1.08883*t(a-e[2]/200)]}const Ee=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Fe=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,$e=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Me=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4
function Oe(e){const t=Array(3),a=Fe,l=Ee
for(let o=0;o<3;++o)t[o]=Math.round(255*A(a(l[o][0]*e[0]+l[o][1]*e[1]+l[o][2]*e[2])))
return{r:t[0],g:t[1],b:t[2]}}function Le(e){let{r:t,g:a,b:l}=e
const o=[0,0,0],n=Me,r=$e
t=n(t/255),a=n(a/255),l=n(l/255)
for(let e=0;e<3;++e)o[e]=r[e][0]*t+r[e][1]*a+r[e][2]*l
return o}function ze(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}const je=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,He={rgb:(e,t,a,l)=>({r:e,g:t,b:a,a:l}),rgba:(e,t,a,l)=>({r:e,g:t,b:a,a:l}),hsl:(e,t,a,l)=>Ye({h:e,s:t,l:a,a:l}),hsla:(e,t,a,l)=>Ye({h:e,s:t,l:a,a:l}),hsv:(e,t,a,l)=>Ue({h:e,s:t,v:a,a:l}),hsva:(e,t,a,l)=>Ue({h:e,s:t,v:a,a:l})}
function We(e){if("number"==typeof e)return(isNaN(e)||e<0||e>16777215)&&Ie(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e}
if("string"==typeof e&&je.test(e)){const{groups:t}=e.match(je),{fn:a,values:l}=t,o=l.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(a)?parseFloat(e)/100:parseFloat(e)))
return He[a](...o)}if("string"==typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||Ie(`'${e}' is not a valid hex(a) color`)
const a=parseInt(t,16)
return(isNaN(a)||a<0||a>4294967295)&&Ie(`'${e}' is not a valid hex(a) color`),et(t)}if("object"==typeof e){if(V(e,["r","g","b"]))return e
if(V(e,["h","s","l"]))return Ue(Ke(e))
if(V(e,["h","s","v"]))return Ue(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ue(e){const{h:t,s:a,v:l,a:o}=e,n=e=>{const o=(e+t/60)%6
return l-l*a*Math.max(Math.min(o,4-o,1),0)},r=[n(5),n(3),n(1)].map((e=>Math.round(255*e)))
return{r:r[0],g:r[1],b:r[2],a:o}}function Ye(e){return Ue(Ke(e))}function Ge(e){if(!e)return{h:0,s:1,v:1,a:1}
const t=e.r/255,a=e.g/255,l=e.b/255,o=Math.max(t,a,l),n=Math.min(t,a,l)
let r=0
o!==n&&(o===t?r=60*(0+(a-l)/(o-n)):o===a?r=60*(2+(l-t)/(o-n)):o===l&&(r=60*(4+(t-a)/(o-n)))),r<0&&(r+=360)
const i=[r,0===o?0:(o-n)/o,o]
return{h:i[0],s:i[1],v:i[2],a:e.a}}function qe(e){const{h:t,s:a,v:l,a:o}=e,n=l-l*a/2
return{h:t,s:1===n||0===n?0:(l-n)/Math.min(n,1-n),l:n,a:o}}function Ke(e){const{h:t,s:a,l,a:o}=e,n=l+a*Math.min(l,1-l)
return{h:t,s:0===n?0:2-2*l/n,v:n,a:o}}function Xe(e){let{r:t,g:a,b:l,a:o}=e
return void 0===o?`rgb(${t}, ${a}, ${l})`:`rgba(${t}, ${a}, ${l}, ${o})`}function Ze(e){return Xe(Ue(e))}function Qe(e){const t=Math.round(e).toString(16)
return("00".substr(0,2-t.length)+t).toUpperCase()}function Je(e){let{r:t,g:a,b:l,a:o}=e
return`#${[Qe(t),Qe(a),Qe(l),void 0!==o?Qe(Math.round(255*o)):""].join("")}`}function et(e){e=function(e){e.startsWith("#")&&(e=e.slice(1))
3!==(e=e.replace(/([^0-9a-f])/gi,"F")).length&&4!==e.length||(e=e.split("").map((e=>e+e)).join(""))
6!==e.length&&(e=T(T(e,6),8,"F"))
return e}(e)
let[t,a,l,o]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
const a=[]
let l=0
for(;l<e.length;)a.push(e.substr(l,t)),l+=t
return a}(e,2).map((e=>parseInt(e,16)))
return o=void 0===o?o:o/255,{r:t,g:a,b:l,a:o}}function tt(e){return Ge(et(e))}function at(e){return Je(Ue(e))}function lt(e,t){const a=Te(Le(e))
return a[0]=a[0]+10*t,Oe(De(a))}function ot(e,t){const a=Te(Le(e))
return a[0]=a[0]-10*t,Oe(De(a))}function nt(e){return Le(We(e))[1]}function rt(e,t){const a=nt(e),l=nt(t)
return(Math.max(a,l)+.05)/(Math.min(a,l)+.05)}function it(e){const t=Math.abs(_e(We(0),We(e)))
return Math.abs(_e(We(16777215),We(e)))>Math.min(t,50)?"#fff":"#000"}function st(e,t){return a=>Object.keys(e).reduce(((l,o)=>{const n="object"==typeof e[o]&&null!=e[o]&&!Array.isArray(e[o])?e[o]:{type:e[o]}
return l[o]=a&&o in a?{...n,default:a[o]}:n,t&&!l[o].source&&(l[o].source=t),l}),{})}const ut=st({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component")
function ct(e,a){const l=t.getCurrentInstance()
if(!l)throw new Error(`[Vuetify] ${e} ${a||"must be called from inside a setup function"}`)
return l}function dt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables"
const t=ct(e).type
return M(t?.aliasName||t?.name)}let vt=0,pt=new WeakMap
function ft(){const e=ct("getUid")
if(pt.has(e))return pt.get(e)
{const t=vt++
return pt.set(e,t),t}}function mt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ct("injectSelf")
const{provides:a}=t
if(a&&e in a)return a[e]}ft.reset=()=>{vt=0,pt=new WeakMap}
const gt=Symbol.for("vuetify:defaults")
function ht(e){return t.ref(e)}function yt(){const e=t.inject(gt)
if(!e)throw new Error("[Vuetify] Could not find defaults instance")
return e}function bt(e,a){const l=yt(),o=t.ref(e),n=t.computed((()=>{if(t.unref(a?.disabled))return l.value
const e=t.unref(a?.scoped),n=t.unref(a?.reset),r=t.unref(a?.root)
if(null==o.value&&!(e||n||r))return l.value
let i=F(o.value,{prev:l.value})
if(e)return i
if(n||r){const e=Number(n||1/0)
for(let t=0;t<=e&&(i&&"prev"in i);t++)i=i.prev
return i&&"string"==typeof r&&r in i&&(i=F(F(i,{prev:i}),i[r])),i}return i.prev?F(i.prev,i):i}))
return t.provide(gt,n),n}function Vt(e,t){return void 0!==e.props?.[t]||void 0!==e.props?.[M(t)]}function wt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:yt()
const o=ct("useDefaults")
if(a=a??o.type.name??o.type.__name,!a)throw new Error("[Vuetify] Could not determine component name")
const n=t.computed((()=>l.value?.[e._as??a])),r=new Proxy(e,{get(e,t){const a=Reflect.get(e,t)
return"class"===t||"style"===t?[n.value?.[t],a].filter((e=>null!=e)):"string"!=typeof t||Vt(o.vnode,t)?a:void 0!==n.value?.[t]?n.value?.[t]:void 0!==l.value?.global?.[t]?l.value?.global?.[t]:a}}),i=t.shallowRef()
function s(){const e=mt(gt,o)
t.provide(gt,t.computed((()=>i.value?F(e?.value??{},i.value):e?.value)))}return t.watchEffect((()=>{if(n.value){const e=Object.entries(n.value).filter((e=>{let[t]=e
return t.startsWith(t[0].toUpperCase())}))
i.value=e.length?Object.fromEntries(e):void 0}else i.value=void 0})),{props:r,provideSubDefaults:s}}function St(e){if(e._setup=e._setup??e.setup,!e.name)return Ie("The component is missing an explicit name, unable to generate default prop value"),e
if(e._setup){e.props=st(e.props??{},e.name)()
const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e))
e.filterProps=function(e){return w(e,t)},e.props._as=String,e.setup=function(t,a){const l=yt()
if(!l.value)return e._setup(t,a)
const{props:o,provideSubDefaults:n}=wt(t,t._as??e.name,l),r=e._setup(o,a)
return n(),r}}return e}function kt(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return a=>(e?St:t.defineComponent)(a)}function xt(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0
return kt()({name:l??t.capitalize(t.camelize(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...ut()},setup(a,l){let{slots:o}=l
return()=>t.h(a.tag,{class:[e,a.class],style:a.style},o.default?.())}})}function Nt(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode
return e!==document?null:document}const t=e.getRootNode()
return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Ct="cubic-bezier(0.4, 0, 0.2, 1)"
function _t(e,t,a){return Object.keys(e).filter((e=>C(e)&&e.endsWith(t))).reduce(((l,o)=>(l[o.slice(0,-t.length)]=t=>e[o](t,a(t)),l)),{})}function It(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
for(;e;){if(t?At(e):Pt(e))return e
e=e.parentElement}return document.scrollingElement}function Bt(e,t){const a=[]
if(t&&e&&!t.contains(e))return a
for(;e&&(Pt(e)&&a.push(e),e!==t);)e=e.parentElement
return a}function Pt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return["scroll","auto"].includes(t.overflowY)}function Rt(e){ct("useRender").render=e}const Tt=[String,Function,Object,Array],Dt=Symbol.for("vuetify:icons"),Et=st({icon:{type:Tt},tag:{type:String,required:!0}},"icon"),Ft=kt()({name:"VComponentIcon",props:Et(),setup(e,a){let{slots:l}=a
return()=>{const a=e.icon
return t.createVNode(e.tag,null,{default:()=>[e.icon?t.createVNode(a,null,null):l.default?.()]})}}}),$t=St({name:"VSvgIcon",inheritAttrs:!1,props:Et(),setup(e,a){let{attrs:l}=a
return()=>t.createVNode(e.tag,t.mergeProps(l,{style:null}),{default:()=>[t.createVNode("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map((e=>Array.isArray(e)?t.createVNode("path",{d:e[0],"fill-opacity":e[1]},null):t.createVNode("path",{d:e},null))):t.createVNode("path",{d:e.icon},null)])]})}}),Mt=St({name:"VLigatureIcon",props:Et(),setup:e=>()=>t.createVNode(e.tag,null,{default:()=>[e.icon]})}),Ot=St({name:"VClassIcon",props:Et(),setup:e=>()=>t.createVNode(e.tag,{class:e.icon},null)})
function Lt(e){const t={svg:{component:$t},class:{component:Ot}},a=e?.defaultSet??"mdi"
return"mdi"!==a||t.mdi||(t.mdi=jt),F({defaultSet:a,sets:t,aliases:{...zt,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const zt={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},jt={component:e=>t.h(Ot,{...e,class:"mdi"})},Ht={defaults:{global:{rounded:"sm"},VAvatar:{rounded:"circle"},VAutocomplete:{variant:"underlined"},VBanner:{color:"primary"},VBtn:{color:"primary",rounded:0},VCheckbox:{color:"secondary"},VCombobox:{variant:"underlined"},VSelect:{variant:"underlined"},VSlider:{color:"primary"},VTabs:{color:"primary"},VTextarea:{variant:"underlined"},VTextField:{variant:"underlined"},VToolbar:{VBtn:{color:null}}},icons:{defaultSet:"mdi",sets:{mdi:jt}},theme:{themes:{light:{colors:{primary:"#3F51B5","primary-darken-1":"#303F9F","primary-lighten-1":"#C5CAE9",secondary:"#FF4081","secondary-darken-1":"#F50057","secondary-lighten-1":"#FF80AB",accent:"#009688"}}}}},Wt={defaults:{global:{rounded:"md"},VAvatar:{rounded:"circle"},VAutocomplete:{variant:"filled"},VBanner:{color:"primary"},VBtn:{color:"primary"},VCheckbox:{color:"secondary"},VCombobox:{variant:"filled"},VSelect:{variant:"filled"},VSlider:{color:"primary"},VTabs:{color:"primary"},VTextarea:{variant:"filled"},VTextField:{variant:"filled"},VToolbar:{VBtn:{color:null}}},icons:{defaultSet:"mdi",sets:{mdi:jt}},theme:{themes:{light:{colors:{primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020"}}}}},Ut={defaults:{VAppBar:{flat:!0},VAutocomplete:{variant:"filled"},VBanner:{color:"primary"},VBottomSheet:{contentClass:"rounded-t-xl overflow-hidden"},VBtn:{color:"primary",rounded:"xl"},VBtnGroup:{rounded:"xl",VBtn:{rounded:null}},VCard:{rounded:"lg"},VCheckbox:{color:"secondary",inset:!0},VChip:{rounded:"sm"},VCombobox:{variant:"filled"},VNavigationDrawer:{},VSelect:{variant:"filled"},VSlider:{color:"primary"},VTabs:{color:"primary"},VTextarea:{variant:"filled"},VTextField:{variant:"filled"},VToolbar:{VBtn:{color:null}}},icons:{defaultSet:"mdi",sets:{mdi:jt}},theme:{themes:{light:{colors:{primary:"#6750a4",secondary:"#b4b0bb",tertiary:"#7d5260",error:"#b3261e",surface:"#fffbfe"}}}}}
var Yt=Object.freeze({__proto__:null,md1:Ht,md2:Wt,md3:Ut})
function Gt(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content"
const o=le(),n=t.ref()
if(a){const a=new ResizeObserver((t=>{e?.(t,a),t.length&&(n.value="content"===l?t[0].contentRect:t[0].target.getBoundingClientRect())}))
t.onBeforeUnmount((()=>{a.disconnect()})),t.watch((()=>o.el),((e,t)=>{t&&(a.unobserve(t),n.value=void 0),e&&a.observe(e)}),{flush:"post"})}return{resizeRef:o,contentRect:t.readonly(n)}}const qt=Symbol.for("vuetify:layout"),Kt=Symbol.for("vuetify:layout-item"),Xt=st({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Zt=st({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item")
function Qt(){const e=t.inject(qt)
if(!e)throw new Error("[Vuetify] Could not find injected layout")
return{layoutIsReady:t.nextTick(),getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Jt(e){const a=t.inject(qt)
if(!a)throw new Error("[Vuetify] Could not find injected layout")
const l=e.id??`layout-item-${ft()}`,o=ct("useLayoutItem")
t.provide(Kt,{id:l})
const n=t.shallowRef(!1)
t.onDeactivated((()=>n.value=!0)),t.onActivated((()=>n.value=!1))
const r=t.nextTick(),{layoutItemStyles:i,layoutItemScrimStyles:s}=a.register(o,{...e,active:t.computed((()=>!n.value&&e.active.value)),id:l})
return t.onBeforeUnmount((()=>a.unregister(l))),{layoutItemStyles:i,layoutRect:a.layoutRect,layoutItemScrimStyles:s,layoutIsReady:r}}function ea(e){const a=t.inject(qt,null),l=t.computed((()=>a?a.rootZIndex.value-100:1e3)),o=t.ref([]),n=t.reactive(new Map),r=t.reactive(new Map),i=t.reactive(new Map),s=t.reactive(new Map),u=t.reactive(new Map),{resizeRef:c,contentRect:d}=Gt(),v=ae((()=>{const e=[...new Set([...i.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[]
for(const a of e){const e=o.value.filter((e=>i.get(e)?.value===a))
t.push(...e)}return((e,t,a,l)=>{let o={top:0,left:0,right:0,bottom:0}
const n=[{id:"",layer:{...o}}]
for(const r of e){const e=t.get(r),i=a.get(r),s=l.get(r)
if(!e||!i||!s)continue
const u={...o,[e.value]:parseInt(o[e.value],10)+(s.value?parseInt(i.value,10):0)}
n.push({id:r,layer:u}),o=u}return n})(t,n,r,s)})),p=t.computed((()=>!Array.from(u.values()).some((e=>e.value)))),m=t.computed((()=>v.value[v.value.length-1].layer)),g=t.computed((()=>({"--v-layout-left":f(m.value.left),"--v-layout-right":f(m.value.right),"--v-layout-top":f(m.value.top),"--v-layout-bottom":f(m.value.bottom),...p.value?void 0:{transition:"none"}}))),h=ae((()=>v.value.slice(1).map(((e,t)=>{let{id:a}=e
const{layer:l}=v.value[t],o=r.get(a),i=n.get(a)
return{id:a,...l,size:Number(o.value),position:i.value}})))),y=e=>h.value.find((t=>t.id===e)),b=ct("createLayout"),V=t.nextTick()
t.provide(qt,{register:(e,a)=>{let{id:c,order:d,position:f,layoutSize:m,elementSize:g,active:y,disableTransitions:V,absolute:w}=a
i.set(c,d),n.set(c,f),r.set(c,m),s.set(c,y),V&&u.set(c,V)
const S=O(Kt,b?.vnode).indexOf(e)
S>-1?o.value.splice(S,0,c):o.value.push(c)
const k=t.computed((()=>h.value.findIndex((e=>e.id===c)))),x=t.computed((()=>l.value+2*v.value.length-2*k.value))
return{layoutItemStyles:t.computed((()=>{const e="left"===f.value||"right"===f.value,t="right"===f.value,a="bottom"===f.value,o=g.value??m.value,n=0===o?"%":"px",r={[f.value]:0,zIndex:x.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-(0===o?100:o))*(t||a?-1:1)}${n})`,position:w.value||1e3!==l.value?"absolute":"fixed",...p.value?void 0:{transition:"none"}}
if(k.value<0)throw new Error(`Layout item "${c}" is missing`)
const i=h.value[k.value]
if(!i)throw new Error(`[Vuetify] Could not find layout item "${c}"`)
return{...r,height:e?`calc(100% - ${i.top}px - ${i.bottom}px)`:g.value?`${g.value}px`:void 0,left:t?void 0:`${i.left}px`,right:t?`${i.right}px`:void 0,top:"bottom"!==f.value?`${i.top}px`:void 0,bottom:"top"!==f.value?`${i.bottom}px`:void 0,width:e?g.value?`${g.value}px`:void 0:`calc(100% - ${i.left}px - ${i.right}px)`}})),layoutItemScrimStyles:t.computed((()=>({zIndex:x.value-1}))),zIndex:x}},unregister:e=>{i.delete(e),n.delete(e),r.delete(e),s.delete(e),u.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:m,mainStyles:g,getLayoutItem:y,items:h,layoutRect:d,rootZIndex:l,layoutIsReady:V})
return{layoutClasses:t.computed((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),layoutStyles:t.computed((()=>({zIndex:a?l.value:void 0,position:a?"relative":void 0,overflow:a?"hidden":void 0}))),getLayoutItem:y,items:h,layoutRect:d,layoutIsReady:V,layoutRef:c}}function ta(e,a){let l
function o(){l=t.effectScope(),l.run((()=>a.length?a((()=>{l?.stop(),o()})):a()))}t.watch(e,(e=>{e&&!l?o():e||(l?.stop(),l=void 0)}),{immediate:!0}),t.onScopeDispose((()=>{l?.stop()}))}function aa(e,a,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e
const r=ct("useProxiedModel"),i=t.ref(void 0!==e[a]?e[a]:l),s=M(a),u=s!==a,c=u?t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)&&!r.vnode.props?.hasOwnProperty(s)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)&&!r.vnode.props?.hasOwnProperty(`onUpdate:${s}`))))):t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)))))
ta((()=>!c.value),(()=>{t.watch((()=>e[a]),(e=>{i.value=e}))}))
const d=t.computed({get(){const t=e[a]
return o(c.value?t:i.value)},set(l){const s=n(l),u=t.toRaw(c.value?e[a]:i.value)
u!==s&&o(u)!==l&&(i.value=s,r?.emit(`update:${a}`,s))}})
return Object.defineProperty(d,"externalValue",{get:()=>c.value?e[a]:i.value}),d}var la={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}}
const oa="$vuetify.",na=(e,t)=>e.replace(/\{(\d+)\}/g,((e,a)=>String(t[+a]))),ra=(e,t,a)=>function(l){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r]
if(!l.startsWith(oa))return na(l,n)
const i=l.replace(oa,""),s=e.value&&a.value[e.value],u=t.value&&a.value[t.value]
let c=d(s,i,null)
return c||(Ie(`Translation key "${l}" not found in "${e.value}", trying fallback locale`),c=d(u,i,null)),c||(Be(`Translation key "${l}" not found in fallback`),c=l),"string"!=typeof c&&(Be(`Translation key "${l}" has a non-string value`),c=l),na(c,n)}
function ia(e,t){return(a,l)=>new Intl.NumberFormat([e.value,t.value],l).format(a)}function sa(e,a,l){const o=aa(e,a,e[a]??l.value)
return o.value=e[a]??l.value,t.watch(l,(t=>{null==e[a]&&(o.value=l.value)})),o}function ua(e){return t=>{const a=sa(t,"locale",e.current),l=sa(t,"fallback",e.fallback),o=sa(t,"messages",e.messages)
return{name:"vuetify",current:a,fallback:l,messages:o,t:ra(a,l,o),n:ia(a,l),provide:ua({current:a,fallback:l,messages:o})}}}const ca=Symbol.for("vuetify:locale")
function da(e){const a=e?.adapter&&(l=e?.adapter,null!=l.name)?e?.adapter:function(e){const a=t.shallowRef(e?.locale??"en"),l=t.shallowRef(e?.fallback??"en"),o=t.ref({en:la,...e?.messages})
return{name:"vuetify",current:a,fallback:l,messages:o,t:ra(a,l,o),n:ia(a,l),provide:ua({current:a,fallback:l,messages:o})}}(e)
var l
const o=function(e,a){const l=t.ref(a?.rtl??{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}),o=t.computed((()=>l.value[e.current.value]??!1))
return{isRtl:o,rtl:l,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(a,e)
return{...a,...o}}function va(){const e=t.inject(ca)
if(!e)throw new Error("[Vuetify] Could not find injected locale instance")
return e}function pa(e){const a=t.inject(ca)
if(!a)throw new Error("[Vuetify] Could not find injected locale instance")
const l=a.provide(e),o=function(e,a,l){const o=t.computed((()=>l.rtl??a.value[e.current.value]??!1))
return{isRtl:o,rtl:a,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(l,a.rtl,e),n={...l,...o}
return t.provide(ca,n),n}function fa(){const e=t.inject(ca)
if(!e)throw new Error("[Vuetify] Could not find injected rtl instance")
return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const ma=Symbol.for("vuetify:theme"),ga=st({theme:String},"theme")
function ha(e){const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
const t={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
if(!e)return{...t,isDisabled:!0}
const a={}
for(const[l,o]of Object.entries(e.themes??{})){const e=o.dark||"dark"===l?t.themes?.dark:t.themes?.light
a[l]=F(e,o)}return F(t,{...e,themes:a})}(e),o=t.ref(l.defaultTheme),n=t.ref(l.themes),r=t.computed((()=>{const e={}
for(const[t,a]of Object.entries(n.value)){const o=e[t]={...a,colors:{...a.colors}}
if(l.variations)for(const e of l.variations.colors){const t=o.colors[e]
if(t)for(const a of["lighten","darken"]){const n="lighten"===a?lt:ot
for(const r of p(l.variations[a],1))o.colors[`${e}-${a}-${r}`]=Je(n(We(t),r))}}for(const e of Object.keys(o.colors)){if(/^on-[a-z]/.test(e)||o.colors[`on-${e}`])continue
const t=`on-${e}`,a=We(o.colors[e])
o.colors[t]=it(a)}}return e})),i=t.computed((()=>r.value[o.value])),s=t.computed((()=>{const e=[]
i.value?.dark&&Va(e,":root",["color-scheme: dark"]),Va(e,":root",wa(i.value))
for(const[t,a]of Object.entries(r.value))Va(e,`.v-theme--${t}`,["color-scheme: "+(a.dark?"dark":"normal"),...wa(a)])
const t=[],a=[],l=new Set(Object.values(r.value).flatMap((e=>Object.keys(e.colors))))
for(const e of l)/^on-[a-z]/.test(e)?Va(a,`.${e}`,[`color: rgb(var(--v-theme-${e})) !important`]):(Va(t,`.bg-${e}`,[`--v-theme-overlay-multiplier: var(--v-theme-${e}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${e})) !important`,`color: rgb(var(--v-theme-on-${e})) !important`]),Va(a,`.text-${e}`,[`color: rgb(var(--v-theme-${e})) !important`]),Va(a,`.border-${e}`,[`--v-border-color: var(--v-theme-${e})`]))
return e.push(...t,...a),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}))
function u(){return{style:[{children:s.value,id:"vuetify-theme-stylesheet",nonce:l.cspNonce||!1}]}}const c=t.computed((()=>l.isDisabled?void 0:`v-theme--${o.value}`))
return{install:function(e){if(l.isDisabled)return
const o=e._context.provides.usehead
if(o)if(o.push){const e=o.push(u)
a&&t.watch(s,(()=>{e.patch(u)}))}else a?(o.addHeadObjs(t.computed(u)),t.watchEffect((()=>o.updateDOM()))):o.addHeadObjs(u())
else{let e=a?document.getElementById("vuetify-theme-stylesheet"):null
function o(){if("undefined"!=typeof document&&!e){const t=document.createElement("style")
t.type="text/css",t.id="vuetify-theme-stylesheet",l.cspNonce&&t.setAttribute("nonce",l.cspNonce),e=t,document.head.appendChild(e)}e&&(e.innerHTML=s.value)}a?t.watch(s,o,{immediate:!0}):o()}},isDisabled:l.isDisabled,name:o,themes:n,current:i,computedThemes:r,themeClasses:c,styles:s,global:{name:o,current:i}}}function ya(e){ct("provideTheme")
const a=t.inject(ma,null)
if(!a)throw new Error("Could not find Vuetify theme injection")
const l=t.computed((()=>e.theme??a.name.value)),o=t.computed((()=>a.themes.value[l.value])),n=t.computed((()=>a.isDisabled?void 0:`v-theme--${l.value}`)),r={...a,name:l,current:o,themeClasses:n}
return t.provide(ma,r),r}function ba(){ct("useTheme")
const e=t.inject(ma,null)
if(!e)throw new Error("Could not find Vuetify theme injection")
return e}function Va(e,t,a){e.push(`${t} {\n`,...a.map((e=>`  ${e};\n`)),"}\n")}function wa(e){const t=e.dark?2:1,a=e.dark?1:2,l=[]
for(const[o,n]of Object.entries(e.colors)){const e=We(n)
l.push(`--v-theme-${o}: ${e.r},${e.g},${e.b}`),o.startsWith("on-")||l.push(`--v-theme-${o}-overlay-multiplier: ${nt(n)>.18?t:a}`)}for(const[t,a]of Object.entries(e.variables)){const e="string"==typeof a&&a.startsWith("#")?We(a):void 0,o=e?`${e.r}, ${e.g}, ${e.b}`:void 0
l.push(`--v-${t}: ${o??a}`)}return l}const Sa=st({...ut(),...Xt({fullHeight:!0}),...ga()},"VApp"),ka=kt()({name:"VApp",props:Sa(),setup(e,a){let{slots:l}=a
const o=ya(e),{layoutClasses:n,getLayoutItem:r,items:i,layoutRef:s}=ea(e),{rtlClasses:u}=fa()
return Rt((()=>t.createVNode("div",{ref:s,class:["v-application",o.themeClasses.value,n.value,u.value,e.class],style:[e.style]},[t.createVNode("div",{class:"v-application__wrap"},[t.createVNode(t.Suspense,null,{default:()=>[t.createVNode(t.Fragment,null,[l.default?.()])]})])]))),{getLayoutItem:r,items:i,theme:o}}}),xa=st({tag:{type:String,default:"div"}},"tag"),Na=st({text:String,...ut(),...xa()},"VToolbarTitle"),Ca=kt()({name:"VToolbarTitle",props:Na(),setup(e,a){let{slots:l}=a
return Rt((()=>{const a=!!(l.default||l.text||e.text)
return t.createVNode(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[a&&t.createVNode("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,l.default?.()])]})})),{}}}),_a=st({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition")
function Ia(e,a,l){return kt()({name:e,props:_a({mode:l,origin:a}),setup(a,l){let{slots:o}=l
const n={onBeforeEnter(e){a.origin&&(e.style.transformOrigin=a.origin)},onLeave(e){if(a.leaveAbsolute){const{offsetTop:t,offsetLeft:a,offsetWidth:l,offsetHeight:o}=e
e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${a}px`,e.style.width=`${l}px`,e.style.height=`${o}px`}a.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(a.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:a,left:l,width:o,height:n}=e._transitionInitialStyles
delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=a||"",e.style.left=l||"",e.style.width=o||"",e.style.height=n||""}}}
return()=>{const l=a.group?t.TransitionGroup:t.Transition
return t.h(l,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},o.default)}}})}function Ba(e,a){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return kt()({name:e,props:{mode:{type:String,default:l},disabled:Boolean,group:Boolean},setup(l,o){let{slots:n}=o
const r=l.group?t.TransitionGroup:t.Transition
return()=>t.h(r,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:a},n.default)}})}function Pa(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const l=a?"width":"height",o=t.camelize(`offset-${l}`)
return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[l]:e.style[l]}},onEnter(t){const a=t._initialStyle
t.style.setProperty("transition","none","important"),t.style.overflow="hidden"
const n=`${t[o]}px`
t.style[l]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[l]=n}))},onAfterEnter:r,onEnterCancelled:r,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[l]:e.style[l]},e.style.overflow="hidden",e.style[l]=`${e[o]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[l]="0"))},onAfterLeave:n,onLeaveCancelled:n}
function n(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[l]
e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[l]=t),delete e._initialStyle}}const Aa=st({target:[Object,Array]},"v-dialog-transition"),Ra=kt()({name:"VDialogTransition",props:Aa(),setup(e,a){let{slots:l}=a
const o={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,a){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility=""
const{x:l,y:o,sx:n,sy:r,speed:i}=Da(e.target,t),s=ge(t,[{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0},{}],{duration:225*i,easing:"cubic-bezier(0.0, 0, 0.2, 1)"})
Ta(t)?.forEach((e=>{ge(e,[{opacity:0},{opacity:0,offset:.33},{}],{duration:450*i,easing:Ct})})),s.finished.then((()=>a()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,a){await new Promise((e=>requestAnimationFrame(e)))
const{x:l,y:o,sx:n,sy:r,speed:i}=Da(e.target,t)
ge(t,[{},{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0}],{duration:125*i,easing:"cubic-bezier(0.4, 0, 1, 1)"}).finished.then((()=>a())),Ta(t)?.forEach((e=>{ge(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*i,easing:Ct})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}}
return()=>e.target?t.createVNode(t.Transition,t.mergeProps({name:"dialog-transition"},o,{css:!1}),l):t.createVNode(t.Transition,{name:"dialog-transition"},l)}})
function Ta(e){const t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children
return t&&[...t]}function Da(e,t){const a=fe(e),l=me(t),[o,n]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[r,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ")
let s=a.left+a.width/2
"left"===r||"left"===i?s-=a.width/2:"right"!==r&&"right"!==i||(s+=a.width/2)
let u=a.top+a.height/2
"top"===r||"top"===i?u-=a.height/2:"bottom"!==r&&"bottom"!==i||(u+=a.height/2)
const c=a.width/l.width,d=a.height/l.height,v=Math.max(1,c,d),p=c/v||0,f=d/v||0,m=l.width*l.height/(window.innerWidth*window.innerHeight),g=m>.12?Math.min(1.5,10*(m-.12)+1):1
return{x:s-(o+l.left),y:u-(n+l.top),sx:p,sy:f,speed:g}}const Ea=Ia("fab-transition","center center","out-in"),Fa=Ia("dialog-bottom-transition"),$a=Ia("dialog-top-transition"),Ma=Ia("fade-transition"),Oa=Ia("scale-transition"),La=Ia("scroll-x-transition"),za=Ia("scroll-x-reverse-transition"),ja=Ia("scroll-y-transition"),Ha=Ia("scroll-y-reverse-transition"),Wa=Ia("slide-x-transition"),Ua=Ia("slide-x-reverse-transition"),Ya=Ia("slide-y-transition"),Ga=Ia("slide-y-reverse-transition"),qa=Ba("expand-transition",Pa()),Ka=Ba("expand-x-transition",Pa("",!0)),Xa=st({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Za=kt(!1)({name:"VDefaultsProvider",props:Xa(),setup(e,a){let{slots:l}=a
const{defaults:o,disabled:n,reset:r,root:i,scoped:s}=t.toRefs(e)
return bt(o,{reset:r,root:i,scoped:s,disabled:n}),()=>l.default?.()}}),Qa=st({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension")
function Ja(e){return{dimensionStyles:t.computed((()=>{const t={},a=f(e.height),l=f(e.maxHeight),o=f(e.maxWidth),n=f(e.minHeight),r=f(e.minWidth),i=f(e.width)
return null!=a&&(t.height=a),null!=l&&(t.maxHeight=l),null!=o&&(t.maxWidth=o),null!=n&&(t.minHeight=n),null!=r&&(t.minWidth=r),null!=i&&(t.width=i),t}))}}const el=st({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...ut(),...Qa()},"VResponsive"),tl=kt()({name:"VResponsive",props:el(),setup(e,a){let{slots:l}=a
const{aspectStyles:o}=function(e){return{aspectStyles:t.computed((()=>{const t=Number(e.aspectRatio)
return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}(e),{dimensionStyles:n}=Ja(e)
return Rt((()=>t.createVNode("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[n.value,e.style]},[t.createVNode("div",{class:"v-responsive__sizer",style:o.value},null),l.additional?.(),l.default&&t.createVNode("div",{class:["v-responsive__content",e.contentClass]},[l.default()])]))),{}}})
function al(e){return H((()=>{const t=[],a={}
if(e.value.background)if(ze(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&(ze(l=e.value.background)&&!/^((rgb|hsl)a?\()?var\(--/.test(l))){const t=We(e.value.background)
if(null==t.a||1===t.a){const e=it(t)
a.color=e,a.caretColor=e}}}else t.push(`bg-${e.value.background}`)
var l
return e.value.text&&(ze(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}}))}function ll(e,a){const l=t.computed((()=>({text:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=al(l)
return{textColorClasses:o,textColorStyles:n}}function ol(e,a){const l=t.computed((()=>({background:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=al(l)
return{backgroundColorClasses:o,backgroundColorStyles:n}}const nl=st({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded")
function rl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.computed((()=>{const l=t.isRef(e)?e.value:e.rounded,o=t.isRef(e)?e.value:e.tile,n=[]
if(!0===l||""===l)n.push(`${a}--rounded`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))n.push(`rounded-${e}`)
else(o||!1===l)&&n.push("rounded-0")
return n}))
return{roundedClasses:l}}const il=st({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),sl=(e,a)=>{let{slots:l}=a
const{transition:o,disabled:n,group:r,...i}=e,{component:s=(r?t.TransitionGroup:t.Transition),...u}="object"==typeof o?o:{}
return t.h(s,t.mergeProps("string"==typeof o?{name:n?"":o}:u,"string"==typeof o?{}:Object.fromEntries(Object.entries({disabled:n,group:r}).filter((e=>{let[t,a]=e
return void 0!==a}))),i),l)}
function ul(e,t){const a=e._observe?.[t.instance.$.uid]
a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const cl={mounted:function(e,t){if(!l)return
const a=t.modifiers||{},o=t.value,{handler:n,options:r}="object"==typeof o?o:{handler:o,options:{}},i=new IntersectionObserver((function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0
const r=e._observe?.[t.instance.$.uid]
if(!r)return
const i=l.some((e=>e.isIntersecting))
!n||a.quiet&&!r.init||a.once&&!i&&!r.init||n(i,l,o),i&&a.once?ul(e,t):r.init=!0}),r)
e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)},unmounted:ul},dl=st({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...el(),...ut(),...nl(),...il()},"VImg"),vl=kt()({name:"VImg",directives:{intersect:cl},props:dl(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:o,slots:n}=a
const{backgroundColorClasses:r,backgroundColorStyles:i}=ol(t.toRef(e,"color")),{roundedClasses:s}=rl(e),u=ct("VImg"),c=t.shallowRef(""),d=t.ref(),v=t.shallowRef(e.eager?"loading":"idle"),p=t.shallowRef(),m=t.shallowRef(),g=t.computed((()=>e.src&&"object"==typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),h=t.computed((()=>g.value.aspect||p.value/m.value||0))
function y(a){if((!e.eager||!a)&&(!l||a||e.eager)){if(v.value="loading",g.value.lazySrc){const e=new Image
e.src=g.value.lazySrc,k(e,null)}g.value.src&&t.nextTick((()=>{o("loadstart",d.value?.currentSrc||g.value.src),setTimeout((()=>{if(!u.isUnmounted)if(d.value?.complete){if(d.value.naturalWidth||V(),"error"===v.value)return
h.value||k(d.value,null),"loading"===v.value&&b()}else h.value||k(d.value),w()}))}))}}function b(){u.isUnmounted||(w(),k(d.value),v.value="loaded",o("load",d.value?.currentSrc||g.value.src))}function V(){u.isUnmounted||(v.value="error",o("error",d.value?.currentSrc||g.value.src))}function w(){const e=d.value
e&&(c.value=e.currentSrc||e.src)}t.watch((()=>e.src),(()=>{y("idle"!==v.value)})),t.watch(h,((e,t)=>{!e&&t&&d.value&&k(d.value)})),t.onBeforeMount((()=>y()))
let S=-1
function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100
const a=()=>{if(clearTimeout(S),u.isUnmounted)return
const{naturalHeight:l,naturalWidth:o}=e
l||o?(p.value=o,m.value=l):e.complete||"loading"!==v.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(p.value=1,m.value=1):S=window.setTimeout(a,t)}
a()}t.onBeforeUnmount((()=>{clearTimeout(S)}))
const x=t.computed((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),N=()=>{if(!g.value.src||"idle"===v.value)return null
const a=t.createVNode("img",{class:["v-img__img",x.value],style:{objectPosition:e.position},src:g.value.src,srcset:g.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:d,onLoad:b,onError:V},null),l=n.sources?.()
return t.createVNode(sl,{transition:e.transition,appear:!0},{default:()=>[t.withDirectives(l?t.createVNode("picture",{class:"v-img__picture"},[l,a]):a,[[t.vShow,"loaded"===v.value]])]})},C=()=>t.createVNode(sl,{transition:e.transition},{default:()=>[g.value.lazySrc&&"loaded"!==v.value&&t.createVNode("img",{class:["v-img__img","v-img__img--preload",x.value],style:{objectPosition:e.position},src:g.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),_=()=>n.placeholder?t.createVNode(sl,{transition:e.transition,appear:!0},{default:()=>[("loading"===v.value||"error"===v.value&&!n.error)&&t.createVNode("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,I=()=>n.error?t.createVNode(sl,{transition:e.transition,appear:!0},{default:()=>["error"===v.value&&t.createVNode("div",{class:"v-img__error"},[n.error()])]}):null,B=()=>e.gradient?t.createVNode("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,P=t.shallowRef(!1)
{const e=t.watch(h,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{P.value=!0}))})),e())}))}return Rt((()=>{const a=tl.filterProps(e)
return t.withDirectives(t.createVNode(tl,t.mergeProps({class:["v-img",{"v-img--booting":!P.value},r.value,s.value,e.class],style:[{width:f("auto"===e.width?p.value:e.width)},i.value,e.style]},a,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t.createVNode(t.Fragment,null,[t.createVNode(N,null,null),t.createVNode(C,null,null),t.createVNode(B,null,null),t.createVNode(_,null,null),t.createVNode(I,null,null)]),default:n.default}),[[t.resolveDirective("intersect"),{handler:y,options:e.options},null,{once:!0}]])})),{currentSrc:c,image:d,state:v,naturalWidth:p,naturalHeight:m}}}),pl=st({border:[Boolean,Number,String]},"border")
function fl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.computed((()=>{const l=t.isRef(e)?e.value:e.border,o=[]
if(!0===l||""===l)o.push(`${a}--border`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))o.push(`border-${e}`)
return o}))
return{borderClasses:l}}const ml=st({elevation:{type:[Number,String],validator(e){const t=parseInt(e)
return!isNaN(t)&&t>=0&&t<=24}}},"elevation")
function gl(e){return{elevationClasses:t.computed((()=>{const a=t.isRef(e)?e.value:e.elevation,l=[]
return null==a||l.push(`elevation-${a}`),l}))}}const hl=[null,"prominent","default","comfortable","compact"],yl=st({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>hl.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...pl(),...ut(),...ml(),...nl(),...xa({tag:"header"}),...ga()},"VToolbar"),bl=kt()({name:"VToolbar",props:yl(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=ol(t.toRef(e,"color")),{borderClasses:r}=fl(e),{elevationClasses:i}=gl(e),{roundedClasses:s}=rl(e),{themeClasses:u}=ya(e),{rtlClasses:c}=fa(),d=t.shallowRef(!(!e.extended&&!l.extension?.())),v=t.computed((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),p=t.computed((()=>d.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0))
return bt({VBtn:{variant:"text"}}),Rt((()=>{const a=!(!e.title&&!l.title),m=!(!l.image&&!e.image),g=l.extension?.()
return d.value=!(!e.extended&&!g),t.createVNode(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,r.value,i.value,s.value,u.value,c.value,e.class],style:[n.value,e.style]},{default:()=>[m&&t.createVNode("div",{key:"image",class:"v-toolbar__image"},[l.image?t.createVNode(Za,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t.createVNode(vl,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(Za,{defaults:{VTabs:{height:f(v.value)}}},{default:()=>[t.createVNode("div",{class:"v-toolbar__content",style:{height:f(v.value)}},[l.prepend&&t.createVNode("div",{class:"v-toolbar__prepend"},[l.prepend?.()]),a&&t.createVNode(Ca,{key:"title",text:e.title},{text:l.title}),l.default?.(),l.append&&t.createVNode("div",{class:"v-toolbar__append"},[l.append?.()])])]}),t.createVNode(Za,{defaults:{VTabs:{height:f(p.value)}}},{default:()=>[t.createVNode(qa,null,{default:()=>[d.value&&t.createVNode("div",{class:"v-toolbar__extension",style:{height:f(p.value)}},[g])]})]})]})})),{contentHeight:v,extensionHeight:p}}}),Vl=st({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll")
function wl(){const e=t.shallowRef(!1)
t.onMounted((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}))
return{ssrBootStyles:t.computed((()=>e.value?void 0:{transition:"none !important"})),isBooted:t.readonly(e)}}const Sl=st({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...yl(),...Zt(),...Vl(),height:{type:[Number,String],default:64}},"VAppBar"),kl=kt()({name:"VAppBar",props:Sl(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.ref(),n=aa(e,"modelValue"),r=t.computed((()=>{const t=new Set(e.scrollBehavior?.split(" ")??[])
return{hide:t.has("hide"),fullyHide:t.has("fully-hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}})),i=t.computed((()=>{const e=r.value
return e.hide||e.fullyHide||e.inverted||e.collapse||e.elevate||e.fadeImage||!n.value})),{currentScroll:s,scrollThreshold:u,isScrollingUp:c,scrollRatio:d}=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{canScroll:l}=a
let o=0,n=0
const r=t.ref(null),i=t.shallowRef(0),s=t.shallowRef(0),u=t.shallowRef(0),c=t.shallowRef(!1),d=t.shallowRef(!1),v=t.computed((()=>Number(e.scrollThreshold))),p=t.computed((()=>A((v.value-i.value)/v.value||0))),f=()=>{const e=r.value
if(!e||l&&!l.value)return
o=i.value,i.value="window"in e?e.pageYOffset:e.scrollTop
const t=e instanceof Window?document.documentElement.scrollHeight:e.scrollHeight
n===t?(d.value=i.value<o,u.value=Math.abs(i.value-v.value)):n=t}
return t.watch(d,(()=>{s.value=s.value||i.value})),t.watch(c,(()=>{s.value=0})),t.onMounted((()=>{t.watch((()=>e.scrollTarget),(e=>{const t=e?document.querySelector(e):window
t?t!==r.value&&(r.value?.removeEventListener("scroll",f),r.value=t,r.value.addEventListener("scroll",f,{passive:!0})):Ie(`Unable to locate element with identifier ${e}`)}),{immediate:!0})})),t.onBeforeUnmount((()=>{r.value?.removeEventListener("scroll",f)})),l&&t.watch(l,f,{immediate:!0}),{scrollThreshold:v,currentScroll:i,currentThreshold:u,isScrollActive:c,scrollRatio:p,isScrollingUp:d,savedScroll:s}}(e,{canScroll:i}),v=t.computed((()=>r.value.hide||r.value.fullyHide)),p=t.computed((()=>e.collapse||r.value.collapse&&(r.value.inverted?d.value>0:0===d.value))),f=t.computed((()=>e.flat||r.value.fullyHide&&!n.value||r.value.elevate&&(r.value.inverted?s.value>0:0===s.value))),m=t.computed((()=>r.value.fadeImage?r.value.inverted?1-d.value:d.value:void 0)),g=t.computed((()=>{const t=Number(o.value?.contentHeight??e.height),a=Number(o.value?.extensionHeight??0)
return v.value?s.value<u.value||r.value.fullyHide?t+a:t:t+a}))
ta(t.computed((()=>!!e.scrollBehavior)),(()=>{t.watchEffect((()=>{v.value?r.value.inverted?n.value=s.value>u.value:n.value=c.value||s.value<u.value:n.value=!0}))}))
const{ssrBootStyles:h}=wl(),{layoutItemStyles:y,layoutIsReady:b}=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"location"),layoutSize:g,elementSize:t.shallowRef(void 0),active:n,absolute:t.toRef(e,"absolute")})
return Rt((()=>{const a=bl.filterProps(e)
return t.createVNode(bl,t.mergeProps({ref:o,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{...y.value,"--v-toolbar-image-opacity":m.value,height:void 0,...h.value},e.style]},a,{collapse:p.value,flat:f.value}),l)})),b}}),xl=[null,"default","comfortable","compact"],Nl=st({density:{type:String,default:"default",validator:e=>xl.includes(e)}},"density")
function Cl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.computed((()=>`${a}--density-${e.density}`))
return{densityClasses:l}}const _l=["elevated","flat","tonal","outlined","text","plain"]
function Il(e,a){return t.createVNode(t.Fragment,null,[e&&t.createVNode("span",{key:"overlay",class:`${a}__overlay`},null),t.createVNode("span",{key:"underlay",class:`${a}__underlay`},null)])}const Bl=st({color:String,variant:{type:String,default:"elevated",validator:e=>_l.includes(e)}},"variant")
function Pl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.computed((()=>{const{variant:l}=t.unref(e)
return`${a}--variant-${l}`})),{colorClasses:o,colorStyles:n}=al(t.computed((()=>{const{variant:a,color:l}=t.unref(e)
return{[["elevated","flat"].includes(a)?"background":"text"]:l}})))
return{colorClasses:o,colorStyles:n,variantClasses:l}}const Al=st({baseColor:String,divided:Boolean,...pl(),...ut(),...Nl(),...ml(),...nl(),...xa(),...ga(),...Bl()},"VBtnGroup"),Rl=kt()({name:"VBtnGroup",props:Al(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{densityClasses:n}=Cl(e),{borderClasses:r}=fl(e),{elevationClasses:i}=gl(e),{roundedClasses:s}=rl(e)
bt({VBtn:{height:"auto",baseColor:t.toRef(e,"baseColor"),color:t.toRef(e,"color"),density:t.toRef(e,"density"),flat:!0,variant:t.toRef(e,"variant")}}),Rt((()=>t.createVNode(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},o.value,r.value,n.value,i.value,s.value,e.class],style:e.style},l)))}}),Tl=st({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Dl=st({value:null,disabled:Boolean,selectedClass:String},"group-item")
function El(e,a){let l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
const o=ct("useGroupItem")
if(!o)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function")
const n=ft()
t.provide(Symbol.for(`${a.description}:id`),n)
const r=t.inject(a,null)
if(!r){if(!l)return r
throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const i=t.toRef(e,"value"),s=t.computed((()=>!(!r.disabled.value&&!e.disabled)))
r.register({id:n,value:i,disabled:s},o),t.onBeforeUnmount((()=>{r.unregister(n)}))
const u=t.computed((()=>r.isSelected(n))),c=t.computed((()=>r.items.value[0].id===n)),d=t.computed((()=>r.items.value[r.items.value.length-1].id===n)),v=t.computed((()=>u.value&&[r.selectedClass.value,e.selectedClass]))
return t.watch(u,(e=>{o.emit("group:selected",{value:e})}),{flush:"sync"}),{id:n,isSelected:u,isFirst:c,isLast:d,toggle:()=>r.select(n,!u.value),select:e=>r.select(n,e),selectedClass:v,value:i,disabled:s,group:r}}function Fl(e,a){let l=!1
const o=t.reactive([]),n=aa(e,"modelValue",[],(e=>null==e?[]:$l(o,P(e))),(t=>{const a=function(e,t){const a=[]
return t.forEach((t=>{const l=e.findIndex((e=>e.id===t))
if(~l){const t=e[l]
a.push(null!=t.value?t.value:l)}})),a}(o,t)
return e.multiple?a:a[0]})),r=ct("useGroup")
function i(){const t=o.find((e=>!e.disabled))
t&&"force"===e.mandatory&&!n.value.length&&(n.value=[t.id])}function s(t){if(e.multiple&&Ie('This method is not supported when using "multiple" prop'),n.value.length){const e=n.value[0],a=o.findIndex((t=>t.id===e))
let l=(a+t)%o.length,r=o[l]
for(;r.disabled&&l!==a;)l=(l+t)%o.length,r=o[l]
if(r.disabled)return
n.value=[o[l].id]}else{const e=o.find((e=>!e.disabled))
e&&(n.value=[e.id])}}t.onMounted((()=>{i()})),t.onBeforeUnmount((()=>{l=!0})),t.onUpdated((()=>{for(let e=0;e<o.length;e++)o[e].useIndexAsValue&&(o[e].value=e)}))
const u={register:function(e,l){const n=e,i=O(Symbol.for(`${a.description}:id`),r?.vnode).indexOf(l)
null==t.unref(n.value)&&(n.value=i,n.useIndexAsValue=!0),i>-1?o.splice(i,0,n):o.push(n)},unregister:function(e){if(l)return
i()
const t=o.findIndex((t=>t.id===e))
o.splice(t,1)},selected:n,select:function(t,a){const l=o.find((e=>e.id===t))
if(!a||!l?.disabled)if(e.multiple){const l=n.value.slice(),o=l.findIndex((e=>e===t)),r=~o
if(a=a??!r,r&&e.mandatory&&l.length<=1)return
if(!r&&null!=e.max&&l.length+1>e.max)return
o<0&&a?l.push(t):o>=0&&!a&&l.splice(o,1),n.value=l}else{const l=n.value.includes(t)
if(e.mandatory&&l)return
n.value=a??!l?[t]:[]}},disabled:t.toRef(e,"disabled"),prev:()=>s(o.length-1),next:()=>s(1),isSelected:e=>n.value.includes(e),selectedClass:t.computed((()=>e.selectedClass)),items:t.computed((()=>o)),getItemIndex:e=>function(e,t){const a=$l(e,[t])
return a.length?e.findIndex((e=>e.id===a[0])):-1}(o,e)}
return t.provide(a,u),u}function $l(e,t){const a=[]
return t.forEach((t=>{const l=e.find((e=>c(t,e.value))),o=e[t]
null!=l?.value?a.push(l.id):null!=o&&a.push(o.id)})),a}const Ml=Symbol.for("vuetify:v-btn-toggle"),Ol=st({...Al(),...Tl()},"VBtnToggle"),Ll=kt()({name:"VBtnToggle",props:Ol(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{isSelected:o,next:n,prev:r,select:i,selected:s}=Fl(e,Ml)
return Rt((()=>{const a=Rl.filterProps(e)
return t.createVNode(Rl,t.mergeProps({class:["v-btn-toggle",e.class]},a,{style:e.style}),{default:()=>[l.default?.({isSelected:o,next:n,prev:r,select:i,selected:s})]})})),{next:n,prev:r,select:i}}}),zl=["x-small","small","default","large","x-large"],jl=st({size:{type:[String,Number],default:"default"}},"size")
function Hl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
return H((()=>{let a,l
return W(zl,e.size)?a=`${t}--size-${e.size}`:e.size&&(l={width:f(e.size),height:f(e.size)}),{sizeClasses:a,sizeStyles:l}}))}const Wl=st({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Tt,...ut(),...jl(),...xa({tag:"i"}),...ga()},"VIcon"),Ul=kt()({name:"VIcon",props:Wl(),setup(e,a){let{attrs:l,slots:o}=a
const n=t.ref(),{themeClasses:r}=ya(e),{iconData:i}=(e=>{const a=t.inject(Dt)
if(!a)throw new Error("Missing Vuetify Icons provide!")
return{iconData:t.computed((()=>{const l=t.unref(e)
if(!l)return{component:Ft}
let o=l
if("string"==typeof o&&(o=o.trim(),o.startsWith("$")&&(o=a.aliases?.[o.slice(1)])),o||Ie(`Could not find aliased icon "${l}"`),Array.isArray(o))return{component:$t,icon:o}
if("string"!=typeof o)return{component:Ft,icon:o}
const n=Object.keys(a.sets).find((e=>"string"==typeof o&&o.startsWith(`${e}:`))),r=n?o.slice(n.length+1):o
return{component:a.sets[n??a.defaultSet].component,icon:r}}))}})(t.computed((()=>n.value||e.icon))),{sizeClasses:s}=Hl(e),{textColorClasses:u,textColorStyles:c}=ll(t.toRef(e,"color"))
return Rt((()=>{const a=o.default?.()
a&&(n.value=$(a).filter((e=>e.type===t.Text&&e.children&&"string"==typeof e.children))[0]?.children)
const d=!(!l.onClick&&!l.onClickOnce)
return t.createVNode(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,s.value,u.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},c.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[a]})})),{}}})
function Yl(e,a){const o=t.ref(),n=t.shallowRef(!1)
if(l){const l=new IntersectionObserver((t=>{e?.(t,l),n.value=!!t.find((e=>e.isIntersecting))}),a)
t.onBeforeUnmount((()=>{l.disconnect()})),t.watch(o,((e,t)=>{t&&(l.unobserve(t),n.value=!1),e&&l.observe(e)}),{flush:"post"})}return{intersectionRef:o,isIntersecting:n}}const Gl=st({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ut(),...jl(),...xa({tag:"div"}),...ga()},"VProgressCircular"),ql=kt()({name:"VProgressCircular",props:Gl(),setup(e,a){let{slots:l}=a
const o=2*Math.PI*20,n=t.ref(),{themeClasses:r}=ya(e),{sizeClasses:i,sizeStyles:s}=Hl(e),{textColorClasses:u,textColorStyles:c}=ll(t.toRef(e,"color")),{textColorClasses:d,textColorStyles:v}=ll(t.toRef(e,"bgColor")),{intersectionRef:p,isIntersecting:m}=Yl(),{resizeRef:g,contentRect:h}=Gt(),y=t.computed((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),b=t.computed((()=>Number(e.width))),V=t.computed((()=>s.value?Number(e.size):h.value?h.value.width:Math.max(b.value,32))),w=t.computed((()=>20/(1-b.value/V.value)*2)),S=t.computed((()=>b.value/V.value*w.value)),k=t.computed((()=>f((100-y.value)/100*o)))
return t.watchEffect((()=>{p.value=n.value,g.value=n.value})),Rt((()=>t.createVNode(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},r.value,i.value,u.value,e.class],style:[s.value,c.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:y.value},{default:()=>[t.createVNode("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[t.createVNode("circle",{class:["v-progress-circular__underlay",d.value],style:v.value,fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":S.value,"stroke-dasharray":o,"stroke-dashoffset":0},null),t.createVNode("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":S.value,"stroke-dasharray":o,"stroke-dashoffset":k.value},null)]),l.default&&t.createVNode("div",{class:"v-progress-circular__content"},[l.default({value:y.value})])]}))),{}}}),Kl={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Xl=st({location:String},"location")
function Zl(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2?arguments[2]:void 0
const{isRtl:o}=fa(),n=t.computed((()=>{if(!e.location)return{}
const{side:t,align:n}=re(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value)
function r(e){return l?l(e):0}const i={}
return"center"!==t&&(a?i[Kl[t]]=`calc(100% - ${r(t)}px)`:i[t]=0),"center"!==n?a?i[Kl[n]]=`calc(100% - ${r(n)}px)`:i[n]=0:("center"===t?i.top=i.left="50%":i[{top:"left",bottom:"left",left:"top",right:"top"}[t]]="50%",i.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[t]),i}))
return{locationStyles:n}}const Ql=st({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ut(),...Xl({location:"top"}),...nl(),...xa(),...ga()},"VProgressLinear"),Jl=kt()({name:"VProgressLinear",props:Ql(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),{isRtl:n,rtlClasses:r}=fa(),{themeClasses:i}=ya(e),{locationStyles:s}=Zl(e),{textColorClasses:u,textColorStyles:c}=ll(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:v}=ol(t.computed((()=>e.bgColor||e.color))),{backgroundColorClasses:p,backgroundColorStyles:m}=ol(t.computed((()=>e.bufferColor||e.bgColor||e.color))),{backgroundColorClasses:g,backgroundColorStyles:h}=ol(e,"color"),{roundedClasses:y}=rl(e),{intersectionRef:b,isIntersecting:V}=Yl(),w=t.computed((()=>parseFloat(e.max))),S=t.computed((()=>parseFloat(e.height))),k=t.computed((()=>A(parseFloat(e.bufferValue)/w.value*100,0,100))),x=t.computed((()=>A(parseFloat(o.value)/w.value*100,0,100))),N=t.computed((()=>n.value!==e.reverse)),C=t.computed((()=>e.indeterminate?"fade-transition":"slide-x-transition"))
function _(e){if(!b.value)return
const{left:t,right:a,width:l}=b.value.getBoundingClientRect(),n=N.value?l-e.clientX+(a-l):e.clientX-t
o.value=Math.round(n/l*w.value)}return Rt((()=>t.createVNode(e.tag,{ref:b,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&V.value,"v-progress-linear--reverse":N.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},y.value,i.value,r.value,e.class],style:[{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?f(S.value):0,"--v-progress-linear-height":f(S.value),...e.absolute?s.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:x.value,onClick:e.clickable&&_},{default:()=>[e.stream&&t.createVNode("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[N.value?"left":"right"]:f(-S.value),borderTop:`${f(S.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${f(S.value/4)})`,width:f(100-k.value,"%"),"--v-progress-linear-stream-to":f(S.value*(N.value?1:-1))}},null),t.createVNode("div",{class:["v-progress-linear__background",d.value],style:[v.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),t.createVNode("div",{class:["v-progress-linear__buffer",p.value],style:[m.value,{opacity:parseFloat(e.bufferOpacity),width:f(k.value,"%")}]},null),t.createVNode(t.Transition,{name:C.value},{default:()=>[e.indeterminate?t.createVNode("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>t.createVNode("div",{key:e,class:["v-progress-linear__indeterminate",e,g.value],style:h.value},null)))]):t.createVNode("div",{class:["v-progress-linear__determinate",g.value],style:[h.value,{width:f(x.value,"%")}]},null)]}),l.default&&t.createVNode("div",{class:"v-progress-linear__content"},[l.default({value:x.value,buffer:k.value})])]}))),{}}}),eo=st({loading:[Boolean,String]},"loader")
function to(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.computed((()=>({[`${a}--loading`]:e.loading})))
return{loaderClasses:l}}function ao(e,a){let{slots:l}=a
return t.createVNode("div",{class:`${e.name}__loader`},[l.default?.({color:e.color,isActive:e.active})||t.createVNode(Jl,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const lo=["static","relative","fixed","absolute","sticky"],oo=st({position:{type:String,validator:e=>lo.includes(e)}},"position")
function no(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.computed((()=>e.position?`${a}--${e.position}`:void 0))
return{positionClasses:l}}function ro(){return ct("useRouter")?.proxy?.$router}function io(e,a){const l=t.resolveDynamicComponent("RouterLink"),o=t.computed((()=>!(!e.href&&!e.to))),n=t.computed((()=>o?.value||G(a,"click")||G(e,"click")))
if("string"==typeof l||!("useLink"in l))return{isLink:o,isClickable:n,href:t.toRef(e,"href")}
const r=t.computed((()=>({...e,to:t.toRef((()=>e.to||""))}))),i=l.useLink(r.value),s=t.computed((()=>e.to?i:void 0)),u=function(){const e=ct("useRoute")
return t.computed((()=>e?.proxy?.$route))}()
return{isLink:o,isClickable:n,route:s.value?.route,navigate:s.value?.navigate,isActive:t.computed((()=>!!s.value&&(e.exact?u.value?s.value.isExactActive?.value&&c(s.value.route.value.query,u.value.query):s.value.isExactActive?.value??!1:s.value.isActive?.value??!1))),href:t.computed((()=>e.to?s.value?.route.value.href:e.href))}}const so=st({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router")
let uo=!1
const co=Symbol("rippleStop")
function vo(e,t){e.style.transform=t,e.style.webkitTransform=t}function po(e){return"TouchEvent"===e.constructor.name}function fo(e){return"KeyboardEvent"===e.constructor.name}const mo={show(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t?._ripple?.enabled)return
const l=document.createElement("span"),o=document.createElement("span")
l.appendChild(o),l.className="v-ripple__container",a.class&&(l.className+=` ${a.class}`)
const{radius:n,scale:r,x:i,y:s,centerX:u,centerY:c}=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=0,o=0
if(!fo(e)){const a=t.getBoundingClientRect(),n=po(e)?e.touches[e.touches.length-1]:e
l=n.clientX-a.left,o=n.clientY-a.top}let n=0,r=.3
t._ripple?.circle?(r=.15,n=t.clientWidth/2,n=a.center?n:n+Math.sqrt((l-n)**2+(o-n)**2)/4):n=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2
const i=(t.clientWidth-2*n)/2+"px",s=(t.clientHeight-2*n)/2+"px",u=a.center?i:l-n+"px",c=a.center?s:o-n+"px"
return{radius:n,scale:r,x:u,y:c,centerX:i,centerY:s}}(e,t,a),d=2*n+"px"
o.className="v-ripple__animation",o.style.width=d,o.style.height=d,t.appendChild(l)
const v=window.getComputedStyle(t)
v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),vo(o,`translate(${i}, ${s}) scale3d(${r},${r},${r})`),o.dataset.activated=String(performance.now()),setTimeout((()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),vo(o,`translate(${u}, ${c}) scale3d(1,1,1)`)}),0)},hide(e){if(!e?._ripple?.enabled)return
const t=e.getElementsByClassName("v-ripple__animation")
if(0===t.length)return
const a=t[t.length-1]
if(a.dataset.isHiding)return
a.dataset.isHiding="true"
const l=performance.now()-Number(a.dataset.activated),o=Math.max(250-l,0)
setTimeout((()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout((()=>{1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode?.parentNode===e&&e.removeChild(a.parentNode)}),300)}),o)}}
function go(e){return void 0===e||!!e}function ho(e){const t={},a=e.currentTarget
if(a?._ripple&&!a._ripple.touched&&!e[co]){if(e[co]=!0,po(e))a._ripple.touched=!0,a._ripple.isTouch=!0
else if(a._ripple.isTouch)return
if(t.center=a._ripple.centered||fo(e),a._ripple.class&&(t.class=a._ripple.class),po(e)){if(a._ripple.showTimerCommit)return
a._ripple.showTimerCommit=()=>{mo.show(e,a,t)},a._ripple.showTimer=window.setTimeout((()=>{a?._ripple?.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)}),80)}else mo.show(e,a,t)}}function yo(e){e[co]=!0}function bo(e){const t=e.currentTarget
if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{bo(e)})))
window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),mo.hide(t)}}function Vo(e){const t=e.currentTarget
t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let wo=!1
function So(e){wo||e.keyCode!==h.enter&&e.keyCode!==h.space||(wo=!0,ho(e))}function ko(e){wo=!1,bo(e)}function xo(e){wo&&(wo=!1,bo(e))}function No(e,t,a){const{value:l,modifiers:o}=t,n=go(l)
if(n||mo.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=n,e._ripple.centered=o.center,e._ripple.circle=o.circle,m(l)&&l.class&&(e._ripple.class=l.class),n&&!a){if(o.stop)return e.addEventListener("touchstart",yo,{passive:!0}),void e.addEventListener("mousedown",yo)
e.addEventListener("touchstart",ho,{passive:!0}),e.addEventListener("touchend",bo,{passive:!0}),e.addEventListener("touchmove",Vo,{passive:!0}),e.addEventListener("touchcancel",bo),e.addEventListener("mousedown",ho),e.addEventListener("mouseup",bo),e.addEventListener("mouseleave",bo),e.addEventListener("keydown",So),e.addEventListener("keyup",ko),e.addEventListener("blur",xo),e.addEventListener("dragstart",bo,{passive:!0})}else!n&&a&&Co(e)}function Co(e){e.removeEventListener("mousedown",ho),e.removeEventListener("touchstart",ho),e.removeEventListener("touchend",bo),e.removeEventListener("touchmove",Vo),e.removeEventListener("touchcancel",bo),e.removeEventListener("mouseup",bo),e.removeEventListener("mouseleave",bo),e.removeEventListener("keydown",So),e.removeEventListener("keyup",ko),e.removeEventListener("dragstart",bo),e.removeEventListener("blur",xo)}const _o={mounted:function(e,t){No(e,t,!1)},unmounted:function(e){delete e._ripple,Co(e)},updated:function(e,t){if(t.value===t.oldValue)return
No(e,t,go(t.oldValue))}},Io=st({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Ml},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Tt,appendIcon:Tt,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...pl(),...ut(),...Nl(),...Qa(),...ml(),...Dl(),...eo(),...Xl(),...oo(),...nl(),...so(),...jl(),...xa({tag:"button"}),...ga(),...Bl({variant:"elevated"})},"VBtn"),Bo=kt()({name:"VBtn",props:Io(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=ya(e),{borderClasses:r}=fl(e),{densityClasses:i}=Cl(e),{dimensionStyles:s}=Ja(e),{elevationClasses:u}=gl(e),{loaderClasses:c}=to(e),{locationStyles:d}=Zl(e),{positionClasses:v}=no(e),{roundedClasses:p}=rl(e),{sizeClasses:f,sizeStyles:m}=Hl(e),g=El(e,e.symbol,!1),h=io(e,l),y=t.computed((()=>void 0!==e.active?e.active:h.isLink.value?h.isActive?.value:g?.isSelected.value)),b=t.computed((()=>({color:g?.isSelected.value&&(!h.isLink.value||h.isActive?.value)||!g||h.isActive?.value?e.color??e.baseColor:e.baseColor,variant:e.variant}))),{colorClasses:V,colorStyles:w,variantClasses:S}=Pl(b),k=t.computed((()=>g?.disabled.value||e.disabled)),x=t.computed((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border))),N=t.computed((()=>{if(void 0!==e.value&&"symbol"!=typeof e.value)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value}))
function C(e){k.value||h.isLink.value&&(e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||"_blank"===l.target)||(h.navigate?.(e),g?.toggle())}return function(e,a){t.watch((()=>e.isActive?.value),(l=>{e.isLink.value&&l&&a&&t.nextTick((()=>{a(!0)}))}),{immediate:!0})}(h,g?.select),Rt((()=>{const a=h.isLink.value?"a":e.tag,l=!(!e.prependIcon&&!o.prepend),b=!(!e.appendIcon&&!o.append),_=!(!e.icon||!0===e.icon)
return t.withDirectives(t.createVNode(a,{type:"a"===a?void 0:"button",class:["v-btn",g?.selectedClass.value,{"v-btn--active":y.value,"v-btn--block":e.block,"v-btn--disabled":k.value,"v-btn--elevated":x.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},n.value,r.value,V.value,i.value,u.value,c.value,v.value,p.value,f.value,S.value,e.class],style:[w.value,s.value,d.value,m.value,e.style],"aria-busy":!!e.loading||void 0,disabled:k.value||void 0,href:h.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:C,value:N.value},{default:()=>[Il(!0,"v-btn"),!e.icon&&l&&t.createVNode("span",{key:"prepend",class:"v-btn__prepend"},[o.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},o.prepend):t.createVNode(Ul,{key:"prepend-icon",icon:e.prependIcon},null)]),t.createVNode("span",{class:"v-btn__content","data-no-activator":""},[!o.default&&_?t.createVNode(Ul,{key:"content-icon",icon:e.icon},null):t.createVNode(Za,{key:"content-defaults",disabled:!_,defaults:{VIcon:{icon:e.icon}}},{default:()=>[o.default?.()??e.text]})]),!e.icon&&b&&t.createVNode("span",{key:"append",class:"v-btn__append"},[o.append?t.createVNode(Za,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},o.append):t.createVNode(Ul,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&t.createVNode("span",{key:"loader",class:"v-btn__loader"},[o.loader?.()??t.createVNode(ql,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}),[[_o,!k.value&&!!e.ripple,"",{center:!!e.icon}]])})),{group:g}}}),Po=st({...Io({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ao=kt()({name:"VAppBarNavIcon",props:Po(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(Bo,t.mergeProps(e,{class:["v-app-bar-nav-icon"]}),l))),{}}}),Ro=kt()({name:"VAppBarTitle",props:Na(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(Ca,t.mergeProps(e,{class:"v-app-bar-title"}),l))),{}}}),To=xt("v-alert-title"),Do=["success","info","warning","error"],Eo=st({border:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Tt,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Do.includes(e)},...ut(),...Nl(),...Qa(),...ml(),...Xl(),...oo(),...nl(),...xa(),...ga(),...Bl({variant:"flat"})},"VAlert"),Fo=kt()({name:"VAlert",props:Eo(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=aa(e,"modelValue"),r=t.computed((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),i=t.computed((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:s}=ya(e),{colorClasses:u,colorStyles:c,variantClasses:d}=Pl(i),{densityClasses:v}=Cl(e),{dimensionStyles:p}=Ja(e),{elevationClasses:f}=gl(e),{locationStyles:m}=Zl(e),{positionClasses:g}=no(e),{roundedClasses:h}=rl(e),{textColorClasses:y,textColorStyles:b}=ll(t.toRef(e,"borderColor")),{t:V}=va(),w=t.computed((()=>({"aria-label":V(e.closeLabel),onClick(e){n.value=!1,l("click:close",e)}})))
return()=>{const a=!(!o.prepend&&!r.value),l=!(!o.title&&!e.title),i=!(!o.close&&!e.closable)
return n.value&&t.createVNode(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},s.value,u.value,v.value,f.value,g.value,h.value,d.value,e.class],style:[c.value,p.value,m.value,e.style],role:"alert"},{default:()=>[Il(!1,"v-alert"),e.border&&t.createVNode("div",{key:"border",class:["v-alert__border",y.value],style:b.value},null),a&&t.createVNode("div",{key:"prepend",class:"v-alert__prepend"},[o.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},o.prepend):t.createVNode(Ul,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),t.createVNode("div",{class:"v-alert__content"},[l&&t.createVNode(To,{key:"title"},{default:()=>[o.title?.()??e.title]}),o.text?.()??e.text,o.default?.()]),o.append&&t.createVNode("div",{key:"append",class:"v-alert__append"},[o.append()]),i&&t.createVNode("div",{key:"close",class:"v-alert__close"},[o.close?t.createVNode(Za,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[o.close?.({props:w.value})]}):t.createVNode(Bo,t.mergeProps({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},w.value),null)])]})}}}),$o=st({start:Boolean,end:Boolean,icon:Tt,image:String,text:String,...ut(),...Nl(),...nl(),...jl(),...xa(),...ga(),...Bl({variant:"flat"})},"VAvatar"),Mo=kt()({name:"VAvatar",props:$o(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{colorClasses:n,colorStyles:r,variantClasses:i}=Pl(e),{densityClasses:s}=Cl(e),{roundedClasses:u}=rl(e),{sizeClasses:c,sizeStyles:d}=Hl(e)
return Rt((()=>t.createVNode(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},o.value,n.value,s.value,u.value,c.value,i.value,e.class],style:[r.value,d.value,e.style]},{default:()=>[l.default?t.createVNode(Za,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[l.default()]}):e.image?t.createVNode(vl,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t.createVNode(Ul,{key:"icon",icon:e.icon},null):e.text,Il(!1,"v-avatar")]}))),{}}}),Oo=st({text:String,onClick:Y(),...ut(),...ga()},"VLabel"),Lo=kt()({name:"VLabel",props:Oo(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,l.default?.()]))),{}}}),zo=Symbol.for("vuetify:selection-control-group"),jo=st({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Tt,trueIcon:Tt,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:c},...ut(),...Nl(),...ga()},"SelectionControlGroup"),Ho=st({...jo({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Wo=kt()({name:"VSelectionControlGroup",props:Ho(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),n=ft(),r=t.computed((()=>e.id||`v-selection-control-group-${n}`)),i=t.computed((()=>e.name||r.value)),s=new Set
return t.provide(zo,{modelValue:o,forceUpdate:()=>{s.forEach((e=>e()))},onForceUpdate:e=>{s.add(e),t.onScopeDispose((()=>{s.delete(e)}))}}),bt({[e.defaultsTarget]:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),density:t.toRef(e,"density"),error:t.toRef(e,"error"),inline:t.toRef(e,"inline"),modelValue:o,multiple:t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),name:i,falseIcon:t.toRef(e,"falseIcon"),trueIcon:t.toRef(e,"trueIcon"),readonly:t.toRef(e,"readonly"),ripple:t.toRef(e,"ripple"),type:t.toRef(e,"type"),valueComparator:t.toRef(e,"valueComparator")}}),Rt((()=>t.createVNode("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:"radio"===e.type?"radiogroup":void 0},[l.default?.()]))),{}}}),Uo=st({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ut(),...jo()},"VSelectionControl")
const Yo=kt()({name:"VSelectionControl",directives:{Ripple:_o},inheritAttrs:!1,props:Uo(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{group:n,densityClasses:r,icon:i,model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,trueValue:p}=function(e){const a=t.inject(zo,void 0),{densityClasses:l}=Cl(e),o=aa(e,"modelValue"),n=t.computed((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),r=t.computed((()=>void 0!==e.falseValue&&e.falseValue)),i=t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),s=t.computed({get(){const t=a?a.modelValue.value:o.value
return i.value?P(t).some((t=>e.valueComparator(t,n.value))):e.valueComparator(t,n.value)},set(t){if(e.readonly)return
const l=t?n.value:r.value
let s=l
i.value&&(s=t?[...P(o.value),l]:P(o.value).filter((t=>!e.valueComparator(t,n.value)))),a?a.modelValue.value=s:o.value=s}}),{textColorClasses:u,textColorStyles:c}=ll(t.computed((()=>{if(!e.error&&!e.disabled)return s.value?e.color:e.baseColor}))),{backgroundColorClasses:d,backgroundColorStyles:v}=ol(t.computed((()=>!s.value||e.error||e.disabled?e.baseColor:e.color))),p=t.computed((()=>s.value?e.trueIcon:e.falseIcon))
return{group:a,densityClasses:l,trueValue:n,falseValue:r,model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,icon:p}}(e),f=ft(),m=t.shallowRef(!1),g=t.shallowRef(!1),h=t.ref(),y=t.computed((()=>e.id||`input-${f}`)),b=t.computed((()=>!e.disabled&&!e.readonly))
function V(e){b.value&&(m.value=!0,!1!==ee(e.target,":focus-visible")&&(g.value=!0))}function w(){m.value=!1,g.value=!1}function S(e){e.stopPropagation()}function k(a){b.value?(e.readonly&&n&&t.nextTick((()=>n.forceUpdate())),s.value=a.target.checked):h.value&&(h.value.checked=s.value)}return n?.onForceUpdate((()=>{h.value&&(h.value.checked=s.value)})),Rt((()=>{const a=o.label?o.label({label:e.label,props:{for:y.value}}):e.label,[n,f]=B(l),b=t.createVNode("input",t.mergeProps({ref:h,checked:s.value,disabled:!!e.disabled,id:y.value,onBlur:w,onFocus:V,onInput:k,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:p.value,name:e.name,"aria-checked":"checkbox"===e.type?s.value:void 0},f),null)
return t.createVNode("div",t.mergeProps({class:["v-selection-control",{"v-selection-control--dirty":s.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},r.value,e.class]},n,{style:e.style}),[t.createVNode("div",{class:["v-selection-control__wrapper",u.value],style:c.value},[o.default?.({backgroundColorClasses:d,backgroundColorStyles:v}),t.withDirectives(t.createVNode("div",{class:["v-selection-control__input"]},[o.input?.({model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,inputNode:b,icon:i.value,props:{onFocus:V,onBlur:w,id:y.value}})??t.createVNode(t.Fragment,null,[i.value&&t.createVNode(Ul,{key:"icon",icon:i.value},null),b])]),[[t.resolveDirective("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),a&&t.createVNode(Lo,{for:y.value,onClick:S},{default:()=>[a]})])})),{isFocused:m,input:h}}}),Go=st({indeterminate:Boolean,indeterminateIcon:{type:Tt,default:"$checkboxIndeterminate"},...Uo({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),qo=kt()({name:"VCheckboxBtn",props:Go(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"indeterminate"),n=aa(e,"modelValue")
function r(e){o.value&&(o.value=!1)}const i=t.computed((()=>o.value?e.indeterminateIcon:e.falseIcon)),s=t.computed((()=>o.value?e.indeterminateIcon:e.trueIcon))
return Rt((()=>{const a=k(Yo.filterProps(e),["modelValue"])
return t.createVNode(Yo,t.mergeProps(a,{modelValue:n.value,"onUpdate:modelValue":[e=>n.value=e,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:s.value,"aria-checked":o.value?"mixed":void 0}),l)})),{}}})
function Ko(e){const{t:a}=va()
return{InputIcon:function(l){let{name:o}=l
const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],r=e[`onClick:${o}`],i=r&&n?a(`$vuetify.input.${n}`,e.label??""):void 0
return t.createVNode(Ul,{icon:e[`${o}Icon`],"aria-label":i,onClick:r},null)}}}const Xo=st({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ut(),...il({transition:{component:Ya,leaveAbsolute:!0,group:!0}})},"VMessages"),Zo=kt()({name:"VMessages",props:Xo(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>P(e.messages))),{textColorClasses:n,textColorStyles:r}=ll(t.computed((()=>e.color)))
return Rt((()=>t.createVNode(sl,{transition:e.transition,tag:"div",class:["v-messages",n.value,e.class],style:[r.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&o.value.map(((e,a)=>t.createVNode("div",{class:"v-messages__message",key:`${a}-${o.value}`},[l.message?l.message({message:e}):e])))]}))),{}}}),Qo=st({focused:Boolean,"onUpdate:focused":Y()},"focus")
function Jo(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=aa(e,"focused"),o=t.computed((()=>({[`${a}--focused`]:l.value})))
function n(){l.value=!0}function r(){l.value=!1}return{focusClasses:o,isFocused:l,focus:n,blur:r}}const en=Symbol.for("vuetify:form"),tn=st({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form")
function an(){return t.inject(en,null)}const ln=st({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Qo()},"validation")
function on(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt(),l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ft()
const o=aa(e,"modelValue"),n=t.computed((()=>void 0===e.validationValue?o.value:e.validationValue)),r=an(),i=t.ref([]),s=t.shallowRef(!0),u=t.computed((()=>!(!P(""===o.value?null:o.value).length&&!P(""===n.value?null:n.value).length))),c=t.computed((()=>!!(e.disabled??r?.isDisabled.value))),d=t.computed((()=>!!(e.readonly??r?.isReadonly.value))),v=t.computed((()=>e.errorMessages?.length?P(e.errorMessages).concat(i.value).slice(0,Math.max(0,+e.maxErrors)):i.value)),p=t.computed((()=>{let t=(e.validateOn??r?.validateOn.value)||"input"
"lazy"===t&&(t="input lazy")
const a=new Set(t?.split(" ")??[])
return{blur:a.has("blur")||a.has("input"),input:a.has("input"),submit:a.has("submit"),lazy:a.has("lazy")}})),f=t.computed((()=>!e.error&&!e.errorMessages?.length&&(!e.rules.length||(s.value?!i.value.length&&!p.value.lazy||null:!i.value.length)))),m=t.shallowRef(!1),g=t.computed((()=>({[`${a}--error`]:!1===f.value,[`${a}--dirty`]:u.value,[`${a}--disabled`]:c.value,[`${a}--readonly`]:d.value}))),h=ct("validation"),y=t.computed((()=>e.name??t.unref(l)))
async function b(){o.value=null,await t.nextTick(),await V()}async function V(){s.value=!0,p.value.lazy?i.value=[]:await w(!0)}async function w(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const a=[]
m.value=!0
for(const t of e.rules){if(a.length>=+(e.maxErrors??1))break
const l="function"==typeof t?t:()=>t,o=await l(n.value)
!0!==o&&(!1===o||"string"==typeof o?a.push(o||""):console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`))}return i.value=a,m.value=!1,s.value=t,i.value}return t.onBeforeMount((()=>{r?.register({id:y.value,vm:h,validate:w,reset:b,resetValidation:V})})),t.onBeforeUnmount((()=>{r?.unregister(y.value)})),t.onMounted((async()=>{p.value.lazy||await w(!0),r?.update(y.value,f.value,v.value)})),ta((()=>p.value.input),(()=>{t.watch(n,(()=>{if(null!=n.value)w()
else if(e.focused){const a=t.watch((()=>e.focused),(e=>{e||w(),a()}))}}))})),ta((()=>p.value.blur),(()=>{t.watch((()=>e.focused),(e=>{e||w()}))})),t.watch([f,v],(()=>{r?.update(y.value,f.value,v.value)})),{errorMessages:v,isDirty:u,isDisabled:c,isReadonly:d,isPristine:s,isValid:f,isValidating:m,reset:b,resetValidation:V,validate:w,validationClasses:g}}const nn=st({id:String,appendIcon:Tt,centerAffix:{type:Boolean,default:!0},prependIcon:Tt,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":Y(),"onClick:append":Y(),...ut(),...Nl(),...x(Qa(),["maxWidth","minWidth","width"]),...ga(),...ln()},"VInput"),rn=kt()({name:"VInput",props:{...nn()},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const{densityClasses:r}=Cl(e),{dimensionStyles:i}=Ja(e),{themeClasses:s}=ya(e),{rtlClasses:u}=fa(),{InputIcon:c}=Ko(e),d=ft(),v=t.computed((()=>e.id||`input-${d}`)),p=t.computed((()=>`${v.value}-messages`)),{errorMessages:f,isDirty:m,isDisabled:g,isReadonly:h,isPristine:y,isValid:b,isValidating:V,reset:w,resetValidation:S,validate:k,validationClasses:x}=on(e,"v-input",v),N=t.computed((()=>({id:v,messagesId:p,isDirty:m,isDisabled:g,isReadonly:h,isPristine:y,isValid:b,isValidating:V,reset:w,resetValidation:S,validate:k}))),C=t.computed((()=>e.errorMessages?.length||!y.value&&f.value.length?f.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages))
return Rt((()=>{const a=!(!o.prepend&&!e.prependIcon),l=!(!o.append&&!e.appendIcon),n=C.value.length>0,d=!e.hideDetails||"auto"===e.hideDetails&&(n||!!o.details)
return t.createVNode("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},r.value,s.value,u.value,x.value,e.class],style:[i.value,e.style]},[a&&t.createVNode("div",{key:"prepend",class:"v-input__prepend"},[o.prepend?.(N.value),e.prependIcon&&t.createVNode(c,{key:"prepend-icon",name:"prepend"},null)]),o.default&&t.createVNode("div",{class:"v-input__control"},[o.default?.(N.value)]),l&&t.createVNode("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t.createVNode(c,{key:"append-icon",name:"append"},null),o.append?.(N.value)]),d&&t.createVNode("div",{class:"v-input__details"},[t.createVNode(Zo,{id:p.value,active:n,messages:C.value},{message:o.message}),o.details?.(N.value)])])})),{reset:w,resetValidation:S,validate:k,isValid:b,errorMessages:f}}}),sn=st({...nn(),...k(Go(),["inline"])},"VCheckbox"),un=kt()({name:"VCheckbox",inheritAttrs:!1,props:sn(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=aa(e,"modelValue"),{isFocused:r,focus:i,blur:s}=Jo(e),u=ft(),c=t.computed((()=>e.id||`checkbox-${u}`))
return Rt((()=>{const[a,u]=B(l),d=rn.filterProps(e),v=qo.filterProps(e)
return t.createVNode(rn,t.mergeProps({class:["v-checkbox",e.class]},a,d,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,id:c.value,focused:r.value,style:e.style}),{...o,default:e=>{let{id:a,messagesId:l,isDisabled:r,isReadonly:c,isValid:d}=e
return t.createVNode(qo,t.mergeProps(v,{id:a.value,"aria-describedby":l.value,disabled:r.value,readonly:c.value},u,{error:!1===d.value,modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,onFocus:i,onBlur:s}),o)}})})),{}}}),cn=["sm","md","lg","xl","xxl"],dn=Symbol.for("vuetify:display"),vn={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}}
function pn(e){return a&&!e?window.innerWidth:"object"==typeof e&&e.clientWidth||0}function fn(e){return a&&!e?window.innerHeight:"object"==typeof e&&e.clientHeight||0}function mn(e){const t=a&&!e?window.navigator.userAgent:"ssr"
function l(e){return Boolean(t.match(e))}return{android:l(/android/i),ios:l(/iphone|ipad|ipod/i),cordova:l(/cordova/i),electron:l(/electron/i),chrome:l(/chrome/i),edge:l(/edge/i),firefox:l(/firefox/i),opera:l(/opera/i),win:l(/win/i),mac:l(/mac/i),linux:l(/linux/i),touch:o,ssr:"ssr"===t}}function gn(e,l){const{thresholds:o,mobileBreakpoint:n}=function(){return F(vn,arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn)}(e),r=t.shallowRef(fn(l)),i=t.shallowRef(mn(l)),s=t.reactive({}),u=t.shallowRef(pn(l))
function c(){r.value=fn(),u.value=pn()}return t.watchEffect((()=>{const e=u.value<o.sm,t=u.value<o.md&&!e,a=u.value<o.lg&&!(t||e),l=u.value<o.xl&&!(a||t||e),c=u.value<o.xxl&&!(l||a||t||e),d=u.value>=o.xxl,v=e?"xs":t?"sm":a?"md":l?"lg":c?"xl":"xxl",p="number"==typeof n?n:o[n],f=u.value<p
s.xs=e,s.sm=t,s.md=a,s.lg=l,s.xl=c,s.xxl=d,s.smAndUp=!e,s.mdAndUp=!(e||t),s.lgAndUp=!(e||t||a),s.xlAndUp=!(e||t||a||l),s.smAndDown=!(a||l||c||d),s.mdAndDown=!(l||c||d),s.lgAndDown=!(c||d),s.xlAndDown=!d,s.name=v,s.height=r.value,s.width=u.value,s.mobile=f,s.mobileBreakpoint=n,s.platform=i.value,s.thresholds=o})),a&&window.addEventListener("resize",c,{passive:!0}),{...t.toRefs(s),update:function(){c(),i.value=mn()},ssr:!!l}}const hn=st({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display")
function yn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt()
const l=t.inject(dn)
if(!l)throw new Error("Could not find Vuetify display injection")
const o=t.computed((()=>{if(null!=e.mobile)return e.mobile
if(!e.mobileBreakpoint)return l.mobile.value
const t="number"==typeof e.mobileBreakpoint?e.mobileBreakpoint:l.thresholds.value[e.mobileBreakpoint]
return l.width.value<t})),n=t.computed((()=>a?{[`${a}--mobile`]:o.value}:{}))
return{...l,displayClasses:n,mobile:o}}const bn=Symbol.for("vuetify:goto")
function Vn(e){return"string"==typeof e?document.querySelector(e):g(e)}function wn(e,t,a){if("number"==typeof e)return t&&a?-e:e
let l=Vn(e),o=0
for(;l;)o+=t?l.offsetLeft:l.offsetTop,l=l.offsetParent
return o}function Sn(e,t){return{rtl:t.isRtl,options:F({container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:(4-2*e)*e-1,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}},e)}}async function kn(e,t,a,l){const o=a?"scrollLeft":"scrollTop",n=F(l?.options??{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:(4-2*e)*e-1,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}},t),r=l?.rtl.value,i=("number"==typeof e?e:Vn(e))??0,s="parent"===n.container&&i instanceof HTMLElement?i.parentElement:Vn(n.container)??(document.scrollingElement||document.body)
const u="function"==typeof n.easing?n.easing:n.patterns[n.easing]
if(!u)throw new TypeError(`Easing function "${n.easing}" not found.`)
let c
if("number"==typeof i)c=wn(i,a,r)
else if(c=wn(i,a,r)-wn(s,a,r),n.layout){const e=window.getComputedStyle(i).getPropertyValue("--v-layout-top")
e&&(c-=parseInt(e,10))}c+=n.offset,c=function(e,t,a,l){const{scrollWidth:o,scrollHeight:n}=e,[r,i]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight]
let s,u
l?a?(s=-(o-r),u=0):(s=0,u=o-r):(s=0,u=n+-i)
return Math.max(Math.min(t,u),s)}(s,c,!!r,!!a)
const d=s[o]??0
if(c===d)return Promise.resolve(c)
const v=performance.now()
return new Promise((e=>requestAnimationFrame((function t(a){const l=(a-v)/n.duration,r=Math.floor(d+(c-d)*u(A(l,0,1)))
return s[o]=r,l>=1&&Math.abs(r-s[o])<10?e(c):l>2?(Ie("Scroll target is not reachable"),e(s[o])):void requestAnimationFrame(t)}))))}function xn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const a=t.inject(bn),{isRtl:l}=fa()
if(!a)throw new Error("[Vuetify] Could not find injected goto instance")
const o={...a,rtl:t.computed((()=>a.rtl.value||l.value))}
async function n(t,a){return kn(t,F(e,a),!1,o)}return n.horizontal=async(t,a)=>kn(t,F(e,a),!0,o),n}function Nn(e,t){return t?.[e?"scrollWidth":"scrollHeight"]||0}function Cn(e,t,a){if(!a)return 0
const{scrollLeft:l,offsetWidth:o,scrollWidth:n}=a
return e?t?n-o+l:l:a.scrollTop}function _n(e,t){return t?.[e?"offsetWidth":"offsetHeight"]||0}function In(e,t){return t?.[e?"offsetLeft":"offsetTop"]||0}const Bn=Symbol.for("vuetify:v-slide-group"),Pn=st({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Bn},nextIcon:{type:Tt,default:"$next"},prevIcon:{type:Tt,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["always","desktop","mobile"].includes(e)},...ut(),...hn({mobile:null}),...xa(),...Tl({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),An=kt()({name:"VSlideGroup",props:Pn(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l
const{isRtl:n}=fa(),{displayClasses:r,mobile:i}=yn(e),s=Fl(e,e.symbol),u=t.shallowRef(!1),c=t.shallowRef(0),d=t.shallowRef(0),v=t.shallowRef(0),p=t.computed((()=>"horizontal"===e.direction)),{resizeRef:f,contentRect:m}=Gt(),{resizeRef:g,contentRect:h}=Gt(),y=xn(),b=t.computed((()=>({container:f.el,duration:200,easing:"easeOutQuart"}))),V=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[0])):-1)),w=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[s.selected.value.length-1])):-1))
if(a){let a=-1
t.watch((()=>[s.selected.value,m.value,h.value,p.value]),(()=>{cancelAnimationFrame(a),a=requestAnimationFrame((()=>{if(m.value&&h.value){const e=p.value?"width":"height"
d.value=m.value[e],v.value=h.value[e],u.value=d.value+1<v.value}if(V.value>=0&&g.el){k(g.el.children[w.value],e.centerActive)}}))}))}const S=t.shallowRef(!1)
function k(e,t){let a=0
a=t?function(e){let{selectedElement:t,containerElement:a,isHorizontal:l}=e
const o=_n(l,a)
return In(l,t)-o/2+_n(l,t)/2}({containerElement:f.el,isHorizontal:p.value,selectedElement:e}):function(e){let{selectedElement:t,containerElement:a,isRtl:l,isHorizontal:o}=e
const n=_n(o,a),r=Cn(o,l,a),i=_n(o,t),s=In(o,t),u=.4*i
return r>s?s-u:r+n<s+i?s-n+i+u:r}({containerElement:f.el,isHorizontal:p.value,isRtl:n.value,selectedElement:e}),x(a)}function x(e){if(!a||!f.el)return
const t=_n(p.value,f.el),l=Cn(p.value,n.value,f.el)
if(!(Nn(p.value,f.el)<=t||Math.abs(e-l)<16)){if(p.value&&n.value&&f.el){const{scrollWidth:t,offsetWidth:a}=f.el
e=t-a-e}p.value?y.horizontal(e,b.value):y(e,b.value)}}function N(e){const{scrollTop:t,scrollLeft:a}=e.target
c.value=p.value?a:t}function C(e){if(S.value=!0,u.value&&g.el)for(const t of e.composedPath())for(const e of g.el.children)if(e===t)return void k(e)}function _(e){S.value=!1}let I=!1
function B(e){I||S.value||e.relatedTarget&&g.el?.contains(e.relatedTarget)||R(),I=!1}function P(){I=!0}function A(e){function t(t){e.preventDefault(),R(t)}g.el&&(p.value?"ArrowRight"===e.key?t(n.value?"prev":"next"):"ArrowLeft"===e.key&&t(n.value?"next":"prev"):"ArrowDown"===e.key?t("next"):"ArrowUp"===e.key&&t("prev"),"Home"===e.key?t("first"):"End"===e.key&&t("last"))}function R(e){if(!g.el)return
let t
if(e)if("next"===e){if(t=g.el.querySelector(":focus")?.nextElementSibling,!t)return R("first")}else if("prev"===e){if(t=g.el.querySelector(":focus")?.previousElementSibling,!t)return R("last")}else"first"===e?t=g.el.firstElementChild:"last"===e&&(t=g.el.lastElementChild)
else{t=K(g.el)[0]}t&&t.focus({preventScroll:!0})}function T(e){const t=p.value&&n.value?-1:1,a=("prev"===e?-t:t)*d.value
let l=c.value+a
if(p.value&&n.value&&f.el){const{scrollWidth:e,offsetWidth:t}=f.el
l+=e-t}x(l)}const D=t.computed((()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected}))),E=t.computed((()=>{switch(e.showArrows){case"always":return!0
case"desktop":return!i.value
case!0:return u.value||Math.abs(c.value)>0
case"mobile":return i.value||u.value||Math.abs(c.value)>0
default:return!i.value&&(u.value||Math.abs(c.value)>0)}})),F=t.computed((()=>Math.abs(c.value)>1)),$=t.computed((()=>{if(!f.value)return!1
return Nn(p.value,f.el)-function(e,t){return t?.[e?"clientWidth":"clientHeight"]||0}(p.value,f.el)-Math.abs(c.value)>1}))
return Rt((()=>t.createVNode(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":E.value,"v-slide-group--is-overflowing":u.value},r.value,e.class],style:e.style,tabindex:S.value||s.selected.value.length?-1:0,onFocus:B},{default:()=>[E.value&&t.createVNode("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!F.value}],onMousedown:P,onClick:()=>F.value&&T("prev")},[o.prev?.(D.value)??t.createVNode(Ma,null,{default:()=>[t.createVNode(Ul,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),t.createVNode("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:N},[t.createVNode("div",{ref:g,class:"v-slide-group__content",onFocusin:C,onFocusout:_,onKeydown:A},[o.default?.(D.value)])]),E.value&&t.createVNode("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!$.value}],onMousedown:P,onClick:()=>$.value&&T("next")},[o.next?.(D.value)??t.createVNode(Ma,null,{default:()=>[t.createVNode(Ul,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}))),{selected:s.selected,scrollTo:T,scrollOffset:c,focus:R}}}),Rn=Symbol.for("vuetify:v-chip-group"),Tn=st({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:c},...Pn(),...ut(),...Tl({selectedClass:"v-chip--selected"}),...xa(),...ga(),...Bl({variant:"tonal"})},"VChipGroup"),Dn=kt()({name:"VChipGroup",props:Tn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=Fl(e,Rn)
return bt({VChip:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),filter:t.toRef(e,"filter"),variant:t.toRef(e,"variant")}}),Rt((()=>{const a=An.filterProps(e)
return t.createVNode(An,t.mergeProps(a,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]})})),{}}}),En=st({activeClass:String,appendAvatar:String,appendIcon:Tt,closable:Boolean,closeIcon:{type:Tt,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Tt,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Y(),onClickOnce:Y(),...pl(),...ut(),...Nl(),...ml(),...Dl(),...nl(),...so(),...jl(),...xa({tag:"span"}),...ga(),...Bl({variant:"tonal"})},"VChip"),Fn=kt()({name:"VChip",directives:{Ripple:_o},props:En(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=va(),{borderClasses:i}=fl(e),{colorClasses:s,colorStyles:u,variantClasses:c}=Pl(e),{densityClasses:d}=Cl(e),{elevationClasses:v}=gl(e),{roundedClasses:p}=rl(e),{sizeClasses:f}=Hl(e),{themeClasses:m}=ya(e),g=aa(e,"modelValue"),h=El(e,Rn,!1),y=io(e,l),b=t.computed((()=>!1!==e.link&&y.isLink.value)),V=t.computed((()=>!e.disabled&&!1!==e.link&&(!!h||e.link||y.isClickable.value))),w=t.computed((()=>({"aria-label":r(e.closeLabel),onClick(e){e.preventDefault(),e.stopPropagation(),g.value=!1,o("click:close",e)}})))
function S(e){o("click",e),V.value&&(y.navigate?.(e),h?.toggle())}function k(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),S(e))}return()=>{const a=y.isLink.value?"a":e.tag,l=!(!e.appendIcon&&!e.appendAvatar),o=!(!l&&!n.append),r=!(!n.close&&!e.closable),x=!(!n.filter&&!e.filter)&&h,N=!(!e.prependIcon&&!e.prependAvatar),C=!(!N&&!n.prepend),_=!h||h.isSelected.value
return g.value&&t.withDirectives(t.createVNode(a,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":V.value,"v-chip--filter":x,"v-chip--pill":e.pill},m.value,i.value,_?s.value:void 0,d.value,v.value,p.value,f.value,c.value,h?.selectedClass.value,e.class],style:[_?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:V.value?0:void 0,onClick:S,onKeydown:V.value&&!b.value&&k},{default:()=>[Il(V.value,"v-chip"),x&&t.createVNode(Ka,{key:"filter"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-chip__filter"},[n.filter?t.createVNode(Za,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):t.createVNode(Ul,{key:"filter-icon",icon:e.filterIcon},null)]),[[t.vShow,h.isSelected.value]])]}),C&&t.createVNode("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t.createVNode(t.Fragment,null,[e.prependIcon&&t.createVNode(Ul,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t.createVNode(Mo,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t.createVNode("div",{class:"v-chip__content","data-no-activator":""},[n.default?.({isSelected:h?.isSelected.value,selectedClass:h?.selectedClass.value,select:h?.select,toggle:h?.toggle,value:h?.value.value,disabled:e.disabled})??e.text]),o&&t.createVNode("div",{key:"append",class:"v-chip__append"},[n.append?t.createVNode(Za,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(Ul,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Mo,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),r&&t.createVNode("button",t.mergeProps({key:"close",class:"v-chip__close",type:"button"},w.value),[n.close?t.createVNode(Za,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t.createVNode(Ul,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[t.resolveDirective("ripple"),V.value&&e.ripple,null]])}}}),$n=Symbol.for("vuetify:list")
function Mn(){const e=t.inject($n,{hasPrepend:t.shallowRef(!1),updateHasPrepend:()=>null}),a={hasPrepend:t.shallowRef(!1),updateHasPrepend:e=>{e&&(a.hasPrepend.value=e)}}
return t.provide($n,a),e}function On(){return t.inject($n,null)}const Ln=e=>{const a={activate:a=>{let{id:l,value:o,activated:n}=a
return l=t.toRaw(l),e&&!o&&1===n.size&&n.has(l)||(o?n.add(l):n.delete(l)),n},in:(e,t,l)=>{let o=new Set
if(null!=e)for(const n of P(e))o=a.activate({id:n,value:!0,activated:new Set(o),children:t,parents:l})
return o},out:e=>Array.from(e)}
return a},zn=e=>{const a=Ln(e)
return{activate:e=>{let{activated:l,id:o,...n}=e
o=t.toRaw(o)
const r=l.has(o)?new Set([o]):new Set
return a.activate({...n,id:o,activated:r})},in:(e,t,l)=>{let o=new Set
if(null!=e){const n=P(e)
n.length&&(o=a.in(n.slice(0,1),t,l))}return o},out:(e,t,l)=>a.out(e,t,l)}},jn={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){const e=new Set
e.add(t)
let a=o.get(t)
for(;null!=a;)e.add(a),a=o.get(a)
return e}return l.delete(t),l},select:()=>null},Hn={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){let e=o.get(t)
for(l.add(t);null!=e&&e!==t;)l.add(e),e=o.get(e)
return l}return l.delete(t),l},select:()=>null},Wn={open:Hn.open,select:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(!a)return l
const n=[]
let r=o.get(t)
for(;null!=r;)n.push(r),r=o.get(r)
return new Set(n)}},Un=e=>{const a={select:a=>{let{id:l,value:o,selected:n}=a
if(l=t.toRaw(l),e&&!o){const e=Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l&&e.push(a),e}),[])
if(1===e.length&&e[0]===l)return n}return n.set(l,o?"on":"off"),n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:e=>{const t=[]
for(const[a,l]of e.entries())"on"===l&&t.push(a)
return t}}
return a},Yn=e=>{const a=Un(e)
return{select:e=>{let{selected:l,id:o,...n}=e
o=t.toRaw(o)
const r=l.has(o)?new Map([[o,l.get(o)]]):new Map
return a.select({...n,id:o,selected:r})},in:(e,t,l)=>{let o=new Map
return e?.length&&(o=a.in(e.slice(0,1),t,l)),o},out:(e,t,l)=>a.out(e,t,l)}},Gn=Symbol.for("vuetify:nested"),qn={id:t.shallowRef(),root:{register:()=>null,unregister:()=>null,parents:t.ref(new Map),children:t.ref(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:t.ref(!1),selectable:t.ref(!1),opened:t.ref(new Set),activated:t.ref(new Set),selected:t.ref(new Map),selectedValues:t.ref([])}},Kn=st({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Xn=e=>{let a=!1
const l=t.ref(new Map),o=t.ref(new Map),n=aa(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),r=t.computed((()=>{if("object"==typeof e.activeStrategy)return e.activeStrategy
if("function"==typeof e.activeStrategy)return e.activeStrategy(e.mandatory)
switch(e.activeStrategy){case"leaf":return(e=>{const a=Ln(e)
return{activate:e=>{let{id:l,activated:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.activate({id:l,activated:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"single-leaf":return(e=>{const a=zn(e)
return{activate:e=>{let{id:l,activated:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.activate({id:l,activated:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"independent":return Ln(e.mandatory)
case"single-independent":default:return zn(e.mandatory)}})),i=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
if("function"==typeof e.selectStrategy)return e.selectStrategy(e.mandatory)
switch(e.selectStrategy){case"single-leaf":return(e=>{const a=Yn(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"leaf":return(e=>{const a=Un(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"independent":return Un(e.mandatory)
case"single-independent":return Yn(e.mandatory)
case"classic":default:return(e=>{const a={select:a=>{let{id:l,value:o,selected:n,children:r,parents:i}=a
l=t.toRaw(l)
const s=new Map(n),u=[l]
for(;u.length;){const e=u.shift()
n.set(e,o?"on":"off"),r.has(e)&&u.push(...r.get(e))}let c=i.get(l)
for(;c;){const e=r.get(c),t=e.every((e=>"on"===n.get(e))),a=e.every((e=>!n.has(e)||"off"===n.get(e)))
n.set(c,t?"on":a?"off":"indeterminate"),c=i.get(c)}return e&&!o&&0===Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l&&e.push(a),e}),[]).length?s:n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:(e,t)=>{const a=[]
for(const[l,o]of e.entries())"on"!==o||t.has(l)||a.push(l)
return a}}
return a})(e.mandatory)}})),s=t.computed((()=>{if("object"==typeof e.openStrategy)return e.openStrategy
switch(e.openStrategy){case"list":return Wn
case"single":return jn
case"multiple":default:return Hn}})),u=aa(e,"activated",e.activated,(e=>r.value.in(e,l.value,o.value)),(e=>r.value.out(e,l.value,o.value))),c=aa(e,"selected",e.selected,(e=>i.value.in(e,l.value,o.value)),(e=>i.value.out(e,l.value,o.value)))
function d(e){const t=[]
let a=e
for(;null!=a;)t.unshift(a),a=o.value.get(a)
return t}t.onBeforeUnmount((()=>{a=!0}))
const v=ct("nested"),p={id:t.shallowRef(),root:{opened:n,activatable:t.toRef(e,"activatable"),selectable:t.toRef(e,"selectable"),activated:u,selected:c,selectedValues:t.computed((()=>{const e=[]
for(const[t,a]of c.value.entries())"on"===a&&e.push(t)
return e})),register:(e,t,a)=>{t&&e!==t&&o.value.set(e,t),a&&l.value.set(e,[]),null!=t&&l.value.set(t,[...l.value.get(t)||[],e])},unregister:e=>{if(a)return
l.value.delete(e)
const t=o.value.get(e)
if(t){const a=l.value.get(t)??[]
l.value.set(t,a.filter((t=>t!==e)))}o.value.delete(e),n.value.delete(e)},open:(e,t,a)=>{v.emit("click:open",{id:e,value:t,path:d(e),event:a})
const r=s.value.open({id:e,value:t,opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},openOnSelect:(e,t,a)=>{const r=s.value.select({id:e,value:t,selected:new Map(c.value),opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},select:(e,t,a)=>{v.emit("click:select",{id:e,value:t,path:d(e),event:a})
const n=i.value.select({id:e,value:t,selected:new Map(c.value),children:l.value,parents:o.value,event:a})
n&&(c.value=n),p.root.openOnSelect(e,t,a)},activate:(t,a,n)=>{if(!e.activatable)return p.root.select(t,!0,n)
v.emit("click:activate",{id:t,value:a,path:d(t),event:n})
const i=r.value.activate({id:t,value:a,activated:new Set(u.value),children:l.value,parents:o.value,event:n})
i&&(u.value=i)},children:l,parents:o}}
return t.provide(Gn,p),p.root},Zn=(e,a)=>{const l=t.inject(Gn,qn),o=Symbol(ft()),n=t.computed((()=>void 0!==e.value?e.value:o)),r={...l,id:n,open:(e,t)=>l.root.open(n.value,e,t),openOnSelect:(e,t)=>l.root.openOnSelect(n.value,e,t),isOpen:t.computed((()=>l.root.opened.value.has(n.value))),parent:t.computed((()=>l.root.parents.value.get(n.value))),activate:(e,t)=>l.root.activate(n.value,e,t),isActivated:t.computed((()=>l.root.activated.value.has(t.toRaw(n.value)))),select:(e,t)=>l.root.select(n.value,e,t),isSelected:t.computed((()=>"on"===l.root.selected.value.get(t.toRaw(n.value)))),isIndeterminate:t.computed((()=>"indeterminate"===l.root.selected.value.get(n.value))),isLeaf:t.computed((()=>!l.root.children.value.get(n.value))),isGroupActivator:l.isGroupActivator}
return!l.isGroupActivator&&l.root.register(n.value,l.id.value,a),t.onBeforeUnmount((()=>{!l.isGroupActivator&&l.root.unregister(n.value)})),a&&t.provide(Gn,r),r},Qn=St({name:"VListGroupActivator",setup(e,a){let{slots:l}=a
return(()=>{const e=t.inject(Gn,qn)
t.provide(Gn,{...e,isGroupActivator:!0})})(),()=>l.default?.()}}),Jn=st({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Tt,default:"$collapse"},expandIcon:{type:Tt,default:"$expand"},prependIcon:Tt,appendIcon:Tt,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ut(),...xa()},"VListGroup"),er=kt()({name:"VListGroup",props:Jn(),setup(e,a){let{slots:l}=a
const{isOpen:o,open:n,id:r}=Zn(t.toRef(e,"value"),!0),i=t.computed((()=>`v-list-group--id-${String(r.value)}`)),s=On(),{isBooted:u}=wl()
function c(e){e.stopPropagation(),n(!o.value,e)}const d=t.computed((()=>({onClick:c,class:"v-list-group__header",id:i.value}))),v=t.computed((()=>o.value?e.collapseIcon:e.expandIcon)),p=t.computed((()=>({VListItem:{active:o.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}})))
return Rt((()=>t.createVNode(e.tag,{class:["v-list-group",{"v-list-group--prepend":s?.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":o.value},e.class],style:e.style},{default:()=>[l.activator&&t.createVNode(Za,{defaults:p.value},{default:()=>[t.createVNode(Qn,null,{default:()=>[l.activator({props:d.value,isOpen:o.value})]})]}),t.createVNode(sl,{transition:{component:qa},disabled:!u.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[l.default?.()]),[[t.vShow,o.value]])]})]}))),{isOpen:o}}}),tr=st({opacity:[Number,String],...ut(),...xa()},"VListItemSubtitle"),ar=kt()({name:"VListItemSubtitle",props:tr(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l))),{}}}),lr=xt("v-list-item-title"),or=st({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Tt,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Tt,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Y(),onClickOnce:Y(),...pl(),...ut(),...Nl(),...Qa(),...ml(),...nl(),...so(),...xa(),...ga(),...Bl({variant:"text"})},"VListItem"),nr=kt()({name:"VListItem",directives:{Ripple:_o},props:or(),emits:{click:e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const r=io(e,l),i=t.computed((()=>void 0===e.value?r.href.value:e.value)),{activate:s,isActivated:u,select:c,isSelected:d,isIndeterminate:v,isGroupActivator:p,root:f,parent:m,openOnSelect:g}=Zn(i,!1),h=On(),y=t.computed((()=>!1!==e.active&&(e.active||r.isActive?.value||(f.activatable.value?u.value:d.value)))),b=t.computed((()=>!1!==e.link&&r.isLink.value)),V=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||r.isClickable.value||!!h&&(f.selectable.value||f.activatable.value||null!=e.value)))),w=t.computed((()=>e.rounded||e.nav)),S=t.computed((()=>e.color??e.activeColor)),k=t.computed((()=>({color:y.value?S.value??e.baseColor:e.baseColor,variant:e.variant})))
t.watch((()=>r.isActive?.value),(e=>{e&&null!=m.value&&f.open(m.value,!0),e&&g(e)}),{immediate:!0})
const{themeClasses:x}=ya(e),{borderClasses:N}=fl(e),{colorClasses:C,colorStyles:_,variantClasses:I}=Pl(k),{densityClasses:B}=Cl(e),{dimensionStyles:P}=Ja(e),{elevationClasses:A}=gl(e),{roundedClasses:R}=rl(w),T=t.computed((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),D=t.computed((()=>({isActive:y.value,select:c,isSelected:d.value,isIndeterminate:v.value})))
function E(t){n("click",t),V.value&&(r.navigate?.(t),p||(f.activatable.value?s(!u.value,t):(f.selectable.value||null!=e.value)&&c(!d.value,t)))}function F(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),E(e))}return Rt((()=>{const a=b.value?"a":e.tag,l=o.title||null!=e.title,n=o.subtitle||null!=e.subtitle,i=!(!e.appendAvatar&&!e.appendIcon),s=!(!i&&!o.append),u=!(!e.prependAvatar&&!e.prependIcon),c=!(!u&&!o.prepend)
var d,v
return h?.updateHasPrepend(c),e.activeColor&&(d="active-color",v=["color","base-color"],v=Array.isArray(v)?v.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${v.at(-1)}'`:`'${v}'`,t.warn(`[Vuetify UPGRADE] '${d}' is deprecated, use ${v} instead.`)),t.withDirectives(t.createVNode(a,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!c&&h?.hasPrepend.value,"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&y.value},x.value,N.value,C.value,B.value,A.value,T.value,R.value,I.value,e.class],style:[_.value,P.value,e.style],href:r.href.value,tabindex:V.value?h?-2:0:void 0,onClick:E,onKeydown:V.value&&!b.value&&F},{default:()=>[Il(V.value||y.value,"v-list-item"),c&&t.createVNode("div",{key:"prepend",class:"v-list-item__prepend"},[o.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[o.prepend?.(D.value)]}):t.createVNode(t.Fragment,null,[e.prependAvatar&&t.createVNode(Mo,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t.createVNode(Ul,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),t.createVNode("div",{class:"v-list-item__spacer"},null)]),t.createVNode("div",{class:"v-list-item__content","data-no-activator":""},[l&&t.createVNode(lr,{key:"title"},{default:()=>[o.title?.({title:e.title})??e.title]}),n&&t.createVNode(ar,{key:"subtitle"},{default:()=>[o.subtitle?.({subtitle:e.subtitle})??e.subtitle]}),o.default?.(D.value)]),s&&t.createVNode("div",{key:"append",class:"v-list-item__append"},[o.append?t.createVNode(Za,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[o.append?.(D.value)]}):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(Ul,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Mo,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),t.createVNode("div",{class:"v-list-item__spacer"},null)])]}),[[t.resolveDirective("ripple"),V.value&&e.ripple]])})),{activate:s,isActivated:u,isGroupActivator:p,isSelected:d,list:h,select:c}}}),rr=st({color:String,inset:Boolean,sticky:Boolean,title:String,...ut(),...xa()},"VListSubheader"),ir=kt()({name:"VListSubheader",props:rr(),setup(e,a){let{slots:l}=a
const{textColorClasses:o,textColorStyles:n}=ll(t.toRef(e,"color"))
return Rt((()=>{const a=!(!l.default&&!e.title)
return t.createVNode(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},o.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>[a&&t.createVNode("div",{class:"v-list-subheader__text"},[l.default?.()??e.title])]})})),{}}}),sr=st({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...ut(),...ga()},"VDivider"),ur=kt()({name:"VDivider",props:sr(),setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=ya(e),{textColorClasses:r,textColorStyles:i}=ll(t.toRef(e,"color")),s=t.computed((()=>{const t={}
return e.length&&(t[e.vertical?"height":"width"]=f(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=f(e.thickness)),t}))
return Rt((()=>{const a=t.createVNode("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,r.value,e.class],style:[s.value,i.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":l.role&&"separator"!==l.role?void 0:e.vertical?"vertical":"horizontal",role:`${l.role||"separator"}`},null)
return o.default?t.createVNode("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[a,t.createVNode("div",{class:"v-divider__content"},[o.default()]),a]):a})),{}}}),cr=st({items:Array,returnObject:Boolean},"VListChildren"),dr=kt()({name:"VListChildren",props:cr(),setup(e,a){let{slots:l}=a
return Mn(),()=>l.default?.()??e.items?.map((a=>{let{children:o,props:n,type:r,raw:i}=a
if("divider"===r)return l.divider?.({props:n})??t.createVNode(ur,n,null)
if("subheader"===r)return l.subheader?.({props:n})??t.createVNode(ir,n,null)
const s={subtitle:l.subtitle?e=>l.subtitle?.({...e,item:i}):void 0,prepend:l.prepend?e=>l.prepend?.({...e,item:i}):void 0,append:l.append?e=>l.append?.({...e,item:i}):void 0,title:l.title?e=>l.title?.({...e,item:i}):void 0},u=er.filterProps(n)
return o?t.createVNode(er,t.mergeProps({value:n?.value},u),{activator:a=>{let{props:o}=a
const r={...n,...o,value:e.returnObject?i:n.value}
return l.header?l.header({props:r}):t.createVNode(nr,r,s)},default:()=>t.createVNode(dr,{items:o,returnObject:e.returnObject},l)}):l.item?l.item({props:n}):t.createVNode(nr,t.mergeProps(n,{value:e.returnObject?i:n.value}),s)}))}}),vr=st({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:c}},"list-items")
function pr(e,t){const a=v(t,e.itemTitle,t),l=v(t,e.itemValue,a),o=v(t,e.itemChildren),n={title:a,value:l,...!0===e.itemProps?"object"!=typeof t||null==t||Array.isArray(t)?void 0:"children"in t?k(t,["children"]):t:v(t,e.itemProps)}
return{title:String(n.title??""),value:n.value,props:n,children:Array.isArray(o)?fr(e,o):void 0,raw:t}}function fr(e,t){const a=[]
for(const l of t)a.push(pr(e,l))
return a}function mr(e){const a=t.computed((()=>fr(e,e.items))),l=t.computed((()=>a.value.some((e=>null===e.value))))
return{items:a,transformIn:function(t){return l.value||(t=t.filter((e=>null!==e))),t.map((t=>e.returnObject&&"string"==typeof t?pr(e,t):a.value.find((a=>e.valueComparator(t,a.value)))||pr(e,t)))},transformOut:function(t){return e.returnObject?t.map((e=>{let{raw:t}=e
return t})):t.map((e=>{let{value:t}=e
return t}))}}}function gr(e,t){const a=v(t,e.itemType,"item"),l=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(t)?t:v(t,e.itemTitle),o=v(t,e.itemValue,void 0),n=v(t,e.itemChildren),r={title:l,value:o,...!0===e.itemProps?k(t,["children"]):v(t,e.itemProps)}
return{type:a,title:r.title,value:r.value,props:r,children:"item"===a&&n?hr(e,n):void 0,raw:t}}function hr(e,t){const a=[]
for(const l of t)a.push(gr(e,l))
return a}const yr=st({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":Y(),"onClick:select":Y(),"onUpdate:opened":Y(),...Kn({selectStrategy:"single-leaf",openStrategy:"list"}),...pl(),...ut(),...Nl(),...Qa(),...ml(),itemType:{type:String,default:"type"},...vr(),...nl(),...xa(),...ga(),...Bl({variant:"text"})},"VList"),br=kt()({name:"VList",props:yr(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:l}=a
const{items:o}=function(e){return{items:t.computed((()=>hr(e,e.items)))}}(e),{themeClasses:n}=ya(e),{backgroundColorClasses:r,backgroundColorStyles:i}=ol(t.toRef(e,"bgColor")),{borderClasses:s}=fl(e),{densityClasses:u}=Cl(e),{dimensionStyles:c}=Ja(e),{elevationClasses:d}=gl(e),{roundedClasses:v}=rl(e),{children:p,open:f,parents:m,select:g}=Xn(e),h=t.computed((()=>e.lines?`v-list--${e.lines}-line`:void 0)),y=t.toRef(e,"activeColor"),b=t.toRef(e,"baseColor"),V=t.toRef(e,"color")
Mn(),bt({VListGroup:{activeColor:y,baseColor:b,color:V,expandIcon:t.toRef(e,"expandIcon"),collapseIcon:t.toRef(e,"collapseIcon")},VListItem:{activeClass:t.toRef(e,"activeClass"),activeColor:y,baseColor:b,color:V,density:t.toRef(e,"density"),disabled:t.toRef(e,"disabled"),lines:t.toRef(e,"lines"),nav:t.toRef(e,"nav"),slim:t.toRef(e,"slim"),variant:t.toRef(e,"variant")}})
const w=t.shallowRef(!1),S=t.ref()
function k(e){w.value=!0}function x(e){w.value=!1}function N(e){w.value||e.relatedTarget&&S.value?.contains(e.relatedTarget)||I()}function C(e){const t=e.target
if(S.value&&!["INPUT","TEXTAREA"].includes(t.tagName)){if("ArrowDown"===e.key)I("next")
else if("ArrowUp"===e.key)I("prev")
else if("Home"===e.key)I("first")
else{if("End"!==e.key)return
I("last")}e.preventDefault()}}function _(e){w.value=!0}function I(e){if(S.value)return Z(S.value,e)}return Rt((()=>t.createVNode(e.tag,{ref:S,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},n.value,r.value,s.value,u.value,d.value,h.value,v.value,e.class],style:[i.value,c.value,e.style],tabindex:e.disabled||w.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:k,onFocusout:x,onFocus:N,onKeydown:C,onMousedown:_},{default:()=>[t.createVNode(dr,{items:o.value,returnObject:e.returnObject},l)]}))),{open:f,select:g,focus:I,children:p,parents:m}}}),Vr=xt("v-list-img"),wr=st({start:Boolean,end:Boolean,...ut(),...xa()},"VListItemAction"),Sr=kt()({name:"VListItemAction",props:wr(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},l))),{}}}),kr=st({start:Boolean,end:Boolean,...ut(),...xa()},"VListItemMedia"),xr=kt()({name:"VListItemMedia",props:kr(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},l))),{}}})
function Nr(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Cr(e,t){if("top"===e.side||"bottom"===e.side){const{side:a,align:l}=e
return Nr({x:"left"===l?0:"center"===l?t.width/2:"right"===l?t.width:l,y:"top"===a?0:"bottom"===a?t.height:a},t)}if("left"===e.side||"right"===e.side){const{side:a,align:l}=e
return Nr({x:"left"===a?0:"right"===a?t.width:a,y:"top"===l?0:"center"===l?t.height/2:"bottom"===l?t.height:l},t)}return Nr({x:t.width/2,y:t.height/2},t)}const _r={static:function(){},connected:function(e,a,l){(Array.isArray(e.target.value)||function(e){for(;e;){if("fixed"===window.getComputedStyle(e).position)return!0
e=e.offsetParent}return!1}(e.target.value))&&Object.assign(l.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0})
const{preferredAnchor:o,preferredOrigin:n}=H((()=>{const t=re(a.location,e.isRtl.value),l="overlap"===a.origin?t:"auto"===a.origin?se(t):re(a.origin,e.isRtl.value)
return t.side===l.side&&t.align===ue(l).align?{preferredAnchor:ce(t),preferredOrigin:ce(l)}:{preferredAnchor:t,preferredOrigin:l}})),[r,i,s,u]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>t.computed((()=>{const t=parseFloat(a[e])
return isNaN(t)?1/0:t})))),c=t.computed((()=>{if(Array.isArray(a.offset))return a.offset
if("string"==typeof a.offset){const e=a.offset.split(" ").map(parseFloat)
return e.length<2&&e.push(0),e}return"number"==typeof a.offset?[a.offset,0]:[0,0]}))
let d=!1
const v=new ResizeObserver((()=>{d&&p()}))
function p(){if(d=!1,requestAnimationFrame((()=>d=!0)),!e.target.value||!e.contentEl.value)return
const t=fe(e.target.value),a=function(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right")
const a=me(e)
t?a.x+=parseFloat(e.style.right||0):a.x-=parseFloat(e.style.left||0)
return a.y-=parseFloat(e.style.top||0),a}(e.contentEl.value,e.isRtl.value),v=Bt(e.contentEl.value)
v.length||(v.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(a.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),a.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)))
const p=v.reduce(((e,t)=>{const a=t.getBoundingClientRect(),l=new ve({x:t===document.documentElement?0:a.x,y:t===document.documentElement?0:a.y,width:t.clientWidth,height:t.clientHeight})
return e?new ve({x:Math.max(e.left,l.left),y:Math.max(e.top,l.top),width:Math.min(e.right,l.right)-Math.max(e.left,l.left),height:Math.min(e.bottom,l.bottom)-Math.max(e.top,l.top)}):l}),void 0)
p.x+=12,p.y+=12,p.width-=24,p.height-=24
let m={anchor:o.value,origin:n.value}
function g(e){const l=new ve(a),o=Cr(e.anchor,t),n=Cr(e.origin,l)
let{x:r,y:i}=(v=n,{x:(d=o).x-v.x,y:d.y-v.y})
var d,v
switch(e.anchor.side){case"top":i-=c.value[0]
break
case"bottom":i+=c.value[0]
break
case"left":r-=c.value[0]
break
case"right":r+=c.value[0]}switch(e.anchor.align){case"top":i-=c.value[1]
break
case"bottom":i+=c.value[1]
break
case"left":r-=c.value[1]
break
case"right":r+=c.value[1]}l.x+=r,l.y+=i,l.width=Math.min(l.width,s.value),l.height=Math.min(l.height,u.value)
return{overflows:pe(l,p),x:r,y:i}}let h=0,y=0
const b={x:0,y:0},V={x:!1,y:!1}
let w=-1
for(;;){if(w++>10){Be("Infinite loop detected in connectedLocationStrategy")
break}const{x:e,y:t,overflows:l}=g(m)
h+=e,y+=t,a.x+=e,a.y+=t
{const e=de(m.anchor),t=l.x.before||l.x.after,a=l.y.before||l.y.after
let o=!1
if(["x","y"].forEach((n=>{if("x"===n&&t&&!V.x||"y"===n&&a&&!V.y){const t={anchor:{...m.anchor},origin:{...m.origin}},a="x"===n?"y"===e?ue:se:"y"===e?se:ue
t.anchor=a(t.anchor),t.origin=a(t.origin)
const{overflows:r}=g(t);(r[n].before<=l[n].before&&r[n].after<=l[n].after||r[n].before+r[n].after<(l[n].before+l[n].after)/2)&&(m=t,o=V[n]=!0)}})),o)continue}l.x.before&&(h+=l.x.before,a.x+=l.x.before),l.x.after&&(h-=l.x.after,a.x-=l.x.after),l.y.before&&(y+=l.y.before,a.y+=l.y.before),l.y.after&&(y-=l.y.after,a.y-=l.y.after)
{const e=pe(a,p)
b.x=p.width-e.x.before-e.x.after,b.y=p.height-e.y.before-e.y.after,h+=e.x.before,a.x+=e.x.before,y+=e.y.before,a.y+=e.y.before}break}const S=de(m.anchor)
return Object.assign(l.value,{"--v-overlay-anchor-origin":`${m.anchor.side} ${m.anchor.align}`,transformOrigin:`${m.origin.side} ${m.origin.align}`,top:f(Br(y)),left:e.isRtl.value?void 0:f(Br(h)),right:e.isRtl.value?f(Br(-h)):void 0,minWidth:f("y"===S?Math.min(r.value,t.width):r.value),maxWidth:f(Pr(A(b.x,r.value===1/0?0:r.value,s.value))),maxHeight:f(Pr(A(b.y,i.value===1/0?0:i.value,u.value)))}),{available:b,contentBox:a}}return t.watch([e.target,e.contentEl],((e,t)=>{let[a,l]=e,[o,n]=t
o&&!Array.isArray(o)&&v.unobserve(o),a&&!Array.isArray(a)&&v.observe(a),n&&v.unobserve(n),l&&v.observe(l)}),{immediate:!0}),t.onScopeDispose((()=>{v.disconnect()})),t.watch((()=>[o.value,n.value,a.offset,a.minWidth,a.minHeight,a.maxWidth,a.maxHeight]),(()=>p())),t.nextTick((()=>{const e=p()
if(!e)return
const{available:t,contentBox:a}=e
a.height>t.y&&requestAnimationFrame((()=>{p(),requestAnimationFrame((()=>{p()}))}))})),{updateLocation:p}}},Ir=st({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"==typeof e||e in _r},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies")
function Br(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Pr(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ar=!0
const Rr=[]
let Tr=-1
function Dr(){cancelAnimationFrame(Tr),Tr=requestAnimationFrame((()=>{const e=Rr.shift()
e&&e(),Rr.length?Dr():Ar=!0}))}const Er={none:null,close:function(e){$r(e.targetEl.value??e.contentEl.value,(function(t){e.isActive.value=!1}))},block:function(e,a){const l=e.root.value?.offsetParent,o=[...new Set([...Bt(e.targetEl.value,a.contained?l:void 0),...Bt(e.contentEl.value,a.contained?l:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),n=window.innerWidth-document.documentElement.offsetWidth,r=(i=l||document.documentElement,Pt(i)&&i)
var i
r&&e.root.value.classList.add("v-overlay--scroll-blocked")
o.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",f(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",f(-e.scrollTop)),e!==document.documentElement&&e.style.setProperty("--v-scrollbar-offset",f(n)),e.classList.add("v-overlay-scroll-blocked")})),t.onScopeDispose((()=>{o.forEach(((e,t)=>{const a=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(e.style.getPropertyValue("--v-body-scroll-y")),o=e.style.scrollBehavior
e.style.scrollBehavior="auto",e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-a,e.scrollTop=-l,e.style.scrollBehavior=o})),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))},reposition:function(e,a,l){let o=!1,n=-1,r=-1
function i(t){var a
a=()=>{const a=performance.now()
e.updateLocation.value?.(t)
const l=performance.now()-a
o=l/(1e3/60)>2},!Ar||Rr.length?(Rr.push(a),Dr()):(Ar=!1,a(),Dr())}r=("undefined"==typeof requestIdleCallback?e=>e():requestIdleCallback)((()=>{l.run((()=>{$r(e.targetEl.value??e.contentEl.value,(e=>{o?(cancelAnimationFrame(n),n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{i(e)}))}))):i(e)}))}))})),t.onScopeDispose((()=>{"undefined"!=typeof cancelIdleCallback&&cancelIdleCallback(r),cancelAnimationFrame(n)}))}},Fr=st({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"==typeof e||e in Er}},"VOverlay-scroll-strategies")
function $r(e,a){const l=[document,...Bt(e)]
l.forEach((e=>{e.addEventListener("scroll",a,{passive:!0})})),t.onScopeDispose((()=>{l.forEach((e=>{e.removeEventListener("scroll",a)}))}))}const Mr=Symbol.for("vuetify:v-menu"),Or=st({closeDelay:[Number,String],openDelay:[Number,String]},"delay")
function Lr(e,t){let l=()=>{}
function o(o){l?.()
const n=Number(o?e.openDelay:e.closeDelay)
return new Promise((e=>{l=function(e,t){if(!a||0===e)return t(),()=>{}
const l=window.setTimeout(t,e)
return()=>window.clearTimeout(l)}(n,(()=>{t?.(o),e(o)}))}))}return{clearDelay:l,runOpenDelay:function(){return o(!0)},runCloseDelay:function(){return o(!1)}}}const zr=st({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Or()},"VOverlay-activator")
function jr(e,l){let{isActive:o,isTop:n}=l
const r=ct("useActivator"),i=t.ref()
let s=!1,u=!1,c=!0
const d=t.computed((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),v=t.computed((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!d.value)),{runOpenDelay:p,runCloseDelay:f}=Lr(e,(t=>{t!==(e.openOnHover&&s||d.value&&u)||e.openOnHover&&o.value&&!n.value||(o.value!==t&&(c=!0),o.value=t)})),m=t.ref(),g=e=>{e.stopPropagation(),i.value=e.currentTarget||e.target,o.value||(m.value=[e.clientX,e.clientY]),o.value=!o.value},h=e=>{e.sourceCapabilities?.firesTouchEvents||(s=!0,i.value=e.currentTarget||e.target,p())},y=e=>{s=!1,f()},b=e=>{!1!==ee(e.target,":focus-visible")&&(u=!0,e.stopPropagation(),i.value=e.currentTarget||e.target,p())},V=e=>{u=!1,e.stopPropagation(),f()},w=t.computed((()=>{const t={}
return v.value&&(t.onClick=g),e.openOnHover&&(t.onMouseenter=h,t.onMouseleave=y),d.value&&(t.onFocus=b,t.onBlur=V),t})),S=t.computed((()=>{const a={}
if(e.openOnHover&&(a.onMouseenter=()=>{s=!0,p()},a.onMouseleave=()=>{s=!1,f()}),d.value&&(a.onFocusin=()=>{u=!0,p()},a.onFocusout=()=>{u=!1,f()}),e.closeOnContentClick){const e=t.inject(Mr,null)
a.onClick=()=>{o.value=!1,e?.closeParents()}}return a})),k=t.computed((()=>{const t={}
return e.openOnHover&&(t.onMouseenter=()=>{c&&(s=!0,c=!1,p())},t.onMouseleave=()=>{s=!1,f()}),t}))
t.watch(n,(t=>{!t||(!e.openOnHover||s||d.value&&u)&&(!d.value||u||e.openOnHover&&s)||(o.value=!1)})),t.watch(o,(e=>{e||setTimeout((()=>{m.value=void 0}))}),{flush:"post"})
const x=le()
t.watchEffect((()=>{x.value&&t.nextTick((()=>{i.value=x.el}))}))
const N=le(),C=t.computed((()=>"cursor"===e.target&&m.value?m.value:N.value?N.el:Hr(e.target,r)||i.value)),_=t.computed((()=>Array.isArray(C.value)?void 0:C.value))
let I
return t.watch((()=>!!e.activator),(l=>{l&&a?(I=t.effectScope(),I.run((()=>{!function(e,a,l){let{activatorEl:o,activatorEvents:n}=l
function r(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
a&&ye(a,t.mergeProps(n.value,l))}function i(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
a&&be(a,t.mergeProps(n.value,l))}function s(){const t=Hr(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator,a)
return o.value=t?.nodeType===Node.ELEMENT_NODE?t:void 0,o.value}t.watch((()=>e.activator),((e,a)=>{if(a&&e!==a){const e=s(a)
e&&i(e)}e&&t.nextTick((()=>r()))}),{immediate:!0}),t.watch((()=>e.activatorProps),(()=>{r()})),t.onScopeDispose((()=>{i()}))}(e,r,{activatorEl:i,activatorEvents:w})}))):I&&I.stop()}),{flush:"post",immediate:!0}),t.onScopeDispose((()=>{I?.stop()})),{activatorEl:i,activatorRef:x,target:C,targetEl:_,targetRef:N,activatorEvents:w,contentEvents:S,scrimEvents:k}}function Hr(e,t){if(!e)return
let a
if("parent"===e){let e=t?.proxy?.$el?.parentNode
for(;e?.hasAttribute("data-no-activator");)e=e.parentNode
a=e}else a="string"==typeof e?document.querySelector(e):"$el"in e?e.$el:e
return a}function Wr(){if(!a)return t.shallowRef(!1)
const{ssr:e}=yn()
if(e){const e=t.shallowRef(!1)
return t.onMounted((()=>{e.value=!0})),e}return t.shallowRef(!0)}const Ur=st({eager:Boolean},"lazy")
function Yr(e,a){const l=t.shallowRef(!1),o=t.computed((()=>l.value||e.eager||a.value))
return t.watch(a,(()=>l.value=!0)),{isBooted:l,hasContent:o,onAfterLeave:function(){e.eager||(l.value=!1)}}}function Gr(){const e=ct("useScopeId").vnode.scopeId
return{scopeId:e?{[e]:""}:void 0}}const qr=Symbol.for("vuetify:stack"),Kr=t.reactive([])
function Xr(){return!0}function Zr(e,t,a){if(!e||!1===Qr(e,a))return!1
const l=Nt(t)
if("undefined"!=typeof ShadowRoot&&l instanceof ShadowRoot&&l.host===e.target)return!1
const o=("object"==typeof a.value&&a.value.include||(()=>[]))()
return o.push(t),!o.some((t=>t?.contains(e.target)))}function Qr(e,t){return("object"==typeof t.value&&t.value.closeConditional||Xr)(e)}function Jr(e,t){const a=Nt(e)
t(document),"undefined"!=typeof ShadowRoot&&a instanceof ShadowRoot&&t(a)}const ei={mounted(e,t){const a=a=>function(e,t,a){const l="function"==typeof a.value?a.value:a.value.handler
t._clickOutside.lastMousedownWasOutside&&Zr(e,t,a)&&setTimeout((()=>{Qr(e,a)&&l&&l(e)}),0)}(a,e,t),l=a=>{e._clickOutside.lastMousedownWasOutside=Zr(a,e,t)}
Jr(e,(e=>{e.addEventListener("click",a,!0),e.addEventListener("mousedown",l,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:a,onMousedown:l}},unmounted(e,t){e._clickOutside&&(Jr(e,(a=>{if(!a||!e._clickOutside?.[t.instance.$.uid])return
const{onClick:l,onMousedown:o}=e._clickOutside[t.instance.$.uid]
a.removeEventListener("click",l,!0),a.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[t.instance.$.uid])}}
function ti(e){const{modelValue:a,color:l,...o}=e
return t.createVNode(t.Transition,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&t.createVNode("div",t.mergeProps({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ai=st({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zr(),...ut(),...Qa(),...Ur(),...Ir(),...Fr(),...ga(),...il()},"VOverlay"),li=kt()({name:"VOverlay",directives:{ClickOutside:ei},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ai()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,l){let{slots:o,attrs:n,emit:r}=l
const i=aa(e,"modelValue"),s=t.computed({get:()=>i.value,set:t=>{t&&e.disabled||(i.value=t)}}),{themeClasses:u}=ya(e),{rtlClasses:c,isRtl:d}=fa(),{hasContent:v,onAfterLeave:p}=Yr(e,s),m=ol(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),{globalTop:g,localTop:h,stackStyles:y}=function(e,a,l){const o=ct("useStack"),n=!l,r=t.inject(qr,void 0),i=t.reactive({activeChildren:new Set})
t.provide(qr,i)
const s=t.shallowRef(+a.value)
ta(e,(()=>{const e=Kr.at(-1)?.[1]
s.value=e?e+10:+a.value,n&&Kr.push([o.uid,s.value]),r?.activeChildren.add(o.uid),t.onScopeDispose((()=>{if(n){const e=t.toRaw(Kr).findIndex((e=>e[0]===o.uid))
Kr.splice(e,1)}r?.activeChildren.delete(o.uid)}))}))
const u=t.shallowRef(!0)
n&&t.watchEffect((()=>{const e=Kr.at(-1)?.[0]===o.uid
setTimeout((()=>u.value=e))}))
const c=t.computed((()=>!i.activeChildren.size))
return{globalTop:t.readonly(u),localTop:c,stackStyles:t.computed((()=>({zIndex:s.value})))}}(s,t.toRef(e,"zIndex"),e._disableGlobalStack),{activatorEl:b,activatorRef:V,target:w,targetEl:S,targetRef:k,activatorEvents:x,contentEvents:N,scrimEvents:C}=jr(e,{isActive:s,isTop:h}),_=t.computed((()=>b?.value?.getRootNode())),{teleportTarget:I}=function(e){return{teleportTarget:t.computed((()=>{const l=e.value
if(!0===l||!a)return
const o=!1===l?document.body:"string"==typeof l?document.querySelector(l):l
if(null==o)return void t.warn(`Unable to locate target ${l}`)
let n=o.querySelector(":scope > .v-overlay-container")
return n||(n=document.createElement("div"),n.className="v-overlay-container",o.appendChild(n)),n}))}}(t.computed((()=>!!(e.attach||e.contained||_.value instanceof ShadowRoot)&&(_.value??!0)))),{dimensionStyles:B}=Ja(e),P=Wr(),{scopeId:A}=Gr()
t.watch((()=>e.disabled),(e=>{e&&(s.value=!1)}))
const R=t.ref(),T=t.ref(),D=t.ref(),{contentStyles:E,updateLocation:F}=function(e,l){const o=t.ref({}),n=t.ref()
function r(e){n.value?.(e)}return a&&ta((()=>!(!l.isActive.value||!e.locationStrategy)),(a=>{t.watch((()=>e.locationStrategy),a),t.onScopeDispose((()=>{window.removeEventListener("resize",r),n.value=void 0})),window.addEventListener("resize",r,{passive:!0}),"function"==typeof e.locationStrategy?n.value=e.locationStrategy(l,e,o)?.updateLocation:n.value=_r[e.locationStrategy](l,e,o)?.updateLocation})),{contentStyles:o,updateLocation:n}}(e,{isRtl:d,contentEl:D,target:w,isActive:s})
function $(t){r("click:outside",t),e.persistent?j():s.value=!1}function M(t){return s.value&&g.value&&(!e.scrim||t.target===T.value)}function O(t){"Escape"===t.key&&g.value&&(e.persistent?j():(s.value=!1,D.value?.contains(document.activeElement)&&b.value?.focus()))}!function(e,l){if(!a)return
let o
t.watchEffect((async()=>{o?.stop(),l.isActive.value&&e.scrollStrategy&&(o=t.effectScope(),await new Promise((e=>setTimeout(e))),o.active&&o.run((()=>{"function"==typeof e.scrollStrategy?e.scrollStrategy(l,e,o):Er[e.scrollStrategy]?.(l,e,o)})))})),t.onScopeDispose((()=>{o?.stop()}))}(e,{root:R,contentEl:D,targetEl:S,isActive:s,updateLocation:F}),a&&t.watch(s,(e=>{e?window.addEventListener("keydown",O):window.removeEventListener("keydown",O)}),{immediate:!0}),t.onBeforeUnmount((()=>{a&&window.removeEventListener("keydown",O)}))
const L=ro()
ta((()=>e.closeOnBack),(()=>{!function(e,l){let o,n,r=!1
function i(e){e.state?.replaced||(r=!0,setTimeout((()=>r=!1)))}a&&(t.nextTick((()=>{window.addEventListener("popstate",i),o=e?.beforeEach(((e,t,a)=>{uo?r?l(a):a():setTimeout((()=>r?l(a):a())),uo=!0})),n=e?.afterEach((()=>{uo=!1}))})),t.onScopeDispose((()=>{window.removeEventListener("popstate",i),o?.(),n?.()})))}(L,(t=>{g.value&&s.value?(t(!1),e.persistent?j():s.value=!1):t()}))}))
const z=t.ref()
function j(){e.noClickAnimation||D.value&&ge(D.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ct})}function H(){r("afterEnter")}function W(){p(),r("afterLeave")}return t.watch((()=>s.value&&(e.absolute||e.contained)&&null==I.value),(e=>{if(e){const e=It(R.value)
e&&e!==document.scrollingElement&&(z.value=e.scrollTop)}})),Rt((()=>t.createVNode(t.Fragment,null,[o.activator?.({isActive:s.value,targetRef:k,props:t.mergeProps({ref:V},x.value,e.activatorProps)}),P.value&&v.value&&t.createVNode(t.Teleport,{disabled:!I.value,to:I.value},{default:()=>[t.createVNode("div",t.mergeProps({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[y.value,{"--v-overlay-opacity":e.opacity,top:f(z.value)},e.style],ref:R},A,n),[t.createVNode(ti,t.mergeProps({color:m,modelValue:s.value&&!!e.scrim,ref:T},C.value),null),t.createVNode(sl,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterEnter:H,onAfterLeave:W},{default:()=>[t.withDirectives(t.createVNode("div",t.mergeProps({ref:D,class:["v-overlay__content",e.contentClass],style:[B.value,E.value]},N.value,e.contentProps),[o.default?.({isActive:s})]),[[t.vShow,s.value],[t.resolveDirective("click-outside"),{handler:$,closeConditional:M,include:()=>[b.value]}]])]})])]})]))),{activatorEl:b,scrimEl:T,target:w,animateClick:j,contentEl:D,globalTop:g,localTop:h,updateLocation:F}}}),oi=Symbol("Forwarded refs")
function ni(e,t){let a=e
for(;a;){const e=Reflect.getOwnPropertyDescriptor(a,t)
if(e)return e
a=Object.getPrototypeOf(a)}}function ri(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
return e[oi]=a,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t)
if("symbol"!=typeof t&&!t.startsWith("$")&&!t.startsWith("__"))for(const e of a)if(e.value&&Reflect.has(e.value,t)){const a=Reflect.get(e.value,t)
return"function"==typeof a?a.bind(e.value):a}},has(e,t){if(Reflect.has(e,t))return!0
if("symbol"==typeof t||t.startsWith("$")||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return!0
return!1},set(e,t,l){if(Reflect.has(e,t))return Reflect.set(e,t,l)
if("symbol"==typeof t||t.startsWith("$")||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return Reflect.set(e.value,t,l)
return!1},getOwnPropertyDescriptor(e,t){const l=Reflect.getOwnPropertyDescriptor(e,t)
if(l)return l
if("symbol"!=typeof t&&!t.startsWith("$")&&!t.startsWith("__")){for(const e of a){if(!e.value)continue
const a=ni(e.value,t)??("_"in e.value?ni(e.value._?.setupState,t):void 0)
if(a)return a}for(const e of a){const a=e.value&&e.value[oi]
if(!a)continue
const l=a.slice()
for(;l.length;){const e=l.shift(),a=ni(e.value,t)
if(a)return a
const o=e.value&&e.value[oi]
o&&l.push(...o)}}}}})}const ii=st({id:String,...k(ai({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ra}}),["absolute"])},"VMenu"),si=kt()({name:"VMenu",props:ii(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),{scopeId:n}=Gr(),r=ft(),i=t.computed((()=>e.id||`v-menu-${r}`)),s=t.ref(),u=t.inject(Mr,null),c=t.shallowRef(0)
async function d(e){const a=e.relatedTarget,l=e.target
if(await t.nextTick(),o.value&&a!==l&&s.value?.contentEl&&s.value?.globalTop&&![document,s.value.contentEl].includes(l)&&!s.value.contentEl.contains(l)){K(s.value.contentEl)[0]?.focus()}}function v(e){u?.closeParents(e)}function p(t){if(!e.disabled)if("Tab"===t.key||"Enter"===t.key&&!e.closeOnContentClick){if("Enter"===t.key&&(t.target instanceof HTMLTextAreaElement||t.target instanceof HTMLInputElement&&t.target.closest("form")))return
"Enter"===t.key&&t.preventDefault()
X(K(s.value?.contentEl,!1),t.shiftKey?"prev":"next",(e=>e.tabIndex>=0))||(o.value=!1,s.value?.activatorEl?.focus())}else["Enter"," "].includes(t.key)&&e.closeOnContentClick&&(o.value=!1,u?.closeParents())}function f(t){if(e.disabled)return
const a=s.value?.contentEl
a&&o.value?"ArrowDown"===t.key?(t.preventDefault(),Z(a,"next")):"ArrowUp"===t.key&&(t.preventDefault(),Z(a,"prev")):["ArrowDown","ArrowUp"].includes(t.key)&&(o.value=!0,t.preventDefault(),setTimeout((()=>setTimeout((()=>f(t))))))}t.provide(Mr,{register(){++c.value},unregister(){--c.value},closeParents(t){setTimeout((()=>{c.value||e.persistent||null!=t&&(!t||function(e,t){const a=e.clientX,l=e.clientY,o=t.getBoundingClientRect(),n=o.left,r=o.top,i=o.right,s=o.bottom
return a>=n&&a<=i&&l>=r&&l<=s}(t,s.value.contentEl))||(o.value=!1,u?.closeParents())}),40)}}),t.watch(o,(e=>{e?(u?.register(),document.addEventListener("focusin",d,{once:!0})):(u?.unregister(),document.removeEventListener("focusin",d))}))
const m=t.computed((()=>t.mergeProps({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value,onKeydown:f},e.activatorProps)))
return Rt((()=>{const a=li.filterProps(e)
return t.createVNode(li,t.mergeProps({ref:s,id:i.value,class:["v-menu",e.class],style:e.style},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,absolute:!0,activatorProps:m.value,"onClick:outside":v,onKeydown:p},n),{activator:l.activator,default:function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o]
return t.createVNode(Za,{root:"VMenu"},{default:()=>[l.default?.(...a)]})}})})),ri({id:i,ΨopenChildren:c},s)}}),ui=st({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ut(),...il({transition:{component:Ya}})},"VCounter"),ci=kt()({name:"VCounter",functional:!0,props:ui(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>e.max?`${e.value} / ${e.max}`:String(e.value)))
return Rt((()=>t.createVNode(sl,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[l.default?l.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[t.vShow,e.active]])]}))),{}}}),di=st({floating:Boolean,...ut()},"VFieldLabel"),vi=kt()({name:"VFieldLabel",props:di(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(Lo,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l))),{}}}),pi=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],fi=st({appendInnerIcon:Tt,bgColor:String,clearable:Boolean,clearIcon:{type:Tt,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Tt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>pi.includes(e)},"onClick:clear":Y(),"onClick:appendInner":Y(),"onClick:prependInner":Y(),...ut(),...eo(),...nl(),...ga()},"VField"),mi=kt()({name:"VField",inheritAttrs:!1,props:{id:String,...Qo(),...fi()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{themeClasses:r}=ya(e),{loaderClasses:i}=to(e),{focusClasses:s,isFocused:u,focus:c,blur:d}=Jo(e),{InputIcon:v}=Ko(e),{roundedClasses:p}=rl(e),{rtlClasses:m}=fa(),g=t.computed((()=>e.dirty||e.active)),h=t.computed((()=>!(e.singleLine||!e.label&&!n.label))),y=ft(),b=t.computed((()=>e.id||`input-${y}`)),V=t.computed((()=>`${b.value}-messages`)),w=t.ref(),S=t.ref(),k=t.ref(),x=t.computed((()=>["plain","underlined"].includes(e.variant))),{backgroundColorClasses:N,backgroundColorStyles:C}=ol(t.toRef(e,"bgColor")),{textColorClasses:_,textColorStyles:I}=ll(t.computed((()=>e.error||e.disabled?void 0:g.value&&u.value?e.color:e.baseColor)))
t.watch(g,(e=>{if(h.value){const t=w.value.$el,a=S.value.$el
requestAnimationFrame((()=>{const l=me(t),o=a.getBoundingClientRect(),n=o.x-l.x,r=o.y-l.y-(l.height/2-o.height/2),i=o.width/.75,s=Math.abs(i-l.width)>1?{maxWidth:f(i)}:void 0,u=getComputedStyle(t),c=getComputedStyle(a),d=1e3*parseFloat(u.transitionDuration)||150,v=parseFloat(c.getPropertyValue("--v-field-label-scale")),p=c.getPropertyValue("color")
t.style.visibility="visible",a.style.visibility="hidden",ge(t,{transform:`translate(${n}px, ${r}px) scale(${v})`,color:p,...s},{duration:d,easing:Ct,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),a.style.removeProperty("visibility")}))}))}}),{flush:"post"})
const B=t.computed((()=>({isActive:g,isFocused:u,controlRef:k,blur:d,focus:c})))
function P(e){e.target!==document.activeElement&&e.preventDefault()}function A(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),t.stopPropagation(),e["onClick:clear"]?.(new MouseEvent("click")))}return Rt((()=>{const a="outlined"===e.variant,o=!(!n["prepend-inner"]&&!e.prependInnerIcon),u=!(!e.clearable&&!n.clear),f=!!(n["append-inner"]||e.appendInnerIcon||u),y=()=>n.label?n.label({...B.value,label:e.label,props:{for:b.value}}):e.label
return t.createVNode("div",t.mergeProps({class:["v-field",{"v-field--active":g.value,"v-field--appended":f,"v-field--center-affix":e.centerAffix??!x.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!y(),[`v-field--variant-${e.variant}`]:!0},r.value,N.value,s.value,i.value,p.value,m.value,e.class],style:[C.value,e.style],onClick:P},l),[t.createVNode("div",{class:"v-field__overlay"},null),t.createVNode(ao,{name:"v-field",active:!!e.loading,color:e.error?"error":"string"==typeof e.loading?e.loading:e.color},{default:n.loader}),o&&t.createVNode("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t.createVNode(v,{key:"prepend-icon",name:"prependInner"},null),n["prepend-inner"]?.(B.value)]),t.createVNode("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&h.value&&t.createVNode(vi,{key:"floating-label",ref:S,class:[_.value],floating:!0,for:b.value,style:I.value},{default:()=>[y()]}),t.createVNode(vi,{ref:w,for:b.value},{default:()=>[y()]}),n.default?.({...B.value,props:{id:b.value,class:"v-field__input","aria-describedby":V.value},focus:c,blur:d})]),u&&t.createVNode(Ka,{key:"clear"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-field__clearable",onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},[t.createVNode(Za,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[n.clear?n.clear({...B.value,props:{onKeydown:A,onFocus:c,onBlur:d,onClick:e["onClick:clear"]}}):t.createVNode(v,{name:"clear",onKeydown:A,onFocus:c,onBlur:d},null)]})]),[[t.vShow,e.dirty]])]}),f&&t.createVNode("div",{key:"append",class:"v-field__append-inner"},[n["append-inner"]?.(B.value),e.appendInnerIcon&&t.createVNode(v,{key:"append-icon",name:"appendInner"},null)]),t.createVNode("div",{class:["v-field__outline",_.value],style:I.value},[a&&t.createVNode(t.Fragment,null,[t.createVNode("div",{class:"v-field__outline__start"},null),h.value&&t.createVNode("div",{class:"v-field__outline__notch"},[t.createVNode(vi,{ref:S,floating:!0,for:b.value},{default:()=>[y()]})]),t.createVNode("div",{class:"v-field__outline__end"},null)]),x.value&&h.value&&t.createVNode(vi,{ref:S,floating:!0,for:b.value},{default:()=>[y()]})])])})),{controlRef:k}}})
function gi(e){return w(e,Object.keys(mi.props).filter((e=>!C(e)&&"class"!==e&&"style"!==e)))}const hi=["color","file","time","date","datetime-local","week","month"],yi=st({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...nn(),...fi()},"VTextField"),bi=kt()({name:"VTextField",directives:{Intersect:cl},inheritAttrs:!1,props:yi(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=aa(e,"modelValue"),{isFocused:i,focus:s,blur:u}=Jo(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):"number"==typeof e.counterValue?e.counterValue:(r.value??"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter)),v=t.computed((()=>["plain","underlined"].includes(e.variant)))
function p(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const f=t.ref(),m=t.ref(),g=t.ref(),h=t.computed((()=>hi.includes(e.type)||e.persistentPlaceholder||i.value||e.active))
function y(){g.value!==document.activeElement&&g.value?.focus(),i.value||s()}function b(e){o("mousedown:control",e),e.target!==g.value&&(y(),e.preventDefault())}function V(e){y(),o("click:control",e)}function w(a){a.stopPropagation(),y(),t.nextTick((()=>{r.value=null,q(e["onClick:clear"],a)}))}function S(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}return Rt((()=>{const a=!!(n.counter||!1!==e.counter&&null!=e.counter),o=!(!a&&!n.details),[s,k]=B(l),{modelValue:x,...N}=rn.filterProps(e),C=gi(e)
return t.createVNode(rn,t.mergeProps({ref:f,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":v.value},e.class],style:e.style},s,N,{centerAffix:!v.value,focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(mi,t.mergeProps({ref:m,onMousedown:b,onClick:V,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},C,{id:l.value,active:h.value||s.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...i}}=a
const s=t.withDirectives(t.createVNode("input",t.mergeProps({ref:g,value:r.value,onInput:S,autofocus:e.autofocus,readonly:c.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:y,onBlur:u},i,k),null),[[t.resolveDirective("intersect"),{handler:p},null,{once:!0}]])
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[t.createVNode("span",{class:"v-text-field__prefix__text"},[e.prefix])]),n.default?t.createVNode("div",{class:l,"data-no-activator":""},[n.default(),s]):t.cloneVNode(s,{class:l}),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[t.createVNode("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(ci,{active:e.persistentCounter||i.value,value:c.value,max:d.value,disabled:e.disabled},n.counter)])]):void 0})})),ri({},f,m,g)}}),Vi=st({renderless:Boolean,...ut()},"VVirtualScrollItem"),wi=kt()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Vi(),emits:{"update:height":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{resizeRef:r,contentRect:i}=Gt(void 0,"border")
t.watch((()=>i.value?.height),(e=>{null!=e&&o("update:height",e)})),Rt((()=>e.renderless?t.createVNode(t.Fragment,null,[n.default?.({itemRef:r})]):t.createVNode("div",t.mergeProps({ref:r,class:["v-virtual-scroll__item",e.class],style:e.style},l),[n.default?.()])))}}),Si=st({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual")
function ki(e,l){const o=yn(),n=t.shallowRef(0)
t.watchEffect((()=>{n.value=parseFloat(e.itemHeight||0)}))
const r=t.shallowRef(0),i=t.shallowRef(Math.ceil((parseInt(e.height)||o.height.value)/(n.value||16))||1),s=t.shallowRef(0),u=t.shallowRef(0),c=t.ref(),d=t.ref()
let v=0
const{resizeRef:p,contentRect:f}=Gt()
t.watchEffect((()=>{p.value=c.value}))
const m=t.computed((()=>c.value===document.documentElement?o.height.value:f.value?.height||parseInt(e.height)||0)),g=t.computed((()=>!!(c.value&&d.value&&m.value&&n.value)))
let h=Array.from({length:l.value.length}),y=Array.from({length:l.value.length})
const b=t.shallowRef(0)
let V=-1
function w(e){return h[e]||n.value}const S=function(e,a){let l=0
const o=function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r]
clearTimeout(l),l=setTimeout((()=>e(...n)),t.unref(a))}
return o.clear=()=>{clearTimeout(l)},o.immediate=e,o}((()=>{const e=performance.now()
y[0]=0
const t=l.value.length
for(let e=1;e<=t-1;e++)y[e]=(y[e-1]||0)+w(e-1)
b.value=Math.max(b.value,performance.now()-e)}),b),k=t.watch(g,(e=>{e&&(k(),v=d.value.offsetTop,S.immediate(),P(),~V&&t.nextTick((()=>{a&&window.requestAnimationFrame((()=>{T(V),V=-1}))})))}))
function x(e){return e=A(e,0,l.value.length-1),y[e]||0}function N(e){return function(e,t){let a=e.length-1,l=0,o=0,n=null,r=-1
if(e[a]<t)return a
for(;l<=a;)if(o=l+a>>1,n=e[o],n>t)a=o-1
else{if(!(n<t))return n===t?o:l
r=o,l=o+1}return r}(y,e)}t.onScopeDispose((()=>{S.clear()}))
let C=0,_=0,I=0
t.watch(m,((e,t)=>{t&&(P(),e<t&&requestAnimationFrame((()=>{_=0,P()})))}))
let B=-1
function P(){cancelAnimationFrame(B),B=requestAnimationFrame(R)}function R(){if(!c.value||!m.value)return
const e=C-v,t=Math.sign(_),a=A(N(Math.max(0,e-100)),0,l.value.length),o=A(N(e+m.value+100)+1,a+1,l.value.length)
if((-1!==t||a<r.value)&&(1!==t||o>i.value)){const e=x(r.value)-x(a),t=x(o)-x(i.value)
Math.max(e,t)>100?(r.value=a,i.value=o):(a<=0&&(r.value=a),o>=l.value.length&&(i.value=o))}s.value=x(r.value),u.value=x(l.value.length)-x(i.value)}function T(e){const t=x(e)
!c.value||e&&!t?V=e:c.value.scrollTop=t}const D=t.computed((()=>l.value.slice(r.value,i.value).map(((e,t)=>({raw:e,index:t+r.value})))))
return t.watch(l,(()=>{h=Array.from({length:l.value.length}),y=Array.from({length:l.value.length}),S.immediate(),P()}),{deep:!0}),{containerRef:c,markerRef:d,computedItems:D,paddingTop:s,paddingBottom:u,scrollToIndex:T,handleScroll:function(){if(!c.value||!d.value)return
const e=c.value.scrollTop,t=performance.now()
t-I>500?(_=Math.sign(e-C),v=d.value.offsetTop):_=e-C,C=e,I=t,P()},handleScrollend:function(){c.value&&d.value&&(_=0,I=0,P())},handleItemResize:function(e,t){const a=h[e],l=n.value
n.value=l?Math.min(n.value,t):t,a===t&&l===n.value||(h[e]=t,S())}}}const xi=st({items:{type:Array,default:()=>[]},renderless:Boolean,...Si(),...ut(),...Qa()},"VVirtualScroll"),Ni=kt()({name:"VVirtualScroll",props:xi(),setup(e,a){let{slots:l}=a
const o=ct("VVirtualScroll"),{dimensionStyles:n}=Ja(e),{containerRef:r,markerRef:i,handleScroll:s,handleScrollend:u,handleItemResize:c,scrollToIndex:d,paddingTop:v,paddingBottom:p,computedItems:m}=ki(e,t.toRef(e,"items"))
return ta((()=>e.renderless),(()=>{function e(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=e?"addEventListener":"removeEventListener"
r.value===document.documentElement?(document[t]("scroll",s,{passive:!0}),document[t]("scrollend",u)):(r.value?.[t]("scroll",s,{passive:!0}),r.value?.[t]("scrollend",u))}t.onMounted((()=>{r.value=It(o.vnode.el,!0),e(!0)})),t.onScopeDispose(e)})),Rt((()=>{const a=m.value.map((a=>t.createVNode(wi,{key:a.index,renderless:e.renderless,"onUpdate:height":e=>c(a.index,e)},{default:e=>l.default?.({item:a.raw,index:a.index,...e})})))
return e.renderless?t.createVNode(t.Fragment,null,[t.createVNode("div",{ref:i,class:"v-virtual-scroll__spacer",style:{paddingTop:f(v.value)}},null),a,t.createVNode("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:f(p.value)}},null)]):t.createVNode("div",{ref:r,class:["v-virtual-scroll",e.class],onScrollPassive:s,onScrollend:u,style:[n.value,e.style]},[t.createVNode("div",{ref:i,class:"v-virtual-scroll__container",style:{paddingTop:f(v.value),paddingBottom:f(p.value)}},[a])])})),{scrollToIndex:d}}})
function Ci(e,a){const l=t.shallowRef(!1)
let o
return{onListScroll:function(e){cancelAnimationFrame(o),l.value=!0,o=requestAnimationFrame((()=>{o=requestAnimationFrame((()=>{l.value=!1}))}))},onListKeydown:async function(o){if("Tab"===o.key&&a.value?.focus(),!["PageDown","PageUp","Home","End"].includes(o.key))return
const n=e.value?.$el
if(!n)return
"Home"!==o.key&&"End"!==o.key||n.scrollTo({top:"Home"===o.key?0:n.scrollHeight,behavior:"smooth"}),await async function(){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>{if(l.value){const a=t.watch(l,(()=>{a(),e()}))}else e()}))}()
const r=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)")
if("PageDown"===o.key||"Home"===o.key){const e=n.getBoundingClientRect().top
for(const t of r)if(t.getBoundingClientRect().top>=e){t.focus()
break}}else{const e=n.getBoundingClientRect().bottom
for(const t of[...r].reverse())if(t.getBoundingClientRect().bottom<=e){t.focus()
break}}}}}const _i=st({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Tt,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...vr({itemChildren:!1})},"Select"),Ii=st({..._i(),...k(yi({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...il({transition:{component:Ra}})},"VSelect"),Bi=kt()({name:"VSelect",props:Ii(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:o}=l
const{t:n}=va(),r=t.ref(),i=t.ref(),s=t.ref(),u=aa(e,"menu"),c=t.computed({get:()=>u.value,set:e=>{u.value&&!e&&i.value?.ΨopenChildren||(u.value=e)}}),{items:d,transformIn:v,transformOut:p}=mr(e),f=aa(e,"modelValue",[],(e=>v(null===e?[null]:P(e))),(t=>{const a=p(t)
return e.multiple?a:a[0]??null})),m=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(f.value):"number"==typeof e.counterValue?e.counterValue:f.value.length)),g=an(),h=t.computed((()=>f.value.map((e=>e.value)))),y=t.shallowRef(!1),b=t.computed((()=>c.value?e.closeText:e.openText))
let V,w=""
const S=t.computed((()=>e.hideSelected?d.value.filter((t=>!f.value.some((a=>e.valueComparator(a,t))))):d.value)),k=t.computed((()=>e.hideNoData&&!S.value.length||e.readonly||g?.isReadonly.value)),x=t.computed((()=>({...e.menuProps,activatorProps:{...e.menuProps?.activatorProps||{},"aria-haspopup":"listbox"}}))),N=t.ref(),{onListScroll:C,onListKeydown:_}=Ci(N,r)
function I(t){e.openOnClear&&(c.value=!0)}function B(){k.value||(c.value=!c.value)}function A(t){if(!t.key||e.readonly||g?.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(c.value=!0),["Escape","Tab"].includes(t.key)&&(c.value=!1),"Home"===t.key?N.value?.focus("first"):"End"===t.key&&N.value?.focus("last")
if(e.multiple||!function(e){const t=1===e.key.length,a=!e.ctrlKey&&!e.metaKey&&!e.altKey
return t&&a}(t))return
const l=performance.now()
l-V>1e3&&(w=""),w+=t.key.toLowerCase(),V=l
const o=d.value.find((e=>e.title.toLowerCase().startsWith(w)))
if(void 0!==o){f.value=[o]
const e=S.value.indexOf(o)
a&&window.requestAnimationFrame((()=>{e>=0&&s.value?.scrollToIndex(e)}))}}function R(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(!a.props.disabled)if(e.multiple){const t=f.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...f.value,a]:[...f.value]
e.splice(t,1),f.value=e}else o&&(f.value=[...f.value,a])}else{const e=!1!==l
f.value=e?[a]:[],t.nextTick((()=>{c.value=!1}))}}function T(e){N.value?.$el.contains(e.relatedTarget)||(c.value=!1)}function D(){y.value&&r.value?.focus()}function E(e){y.value=!0}function F(e){if(null==e)f.value=[]
else if(ee(r.value,":autofill")||ee(r.value,":-webkit-autofill")){const t=d.value.find((t=>t.title===e))
t&&R(t)}else r.value&&(r.value.value="")}return t.watch(c,(()=>{if(!e.hideSelected&&c.value&&f.value.length){const t=S.value.findIndex((t=>f.value.some((a=>e.valueComparator(a.value,t.value)))))
a&&window.requestAnimationFrame((()=>{t>=0&&s.value?.scrollToIndex(t)}))}})),t.watch((()=>e.items),((e,t)=>{c.value||y.value&&!t.length&&e.length&&(c.value=!0)})),Rt((()=>{const a=!(!e.chips&&!o.chip),l=!!(!e.hideNoData||S.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),u=f.value.length>0,d=bi.filterProps(e),v=u||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder
return t.createVNode(bi,t.mergeProps({ref:r},d,{modelValue:f.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":F,focused:y.value,"onUpdate:focused":e=>y.value=e,validationValue:f.externalValue,counterValue:m.value,dirty:u,class:["v-select",{"v-select--active-menu":c.value,"v-select--chips":!!e.chips,["v-select--"+(e.multiple?"multiple":"single")]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:v,"onClick:clear":I,"onMousedown:control":B,onBlur:T,onKeydown:A,"aria-label":n(b.value),title:n(b.value)}),{...o,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(si,t.mergeProps({ref:i,modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,activator:"parent",contentClass:"v-select__content",disabled:k.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:D},x.value),{default:()=>[l&&t.createVNode(br,t.mergeProps({ref:N,selected:h.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:_,onFocusin:E,onScrollPassive:C,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>[o["prepend-item"]?.(),!S.value.length&&!e.hideNoData&&(o["no-data"]?.()??t.createVNode(nr,{title:n(e.noDataText)},null)),t.createVNode(Ni,{ref:s,renderless:!0,items:S.value},{default:a=>{let{item:l,index:n,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:n,onClick:()=>R(l,null)})
return o.item?.({item:l,index:n,props:i})??t.createVNode(nr,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(qo,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependAvatar&&t.createVNode(Mo,{image:l.props.prependAvatar},null),l.props.prependIcon&&t.createVNode(Ul,{icon:l.props.prependIcon},null)])}})}}),o["append-item"]?.()]})]}),f.value.map(((l,n)=>{function r(e){e.stopPropagation(),e.preventDefault(),R(l,!1)}const i={"onClick:close":r,onKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),r(e))},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},s=a?!!o.chip:!!o.selection,u=s?te(a?o.chip({item:l,index:n,props:i}):o.selection({item:l,index:n})):void 0
if(!s||u)return t.createVNode("div",{key:l.value,class:"v-select__selection"},[a?o.chip?t.createVNode(Za,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:l.title}}},{default:()=>[u]}):t.createVNode(Fn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:l.title,disabled:l.props.disabled},i),null):u??t.createVNode("span",{class:"v-select__selection-text"},[l.title,e.multiple&&n<f.value.length-1&&t.createVNode("span",{class:"v-select__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n]
return t.createVNode(t.Fragment,null,[o["append-inner"]?.(...l),e.menuIcon?t.createVNode(Ul,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})})),ri({isFocused:y,menu:c,select:R},r)}}),Pi=(e,t,a)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),Ai=st({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter")
function Ri(e,a,l,o){const n=t.ref([]),r=t.ref(new Map),i=t.computed((()=>o?.transform?t.unref(a).map((e=>[e,o.transform(e)])):t.unref(a)))
return t.watchEffect((()=>{const s="function"==typeof l?l():t.unref(l),u="string"!=typeof s&&"number"!=typeof s?"":String(s),c=function(e,t,a){const l=[],o=a?.default??Pi,n=!!a?.filterKeys&&P(a.filterKeys),r=Object.keys(a?.customKeyFilter??{}).length
if(!e?.length)return l
e:for(let i=0;i<e.length;i++){const[s,u=s]=P(e[i]),c={},d={}
let p=-1
if((t||r>0)&&!a?.noFilter){if("object"==typeof s){const e=n||Object.keys(u)
for(const l of e){const e=v(u,l),n=a?.customKeyFilter?.[l]
if(p=n?n(e,t,s):o(e,t,s),-1!==p&&!1!==p)n?c[l]=p:d[l]=p
else if("every"===a?.filterMode)continue e}}else p=o(s,t,s),-1!==p&&!1!==p&&(d.title=p)
const e=Object.keys(d).length,l=Object.keys(c).length
if(!e&&!l)continue
if("union"===a?.filterMode&&l!==r&&!e)continue
if("intersection"===a?.filterMode&&(l!==r||!e))continue}l.push({index:i,matches:{...d,...c}})}return l}(i.value,u,{customKeyFilter:{...e.customKeyFilter,...t.unref(o?.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),d=t.unref(a),p=[],f=new Map
c.forEach((e=>{let{index:t,matches:a}=e
const l=d[t]
p.push(l),f.set(l.value,a)})),n.value=p,r.value=f})),{filteredItems:n,filteredMatches:r,getMatches:function(e){return r.value.get(e.value)}}}const Ti=st({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Ai({filterKeys:["title"]}),..._i(),...k(yi({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...il({transition:!1})},"VAutocomplete"),Di=kt()({name:"VAutocomplete",props:Ti(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:o}=l
const{t:n}=va(),r=t.ref(),i=t.shallowRef(!1),s=t.shallowRef(!0),u=t.shallowRef(!1),c=t.ref(),d=t.ref(),v=aa(e,"menu"),p=t.computed({get:()=>v.value,set:e=>{v.value&&!e&&c.value?.ΨopenChildren||(v.value=e)}}),f=t.shallowRef(-1),m=t.computed((()=>r.value?.color)),g=t.computed((()=>p.value?e.closeText:e.openText)),{items:h,transformIn:y,transformOut:b}=mr(e),{textColorClasses:V,textColorStyles:w}=ll(m),S=aa(e,"search",""),k=aa(e,"modelValue",[],(e=>y(null===e?[null]:P(e))),(t=>{const a=b(t)
return e.multiple?a:a[0]??null})),x=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(k.value):"number"==typeof e.counterValue?e.counterValue:k.value.length)),N=an(),{filteredItems:C,getMatches:_}=Ri(e,h,(()=>s.value?"":S.value)),I=t.computed((()=>e.hideSelected?C.value.filter((e=>!k.value.some((t=>t.value===e.value)))):C.value)),B=t.computed((()=>!(!e.chips&&!o.chip))),A=t.computed((()=>B.value||!!o.selection)),R=t.computed((()=>k.value.map((e=>e.props.value)))),T=t.computed((()=>(!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&S.value===I.value[0]?.title)&&I.value.length>0&&!s.value&&!u.value)),D=t.computed((()=>e.hideNoData&&!I.value.length||e.readonly||N?.isReadonly.value)),E=t.ref(),{onListScroll:F,onListKeydown:$}=Ci(E,r)
function M(t){e.openOnClear&&(p.value=!0),S.value=""}function O(){D.value||(p.value=!0)}function L(e){D.value||(i.value&&(e.preventDefault(),e.stopPropagation()),p.value=!p.value)}function z(t){if(e.readonly||N?.isReadonly.value)return
const a=r.value.selectionStart,l=k.value.length
if((f.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(p.value=!0),["Escape"].includes(t.key)&&(p.value=!1),T.value&&["Enter","Tab"].includes(t.key)&&!k.value.some((e=>{let{value:t}=e
return t===I.value[0].value}))&&q(I.value[0]),"ArrowDown"===t.key&&T.value&&E.value?.focus("next"),["Backspace","Delete"].includes(t.key)){if(!e.multiple&&A.value&&k.value.length>0&&!S.value)return q(k.value[0],!1)
if(~f.value){const e=f.value
q(k.value[f.value],!1),f.value=e>=l-1?l-2:e}else"Backspace"!==t.key||S.value||(f.value=l-1)}if(e.multiple){if("ArrowLeft"===t.key){if(f.value<0&&a>0)return
const e=f.value>-1?f.value-1:l-1
k.value[e]?f.value=e:(f.value=-1,r.value.setSelectionRange(S.value?.length,S.value?.length))}if("ArrowRight"===t.key){if(f.value<0)return
const e=f.value+1
k.value[e]?f.value=e:(f.value=-1,r.value.setSelectionRange(0,0))}}}function j(e){if(ee(r.value,":autofill")||ee(r.value,":-webkit-autofill")){const t=h.value.find((t=>t.title===e.target.value))
t&&q(t)}}function H(){i.value&&(s.value=!0,r.value?.focus())}function W(e){i.value=!0,setTimeout((()=>{u.value=!0}))}function U(e){u.value=!1}function Y(t){null!=t&&(""!==t||e.multiple||A.value)||(k.value=[])}const G=t.shallowRef(!1)
function q(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(a&&!a.props.disabled)if(e.multiple){const t=k.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...k.value,a]:[...k.value]
e.splice(t,1),k.value=e}else o&&(k.value=[...k.value,a])
e.clearOnSelect&&(S.value="")}else{const e=!1!==l
k.value=e?[a]:[],S.value=e&&!A.value?a.title:"",t.nextTick((()=>{p.value=!1,s.value=!0}))}}return t.watch(i,((a,l)=>{a!==l&&(a?(G.value=!0,S.value=e.multiple||A.value?"":String(k.value.at(-1)?.props.title??""),s.value=!0,t.nextTick((()=>G.value=!1))):(e.multiple||null!=S.value||(k.value=[]),p.value=!1,k.value.some((e=>{let{title:t}=e
return t===S.value}))||(S.value=""),f.value=-1))})),t.watch(S,(e=>{i.value&&!G.value&&(e&&(p.value=!0),s.value=!e)})),t.watch(p,(()=>{if(!e.hideSelected&&p.value&&k.value.length){const e=I.value.findIndex((e=>k.value.some((t=>e.value===t.value))))
a&&window.requestAnimationFrame((()=>{e>=0&&d.value?.scrollToIndex(e)}))}})),t.watch((()=>e.items),((e,t)=>{p.value||i.value&&!t.length&&e.length&&(p.value=!0)})),Rt((()=>{const a=!!(!e.hideNoData||I.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),l=k.value.length>0,u=bi.filterProps(e)
return t.createVNode(bi,t.mergeProps({ref:r},u,{modelValue:S.value,"onUpdate:modelValue":[e=>S.value=e,Y],focused:i.value,"onUpdate:focused":e=>i.value=e,validationValue:k.externalValue,counterValue:x.value,dirty:l,onChange:j,class:["v-autocomplete","v-autocomplete--"+(e.multiple?"multiple":"single"),{"v-autocomplete--active-menu":p.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!A.value,"v-autocomplete--selecting-index":f.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:l?void 0:e.placeholder,"onClick:clear":M,"onMousedown:control":O,onKeydown:z}),{...o,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(si,t.mergeProps({ref:c,modelValue:p.value,"onUpdate:modelValue":e=>p.value=e,activator:"parent",contentClass:"v-autocomplete__content",disabled:D.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:H},e.menuProps),{default:()=>[a&&t.createVNode(br,t.mergeProps({ref:E,selected:R.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:$,onFocusin:W,onFocusout:U,onScrollPassive:F,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>[o["prepend-item"]?.(),!I.value.length&&!e.hideNoData&&(o["no-data"]?.()??t.createVNode(nr,{title:n(e.noDataText)},null)),t.createVNode(Ni,{ref:d,renderless:!0,items:I.value},{default:a=>{let{item:l,index:n,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:n,active:!(!T.value||0!==n)||void 0,onClick:()=>q(l,null)})
return o.item?.({item:l,index:n,props:i})??t.createVNode(nr,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(qo,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependAvatar&&t.createVNode(Mo,{image:l.props.prependAvatar},null),l.props.prependIcon&&t.createVNode(Ul,{icon:l.props.prependIcon},null)])},title:()=>s.value?l.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-autocomplete__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(a+l)])]):e}(l.title,_(l)?.title,S.value?.length??0)})}}),o["append-item"]?.()]})]}),k.value.map(((a,l)=>{function n(e){e.stopPropagation(),e.preventDefault(),q(a,!1)}const r={"onClick:close":n,onKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),n(e))},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=B.value?!!o.chip:!!o.selection,s=i?te(B.value?o.chip({item:a,index:l,props:r}):o.selection({item:a,index:l})):void 0
if(!i||s)return t.createVNode("div",{key:a.value,class:["v-autocomplete__selection",l===f.value&&["v-autocomplete__selection--selected",V.value]],style:l===f.value?w.value:{}},[B.value?o.chip?t.createVNode(Za,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[s]}):t.createVNode(Fn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},r),null):s??t.createVNode("span",{class:"v-autocomplete__selection-text"},[a.title,e.multiple&&l<k.value.length-1&&t.createVNode("span",{class:"v-autocomplete__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r]
return t.createVNode(t.Fragment,null,[o["append-inner"]?.(...l),e.menuIcon?t.createVNode(Ul,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:L,onClick:J,"aria-label":n(g.value),title:n(g.value),tabindex:"-1"},null):void 0])}})})),ri({isFocused:i,isPristine:s,menu:p,search:S,filteredItems:C,select:q},r)}}),Ei=st({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Tt,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...ut(),...Xl({location:"top end"}),...nl(),...xa(),...ga(),...il({transition:"scale-rotate-transition"})},"VBadge"),Fi=kt()({name:"VBadge",inheritAttrs:!1,props:Ei(),setup(e,a){const{backgroundColorClasses:l,backgroundColorStyles:o}=ol(t.toRef(e,"color")),{roundedClasses:n}=rl(e),{t:r}=va(),{textColorClasses:i,textColorStyles:s}=ll(t.toRef(e,"textColor")),{themeClasses:u}=ba(),{locationStyles:c}=Zl(e,!0,(t=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0)))
return Rt((()=>{const d=Number(e.content),v=!e.max||isNaN(d)?e.content:d<=+e.max?d:`${e.max}+`,[p,f]=S(a.attrs,["aria-atomic","aria-label","aria-live","role","title"])
return t.createVNode(e.tag,t.mergeProps({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},f,{style:e.style}),{default:()=>[t.createVNode("div",{class:"v-badge__wrapper"},[a.slots.default?.(),t.createVNode(sl,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("span",t.mergeProps({class:["v-badge__badge",u.value,l.value,n.value,i.value],style:[o.value,s.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":r(e.label,d),"aria-live":"polite",role:"status"},p),[e.dot?void 0:a.slots.badge?a.slots.badge?.():e.icon?t.createVNode(Ul,{icon:e.icon},null):v]),[[t.vShow,e.modelValue]])]})])]})})),{}}}),$i=st({color:String,density:String,...ut()},"VBannerActions"),Mi=kt()({name:"VBannerActions",props:$i(),setup(e,a){let{slots:l}=a
return bt({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),Rt((()=>t.createVNode("div",{class:["v-banner-actions",e.class],style:e.style},[l.default?.()]))),{}}}),Oi=xt("v-banner-text"),Li=st({avatar:String,bgColor:String,color:String,icon:Tt,lines:String,stacked:Boolean,sticky:Boolean,text:String,...pl(),...ut(),...Nl(),...Qa(),...hn({mobile:null}),...ml(),...Xl(),...oo(),...nl(),...xa(),...ga()},"VBanner"),zi=kt()({name:"VBanner",props:Li(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=ol(e,"bgColor"),{borderClasses:r}=fl(e),{densityClasses:i}=Cl(e),{displayClasses:s,mobile:u}=yn(e),{dimensionStyles:c}=Ja(e),{elevationClasses:d}=gl(e),{locationStyles:v}=Zl(e),{positionClasses:p}=no(e),{roundedClasses:f}=rl(e),{themeClasses:m}=ya(e),g=t.toRef(e,"color"),h=t.toRef(e,"density")
bt({VBannerActions:{color:g,density:h}}),Rt((()=>{const a=!(!e.text&&!l.text),y=!(!e.avatar&&!e.icon),b=!(!y&&!l.prepend)
return t.createVNode(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||u.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},m.value,o.value,r.value,i.value,s.value,d.value,p.value,f.value,e.class],style:[n.value,c.value,v.value,e.style],role:"banner"},{default:()=>[b&&t.createVNode("div",{key:"prepend",class:"v-banner__prepend"},[l.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!y,defaults:{VAvatar:{color:g.value,density:h.value,icon:e.icon,image:e.avatar}}},l.prepend):t.createVNode(Mo,{key:"prepend-avatar",color:g.value,density:h.value,icon:e.icon,image:e.avatar},null)]),t.createVNode("div",{class:"v-banner__content"},[a&&t.createVNode(Oi,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.()]),l.actions&&t.createVNode(Mi,{key:"actions"},l.actions)]})}))}}),ji=st({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...pl(),...ut(),...Nl(),...ml(),...nl(),...Zt({name:"bottom-navigation"}),...xa({tag:"header"}),...Tl({selectedClass:"v-btn--selected"}),...ga()},"VBottomNavigation"),Hi=kt()({name:"VBottomNavigation",props:ji(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=ba(),{borderClasses:n}=fl(e),{backgroundColorClasses:r,backgroundColorStyles:i}=ol(t.toRef(e,"bgColor")),{densityClasses:s}=Cl(e),{elevationClasses:u}=gl(e),{roundedClasses:c}=rl(e),{ssrBootStyles:d}=wl(),v=t.computed((()=>Number(e.height)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0))),p=aa(e,"active",e.active),{layoutItemStyles:m,layoutIsReady:g}=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:t.computed((()=>p.value?v.value:0)),elementSize:v,active:p,absolute:t.toRef(e,"absolute")})
return Fl(e,Ml),bt({VBtn:{baseColor:t.toRef(e,"baseColor"),color:t.toRef(e,"color"),density:t.toRef(e,"density"),stacked:t.computed((()=>"horizontal"!==e.mode)),variant:"text"}},{scoped:!0}),Rt((()=>t.createVNode(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":p.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":"shift"===e.mode},o.value,r.value,n.value,s.value,u.value,c.value,e.class],style:[i.value,m.value,{height:f(v.value)},d.value,e.style]},{default:()=>[l.default&&t.createVNode("div",{class:"v-bottom-navigation__content"},[l.default()])]}))),g}}),Wi=st({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ai({origin:"center center",scrollStrategy:"block",transition:{component:Ra},zIndex:2400})},"VDialog"),Ui=kt()({name:"VDialog",props:Wi(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,l){let{emit:o,slots:n}=l
const r=aa(e,"modelValue"),{scopeId:i}=Gr(),s=t.ref()
function u(e){const t=e.relatedTarget,a=e.target
if(t!==a&&s.value?.contentEl&&s.value?.globalTop&&![document,s.value.contentEl].includes(a)&&!s.value.contentEl.contains(a)){const e=K(s.value.contentEl)
if(!e.length)return
const a=e[0],l=e[e.length-1]
t===a?l.focus():a.focus()}}function c(){s.value?.contentEl&&!s.value.contentEl.contains(document.activeElement)&&s.value.contentEl.focus({preventScroll:!0})}function d(){o("afterLeave")}return a&&t.watch((()=>r.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)}),{immediate:!0}),t.watch(r,(async e=>{e||(await t.nextTick(),s.value.activatorEl?.focus({preventScroll:!0}))})),Rt((()=>{const a=li.filterProps(e),l=t.mergeProps({"aria-haspopup":"dialog","aria-expanded":String(r.value)},e.activatorProps),o=t.mergeProps({tabindex:-1},e.contentProps)
return t.createVNode(li,t.mergeProps({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,"aria-modal":"true",activatorProps:l,contentProps:o,role:"dialog",onAfterEnter:c,onAfterLeave:d},i),{activator:n.activator,default:function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l]
return t.createVNode(Za,{root:"VDialog"},{default:()=>[n.default?.(...a)]})}})})),ri({},s)}}),Yi=st({inset:Boolean,...Wi({transition:"bottom-sheet-transition"})},"VBottomSheet"),Gi=kt()({name:"VBottomSheet",props:Yi(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue")
return Rt((()=>{const a=Ui.filterProps(e)
return t.createVNode(Ui,t.mergeProps(a,{contentClass:["v-bottom-sheet__content",e.contentClass],modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-bottom-sheet",{"v-bottom-sheet--inset":e.inset},e.class],style:e.style}),l)})),{}}}),qi=st({divider:[Number,String],...ut()},"VBreadcrumbsDivider"),Ki=kt()({name:"VBreadcrumbsDivider",props:qi(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[l?.default?.()??e.divider]))),{}}}),Xi=st({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...ut(),...so(),...xa({tag:"li"})},"VBreadcrumbsItem"),Zi=kt()({name:"VBreadcrumbsItem",props:Xi(),setup(e,a){let{slots:l,attrs:o}=a
const n=io(e,o),r=t.computed((()=>e.active||n.isActive?.value)),i=t.computed((()=>r.value?e.activeColor:e.color)),{textColorClasses:s,textColorStyles:u}=ll(i)
return Rt((()=>t.createVNode(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:r.value&&e.activeClass},s.value,e.class],style:[u.value,e.style],"aria-current":r.value?"page":void 0},{default:()=>[n.isLink.value?t.createVNode("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":r.value?"page":void 0,onClick:n.navigate},[l.default?.()??e.title]):l.default?.()??e.title]}))),{}}}),Qi=st({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:Tt,items:{type:Array,default:()=>[]},...ut(),...Nl(),...nl(),...xa({tag:"ul"})},"VBreadcrumbs"),Ji=kt()({name:"VBreadcrumbs",props:Qi(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=ol(t.toRef(e,"bgColor")),{densityClasses:r}=Cl(e),{roundedClasses:i}=rl(e)
bt({VBreadcrumbsDivider:{divider:t.toRef(e,"divider")},VBreadcrumbsItem:{activeClass:t.toRef(e,"activeClass"),activeColor:t.toRef(e,"activeColor"),color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled")}})
const s=t.computed((()=>e.items.map((e=>"string"==typeof e?{item:{title:e},raw:e}:{item:e,raw:e}))))
return Rt((()=>{const a=!(!l.prepend&&!e.icon)
return t.createVNode(e.tag,{class:["v-breadcrumbs",o.value,r.value,i.value,e.class],style:[n.value,e.style]},{default:()=>[a&&t.createVNode("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[l.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},l.prepend):t.createVNode(Ul,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map(((e,a,o)=>{let{item:n,raw:r}=e
return t.createVNode(t.Fragment,null,[l.item?.({item:n,index:a})??t.createVNode(Zi,t.mergeProps({key:a,disabled:a>=o.length-1},"string"==typeof n?{title:n}:n),{default:l.title?()=>l.title?.({item:n,index:a}):void 0}),a<o.length-1&&t.createVNode(Ki,null,{default:l.divider?()=>l.divider?.({item:r,index:a}):void 0})])})),l.default?.()]})})),{}}}),es=kt()({name:"VCardActions",props:ut(),setup(e,a){let{slots:l}=a
return bt({VBtn:{slim:!0,variant:"text"}}),Rt((()=>t.createVNode("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}}),ts=st({opacity:[Number,String],...ut(),...xa()},"VCardSubtitle"),as=kt()({name:"VCardSubtitle",props:ts(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},l))),{}}}),ls=xt("v-card-title"),os=st({appendAvatar:String,appendIcon:Tt,prependAvatar:String,prependIcon:Tt,subtitle:[String,Number],title:[String,Number],...ut(),...Nl()},"VCardItem"),ns=kt()({name:"VCardItem",props:os(),setup(e,a){let{slots:l}=a
return Rt((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),o=!(!a&&!l.prepend),n=!(!e.appendAvatar&&!e.appendIcon),r=!(!n&&!l.append),i=!(null==e.title&&!l.title),s=!(null==e.subtitle&&!l.subtitle)
return t.createVNode("div",{class:["v-card-item",e.class],style:e.style},[o&&t.createVNode("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?t.createVNode(Za,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},l.prepend):t.createVNode(t.Fragment,null,[e.prependAvatar&&t.createVNode(Mo,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t.createVNode(Ul,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),t.createVNode("div",{class:"v-card-item__content"},[i&&t.createVNode(ls,{key:"title"},{default:()=>[l.title?.()??e.title]}),s&&t.createVNode(as,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),r&&t.createVNode("div",{key:"append",class:"v-card-item__append"},[l.append?t.createVNode(Za,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},l.append):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(Ul,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Mo,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}}),rs=st({opacity:[Number,String],...ut(),...xa()},"VCardText"),is=kt()({name:"VCardText",props:rs(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},l))),{}}}),ss=st({appendAvatar:String,appendIcon:Tt,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Tt,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...pl(),...ut(),...Nl(),...Qa(),...ml(),...eo(),...Xl(),...oo(),...nl(),...so(),...xa(),...ga(),...Bl({variant:"elevated"})},"VCard"),us=kt()({name:"VCard",directives:{Ripple:_o},props:ss(),setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=ya(e),{borderClasses:r}=fl(e),{colorClasses:i,colorStyles:s,variantClasses:u}=Pl(e),{densityClasses:c}=Cl(e),{dimensionStyles:d}=Ja(e),{elevationClasses:v}=gl(e),{loaderClasses:p}=to(e),{locationStyles:f}=Zl(e),{positionClasses:m}=no(e),{roundedClasses:g}=rl(e),h=io(e,l),y=t.computed((()=>!1!==e.link&&h.isLink.value)),b=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||h.isClickable.value)))
return Rt((()=>{const a=y.value?"a":e.tag,l=!(!o.title&&null==e.title),V=!(!o.subtitle&&null==e.subtitle),w=l||V,S=!!(o.append||e.appendAvatar||e.appendIcon),k=!!(o.prepend||e.prependAvatar||e.prependIcon),x=!(!o.image&&!e.image),N=w||k||S,C=!(!o.text&&null==e.text)
return t.withDirectives(t.createVNode(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},n.value,r.value,i.value,c.value,v.value,p.value,m.value,g.value,u.value,e.class],style:[s.value,d.value,f.value,e.style],href:h.href.value,onClick:b.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[x&&t.createVNode("div",{key:"image",class:"v-card__image"},[o.image?t.createVNode(Za,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):t.createVNode(vl,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(ao,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:o.loader}),N&&t.createVNode(ns,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:o.item,prepend:o.prepend,title:o.title,subtitle:o.subtitle,append:o.append}),C&&t.createVNode(is,{key:"text"},{default:()=>[o.text?.()??e.text]}),o.default?.(),o.actions&&t.createVNode(es,null,{default:o.actions}),Il(b.value,"v-card")]}),[[t.resolveDirective("ripple"),b.value&&e.ripple]])})),{}}})
function cs(e,t){const a=e.changedTouches[0]
t.touchstartX=a.clientX,t.touchstartY=a.clientY,t.start?.({originalEvent:e,...t})}function ds(e,t){const a=e.changedTouches[0]
t.touchendX=a.clientX,t.touchendY=a.clientY,t.end?.({originalEvent:e,...t}),(e=>{const{touchstartX:t,touchendX:a,touchstartY:l,touchendY:o}=e
e.offsetX=a-t,e.offsetY=o-l,Math.abs(e.offsetY)<.5*Math.abs(e.offsetX)&&(e.left&&a<t-16&&e.left(e),e.right&&a>t+16&&e.right(e)),Math.abs(e.offsetX)<.5*Math.abs(e.offsetY)&&(e.up&&o<l-16&&e.up(e),e.down&&o>l+16&&e.down(e))})(t)}function vs(e,t){const a=e.changedTouches[0]
t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,t.move?.({originalEvent:e,...t})}const ps={mounted:function(e,t){const a=t.value,l=a?.parent?e.parentElement:e,o=a?.options??{passive:!0},n=t.instance?.$.uid
if(!l||!n)return
const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end}
return{touchstart:e=>cs(e,t),touchend:e=>ds(e,t),touchmove:e=>vs(e,t)}}(t.value)
l._touchHandlers=l._touchHandlers??Object.create(null),l._touchHandlers[n]=r,b(r).forEach((e=>{l.addEventListener(e,r[e],o)}))},unmounted:function(e,t){const a=t.value?.parent?e.parentElement:e,l=t.instance?.$.uid
if(!a?._touchHandlers||!l)return
const o=a._touchHandlers[l]
b(o).forEach((e=>{a.removeEventListener(e,o[e])})),delete a._touchHandlers[l]}},fs=Symbol.for("vuetify:v-window"),ms=Symbol.for("vuetify:v-window-group"),gs=st({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||"hover"===e},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ut(),...xa(),...ga()},"VWindow"),hs=kt()({name:"VWindow",directives:{Touch:ps},props:gs(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{isRtl:n}=fa(),{t:r}=va(),i=Fl(e,ms),s=t.ref(),u=t.computed((()=>n.value?!e.reverse:e.reverse)),c=t.shallowRef(!1),d=t.computed((()=>`v-window-${"vertical"===e.direction?"y":"x"}${(u.value?!c.value:c.value)?"-reverse":""}-transition`)),v=t.shallowRef(0),p=t.ref(void 0),f=t.computed((()=>i.items.value.findIndex((e=>i.selected.value.includes(e.id)))))
t.watch(f,((e,t)=>{const a=i.items.value.length,l=a-1
c.value=a<=2?e<t:e===l&&0===t||(0!==e||t!==l)&&e<t})),t.provide(fs,{transition:d,isReversed:c,transitionCount:v,transitionHeight:p,rootRef:s})
const m=t.computed((()=>e.continuous||0!==f.value)),g=t.computed((()=>e.continuous||f.value!==i.items.value.length-1))
function h(){m.value&&i.prev()}function y(){g.value&&i.next()}const b=t.computed((()=>{const a=[],o={icon:n.value?e.nextIcon:e.prevIcon,class:"v-window__"+(u.value?"right":"left"),onClick:i.prev,"aria-label":r("$vuetify.carousel.prev")}
a.push(m.value?l.prev?l.prev({props:o}):t.createVNode(Bo,o,null):t.createVNode("div",null,null))
const s={icon:n.value?e.prevIcon:e.nextIcon,class:"v-window__"+(u.value?"left":"right"),onClick:i.next,"aria-label":r("$vuetify.carousel.next")}
return a.push(g.value?l.next?l.next({props:s}):t.createVNode(Bo,s,null):t.createVNode("div",null,null)),a})),V=t.computed((()=>{if(!1===e.touch)return e.touch
return{...{left:()=>{u.value?h():y()},right:()=>{u.value?y():h()},start:e=>{let{originalEvent:t}=e
t.stopPropagation()}},...!0===e.touch?{}:e.touch}}))
return Rt((()=>t.withDirectives(t.createVNode(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":"hover"===e.showArrows},o.value,e.class],style:e.style},{default:()=>[t.createVNode("div",{class:"v-window__container",style:{height:p.value}},[l.default?.({group:i}),!1!==e.showArrows&&t.createVNode("div",{class:"v-window__controls"},[b.value])]),l.additional?.({group:i})]}),[[t.resolveDirective("touch"),V.value]]))),{group:i}}}),ys=st({color:String,cycle:Boolean,delimiterIcon:{type:Tt,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...gs({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),bs=kt()({name:"VCarousel",props:ys(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),{t:n}=va(),r=t.ref()
let i=-1
function s(){e.cycle&&r.value&&(i=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(i),window.requestAnimationFrame(s)}return t.watch(o,u),t.watch((()=>e.interval),u),t.watch((()=>e.cycle),(e=>{e?u():window.clearTimeout(i)})),t.onMounted(s),Rt((()=>{const a=hs.filterProps(e)
return t.createVNode(hs,t.mergeProps({ref:r},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:f(e.height)},e.style]}),{default:l.default,additional:a=>{let{group:r}=a
return t.createVNode(t.Fragment,null,[!e.hideDelimiters&&t.createVNode("div",{class:"v-carousel__controls",style:{left:"left"===e.verticalDelimiters&&e.verticalDelimiters?0:"auto",right:"right"===e.verticalDelimiters?0:"auto"}},[r.items.value.length>0&&t.createVNode(Za,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map(((e,a)=>{const o={id:`carousel-item-${e.id}`,"aria-label":n("$vuetify.carousel.ariaLabel.delimiter",a+1,r.items.value.length),class:["v-carousel__controls__item",r.isSelected(e.id)&&"v-btn--active"],onClick:()=>r.select(e.id,!0)}
return l.item?l.item({props:o,item:e}):t.createVNode(Bo,t.mergeProps(e,o),null)}))]})]),e.progress&&t.createVNode(Jl,{class:"v-carousel__progress",color:"string"==typeof e.progress?e.progress:void 0,modelValue:(r.getItemIndex(o.value)+1)/r.items.value.length*100},null)])},prev:l.prev,next:l.next})})),{}}}),Vs=st({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ut(),...Dl(),...Ur()},"VWindowItem"),ws=kt()({name:"VWindowItem",directives:{Touch:ps},props:Vs(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(fs),n=El(e,ms),{isBooted:r}=wl()
if(!o||!n)throw new Error("[Vuetify] VWindowItem must be used inside VWindow")
const i=t.shallowRef(!1),s=t.computed((()=>r.value&&(o.isReversed.value?!1!==e.reverseTransition:!1!==e.transition)))
function u(){i.value&&o&&(i.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,0===o.transitionCount.value&&(o.transitionHeight.value=void 0)))}function c(){!i.value&&o&&(i.value=!0,0===o.transitionCount.value&&(o.transitionHeight.value=f(o.rootRef.value?.clientHeight)),o.transitionCount.value+=1)}function d(){u()}function v(e){i.value&&t.nextTick((()=>{s.value&&i.value&&o&&(o.transitionHeight.value=f(e.clientHeight))}))}const p=t.computed((()=>{const t=o.isReversed.value?e.reverseTransition:e.transition
return!!s.value&&{name:"string"!=typeof t?o.transition.value:t,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:v}})),{hasContent:m}=Yr(e,n.isSelected)
return Rt((()=>t.createVNode(sl,{transition:p.value,disabled:!r.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-window-item",n.selectedClass.value,e.class],style:e.style},[m.value&&l.default?.()]),[[t.vShow,n.isSelected.value]])]}))),{groupItem:n}}}),Ss=st({...dl(),...Vs()},"VCarouselItem"),ks=kt()({name:"VCarouselItem",inheritAttrs:!1,props:Ss(),setup(e,a){let{slots:l,attrs:o}=a
Rt((()=>{const a=vl.filterProps(e),n=ws.filterProps(e)
return t.createVNode(ws,t.mergeProps({class:["v-carousel-item",e.class]},n),{default:()=>[t.createVNode(vl,t.mergeProps(o,a),l)]})}))}}),xs=xt("v-code"),Ns=St({name:"VColorPickerCanvas",props:st({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...ut()},"VColorPickerCanvas")(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:l}=a
const o=t.shallowRef(!1),n=t.ref(),r=t.shallowRef(parseFloat(e.width)),i=t.shallowRef(parseFloat(e.height)),s=t.ref({x:0,y:0}),u=t.computed({get:()=>s.value,set(t){if(!n.value)return
const{x:a,y:o}=t
s.value=t,l("update:color",{h:e.color?.h??0,s:A(a,0,r.value)/r.value,v:1-A(o,0,i.value)/i.value,a:e.color?.a??1})}}),c=t.computed((()=>{const{x:t,y:a}=u.value,l=parseInt(e.dotSize,10)/2
return{width:f(e.dotSize),height:f(e.dotSize),transform:`translate(${f(t-l)}, ${f(a-l)})`}})),{resizeRef:d}=Gt((e=>{if(!d.el?.offsetParent)return
const{width:t,height:a}=e[0].contentRect
r.value=t,i.value=a}))
function v(t){"mousedown"===t.type&&t.preventDefault(),e.disabled||(p(t),window.addEventListener("mousemove",p),window.addEventListener("mouseup",m),window.addEventListener("touchmove",p),window.addEventListener("touchend",m))}function p(t){if(e.disabled||!n.value)return
o.value=!0
const a=function(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}(t)
!function(e,t,a){const{left:l,top:o,width:n,height:r}=a
u.value={x:A(e-l,0,n),y:A(t-o,0,r)}}(a.clientX,a.clientY,n.value.getBoundingClientRect())}function m(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m)}function g(){if(!n.value)return
const t=n.value,a=t.getContext("2d")
if(!a)return
const l=a.createLinearGradient(0,0,t.width,0)
l.addColorStop(0,"hsla(0, 0%, 100%, 1)"),l.addColorStop(1,`hsla(${e.color?.h??0}, 100%, 50%, 1)`),a.fillStyle=l,a.fillRect(0,0,t.width,t.height)
const o=a.createLinearGradient(0,0,0,t.height)
o.addColorStop(0,"hsla(0, 0%, 0%, 0)"),o.addColorStop(1,"hsla(0, 0%, 0%, 1)"),a.fillStyle=o,a.fillRect(0,0,t.width,t.height)}return t.watch((()=>e.color?.h),g,{immediate:!0}),t.watch((()=>[r.value,i.value]),((e,t)=>{g(),s.value={x:u.value.x*e[0]/t[0],y:u.value.y*e[1]/t[1]}}),{flush:"post"}),t.watch((()=>e.color),(()=>{o.value?o.value=!1:s.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*i.value}:{x:0,y:0}}),{deep:!0,immediate:!0}),t.onMounted((()=>g())),Rt((()=>t.createVNode("div",{ref:d,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:v,onTouchstartPassive:v},[t.createVNode("canvas",{ref:n,width:r.value,height:i.value},null),e.color&&t.createVNode("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:c.value},null)]))),{}}})
const Cs={h:0,s:0,v:0,a:1},_s={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return null!=t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:Ue,from:Ge},Is={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(100*e.s)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(100*e.l)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return null!=t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:qe,from:Ke},Bs={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:at,from:tt},Ps={rgb:{..._s,inputs:_s.inputs?.slice(0,3)},rgba:_s,hsl:{...Is,inputs:Is.inputs.slice(0,3)},hsla:Is,hex:{...Bs,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},hexa:Bs},As=e=>{let{label:a,...l}=e
return t.createVNode("div",{class:"v-color-picker-edit__input"},[t.createVNode("input",l,null),t.createVNode("span",null,[a])])},Rs=St({name:"VColorPickerEdit",props:st({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(Ps).includes(e)},modes:{type:Array,default:()=>Object.keys(Ps),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(Ps).includes(e)))},...ut()},"VColorPickerEdit")(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>e.modes.map((e=>({...Ps[e],name:e}))))),n=t.computed((()=>{const t=o.value.find((t=>t.name===e.mode))
if(!t)return[]
const a=e.color?t.to(e.color):null
return t.inputs?.map((o=>{let{getValue:n,getColor:r,...i}=o
return{...t.inputProps,...i,disabled:e.disabled,value:a&&n(a),onChange:e=>{const o=e.target
o&&l("update:color",t.from(r(a??t.to(Cs),o.value)))}}}))}))
return Rt((()=>t.createVNode("div",{class:["v-color-picker-edit",e.class],style:e.style},[n.value?.map((e=>t.createVNode(As,e,null))),o.value.length>1&&t.createVNode(Bo,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const t=o.value.findIndex((t=>t.name===e.mode))
l("update:mode",o.value[(t+1)%o.value.length].name)}},null)]))),{}}}),Ts=Symbol.for("vuetify:v-slider")
function Ds(e,t,a){const l="vertical"===a,o=t.getBoundingClientRect(),n="touches"in e?e.touches[0]:e
return l?n.clientY-(o.top+o.height/2):n.clientX-(o.left+o.width/2)}const Es=st({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>"boolean"==typeof e||"always"===e},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>"boolean"==typeof e||"always"===e},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...nl(),...ml({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Fs=e=>{const a=t.computed((()=>parseFloat(e.min))),l=t.computed((()=>parseFloat(e.max))),o=t.computed((()=>+e.step>0?parseFloat(e.step):0)),n=t.computed((()=>Math.max(R(o.value),R(a.value))))
return{min:a,max:l,step:o,decimals:n,roundValue:function(e){if(e=parseFloat(e),o.value<=0)return e
const t=A(e,a.value,l.value),r=a.value%o.value,i=Math.round((t-r)/o.value)*o.value+r
return parseFloat(Math.min(i,l.value).toFixed(n.value))}}},$s=e=>{let{props:a,steps:l,onSliderStart:o,onSliderMove:n,onSliderEnd:r,getActiveThumb:i}=e
const{isRtl:s}=fa(),u=t.toRef(a,"reverse"),c=t.computed((()=>"vertical"===a.direction)),d=t.computed((()=>c.value!==u.value)),{min:v,max:f,step:m,decimals:g,roundValue:h}=l,y=t.computed((()=>parseInt(a.thumbSize,10))),b=t.computed((()=>parseInt(a.tickSize,10))),V=t.computed((()=>parseInt(a.trackSize,10))),w=t.computed((()=>(f.value-v.value)/m.value)),S=t.toRef(a,"disabled"),k=t.computed((()=>a.error||a.disabled?void 0:a.thumbColor??a.color)),x=t.computed((()=>a.error||a.disabled?void 0:a.trackColor??a.color)),N=t.computed((()=>a.error||a.disabled?void 0:a.trackFillColor??a.color)),C=t.shallowRef(!1),_=t.shallowRef(0),I=t.ref(),B=t.ref()
function P(e){const t="vertical"===a.direction,l=t?"top":"left",o=t?"height":"width",n=t?"clientY":"clientX",{[l]:r,[o]:i}=I.value?.$el.getBoundingClientRect(),u=function(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}(e,n)
let c=Math.min(Math.max((u-r-_.value)/i,0),1)||0
return(t?d.value:d.value!==s.value)&&(c=1-c),h(v.value+c*(f.value-v.value))}const R=e=>{r({value:P(e)}),C.value=!1,_.value=0},T=e=>{B.value=i(e),B.value&&(B.value.focus(),C.value=!0,B.value.contains(e.target)?_.value=Ds(e,B.value,a.direction):(_.value=0,n({value:P(e)})),o({value:P(e)}))},D={passive:!0,capture:!0}
function E(e){n({value:P(e)})}function F(e){e.stopPropagation(),e.preventDefault(),R(e),window.removeEventListener("mousemove",E,D),window.removeEventListener("mouseup",F)}function $(e){R(e),window.removeEventListener("touchmove",E,D),e.target?.removeEventListener("touchend",$)}const M=e=>{const t=(e-v.value)/(f.value-v.value)*100
return A(isNaN(t)?0:t,0,100)},O=t.toRef(a,"showTicks"),L=t.computed((()=>O.value?a.ticks?Array.isArray(a.ticks)?a.ticks.map((e=>({value:e,position:M(e),label:e.toString()}))):Object.keys(a.ticks).map((e=>({value:parseFloat(e),position:M(parseFloat(e)),label:a.ticks[e]}))):w.value!==1/0?p(w.value+1).map((e=>{const t=v.value+e*m.value
return{value:t,position:M(t)}})):[]:[])),z=t.computed((()=>L.value.some((e=>{let{label:t}=e
return!!t})))),j={activeThumbRef:B,color:t.toRef(a,"color"),decimals:g,disabled:S,direction:t.toRef(a,"direction"),elevation:t.toRef(a,"elevation"),hasLabels:z,isReversed:u,indexFromEnd:d,min:v,max:f,mousePressed:C,numTicks:w,onSliderMousedown:function(e){e.preventDefault(),T(e),window.addEventListener("mousemove",E,D),window.addEventListener("mouseup",F,{passive:!1})},onSliderTouchstart:function(e){T(e),window.addEventListener("touchmove",E,D),e.target?.addEventListener("touchend",$,{passive:!1})},parsedTicks:L,parseMouseMove:P,position:M,readonly:t.toRef(a,"readonly"),rounded:t.toRef(a,"rounded"),roundValue:h,showTicks:O,startOffset:_,step:m,thumbSize:y,thumbColor:k,thumbLabel:t.toRef(a,"thumbLabel"),ticks:t.toRef(a,"ticks"),tickSize:b,trackColor:x,trackContainerRef:I,trackFillColor:N,trackSize:V,vertical:c}
return t.provide(Ts,j),j},Ms=st({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},name:String,...ut()},"VSliderThumb"),Os=kt()({name:"VSliderThumb",directives:{Ripple:_o},props:Ms(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.inject(Ts),{isRtl:r,rtlClasses:i}=fa()
if(!n)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider")
const{thumbColor:s,step:u,disabled:c,thumbSize:d,thumbLabel:v,direction:p,isReversed:m,vertical:g,readonly:h,elevation:b,mousePressed:V,decimals:w,indexFromEnd:S}=n,k=t.computed((()=>c.value?void 0:b.value)),{elevationClasses:x}=gl(k),{textColorClasses:N,textColorStyles:C}=ll(s),{pageup:_,pagedown:I,end:B,home:P,left:A,right:R,down:T,up:D}=y,E=[_,I,B,P,A,R,T,D],F=t.computed((()=>u.value?[1,2,3]:[1,5,10]))
function $(t){const a=function(t,a){if(!E.includes(t.key))return
t.preventDefault()
const l=u.value||.1,o=(e.max-e.min)/l
if([A,R,T,D].includes(t.key)){const e=(g.value?[r.value?A:R,m.value?T:D]:S.value!==r.value?[A,D]:[R,D]).includes(t.key)?1:-1,o=t.shiftKey?2:t.ctrlKey?1:0
a+=e*l*F.value[o]}else t.key===P?a=e.min:t.key===B?a=e.max:a-=(t.key===I?1:-1)*l*(o>100?o/10:10)
return Math.max(e.min,Math.min(e.max,a))}(t,e.modelValue)
null!=a&&o("update:modelValue",a)}return Rt((()=>{const a=f(S.value?100-e.position:e.position,"%")
return t.createVNode("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&V.value},e.class,i.value],style:[{"--v-slider-thumb-position":a,"--v-slider-thumb-size":f(d.value)},e.style],role:"slider",tabindex:c.value?-1:0,"aria-label":e.name,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!h.value,"aria-orientation":p.value,onKeydown:h.value?void 0:$},[t.createVNode("div",{class:["v-slider-thumb__surface",N.value,x.value],style:{...C.value}},null),t.withDirectives(t.createVNode("div",{class:["v-slider-thumb__ripple",N.value],style:C.value},null),[[t.resolveDirective("ripple"),e.ripple,null,{circle:!0,center:!0}]]),t.createVNode(Oa,{origin:"bottom center"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-slider-thumb__label-container"},[t.createVNode("div",{class:["v-slider-thumb__label"]},[t.createVNode("div",null,[l["thumb-label"]?.({modelValue:e.modelValue})??e.modelValue.toFixed(u.value?w.value:1)])])]),[[t.vShow,v.value&&e.focused||"always"===v.value]])]})])})),{}}}),Ls=st({start:{type:Number,required:!0},stop:{type:Number,required:!0},...ut()},"VSliderTrack"),zs=kt()({name:"VSliderTrack",props:Ls(),emits:{},setup(e,a){let{slots:l}=a
const o=t.inject(Ts)
if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider")
const{color:n,parsedTicks:r,rounded:i,showTicks:s,tickSize:u,trackColor:c,trackFillColor:d,trackSize:v,vertical:p,min:m,max:g,indexFromEnd:h}=o,{roundedClasses:y}=rl(i),{backgroundColorClasses:b,backgroundColorStyles:V}=ol(d),{backgroundColorClasses:w,backgroundColorStyles:S}=ol(c),k=t.computed((()=>`inset-${p.value?"block":"inline"}-${h.value?"end":"start"}`)),x=t.computed((()=>p.value?"height":"width")),N=t.computed((()=>({[k.value]:"0%",[x.value]:"100%"}))),C=t.computed((()=>e.stop-e.start)),_=t.computed((()=>({[k.value]:f(e.start,"%"),[x.value]:f(C.value,"%")}))),I=t.computed((()=>{if(!s.value)return[]
return(p.value?r.value.slice().reverse():r.value).map(((a,o)=>{const n=a.value!==m.value&&a.value!==g.value?f(a.position,"%"):void 0
return t.createVNode("div",{key:a.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":a.position>=e.start&&a.position<=e.stop,"v-slider-track__tick--first":a.value===m.value,"v-slider-track__tick--last":a.value===g.value}],style:{[k.value]:n}},[(a.label||l["tick-label"])&&t.createVNode("div",{class:"v-slider-track__tick-label"},[l["tick-label"]?.({tick:a,index:o})??a.label])])}))}))
return Rt((()=>t.createVNode("div",{class:["v-slider-track",y.value,e.class],style:[{"--v-slider-track-size":f(v.value),"--v-slider-tick-size":f(u.value)},e.style]},[t.createVNode("div",{class:["v-slider-track__background",w.value,{"v-slider-track__background--opacity":!!n.value||!d.value}],style:{...N.value,...S.value}},null),t.createVNode("div",{class:["v-slider-track__fill",b.value],style:{..._.value,...V.value}},null),s.value&&t.createVNode("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":"always"===s.value}]},[I.value])]))),{}}}),js=st({...Qo(),...Es(),...nn(),modelValue:{type:[Number,String],default:0}},"VSlider"),Hs=kt()({name:"VSlider",props:js(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),{rtlClasses:r}=fa(),i=Fs(e),s=aa(e,"modelValue",void 0,(e=>i.roundValue(null==e?i.min.value:e))),{min:u,max:c,mousePressed:d,roundValue:v,onSliderMousedown:p,onSliderTouchstart:f,trackContainerRef:m,position:g,hasLabels:h,readonly:y}=$s({props:e,steps:i,onSliderStart:()=>{o("start",s.value)},onSliderEnd:e=>{let{value:t}=e
const a=v(t)
s.value=a,o("end",a)},onSliderMove:e=>{let{value:t}=e
return s.value=v(t)},getActiveThumb:()=>n.value?.$el}),{isFocused:b,focus:V,blur:w}=Jo(e),S=t.computed((()=>g(s.value)))
return Rt((()=>{const a=rn.filterProps(e),o=!!(e.label||l.label||l.prepend)
return t.createVNode(rn,t.mergeProps({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||h.value,"v-slider--focused":b.value,"v-slider--pressed":d.value,"v-slider--disabled":e.disabled},r.value,e.class],style:e.style},a,{focused:b.value}),{...l,prepend:o?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??(e.label?t.createVNode(Lo,{id:a.id.value,class:"v-slider__label",text:e.label},null):void 0),l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:r}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:y.value?void 0:p,onTouchstartPassive:y.value?void 0:f},[t.createVNode("input",{id:o.value,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value},null),t.createVNode(zs,{ref:m,start:0,stop:S.value},{"tick-label":l["tick-label"]}),t.createVNode(Os,{ref:n,"aria-describedby":r.value,focused:b.value,min:u.value,max:c.value,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,position:S.value,elevation:e.elevation,onFocus:V,onBlur:w,ripple:e.ripple,name:e.name},{"thumb-label":l["thumb-label"]})])}})})),{}}}),Ws=St({name:"VColorPickerPreview",props:st({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...ut()},"VColorPickerPreview")(),emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
const o=new AbortController
async function r(){if(!n)return
const t=new window.EyeDropper
try{const a=tt((await t.open({signal:o.signal})).sRGBHex)
l("update:color",{...e.color??Cs,...a})}catch(e){}}return t.onUnmounted((()=>o.abort())),Rt((()=>t.createVNode("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[n&&t.createVNode("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[t.createVNode(Bo,{onClick:r,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),t.createVNode("div",{class:"v-color-picker-preview__dot"},[t.createVNode("div",{style:{background:Ze(e.color??Cs)}},null)]),t.createVNode("div",{class:"v-color-picker-preview__sliders"},[t.createVNode(Hs,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:e.color?.h,"onUpdate:modelValue":t=>l("update:color",{...e.color??Cs,h:t}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&t.createVNode(Hs,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:e.color?.a??1,"onUpdate:modelValue":t=>l("update:color",{...e.color??Cs,a:t}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])]))),{}}})
var Us={red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"#ffffff00"}}
const Ys=St({name:"VColorPickerSwatches",props:st({swatches:{type:Array,default:()=>function(e){return Object.keys(e).map((t=>{const a=e[t]
return a.base?[a.base,a.darken4,a.darken3,a.darken2,a.darken1,a.lighten1,a.lighten2,a.lighten3,a.lighten4,a.lighten5]:[a.black,a.white,a.transparent]}))}(Us)},disabled:Boolean,color:Object,maxHeight:[Number,String],...ut()},"VColorPickerSwatches")(),emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
return Rt((()=>t.createVNode("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:f(e.maxHeight)},e.style]},[t.createVNode("div",null,[e.swatches.map((a=>t.createVNode("div",{class:"v-color-picker-swatches__swatch"},[a.map((a=>{const o=We(a),n=Ge(o),r=Xe(o)
return t.createVNode("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&l("update:color",n)},[t.createVNode("div",{style:{background:r}},[e.color&&c(e.color,n)?t.createVNode(Ul,{size:"x-small",icon:"$success",color:rt(a,"#FFFFFF")>2?"white":"black"},null):void 0])])}))])))])]))),{}}}),Gs=st({color:String,...pl(),...ut(),...Qa(),...ml(),...Xl(),...oo(),...nl(),...xa(),...ga()},"VSheet"),qs=kt()({name:"VSheet",props:Gs(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{backgroundColorClasses:n,backgroundColorStyles:r}=ol(t.toRef(e,"color")),{borderClasses:i}=fl(e),{dimensionStyles:s}=Ja(e),{elevationClasses:u}=gl(e),{locationStyles:c}=Zl(e),{positionClasses:d}=no(e),{roundedClasses:v}=rl(e)
return Rt((()=>t.createVNode(e.tag,{class:["v-sheet",o.value,n.value,i.value,u.value,d.value,v.value,e.class],style:[r.value,s.value,c.value,e.style]},l))),{}}}),Ks=St({name:"VColorPicker",props:st({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(Ps).includes(e)},modes:{type:Array,default:()=>Object.keys(Ps),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(Ps).includes(e)))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...k(Gs({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker")(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=aa(e,"mode"),l=t.ref(null),o=aa(e,"modelValue",void 0,(e=>{if(null==e||""===e)return null
let t
try{t=Ge(We(e))}catch(e){return Ie(e),null}return t}),(t=>t?function(e,t){if(null==t||"string"==typeof t){const t=at(e)
return 1===e.a?t.slice(0,7):t}if("object"==typeof t){let a
return V(t,["r","g","b"])?a=Ue(e):V(t,["h","s","l"])?a=qe(e):V(t,["h","s","v"])&&(a=e),function(e,t){if(t){const{a:t,...a}=e
return a}return e}(a,!V(t,["a"])&&1===e.a)}return e}(t,e.modelValue):null)),n=t.computed((()=>o.value?{...o.value,h:l.value??o.value.h}:null)),{rtlClasses:r}=fa()
let i=!0
t.watch(o,(e=>{i?e&&(l.value=e.h):i=!0}),{immediate:!0})
const s=e=>{i=!1,l.value=e.h,o.value=e}
return t.onMounted((()=>{e.modes.includes(a.value)||(a.value=e.modes[0])})),bt({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),Rt((()=>{const l=qs.filterProps(e)
return t.createVNode(qs,t.mergeProps({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",r.value,e.class],style:[{"--v-color-picker-color-hsv":Ze({...n.value??Cs,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&t.createVNode(Ns,{key:"canvas",color:n.value,"onUpdate:color":s,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&t.createVNode("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&t.createVNode(Ws,{key:"preview",color:n.value,"onUpdate:color":s,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&t.createVNode(Rs,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":e=>a.value=e,color:n.value,"onUpdate:color":s,disabled:e.disabled},null)]),e.showSwatches&&t.createVNode(Ys,{key:"swatches",color:n.value,"onUpdate:color":s,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})})),{}}})
const Xs=st({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...Ai({filterKeys:["title"]}),..._i({hideNoData:!0,returnObject:!0}),...k(yi({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...il({transition:!1})},"VCombobox"),Zs=kt()({name:"VCombobox",props:Xs(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,l){let{emit:o,slots:n}=l
const{t:r}=va(),i=t.ref(),s=t.shallowRef(!1),u=t.shallowRef(!0),c=t.shallowRef(!1),d=t.ref(),v=t.ref(),p=aa(e,"menu"),f=t.computed({get:()=>p.value,set:e=>{p.value&&!e&&d.value?.ΨopenChildren||(p.value=e)}}),m=t.shallowRef(-1)
let g=!1
const h=t.computed((()=>i.value?.color)),y=t.computed((()=>f.value?e.closeText:e.openText)),{items:b,transformIn:V,transformOut:w}=mr(e),{textColorClasses:S,textColorStyles:k}=ll(h),x=aa(e,"modelValue",[],(e=>V(P(e))),(t=>{const a=w(t)
return e.multiple?a:a[0]??null})),N=an(),C=t.computed((()=>!(!e.chips&&!n.chip))),_=t.computed((()=>C.value||!!n.selection)),B=t.shallowRef(e.multiple||_.value?"":x.value[0]?.title??""),A=t.computed({get:()=>B.value,set:t=>{if(B.value=t??"",e.multiple||_.value||(x.value=[pr(e,t)]),t&&e.multiple&&e.delimiters?.length){const a=t.split(new RegExp(`(?:${e.delimiters.join("|")})+`))
a.length>1&&(a.forEach((t=>{(t=t.trim())&&G(pr(e,t))})),B.value="")}t||(m.value=-1),u.value=!t}}),R=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(x.value):"number"==typeof e.counterValue?e.counterValue:e.multiple?x.value.length:A.value.length))
t.watch(B,(e=>{g?t.nextTick((()=>g=!1)):s.value&&!f.value&&(f.value=!0),o("update:search",e)})),t.watch(x,(t=>{e.multiple||_.value||(B.value=t[0]?.title??"")}))
const{filteredItems:T,getMatches:D}=Ri(e,b,(()=>u.value?"":A.value)),E=t.computed((()=>e.hideSelected?T.value.filter((e=>!x.value.some((t=>t.value===e.value)))):T.value)),F=t.computed((()=>x.value.map((e=>e.value)))),$=t.computed((()=>(!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&A.value===E.value[0]?.title)&&E.value.length>0&&!u.value&&!c.value)),M=t.computed((()=>e.hideNoData&&!E.value.length||e.readonly||N?.isReadonly.value)),O=t.ref(),{onListScroll:L,onListKeydown:z}=Ci(O,i)
function j(t){g=!0,e.openOnClear&&(f.value=!0)}function H(){M.value||(f.value=!0)}function W(e){M.value||(s.value&&(e.preventDefault(),e.stopPropagation()),f.value=!f.value)}function U(t){if(function(e){return e.isComposing&&I.includes(e.key)}(t)||e.readonly||N?.isReadonly.value)return
const a=i.value.selectionStart,l=x.value.length
if((m.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(f.value=!0),["Escape"].includes(t.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(t.key)&&($.value&&["Enter","Tab"].includes(t.key)&&!x.value.some((e=>{let{value:t}=e
return t===E.value[0].value}))&&G(T.value[0]),u.value=!0),"ArrowDown"===t.key&&$.value&&O.value?.focus("next"),"Enter"===t.key&&A.value&&(G(pr(e,A.value)),_.value&&(B.value="")),["Backspace","Delete"].includes(t.key)){if(!e.multiple&&_.value&&x.value.length>0&&!A.value)return G(x.value[0],!1)
if(~m.value){const e=m.value
G(x.value[m.value],!1),m.value=e>=l-1?l-2:e}else"Backspace"!==t.key||A.value||(m.value=l-1)}if(e.multiple){if("ArrowLeft"===t.key){if(m.value<0&&a>0)return
const e=m.value>-1?m.value-1:l-1
x.value[e]?m.value=e:(m.value=-1,i.value.setSelectionRange(A.value.length,A.value.length))}if("ArrowRight"===t.key){if(m.value<0)return
const e=m.value+1
x.value[e]?m.value=e:(m.value=-1,i.value.setSelectionRange(0,0))}}}function Y(){s.value&&(u.value=!0,i.value?.focus())}function G(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(a&&!a.props.disabled)if(e.multiple){const t=x.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...x.value,a]:[...x.value]
e.splice(t,1),x.value=e}else o&&(x.value=[...x.value,a])
e.clearOnSelect&&(A.value="")}else{const e=!1!==l
x.value=e?[a]:[],B.value=e&&!_.value?a.title:"",t.nextTick((()=>{f.value=!1,u.value=!0}))}}function q(e){s.value=!0,setTimeout((()=>{c.value=!0}))}function K(e){c.value=!1}function X(t){null!=t&&(""!==t||e.multiple||_.value)||(x.value=[])}return t.watch(s,((t,a)=>{if(!t&&t!==a&&(m.value=-1,f.value=!1,A.value)){if(e.multiple)return void G(pr(e,A.value))
if(!_.value)return
x.value.some((e=>{let{title:t}=e
return t===A.value}))?B.value="":G(pr(e,A.value))}})),t.watch(f,(()=>{if(!e.hideSelected&&f.value&&x.value.length){const t=E.value.findIndex((t=>x.value.some((a=>e.valueComparator(a.value,t.value)))))
a&&window.requestAnimationFrame((()=>{t>=0&&v.value?.scrollToIndex(t)}))}})),t.watch((()=>e.items),((e,t)=>{f.value||s.value&&!t.length&&e.length&&(f.value=!0)})),Rt((()=>{const a=!!(!e.hideNoData||E.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),l=x.value.length>0,o=bi.filterProps(e)
return t.createVNode(bi,t.mergeProps({ref:i},o,{modelValue:A.value,"onUpdate:modelValue":[e=>A.value=e,X],focused:s.value,"onUpdate:focused":e=>s.value=e,validationValue:x.externalValue,counterValue:R.value,dirty:l,class:["v-combobox",{"v-combobox--active-menu":f.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!_.value,"v-combobox--selecting-index":m.value>-1,["v-combobox--"+(e.multiple?"multiple":"single")]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:l?void 0:e.placeholder,"onClick:clear":j,"onMousedown:control":H,onKeydown:U}),{...n,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(si,t.mergeProps({ref:d,modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,activator:"parent",contentClass:"v-combobox__content",disabled:M.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Y},e.menuProps),{default:()=>[a&&t.createVNode(br,t.mergeProps({ref:O,selected:F.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:z,onFocusin:q,onFocusout:K,onScrollPassive:L,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>[n["prepend-item"]?.(),!E.value.length&&!e.hideNoData&&(n["no-data"]?.()??t.createVNode(nr,{title:r(e.noDataText)},null)),t.createVNode(Ni,{ref:v,renderless:!0,items:E.value},{default:a=>{let{item:l,index:o,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:o,active:!(!$.value||0!==o)||void 0,onClick:()=>G(l,null)})
return n.item?.({item:l,index:o,props:i})??t.createVNode(nr,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(qo,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependAvatar&&t.createVNode(Mo,{image:l.props.prependAvatar},null),l.props.prependIcon&&t.createVNode(Ul,{icon:l.props.prependIcon},null)])},title:()=>u.value?l.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-combobox__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(a+l)])]):e}(l.title,D(l)?.title,A.value?.length??0)})}}),n["append-item"]?.()]})]}),x.value.map(((a,l)=>{function o(e){e.stopPropagation(),e.preventDefault(),G(a,!1)}const r={"onClick:close":o,onKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),o(e))},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=C.value?!!n.chip:!!n.selection,s=i?te(C.value?n.chip({item:a,index:l,props:r}):n.selection({item:a,index:l})):void 0
if(!i||s)return t.createVNode("div",{key:a.value,class:["v-combobox__selection",l===m.value&&["v-combobox__selection--selected",S.value]],style:l===m.value?k.value:{}},[C.value?n.chip?t.createVNode(Za,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[s]}):t.createVNode(Fn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},r),null):s??t.createVNode("span",{class:"v-combobox__selection-text"},[a.title,e.multiple&&l<x.value.length-1&&t.createVNode("span",{class:"v-combobox__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o]
return t.createVNode(t.Fragment,null,[n["append-inner"]?.(...l),e.hideNoData&&!e.items.length||!e.menuIcon?void 0:t.createVNode(Ul,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:W,onClick:J,"aria-label":r(y.value),title:r(y.value),tabindex:"-1"},null)])}})})),ri({isFocused:s,isPristine:u,menu:f,search:A,selectionIndex:m,filteredItems:T,select:G},i)}}),Qs={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0}
function Js(e){return new Date(e.getFullYear(),e.getMonth(),1)}function eu(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}const tu=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/
function au(e){if(null==e)return new Date
if(e instanceof Date)return e
if("string"==typeof e){let t
if(tu.test(e))return function(e){const t=e.split("-").map(Number)
return new Date(t[0],t[1]-1,t[2])}(e)
if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const lu=new Date(2e3,0,2)
function ou(e,t,a,l){const o=au(e)??new Date,n=l?.[t]
if("function"==typeof n)return n(o,t,a)
let r={}
switch(t){case"fullDate":r={year:"numeric",month:"long",day:"numeric"}
break
case"fullDateWithWeekday":r={weekday:"long",year:"numeric",month:"long",day:"numeric"}
break
case"normalDate":return`${o.getDate()} ${new Intl.DateTimeFormat(a,{month:"long"}).format(o)}`
case"normalDateWithWeekday":r={weekday:"short",day:"numeric",month:"short"}
break
case"shortDate":r={month:"short",day:"numeric"}
break
case"year":r={year:"numeric"}
break
case"month":r={month:"long"}
break
case"monthShort":r={month:"short"}
break
case"monthAndYear":r={month:"long",year:"numeric"}
break
case"monthAndDate":r={month:"long",day:"numeric"}
break
case"weekday":r={weekday:"long"}
break
case"weekdayShort":r={weekday:"short"}
break
case"dayOfMonth":return new Intl.NumberFormat(a).format(o.getDate())
case"hours12h":r={hour:"numeric",hour12:!0}
break
case"hours24h":r={hour:"numeric",hour12:!1}
break
case"minutes":r={minute:"numeric"}
break
case"seconds":r={second:"numeric"}
break
case"fullTime":case"fullTime12h":r={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}
break
case"fullTime24h":r={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
case"fullDateTime":case"fullDateTime12h":r={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}
break
case"fullDateTime24h":r={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
case"keyboardDate":r={year:"numeric",month:"2-digit",day:"2-digit"}
break
case"keyboardDateTime":r={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
case"keyboardDateTime12h":r={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}
break
case"keyboardDateTime24h":r={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
default:r=n??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(a,r).format(o)}function nu(e,t){return e.getTime()>t.getTime()}function ru(e,t){return e.getTime()===t.getTime()}function iu(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}class su{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return au(e)}toJsDate(e){return e}toISO(e){return function(e,t){const a=e.toJsDate(t)
return`${a.getFullYear()}-${D(String(a.getMonth()+1),2,"0")}-${D(String(a.getDate()),2,"0")}`}(this,e)}parseISO(e){return function(e){const[t,a,l]=e.split("-").map(Number)
return new Date(t,a-1,l)}(e)}addMinutes(e,t){return function(e,t){const a=new Date(e)
return a.setMinutes(a.getMinutes()+t),a}(e,t)}addHours(e,t){return function(e,t){const a=new Date(e)
return a.setHours(a.getHours()+t),a}(e,t)}addDays(e,t){return function(e,t){const a=new Date(e)
return a.setDate(a.getDate()+t),a}(e,t)}addWeeks(e,t){return function(e,t){const a=new Date(e)
return a.setDate(a.getDate()+7*t),a}(e,t)}addMonths(e,t){return function(e,t){const a=new Date(e)
return a.setDate(1),a.setMonth(a.getMonth()+t),a}(e,t)}getWeekArray(e){return function(e,t){const a=[]
let l=[]
const o=Js(e),n=eu(e),r=(o.getDay()-Qs[t.slice(-2).toUpperCase()]+7)%7,i=(n.getDay()-Qs[t.slice(-2).toUpperCase()]+7)%7
for(let e=0;e<r;e++){const t=new Date(o)
t.setDate(t.getDate()-(r-e)),l.push(t)}for(let t=1;t<=n.getDate();t++){const o=new Date(e.getFullYear(),e.getMonth(),t)
l.push(o),7===l.length&&(a.push(l),l=[])}for(let e=1;e<7-i;e++){const t=new Date(n)
t.setDate(t.getDate()+e),l.push(t)}return l.length>0&&a.push(l),a}(e,this.locale)}startOfWeek(e){return function(e,t){const a=new Date(e)
for(;a.getDay()!==(Qs[t.slice(-2).toUpperCase()]??0);)a.setDate(a.getDate()-1)
return a}(e,this.locale)}endOfWeek(e){return function(e,t){const a=new Date(e),l=((Qs[t.slice(-2).toUpperCase()]??0)+6)%7
for(;a.getDay()!==l;)a.setDate(a.getDate()+1)
return a}(e,this.locale)}startOfMonth(e){return Js(e)}endOfMonth(e){return eu(e)}format(e,t){return ou(e,t,this.locale,this.formats)}isEqual(e,t){return ru(e,t)}isValid(e){return function(e){const t=new Date(e)
return t instanceof Date&&!isNaN(t.getTime())}(e)}isWithinRange(e,t){return function(e,t){return nu(e,t[0])&&function(e,t){return e.getTime()<t.getTime()}(e,t[1])}(e,t)}isAfter(e,t){return nu(e,t)}isAfterDay(e,t){return function(e,t){return nu(iu(e),iu(t))}(e,t)}isBefore(e,t){return!nu(e,t)&&!ru(e,t)}isSameDay(e,t){return function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}isSameMonth(e,t){return function(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}isSameYear(e,t){return function(e,t){return e.getFullYear()===t.getFullYear()}(e,t)}setMinutes(e,t){return function(e,t){const a=new Date(e)
return a.setMinutes(t),a}(e,t)}setHours(e,t){return function(e,t){const a=new Date(e)
return a.setHours(t),a}(e,t)}setMonth(e,t){return function(e,t){const a=new Date(e)
return a.setMonth(t),a}(e,t)}setDate(e,t){return function(e,t){const a=new Date(e)
return a.setDate(t),a}(e,t)}setYear(e,t){return function(e,t){const a=new Date(e)
return a.setFullYear(t),a}(e,t)}getDiff(e,t,a){return function(e,t,a){const l=new Date(e),o=new Date(t)
switch(a){case"years":return l.getFullYear()-o.getFullYear()
case"quarters":return Math.floor((l.getMonth()-o.getMonth()+12*(l.getFullYear()-o.getFullYear()))/4)
case"months":return l.getMonth()-o.getMonth()+12*(l.getFullYear()-o.getFullYear())
case"weeks":return Math.floor((l.getTime()-o.getTime())/6048e5)
case"days":return Math.floor((l.getTime()-o.getTime())/864e5)
case"hours":return Math.floor((l.getTime()-o.getTime())/36e5)
case"minutes":return Math.floor((l.getTime()-o.getTime())/6e4)
case"seconds":return Math.floor((l.getTime()-o.getTime())/1e3)
default:return l.getTime()-o.getTime()}}(e,t,a)}getWeekdays(){return function(e){const t=Qs[e.slice(-2).toUpperCase()]
return p(7).map((a=>{const l=new Date(lu)
return l.setDate(lu.getDate()+t+a),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(l)}))}(this.locale)}getYear(e){return function(e){return e.getFullYear()}(e)}getMonth(e){return function(e){return e.getMonth()}(e)}getDate(e){return function(e){return e.getDate()}(e)}getNextMonth(e){return function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}(e)}getPreviousMonth(e){return function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}(e)}getHours(e){return function(e){return e.getHours()}(e)}getMinutes(e){return function(e){return e.getMinutes()}(e)}startOfDay(e){return iu(e)}endOfDay(e){return function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}(e)}startOfYear(e){return function(e){return new Date(e.getFullYear(),0,1)}(e)}endOfYear(e){return function(e){return new Date(e.getFullYear(),11,31)}(e)}}const uu=Symbol.for("vuetify:date-options"),cu=Symbol.for("vuetify:date-adapter")
function du(e,t){const a=F({adapter:su,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e)
return{options:a,instance:vu(a,t)}}function vu(e,a){const l=t.reactive("function"==typeof e.adapter?new e.adapter({locale:e.locale[a.current.value]??a.current.value,formats:e.formats}):e.adapter)
return t.watch(a.current,(t=>{l.locale=e.locale[t]??t??l.locale})),l}function pu(){const e=t.inject(uu)
if(!e)throw new Error("[Vuetify] Could not find injected date options")
return vu(e,va())}const fu=st({modelValue:null,color:String,cancelText:{type:String,default:"$vuetify.confirmEdit.cancel"},okText:{type:String,default:"$vuetify.confirmEdit.ok"}},"VConfirmEdit"),mu=kt()({name:"VConfirmEdit",props:fu(),emits:{cancel:()=>!0,save:e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=aa(e,"modelValue"),r=t.ref()
t.watchEffect((()=>{r.value=structuredClone(t.toRaw(n.value))}))
const{t:i}=va(),s=t.computed((()=>c(n.value,r.value)))
function u(){n.value=r.value,l("save",r.value)}function d(){r.value=structuredClone(t.toRaw(n.value)),l("cancel")}let v=!1
return Rt((()=>{const a=t.createVNode(t.Fragment,null,[t.createVNode(Bo,{disabled:s.value,variant:"text",color:e.color,onClick:d,text:i(e.cancelText)},null),t.createVNode(Bo,{disabled:s.value,variant:"text",color:e.color,onClick:u,text:i(e.okText)},null)])
return t.createVNode(t.Fragment,null,[o.default?.({model:r,save:u,cancel:d,isPristine:s.value,get actions(){return v=!0,a}}),!v&&a])})),{save:u,cancel:d,isPristine:s}}}),gu=st({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),hu=Symbol.for("vuetify:datatable:expanded")
function yu(e){const a=t.toRef(e,"expandOnClick"),l=aa(e,"expanded",e.expanded,(e=>new Set(e)),(e=>[...e.values()]))
function o(e,t){const a=new Set(l.value)
t?a.add(e.value):a.delete(e.value),l.value=a}function n(e){return l.value.has(e.value)}const r={expand:o,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:function(e){o(e,!n(e))}}
return t.provide(hu,r),r}function bu(){const e=t.inject(hu)
if(!e)throw new Error("foo")
return e}const Vu=st({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),wu=Symbol.for("vuetify:data-table-group")
function Su(e){return{groupBy:aa(e,"groupBy")}}function ku(e){const{groupBy:a,sortBy:l}=e,o=t.ref(new Set)
function n(e){return o.value.has(e.id)}const r={sortByWithGroups:t.computed((()=>a.value.map((e=>({...e,order:e.order??!1}))).concat(l.value))),toggleGroup:function(e){const t=new Set(o.value)
n(e)?t.delete(e.id):t.add(e.id),o.value=t},opened:o,groupBy:a,extractRows:function(e){return function e(t){const a=[]
for(const l of t.items)"type"in l&&"group"===l.type?a.push(...e(l)):a.push(l)
return a}({type:"group",items:e,id:"dummy",key:"dummy",value:"dummy",depth:0})},isGroupOpen:n}
return t.provide(wu,r),r}function xu(){const e=t.inject(wu)
if(!e)throw new Error("Missing group!")
return e}function Nu(e,t){if(!e.length)return[]
const a=new Map
for(const l of e){const e=d(l.raw,t)
a.has(e)||a.set(e,[]),a.get(e).push(l)}return a}function Cu(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root"
if(!t.length)return[]
const o=Nu(e,t[0]),n=[],r=t.slice(1)
return o.forEach(((e,o)=>{const i=t[0],s=`${l}_${i}_${o}`
n.push({depth:a,id:s,key:i,value:o,items:r.length?Cu(e,r,a+1,s):e,type:"group"})})),n}function _u(e,t){const a=[]
for(const l of e)"type"in l&&"group"===l.type?(null!=l.value&&a.push(l),(t.has(l.id)||null==l.value)&&a.push(..._u(l.items,t))):a.push(l)
return a}function Iu(e,a,l){return{flatItems:t.computed((()=>{if(!a.value.length)return e.value
return _u(Cu(e.value,a.value.map((e=>e.key))),l.value)}))}}function Bu(e){let{page:a,itemsPerPage:l,sortBy:o,groupBy:n,search:r}=e
const i=ct("VDataTable"),s=t.computed((()=>({page:a.value,itemsPerPage:l.value,sortBy:o.value,groupBy:n.value,search:r.value})))
let u=null
t.watch(s,(()=>{c(u,s.value)||(u&&u.search!==s.value.search&&(a.value=1),i.emit("update:options",s.value),u=s.value)}),{deep:!0,immediate:!0})}const Pu=st({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Au=Symbol.for("vuetify:data-table-pagination")
function Ru(e){return{page:aa(e,"page",void 0,(e=>+(e??1))),itemsPerPage:aa(e,"itemsPerPage",void 0,(e=>+(e??10)))}}function Tu(e){const{page:a,itemsPerPage:l,itemsLength:o}=e,n=t.computed((()=>-1===l.value?0:l.value*(a.value-1))),r=t.computed((()=>-1===l.value?o.value:Math.min(o.value,n.value+l.value))),i=t.computed((()=>-1===l.value||0===o.value?1:Math.ceil(o.value/l.value)))
t.watchEffect((()=>{a.value>i.value&&(a.value=i.value)}))
const s={page:a,itemsPerPage:l,startIndex:n,stopIndex:r,pageCount:i,itemsLength:o,nextPage:function(){a.value=A(a.value+1,1,i.value)},prevPage:function(){a.value=A(a.value-1,1,i.value)},setPage:function(e){a.value=A(e,1,i.value)},setItemsPerPage:function(e){l.value=e,a.value=1}}
return t.provide(Au,s),s}function Du(e){const a=ct("usePaginatedItems"),{items:l,startIndex:o,stopIndex:n,itemsPerPage:r}=e,i=t.computed((()=>r.value<=0?l.value:l.value.slice(o.value,n.value)))
return t.watch(i,(e=>{a.emit("update:currentItems",e)})),{paginatedItems:i}}const Eu={showSelectAll:!1,allSelected:()=>[],select:e=>{let{items:t,value:a}=e
return new Set(a?[t[0]?.value]:[])},selectAll:e=>{let{selected:t}=e
return t}},Fu={showSelectAll:!0,allSelected:e=>{let{currentPage:t}=e
return t},select:e=>{let{items:t,value:a,selected:l}=e
for(const e of t)a?l.add(e.value):l.delete(e.value)
return l},selectAll:e=>{let{value:t,currentPage:a,selected:l}=e
return Fu.select({items:a,value:t,selected:l})}},$u={showSelectAll:!0,allSelected:e=>{let{allItems:t}=e
return t},select:e=>{let{items:t,value:a,selected:l}=e
for(const e of t)a?l.add(e.value):l.delete(e.value)
return l},selectAll:e=>{let{value:t,allItems:a,selected:l}=e
return $u.select({items:a,value:t,selected:l})}},Mu=st({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:c}},"DataTable-select"),Ou=Symbol.for("vuetify:data-table-selection")
function Lu(e,a){let{allItems:l,currentPage:o}=a
const n=aa(e,"modelValue",e.modelValue,(t=>new Set(P(t).map((t=>l.value.find((a=>e.valueComparator(t,a.value)))?.value??t)))),(e=>[...e.values()])),r=t.computed((()=>l.value.filter((e=>e.selectable)))),i=t.computed((()=>o.value.filter((e=>e.selectable)))),s=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
switch(e.selectStrategy){case"single":return Eu
case"all":return $u
case"page":default:return Fu}}))
function u(e){return P(e).every((e=>n.value.has(e.value)))}function c(e,t){const a=s.value.select({items:e,value:t,selected:new Set(n.value)})
n.value=a}const d=t.computed((()=>n.value.size>0)),v=t.computed((()=>{const e=s.value.allSelected({allItems:r.value,currentPage:i.value})
return!!e.length&&u(e)})),p={toggleSelect:function(e){c([e],!u([e]))},select:c,selectAll:function(e){const t=s.value.selectAll({value:e,allItems:r.value,currentPage:i.value,selected:new Set(n.value)})
n.value=t},isSelected:u,isSomeSelected:function(e){return P(e).some((e=>n.value.has(e.value)))},someSelected:d,allSelected:v,showSelectAll:t.computed((()=>s.value.showSelectAll))}
return t.provide(Ou,p),p}function zu(){const e=t.inject(Ou)
if(!e)throw new Error("Missing selection!")
return e}const ju=st({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Hu=Symbol.for("vuetify:data-table-sort")
function Wu(e){return{sortBy:aa(e,"sortBy"),mustSort:t.toRef(e,"mustSort"),multiSort:t.toRef(e,"multiSort")}}function Uu(e){const{sortBy:a,mustSort:l,multiSort:o,page:n}=e
const r={sortBy:a,toggleSort:e=>{if(null==e.key)return
let t=a.value.map((e=>({...e})))??[]
const r=t.find((t=>t.key===e.key))
r?"desc"===r.order?l.value?r.order="asc":t=t.filter((t=>t.key!==e.key)):r.order="desc":t=o.value?[...t,{key:e.key,order:"asc"}]:[{key:e.key,order:"asc"}],a.value=t,n&&(n.value=1)},isSorted:function(e){return!!a.value.find((t=>t.key===e.key))}}
return t.provide(Hu,r),r}function Yu(){const e=t.inject(Hu)
if(!e)throw new Error("Missing sort!")
return e}function Gu(e,a,l,o){const n=va()
return{sortedItems:t.computed((()=>!l.value.length||e.disableSort?a.value:function(e,t,a,l){const o=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"})
return e.map((e=>[e,l?.transform?l.transform(e):e])).sort(((e,a)=>{for(let n=0;n<t.length;n++){let r=!1
const i=t[n].key,s=t[n].order??"asc"
if(!1===s)continue
let u=e[1][i],c=a[1][i],d=e[0].raw,v=a[0].raw
if("desc"===s&&([u,c]=[c,u],[d,v]=[v,d]),l?.sortRawFunctions?.[i]){const e=l.sortRawFunctions[i](d,v)
if(null==e)continue
if(r=!0,e)return e}if(l?.sortFunctions?.[i]){const e=l.sortFunctions[i](u,c)
if(null==e)continue
if(r=!0,e)return e}if(!r){if(u instanceof Date&&c instanceof Date)return u.getTime()-c.getTime()
if([u,c]=[u,c].map((e=>null!=e?e.toString().toLocaleLowerCase():e)),u!==c)return Q(u)&&Q(c)?0:Q(u)?-1:Q(c)?1:isNaN(u)||isNaN(c)?o.compare(u,c):Number(u)-Number(c)}}return 0})).map((e=>{let[t]=e
return t}))}(a.value,l.value,n.current.value,{transform:o?.transform,sortFunctions:{...e.customKeySort,...o?.sortFunctions?.value},sortRawFunctions:o?.sortRawFunctions?.value})))}}const qu=st({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items")
function Ku(e,t){return{type:"item",value:e.returnObject?t:v(t,e.itemValue),selectable:v(t,e.itemSelectable,!0),raw:t}}function Xu(e){return{items:t.computed((()=>function(e,t){const a=[]
for(const l of t)a.push(Ku(e,l))
return a}(e,e.items)))}}const Zu=st({search:String,loading:Boolean,...ut(),...qu(),...Mu(),...ju(),...Pu({itemsPerPage:5}),...gu(),...Vu(),...Ai(),...xa(),...il({transition:{component:Ma,hideOnLeave:!0}})},"VDataIterator"),Qu=kt()({name:"VDataIterator",props:Zu(),emits:{"update:modelValue":e=>!0,"update:groupBy":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"groupBy"),n=t.toRef(e,"search"),{items:r}=Xu(e),{filteredItems:i}=Ri(e,r,n,{transform:e=>e.raw}),{sortBy:s,multiSort:u,mustSort:c}=Wu(e),{page:d,itemsPerPage:v}=Ru(e),{toggleSort:p}=Uu({sortBy:s,multiSort:u,mustSort:c,page:d}),{sortByWithGroups:f,opened:m,extractRows:g,isGroupOpen:h,toggleGroup:y}=ku({groupBy:o,sortBy:s}),{sortedItems:b}=Gu(e,i,f,{transform:e=>e.raw}),{flatItems:V}=Iu(b,o,m),w=t.computed((()=>V.value.length)),{startIndex:S,stopIndex:k,pageCount:x,prevPage:N,nextPage:C,setItemsPerPage:_,setPage:I}=Tu({page:d,itemsPerPage:v,itemsLength:w}),{paginatedItems:B}=Du({items:V,startIndex:S,stopIndex:k,itemsPerPage:v}),P=t.computed((()=>g(B.value))),{isSelected:A,select:R,selectAll:T,toggleSelect:D}=Lu(e,{allItems:r,currentPage:P}),{isExpanded:E,toggleExpand:F}=yu(e)
Bu({page:d,itemsPerPage:v,sortBy:s,groupBy:o,search:n})
const $=t.computed((()=>({page:d.value,itemsPerPage:v.value,sortBy:s.value,pageCount:x.value,toggleSort:p,prevPage:N,nextPage:C,setPage:I,setItemsPerPage:_,isSelected:A,select:R,selectAll:T,toggleSelect:D,isExpanded:E,toggleExpand:F,isGroupOpen:h,toggleGroup:y,items:P.value,groupedItems:B.value})))
return Rt((()=>t.createVNode(e.tag,{class:["v-data-iterator",{"v-data-iterator--loading":e.loading},e.class],style:e.style},{default:()=>[l.header?.($.value),t.createVNode(sl,{transition:e.transition},{default:()=>[e.loading?t.createVNode(ao,{key:"loader",name:"v-data-iterator",active:!0},{default:e=>l.loader?.(e)}):t.createVNode("div",{key:"items"},[B.value.length?l.default?.($.value):l["no-data"]?.()])]}),l.footer?.($.value)]}))),{}}})
const Ju=st({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1==0},totalVisible:[Number,String],firstIcon:{type:Tt,default:"$first"},prevIcon:{type:Tt,default:"$prev"},nextIcon:{type:Tt,default:"$next"},lastIcon:{type:Tt,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...pl(),...ut(),...Nl(),...ml(),...nl(),...jl(),...xa({tag:"nav"}),...ga(),...Bl({variant:"text"})},"VPagination"),ec=kt()({name:"VPagination",props:Ju(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=aa(e,"modelValue"),{t:r,n:i}=va(),{isRtl:s}=fa(),{themeClasses:u}=ya(e),{width:c}=yn(),d=t.shallowRef(-1)
bt(void 0,{scoped:!0})
const{resizeRef:v}=Gt((e=>{if(!e.length)return
const{target:t,contentRect:a}=e[0],l=t.querySelector(".v-pagination__list > *")
if(!l)return
const o=a.width,n=l.offsetWidth+2*parseFloat(getComputedStyle(l).marginRight)
d.value=h(o,n)})),f=t.computed((()=>parseInt(e.length,10))),m=t.computed((()=>parseInt(e.start,10))),g=t.computed((()=>null!=e.totalVisible?parseInt(e.totalVisible,10):d.value>=0?d.value:h(c.value,58)))
function h(t,a){const l=e.showFirstLastPage?5:3
return Math.max(0,Math.floor(+((t-a*l)/a).toFixed(2)))}const b=t.computed((()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[]
if(g.value<=0)return[]
if(1===g.value)return[n.value]
if(f.value<=g.value)return p(f.value,m.value)
const t=g.value%2==0,a=t?g.value/2:Math.floor(g.value/2),l=t?a:a+1,o=f.value-a
if(l-n.value>=0)return[...p(Math.max(1,g.value-1),m.value),e.ellipsis,f.value]
if(n.value-o>=(t?1:0)){const t=g.value-1,a=f.value-t+m.value
return[m.value,e.ellipsis,...p(t,a)]}{const t=Math.max(1,g.value-3),a=1===t?n.value:n.value-Math.ceil(t/2)+m.value
return[m.value,e.ellipsis,...p(t,a),e.ellipsis,f.value]}}))
function V(e,t,a){e.preventDefault(),n.value=t,a&&o(a,t)}const{refs:w,updateRef:S}=function(){const e=t.ref([])
return t.onBeforeUpdate((()=>e.value=[])),{refs:e,updateRef:function(t,a){e.value[a]=t}}}()
bt({VPaginationBtn:{color:t.toRef(e,"color"),border:t.toRef(e,"border"),density:t.toRef(e,"density"),size:t.toRef(e,"size"),variant:t.toRef(e,"variant"),rounded:t.toRef(e,"rounded"),elevation:t.toRef(e,"elevation")}})
const k=t.computed((()=>b.value.map(((t,a)=>{const l=e=>S(e,a)
if("string"==typeof t)return{isActive:!1,key:`ellipsis-${a}`,page:t,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}}
{const a=t===n.value
return{isActive:a,key:t,page:i(t),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:a?e.activeColor:e.color,"aria-current":a,"aria-label":r(a?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:e=>V(e,t)}}}})))),x=t.computed((()=>{const t=!!e.disabled||n.value<=m.value,a=!!e.disabled||n.value>=m.value+f.value-1
return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:e=>V(e,m.value,"first"),disabled:t,"aria-label":r(e.firstAriaLabel),"aria-disabled":t}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:e=>V(e,n.value-1,"prev"),disabled:t,"aria-label":r(e.previousAriaLabel),"aria-disabled":t},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:e=>V(e,n.value+1,"next"),disabled:a,"aria-label":r(e.nextAriaLabel),"aria-disabled":a},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:e=>V(e,m.value+f.value-1,"last"),disabled:a,"aria-label":r(e.lastAriaLabel),"aria-disabled":a}:void 0}}))
function N(){const e=n.value-m.value
w.value[e]?.$el.focus()}function C(a){a.key===y.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,t.nextTick(N)):a.key===y.right&&!e.disabled&&n.value<m.value+f.value-1&&(n.value=n.value+1,t.nextTick(N))}return Rt((()=>t.createVNode(e.tag,{ref:v,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:C,"data-test":"v-pagination-root"},{default:()=>[t.createVNode("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t.createVNode("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[l.first?l.first(x.value.first):t.createVNode(Bo,t.mergeProps({_as:"VPaginationBtn"},x.value.first),null)]),t.createVNode("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[l.prev?l.prev(x.value.prev):t.createVNode(Bo,t.mergeProps({_as:"VPaginationBtn"},x.value.prev),null)]),k.value.map(((e,a)=>t.createVNode("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[l.item?l.item(e):t.createVNode(Bo,t.mergeProps({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),t.createVNode("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[l.next?l.next(x.value.next):t.createVNode(Bo,t.mergeProps({_as:"VPaginationBtn"},x.value.next),null)]),e.showFirstLastPage&&t.createVNode("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[l.last?l.last(x.value.last):t.createVNode(Bo,t.mergeProps({_as:"VPaginationBtn"},x.value.last),null)])])]}))),{}}}),tc=st({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),ac=kt()({name:"VDataTableFooter",props:tc(),setup(e,a){let{slots:l}=a
const{t:o}=va(),{page:n,pageCount:r,startIndex:i,stopIndex:s,itemsLength:u,itemsPerPage:c,setItemsPerPage:d}=function(){const e=t.inject(Au)
if(!e)throw new Error("Missing pagination!")
return e}(),v=t.computed((()=>e.itemsPerPageOptions.map((e=>"number"==typeof e?{value:e,title:-1===e?o("$vuetify.dataFooter.itemsPerPageAll"):String(e)}:{...e,title:isNaN(Number(e.title))?o(e.title):e.title}))))
return Rt((()=>{const a=ec.filterProps(e)
return t.createVNode("div",{class:"v-data-table-footer"},[l.prepend?.(),t.createVNode("div",{class:"v-data-table-footer__items-per-page"},[t.createVNode("span",null,[o(e.itemsPerPageText)]),t.createVNode(Bi,{items:v.value,modelValue:c.value,"onUpdate:modelValue":e=>d(Number(e)),density:"compact",variant:"outlined","hide-details":!0},null)]),t.createVNode("div",{class:"v-data-table-footer__info"},[t.createVNode("div",null,[o(e.pageText,u.value?i.value+1:0,s.value,u.value)])]),t.createVNode("div",{class:"v-data-table-footer__pagination"},[t.createVNode(ec,t.mergeProps({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},a),null)])])})),{}}}),lc=(oc={align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(nc=(e,a)=>{let{slots:l}=a
const o=e.tag??"td"
return t.createVNode(o,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:f(e.height),width:f(e.width),maxWidth:f(e.maxWidth),left:f(e.fixedOffset||null)}},{default:()=>[l.default?.()]})}).props=oc,nc)
var oc,nc
const rc=st({headers:Array},"DataTable-header"),ic=Symbol.for("vuetify:data-table-headers"),sc={title:"",sortable:!1},uc={...sc,width:48}
function cc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e.children)for(const a of e.children)cc(a,t)
else t.push(e)
return t}function dc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set
for(const a of e)a.key&&t.add(a.key),a.children&&dc(a.children,t)
return t}function vc(e){if(e.key)return"data-table-group"===e.key?sc:["data-table-expand","data-table-select"].includes(e.key)?uc:void 0}function pc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return e.children?Math.max(t,...e.children.map((e=>pc(e,t+1)))):t}function fc(e,t){const a=[]
let l=0
const o=function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e=>({element:e,priority:0})))
return{enqueue:(t,a)=>{let l=!1
for(let o=0;o<e.length;o++)if(e[o].priority>a){e.splice(o,0,{element:t,priority:a}),l=!0
break}l||e.push({element:t,priority:a})},size:()=>e.length,count:()=>{let t=0
if(!e.length)return 0
const a=Math.floor(e[0].priority)
for(let l=0;l<e.length;l++)Math.floor(e[l].priority)===a&&(t+=1)
return t},dequeue:()=>e.shift()}}(e)
for(;o.size()>0;){let e=o.count()
const n=[]
let r=1
for(;e>0;){const{element:a,priority:i}=o.dequeue(),s=t-l-pc(a)
if(n.push({...a,rowspan:s??1,colspan:a.children?cc(a).length:1}),a.children)for(const e of a.children){const t=i%1+r/Math.pow(10,l+2)
o.enqueue(e,l+s+t)}r+=1,e-=1}l+=1,a.push(n)}return{columns:e.map((e=>cc(e))).flat(),headers:a}}function mc(e){const t=[]
for(const a of e){const e={...vc(a),...a},l=e.key??("string"==typeof e.value?e.value:null),o=e.value??l??null,n={...e,key:l,value:o,sortable:e.sortable??(null!=e.key||!!e.sort),children:e.children?mc(e.children):void 0}
t.push(n)}return t}function gc(e,a){const l=t.ref([]),o=t.ref([]),n=t.ref({}),r=t.ref({}),i=t.ref({})
t.watchEffect((()=>{const s=(e.headers||Object.keys(e.items[0]??{}).map((e=>({key:e,title:t.capitalize(e)})))).slice(),u=dc(s)
a?.groupBy?.value.length&&!u.has("data-table-group")&&s.unshift({key:"data-table-group",title:"Group"}),a?.showSelect?.value&&!u.has("data-table-select")&&s.unshift({key:"data-table-select"}),a?.showExpand?.value&&!u.has("data-table-expand")&&s.push({key:"data-table-expand"})
const c=mc(s)
!function(e){let t=!1
function a(e){if(e)if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e.fixed=!0),e.fixed)if(e.children)for(let t=e.children.length-1;t>=0;t--)a(e.children[t],!0)
else t?isNaN(+e.width)&&Be(`Multiple fixed columns should have a static width (key: ${e.key})`):e.lastFixed=!0,t=!0
else if(e.children)for(let t=e.children.length-1;t>=0;t--)a(e.children[t])
else t=!1}for(let t=e.length-1;t>=0;t--)a(e[t])
function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(!e)return t
if(e.children){e.fixedOffset=t
for(const a of e.children)t=l(a,t)}else e.fixed&&(e.fixedOffset=t,t+=parseFloat(e.width||"0")||0)
return t}let o=0
for(const t of e)o=l(t,o)}(c)
const d=Math.max(...c.map((e=>pc(e))))+1,v=fc(c,d)
l.value=v.headers,o.value=v.columns
const p=v.headers.flat(1)
for(const e of p)e.key&&(e.sortable&&(e.sort&&(n.value[e.key]=e.sort),e.sortRaw&&(r.value[e.key]=e.sortRaw)),e.filter&&(i.value[e.key]=e.filter))}))
const s={headers:l,columns:o,sortFunctions:n,sortRawFunctions:r,filterFunctions:i}
return t.provide(ic,s),s}function hc(){const e=t.inject(ic)
if(!e)throw new Error("Missing headers!")
return e}const yc=st({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:Tt,default:"$sortAsc"},sortDescIcon:{type:Tt,default:"$sortDesc"},headerProps:{type:Object},...hn(),...eo()},"VDataTableHeaders"),bc=kt()({name:"VDataTableHeaders",props:yc(),setup(e,a){let{slots:l}=a
const{t:o}=va(),{toggleSort:n,sortBy:r,isSorted:i}=Yu(),{someSelected:s,allSelected:u,selectAll:c,showSelectAll:d}=zu(),{columns:v,headers:p}=hc(),{loaderClasses:m}=to(e)
function g(t,a){if(e.sticky||t.fixed)return{position:"sticky",left:t.fixed?f(t.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${a})`:void 0}}function h(t){const a=r.value.find((e=>e.key===t.key))
return a?"asc"===a.order?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:y,backgroundColorStyles:b}=ol(e,"color"),{displayClasses:V,mobile:w}=yn(e),S=t.computed((()=>({headers:p.value,columns:v.value,toggleSort:n,isSorted:i,sortBy:r.value,someSelected:s.value,allSelected:u.value,selectAll:c,getSortIcon:h}))),k=t.computed((()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},V.value,m.value])),x=a=>{let{column:o,x:v,y:p}=a
const m="data-table-select"===o.key||"data-table-expand"===o.key,V=t.mergeProps(e.headerProps??{},o.headerProps??{})
return t.createVNode(lc,t.mergeProps({tag:"th",align:o.align,class:[{"v-data-table__th--sortable":o.sortable&&!e.disableSort,"v-data-table__th--sorted":i(o),"v-data-table__th--fixed":o.fixed},...k.value],style:{width:f(o.width),minWidth:f(o.minWidth),maxWidth:f(o.maxWidth),...g(o,p)},colspan:o.colspan,rowspan:o.rowspan,onClick:o.sortable?()=>n(o):void 0,fixed:o.fixed,nowrap:o.nowrap,lastFixed:o.lastFixed,noPadding:m},V),{default:()=>{const a=`header.${o.key}`,v={column:o,selectAll:c,isSorted:i,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:u.value,getSortIcon:h}
return l[a]?l[a](v):"data-table-select"===o.key?l["header.data-table-select"]?.(v)??(d.value&&t.createVNode(qo,{modelValue:u.value,indeterminate:s.value&&!u.value,"onUpdate:modelValue":c},null)):t.createVNode("div",{class:"v-data-table-header__content"},[t.createVNode("span",null,[o.title]),o.sortable&&!e.disableSort&&t.createVNode(Ul,{key:"icon",class:"v-data-table-header__sort-icon",icon:h(o)},null),e.multiSort&&i(o)&&t.createVNode("div",{key:"badge",class:["v-data-table-header__sort-badge",...y.value],style:b.value},[r.value.findIndex((e=>e.key===o.key))+1])])}})},N=()=>{const a=t.mergeProps(e.headerProps??{}??{}),d=t.computed((()=>v.value.filter((t=>t?.sortable&&!e.disableSort)))),f=t.computed((()=>{if(null!=v.value.find((e=>"data-table-select"===e.key)))return u.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"}))
return t.createVNode(lc,t.mergeProps({tag:"th",class:[...k.value],colspan:p.value.length+1},a),{default:()=>[t.createVNode("div",{class:"v-data-table-header__content"},[t.createVNode(Bi,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:d.value,label:o("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:f.value,"onClick:append":()=>c(!u.value)},{...l,chip:e=>t.createVNode(Fn,{onClick:e.item.raw?.sortable?()=>n(e.item.raw):void 0,onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},{default:()=>[e.item.title,t.createVNode(Ul,{class:["v-data-table__td-sort-icon",i(e.item.raw)&&"v-data-table__td-sort-icon-active"],icon:h(e.item.raw),size:"small"},null)]})})])]})}
Rt((()=>w.value?t.createVNode("tr",null,[t.createVNode(N,null,null)]):t.createVNode(t.Fragment,null,[l.headers?l.headers(S.value):p.value.map(((e,a)=>t.createVNode("tr",null,[e.map(((e,l)=>t.createVNode(x,{column:e,x:l,y:a},null)))]))),e.loading&&t.createVNode("tr",{class:"v-data-table-progress"},[t.createVNode("th",{colspan:v.value.length},[t.createVNode(ao,{name:"v-data-table-progress",absolute:!0,active:!0,color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0},{default:l.loader})])])])))}}),Vc=st({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),wc=kt()({name:"VDataTableGroupHeaderRow",props:Vc(),setup(e,a){let{slots:l}=a
const{isGroupOpen:o,toggleGroup:n,extractRows:r}=xu(),{isSelected:i,isSomeSelected:s,select:u}=zu(),{columns:c}=hc(),d=t.computed((()=>r([e.item])))
return()=>t.createVNode("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map((a=>{if("data-table-group"===a.key){const a=o(e.item)?"$expand":"$next",r=()=>n(e.item)
return l["data-table-group"]?.({item:e.item,count:d.value.length,props:{icon:a,onClick:r}})??t.createVNode(lc,{class:"v-data-table-group-header-row__column"},{default:()=>[t.createVNode(Bo,{size:"small",variant:"text",icon:a,onClick:r},null),t.createVNode("span",null,[e.item.value]),t.createVNode("span",null,[t.createTextVNode("("),d.value.length,t.createTextVNode(")")])]})}if("data-table-select"===a.key){const e=i(d.value),a=s(d.value)&&!e,o=e=>u(d.value,e)
return l["data-table-select"]?.({props:{modelValue:e,indeterminate:a,"onUpdate:modelValue":o}})??t.createVNode("td",null,[t.createVNode(qo,{modelValue:e,indeterminate:a,"onUpdate:modelValue":o},null)])}return t.createVNode("td",null,null)}))])}}),Sc=st({index:Number,item:Object,cellProps:[Object,Function],onClick:Y(),onContextmenu:Y(),onDblclick:Y(),...hn()},"VDataTableRow"),kc=kt()({name:"VDataTableRow",props:Sc(),setup(e,a){let{slots:l}=a
const{displayClasses:o,mobile:n}=yn(e,"v-data-table__tr"),{isSelected:r,toggleSelect:i,someSelected:s,allSelected:u,selectAll:c}=zu(),{isExpanded:v,toggleExpand:p}=bu(),{toggleSort:f,sortBy:m,isSorted:g}=Yu(),{columns:h}=hc()
Rt((()=>t.createVNode("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},o.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&h.value.map(((a,o)=>{const h=e.item,y=`item.${a.key}`,b=`header.${a.key}`,V={index:e.index,item:h.raw,internalItem:h,value:d(h.columns,a.key),column:a,isSelected:r,toggleSelect:i,isExpanded:v,toggleExpand:p},w={column:a,selectAll:c,isSorted:g,toggleSort:f,sortBy:m.value,someSelected:s.value,allSelected:u.value,getSortIcon:()=>""},S="function"==typeof e.cellProps?e.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value,column:a}):e.cellProps,k="function"==typeof a.cellProps?a.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value}):a.cellProps
return t.createVNode(lc,t.mergeProps({align:a.align,class:{"v-data-table__td--expanded-row":"data-table-expand"===a.key,"v-data-table__td--select-row":"data-table-select"===a.key},fixed:a.fixed,fixedOffset:a.fixedOffset,lastFixed:a.lastFixed,maxWidth:n.value?void 0:a.maxWidth,noPadding:"data-table-select"===a.key||"data-table-expand"===a.key,nowrap:a.nowrap,width:n.value?void 0:a.width},S,k),{default:()=>{if(l[y]&&!n.value)return l[y]?.(V)
if("data-table-select"===a.key)return l["item.data-table-select"]?.(V)??t.createVNode(qo,{disabled:!h.selectable,modelValue:r([h]),onClick:t.withModifiers((()=>i(h)),["stop"])},null)
if("data-table-expand"===a.key)return l["item.data-table-expand"]?.(V)??t.createVNode(Bo,{icon:v(h)?"$collapse":"$expand",size:"small",variant:"text",onClick:t.withModifiers((()=>p(h)),["stop"])},null)
const e=t.toDisplayString(V.value)
return n.value?t.createVNode(t.Fragment,null,[t.createVNode("div",{class:"v-data-table__td-title"},[l[b]?.(w)??a.title]),t.createVNode("div",{class:"v-data-table__td-value"},[l[y]?.(V)??e])]):e}})}))])))}}),xc=st({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...hn()},"VDataTableRows"),Nc=kt()({name:"VDataTableRows",inheritAttrs:!1,props:xc(),setup(e,a){let{attrs:l,slots:o}=a
const{columns:n}=hc(),{expandOnClick:r,toggleExpand:i,isExpanded:s}=bu(),{isSelected:u,toggleSelect:c}=zu(),{toggleGroup:d,isGroupOpen:v}=xu(),{t:p}=va(),{mobile:f}=yn(e)
return Rt((()=>!e.loading||e.items.length&&!o.loading?e.loading||e.items.length||e.hideNoData?t.createVNode(t.Fragment,null,[e.items.map(((a,p)=>{if("group"===a.type){const e={index:p,item:a,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:u,toggleSelect:c,toggleGroup:d,isGroupOpen:v}
return o["group-header"]?o["group-header"](e):t.createVNode(wc,t.mergeProps({key:`group-header_${a.id}`,item:a},_t(l,":group-header",(()=>e))),o)}const m={index:p,item:a.raw,internalItem:a,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:u,toggleSelect:c},g={...m,props:t.mergeProps({key:`item_${a.key??a.index}`,onClick:r.value?()=>{i(a)}:void 0,index:p,item:a,cellProps:e.cellProps,mobile:f.value},_t(l,":row",(()=>m)),"function"==typeof e.rowProps?e.rowProps({item:m.item,index:m.index,internalItem:m.internalItem}):e.rowProps)}
return t.createVNode(t.Fragment,{key:g.props.key},[o.item?o.item(g):t.createVNode(kc,g.props,o),s(a)&&o["expanded-row"]?.(m)])}))]):t.createVNode("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[t.createVNode("td",{colspan:n.value.length},[o["no-data"]?.()??p(e.noDataText)])]):t.createVNode("tr",{class:"v-data-table-rows-loading",key:"loading"},[t.createVNode("td",{colspan:n.value.length},[o.loading?.()??p(e.loadingText)])]))),{}}}),Cc=st({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...ut(),...Nl(),...xa(),...ga()},"VTable"),_c=kt()({name:"VTable",props:Cc(),setup(e,a){let{slots:l,emit:o}=a
const{themeClasses:n}=ya(e),{densityClasses:r}=Cl(e)
return Rt((()=>t.createVNode(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!l.top,"v-table--has-bottom":!!l.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>[l.top?.(),l.default?t.createVNode("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[t.createVNode("table",null,[l.default()])]):l.wrapper?.(),l.bottom?.()]}))),{}}}),Ic=st({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items")
function Bc(e,t,a){return t.map(((t,l)=>function(e,t,a,l){const o=e.returnObject?t:v(t,e.itemValue),n=v(t,e.itemSelectable,!0),r=l.reduce(((e,a)=>(null!=a.key&&(e[a.key]=v(t,a.value)),e)),{})
return{type:"item",key:e.returnObject?v(t,e.itemValue):o,index:a,value:o,selectable:n,columns:r,raw:t}}(e,t,l,a)))}function Pc(e,a){return{items:t.computed((()=>Bc(e,e.items,a.value)))}}const Ac=st({...xc(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...gu(),...Vu(),...rc(),...Ic(),...Mu(),...ju(),...yc(),...Cc()},"DataTable"),Rc=st({...Pu(),...Ac(),...Ai(),...tc()},"VDataTable"),Tc=kt()({name:"VDataTable",props:Rc(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=Su(e),{sortBy:r,multiSort:i,mustSort:s}=Wu(e),{page:u,itemsPerPage:c}=Ru(e),{columns:d,headers:v,sortFunctions:p,sortRawFunctions:f,filterFunctions:m}=gc(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:g}=Pc(e,d),h=t.toRef(e,"search"),{filteredItems:y}=Ri(e,g,h,{transform:e=>e.columns,customKeyFilter:m}),{toggleSort:b}=Uu({sortBy:r,multiSort:i,mustSort:s,page:u}),{sortByWithGroups:V,opened:w,extractRows:S,isGroupOpen:k,toggleGroup:x}=ku({groupBy:n,sortBy:r}),{sortedItems:N}=Gu(e,y,V,{transform:e=>e.columns,sortFunctions:p,sortRawFunctions:f}),{flatItems:C}=Iu(N,n,w),_=t.computed((()=>C.value.length)),{startIndex:I,stopIndex:B,pageCount:P,setItemsPerPage:A}=Tu({page:u,itemsPerPage:c,itemsLength:_}),{paginatedItems:R}=Du({items:C,startIndex:I,stopIndex:B,itemsPerPage:c}),T=t.computed((()=>S(R.value))),{isSelected:D,select:E,selectAll:F,toggleSelect:$,someSelected:M,allSelected:O}=Lu(e,{allItems:g,currentPage:T}),{isExpanded:L,toggleExpand:z}=yu(e)
Bu({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:h}),bt({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const j=t.computed((()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:P.value,toggleSort:b,setItemsPerPage:A,someSelected:M.value,allSelected:O.value,isSelected:D,select:E,selectAll:F,toggleSelect:$,isExpanded:L,toggleExpand:z,isGroupOpen:k,toggleGroup:x,items:T.value.map((e=>e.raw)),internalItems:T.value,groupedItems:R.value,columns:d.value,headers:v.value})))
return Rt((()=>{const a=ac.filterProps(e),n=bc.filterProps(e),r=Nc.filterProps(e),i=_c.filterProps(e)
return t.createVNode(_c,t.mergeProps({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},i),{top:()=>o.top?.(j.value),default:()=>o.default?o.default(j.value):t.createVNode(t.Fragment,null,[o.colgroup?.(j.value),!e.hideDefaultHeader&&t.createVNode("thead",{key:"thead"},[t.createVNode(bc,n,o)]),o.thead?.(j.value),!e.hideDefaultBody&&t.createVNode("tbody",null,[o["body.prepend"]?.(j.value),o.body?o.body(j.value):t.createVNode(Nc,t.mergeProps(l,r,{items:R.value}),o),o["body.append"]?.(j.value)]),o.tbody?.(j.value),o.tfoot?.(j.value)]),bottom:()=>o.bottom?o.bottom(j.value):!e.hideDefaultFooter&&t.createVNode(t.Fragment,null,[t.createVNode(ur,null,null),t.createVNode(ac,a,{prepend:o["footer.prepend"]})])})})),{}}}),Dc=st({...Ac(),...Vu(),...Si(),...Ai()},"VDataTableVirtual"),Ec=kt()({name:"VDataTableVirtual",props:Dc(),emits:{"update:modelValue":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=Su(e),{sortBy:r,multiSort:i,mustSort:s}=Wu(e),{columns:u,headers:c,filterFunctions:d,sortFunctions:v,sortRawFunctions:p}=gc(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:m}=Pc(e,u),g=t.toRef(e,"search"),{filteredItems:h}=Ri(e,m,g,{transform:e=>e.columns,customKeyFilter:d}),{toggleSort:y}=Uu({sortBy:r,multiSort:i,mustSort:s}),{sortByWithGroups:b,opened:V,extractRows:w,isGroupOpen:S,toggleGroup:k}=ku({groupBy:n,sortBy:r}),{sortedItems:x}=Gu(e,h,b,{transform:e=>e.columns,sortFunctions:v,sortRawFunctions:p}),{flatItems:N}=Iu(x,n,V),C=t.computed((()=>w(N.value))),{isSelected:_,select:I,selectAll:B,toggleSelect:P,someSelected:A,allSelected:R}=Lu(e,{allItems:C,currentPage:C}),{isExpanded:T,toggleExpand:D}=yu(e),{containerRef:E,markerRef:F,paddingTop:$,paddingBottom:M,computedItems:O,handleItemResize:L,handleScroll:z,handleScrollend:j}=ki(e,N),H=t.computed((()=>O.value.map((e=>e.raw))))
Bu({sortBy:r,page:t.shallowRef(1),itemsPerPage:t.shallowRef(-1),groupBy:n,search:g}),bt({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const W=t.computed((()=>({sortBy:r.value,toggleSort:y,someSelected:A.value,allSelected:R.value,isSelected:_,select:I,selectAll:B,toggleSelect:P,isExpanded:T,toggleExpand:D,isGroupOpen:S,toggleGroup:k,items:C.value.map((e=>e.raw)),internalItems:C.value,groupedItems:N.value,columns:u.value,headers:c.value})))
Rt((()=>{const a=bc.filterProps(e),n=Nc.filterProps(e),r=_c.filterProps(e)
return t.createVNode(_c,t.mergeProps({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},r),{top:()=>o.top?.(W.value),wrapper:()=>t.createVNode("div",{ref:E,onScrollPassive:z,onScrollend:j,class:"v-table__wrapper",style:{height:f(e.height)}},[t.createVNode("table",null,[o.colgroup?.(W.value),!e.hideDefaultHeader&&t.createVNode("thead",{key:"thead"},[t.createVNode(bc,t.mergeProps(a,{sticky:e.fixedHeader}),o)]),!e.hideDefaultBody&&t.createVNode("tbody",null,[t.createVNode("tr",{ref:F,style:{height:f($.value),border:0}},[t.createVNode("td",{colspan:u.value.length,style:{height:0,border:0}},null)]),o["body.prepend"]?.(W.value),t.createVNode(Nc,t.mergeProps(l,n,{items:H.value}),{...o,item:e=>t.createVNode(wi,{key:e.internalItem.index,renderless:!0,"onUpdate:height":t=>L(e.internalItem.index,t)},{default:a=>{let{itemRef:l}=a
return o.item?.({...e,itemRef:l})??t.createVNode(kc,t.mergeProps(e.props,{ref:l,key:e.internalItem.index,index:e.internalItem.index}),o)}})}),o["body.append"]?.(W.value),t.createVNode("tr",{style:{height:f(M.value),border:0}},[t.createVNode("td",{colspan:u.value.length,style:{height:0,border:0}},null)])])])]),bottom:()=>o.bottom?.(W.value)})}))}}),Fc=st({itemsLength:{type:[Number,String],required:!0},...Pu(),...Ac(),...tc()},"VDataTableServer"),$c=kt()({name:"VDataTableServer",props:Fc(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=Su(e),{sortBy:r,multiSort:i,mustSort:s}=Wu(e),{page:u,itemsPerPage:c}=Ru(e),d=t.computed((()=>parseInt(e.itemsLength,10))),{columns:v,headers:p}=gc(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:f}=Pc(e,v),{toggleSort:m}=Uu({sortBy:r,multiSort:i,mustSort:s,page:u}),{opened:g,isGroupOpen:h,toggleGroup:y,extractRows:b}=ku({groupBy:n,sortBy:r}),{pageCount:V,setItemsPerPage:w}=Tu({page:u,itemsPerPage:c,itemsLength:d}),{flatItems:S}=Iu(f,n,g),{isSelected:k,select:x,selectAll:N,toggleSelect:C,someSelected:_,allSelected:I}=Lu(e,{allItems:f,currentPage:f}),{isExpanded:B,toggleExpand:P}=yu(e),A=t.computed((()=>b(f.value)))
Bu({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:t.toRef(e,"search")}),t.provide("v-data-table",{toggleSort:m,sortBy:r}),bt({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const R=t.computed((()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:V.value,toggleSort:m,setItemsPerPage:w,someSelected:_.value,allSelected:I.value,isSelected:k,select:x,selectAll:N,toggleSelect:C,isExpanded:B,toggleExpand:P,isGroupOpen:h,toggleGroup:y,items:A.value.map((e=>e.raw)),internalItems:A.value,groupedItems:S.value,columns:v.value,headers:p.value})))
Rt((()=>{const a=ac.filterProps(e),n=bc.filterProps(e),r=Nc.filterProps(e),i=_c.filterProps(e)
return t.createVNode(_c,t.mergeProps({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},i),{top:()=>o.top?.(R.value),default:()=>o.default?o.default(R.value):t.createVNode(t.Fragment,null,[o.colgroup?.(R.value),!e.hideDefaultHeader&&t.createVNode("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[t.createVNode(bc,t.mergeProps(n,{sticky:e.fixedHeader}),o)]),o.thead?.(R.value),!e.hideDefaultBody&&t.createVNode("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[o["body.prepend"]?.(R.value),o.body?o.body(R.value):t.createVNode(Nc,t.mergeProps(l,r,{items:S.value}),o),o["body.append"]?.(R.value)]),o.tbody?.(R.value),o.tfoot?.(R.value)]),bottom:()=>o.bottom?o.bottom(R.value):!e.hideDefaultFooter&&t.createVNode(t.Fragment,null,[t.createVNode(ur,null,null),t.createVNode(ac,a,{prepend:o["footer.prepend"]})])})}))}}),Mc=st({fluid:{type:Boolean,default:!1},...ut(),...xa()},"VContainer"),Oc=kt()({name:"VContainer",props:Mc(),setup(e,a){let{slots:l}=a
const{rtlClasses:o}=fa()
return Rt((()=>t.createVNode(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:e.style},l))),{}}}),Lc=cn.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),zc=cn.reduce(((e,a)=>(e["offset"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),jc=cn.reduce(((e,a)=>(e["order"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),Hc={col:Object.keys(Lc),offset:Object.keys(zc),order:Object.keys(jc)}
function Wc(e,t,a){let l=e
if(null!=a&&!1!==a){if(t){l+=`-${t.replace(e,"")}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==a&&!0!==a?(l+=`-${a}`,l.toLowerCase()):l.toLowerCase()}}const Uc=["auto","start","end","center","baseline","stretch"],Yc=st({cols:{type:[Boolean,String,Number],default:!1},...Lc,offset:{type:[String,Number],default:null},...zc,order:{type:[String,Number],default:null},...jc,alignSelf:{type:String,default:null,validator:e=>Uc.includes(e)},...ut(),...xa()},"VCol"),Gc=kt()({name:"VCol",props:Yc(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in Hc)Hc[a].forEach((l=>{const o=e[l],n=Wc(a,l,o)
n&&t.push(n)}))
const l=t.some((e=>e.startsWith("v-col-")))
return t.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}))
return()=>t.h(e.tag,{class:[o.value,e.class],style:e.style},l.default?.())}}),qc=["start","end","center"],Kc=["space-between","space-around","space-evenly"]
function Xc(e,a){return cn.reduce(((l,o)=>(l[e+t.capitalize(o)]=a(),l)),{})}const Zc=[...qc,"baseline","stretch"],Qc=e=>Zc.includes(e),Jc=Xc("align",(()=>({type:String,default:null,validator:Qc}))),ed=[...qc,...Kc],td=e=>ed.includes(e),ad=Xc("justify",(()=>({type:String,default:null,validator:td}))),ld=[...qc,...Kc,"stretch"],od=e=>ld.includes(e),nd=Xc("alignContent",(()=>({type:String,default:null,validator:od}))),rd={align:Object.keys(Jc),justify:Object.keys(ad),alignContent:Object.keys(nd)},id={align:"align",justify:"justify",alignContent:"align-content"}
function sd(e,t,a){let l=id[e]
if(null!=a){if(t){l+=`-${t.replace(e,"")}`}return l+=`-${a}`,l.toLowerCase()}}const ud=st({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Qc},...Jc,justify:{type:String,default:null,validator:td},...ad,alignContent:{type:String,default:null,validator:od},...nd,...ut(),...xa()},"VRow"),cd=kt()({name:"VRow",props:ud(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in rd)rd[a].forEach((l=>{const o=e[l],n=sd(a,l,o)
n&&t.push(n)}))
return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}))
return()=>t.h(e.tag,{class:["v-row",o.value,e.class],style:e.style},l.default?.())}}),dd=xt("v-spacer","div","VSpacer"),vd=st({active:{type:[String,Array],default:void 0},disabled:{type:[Boolean,String,Array],default:!1},nextIcon:{type:[String],default:"$next"},prevIcon:{type:[String],default:"$prev"},modeIcon:{type:[String],default:"$subgroup"},text:String,viewMode:{type:String,default:"month"}},"VDatePickerControls"),pd=kt()({name:"VDatePickerControls",props:vd(),emits:{"click:year":()=>!0,"click:month":()=>!0,"click:prev":()=>!0,"click:next":()=>!0,"click:text":()=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("text"):!!e.disabled)),n=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("mode"):!!e.disabled)),r=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("prev"):!!e.disabled)),i=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("next"):!!e.disabled))
function s(){l("click:prev")}function u(){l("click:next")}function c(){l("click:year")}function d(){l("click:month")}return Rt((()=>t.createVNode("div",{class:["v-date-picker-controls"]},[t.createVNode(Bo,{class:"v-date-picker-controls__month-btn",disabled:o.value,text:e.text,variant:"text",rounded:!0,onClick:d},null),t.createVNode(Bo,{key:"mode-btn",class:"v-date-picker-controls__mode-btn",disabled:n.value,density:"comfortable",icon:e.modeIcon,variant:"text",onClick:c},null),t.createVNode(dd,{key:"mode-spacer"},null),t.createVNode("div",{key:"month-buttons",class:"v-date-picker-controls__month"},[t.createVNode(Bo,{disabled:r.value,icon:e.prevIcon,variant:"text",onClick:s},null),t.createVNode(Bo,{disabled:i.value,icon:e.nextIcon,variant:"text",onClick:u},null)])]))),{}}}),fd=st({appendIcon:String,color:String,header:String,transition:String,onClick:Y()},"VDatePickerHeader"),md=kt()({name:"VDatePickerHeader",props:fd(),emits:{click:()=>!0,"click:append":()=>!0},setup(e,a){let{emit:l,slots:o}=a
const{backgroundColorClasses:n,backgroundColorStyles:r}=ol(e,"color")
function i(){l("click")}function s(){l("click:append")}return Rt((()=>{const a=!(!o.default&&!e.header),l=!(!o.append&&!e.appendIcon)
return t.createVNode("div",{class:["v-date-picker-header",{"v-date-picker-header--clickable":!!e.onClick},n.value],style:r.value,onClick:i},[o.prepend&&t.createVNode("div",{key:"prepend",class:"v-date-picker-header__prepend"},[o.prepend()]),a&&t.createVNode(sl,{key:"content",name:e.transition},{default:()=>[t.createVNode("div",{key:e.header,class:"v-date-picker-header__content"},[o.default?.()??e.header])]}),l&&t.createVNode("div",{class:"v-date-picker-header__append"},[o.append?t.createVNode(Za,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VBtn:{icon:e.appendIcon,variant:"text"}}},{default:()=>[o.append?.()]}):t.createVNode(Bo,{key:"append-btn",icon:e.appendIcon,variant:"text",onClick:s},null)])])})),{}}}),gd=st({allowedDates:[Array,Function],disabled:Boolean,displayValue:null,modelValue:Array,month:[Number,String],max:null,min:null,showAdjacentMonths:Boolean,year:[Number,String],weekdays:{type:Array,default:()=>[0,1,2,3,4,5,6]},weeksInMonth:{type:String,default:"dynamic"}},"calendar")
function hd(e){const a=pu(),l=aa(e,"modelValue",[],(e=>P(e))),o=t.computed((()=>e.displayValue?a.date(e.displayValue):l.value.length>0?a.date(l.value[0]):e.min?a.date(e.min):Array.isArray(e.allowedDates)?a.date(e.allowedDates[0]):a.date())),n=aa(e,"year",void 0,(e=>{const t=null!=e?Number(e):a.getYear(o.value)
return a.startOfYear(a.setYear(a.date(),t))}),(e=>a.getYear(e))),r=aa(e,"month",void 0,(e=>{const t=null!=e?Number(e):a.getMonth(o.value),l=a.setYear(a.startOfMonth(a.date()),a.getYear(n.value))
return a.setMonth(l,t)}),(e=>a.getMonth(e))),i=t.computed((()=>{const t=a.getWeekArray(r.value),l=t.flat()
if("static"===e.weeksInMonth&&l.length<42){const e=l[l.length-1]
let o=[]
for(let n=1;n<=42-l.length;n++)o.push(a.addDays(e,n)),n%7==0&&(t.push(o),o=[])}return t}))
function s(t,o){return t.filter((t=>e.weekdays.includes(a.toJsDate(t).getDay()))).map(((t,n)=>{const i=a.toISO(t),s=!a.isSameMonth(t,r.value),u=a.isSameDay(t,a.startOfMonth(r.value)),c=a.isSameDay(t,a.endOfMonth(r.value)),d=a.isSameDay(t,r.value)
return{date:t,isoDate:i,formatted:a.format(t,"keyboardDate"),year:a.getYear(t),month:a.getMonth(t),isDisabled:v(t),isWeekStart:n%7==0,isWeekEnd:n%7==6,isToday:a.isSameDay(t,o),isAdjacent:s,isHidden:s&&!e.showAdjacentMonths,isStart:u,isSelected:l.value.some((e=>a.isSameDay(t,e))),isEnd:c,isSame:d,localized:a.format(t,"dayOfMonth")}}))}const u=t.computed((()=>{const e=a.startOfWeek(o.value),t=[]
for(let l=0;l<=6;l++)t.push(a.addDays(e,l))
return s(t,a.date())})),c=t.computed((()=>s(i.value.flat(),a.date()))),d=t.computed((()=>i.value.map((e=>e.length?function(e,t){const a=e.toJsDate(t)
let l=a.getFullYear(),o=new Date(l,0,1)
if(a<o)l-=1,o=new Date(l,0,1)
else{const e=new Date(l+1,0,1)
a>=e&&(l+=1,o=e)}const n=Math.abs(a.getTime()-o.getTime()),r=Math.ceil(n/864e5)
return Math.floor(r/7)+1}(a,e[0]):null))))
function v(t){if(e.disabled)return!0
const l=a.date(t)
return!(!e.min||!a.isAfter(a.date(e.min),l))||(!(!e.max||!a.isAfter(l,a.date(e.max)))||(Array.isArray(e.allowedDates)&&e.allowedDates.length>0?!e.allowedDates.some((e=>a.isSameDay(a.date(e),l))):"function"==typeof e.allowedDates&&!e.allowedDates(l)))}return{displayValue:o,daysInMonth:c,daysInWeek:u,genDays:s,model:l,weeksInMonth:i,weekNumbers:d}}const yd=st({color:String,hideWeekdays:Boolean,multiple:[Boolean,Number,String],showWeek:Boolean,transition:{type:String,default:"picker-transition"},reverseTransition:{type:String,default:"picker-reverse-transition"},...gd()},"VDatePickerMonth"),bd=kt()({name:"VDatePickerMonth",props:yd(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=t.ref(),{daysInMonth:r,model:i,weekNumbers:s}=hd(e),u=pu(),c=t.shallowRef(),d=t.shallowRef(),v=t.shallowRef(!1),p=t.computed((()=>v.value?e.reverseTransition:e.transition))
"range"===e.multiple&&i.value.length>0&&(c.value=i.value[0],i.value.length>1&&(d.value=i.value[i.value.length-1]))
const f=t.computed((()=>{const t=["number","string"].includes(typeof e.multiple)?Number(e.multiple):1/0
return i.value.length>=t}))
function m(t){"range"===e.multiple?function(e){const t=u.startOfDay(e)
if(0===i.value.length&&(c.value=void 0),c.value)if(d.value)c.value=e,d.value=void 0,i.value=[c.value]
else{if(u.isSameDay(t,c.value))return c.value=void 0,void(i.value=[])
u.isBefore(t,c.value)?(d.value=u.endOfDay(c.value),c.value=t):d.value=u.endOfDay(t)
const e=u.getDiff(d.value,c.value,"days"),a=[c.value]
for(let t=1;t<e;t++){const e=u.addDays(c.value,t)
a.push(e)}a.push(d.value),i.value=a}else c.value=t,i.value=[c.value]}(t):e.multiple?function(e){const t=i.value.findIndex((t=>u.isSameDay(t,e)))
if(-1===t)i.value=[...i.value,e]
else{const e=[...i.value]
e.splice(t,1),i.value=e}}(t):i.value=[t]}return t.watch(r,((e,t)=>{t&&(v.value=u.isBefore(e[0].date,t[0].date))})),()=>t.createVNode("div",{class:"v-date-picker-month"},[e.showWeek&&t.createVNode("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!e.hideWeekdays&&t.createVNode("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[t.createTextVNode(" ")]),s.value.map((e=>t.createVNode("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[e])))]),t.createVNode(sl,{name:p.value},{default:()=>[t.createVNode("div",{ref:n,key:r.value[0].date?.toString(),class:"v-date-picker-month__days"},[!e.hideWeekdays&&u.getWeekdays().map((e=>t.createVNode("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[e]))),r.value.map(((a,l)=>{const n={props:{onClick:()=>m(a.date)},item:a,i:l}
return f.value&&!a.isSelected&&(a.isDisabled=!0),t.createVNode("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":a.isAdjacent,"v-date-picker-month__day--hide-adjacent":a.isHidden,"v-date-picker-month__day--selected":a.isSelected,"v-date-picker-month__day--week-end":a.isWeekEnd,"v-date-picker-month__day--week-start":a.isWeekStart}],"data-v-date":a.isDisabled?void 0:a.isoDate},[(e.showAdjacentMonths||!a.isAdjacent)&&t.createVNode(Za,{defaults:{VBtn:{class:"v-date-picker-month__day-btn",color:!a.isSelected&&!a.isToday||a.isDisabled?void 0:e.color,disabled:a.isDisabled,icon:!0,ripple:!1,text:a.localized,variant:a.isDisabled?a.isToday?"outlined":"text":a.isToday&&!a.isSelected?"outlined":"flat",onClick:()=>m(a.date)}}},{default:()=>[o.day?.(n)??t.createVNode(Bo,n.props,null)]})])}))])]})])}}),Vd=st({color:String,height:[String,Number],min:null,max:null,modelValue:Number,year:Number},"VDatePickerMonths"),wd=kt()({name:"VDatePickerMonths",props:Vd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=pu(),r=aa(e,"modelValue"),i=t.computed((()=>{let t=n.startOfYear(n.date())
return e.year&&(t=n.setYear(t,e.year)),p(12).map((a=>{const l=n.format(t,"monthShort"),o=!!(e.min&&n.isAfter(n.startOfMonth(n.date(e.min)),t)||e.max&&n.isAfter(t,n.startOfMonth(n.date(e.max))))
return t=n.getNextMonth(t),{isDisabled:o,text:l,value:a}}))}))
return t.watchEffect((()=>{r.value=r.value??n.getMonth(n.date())})),Rt((()=>t.createVNode("div",{class:"v-date-picker-months",style:{height:f(e.height)}},[t.createVNode("div",{class:"v-date-picker-months__content"},[i.value.map(((a,n)=>{const i={active:r.value===n,color:r.value===n?e.color:void 0,disabled:a.isDisabled,rounded:!0,text:a.text,variant:r.value===a.value?"flat":"text",onClick:()=>function(e){if(r.value===e)return void l("update:modelValue",r.value)
r.value=e}(n)}
return o.month?.({month:a,i:n,props:i})??t.createVNode(Bo,t.mergeProps({key:"month"},i),null)}))])]))),{}}}),Sd=st({color:String,height:[String,Number],min:null,max:null,modelValue:Number},"VDatePickerYears"),kd=kt()({name:"VDatePickerYears",props:Sd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=pu(),r=aa(e,"modelValue"),i=t.computed((()=>{const t=n.getYear(n.date())
let a=t-100,l=t+52
e.min&&(a=n.getYear(n.date(e.min))),e.max&&(l=n.getYear(n.date(e.max)))
let o=n.startOfYear(n.date())
return o=n.setYear(o,a),p(l-a+1,a).map((e=>{const t=n.format(o,"year")
return o=n.setYear(o,n.getYear(o)+1),{text:t,value:e}}))}))
t.watchEffect((()=>{r.value=r.value??n.getYear(n.date())}))
const s=le()
return t.onMounted((async()=>{await t.nextTick(),s.el?.scrollIntoView({block:"center"})})),Rt((()=>t.createVNode("div",{class:"v-date-picker-years",style:{height:f(e.height)}},[t.createVNode("div",{class:"v-date-picker-years__content"},[i.value.map(((a,n)=>{const i={ref:r.value===a.value?s:void 0,active:r.value===a.value,color:r.value===a.value?e.color:void 0,rounded:!0,text:a.text,variant:r.value===a.value?"flat":"text",onClick:()=>{r.value!==a.value?r.value=a.value:l("update:modelValue",r.value)}}
return o.year?.({year:a,i:n,props:i})??t.createVNode(Bo,t.mergeProps({key:"month"},i),null)}))])]))),{}}}),xd=xt("v-picker-title"),Nd=st({bgColor:String,landscape:Boolean,title:String,hideHeader:Boolean,...Gs()},"VPicker"),Cd=kt()({name:"VPicker",props:Nd(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=ol(t.toRef(e,"color"))
return Rt((()=>{const a=qs.filterProps(e),r=!(!e.title&&!l.title)
return t.createVNode(qs,t.mergeProps(a,{color:e.bgColor,class:["v-picker",{"v-picker--landscape":e.landscape,"v-picker--with-actions":!!l.actions},e.class],style:e.style}),{default:()=>[!e.hideHeader&&t.createVNode("div",{key:"header",class:[o.value],style:[n.value]},[r&&t.createVNode(xd,{key:"picker-title"},{default:()=>[l.title?.()??e.title]}),l.header&&t.createVNode("div",{class:"v-picker__header"},[l.header()])]),t.createVNode("div",{class:"v-picker__body"},[l.default?.()]),l.actions&&t.createVNode(Za,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[t.createVNode("div",{class:"v-picker__actions"},[l.actions()])]})]})})),{}}}),_d=st({header:{type:String,default:"$vuetify.datePicker.header"},...vd(),...yd({weeksInMonth:"static"}),...k(Vd(),["modelValue"]),...k(Sd(),["modelValue"]),...Nd({title:"$vuetify.datePicker.title"}),modelValue:null},"VDatePicker"),Id=kt()({name:"VDatePicker",props:_d(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0,"update:viewMode":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=pu(),{t:r}=va(),i=aa(e,"modelValue",void 0,(e=>P(e)),(t=>e.multiple?t:t[0])),s=aa(e,"viewMode"),u=t.computed((()=>{const e=n.date(i.value?.[0])
return e&&n.isValid(e)?e:n.date()})),c=t.ref(Number(e.month??n.getMonth(n.startOfMonth(u.value)))),d=t.ref(Number(e.year??n.getYear(n.startOfYear(n.setMonth(u.value,c.value))))),v=t.shallowRef(!1),p=t.computed((()=>e.multiple&&i.value.length>1?r("$vuetify.datePicker.itemsSelected",i.value.length):i.value[0]&&n.isValid(i.value[0])?n.format(n.date(i.value[0]),"normalDateWithWeekday"):r(e.header))),f=t.computed((()=>{let e=n.date()
return e=n.setDate(e,1),e=n.setMonth(e,c.value),e=n.setYear(e,d.value),n.format(e,"monthAndYear")})),m=t.computed((()=>`date-picker-header${v.value?"-reverse":""}-transition`)),g=t.computed((()=>{const t=n.date(e.min)
return e.min&&n.isValid(t)?t:null})),h=t.computed((()=>{const t=n.date(e.max)
return e.max&&n.isValid(t)?t:null})),y=t.computed((()=>{if(e.disabled)return!0
const t=[]
if("month"!==s.value)t.push("prev","next")
else{let e=n.date()
if(e=n.setYear(e,d.value),e=n.setMonth(e,c.value),g.value){const a=n.addDays(n.startOfMonth(e),-1)
n.isAfter(g.value,a)&&t.push("prev")}if(h.value){const a=n.addDays(n.endOfMonth(e),1)
n.isAfter(a,h.value)&&t.push("next")}}return t}))
function b(){c.value<11?c.value++:(d.value++,c.value=0,C(d.value)),N(c.value)}function V(){c.value>0?c.value--:(d.value--,c.value=11,C(d.value)),N(c.value)}function w(){s.value="month"}function S(){s.value="months"===s.value?"month":"months"}function x(){s.value="year"===s.value?"month":"year"}function N(e){"months"===s.value&&S(),l("update:month",e)}function C(e){"year"===s.value&&x(),l("update:year",e)}return t.watch(i,((e,t)=>{const a=P(t),l=P(e)
if(!l.length)return
const o=n.date(a[a.length-1]),r=n.date(l[l.length-1]),i=n.getMonth(r),s=n.getYear(r)
i!==c.value&&(c.value=i,N(c.value)),s!==d.value&&(d.value=s,C(d.value)),v.value=n.isBefore(o,r)})),Rt((()=>{const a=Cd.filterProps(e),l=pd.filterProps(e),n=md.filterProps(e),u=bd.filterProps(e),v=k(wd.filterProps(e),["modelValue"]),_=k(kd.filterProps(e),["modelValue"]),I={header:p.value,transition:m.value}
return t.createVNode(Cd,t.mergeProps(a,{class:["v-date-picker",`v-date-picker--${s.value}`,{"v-date-picker--show-week":e.showWeek},e.class],style:e.style}),{title:()=>o.title?.()??t.createVNode("div",{class:"v-date-picker__title"},[r(e.title)]),header:()=>o.header?t.createVNode(Za,{defaults:{VDatePickerHeader:{...I}}},{default:()=>[o.header?.(I)]}):t.createVNode(md,t.mergeProps({key:"header"},n,I,{onClick:"month"!==s.value?w:void 0}),{...o,default:void 0}),default:()=>t.createVNode(t.Fragment,null,[t.createVNode(pd,t.mergeProps(l,{disabled:y.value,text:f.value,"onClick:next":b,"onClick:prev":V,"onClick:month":S,"onClick:year":x}),null),t.createVNode(Ma,{hideOnLeave:!0},{default:()=>["months"===s.value?t.createVNode(wd,t.mergeProps({key:"date-picker-months"},v,{modelValue:c.value,"onUpdate:modelValue":[e=>c.value=e,N],min:g.value,max:h.value,year:d.value}),null):"year"===s.value?t.createVNode(kd,t.mergeProps({key:"date-picker-years"},_,{modelValue:d.value,"onUpdate:modelValue":[e=>d.value=e,C],min:g.value,max:h.value}),null):t.createVNode(bd,t.mergeProps({key:"date-picker-month"},u,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,month:c.value,"onUpdate:month":[e=>c.value=e,N],year:d.value,"onUpdate:year":[e=>d.value=e,C],min:g.value,max:h.value}),null)]})]),actions:o.actions})})),{}}}),Bd=st({actionText:String,bgColor:String,color:String,icon:Tt,image:String,justify:{type:String,default:"center"},headline:String,title:String,text:String,textWidth:{type:[Number,String],default:500},href:String,to:String,...ut(),...Qa(),...jl({size:void 0}),...ga()},"VEmptyState"),Pd=kt()({name:"VEmptyState",props:Bd(),emits:{"click:action":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const{themeClasses:n}=ya(e),{backgroundColorClasses:r,backgroundColorStyles:i}=ol(t.toRef(e,"bgColor")),{dimensionStyles:s}=Ja(e),{displayClasses:u}=yn()
function c(e){l("click:action",e)}return Rt((()=>{const a=!(!o.actions&&!e.actionText),l=!(!o.headline&&!e.headline),d=!(!o.title&&!e.title),v=!(!o.text&&!e.text),p=!!(o.media||e.image||e.icon),m=e.size||(e.image?200:96)
return t.createVNode("div",{class:["v-empty-state",{[`v-empty-state--${e.justify}`]:!0},n.value,r.value,u.value,e.class],style:[i.value,s.value,e.style]},[p&&t.createVNode("div",{key:"media",class:"v-empty-state__media"},[o.media?t.createVNode(Za,{key:"media-defaults",defaults:{VImg:{src:e.image,height:m},VIcon:{size:m,icon:e.icon}}},{default:()=>[o.media()]}):t.createVNode(t.Fragment,null,[e.image?t.createVNode(vl,{key:"image",src:e.image,height:m},null):e.icon?t.createVNode(Ul,{key:"icon",color:e.color,size:m,icon:e.icon},null):void 0])]),l&&t.createVNode("div",{key:"headline",class:"v-empty-state__headline"},[o.headline?.()??e.headline]),d&&t.createVNode("div",{key:"title",class:"v-empty-state__title"},[o.title?.()??e.title]),v&&t.createVNode("div",{key:"text",class:"v-empty-state__text",style:{maxWidth:f(e.textWidth)}},[o.text?.()??e.text]),o.default&&t.createVNode("div",{key:"content",class:"v-empty-state__content"},[o.default()]),a&&t.createVNode("div",{key:"actions",class:"v-empty-state__actions"},[t.createVNode(Za,{defaults:{VBtn:{class:"v-empty-state__action-btn",color:e.color??"surface-variant",text:e.actionText}}},{default:()=>[o.actions?.({props:{onClick:c}})??t.createVNode(Bo,{onClick:c},null)]})])])})),{}}}),Ad=Symbol.for("vuetify:v-expansion-panel"),Rd=st({...ut(),...Ur()},"VExpansionPanelText"),Td=kt()({name:"VExpansionPanelText",props:Rd(),setup(e,a){let{slots:l}=a
const o=t.inject(Ad)
if(!o)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel")
const{hasContent:n,onAfterLeave:r}=Yr(e,o.isSelected)
return Rt((()=>t.createVNode(qa,{onAfterLeave:r},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&n.value&&t.createVNode("div",{class:"v-expansion-panel-text__wrapper"},[l.default?.()])]),[[t.vShow,o.isSelected.value]])]}))),{}}}),Dd=st({color:String,expandIcon:{type:Tt,default:"$expand"},collapseIcon:{type:Tt,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...ut()},"VExpansionPanelTitle"),Ed=kt()({name:"VExpansionPanelTitle",directives:{Ripple:_o},props:Dd(),setup(e,a){let{slots:l}=a
const o=t.inject(Ad)
if(!o)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel")
const{backgroundColorClasses:n,backgroundColorStyles:r}=ol(e,"color"),i=t.computed((()=>({collapseIcon:e.collapseIcon,disabled:o.disabled.value,expanded:o.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}))),s=t.computed((()=>o.isSelected.value?e.collapseIcon:e.expandIcon))
return Rt((()=>t.withDirectives(t.createVNode("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":o.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[r.value,e.style],type:"button",tabindex:o.disabled.value?-1:void 0,disabled:o.disabled.value,"aria-expanded":o.isSelected.value,onClick:e.readonly?void 0:o.toggle},[t.createVNode("span",{class:"v-expansion-panel-title__overlay"},null),l.default?.(i.value),!e.hideActions&&t.createVNode(Za,{defaults:{VIcon:{icon:s.value}}},{default:()=>[t.createVNode("span",{class:"v-expansion-panel-title__icon"},[l.actions?.(i.value)??t.createVNode(Ul,null,null)])]})]),[[t.resolveDirective("ripple"),e.ripple]]))),{}}}),Fd=st({title:String,text:String,bgColor:String,...ml(),...Dl(),...nl(),...xa(),...Dd(),...Rd()},"VExpansionPanel"),$d=kt()({name:"VExpansionPanel",props:Fd(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=El(e,Ad),{backgroundColorClasses:n,backgroundColorStyles:r}=ol(e,"bgColor"),{elevationClasses:i}=gl(e),{roundedClasses:s}=rl(e),u=t.computed((()=>o?.disabled.value||e.disabled)),c=t.computed((()=>o.group.items.value.reduce(((e,t,a)=>(o.group.selected.value.includes(t.id)&&e.push(a),e)),[]))),d=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==1))})),v=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==-1))}))
return t.provide(Ad,o),Rt((()=>{const a=!(!l.text&&!e.text),c=!(!l.title&&!e.title),p=Ed.filterProps(e),f=Td.filterProps(e)
return t.createVNode(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":o.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":u.value},s.value,n.value,e.class],style:[r.value,e.style]},{default:()=>[t.createVNode("div",{class:["v-expansion-panel__shadow",...i.value]},null),t.createVNode(Za,{defaults:{VExpansionPanelTitle:{...p},VExpansionPanelText:{...f}}},{default:()=>[c&&t.createVNode(Ed,{key:"title"},{default:()=>[l.title?l.title():e.title]}),a&&t.createVNode(Td,{key:"text"},{default:()=>[l.text?l.text():e.text]}),l.default?.()]})]})})),{groupItem:o}}}),Md=["default","accordion","inset","popout"],Od=st({flat:Boolean,...Tl(),...Fd(),...ga(),variant:{type:String,default:"default",validator:e=>Md.includes(e)}},"VExpansionPanels"),Ld=kt()({name:"VExpansionPanels",props:Od(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{next:o,prev:n}=Fl(e,Ad),{themeClasses:r}=ya(e),i=t.computed((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`))
return bt({VExpansionPanel:{bgColor:t.toRef(e,"bgColor"),collapseIcon:t.toRef(e,"collapseIcon"),color:t.toRef(e,"color"),eager:t.toRef(e,"eager"),elevation:t.toRef(e,"elevation"),expandIcon:t.toRef(e,"expandIcon"),focusable:t.toRef(e,"focusable"),hideActions:t.toRef(e,"hideActions"),readonly:t.toRef(e,"readonly"),ripple:t.toRef(e,"ripple"),rounded:t.toRef(e,"rounded"),static:t.toRef(e,"static")}}),Rt((()=>t.createVNode(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},r.value,i.value,e.class],style:e.style},{default:()=>[l.default?.({prev:n,next:o})]}))),{next:o,prev:n}}}),zd=st({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,offset:Boolean,modelValue:{type:Boolean,default:!0},...k(Io({active:!0}),["location"]),...Zt(),...Xl(),...il({transition:"fab-transition"})},"VFab"),jd=kt()({name:"VFab",props:zd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),n=t.shallowRef(56),r=t.ref(),{resizeRef:i}=Gt((e=>{e.length&&(n.value=e[0].target.clientHeight)})),s=t.computed((()=>e.app||e.absolute)),u=t.computed((()=>!!s.value&&(e.location?.split(" ").shift()??"bottom"))),c=t.computed((()=>!!s.value&&(e.location?.split(" ")[1]??"end")))
ta((()=>e.app),(()=>{const a=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:u,layoutSize:t.computed((()=>e.layout?n.value+24:0)),elementSize:t.computed((()=>n.value+24)),active:t.computed((()=>e.app&&o.value)),absolute:t.toRef(e,"absolute")})
t.watchEffect((()=>{r.value=a.layoutItemStyles.value}))}))
const d=t.ref()
return Rt((()=>{const a=Bo.filterProps(e)
return t.createVNode("div",{ref:d,class:["v-fab",{"v-fab--absolute":e.absolute,"v-fab--app":!!e.app,"v-fab--extended":e.extended,"v-fab--offset":e.offset,[`v-fab--${u.value}`]:s.value,[`v-fab--${c.value}`]:s.value},e.class],style:[e.app?{...r.value}:{height:"inherit",width:void 0},e.style]},[t.createVNode("div",{class:"v-fab__container"},[t.createVNode(sl,{appear:e.appear,transition:e.transition},{default:()=>[t.withDirectives(t.createVNode(Bo,t.mergeProps({ref:i},a,{active:void 0,location:void 0}),l),[[t.vShow,e.active]])]})])])})),{}}}),Hd=st({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>"boolean"==typeof e||[1e3,1024].includes(Number(e))},...nn({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>P(e).every((e=>null!=e&&"object"==typeof e))},...fi({clearable:!0})},"VFileInput"),Wd=kt()({name:"VFileInput",inheritAttrs:!1,props:Hd(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=va(),i=aa(e,"modelValue",e.modelValue,(e=>P(e)),(t=>e.multiple||Array.isArray(e.modelValue)?t:t[0]??null)),{isFocused:s,focus:u,blur:c}=Jo(e),d=t.computed((()=>"boolean"!=typeof e.showSize?e.showSize:void 0)),v=t.computed((()=>(i.value??[]).reduce(((e,t)=>{let{size:a=0}=t
return e+a}),0))),p=t.computed((()=>E(v.value,d.value))),f=t.computed((()=>(i.value??[]).map((t=>{const{name:a="",size:l=0}=t
return e.showSize?`${a} (${E(l,d.value)})`:a})))),m=t.computed((()=>{const t=i.value?.length??0
return e.showSize?r(e.counterSizeString,t,p.value):r(e.counterString,t)})),g=t.ref(),h=t.ref(),y=t.ref(),b=t.computed((()=>s.value||e.active)),V=t.computed((()=>["plain","underlined"].includes(e.variant)))
function w(){y.value!==document.activeElement&&y.value?.focus(),s.value||u()}function S(e){y.value?.click()}function k(e){o("mousedown:control",e)}function x(e){y.value?.click(),o("click:control",e)}function N(a){a.stopPropagation(),w(),t.nextTick((()=>{i.value=[],q(e["onClick:clear"],a)}))}return t.watch(i,(e=>{(!Array.isArray(e)||!e.length)&&y.value&&(y.value.value="")})),Rt((()=>{const a=!(!n.counter&&!e.counter),o=!(!a&&!n.details),[r,u]=B(l),{modelValue:d,...C}=rn.filterProps(e),_=gi(e)
return t.createVNode(rn,t.mergeProps({ref:g,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":V.value},e.class],style:e.style,"onClick:prepend":S},r,C,{centerAffix:!V.value,focused:s.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:r,isReadonly:d,isValid:m}=a
return t.createVNode(mi,t.mergeProps({ref:h,"prepend-icon":e.prependIcon,onMousedown:k,onClick:x,"onClick:clear":N,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:l.value,active:b.value||r.value,dirty:r.value||e.dirty,disabled:o.value,focused:s.value,error:!1===m.value}),{...n,default:a=>{let{props:{class:l,...r}}=a
return t.createVNode(t.Fragment,null,[t.createVNode("input",t.mergeProps({ref:y,type:"file",readonly:d.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),d.value&&e.preventDefault(),w()},onChange:e=>{if(!e.target)return
const t=e.target
i.value=[...t.files??[]]},onFocus:w,onBlur:c},r,u),null),t.createVNode("div",{class:l},[!!i.value?.length&&!e.hideInput&&(n.selection?n.selection({fileNames:f.value,totalBytes:v.value,totalBytesReadable:p.value}):e.chips?f.value.map((e=>t.createVNode(Fn,{key:e,size:"small",text:e},null))):f.value.join(", "))])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(ci,{active:!!i.value?.length,value:m.value,disabled:e.disabled},n.counter)])]):void 0})})),ri({},g,h,y)}}),Ud=st({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...pl(),...ut(),...ml(),...Zt(),...nl(),...xa({tag:"footer"}),...ga()},"VFooter"),Yd=kt()({name:"VFooter",props:Ud(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{backgroundColorClasses:n,backgroundColorStyles:r}=ol(t.toRef(e,"color")),{borderClasses:i}=fl(e),{elevationClasses:s}=gl(e),{roundedClasses:u}=rl(e),c=t.shallowRef(32),{resizeRef:d}=Gt((e=>{e.length&&(c.value=e[0].target.clientHeight)})),v=t.computed((()=>"auto"===e.height?c.value:parseInt(e.height,10))),{layoutItemStyles:p,layoutIsReady:m}=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:v,elementSize:t.computed((()=>"auto"===e.height?void 0:v.value)),active:t.computed((()=>e.app)),absolute:t.toRef(e,"absolute")})
return Rt((()=>t.createVNode(e.tag,{ref:d,class:["v-footer",o.value,n.value,i.value,s.value,u.value,e.class],style:[r.value,e.app?p.value:{height:f(e.height)},e.style]},l))),e.app?m:{}}}),Gd=st({...ut(),...tn()},"VForm"),qd=kt()({name:"VForm",props:Gd(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=function(e){const a=aa(e,"modelValue"),l=t.computed((()=>e.disabled)),o=t.computed((()=>e.readonly)),n=t.shallowRef(!1),r=t.ref([]),i=t.ref([])
return t.watch(r,(()=>{let e=0,t=0
const l=[]
for(const a of r.value)!1===a.isValid?(t++,l.push({id:a.id,errorMessages:a.errorMessages})):!0===a.isValid&&e++
i.value=l,a.value=!(t>0)&&(e===r.value.length||null)}),{deep:!0,flush:"post"}),t.provide(en,{register:e=>{let{id:a,vm:l,validate:o,reset:n,resetValidation:i}=e
r.value.some((e=>e.id===a))&&Ie(`Duplicate input name "${a}"`),r.value.push({id:a,validate:o,reset:n,resetValidation:i,vm:t.markRaw(l),isValid:null,errorMessages:[]})},unregister:e=>{r.value=r.value.filter((t=>t.id!==e))},update:(e,t,a)=>{const l=r.value.find((t=>t.id===e))
l&&(l.isValid=t,l.errorMessages=a)},isDisabled:l,isReadonly:o,isValidating:n,isValid:a,items:r,validateOn:t.toRef(e,"validateOn")}),{errors:i,isDisabled:l,isReadonly:o,isValidating:n,isValid:a,items:r,validate:async function(){const t=[]
let a=!0
i.value=[],n.value=!0
for(const l of r.value){const o=await l.validate()
if(o.length>0&&(a=!1,t.push({id:l.id,errorMessages:o})),!a&&e.fastFail)break}return i.value=t,n.value=!1,{valid:a,errors:i.value}},reset:function(){r.value.forEach((e=>e.reset()))},resetValidation:function(){r.value.forEach((e=>e.resetValidation()))}}}(e),r=t.ref()
function i(e){e.preventDefault(),n.reset()}function s(e){const t=e,a=n.validate()
t.then=a.then.bind(a),t.catch=a.catch.bind(a),t.finally=a.finally.bind(a),o("submit",t),t.defaultPrevented||a.then((e=>{let{valid:t}=e
t&&r.value?.submit()})),t.preventDefault()}return Rt((()=>t.createVNode("form",{ref:r,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:s},[l.default?.(n)]))),ri(n,r)}}),Kd=st({disabled:Boolean,modelValue:{type:Boolean,default:null},...Or()},"VHover"),Xd=kt()({name:"VHover",props:Kd(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=aa(e,"modelValue"),{runOpenDelay:o,runCloseDelay:n}=Lr(e,(t=>!e.disabled&&(l.value=t)))
return()=>a.default?.({isHovering:l.value,props:{onMouseenter:o,onMouseleave:n}})}}),Zd=st({color:String,direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},side:{type:String,default:"end",validator:e=>["start","end","both"].includes(e)},mode:{type:String,default:"intersect",validator:e=>["intersect","manual"].includes(e)},margin:[Number,String],loadMoreText:{type:String,default:"$vuetify.infiniteScroll.loadMore"},emptyText:{type:String,default:"$vuetify.infiniteScroll.empty"},...Qa(),...xa()},"VInfiniteScroll"),Qd=St({name:"VInfiniteScrollIntersect",props:{side:{type:String,required:!0},rootRef:null,rootMargin:String},emits:{intersect:(e,t)=>!0},setup(e,a){let{emit:l}=a
const{intersectionRef:o,isIntersecting:n}=Yl((e=>{}),e.rootMargin?{rootMargin:e.rootMargin}:void 0)
return t.watch(n,(async t=>{l("intersect",e.side,t)})),Rt((()=>t.createVNode("div",{class:"v-infinite-scroll-intersect",ref:o},[t.createTextVNode(" ")]))),{}}}),Jd=kt()({name:"VInfiniteScroll",props:Zd(),emits:{load:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.shallowRef("ok"),i=t.shallowRef("ok"),s=t.computed((()=>f(e.margin))),u=t.shallowRef(!1)
function c(t){if(!n.value)return
const a="vertical"===e.direction?"scrollTop":"scrollLeft"
n.value[a]=t}function d(){if(!n.value)return 0
const t="vertical"===e.direction?"scrollHeight":"scrollWidth"
return n.value[t]}function v(e,t){"start"===e?r.value=t:"end"===e&&(i.value=t)}t.onMounted((()=>{n.value&&("start"===e.side?c(d()):"both"===e.side&&c(d()/2-function(){if(!n.value)return 0
const t="vertical"===e.direction?"clientHeight":"clientWidth"
return n.value[t]}()/2))}))
let p=0
function m(e,t){u.value=t,u.value&&g(e)}function g(a){if("manual"!==e.mode&&!u.value)return
const l=function(e){return"start"===e?r.value:i.value}(a)
n.value&&!["empty","loading"].includes(l)&&(p=d(),v(a,"loading"),o("load",{side:a,done:function(l){v(a,l),t.nextTick((()=>{"empty"!==l&&"error"!==l&&("ok"===l&&"start"===a&&c(d()-p+function(){if(!n.value)return 0
const t="vertical"===e.direction?"scrollTop":"scrollLeft"
return n.value[t]}()),"manual"!==e.mode&&t.nextTick((()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{g(a)}))}))}))})))}))}}))}const{t:h}=va()
function y(a,o){if(e.side!==a&&"both"!==e.side)return
const n=()=>g(a),r={side:a,props:{onClick:n,color:e.color}}
return"error"===o?l.error?.(r):"empty"===o?l.empty?.(r)??t.createVNode("div",null,[h(e.emptyText)]):"manual"===e.mode?"loading"===o?l.loading?.(r)??t.createVNode(ql,{indeterminate:!0,color:e.color},null):l["load-more"]?.(r)??t.createVNode(Bo,{variant:"outlined",color:e.color,onClick:n},{default:()=>[h(e.loadMoreText)]}):l.loading?.(r)??t.createVNode(ql,{indeterminate:!0,color:e.color},null)}const{dimensionStyles:b}=Ja(e)
Rt((()=>{const a=e.tag,o="start"===e.side||"both"===e.side,u="end"===e.side||"both"===e.side,c="intersect"===e.mode
return t.createVNode(a,{ref:n,class:["v-infinite-scroll",`v-infinite-scroll--${e.direction}`,{"v-infinite-scroll--start":o,"v-infinite-scroll--end":u}],style:b.value},{default:()=>[t.createVNode("div",{class:"v-infinite-scroll__side"},[y("start",r.value)]),n.value&&o&&c&&t.createVNode(Qd,{key:"start",side:"start",onIntersect:m,rootRef:n.value,rootMargin:s.value},null),l.default?.(),n.value&&u&&c&&t.createVNode(Qd,{key:"end",side:"end",onIntersect:m,rootRef:n.value,rootMargin:s.value},null),t.createVNode("div",{class:"v-infinite-scroll__side"},[y("end",i.value)])]})}))}}),ev=Symbol.for("vuetify:v-item-group"),tv=st({...ut(),...Tl({selectedClass:"v-item--selected"}),...xa(),...ga()},"VItemGroup"),av=kt()({name:"VItemGroup",props:tv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=Fl(e,ev)
return()=>t.createVNode(e.tag,{class:["v-item-group",o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]})}}),lv=kt()({name:"VItem",props:Dl(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const{isSelected:l,select:o,toggle:n,selectedClass:r,value:i,disabled:s}=El(e,ev)
return()=>a.default?.({isSelected:l.value,selectedClass:r.value,select:o,toggle:n,value:i.value,disabled:s.value})}}),ov=xt("v-kbd"),nv=st({...ut(),...Qa(),...Xt()},"VLayout"),rv=kt()({name:"VLayout",props:nv(),setup(e,a){let{slots:l}=a
const{layoutClasses:o,layoutStyles:n,getLayoutItem:r,items:i,layoutRef:s}=ea(e),{dimensionStyles:u}=Ja(e)
return Rt((()=>t.createVNode("div",{ref:s,class:[o.value,e.class],style:[u.value,n.value,e.style]},[t.createVNode(t.Suspense,null,{default:()=>[t.createVNode(t.Fragment,null,[l.default?.()])]})]))),{getLayoutItem:r,items:i}}}),iv=st({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...ut(),...Zt()},"VLayoutItem"),sv=kt()({name:"VLayoutItem",props:iv(),setup(e,a){let{slots:l}=a
const{layoutItemStyles:o,layoutIsReady:n}=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"position"),elementSize:t.toRef(e,"size"),layoutSize:t.toRef(e,"size"),active:t.toRef(e,"modelValue"),absolute:t.toRef(e,"absolute")})
return Rt((()=>t.createVNode("div",{class:["v-layout-item",e.class],style:[o.value,e.style]},[l.default?.()]))),n}}),uv=st({modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...ut(),...Qa(),...xa(),...il({transition:"fade-transition"})},"VLazy"),cv=kt()({name:"VLazy",directives:{intersect:cl},props:uv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=Ja(e),n=aa(e,"modelValue")
function r(e){n.value||(n.value=e)}return Rt((()=>t.withDirectives(t.createVNode(e.tag,{class:["v-lazy",e.class],style:[o.value,e.style]},{default:()=>[n.value&&t.createVNode(sl,{transition:e.transition,appear:!0},{default:()=>[l.default?.()]})]}),[[t.resolveDirective("intersect"),{handler:r,options:e.options},null]]))),{}}}),dv=st({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...ut()},"VLocaleProvider"),vv=kt()({name:"VLocaleProvider",props:dv(),setup(e,a){let{slots:l}=a
const{rtlClasses:o}=pa(e)
return Rt((()=>t.createVNode("div",{class:["v-locale-provider",o.value,e.class],style:e.style},[l.default?.()]))),{}}}),pv=st({scrollable:Boolean,...ut(),...Qa(),...xa({tag:"main"})},"VMain"),fv=kt()({name:"VMain",props:pv(),setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=Ja(e),{mainStyles:n,layoutIsReady:r}=Qt(),{ssrBootStyles:i}=wl()
return Rt((()=>t.createVNode(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,i.value,o.value,e.style]},{default:()=>[e.scrollable?t.createVNode("div",{class:"v-main__scroller"},[l.default?.()]):l.default?.()]}))),r}})
function mv(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function gv(e){if(e.length<2)return 0
if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t)
let t=0
for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue
const l=mv(t),o=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t)
t+=(o-l)*Math.abs(o),a===e.length-1&&(t*=.5)}return 1e3*mv(t)}function hv(){const e={}
return{addMovement:function(t){Array.from(t.changedTouches).forEach((a=>{(e[a.identifier]??(e[a.identifier]=new j(20))).push([t.timeStamp,a])}))},endTouch:function(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))},getVelocity:function(t){const a=e[t]?.values().reverse()
if(!a)throw new Error(`No samples for touch id ${t}`)
const l=a[0],o=[],n=[]
for(const e of a){if(l[0]-e[0]>100)break
o.push({t:e[0],d:e[1].clientX}),n.push({t:e[0],d:e[1].clientY})}return{x:gv(o),y:gv(n),get direction(){const{x:e,y:t}=this,[a,l]=[Math.abs(e),Math.abs(t)]
return a>l&&e>=0?"right":a>l&&e<=0?"left":l>a&&t>=0?"down":l>a&&t<=0?"up":function(){throw new Error}()}}}}}function yv(){throw new Error}const bv=["start","end","left","right","top","bottom"],Vv=st({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>bv.includes(e)},sticky:Boolean,...pl(),...ut(),...Or(),...hn({mobile:null}),...ml(),...Zt(),...nl(),...xa({tag:"nav"}),...ga()},"VNavigationDrawer"),wv=kt()({name:"VNavigationDrawer",props:Vv(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{isRtl:r}=fa(),{themeClasses:i}=ya(e),{borderClasses:s}=fl(e),{backgroundColorClasses:u,backgroundColorStyles:c}=ol(t.toRef(e,"color")),{elevationClasses:d}=gl(e),{displayClasses:v,mobile:p}=yn(e),{roundedClasses:m}=rl(e),g=ro(),h=aa(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:y}=wl(),{scopeId:b}=Gr(),V=t.ref(),w=t.shallowRef(!1),{runOpenDelay:S,runCloseDelay:k}=Lr(e,(e=>{w.value=e})),x=t.computed((()=>e.rail&&e.expandOnHover&&w.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),N=t.computed((()=>ie(e.location,r.value))),C=t.computed((()=>e.persistent)),_=t.computed((()=>!e.permanent&&(p.value||e.temporary))),I=t.computed((()=>e.sticky&&!_.value&&"bottom"!==N.value))
ta((()=>e.expandOnHover&&null!=e.rail),(()=>{t.watch(w,(e=>o("update:rail",!e)))})),ta((()=>!e.disableResizeWatcher),(()=>{t.watch(_,(a=>!e.permanent&&t.nextTick((()=>h.value=!a))))})),ta((()=>!e.disableRouteWatcher&&!!g),(()=>{t.watch(g.currentRoute,(()=>_.value&&(h.value=!1)))})),t.watch((()=>e.permanent),(e=>{e&&(h.value=!0)})),null!=e.modelValue||_.value||(h.value=e.permanent||!p.value)
const{isDragging:B,dragProgress:P}=function(e){let{el:a,isActive:l,isTemporary:o,width:n,touchless:r,position:i}=e
t.onMounted((()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",w,{passive:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",w)}))
const s=t.computed((()=>["left","right"].includes(i.value))),{addMovement:u,endTouch:c,getVelocity:d}=hv()
let v=!1
const p=t.shallowRef(!1),f=t.shallowRef(0),m=t.shallowRef(0)
let g
function h(e,t){return("left"===i.value?e:"right"===i.value?document.documentElement.clientWidth-e:"top"===i.value?e:"bottom"===i.value?document.documentElement.clientHeight-e:yv())-(t?n.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a="left"===i.value?(e-m.value)/n.value:"right"===i.value?(document.documentElement.clientWidth-e-m.value)/n.value:"top"===i.value?(e-m.value)/n.value:"bottom"===i.value?(document.documentElement.clientHeight-e-m.value)/n.value:yv()
return t?Math.max(0,Math.min(1,a)):a}function b(e){if(r.value)return
const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,d="left"===i.value?t<25:"right"===i.value?t>document.documentElement.clientWidth-25:"top"===i.value?a<25:"bottom"===i.value?a>document.documentElement.clientHeight-25:yv(),p=l.value&&("left"===i.value?t<n.value:"right"===i.value?t>document.documentElement.clientWidth-n.value:"top"===i.value?a<n.value:"bottom"===i.value?a>document.documentElement.clientHeight-n.value:yv());(d||p||l.value&&o.value)&&(g=[t,a],m.value=h(s.value?t:a,l.value),f.value=y(s.value?t:a),v=m.value>-20&&m.value<80,c(e),u(e))}function V(e){const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY
if(v){if(!e.cancelable)return void(v=!1)
const l=Math.abs(t-g[0]),o=Math.abs(a-g[1]);(s.value?l>o&&l>3:o>l&&o>3)?(p.value=!0,v=!1):(s.value?o:l)>3&&(v=!1)}if(!p.value)return
e.preventDefault(),u(e)
const l=y(s.value?t:a,!1)
f.value=Math.max(0,Math.min(1,l)),l>1?m.value=h(s.value?t:a,!0):l<0&&(m.value=h(s.value?t:a,!1))}function w(e){if(v=!1,!p.value)return
u(e),p.value=!1
const t=d(e.changedTouches[0].identifier),a=Math.abs(t.x),o=Math.abs(t.y),n=s.value?a>o&&a>400:o>a&&o>3
l.value=n?t.direction===({left:"right",right:"left",top:"down",bottom:"up"}[i.value]||yv()):f.value>.5}const S=t.computed((()=>p.value?{transform:"left"===i.value?`translateX(calc(-100% + ${f.value*n.value}px))`:"right"===i.value?`translateX(calc(100% - ${f.value*n.value}px))`:"top"===i.value?`translateY(calc(-100% + ${f.value*n.value}px))`:"bottom"===i.value?`translateY(calc(100% - ${f.value*n.value}px))`:yv(),transition:"none"}:void 0))
return ta(p,(()=>{const e=a.value?.style.transform??null,l=a.value?.style.transition??null
t.watchEffect((()=>{a.value?.style.setProperty("transform",S.value?.transform||"none"),a.value?.style.setProperty("transition",S.value?.transition||null)})),t.onScopeDispose((()=>{a.value?.style.setProperty("transform",e),a.value?.style.setProperty("transition",l)}))})),{isDragging:p,dragProgress:f,dragStyles:S}}({el:V,isActive:h,isTemporary:_,width:x,touchless:t.toRef(e,"touchless"),position:N}),A=t.computed((()=>{const t=_.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value
return B.value?t*P.value:t})),R=t.computed((()=>["top","bottom"].includes(e.location)?0:x.value)),{layoutItemStyles:T,layoutItemScrimStyles:D,layoutIsReady:E}=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:N,layoutSize:A,elementSize:R,active:t.computed((()=>h.value||B.value)),disableTransitions:t.computed((()=>B.value)),absolute:t.computed((()=>e.absolute||I.value&&"string"!=typeof F.value))}),{isStuck:F,stickyStyles:$}=function(e){let{rootEl:a,isSticky:l,layoutItemStyles:o}=e
const n=t.shallowRef(!1),r=t.shallowRef(0),i=t.computed((()=>{const e="boolean"==typeof n.value?"top":n.value
return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[e]:f(r.value)}:{top:o.value.top}]}))
t.onMounted((()=>{t.watch(l,(e=>{e?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)}),{immediate:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("scroll",u)}))
let s=0
function u(){const e=s>window.scrollY?"up":"down",t=a.value.getBoundingClientRect(),l=parseFloat(o.value.top??0),i=window.scrollY-Math.max(0,r.value-l),u=t.height+Math.max(r.value,l)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(a.value).getPropertyValue("--v-body-scroll-y"))||0
t.height<window.innerHeight-l?(n.value="top",r.value=l):"up"===e&&"bottom"===n.value||"down"===e&&"top"===n.value?(r.value=window.scrollY+t.top-c,n.value=!0):"down"===e&&u<=0?(r.value=0,n.value="bottom"):"up"===e&&i<=0&&(c?"top"!==n.value&&(r.value=-i+c+l,n.value="top"):(r.value=t.top+i,n.value="top")),s=window.scrollY}return{isStuck:n,stickyStyles:i}}({rootEl:V,isSticky:I,layoutItemStyles:T}),M=ol(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),O=t.computed((()=>({...B.value?{opacity:.2*P.value,transition:"none"}:void 0,...D.value})))
return bt({VList:{bgColor:"transparent"}}),Rt((()=>{const a=n.image||e.image
return t.createVNode(t.Fragment,null,[t.createVNode(e.tag,t.mergeProps({ref:V,onMouseenter:S,onMouseleave:k,class:["v-navigation-drawer",`v-navigation-drawer--${N.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":w.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":_.value,"v-navigation-drawer--persistent":C.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":I.value},i.value,u.value,s.value,v.value,d.value,m.value,e.class],style:[c.value,T.value,y.value,$.value,e.style,["top","bottom"].includes(N.value)?{height:"auto"}:{}]},b,l),{default:()=>[a&&t.createVNode("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?t.createVNode(Za,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},n.image):t.createVNode(vl,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),n.prepend&&t.createVNode("div",{class:"v-navigation-drawer__prepend"},[n.prepend?.()]),t.createVNode("div",{class:"v-navigation-drawer__content"},[n.default?.()]),n.append&&t.createVNode("div",{class:"v-navigation-drawer__append"},[n.append?.()])]}),t.createVNode(t.Transition,{name:"fade-transition"},{default:()=>[_.value&&(B.value||h.value)&&!!e.scrim&&t.createVNode("div",t.mergeProps({class:["v-navigation-drawer__scrim",M.backgroundColorClasses.value],style:[O.value,M.backgroundColorStyles.value],onClick:()=>{C.value||(h.value=!1)}},b),null)]})])})),E.then((()=>({isStuck:F})))}}),Sv=St({name:"VNoSsr",setup(e,t){let{slots:a}=t
const l=Wr()
return()=>l.value&&a.default?.()}}),kv=st({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...Qa(),...Qo(),...x(fi({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),xv=kt()({name:"VOtpInput",props:kv(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{dimensionStyles:r}=Ja(e),{isFocused:i,focus:s,blur:u}=Jo(e),c=aa(e,"modelValue","",(e=>null==e?[]:String(e).split("")),(e=>e.join(""))),{t:d}=va(),v=t.computed((()=>Number(e.length))),p=t.computed((()=>Array(v.value).fill(0))),f=t.ref(-1),m=t.ref(),g=t.ref([]),h=t.computed((()=>g.value[f.value]))
function y(){if(w(h.value.value))return void(h.value.value="")
const e=c.value.slice(),t=h.value.value
e[f.value]=t
let a=null
f.value>c.value.length?a=c.value.length+1:f.value+1!==v.value&&(a="next"),c.value=e,a&&Z(m.value,a)}function b(e){const t=c.value.slice(),a=f.value
let l=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),"ArrowLeft"===e.key?l="prev":"ArrowRight"===e.key?l="next":["Backspace","Delete"].includes(e.key)&&(t[f.value]="",c.value=t,f.value>0&&"Backspace"===e.key?l="prev":requestAnimationFrame((()=>{g.value[a]?.select()}))),requestAnimationFrame((()=>{null!=l&&Z(m.value,l)})))}function V(){u(),f.value=-1}function w(t){return"number"===e.type&&/[^0-9]/g.test(t)}return bt({VField:{color:t.computed((()=>e.color)),bgColor:t.computed((()=>e.color)),baseColor:t.computed((()=>e.baseColor)),disabled:t.computed((()=>e.disabled)),error:t.computed((()=>e.error)),variant:t.computed((()=>e.variant))}},{scoped:!0}),t.watch(c,(e=>{e.length===v.value&&o("finish",e.join(""))}),{deep:!0}),t.watch(f,(e=>{e<0||t.nextTick((()=>{g.value[e]?.select()}))})),Rt((()=>{const[a,o]=B(l)
return t.createVNode("div",t.mergeProps({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},a),[t.createVNode("div",{ref:m,class:"v-otp-input__content",style:[r.value]},[p.value.map(((a,l)=>t.createVNode(t.Fragment,null,[e.divider&&0!==l&&t.createVNode("span",{class:"v-otp-input__divider"},[e.divider]),t.createVNode(mi,{focused:i.value&&e.focusAll||f.value===l,key:l},{...n,loader:void 0,default:()=>t.createVNode("input",{ref:e=>g.value[l]=e,"aria-label":d(e.label,l+1),autofocus:0===l&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:e.disabled,inputmode:"number"===e.type?"numeric":"text",min:"number"===e.type?0:void 0,maxlength:"1",placeholder:e.placeholder,type:"number"===e.type?"text":e.type,value:c.value[l],onInput:y,onFocus:e=>function(e,t){s(),f.value=t}(0,l),onBlur:V,onKeydown:b,onPaste:e=>function(e,t){t.preventDefault(),t.stopPropagation()
const a=t?.clipboardData?.getData("Text")??""
w(a)||(c.value=a.split(""),g.value?.[e].blur())}(l,e)},null)})]))),t.createVNode("input",t.mergeProps({class:"v-otp-input-input",type:"hidden"},o,{value:c.value.join("")}),null),t.createVNode(li,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>[n.loader?.()??t.createVNode(ql,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}),n.default?.()])])})),{blur:()=>{g.value?.some((e=>e.blur()))},focus:()=>{g.value?.[0].focus()},reset:function(){c.value=[]},isFocused:i}}})
const Nv=st({scale:{type:[Number,String],default:.5},...ut()},"VParallax"),Cv=kt()({name:"VParallax",props:Nv(),setup(e,a){let{slots:l}=a
const{intersectionRef:o,isIntersecting:n}=Yl(),{resizeRef:r,contentRect:i}=Gt(),{height:s}=yn(),u=t.ref()
let c
t.watchEffect((()=>{o.value=r.value=u.value?.$el})),t.watch(n,(e=>{e?(c=It(o.value),c=c===document.scrollingElement?document:c,c.addEventListener("scroll",p,{passive:!0}),p()):c.removeEventListener("scroll",p)})),t.onBeforeUnmount((()=>{c?.removeEventListener("scroll",p)})),t.watch(s,p),t.watch((()=>i.value?.height),p)
const d=t.computed((()=>1-A(+e.scale)))
let v=-1
function p(){n.value&&(cancelAnimationFrame(v),v=requestAnimationFrame((()=>{const e=u.value?.$el.querySelector(".v-img__img")
if(!e)return
const t=c instanceof Document?document.documentElement.clientHeight:c.clientHeight,a=c instanceof Document?window.scrollY:c.scrollTop,l=o.value.getBoundingClientRect().top+a,n=i.value.height,r=(s=(a-(l+(n-t)/2))*d.value,Math.floor(Math.abs(s))*Math.sign(s))
var s
const v=Math.max(1,(d.value*(t-n)+n)/n)
e.style.setProperty("transform",`translateY(${r}px) scale(${v})`)})))}return Rt((()=>t.createVNode(vl,{class:["v-parallax",{"v-parallax--active":n.value},e.class],style:e.style,ref:u,cover:!0,onLoadstart:p,onLoad:p},l))),{}}}),_v=st({...Uo({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Iv=kt()({name:"VRadio",props:_v(),setup(e,a){let{slots:l}=a
return Rt((()=>t.createVNode(Yo,t.mergeProps(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),l))),{}}}),Bv=st({height:{type:[Number,String],default:"auto"},...nn(),...k(jo(),["multiple"]),trueIcon:{type:Tt,default:"$radioOn"},falseIcon:{type:Tt,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Pv=kt()({name:"VRadioGroup",inheritAttrs:!1,props:Bv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=ft(),r=t.computed((()=>e.id||`radio-group-${n}`)),i=aa(e,"modelValue")
return Rt((()=>{const[a,n]=B(l),s=rn.filterProps(e),u=Yo.filterProps(e),c=o.label?o.label({label:e.label,props:{for:r.value}}):e.label
return t.createVNode(rn,t.mergeProps({class:["v-radio-group",e.class],style:e.style},a,s,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,id:r.value}),{...o,default:a=>{let{id:l,messagesId:r,isDisabled:s,isReadonly:d}=a
return t.createVNode(t.Fragment,null,[c&&t.createVNode(Lo,{id:l.value},{default:()=>[c]}),t.createVNode(Wo,t.mergeProps(u,{id:l.value,"aria-describedby":r.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:s.value,readonly:d.value,"aria-labelledby":c?l.value:void 0,multiple:!1},n,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e}),o)])}})})),{}}}),Av=st({...Qo(),...nn(),...Es(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),Rv=kt()({name:"VRangeSlider",props:Av(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.ref(),i=t.ref(),{rtlClasses:s}=fa()
const u=Fs(e),c=aa(e,"modelValue",void 0,(e=>e?.length?e.map((e=>u.roundValue(e))):[0,0])),{activeThumbRef:d,hasLabels:v,max:p,min:f,mousePressed:m,onSliderMousedown:g,onSliderTouchstart:h,position:y,trackContainerRef:b,readonly:V}=$s({props:e,steps:u,onSliderStart:()=>{o("start",c.value)},onSliderEnd:t=>{let{value:a}=t
const l=d.value===n.value?.$el?[a,c.value[1]]:[c.value[0],a]
!e.strict&&l[0]<l[1]&&(c.value=l),o("end",c.value)},onSliderMove:t=>{let{value:a}=t
const[l,o]=c.value
e.strict||l!==o||l===f.value||(d.value=a>l?r.value?.$el:n.value?.$el,d.value?.focus()),d.value===n.value?.$el?c.value=[Math.min(a,o),o]:c.value=[l,Math.max(l,a)]},getActiveThumb:function(t){if(!n.value||!r.value)return
const a=Ds(t,n.value.$el,e.direction),l=Ds(t,r.value.$el,e.direction),o=Math.abs(a),i=Math.abs(l)
return o<i||o===i&&a<0?n.value.$el:r.value.$el}}),{isFocused:w,focus:S,blur:k}=Jo(e),x=t.computed((()=>y(c.value[0]))),N=t.computed((()=>y(c.value[1])))
return Rt((()=>{const a=rn.filterProps(e),o=!!(e.label||l.label||l.prepend)
return t.createVNode(rn,t.mergeProps({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||v.value,"v-slider--focused":w.value,"v-slider--pressed":m.value,"v-slider--disabled":e.disabled},s.value,e.class],style:e.style,ref:i},a,{focused:w.value}),{...l,prepend:o?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??(e.label?t.createVNode(Lo,{class:"v-slider__label",text:e.label},null):void 0),l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:i}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:V.value?void 0:g,onTouchstartPassive:V.value?void 0:h},[t.createVNode("input",{id:`${o.value}_start`,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value[0]},null),t.createVNode("input",{id:`${o.value}_stop`,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value[1]},null),t.createVNode(zs,{ref:b,start:x.value,stop:N.value},{"tick-label":l["tick-label"]}),t.createVNode(Os,{ref:n,"aria-describedby":i.value,focused:w&&d.value===n.value?.$el,modelValue:c.value[0],"onUpdate:modelValue":e=>c.value=[e,c.value[1]],onFocus:e=>{S(),d.value=n.value?.$el,c.value[0]===c.value[1]&&c.value[1]===f.value&&e.relatedTarget!==r.value?.$el&&(n.value?.$el.blur(),r.value?.$el.focus())},onBlur:()=>{k(),d.value=void 0},min:f.value,max:c.value[1],position:x.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]}),t.createVNode(Os,{ref:r,"aria-describedby":i.value,focused:w&&d.value===r.value?.$el,modelValue:c.value[1],"onUpdate:modelValue":e=>c.value=[c.value[0],e],onFocus:e=>{S(),d.value=r.value?.$el,c.value[0]===c.value[1]&&c.value[0]===p.value&&e.relatedTarget!==n.value?.$el&&(r.value?.$el.blur(),n.value?.$el.focus())},onBlur:()=>{k(),d.value=void 0},min:c.value[0],max:p.value,position:N.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})})),{}}}),Tv=st({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:Tt,default:"$ratingEmpty"},fullIcon:{type:Tt,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...ut(),...Nl(),...jl(),...xa(),...ga()},"VRating"),Dv=kt()({name:"VRating",props:Tv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{t:o}=va(),{themeClasses:n}=ya(e),r=aa(e,"modelValue"),i=t.computed((()=>A(parseFloat(r.value),0,+e.length))),s=t.computed((()=>p(Number(e.length),1))),u=t.computed((()=>s.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),c=t.shallowRef(-1),d=t.computed((()=>u.value.map((t=>{const a=e.hover&&c.value>-1,l=i.value>=t,o=c.value>=t,n=(a?o:l)?e.fullIcon:e.emptyIcon,r=e.activeColor??e.color
return{isFilled:l,isHovered:o,icon:n,color:l||o?r:e.color}})))),v=t.computed((()=>[0,...u.value].map((t=>({onMouseenter:e.hover?function(){c.value=t}:void 0,onMouseleave:e.hover?function(){c.value=-1}:void 0,onClick:function(){e.disabled||e.readonly||(r.value=i.value===t&&e.clearable?0:t)}}))))),f=t.computed((()=>e.name??`v-rating-${ft()}`))
function m(a){let{value:n,index:r,showStar:s=!0}=a
const{onMouseenter:u,onMouseleave:c,onClick:p}=v.value[r+1],m=`${f.value}-${String(n).replace(".","-")}`,g={color:d.value[r]?.color,density:e.density,disabled:e.disabled,icon:d.value[r]?.icon,ripple:e.ripple,size:e.size,variant:"plain"}
return t.createVNode(t.Fragment,null,[t.createVNode("label",{for:m,class:{"v-rating__item--half":e.halfIncrements&&n%1>0,"v-rating__item--full":e.halfIncrements&&n%1==0},onMouseenter:u,onMouseleave:c,onClick:p},[t.createVNode("span",{class:"v-rating__hidden"},[o(e.itemAriaLabel,n,e.length)]),s?l.item?l.item({...d.value[r],props:g,value:n,index:r,rating:i.value}):t.createVNode(Bo,t.mergeProps({"aria-label":o(e.itemAriaLabel,n,e.length)},g),null):void 0]),t.createVNode("input",{class:"v-rating__hidden",name:f.value,id:m,type:"radio",value:n,checked:i.value===n,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function g(e){return l["item-label"]?l["item-label"](e):e.label?t.createVNode("span",null,[e.label]):t.createVNode("span",null,[t.createTextVNode(" ")])}return Rt((()=>{const a=!!e.itemLabels?.length||l["item-label"]
return t.createVNode(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},n.value,e.class],style:e.style},{default:()=>[t.createVNode(m,{value:0,index:-1,showStar:!1},null),s.value.map(((l,o)=>t.createVNode("div",{class:"v-rating__wrapper"},[a&&"top"===e.itemLabelPosition?g({value:l,index:o,label:e.itemLabels?.[o]}):void 0,t.createVNode("div",{class:"v-rating__item"},[e.halfIncrements?t.createVNode(t.Fragment,null,[t.createVNode(m,{value:l-.5,index:2*o},null),t.createVNode(m,{value:l,index:2*o+1},null)]):t.createVNode(m,{value:l,index:o},null)]),a&&"bottom"===e.itemLabelPosition?g({value:l,index:o,label:e.itemLabels?.[o]}):void 0])))]})})),{}}}),Ev={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"}
function Fv(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return t.createVNode("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[a])}function $v(e){const[t,a]=e.split("@")
return Array.from({length:a}).map((()=>Mv(t)))}function Mv(e){let t=[]
if(!e)return t
const a=Ev[e]
if(e===a);else{if(e.includes(","))return Ov(e)
if(e.includes("@"))return $v(e)
a.includes(",")?t=Ov(a):a.includes("@")?t=$v(a):a&&t.push(Mv(a))}return[Fv(e,t)]}function Ov(e){return e.replace(/\s/g,"").split(",").map(Mv)}const Lv=st({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...Qa(),...ml(),...ga()},"VSkeletonLoader"),zv=kt()({name:"VSkeletonLoader",props:Lv(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=ol(t.toRef(e,"color")),{dimensionStyles:r}=Ja(e),{elevationClasses:i}=gl(e),{themeClasses:s}=ya(e),{t:u}=va(),c=t.computed((()=>Mv(P(e.type).join(","))))
return Rt((()=>{const a=!l.default||e.loading
return t.createVNode("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},s.value,o.value,i.value],style:[n.value,a?r.value:{}],"aria-busy":e.boilerplate?void 0:a,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:u(e.loadingText),role:e.boilerplate?void 0:"alert"},[a?c.value:l.default?.()])})),{}}}),jv=kt()({name:"VSlideGroupItem",props:Dl(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const l=El(e,Bn)
return()=>a.default?.({isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}})
const Hv=st({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Xl({location:"bottom"}),...oo(),...nl(),...Bl(),...ga(),...k(ai({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Wv=kt()({name:"VSnackbar",props:Hv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),{positionClasses:n}=no(e),{scopeId:r}=Gr(),{themeClasses:i}=ya(e),{colorClasses:s,colorStyles:u,variantClasses:c}=Pl(e),{roundedClasses:d}=rl(e),v=function(e){const a=t.shallowRef(e)
let l=-1
function o(){clearInterval(l)}return t.onScopeDispose(o),{clear:o,time:a,start:function(t){const n=t?getComputedStyle(t):{transitionDuration:.2},r=1e3*parseFloat(n.transitionDuration)||200
if(o(),a.value<=0)return
const i=performance.now()
l=window.setInterval((()=>{const t=performance.now()-i+r
a.value=Math.max(e-t,0),a.value<=0&&o()}),r)},reset:function(){o(),t.nextTick((()=>a.value=e))}}}(Number(e.timeout)),p=t.ref(),f=t.ref(),m=t.shallowRef(!1),h=t.shallowRef(0),y=t.ref(),b=t.inject(qt,void 0)
ta((()=>!!b),(()=>{const e=Qt()
t.watchEffect((()=>{y.value=e.mainStyles.value}))})),t.watch(o,w),t.watch((()=>e.timeout),w),t.onMounted((()=>{o.value&&w()}))
let V=-1
function w(){v.reset(),window.clearTimeout(V)
const t=Number(e.timeout)
if(!o.value||-1===t)return
const a=g(f.value)
v.start(a),V=window.setTimeout((()=>{o.value=!1}),t)}function S(){m.value=!0,v.reset(),window.clearTimeout(V)}function k(){m.value=!1,w()}function x(e){h.value=e.touches[0].clientY}function N(e){Math.abs(h.value-e.changedTouches[0].clientY)>50&&(o.value=!1)}const C=t.computed((()=>e.location.split(" ").reduce(((e,t)=>(e[`v-snackbar--${t}`]=!0,e)),{})))
return Rt((()=>{const a=li.filterProps(e),g=!!(l.default||l.text||e.text)
return t.createVNode(li,t.mergeProps({ref:p,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},C.value,n.value,e.class],style:[y.value,e.style]},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,contentProps:t.mergeProps({class:["v-snackbar__wrapper",i.value,s.value,d.value,c.value],style:[u.value],onPointerenter:S,onPointerleave:k},a.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:x,onTouchend:N},r),{default:()=>[Il(!1,"v-snackbar"),e.timer&&!m.value&&t.createVNode("div",{key:"timer",class:"v-snackbar__timer"},[t.createVNode(Jl,{ref:f,color:"string"==typeof e.timer?e.timer:"info",max:e.timeout,"model-value":v.time.value},null)]),g&&t.createVNode("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[l.text?.()??e.text,l.default?.()]),l.actions&&t.createVNode(Za,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t.createVNode("div",{class:"v-snackbar__actions"},[l.actions({isActive:o})])]})],activator:l.activator})})),ri({},p)}}),Uv=st({autoDraw:Boolean,autoDrawDuration:[Number,String],autoDrawEasing:{type:String,default:"ease"},color:String,gradient:{type:Array,default:()=>[]},gradientDirection:{type:String,validator:e=>["top","bottom","left","right"].includes(e),default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:()=>[]},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},id:String,itemValue:{type:String,default:"value"},modelValue:{type:Array,default:()=>[]},min:[String,Number],max:[String,Number],padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:Boolean,width:{type:[Number,String],default:300}},"Line"),Yv=st({autoLineWidth:Boolean,...Uv()},"VBarline"),Gv=kt()({name:"VBarline",props:Yv(),setup(e,a){let{slots:l}=a
const o=ft(),n=t.computed((()=>e.id||`barline-${o}`)),r=t.computed((()=>Number(e.autoDrawDuration)||500)),i=t.computed((()=>Boolean(e.showLabels||e.labels.length>0||!!l?.label))),s=t.computed((()=>parseFloat(e.lineWidth)||4)),u=t.computed((()=>Math.max(e.modelValue.length*s.value,Number(e.width)))),c=t.computed((()=>({minX:0,maxX:u.value,minY:0,maxY:parseInt(e.height,10)}))),d=t.computed((()=>e.modelValue.map((t=>v(t,e.itemValue,t)))))
function p(t,a){const{minX:l,maxX:o,minY:n,maxY:r}=a,i=t.length
let s=null!=e.max?Number(e.max):Math.max(...t),u=null!=e.min?Number(e.min):Math.min(...t)
u>0&&null==e.min&&(u=0),s<0&&null==e.max&&(s=0)
const c=o/i,d=(r-n)/(s-u||1),v=r-Math.abs(u*d)
return t.map(((e,t)=>{const a=Math.abs(d*e)
return{x:l+t*c,y:v-a+ +(e<0)*a,height:a,value:e}}))}const f=t.computed((()=>{const t=[],a=p(d.value,c.value),l=a.length
for(let o=0;t.length<l;o++){const l=a[o]
let n=e.labels[o]
n||(n="object"==typeof l?l.value:l),t.push({x:l.x,value:String(n)})}return t})),m=t.computed((()=>p(d.value,c.value))),g=t.computed((()=>(Math.abs(m.value[0].x-m.value[1].x)-s.value)/2))
Rt((()=>{const a=e.gradient.slice().length?e.gradient.slice().reverse():[""]
return t.createVNode("svg",{display:"block"},[t.createVNode("defs",null,[t.createVNode("linearGradient",{id:n.value,gradientUnits:"userSpaceOnUse",x1:"left"===e.gradientDirection?"100%":"0",y1:"top"===e.gradientDirection?"100%":"0",x2:"right"===e.gradientDirection?"100%":"0",y2:"bottom"===e.gradientDirection?"100%":"0"},[a.map(((e,l)=>t.createVNode("stop",{offset:l/Math.max(a.length-1,1),"stop-color":e||"currentColor"},null)))])]),t.createVNode("clipPath",{id:`${n.value}-clip`},[m.value.map((a=>t.createVNode("rect",{x:a.x+g.value,y:a.y,width:s.value,height:a.height,rx:"number"==typeof e.smooth?e.smooth:e.smooth?2:0,ry:"number"==typeof e.smooth?e.smooth:e.smooth?2:0},[e.autoDraw&&t.createVNode(t.Fragment,null,[t.createVNode("animate",{attributeName:"y",from:a.y+a.height,to:a.y,dur:`${r.value}ms`,fill:"freeze"},null),t.createVNode("animate",{attributeName:"height",from:"0",to:a.height,dur:`${r.value}ms`,fill:"freeze"},null)])])))]),i.value&&t.createVNode("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[f.value.map(((a,o)=>t.createVNode("text",{x:a.x+g.value+s.value/2,y:parseInt(e.height,10)-2+(parseInt(e.labelSize,10)||5.25),"font-size":Number(e.labelSize)||7},[l.label?.({index:o,value:a.value})??a.value])))]),t.createVNode("g",{"clip-path":`url(#${n.value}-clip)`,fill:`url(#${n.value})`},[t.createVNode("rect",{x:0,y:0,width:Math.max(e.modelValue.length*s.value,Number(e.width)),height:e.height},null)])])}))}})
function qv(e){return parseInt(e,10)}function Kv(e,t,a){return qv(e.x+a.x)===qv(2*t.x)&&qv(e.y+a.y)===qv(2*t.y)}function Xv(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Zv(e,t,a){const l=e.x-t.x,o=e.y-t.y,n=Math.sqrt(l*l+o*o),r=l/n,i=o/n
return{x:t.x+r*a,y:t.y+i*a}}const Qv=st({fill:Boolean,...Uv()},"VTrendline"),Jv=kt()({name:"VTrendline",props:Qv(),setup(e,a){let{slots:l}=a
const o=ft(),n=t.computed((()=>e.id||`trendline-${o}`)),r=t.computed((()=>Number(e.autoDrawDuration)||(e.fill?500:2e3))),i=t.ref(0),s=t.ref(null)
function u(t,a){const{minX:l,maxX:o,minY:n,maxY:r}=a,i=t.length,s=null!=e.max?Number(e.max):Math.max(...t),u=null!=e.min?Number(e.min):Math.min(...t),c=(o-l)/(i-1),d=(r-n)/(s-u||1)
return t.map(((e,t)=>({x:l+t*c,y:r-(e-u)*d,value:e})))}const c=t.computed((()=>Boolean(e.showLabels||e.labels.length>0||!!l?.label))),d=t.computed((()=>parseFloat(e.lineWidth)||4)),p=t.computed((()=>Number(e.width))),f=t.computed((()=>{const t=Number(e.padding)
return{minX:t,maxX:p.value-t,minY:t,maxY:parseInt(e.height,10)-t}})),m=t.computed((()=>e.modelValue.map((t=>v(t,e.itemValue,t))))),g=t.computed((()=>{const t=[],a=u(m.value,f.value),l=a.length
for(let o=0;t.length<l;o++){const l=a[o]
let n=e.labels[o]
n||(n="object"==typeof l?l.value:l),t.push({x:l.x,value:String(n)})}return t}))
function h(t){return function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75
if(0===e.length)return""
const o=e.shift(),n=e[e.length-1]
return(a?`M${o.x} ${l-o.x+2} L${o.x} ${o.y}`:`M${o.x} ${o.y}`)+e.map(((a,l)=>{const n=e[l+1],r=e[l-1]||o,i=n&&Kv(n,a,r)
if(!n||i)return`L${a.x} ${a.y}`
const s=Math.min(Xv(r,a),Xv(n,a)),u=s/2<t?s/2:t,c=Zv(r,a,u),d=Zv(n,a,u)
return`L${c.x} ${c.y}S${a.x} ${a.y} ${d.x} ${d.y}`})).join("")+(a?`L${n.x} ${l-o.x+2} Z`:"")}(u(m.value,f.value),e.smooth?8:Number(e.smooth),t,parseInt(e.height,10))}t.watch((()=>e.modelValue),(async()=>{if(await t.nextTick(),!e.autoDraw||!s.value)return
const a=s.value,l=a.getTotalLength()
e.fill?(a.style.transformOrigin="bottom center",a.style.transition="none",a.style.transform="scaleY(0)",a.getBoundingClientRect(),a.style.transition=`transform ${r.value}ms ${e.autoDrawEasing}`,a.style.transform="scaleY(1)"):(a.style.strokeDasharray=`${l}`,a.style.strokeDashoffset=`${l}`,a.getBoundingClientRect(),a.style.transition=`stroke-dashoffset ${r.value}ms ${e.autoDrawEasing}`,a.style.strokeDashoffset="0"),i.value=l}),{immediate:!0}),Rt((()=>{const a=e.gradient.slice().length?e.gradient.slice().reverse():[""]
return t.createVNode("svg",{display:"block","stroke-width":parseFloat(e.lineWidth)??4},[t.createVNode("defs",null,[t.createVNode("linearGradient",{id:n.value,gradientUnits:"userSpaceOnUse",x1:"left"===e.gradientDirection?"100%":"0",y1:"top"===e.gradientDirection?"100%":"0",x2:"right"===e.gradientDirection?"100%":"0",y2:"bottom"===e.gradientDirection?"100%":"0"},[a.map(((e,l)=>t.createVNode("stop",{offset:l/Math.max(a.length-1,1),"stop-color":e||"currentColor"},null)))])]),c.value&&t.createVNode("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[g.value.map(((a,o)=>t.createVNode("text",{x:a.x+d.value/2+d.value/2,y:parseInt(e.height,10)-4+(parseInt(e.labelSize,10)||5.25),"font-size":Number(e.labelSize)||7},[l.label?.({index:o,value:a.value})??a.value])))]),t.createVNode("path",{ref:s,d:h(e.fill),fill:e.fill?`url(#${n.value})`:"none",stroke:e.fill?"none":`url(#${n.value})`},null),e.fill&&t.createVNode("path",{d:h(!1),fill:"none",stroke:e.color??e.gradient?.[0]},null)])}))}}),ep=st({type:{type:String,default:"trend"},...Yv(),...Qv()},"VSparkline"),tp=kt()({name:"VSparkline",props:ep(),setup(e,a){let{slots:l}=a
const{textColorClasses:o,textColorStyles:n}=ll(t.toRef(e,"color")),r=t.computed((()=>Boolean(e.showLabels||e.labels.length>0||!!l?.label))),i=t.computed((()=>{let t=parseInt(e.height,10)
return r.value&&(t+=1.5*parseInt(e.labelSize,10)),t}))
Rt((()=>{const a="trend"===e.type?Jv:Gv,r="trend"===e.type?Jv.filterProps(e):Gv.filterProps(e)
return t.createVNode(a,t.mergeProps({key:e.type,class:o.value,style:n.value,viewBox:`0 0 ${e.width} ${parseInt(i.value,10)}`},r),l)}))}}),ap=st({...ut(),...ii({offset:8,minWidth:0,openDelay:0,closeDelay:100,location:"top center",transition:"scale-transition"})},"VSpeedDial"),lp=kt()({name:"VSpeedDial",props:ap(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),n=t.ref(),r=t.computed((()=>{const[t,a="center"]=e.location.split(" ")
return`${t} ${a}`})),i=t.computed((()=>({[`v-speed-dial__content--${r.value.replace(" ","-")}`]:!0})))
return Rt((()=>{const a=si.filterProps(e)
return t.createVNode(si,t.mergeProps(a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:e.class,style:e.style,contentClass:["v-speed-dial__content",i.value],location:r.value,ref:n,transition:"fade-transition"}),{...l,default:a=>t.createVNode(Za,{defaults:{VBtn:{size:"small"}}},{default:()=>[t.createVNode(sl,{appear:!0,group:!0,transition:e.transition},{default:()=>[l.default?.(a)]})]})})})),{}}}),op=Symbol.for("vuetify:v-stepper"),np=st({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),rp=kt()({name:"VStepperActions",props:np(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(e,a){let{emit:l,slots:o}=a
const{t:n}=va()
function r(){l("click:prev")}function i(){l("click:next")}return Rt((()=>{const a={onClick:r},l={onClick:i}
return t.createVNode("div",{class:"v-stepper-actions"},[t.createVNode(Za,{defaults:{VBtn:{disabled:["prev",!0].includes(e.disabled),text:n(e.prevText),variant:"text"}}},{default:()=>[o.prev?.({props:a})??t.createVNode(Bo,a,null)]}),t.createVNode(Za,{defaults:{VBtn:{color:e.color,disabled:["next",!0].includes(e.disabled),text:n(e.nextText),variant:"tonal"}}},{default:()=>[o.next?.({props:l})??t.createVNode(Bo,l,null)]})])})),{}}}),ip=xt("v-stepper-header"),sp=st({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},error:Boolean,errorIcon:{type:String,default:"$error"},icon:String,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]}},"StepperItem"),up=st({...sp(),...Dl()},"VStepperItem"),cp=kt()({name:"VStepperItem",directives:{Ripple:_o},props:up(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=El(e,op,!0),n=t.computed((()=>o?.value.value??e.value)),r=t.computed((()=>e.rules.every((e=>!0===e())))),i=t.computed((()=>!e.disabled&&e.editable)),s=t.computed((()=>!e.disabled&&e.editable)),u=t.computed((()=>e.error||!r.value)),c=t.computed((()=>e.complete||e.rules.length>0&&r.value)),d=t.computed((()=>u.value?e.errorIcon:c.value?e.completeIcon:o.isSelected.value&&e.editable?e.editIcon:e.icon)),v=t.computed((()=>({canEdit:s.value,hasError:u.value,hasCompleted:c.value,title:e.title,subtitle:e.subtitle,step:n.value,value:e.value})))
return Rt((()=>{const a=(!o||o.isSelected.value||c.value||s.value)&&!u.value&&!e.disabled,r=!(null==e.title&&!l.title),p=!(null==e.subtitle&&!l.subtitle)
return t.withDirectives(t.createVNode("button",{class:["v-stepper-item",{"v-stepper-item--complete":c.value,"v-stepper-item--disabled":e.disabled,"v-stepper-item--error":u.value},o?.selectedClass.value],disabled:!e.editable,onClick:function(){o?.toggle()}},[i.value&&Il(!0,"v-stepper-item"),t.createVNode(Mo,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:a?e.color:void 0,size:24},{default:()=>[l.icon?.(v.value)??(d.value?t.createVNode(Ul,{icon:d.value},null):n.value)]}),t.createVNode("div",{class:"v-stepper-item__content"},[r&&t.createVNode("div",{key:"title",class:"v-stepper-item__title"},[l.title?.(v.value)??e.title]),p&&t.createVNode("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[l.subtitle?.(v.value)??e.subtitle]),l.default?.(v.value)])]),[[t.resolveDirective("ripple"),e.ripple&&e.editable,null]])})),{}}}),dp=st({...k(gs(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),vp=kt()({name:"VStepperWindow",props:dp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(op,null),n=aa(e,"modelValue"),r=t.computed({get:()=>null==n.value&&o?o.items.value.find((e=>o.selected.value.includes(e.id)))?.value:n.value,set(e){n.value=e}})
return Rt((()=>{const a=hs.filterProps(e)
return t.createVNode(hs,t.mergeProps({_as:"VStepperWindow"},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-stepper-window",e.class],style:e.style,mandatory:!1,touch:!1}),l)})),{}}}),pp=st({...Vs()},"VStepperWindowItem"),fp=kt()({name:"VStepperWindowItem",props:pp(),setup(e,a){let{slots:l}=a
return Rt((()=>{const a=ws.filterProps(e)
return t.createVNode(ws,t.mergeProps({_as:"VStepperWindowItem"},a,{class:["v-stepper-window-item",e.class],style:e.style}),l)})),{}}}),mp=st({altLabels:Boolean,bgColor:String,completeIcon:String,editIcon:String,editable:Boolean,errorIcon:String,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},nonLinear:Boolean,flat:Boolean,...hn()},"Stepper"),gp=st({...mp(),...Tl({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...Gs(),...x(np(),["prevText","nextText"])},"VStepper"),hp=kt()({name:"VStepper",props:gp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{items:o,next:n,prev:r,selected:i}=Fl(e,op),{displayClasses:s,mobile:u}=yn(e),{completeIcon:c,editIcon:d,errorIcon:p,color:f,editable:m,prevText:g,nextText:h}=t.toRefs(e),y=t.computed((()=>e.items.map(((t,a)=>({title:v(t,e.itemTitle,t),value:v(t,e.itemValue,a+1),raw:t}))))),b=t.computed((()=>o.value.findIndex((e=>i.value.includes(e.id)))))
return bt({VStepperItem:{editable:m,errorIcon:p,completeIcon:c,editIcon:d,prevText:g,nextText:h},VStepperActions:{color:f,disabled:t.computed((()=>e.disabled?e.disabled:0===b.value?"prev":b.value===o.value.length-1&&"next")),prevText:g,nextText:h}}),Rt((()=>{const a=qs.filterProps(e),o=!(!l.header&&!e.items.length),i=e.items.length>0,c=!(e.hideActions||!i&&!l.actions)
return t.createVNode(qs,t.mergeProps(a,{color:e.bgColor,class:["v-stepper",{"v-stepper--alt-labels":e.altLabels,"v-stepper--flat":e.flat,"v-stepper--non-linear":e.nonLinear,"v-stepper--mobile":u.value},s.value,e.class],style:e.style}),{default:()=>[o&&t.createVNode(ip,{key:"stepper-header"},{default:()=>[y.value.map(((e,a)=>{let{raw:o,...n}=e
return t.createVNode(t.Fragment,null,[!!a&&t.createVNode(ur,null,null),t.createVNode(cp,n,{default:l[`header-item.${n.value}`]??l.header,icon:l.icon,title:l.title,subtitle:l.subtitle})])}))]}),i&&t.createVNode(vp,{key:"stepper-window"},{default:()=>[y.value.map((e=>t.createVNode(fp,{value:e.value},{default:()=>l[`item.${e.value}`]?.(e)??l.item?.(e)})))]}),l.default?.({prev:r,next:n}),c&&(l.actions?.({next:n,prev:r})??t.createVNode(rp,{key:"stepper-actions","onClick:prev":r,"onClick:next":n},l))]})})),{prev:r,next:n}}}),yp=st({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...nn(),...Uo()},"VSwitch"),bp=kt()({name:"VSwitch",inheritAttrs:!1,props:yp(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{attrs:o,slots:n}=l
const r=aa(e,"indeterminate"),i=aa(e,"modelValue"),{loaderClasses:s}=to(e),{isFocused:u,focus:c,blur:d}=Jo(e),v=t.ref(),p=a&&window.matchMedia("(forced-colors: active)").matches,f=t.computed((()=>"string"==typeof e.loading&&""!==e.loading?e.loading:e.color)),m=ft(),g=t.computed((()=>e.id||`switch-${m}`))
function h(){r.value&&(r.value=!1)}function y(e){e.stopPropagation(),e.preventDefault(),v.value?.input?.click()}return Rt((()=>{const[a,l]=B(o),m=rn.filterProps(e),b=Yo.filterProps(e)
return t.createVNode(rn,t.mergeProps({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":r.value},s.value,e.class]},a,m,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,id:g.value,focused:u.value,style:e.style}),{...n,default:a=>{let{id:o,messagesId:s,isDisabled:u,isReadonly:m,isValid:g}=a
const V={model:i,isValid:g}
return t.createVNode(Yo,t.mergeProps({ref:v},b,{modelValue:i.value,"onUpdate:modelValue":[e=>i.value=e,h],id:o.value,"aria-describedby":s.value,type:"checkbox","aria-checked":r.value?"mixed":void 0,disabled:u.value,readonly:m.value,onFocus:c,onBlur:d},l),{...n,default:e=>{let{backgroundColorClasses:a,backgroundColorStyles:l}=e
return t.createVNode("div",{class:["v-switch__track",p?void 0:a.value],style:l.value,onClick:y},[n["track-true"]&&t.createVNode("div",{key:"prepend",class:"v-switch__track-true"},[n["track-true"](V)]),n["track-false"]&&t.createVNode("div",{key:"append",class:"v-switch__track-false"},[n["track-false"](V)])])},input:a=>{let{inputNode:l,icon:o,backgroundColorClasses:r,backgroundColorStyles:i}=a
return t.createVNode(t.Fragment,null,[l,t.createVNode("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":o||e.loading},e.inset||p?void 0:r.value],style:e.inset?void 0:i.value},[n.thumb?t.createVNode(Za,{defaults:{VIcon:{icon:o,size:"x-small"}}},{default:()=>[n.thumb({...V,icon:o})]}):t.createVNode(Oa,null,{default:()=>[e.loading?t.createVNode(ao,{name:"v-switch",active:!0,color:!1===g.value?void 0:f.value},{default:e=>n.loader?n.loader(e):t.createVNode(ql,{active:e.isActive,color:e.color,indeterminate:!0,size:"16",width:"2"},null)}):o&&t.createVNode(Ul,{key:String(o),icon:o,size:"x-small"},null)]})])])}})}})})),{}}}),Vp=st({color:String,height:[Number,String],window:Boolean,...ut(),...ml(),...Zt(),...nl(),...xa(),...ga()},"VSystemBar"),wp=kt()({name:"VSystemBar",props:Vp(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{backgroundColorClasses:n,backgroundColorStyles:r}=ol(t.toRef(e,"color")),{elevationClasses:i}=gl(e),{roundedClasses:s}=rl(e),{ssrBootStyles:u}=wl(),c=t.computed((()=>e.height??(e.window?32:24))),{layoutItemStyles:d}=Jt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.shallowRef("top"),layoutSize:c,elementSize:c,active:t.computed((()=>!0)),absolute:t.toRef(e,"absolute")})
return Rt((()=>t.createVNode(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},o.value,n.value,i.value,s.value,e.class],style:[r.value,d.value,u.value,e.style]},l))),{}}}),Sp=Symbol.for("vuetify:v-tabs"),kp=st({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...k(Io({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),xp=kt()({name:"VTab",props:kp(),setup(e,a){let{slots:l,attrs:o}=a
const{textColorClasses:n,textColorStyles:r}=ll(e,"sliderColor"),i=t.ref(),s=t.ref(),u=t.computed((()=>"horizontal"===e.direction)),c=t.computed((()=>i.value?.group?.isSelected.value??!1))
function d(e){let{value:t}=e
if(t){const e=i.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),t=s.value
if(!e||!t)return
const a=getComputedStyle(e).color,l=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=u.value?"x":"y",r=u.value?"X":"Y",c=u.value?"right":"bottom",d=u.value?"width":"height",v=l[n]>o[n]?l[c]-o[c]:l[n]-o[n],p=Math.sign(v)>0?u.value?"right":"bottom":Math.sign(v)<0?u.value?"left":"top":"center",f=(Math.abs(v)+(Math.sign(v)<0?l[d]:o[d]))/Math.max(l[d],o[d])||0,m=1.5
ge(t,{backgroundColor:[a,"currentcolor"],transform:[`translate${r}(${v}px) scale${r}(${l[d]/o[d]||0})`,`translate${r}(${v/m}px) scale${r}(${(f-1)/m+1})`,"none"],transformOrigin:Array(3).fill(p)},{duration:225,easing:Ct})}}return Rt((()=>{const a=Bo.filterProps(e)
return t.createVNode(Bo,t.mergeProps({symbol:Sp,ref:i,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},a,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{...l,default:()=>t.createVNode(t.Fragment,null,[l.default?.()??e.text,!e.hideSlider&&t.createVNode("div",{ref:s,class:["v-tab__slider",n.value],style:r.value},null)])})})),ri({},i)}}),Np=st({...k(gs(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Cp=kt()({name:"VTabsWindow",props:Np(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(Sp,null),n=aa(e,"modelValue"),r=t.computed({get:()=>null==n.value&&o?o.items.value.find((e=>o.selected.value.includes(e.id)))?.value:n.value,set(e){n.value=e}})
return Rt((()=>{const a=hs.filterProps(e)
return t.createVNode(hs,t.mergeProps({_as:"VTabsWindow"},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),l)})),{}}}),_p=st({...Vs()},"VTabsWindowItem"),Ip=kt()({name:"VTabsWindowItem",props:_p(),setup(e,a){let{slots:l}=a
return Rt((()=>{const a=ws.filterProps(e)
return t.createVNode(ws,t.mergeProps({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),l)})),{}}})
const Bp=st({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Pn({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Nl(),...xa()},"VTabs"),Pp=kt()({name:"VTabs",props:Bp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=aa(e,"modelValue"),r=t.computed((()=>function(e){return e?e.map((e=>m(e)?e:{text:e,value:e})):[]}(e.items))),{densityClasses:i}=Cl(e),{backgroundColorClasses:s,backgroundColorStyles:u}=ol(t.toRef(e,"bgColor")),{scopeId:c}=Gr()
return bt({VTab:{color:t.toRef(e,"color"),direction:t.toRef(e,"direction"),stacked:t.toRef(e,"stacked"),fixed:t.toRef(e,"fixedTabs"),sliderColor:t.toRef(e,"sliderColor"),hideSlider:t.toRef(e,"hideSlider")}}),Rt((()=>{const a=An.filterProps(e),d=!!(o.window||e.items.length>0)
return t.createVNode(t.Fragment,null,[t.createVNode(An,t.mergeProps(a,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,s.value,e.class],style:[{"--v-tabs-height":f(e.height)},u.value,e.style],role:"tablist",symbol:Sp},c,l),{default:()=>[o.default?.()??r.value.map((e=>o.tab?.({item:e})??t.createVNode(xp,t.mergeProps(e,{key:e.text,value:e.value}),{default:o[`tab.${e.value}`]?()=>o[`tab.${e.value}`]?.({item:e}):void 0})))]}),d&&t.createVNode(Cp,t.mergeProps({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,key:"tabs-window"},c),{default:()=>[r.value.map((e=>o.item?.({item:e})??t.createVNode(Ip,{value:e.value},{default:()=>o[`item.${e.value}`]?.({item:e})}))),o.window?.()]})])})),{}}}),Ap=st({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...nn(),...fi()},"VTextarea"),Rp=kt()({name:"VTextarea",directives:{Intersect:cl},inheritAttrs:!1,props:Ap(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=aa(e,"modelValue"),{isFocused:i,focus:s,blur:u}=Jo(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):(r.value||"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter))
function v(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const p=t.ref(),m=t.ref(),g=t.shallowRef(""),h=t.ref(),y=t.computed((()=>e.persistentPlaceholder||i.value||e.active))
function b(){h.value!==document.activeElement&&h.value?.focus(),i.value||s()}function V(e){b(),o("click:control",e)}function w(e){o("mousedown:control",e)}function S(a){a.stopPropagation(),b(),t.nextTick((()=>{r.value="",q(e["onClick:clear"],a)}))}function k(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}const x=t.ref(),N=t.ref(+e.rows),C=t.computed((()=>["plain","underlined"].includes(e.variant)))
function _(){e.autoGrow&&t.nextTick((()=>{if(!x.value||!m.value)return
const t=getComputedStyle(x.value),a=getComputedStyle(m.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),o=x.value.scrollHeight,n=parseFloat(t.lineHeight),r=A(o??0,Math.max(parseFloat(e.rows)*n+l,parseFloat(a.getPropertyValue("--v-input-control-height"))),parseFloat(e.maxRows)*n+l||1/0)
N.value=Math.floor((r-l)/n),g.value=f(r)}))}let I
return t.watchEffect((()=>{e.autoGrow||(N.value=+e.rows)})),t.onMounted(_),t.watch(r,_),t.watch((()=>e.rows),_),t.watch((()=>e.maxRows),_),t.watch((()=>e.density),_),t.watch(x,(e=>{e?(I=new ResizeObserver(_),I.observe(x.value)):I?.disconnect()})),t.onBeforeUnmount((()=>{I?.disconnect()})),Rt((()=>{const a=!!(n.counter||e.counter||e.counterValue),o=!(!a&&!n.details),[s,f]=B(l),{modelValue:_,...I}=rn.filterProps(e),P=gi(e)
return t.createVNode(rn,t.mergeProps({ref:p,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":C.value},e.class],style:e.style},s,I,{centerAffix:1===N.value&&!C.value,focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(mi,t.mergeProps({ref:m,style:{"--v-textarea-control-height":g.value},onClick:V,onMousedown:w,"onClick:clear":S,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:l.value,active:y.value||s.value,centerAffix:1===N.value&&!C.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...n}}=a
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[e.prefix]),t.withDirectives(t.createVNode("textarea",t.mergeProps({ref:h,class:l,value:r.value,onInput:k,autofocus:e.autofocus,readonly:c.value,disabled:o.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:u},n,f),null),[[t.resolveDirective("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&t.withDirectives(t.createVNode("textarea",{class:[l,"v-textarea__sizer"],id:`${n.id}-sizer`,"onUpdate:modelValue":e=>r.value=e,ref:x,readonly:!0,"aria-hidden":"true"},null),[[t.vModelText,r.value]]),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(ci,{active:e.persistentCounter||i.value,value:c.value,max:d.value,disabled:e.disabled},n.counter)])]):void 0})})),ri({},p,m,h)}}),Tp=st({withBackground:Boolean,...ut(),...ga(),...xa()},"VThemeProvider"),Dp=kt()({name:"VThemeProvider",props:Tp(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e)
return()=>e.withBackground?t.createVNode(e.tag,{class:["v-theme-provider",o.value,e.class],style:e.style},{default:()=>[l.default?.()]}):l.default?.()}}),Ep=st({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:Tt,iconColor:String,lineColor:String,...ut(),...nl(),...jl(),...ml()},"VTimelineDivider"),Fp=kt()({name:"VTimelineDivider",props:Ep(),setup(e,a){let{slots:l}=a
const{sizeClasses:o,sizeStyles:n}=Hl(e,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:i}=ol(t.toRef(e,"dotColor")),{roundedClasses:s}=rl(e,"v-timeline-divider__dot"),{elevationClasses:u}=gl(e),{backgroundColorClasses:c,backgroundColorStyles:d}=ol(t.toRef(e,"lineColor"))
return Rt((()=>t.createVNode("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t.createVNode("div",{class:["v-timeline-divider__before",c.value],style:d.value},null),!e.hideDot&&t.createVNode("div",{key:"dot",class:["v-timeline-divider__dot",u.value,s.value,o.value],style:n.value},[t.createVNode("div",{class:["v-timeline-divider__inner-dot",i.value,s.value],style:r.value},[l.default?t.createVNode(Za,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},l.default):t.createVNode(Ul,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t.createVNode("div",{class:["v-timeline-divider__after",c.value],style:d.value},null)]))),{}}}),$p=st({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:Tt,iconColor:String,lineInset:[Number,String],...ut(),...Qa(),...ml(),...nl(),...jl(),...xa()},"VTimelineItem"),Mp=kt()({name:"VTimelineItem",props:$p(),setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=Ja(e),n=t.shallowRef(0),r=t.ref()
return t.watch(r,(e=>{e&&(n.value=e.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width??0)}),{flush:"post"}),Rt((()=>t.createVNode("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":f(n.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${f(e.lineInset)})`:f(0)},e.style]},[t.createVNode("div",{class:"v-timeline-item__body",style:o.value},[l.default?.()]),t.createVNode(Fp,{ref:r,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),"compact"!==e.density&&t.createVNode("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&l.opposite?.()])]))),{}}}),Op=st({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>null==e||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...x($p({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...ut(),...Nl(),...xa(),...ga()},"VTimeline"),Lp=kt()({name:"VTimeline",props:Op(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=ya(e),{densityClasses:n}=Cl(e),{rtlClasses:r}=fa()
bt({VTimelineDivider:{lineColor:t.toRef(e,"lineColor")},VTimelineItem:{density:t.toRef(e,"density"),dotColor:t.toRef(e,"dotColor"),fillDot:t.toRef(e,"fillDot"),hideOpposite:t.toRef(e,"hideOpposite"),iconColor:t.toRef(e,"iconColor"),lineColor:t.toRef(e,"lineColor"),lineInset:t.toRef(e,"lineInset"),size:t.toRef(e,"size")}})
const i=t.computed((()=>{const t=e.side?e.side:"default"!==e.density?"end":null
return t&&`v-timeline--side-${t}`})),s=t.computed((()=>{const t=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"]
switch(e.truncateLine){case"both":return t
case"start":return t[0]
case"end":return t[1]
default:return null}}))
return Rt((()=>t.createVNode(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},o.value,n.value,i.value,r.value,e.class],style:[{"--v-timeline-line-thickness":f(e.lineThickness)},e.style]},l))),{}}}),zp=st({...ut(),...Bl({variant:"text"})},"VToolbarItems"),jp=kt()({name:"VToolbarItems",props:zp(),setup(e,a){let{slots:l}=a
return bt({VBtn:{color:t.toRef(e,"color"),height:"inherit",variant:t.toRef(e,"variant")}}),Rt((()=>t.createVNode("div",{class:["v-toolbar-items",e.class],style:e.style},[l.default?.()]))),{}}}),Hp=st({id:String,text:String,...k(ai({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Wp=kt()({name:"VTooltip",props:Hp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=aa(e,"modelValue"),{scopeId:n}=Gr(),r=ft(),i=t.computed((()=>e.id||`v-tooltip-${r}`)),s=t.ref(),u=t.computed((()=>e.location.split(" ").length>1?e.location:e.location+" center")),c=t.computed((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),d=t.computed((()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition")),v=t.computed((()=>t.mergeProps({"aria-describedby":i.value},e.activatorProps)))
return Rt((()=>{const a=li.filterProps(e)
return t.createVNode(li,t.mergeProps({ref:s,class:["v-tooltip",e.class],style:e.style,id:i.value},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,transition:d.value,absolute:!0,location:u.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:v.value,_disableGlobalStack:!0},n),{activator:l.activator,default:function(){for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o]
return l.default?.(...a)??e.text}})})),ri({},s)}}),Up=kt()({name:"VValidation",props:ln(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=on(e,"validation")
return()=>a.default?.(l)}})
var Yp=Object.freeze({__proto__:null,VAlert:Fo,VAlertTitle:To,VApp:ka,VAppBar:kl,VAppBarNavIcon:Ao,VAppBarTitle:Ro,VAutocomplete:Di,VAvatar:Mo,VBadge:Fi,VBanner:zi,VBannerActions:Mi,VBannerText:Oi,VBottomNavigation:Hi,VBottomSheet:Gi,VBreadcrumbs:Ji,VBreadcrumbsDivider:Ki,VBreadcrumbsItem:Zi,VBtn:Bo,VBtnGroup:Rl,VBtnToggle:Ll,VCard:us,VCardActions:es,VCardItem:ns,VCardSubtitle:as,VCardText:is,VCardTitle:ls,VCarousel:bs,VCarouselItem:ks,VCheckbox:un,VCheckboxBtn:qo,VChip:Fn,VChipGroup:Dn,VClassIcon:Ot,VCode:xs,VCol:Gc,VColorPicker:Ks,VCombobox:Zs,VComponentIcon:Ft,VConfirmEdit:mu,VContainer:Oc,VCounter:ci,VDataIterator:Qu,VDataTable:Tc,VDataTableFooter:ac,VDataTableHeaders:bc,VDataTableRow:kc,VDataTableRows:Nc,VDataTableServer:$c,VDataTableVirtual:Ec,VDatePicker:Id,VDatePickerControls:pd,VDatePickerHeader:md,VDatePickerMonth:bd,VDatePickerMonths:wd,VDatePickerYears:kd,VDefaultsProvider:Za,VDialog:Ui,VDialogBottomTransition:Fa,VDialogTopTransition:$a,VDialogTransition:Ra,VDivider:ur,VEmptyState:Pd,VExpandTransition:qa,VExpandXTransition:Ka,VExpansionPanel:$d,VExpansionPanelText:Td,VExpansionPanelTitle:Ed,VExpansionPanels:Ld,VFab:jd,VFabTransition:Ea,VFadeTransition:Ma,VField:mi,VFieldLabel:vi,VFileInput:Wd,VFooter:Yd,VForm:qd,VHover:Xd,VIcon:Ul,VImg:vl,VInfiniteScroll:Jd,VInput:rn,VItem:lv,VItemGroup:av,VKbd:ov,VLabel:Lo,VLayout:rv,VLayoutItem:sv,VLazy:cv,VLigatureIcon:Mt,VList:br,VListGroup:er,VListImg:Vr,VListItem:nr,VListItemAction:Sr,VListItemMedia:xr,VListItemSubtitle:ar,VListItemTitle:lr,VListSubheader:ir,VLocaleProvider:vv,VMain:fv,VMenu:si,VMessages:Zo,VNavigationDrawer:wv,VNoSsr:Sv,VOtpInput:xv,VOverlay:li,VPagination:ec,VParallax:Cv,VProgressCircular:ql,VProgressLinear:Jl,VRadio:Iv,VRadioGroup:Pv,VRangeSlider:Rv,VRating:Dv,VResponsive:tl,VRow:cd,VScaleTransition:Oa,VScrollXReverseTransition:za,VScrollXTransition:La,VScrollYReverseTransition:Ha,VScrollYTransition:ja,VSelect:Bi,VSelectionControl:Yo,VSelectionControlGroup:Wo,VSheet:qs,VSkeletonLoader:zv,VSlideGroup:An,VSlideGroupItem:jv,VSlideXReverseTransition:Ua,VSlideXTransition:Wa,VSlideYReverseTransition:Ga,VSlideYTransition:Ya,VSlider:Hs,VSnackbar:Wv,VSpacer:dd,VSparkline:tp,VSpeedDial:lp,VStepper:hp,VStepperActions:rp,VStepperHeader:ip,VStepperItem:cp,VStepperWindow:vp,VStepperWindowItem:fp,VSvgIcon:$t,VSwitch:bp,VSystemBar:wp,VTab:xp,VTable:_c,VTabs:Pp,VTabsWindow:Cp,VTabsWindowItem:Ip,VTextField:bi,VTextarea:Rp,VThemeProvider:Dp,VTimeline:Lp,VTimelineItem:Mp,VToolbar:bl,VToolbarItems:jp,VToolbarTitle:Ca,VTooltip:Wp,VValidation:Up,VVirtualScroll:Ni,VWindow:hs,VWindowItem:ws})
function Gp(e,t){e._mutate?.[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const qp={mounted:function(e,t){const a=t.modifiers||{},l=t.value,{once:o,immediate:n,...r}=a,i=!Object.keys(r).length,{handler:s,options:u}="object"==typeof l?l:{handler:l,options:{attributes:r?.attr??i,characterData:r?.char??i,childList:r?.child??i,subtree:r?.sub??i}},c=new MutationObserver((function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0
s?.(a,l),o&&Gp(e,t)}))
n&&s?.([],c),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:c},c.observe(e,u)},unmounted:Gp}
const Kp={mounted:function(e,t){const a=t.value,l={passive:!t.modifiers?.active}
window.addEventListener("resize",a,l),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:a,options:l},t.modifiers?.quiet||a()},unmounted:function(e,t){if(!e._onResize?.[t.instance.$.uid])return
const{handler:a,options:l}=e._onResize[t.instance.$.uid]
window.removeEventListener("resize",a,l),delete e._onResize[t.instance.$.uid]}}
function Xp(e,t){const{self:a=!1}=t.modifiers??{},l=t.value,o="object"==typeof l&&l.options||{passive:!0},n="function"==typeof l||"handleEvent"in l?l:l.handler,r=a?e:t.arg?document.querySelector(t.arg):window
r&&(r.addEventListener("scroll",n,o),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:n,options:o,target:a?void 0:r})}function Zp(e,t){if(!e._onScroll?.[t.instance.$.uid])return
const{handler:a,options:l,target:o=e}=e._onScroll[t.instance.$.uid]
o.removeEventListener("scroll",a,l),delete e._onScroll[t.instance.$.uid]}const Qp={mounted:Xp,unmounted:Zp,updated:function(e,t){t.value!==t.oldValue&&(Zp(e,t),Xp(e,t))}}
const Jp=function(e,a){const l=function(e,a){return function(l,o,n){const r="function"==typeof a?a(o):a,i=o.value?.text??o.value??r?.text,s=m(o.value)?o.value:{},u=()=>i??l.innerHTML,c=(n.ctx===o.instance.$?function(e,t){const a=new Set,l=t=>{for(const o of t){if(!o)continue
if(o===e)return!0
let t
if(a.add(o),o.suspense?t=l([o.ssContent]):Array.isArray(o.children)?t=l(o.children):o.component?.vnode&&(t=l([o.component?.subTree])),t)return t
a.delete(o)}return!1}
if(!l([t.subTree]))throw new Error("Could not find original vnode")
const o=Array.from(a).reverse()
for(const e of o)if(e.component)return e.component
return t}(n,o.instance.$)?.provides:n.ctx?.provides)??o.instance.$.provides,d=t.h(e,t.mergeProps(r,s),u)
d.appContext=Object.assign(Object.create(null),o.instance.$.appContext,{provides:c}),t.render(d,l)}}("string"==typeof e?t.resolveComponent(e):e,a)
return{mounted:l,updated:l,unmounted(e){t.render(null,e)}}}(Wp,(e=>({activator:"parent",location:e.arg?.replace("-"," ")??"top",text:"boolean"==typeof e.value?void 0:e.value})))
var ef=Object.freeze({__proto__:null,ClickOutside:ei,Intersect:cl,Mutate:qp,Resize:Kp,Ripple:_o,Scroll:Qp,Tooltip:Jp,Touch:ps})
function tf(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{blueprint:l,...o}=e,n=F(l,o),{aliases:r={},components:i={},directives:s={}}=n,u=ht(n.defaults),c=gn(n.display,n.ssr),d=ha(n.theme),v=Lt(n.icons),p=da(n.locale),f=du(n.date,p),m=Sn(n.goTo,p),g=e=>{for(const t in s)e.directive(t,s[t])
for(const t in i)e.component(t,i[t])
for(const t in r)e.component(t,St({...r[t],name:t,aliasName:r[t].name}))
if(d.install(e),e.provide(gt,u),e.provide(dn,c),e.provide(ma,d),e.provide(Dt,v),e.provide(ca,p),e.provide(uu,f.options),e.provide(cu,f.instance),e.provide(bn,m),a&&n.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{c.update()}))
else{const{mount:a}=e
e.mount=function(){const l=a(...arguments)
return t.nextTick((()=>c.update())),e.mount=a,l}}ft.reset(),("boolean"!=typeof __VUE_OPTIONS_API__||__VUE_OPTIONS_API__)&&e.mixin({computed:{$vuetify(){return t.reactive({defaults:af.call(this,gt),display:af.call(this,dn),theme:af.call(this,ma),icons:af.call(this,Dt),locale:af.call(this,ca),date:af.call(this,cu)})}}})}
return{install:g,defaults:u,display:c,theme:d,icons:v,locale:p,date:f,goTo:m}}function af(e){const t=this.$,a=t.parent?.provides??t.vnode.appContext?.provides
if(a&&e in a)return a[e]}tf.version="3.6.11"
const lf=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return tf({components:Yp,directives:ef,...e})},of="3.6.11"
lf.version=of,e.blueprints=Yt,e.components=Yp,e.createVuetify=lf,e.directives=ef,e.useDate=pu,e.useDefaults=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
const{props:a,provideSubDefaults:l}=wt(e,t)
return l(),a},e.useDisplay=yn,e.useGoTo=xn,e.useLayout=Qt,e.useLocale=va,e.useRtl=fa,e.useTheme=ba,e.version=of}))
//# sourceMappingURL=vuetify.min.js.map