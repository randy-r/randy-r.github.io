import{r as t,B as s,h as i,H as h,a as e}from"./p-baa083dc.js";function n(t){return null==t}function l(t){return!n(t)&&""!==t}const r=(t,s,i)=>i.map(s,(s=>{var i,h;return s.vattrs=null!==(i=s.vattrs)&&void 0!==i?i:{},s.vattrs.class=null!==(h=s.vattrs.class)&&void 0!==h?h:"",s.vattrs.key=t.key?t.key:s.vattrs.key,Object.assign(Object.assign({},s),{vattrs:Object.assign(Object.assign({},s.vattrs),{class:`${s.vattrs.class} ${t.class}`})})})),o={once:!0},c=class{constructor(s){t(this,s),this.status="stable",this.lastCrit=this.criteria,this.crtCrit=this.criteria,this.lastBeforeStable={},this.lastJsxBeforeStable=null,this.crtJsx=null,this.crtChildConfig=null,this.prerendered=null,this.animationendCount=0,this.becomeStable=()=>{this.lastCrit=this.crtCrit,this.crtCrit=this.criteria,this.status="stable"},this.handleAnimationEnd=()=>{2==++this.animationendCount&&(this.becomeStable(),this.animationendCount=0)}}componentWillLoad(){var t;this.crtJsx=this.getJsx(),this.crtChildConfig=this.getChildConfig(),this.prerendered="true"===(null===(t=this.host.dataset)||void 0===t?void 0:t.prerendered)}componentDidUpdate(){if("between"===this.status){const t=this.host.querySelector(".current"),s=this.host.querySelector(".previous");t.addEventListener("animationend",this.handleAnimationEnd,o),s.addEventListener("animationend",this.handleAnimationEnd,o)}}componentWillRender(){"between"!==this.status&&(this.criteria===this.lastCrit||this.prerendered||(this.lastBeforeStable=this.lastCrit,this.lastJsxBeforeStable=this.crtJsx,this.lastBeforeStableChildConfig=this.crtChildConfig,this.crtJsx=this.getJsx(),this.crtChildConfig=this.getChildConfig(),this.lastCrit=this.crtCrit,this.crtCrit=this.criteria,this.status="between"))}componentDidLoad(){this.prerendered=s.isServer,this.host.dataset.prerendered=this.prerendered+""}render(){const{enter:t,exit:s,enterReverse:e,exitReverse:o,status:c,crtChildConfig:a,lastBeforeStableChildConfig:u,stableChild:d}=this,{c:b,l:v}=function(t,s,i,h,e,r,o,c){let a=`c ${e}`,u=`c ${e}`;if("stable"===e)return a=`${a} ${c}`,{c:a,l:u};const d=r.order,b=o.order,v=r.enter,f=o.exit;let p=1;n(d)||n(b)||(p=d-b);const $=r.enterReverse,m=o.exitReverse,j=l(v)?v:t,w=l(f)?f:s,C=l($)?$:i,O=l(m)?m:h;return a=`c current ${e} ${p>0?j:C}`,u=`c previous ${e} ${p>0?w:O}`,{c:a,l:u}}(t,s,e,o,c,a,u,d);return i(h,{class:this.class},("stable"===this.status||"between"===this.status)&&i(r,{class:b},this.crtJsx),"between"===this.status&&i(r,{class:v},this.lastJsxBeforeStable))}get host(){return e(this)}};c.style="";export{c as shift_handler}