import{g as t,f as e,r as n,h as r}from"./p-baa083dc.js";import{S as o}from"./p-33546254.js";const a=t=>!("isConnected"in t)||t.isConnected,i=(()=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout((()=>{t=0,(t=>{for(let e of t.keys())t.set(e,t.get(e).filter(a))})(...e)}),2e3)}})();let s;const c=(t,e)=>{var n;return"to"in t?{path:t.path,to:t.to}:{path:t.path,id:t.id,jsx:null!==(n=t.render)&&void 0!==n?n:e}},l=(t,e=s)=>({href:t,onClick:n=>{n.metaKey||n.ctrlKey||2!=n.which&&1!=n.button&&(n.preventDefault(),e.push(t))}}),u=(t,e)=>{if("string"==typeof e){if(e===t)return{}}else if("function"==typeof e){const n=e(t);if(n)return!0===n?{}:{...n}}else{const n=e.exec(t);if(n)return e.lastIndex=0,{...n}}},p=t=>t.pathname.toLowerCase(),f=(()=>{const n=window,r=new URL(n.location.href),o=(void 0,p),{state:a,onChange:c,dispose:l}=((n,r)=>{const o=((t,e=((t,e)=>t!==e))=>{let n=new Map(Object.entries(null!=t?t:{}));const r={dispose:[],get:[],set:[],reset:[]},o=()=>{n=new Map(Object.entries(null!=t?t:{})),r.reset.forEach((t=>t()))},a=t=>(r.get.forEach((e=>e(t))),n.get(t)),i=(t,o)=>{const a=n.get(t);e(o,a,t)&&(n.set(t,o),r.set.forEach((e=>e(t,o,a))))},s="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>a(e),ownKeys:()=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>n.has(e),set:(t,e,n)=>(i(e,n),!0)}),c=(t,e)=>(r[t].push(e),()=>{((t,e)=>{const n=t.indexOf(e);n>=0&&(t[n]=t[t.length-1],t.length--)})(r[t],e)});return{state:s,get:a,set:i,on:c,onChange:(e,n)=>{const r=c("set",((t,r)=>{t===e&&n(r)})),o=c("reset",(()=>n(t[e])));return()=>{r(),o()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(c("set",e.set)),e.get&&t.push(c("get",e.get)),e.reset&&t.push(c("reset",e.reset)),e.dispose&&t.push(c("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{r.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=n.get(t);r.set.forEach((n=>n(t,e,e)))}}})(n,r);return o.use((()=>{if("function"!=typeof t)return{};const n=new Map;return{dispose:()=>n.clear(),get:e=>{const r=t();r&&((t,e,n)=>{const r=t.get(e);r?r.includes(n)||r.push(n):t.set(e,[n])})(n,e,r)},set:t=>{const r=n.get(t);r&&n.set(t,r.filter(e)),i(n)},reset:()=>{n.forEach((t=>t.forEach(e))),i(n)}}})()),o})({url:r,activePath:o(r)},((t,e,n)=>"url"===n?t.href!==e.href:t!==e)),f=t=>{history.pushState(null,null,t);const e=new URL(t,document.baseURI);a.url=e,a.activePath=o(e)},d=t=>{const{activePath:e}=a;for(let n of t){const r=u(e,n.path);if(r){if(null!=n.to){const r="string"==typeof n.to?n.to:n.to(e);return f(r),d(t)}return{params:r,route:n}}}},m=()=>{const t=new URL(n.location.href);a.url=t,a.activePath=o(t)},g=s={Switch:(t,e)=>{const n=d(e);if(n)return"function"==typeof n.route.jsx?n.route.jsx(n.params):n.route.jsx},get url(){return a.url},get activePath(){return a.activePath},push:f,onChange:c,dispose:()=>{s=void 0,n.removeEventListener("popstate",m),l()}};return m(),n.addEventListener("popstate",m),g})(),d=class{constructor(t){n(this,t)}render(){let t=f.activePath;return r("div",null,r("h2",null,"Playground"),r("nav",null,r("a",Object.assign({},l("/a",f)),"a"),r("a",Object.assign({},l("/b",f)),"b"),r("a",Object.assign({},l("/c",f)),"c")),r("main",null,r(o,{criteria:t,class:"base",enter:"enter",exit:"exit"},r(f.Switch,null,r(c,{path:"/",to:"/a"}),r(c,{path:"/a"},r("div",{key:"a"},"A")),r(c,{path:"/b"},r("div",{key:"b"}," B")),r(c,{path:"/c"},r("section",null,"C"))))))}};d.style=":host{display:block}a{padding:2rem}.base{display:block;--x:100%;--x-n:calc(0px - 100%);--duration:500ms;--timing:ease-in-out;position:relative;max-width:400px;overflow:hidden}.base>*{width:100%;text-align:center;font-size:3rem;transform:translateX(0)}.base .enter{animation-duration:var(--duration);animation-timing-function:var(--timing);animation-name:enter-right-left}.base .exit{position:absolute;top:0;animation-duration:var(--duration);animation-timing-function:var(--timing);animation-name:exit-right-left}@keyframes enter-right-left{from{opacity:0;transform:translateX(var(--x))}to{transform:translateX(0px);opacity:1}}@keyframes exit-right-left{from{opacity:1;transform:translateX(0)}to{transform:translateX(var(--x-n));opacity:0}}";export{d as st_playground}