import{g as t,f as e,r,h as n,a as o,H as a}from"./p-415294ab.js";const i=t=>!("isConnected"in t)||t.isConnected,s=(()=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout((()=>{t=0,(t=>{for(let e of t.keys())t.set(e,t.get(e).filter(i))})(...e)}),2e3)}})();let l;const c=(t,e)=>{var r;return"to"in t?{path:t.path,to:t.to}:{path:t.path,id:t.id,jsx:null!==(r=t.render)&&void 0!==r?r:e}},u=(t,e=l)=>({href:t,onClick:r=>{r.metaKey||r.ctrlKey||2!=r.which&&1!=r.button&&(r.preventDefault(),e.push(t))}}),d=(t,e)=>{if("string"==typeof e){if(e===t)return{}}else if("function"==typeof e){const r=e(t);if(r)return!0===r?{}:{...r}}else{const r=e.exec(t);if(r)return e.lastIndex=0,{...r}}},p=t=>t.pathname.toLowerCase(),h=(()=>{const r=window,n=new URL(r.location.href),o=(void 0,p),{state:a,onChange:i,dispose:c}=((r,n)=>{const o=((t,e=((t,e)=>t!==e))=>{let r=new Map(Object.entries(null!=t?t:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{r=new Map(Object.entries(null!=t?t:{})),n.reset.forEach((t=>t()))},a=t=>(n.get.forEach((e=>e(t))),r.get(t)),i=(t,o)=>{const a=r.get(t);e(o,a,t)&&(r.set(t,o),n.set.forEach((e=>e(t,o,a))))},s="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>a(e),ownKeys:()=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>r.has(e),set:(t,e,r)=>(i(e,r),!0)}),l=(t,e)=>(n[t].push(e),()=>{((t,e)=>{const r=t.indexOf(e);r>=0&&(t[r]=t[t.length-1],t.length--)})(n[t],e)});return{state:s,get:a,set:i,on:l,onChange:(e,r)=>{const n=l("set",((t,n)=>{t===e&&r(n)})),o=l("reset",(()=>r(t[e])));return()=>{n(),o()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(l("set",e.set)),e.get&&t.push(l("get",e.get)),e.reset&&t.push(l("reset",e.reset)),e.dispose&&t.push(l("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{n.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=r.get(t);n.set.forEach((r=>r(t,e,e)))}}})(r,n);return o.use((()=>{if("function"!=typeof t)return{};const r=new Map;return{dispose:()=>r.clear(),get:e=>{const n=t();n&&((t,e,r)=>{const n=t.get(e);n?n.includes(r)||n.push(r):t.set(e,[r])})(r,e,n)},set:t=>{const n=r.get(t);n&&r.set(t,n.filter(e)),s(r)},reset:()=>{r.forEach((t=>t.forEach(e))),s(r)}}})()),o})({url:n,activePath:o(n)},((t,e,r)=>"url"===r?t.href!==e.href:t!==e)),u=t=>{history.pushState(null,null,t);const e=new URL(t,document.baseURI);a.url=e,a.activePath=o(e)},h=t=>{const{activePath:e}=a;for(let r of t){const n=d(e,r.path);if(n){if(null!=r.to){const n="string"==typeof r.to?r.to:r.to(e);return u(n),h(t)}return{params:n,route:r}}}},g=()=>{const t=new URL(r.location.href);a.url=t,a.activePath=o(t)},m=l={Switch:(t,e)=>{const r=h(e);if(r)return"function"==typeof r.route.jsx?r.route.jsx(r.params):r.route.jsx},get url(){return a.url},get activePath(){return a.activePath},push:u,onChange:i,dispose:()=>{l=void 0,r.removeEventListener("popstate",g),c()}};return g(),r.addEventListener("popstate",g),m})(),g=()=>n("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",class:"",width:"50",height:"50",viewBox:"0 0 27.23 27.23"},n("rect",{class:"fill-out",width:"27.23",height:"27.23",rx:"2"}),n("polygon",{class:"fill-in",points:"5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"})),m=()=>n("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",class:"",viewBox:"0 0 16 16",width:"50",height:"50"},n("path",{"fill-rule":"evenodd",class:"fill-out",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})),f=class{constructor(t){r(this,t)}render(){const t=h.activePath;return n("div",{class:"root"},n("nav",null,n("h1",null,n("a",Object.assign({},u("/stedux",h)),"Ste",n("span",{class:"highlight"},"dux"))),n("span",{class:"app-links desktop"},n("a",Object.assign({},u("/stedux/counter",h),{class:{active:"/stedux/counter"===t}}),"Counter"),n("a",Object.assign({},u("/stedux/async",h),{class:{active:"/stedux/async"===t}}),"Async")),n("span",{class:"external-links"},n("a",{href:"https://github.com/randy-r/stedux",target:"_blank"},n(m,null)),n("a",{href:"https://www.npmjs.com/package/stedux",target:"_blank"},n(g,null)))),n("main",null,n(h.Switch,null,n(c,{path:"/stedux",to:"/stedux/counter"}),n(c,{path:"/stedux/",to:"/stedux/counter"}),n(c,{path:"/stedux/counter/",to:"/stedux/counter"}),n(c,{path:"/stedux/async/",to:"/stedux/async"}),n(c,{path:"/stedux/counter"},n("stedux-counter",null)),n(c,{path:"/stedux/async"},n("stedux-async",null)))),n("div",{class:"version"},"1.1.0"))}};function b(t,e,r,n){const o=`original__${e}__${r}__is_overriden`;if(!0===t[o])return;const a=`original__${e}__${r}`;t[a]||"function"!=typeof t[e]||(t[a]=t[e].bind(t),t[a].bind(t));const i=t[a];if(i){const r=n(i).bind(t);t[e]=r}else{const r=n(null).bind(t);t[e]=r}t[o]=!0}function*v(){let t=0;for(;;)t+=1,yield t}f.style=":host{box-sizing:border-box;display:block;min-height:100%;height:auto !important;height:100%;--root-pad:1;padding:calc(var(--root-pad) * 1rem);--bg-clr:#03060b;--p1-clr-r:191;--p1-clr-g:82;--p1-clr-b:255;--p1-clr:rgb(var(--p1-clr-r), var(--p1-clr-g), var(--p1-clr-b));--p2-clr-r:255;--p2-clr-g:255;--p2-clr-b:255;--p2-clr:rgba(var(--p2-clr-r), var(--p2-clr-g), var(--p2-clr-b), 1);--p1-clr--text-shadow:0 0 30px rgba(var(--p1-clr-r), var(--p1-clr-g), var(--p1-clr-b), 0.55), 0 0 60px rgba(var(--p2-clr-r), var(--p2-clr-g), var(--p2-clr-b), 0.50);--p2-clr--text-shadow:0 0 30px rgba(var(--p2-clr-r), var(--p2-clr-g), var(--p2-clr-b), 0.45), 0 0 60px rgba(var(--p2-clr-r), var(--p2-clr-g), var(--p2-clr-b), 0.25);color:var(--p2-clr);background-color:var(--bg-clr)}.root{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;min-height:calc(100vh - 2 * var(--root-pad) * 1rem)}nav{padding:2px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap}nav h1{display:inline-block;margin:0;margin-right:auto;font-size:1.5rem;margin:0 0.4em 0 0;transition:color 200ms ease-in-out}nav h1 .highlight{color:var(--p1-clr);transition:color 200ms ease-in-out}nav h1:hover{color:var(--p1-clr)}nav h1:hover .highlight{color:var(--p2-clr)}.app-links{color:var(--p1-clr);font-size:1.2rem;flex:1 0 100%;order:3;text-align:center}.external-links{color:var(--p1-clr);font-size:1rem;margin-left:auto}.external-links a{margin:0 0.6rem 0}.external-links svg{display:inline-block;width:1.4em;height:1.4em}.external-links a .fill-out{fill:var(--p2-clr);transition:fill 200ms ease-in-out}.external-links a:hover .fill-out{fill:var(--p1-clr)}.app-links a{margin-top:1em}.external-links a:last-child{margin-right:0}a{display:inline-block;margin:0 0.4em;color:var(--p2-clr);transition:color 200ms ease-in-out;text-decoration:none}a.active{text-decoration:underline;text-decoration-color:var(--p1-clr);text-decoration-thickness:2px}a:hover{color:var(--p1-clr)}main{flex:1;display:flex;align-items:center;justify-content:center}.flex{display:flex;flex:1}@media screen and (min-width: 36em){.app-links{order:unset;flex-basis:auto}.app-links a{margin-top:0}}.version{position:absolute;bottom:1rem;left:1.1rem;display:inline-block;max-width:fit-content;font-size:0.9rem;color:(--p2-clr);opacity:0}.version:hover{opacity:0.5}";class x{constructor(t,e,r){this.list=[],this.set=new Set,this.structure=t,this.method=e,this.forceUpdate=r}add(t){"list"===this.structure?this.list.push(t):this.set.add(t)}values(){return"list"===this.structure?this.list:this.set.values()}clear(){"list"===this.structure?this.list=[]:this.set.clear()}signalToRender(){const t=this.values();"plain"===this.method?this.signalToRenderPlain(t):this.signalToRenderAsync(t),this.clear()}signalToRenderPlain(t){for(const e of t)this.forceUpdate(e)}signalToRenderAsync(t){const e=[...t];new Promise((()=>{this.signalToRenderPlain(e)}))}}function w(t,e,r){const{forceUpdate:n,getElement:o,getRenderingRef:a}=r;let i=[],s=Object.assign({},t);const l=e,c=()=>s,u=new x("set","async",n),d=v();return{createDispatch:function(t){t.onCleanups||(t.onCleanups=[]);const e=function(t){(t=>{const e=s,r=l(e,t);i=i.filter((t=>t.caller2.isConnected));for(const t of i)t.sel2(r,t.vars2)!==t.sel2(e,t.vars2)&&u.add(t.caller2);s=r,window.stash=s,u.signalToRender()})(t)};return b(t,"disconnectedCallback","createDispatch",(function(e){return function(){for(const e of t.onCleanups)null==e||e();null==e||e()}})),function(r){let n;const o={setOnCleanup:e=>{n=e,t.onCleanups.push(e)}};"AsyncFunction"===r[Symbol.toStringTag]?r(e,c,o).then((e=>(t.onCleanups=t.onCleanups.filter((t=>t!==n)),e))):"[object Function]"===Object.prototype.toString.call(r)?(r(e,c,o),t.onCleanups=t.onCleanups.filter((t=>t!==n))):e(r)}},createSelector:function(t,e){const r=o(e),n=e.constructor.name;if(e.ownsubs||(e.ownsubs=new Set),!r.componentId){const t=d.next().value;r.componentId=`${n}::${t}`}if(!e.idGenerator){const t=v();e.idGenerator=t}const l=e.idGenerator.next().value;function c(){return function(){const n=a();return!i.find((e=>e.sel2.stashId===t.stashId))&&n&&(i.push({sel2:t,caller2:r,vars2:void 0}),e.ownsubs.add(t.stashId)),t(s)}()}return t.stashId=`${r.componentId}::${l}`,b(e,"disconnectedCallback","createSelector",(function(t){return function(){i=i.filter((t=>!e.ownsubs.has(t.sel2.stashId))),delete e.ownsubs,null==t||t()}})),c.bind(e),c},createProvider:function(){e(t,{type:"__STASH_INIT__"})}}}const y={person:{loading:null,data:null,error:null}},k=(t,e)=>{switch(e.type){case"person-loading":return{data:null,error:null,loading:!0};case"person-error":return"The user aborted a request."===e.payload.error.message?y.person:{data:null,error:e.payload.error,loading:!1};case"person-done":return{data:e.payload,error:null,loading:!1};default:return t}},{createDispatch:_,createSelector:j}=w(y,((t,e)=>Object.assign(Object.assign({},t),{person:k(t.person,e)})),{forceUpdate:e,getElement:o,getRenderingRef:t}),z=class{constructor(t){r(this,t),this.personData=j((t=>t.person),this),this.dispatch=_(this)}render(){const{data:t,loading:e,error:r}=this.personData(),o=(11,1+Math.floor(10*Math.random()));const i=null===e?"-":e?"...":t.name,s=null===e?"-":e?"...":t.height;return n(a,null,n("ui-btn",{onClick:()=>this.dispatch((t=>async e=>{try{e({type:"person-loading"});const r=await fetch(`https://swapi.dev/api/people/${t}`);if(!r.ok)return void e({type:"person-error",payload:{error:{message:`Failed to fetch: ${r.status}.`}}});e({type:"person-done",payload:await r.json()})}catch(t){e({type:"person-error",payload:{error:{message:t.message}}})}})(o))},"Fetch data"),n("div",{class:"data"},n("div",{class:"row"},n("span",{class:"label"},"name:"),n("span",{class:"value"},i)),n("div",{class:"row"},n("span",{class:"label"},"height:"),n("span",{class:"value"},s))),r&&n("div",null,"Oops: ",r.message))}};z.style=":host{padding:5px;flex:1;--fs:2rem;font-size:var(--fs);min-height:calc(10 * var(--fs))}ui-btn{display:flex;justify-content:center}.data{margin-top:1em;display:block}.row{display:flex}.label{text-align:end;padding-right:0.5em;min-width:50%}.value{color:var(--p1-clr);text-shadow:var(--p1-clr--text-shadow)}@media screen and (min-width: 36em){:host{font-size:3rem}}@media screen and (min-width: 60em){:host{min-height:auto}}";const{createDispatch:C,createSelector:O}=w({counter:0},((t,e)=>{const r=((t,e)=>{switch(e.type){case"decrement":return t-1;case"increment":return t+1;default:return t}})(t.counter,e);return Object.assign(Object.assign({},t),{counter:r})}),{forceUpdate:e,getElement:o,getRenderingRef:t}),R=class{constructor(t){r(this,t),this.dispatch=C(this),this.counter=O((t=>t.counter),this)}render(){return n("div",null,n("ui-btn",{onClick:()=>this.dispatch({type:"decrement"})},"-"),n("ui-jumbo",null,this.counter()),n("ui-btn",{onClick:()=>this.dispatch({type:"increment"})},"+"))}};R.style=":host{padding:5px;flex:1;font-size:3rem}div{padding:30px;display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:70%;margin:0 auto}ui-jumbo{text-align:center;margin-top:1.5rem;margin-bottom:1.5rem}ui-btn button{min-width:2em;aspect-ratio:1/1}@media screen and (min-width: 36em){div{flex-direction:row}ui-jumbo{font-size:3.5rem}}";const S=class{constructor(t){r(this,t)}render(){return n("button",{onClick:this.onClick},n("slot",null))}};S.style="button{text-align:inherit;border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}button::-moz-focus-inner{border:0;padding:0}button{padding:0.25em 0.5em;text-align:center;position:relative;border:3px solid;box-sizing:border-box;border-block-start:3px solid;border-image-source:radial-gradient(circle at top left, var(--p1-clr), transparent calc(max(40%, 1em)));border-image-slice:1;transition:background-color 100ms ease-in-out, color 300ms ease-in-out, border-image-source 600ms ease-in-out}button::before{box-sizing:border-box;content:'';background-color:transparent;display:block;position:relative;position:absolute;top:-3px;right:-3px;left:-3px;bottom:-3px;border:3px solid;border-block-start:3px solid;border-image-source:radial-gradient(circle at bottom right, var(--p2-clr), transparent calc(max(40%, 1em)));border-image-slice:1;transition:border-image-source 600ms ease-in-out}button:hover{border-image-source:radial-gradient(circle at top left, var(--p1-clr), transparent calc(max(100%, 1em)))}button:hover::before{border-image-source:radial-gradient(circle at bottom right, var(--p2-clr), transparent calc(min(20%, 1em)))}button:focus-visible{background-color:rgba(255, 255, 255, 0.1)}button:active{outline:none;background-color:rgba(255, 255, 255, 0.1)}";const $=class{constructor(t){r(this,t)}render(){return n("span",null,n("slot",null))}};$.style="span{display:inline-block;min-width:3ch;text-align:center;color:rgba(var(--color_red), var(--color_green), var(--color_blue), 1);text-shadow:var(--p2-clr--text-shadow);font-size:4em}";export{f as app_root,z as stedux_async,R as stedux_counter,S as ui_btn,$ as ui_jumbo}