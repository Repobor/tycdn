import{C as p}from"./crypto-js.a1ce743c.js";import{R as e}from"./index.df009344.js";const s="/order";class u{static getList(t,r,i,o,n){return e.get(s,{PageNum:t,PageSize:r<1?1:r,film_id:i,hall_id:o,user_id:n})}static getById(t){return e.get(`${s}/${t}`)}static add(t){return t.sign=p.SHA1(t.schedule_id+JSON.stringify(t.seat)).toString(),e.post(s,t)}static getPayLink(t,r){return e.post(`${s}/pay/create`,{id:t,type:r})}}export{u as O};