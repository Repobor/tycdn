import{u as c}from"./vue-router.f1a6a0d1.js";import{O as F}from"./orders.19828111.js";import{d as _}from"./dayjs.ba0a1193.js";import{D as h,r as f,c as r,a as u,U as o,u as B,M as n,a4 as A,S as D,Q as E,ae as C,o as s,a5 as v}from"./@vue.a9411cd4.js";import"./crypto-js.a1ce743c.js";import"./clone-deep.292945d4.js";import"./shallow-clone.95d3ae69.js";import"./kind-of.db8547f8.js";import"./is-plain-object.c8a6e606.js";import"./isobject.b90498ab.js";import"./index.df009344.js";import"./pinia.27fdb009.js";import"./vue-demi.237d1bfa.js";import"./vue3-lazyload.76288b1e.js";import"./nprogress.f46f69d2.js";import"./axios.3a678d80.js";import"./form-data.18640493.js";import"./element-plus.254419c7.js";import"./@element-plus.d7dd3bba.js";import"./lodash-es.f14d6700.js";import"./@vueuse.8f037a30.js";import"./async-validator.ca741037.js";import"./@sxzz.30ebe6b1.js";import"./escape-html.10c6516a.js";import"./normalize-wheel-es.65bdcd5b.js";import"./@ctrl.70544517.js";import"./theme-change.990675dd.js";const y=u("div",{class:"justify-center flex alert shadow-lg mb-8 select-none"}," \u8BF7\u60A8\u786E\u8BA4\u60A8\u7684\u8BA2\u5355\u4FE1\u606F\uFF0C\u5E76\u8BF7\u572815\u5206\u949F\u5185\u5B8C\u6210\u4ED8\u6B3E\uFF0C\u5982\u8D85\u65F6\u7CFB\u7EDF\u5C06\u81EA\u52A8\u91CA\u653E\u5DF2\u9009\u5EA7\u4F4D\u3002 ",-1),x=u("span",null,"\u5269\u4F59\uFF1A"+o(0),-1),b={class:"overflow-x-auto"},g={class:"table w-full"},k=u("thead",null,[u("tr",null,[u("th",null,"\u7535\u5F71"),u("th",null,"\u573A\u6B21"),u("th",null,"\u7968\u6570/\u5EA7\u4F4D"),u("th",null,"\u91D1\u989D\u5C0F\u8BA1")])],-1),w={class:"text-xs"},L=v(" \u786E\u8BA4\u8BA2\u5355\uFF0C\u53BB\u652F\u4ED8 "),su=h({__name:"ConfirmPay",props:{orderid:null},setup(i){const a=i,m=c(),t=f();return F.getById(a.orderid).then(({data:e})=>{e.status===5&&(confirm("\u60A8\u7684\u8BA2\u5355\u5DF2\u7ECF\u8D85\u65F6\u53D6\u6D88\u4E86"),m.push({name:"Buy"})),t.value=e}),(e,M)=>{const p=C("RouterLink");return s(),r(n,null,[y,x,u("div",b,[u("table",g,[k,u("tbody",null,[u("tr",null,[u("th",null,o(t.value?.film_name),1),u("td",null,[u("p",null,o(t.value?.hall_name),1),u("p",w,o(B(_)(t.value?.time_start).format("MM-DD hh:mm")),1)]),u("td",null,[(s(!0),r(n,null,A(t.value?.seat,(l,d)=>(s(),r("p",{key:d},o(`${+l[0]+1} \u884C ${+l[1]+1} \u5EA7`),1))),128))]),u("td",null,o(`\xA5 ${t.value?.total_price}`),1)])])]),D(p,{class:"btn btn-primary float-right",to:{name:"payment",params:{orderid:a.orderid}}},{default:E(()=>[L]),_:1},8,["to"])])],64)}}});export{su as default};
