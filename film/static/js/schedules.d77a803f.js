import{R as s}from"./index.df009344.js";import{d as p}from"./dayjs.ba0a1193.js";const e="/schedule";class l{static getList(t,r,m,a,n,o,d,i){return n&&o?s.get(e,{filmId:r,film_name:m,hall_name:a,start_time:p(n)?.format("YYYY-MM-DD HH:mm:ss"),end_time:p(o)?.format("YYYY-MM-DD HH:mm:ss"),PageNum:d,PageSize:t<1?1:t,Status:i}):s.get(e,{filmId:r,film_name:m,hall_name:a,PageNum:d,PageSize:t<1?1:t,Status:i})}static getById(t){return s.get(`${e}/${t}`)}static add(t){return s.post(e,t)}static put(t){return s.put(`${e}/${t.id}`,t)}static del(t){return s.delete(`${e}/${t}`)}}export{l as S};