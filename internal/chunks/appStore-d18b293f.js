import{D as l}from"./vendor-5de77269.js";const p=(e="sessionStorage")=>{const{subscribe:n,set:o,update:c}=l("");let s;const f=t=>s=t,m=()=>i()?e:null,b=t=>{e=t,i()},d=(t,r)=>{!u(t)||(r=JSON.stringify(r),e.setItem(t,r),o(t))},S=t=>{if(!u(t))return;const r=e.getItem(t);return r===null&&s[t]!==null?(o(s[t]),s[t]):(r!==null&&o(t),JSON.parse(r))},g=t=>{!u(t)||(e.removeItem(t),c(r=>(t==r&&(r=""),r)))},w=()=>{!i()||(e.clear(),o(""))},u=t=>{if(!i())return!1;if(!Object.keys(s).includes(t))throw new Error("Illegal Key: "+t);return!0},i=()=>{if(!e)return!1;if(typeof e=="string"){if(!["sessionStorage","localStorage"].includes(e))return!1;try{return e=window[e],!0}catch(r){return console.error(r),!1}}else if(typeof e.getItem=="function")return!0;return!1};return{subscribe:n,getEngine:m,setEngine:b,setItem:d,getItem:S,removeItem:g,clear:w,length:{get length(){return e.length}},get allowed(){return s},set allowed(t){f(t)}}},_=p("sessionStorage");_.allowed=Object.preventExtensions({routine:{}});const a=p("localStorage");a.allowed=Object.preventExtensions({user_settings:{prep_time:5,announce_every:30,use_voice:!0,show_plank:!0,preferred_voice:null},workout:{meta:{},exercises:[],planks:[]}});const I=()=>{const e=l(Object.preventExtensions({tabataLink:"/routine/tabata",timerLink:"/routine/timer",currentLink:"/routine/tabata",stopTime:0})),n=l(Object.preventExtensions({showPlayer:!1,player:void 0,icons:{play:"bi bi-play-circle",pause:"bi bi-pause-circle"},playlist:{list:"PLHUFhflY14R-dbmlHvpF0-RoX7MUCzJMK",listType:"playlist"}})),o=y(),c=l(null);return(()=>({routine:e,music:n,userSettings:o,docBodyBgColor:c}))()},y=()=>{const e="user_settings",{subscribe:n,set:o}=l({},s=>{s(a.getItem(e))});return{subscribe:n,set:s=>{a.setItem(e,s),o(s)}}},v=I();export{v as A,a as L,_ as S};
