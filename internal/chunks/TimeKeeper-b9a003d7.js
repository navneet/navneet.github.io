import{C as d}from"./vendor-7dd5008c.js";import{a as p,s as T}from"./Voice-8cd8bd45.js";const g=()=>{const{subscribe:c,set:n,update:i}=d(0);let t=null;const o=()=>{e()||(t=setInterval(()=>{i(s=>s+1)},1e3))},r=()=>{e()&&(clearInterval(t),t=null)},l=()=>{e()?r():o()},a=()=>{n(0)},m=s=>p(s),u=s=>T(s),e=()=>t!==null;return{subscribe:c,start:o,stop:r,toggle:l,reset:a,set:(s=0)=>{n(isNaN(s)?0:s)},minSecs:m,asClock:u,isTicking:e}};export{g as T};
