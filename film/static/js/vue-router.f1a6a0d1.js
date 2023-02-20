import{I as tt,u as F,f as N,X as He,n as nt,t as z,D as je,aa as qe,s as ae,r as rt,w as st}from"./@vue.a9411cd4.js";/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof window<"u";function ot(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const s=t[r];n[r]=I(s)?s.map(e):e(s)}return n}const W=()=>{},I=Array.isArray,it=/\/$/,ct=e=>e.replace(it,"");function ue(e,t,n="/"){let r,s={},l="",d="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(r=t.slice(0,c),l=t.slice(c+1,m>-1?m:t.length),s=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=ft(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function at(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function we(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ut(e[n],t[n]))return!1;return!0}function ut(e,t){return I(e)?Se(e,t):I(t)?Se(t,e):e===t}function Se(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],d!==".")if(d==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var Y;(function(e){e.pop="pop",e.push="push"})(Y||(Y={}));var X;(function(e){e.back="back",e.forward="forward",e.unknown=""})(X||(X={}));function ht(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ct(e)}const dt=/^[^#]+#/;function pt(e,t){return e.replace(dt,"#")+t}function mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function gt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function vt(e,t){he.set(e,t)}function yt(e){const t=he.get(e);return he.delete(e),t}let Rt=()=>location.protocol+"//"+location.host;function Ge(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let m=s.includes(e.slice(l))?e.slice(l).length:1,c=s.slice(m);return c[0]!=="/"&&(c="/"+c),we(c,"")}return we(n,e)+r+s}function Et(e,t,n,r){let s=[],l=[],d=null;const m=({state:u})=>{const g=Ge(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=k?u.position-k.position:0}else r(g);s.forEach(w=>{w(n.value,R,{delta:b,type:Y.pop,direction:b?b>0?X.forward:X.back:X.unknown})})};function c(){d=n.value}function f(u){s.push(u);const g=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return l.push(g),g}function o(){const{history:u}=window;!u.state||u.replaceState(S({},u.state,{scroll:ee()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",o),{pauseListeners:c,listen:f,destroy:a}}function be(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Pt(e){const{history:t,location:n}=window,r={value:Ge(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,f,o){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+c:Rt()+e+c;try{t[o?"replaceState":"pushState"](f,"",u),s.value=f}catch{n[o?"replace":"assign"](u)}}function d(c,f){const o=S({},t.state,be(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});l(c,o,!0),r.value=c}function m(c,f){const o=S({},s.value,t.state,{forward:c,scroll:ee()});l(o.current,o,!0);const a=S({},be(r.value,c,null),{position:o.position+1},f);l(c,a,!1),r.value=c}return{location:r,state:s,push:m,replace:d}}function an(e){e=ht(e);const t=Pt(e),n=Et(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=S({location:"",base:e,go:r,createHref:pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function wt(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ve=Symbol("");var ke;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ke||(ke={}));function K(e,t){return S(new Error,{type:e,[Ve]:!0},t)}function $(e,t){return e instanceof Error&&Ve in e&&(t==null||!!(e.type&t))}const Ae="[^/]+?",St={sensitive:!1,strict:!1,start:!0,end:!0},Ct=/[.+*?^${}()[\]/\\]/g;function bt(e,t){const n=S({},St,t),r=[];let s=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(s+="/"),s+=u.value.replace(Ct,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:w}=u;l.push({name:R,repeatable:k,optional:b});const P=w||Ae;if(P!==Ae){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let O=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(O=b&&f.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),s+=O,g+=20,b&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}o.push(g)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function m(f){const o=f.match(d),a={};if(!o)return null;for(let u=1;u<o.length;u++){const g=o[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function c(f){let o="",a=!1;for(const u of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const g of u)if(g.type===0)o+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,w=R in f?f[R]:"";if(I(w)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=I(w)?w.join("/"):w;if(!P)if(b)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);o+=P}}return o||"/"}return{re:d,score:r,keys:l,parse:m,stringify:c}}function kt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function At(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=kt(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(_e(r))return 1;if(_e(s))return-1}return s.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _t={type:0,value:""},Ot=/[a-zA-Z0-9_]/;function xt(e){if(!e)return[[]];if(e==="/")return[[_t]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let m=0,c,f="",o="";function a(){!f||(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&a(),d()):c===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:c==="("?n=2:Ot.test(c)?u():(a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+c:n=3:o+=c;break;case 3:a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),s}function Mt(e,t,n){const r=bt(xt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Nt(e,t){const n=[],r=new Map;t=Me({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function l(o,a,u){const g=!u,R=It(o);R.aliasOf=u&&u.record;const k=Me(t,o),b=[R];if("alias"in o){const O=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of O)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let w,P;for(const O of b){const{path:M}=O;if(a&&M[0]!=="/"){const H=a.record.path,L=H[H.length-1]==="/"?"":"/";O.path=a.record.path+(M&&L+M)}if(w=Mt(O,a,k),u?u.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),g&&o.name&&!xe(w)&&d(o.name)),R.children){const H=R.children;for(let L=0;L<H.length;L++)l(H[L],w,u&&u.children[L])}u=u||w,c(w)}return P?()=>{d(P)}:W}function d(o){if(Ke(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function m(){return n}function c(o){let a=0;for(;a<n.length&&At(o,n[a])>=0&&(o.record.path!==n[a].record.path||!De(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!xe(o)&&r.set(o.record.name,o)}function f(o,a){let u,g={},R,k;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw K(1,{location:o});k=u.record.name,g=S(Oe(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),o.params&&Oe(o.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in o)R=o.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw K(1,{location:o,currentLocation:a});k=u.record.name,g=S({},a.params,o.params),R=u.stringify(g)}const b=[];let w=u;for(;w;)b.unshift(w.record),w=w.parent;return{name:k,path:R,params:g,matched:b,meta:$t(b)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:s}}function Oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function It(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Lt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Lt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function xe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $t(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){return t.children.some(n=>n===e||De(e,n))}const Ue=/#/g,Tt=/&/g,Bt=/\//g,Ht=/=/g,jt=/\?/g,Qe=/\+/g,qt=/%5B/g,zt=/%5D/g,Fe=/%5E/g,Gt=/%60/g,We=/%7B/g,Kt=/%7C/g,Xe=/%7D/g,Vt=/%20/g;function me(e){return encodeURI(""+e).replace(Kt,"|").replace(qt,"[").replace(zt,"]")}function Dt(e){return me(e).replace(We,"{").replace(Xe,"}").replace(Fe,"^")}function de(e){return me(e).replace(Qe,"%2B").replace(Vt,"+").replace(Ue,"%23").replace(Tt,"%26").replace(Gt,"`").replace(We,"{").replace(Xe,"}").replace(Fe,"^")}function Ut(e){return de(e).replace(Ht,"%3D")}function Qt(e){return me(e).replace(Ue,"%23").replace(jt,"%3F")}function Ft(e){return e==null?"":Qt(e).replace(Bt,"%2F")}function J(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Qe," "),d=l.indexOf("="),m=J(d<0?l:l.slice(0,d)),c=d<0?null:J(l.slice(d+1));if(m in t){let f=t[m];I(f)||(f=t[m]=[f]),f.push(c)}else t[m]=c}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Ut(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Yt=Symbol(""),Ie=Symbol(""),te=Symbol(""),Ye=Symbol(""),pe=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function B(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,m)=>{const c=a=>{a===!1?m(K(4,{from:n,to:t})):a instanceof Error?m(a):wt(a)?m(K(2,{from:t,to:a})):(l&&r.enterCallbacks[s]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[s],t,n,c);let o=Promise.resolve(f);e.length<3&&(o=o.then(c)),o.catch(a=>m(a))})}function fe(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Zt(m)){const f=(m.__vccOpts||m)[t];f&&s.push(B(f,n,r,l,d))}else{let c=m();s.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=ot(f)?f.default:f;l.components[d]=o;const u=(o.__vccOpts||o)[t];return u&&B(u,n,r,l,d)()}))}}return s}function Zt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Le(e){const t=z(te),n=z(Ye),r=N(()=>t.resolve(F(e.to))),s=N(()=>{const{matched:c}=r.value,{length:f}=c,o=c[f-1],a=n.matched;if(!o||!a.length)return-1;const u=a.findIndex(G.bind(null,o));if(u>-1)return u;const g=$e(c[f-2]);return f>1&&$e(o)===g&&a[a.length-1].path!==g?a.findIndex(G.bind(null,c[f-2])):u}),l=N(()=>s.value>-1&&nn(n.params,r.value.params)),d=N(()=>s.value>-1&&s.value===n.matched.length-1&&ze(n.params,r.value.params));function m(c={}){return tn(c)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const Jt=je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Le,setup(e,{slots:t}){const n=He(Le(e)),{options:r}=z(te),s=N(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),en=Jt;function tn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!I(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e??t??n,rn=je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=z(pe),s=N(()=>e.route||r.value),l=z(Ie,0),d=N(()=>{let f=F(l);const{matched:o}=s.value;let a;for(;(a=o[f])&&!a.components;)f++;return f}),m=N(()=>s.value.matched[d.value]);ae(Ie,N(()=>d.value+1)),ae(Yt,m),ae(pe,s);const c=rt();return st(()=>[c.value,m.value,e.name],([f,o,a],[u,g,R])=>{o&&(o.instances[a]=f,g&&g!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=g.leaveGuards),o.updateGuards.size||(o.updateGuards=g.updateGuards))),f&&o&&(!g||!G(o,g)||!u)&&(o.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,a=m.value,u=a&&a.components[o];if(!u)return Be(n.default,{Component:u,route:f});const g=a.props[o],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=qe(u,S({},R,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(a.instances[o]=null)},ref:c}));return Be(n.default,{Component:b,route:f})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sn=rn;function ln(e){const t=Nt(e.routes,e),n=e.parseQuery||Wt,r=e.stringifyQuery||Ne,s=e.history,l=Q(),d=Q(),m=Q(),c=tt(T);let f=T;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=le.bind(null,i=>""+i),a=le.bind(null,Ft),u=le.bind(null,J);function g(i,p){let h,v;return Ke(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function R(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function w(i,p){if(p=S({},p||c.value),typeof i=="string"){const y=ue(n,i,p.path),_=t.resolve({path:y.path},p),U=s.createHref(y.fullPath);return S(y,_,{params:u(_.params),hash:J(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in i)h=S({},i,{path:ue(n,i.path,p.path).path});else{const y=S({},i.params);for(const _ in y)y[_]==null&&delete y[_];h=S({},i,{params:a(i.params)}),p.params=a(p.params)}const v=t.resolve(h,p),C=i.hash||"";v.params=o(u(v.params));const A=at(r,S({},i,{hash:Dt(C),path:v.path})),E=s.createHref(A);return S({fullPath:A,hash:C,query:r===Ne?Xt(i.query):i.query||{}},v,{redirectedFrom:void 0,href:E})}function P(i){return typeof i=="string"?ue(n,i,c.value.path):S({},i)}function O(i,p){if(f!==i)return K(8,{from:p,to:i})}function M(i){return V(i)}function H(i){return M(S(P(i),{replace:!0}))}function L(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function V(i,p){const h=f=w(i),v=c.value,C=i.state,A=i.force,E=i.replace===!0,y=L(h);if(y)return V(S(P(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:E}),p||h);const _=h;_.redirectedFrom=p;let U;return!A&&lt(r,v,h)&&(U=K(16,{to:_,from:v}),Ee(v,v,!0,!1)),(U?Promise.resolve(U):ge(_,v)).catch(x=>$(x)?$(x,2)?x:se(x):re(x,_,v)).then(x=>{if(x){if($(x,2))return V(S({replace:E},P(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),p||_)}else x=ye(_,v,!0,E,C);return ve(_,v,x),x})}function Ze(i,p){const h=O(i,p);return h?Promise.reject(h):Promise.resolve()}function ge(i,p){let h;const[v,C,A]=on(i,p);h=fe(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(_=>{h.push(B(_,i,p))});const E=Ze.bind(null,i,p);return h.push(E),j(h).then(()=>{h=[];for(const y of l.list())h.push(B(y,i,p));return h.push(E),j(h)}).then(()=>{h=fe(C,"beforeRouteUpdate",i,p);for(const y of C)y.updateGuards.forEach(_=>{h.push(B(_,i,p))});return h.push(E),j(h)}).then(()=>{h=[];for(const y of i.matched)if(y.beforeEnter&&!p.matched.includes(y))if(I(y.beforeEnter))for(const _ of y.beforeEnter)h.push(B(_,i,p));else h.push(B(y.beforeEnter,i,p));return h.push(E),j(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",i,p),h.push(E),j(h))).then(()=>{h=[];for(const y of d.list())h.push(B(y,i,p));return h.push(E),j(h)}).catch(y=>$(y,8)?y:Promise.reject(y))}function ve(i,p,h){for(const v of m.list())v(i,p,h)}function ye(i,p,h,v,C){const A=O(i,p);if(A)return A;const E=p===T,y=q?history.state:{};h&&(v||E?s.replace(i.fullPath,S({scroll:E&&y&&y.scroll},C)):s.push(i.fullPath,C)),c.value=i,Ee(i,p,h,E),se()}let D;function Je(){D||(D=s.listen((i,p,h)=>{if(!Pe.listening)return;const v=w(i),C=L(v);if(C){V(S(C,{replace:!0}),v).catch(W);return}f=v;const A=c.value;q&&vt(Ce(A.fullPath,h.delta),ee()),ge(v,A).catch(E=>$(E,12)?E:$(E,2)?(V(E.to,v).then(y=>{$(y,20)&&!h.delta&&h.type===Y.pop&&s.go(-1,!1)}).catch(W),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(E,v,A))).then(E=>{E=E||ye(v,A,!1),E&&(h.delta&&!$(E,8)?s.go(-h.delta,!1):h.type===Y.pop&&$(E,20)&&s.go(-1,!1)),ve(v,A,E)}).catch(W)}))}let ne=Q(),Re=Q(),Z;function re(i,p,h){se(i);const v=Re.list();return v.length&&v.forEach(C=>C(i,p,h)),Promise.reject(i)}function et(){return Z&&c.value!==T?Promise.resolve():new Promise((i,p)=>{ne.add([i,p])})}function se(i){return Z||(Z=!i,Je(),ne.list().forEach(([p,h])=>i?h(i):p()),ne.reset()),i}function Ee(i,p,h,v){const{scrollBehavior:C}=e;if(!q||!C)return Promise.resolve();const A=!h&&yt(Ce(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return nt().then(()=>C(i,p,A)).then(E=>E&&gt(E)).catch(E=>re(E,i,p))}const oe=i=>s.go(i);let ie;const ce=new Set,Pe={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:w,options:e,push:M,replace:H,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:Re.add,isReady:et,install(i){const p=this;i.component("RouterLink",en),i.component("RouterView",sn),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>F(c)}),q&&!ie&&c.value===T&&(ie=!0,M(s.location).catch(C=>{}));const h={};for(const C in T)h[C]=N(()=>c.value[C]);i.provide(te,p),i.provide(Ye,He(h)),i.provide(pe,c);const v=i.unmount;ce.add(i),i.unmount=function(){ce.delete(i),ce.size<1&&(f=T,D&&D(),D=null,c.value=T,ie=!1,Z=!1),v()}}};return Pe}function j(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function on(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>G(f,m))?r.push(m):n.push(m));const c=e.matched[d];c&&(t.matched.find(f=>G(f,c))||s.push(c))}return[n,r,s]}function un(){return z(te)}export{en as R,an as a,ln as c,un as u};
