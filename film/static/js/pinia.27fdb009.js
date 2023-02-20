import{i as $}from"./vue-demi.237d1bfa.js";import{ak as z,r as B,al as I,d as J,t as A,w as G,X as T,A as R,am as C,a6 as N,y as tt,z as et,n as st,a8 as nt,f as ot}from"./@vue.a9411cd4.js";/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let U;const L=t=>U=t,W=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function lt(){const t=z(!0),n=t.run(()=>B({}));let s=[],e=[];const c=I({install(u){L(c),c._a=u,u.provide(W,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!$?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const X=()=>{};function H(t,n,s,e=X){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&J()&&et(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function x(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];O(c)&&O(e)&&t.hasOwnProperty(s)&&!R(e)&&!C(e)?t[s]=x(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!O(t)||!t.hasOwnProperty(ct)}const{assign:h}=Object;function ut(t){return!!(R(t)&&t.effect)}function ft(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function b(){f||(s.state.value[t]=c?c():{});const y=nt(s.state.value[t]);return h(y,u,Object.keys(a||{}).reduce((v,S)=>(v[S]=I(ot(()=>{L(s);const _=s._s.get(t);return a[S].call(_,_)})),v),{}))}return m=q(t,b,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(S=>{h(S,v)})},m}function q(t,n,s={},e,c,u){let a;const f=h({actions:{}},s),m={deep:!0};let b,y,v=I([]),S=I([]),_;const p=e.state.value[t];!u&&!p&&(e.state.value[t]={}),B({});let F;function V(r){let o;b=y=!1,typeof r=="function"?(r(e.state.value[t]),o={type:E.patchFunction,storeId:t,events:_}):(x(e.state.value[t],r),o={type:E.patchObject,payload:r,storeId:t,events:_});const d=F=Symbol();st().then(()=>{F===d&&(b=!0)}),y=!0,j(v,o,e.state.value[t])}const D=X;function K(){a.stop(),v=[],S=[],e._s.delete(t)}function M(r,o){return function(){L(e);const d=Array.from(arguments),g=[],w=[];function Y(i){g.push(i)}function Z(i){w.push(i)}j(S,{args:d,name:r,store:l,after:Y,onError:Z});let k;try{k=o.apply(this&&this.$id===t?this:l,d)}catch(i){throw j(w,i),i}return k instanceof Promise?k.then(i=>(j(g,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(g,k),k)}}const Q={_p:e,$id:t,$onAction:H.bind(null,S),$patch:V,$reset:D,$subscribe(r,o={}){const d=H(v,r,o.detached,()=>g()),g=a.run(()=>G(()=>e.state.value[t],w=>{(o.flush==="sync"?y:b)&&r({storeId:t,type:E.direct,events:_},w)},h({},m,o)));return d},$dispose:K},l=T(h({},Q));e._s.set(t,l);const P=e._e.run(()=>(a=z(),a.run(()=>n())));for(const r in P){const o=P[r];if(R(o)&&!ut(o)||C(o))u||(p&&rt(o)&&(R(o)?o.value=p[r]:x(o,p[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const d=M(r,o);P[r]=d,f.actions[r]=o}}return h(l,P),h(N(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{V(o=>{h(o,r)})}}),e._p.forEach(r=>{h(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),p&&u&&s.hydrate&&s.hydrate(l.$state,p),b=!0,y=!0,l}function ht(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const b=J();return f=f||b&&A(W),f&&L(f),f=U,f._s.has(e)||(u?q(e,n,c,f):ft(e,c,f)),f._s.get(e)}return a.$id=e,a}function bt(t){{t=N(t);const n={};for(const s in t){const e=t[s];(R(e)||C(e))&&(n[s]=tt(t,s))}return n}}export{lt as c,ht as d,bt as s};
