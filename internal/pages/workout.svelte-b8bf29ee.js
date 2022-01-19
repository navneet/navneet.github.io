import{C as re,a2 as ae,ad as ce,S as z,i as G,s as H,v as I,w as A,x as O,p as w,n as v,A as j,L as U,O as W,e as D,t as oe,j as N,c as q,a as X,g as le,l as L,d as E,b as S,D as Q,f as T,E as F,I as ee,h as ie,F as fe,H as me,ae as pe,u as Ce,af as Ne,m as te,o as ne,Z as Le,X as V,k as Y,G as Z,a1 as Re,P as de,Q as ge,T as _e}from"../chunks/vendor-a6521ad7.js";import{g as De}from"../chunks/navigation-c71191e7.js";import{L as qe,S as Xe}from"../chunks/appStore-ff2f2670.js";import{V as be}from"../chunks/ViewTitle-ee5a57de.js";import{t as he,g as Ke,p as Be,s as J}from"../chunks/helpers-3dc73931.js";import{a as k,b as Ee,E as Fe}from"../chunks/exerciseCard-c5bca8bb.js";import{F as We,I as ke,M as we,L as ve,P as Ve}from"../chunks/playPauseToggleIcon-1b3930ec.js";import"../chunks/singletons-a42a5e91.js";const Me=()=>{const{subscribe:n,set:e}=re(null);return{subscribe:n,setDb:t=>{const l=new DOMParser().parseFromString(t,"text/xml"),p=l.querySelector("parsererror");e(p||l)}}};var M=Me();const ze=()=>({saveWorkout:async s=>new Promise(()=>{Promise.resolve(!0)}),getWorkout:async s=>{let t="/"+s+".json";return fetch(new Request(t)).then(async r=>{if(r.ok){const l=await r.json();l?Promise.resolve(l):Promise.reject(l)}else Promise.reject(r)})}});var Ge=ze();const $e=ae(M,n=>{if(!n)return[];const e=n.querySelector("exercises");return Array.from(e.children).map(s=>Object.seal({id:s.tagName,title:he(s.tagName.replace("_"," "))}))},[]),se=(n=null)=>{const e=Object.preventExtensions({id:null,title:null,tabatas:3,prep_time:10,time_on:40,time_off:15,rest_time:60,with_equipment:!0,has_plank:!0,url:null,rules:{}}),{subscribe:s,set:t,update:r}=re(e),l=u=>{u=Object.assign(e,u),$e.subscribe(f=>{if(f.length){const d=Object.fromEntries(f.map(c=>[c.id,0]));u.rules=Object.preventExtensions(Object.assign(d,u.rules))}return!0})(),t(u)},p=(u,a)=>{let f=!1;return r(d=>(a&&!isNaN(a)&&(d.rules[u]=a),f=!0,d)),f},m=(u=null)=>(u||s(f=>u=f)(),Object.entries(u.rules).reduce((a,f)=>a+(isNaN(f[1])?0:f[1]),0)),o=(u=null)=>{u||s(c=>u=c)();const a=m(u);let f=0;return f+=u.prep_time,f+=u.time_on*a*u.tabatas,f+=u.time_off*(a-1)*u.tabatas,f+=u.rest_time*(u.tabatas-1),f},i=(u=null)=>{let a;return s(d=>a=d)(),u?a[u]:a},g=(u=null)=>{u||s(d=>u=d)();const a=Object.fromEntries(Object.entries(u));return a.rules=Object.fromEntries(Object.entries(u.rules)),a};return n&&l(n),{subscribe:s,set:l,get:i,clone:g,update:r,updateRule:p,getTotalTime:o,getTotalExercises:m}},He=ae(M,(n,e)=>{if(!n)return[];const s=n.querySelector("selection_rules");if(!s)return[];const t=[];Array.from(s.children).forEach(r=>{const l={id:r.tagName,title:he(r.tagName.replace("_"," ")),tabatas:parseInt(r.getAttribute("tabatas")),rest_time:parseInt(r.getAttribute("rest_time")),time_on:parseInt(r.getAttribute("time_on")),time_off:parseInt(r.getAttribute("time_off")),prep_time:parseInt(r.getAttribute("prep_time"))||10},p=Array.from(r.children).map(m=>[m.tagName,parseInt(m.getAttribute("select"))]);l.rules=Object.fromEntries(p),t.push(se(l))}),e(t)},[]),Ue=(n=se())=>{const e=Object.preventExtensions({meta:n?n.get():null,[k.EXERCISE]:[],[k.PLANK]:[]}),{subscribe:s,set:t,update:r}=re(e),l=(c=se())=>{n=c,M.subscribe(h=>{if(!h)return;const b={};b.meta=o(n.get()),b[k.EXERCISE]=[],b[k.PLANK]=[];for(let $ in b.meta.rules){if(!parseInt(b.meta.rules[$]))continue;const P=h.querySelector("exercises > "+$).children;b[k.EXERCISE]=b[k.EXERCISE].concat(a(P,b.meta.rules[$],!1,b.meta.with_equipment))}if(b.meta.with_equipment){const $=Math.random()>.5?1:-1;b[k.EXERCISE]=b[k.EXERCISE].sort((P,B)=>(P.band_pos-B.band_pos)*$)}if(b.meta.has_plank){const $=h.querySelector("planks");b[k.PLANK]=a($.children,parseInt($.getAttribute("select")),!0,b.meta.with_equipment)}t(b)})()},p=()=>{r(c=>{const _=new URL(window.location.href);return _.pathname=`/routine/${Ke(8)}`,c.meta.url=_,qe.setItem("workout",c),Ge.saveWorkout(c),c})},m=(c=null)=>{c||s($=>c=$)();const _=c[k.EXERCISE].length;let h=0;return h+=c.meta.prep_time,h+=c.meta.time_on*_*c.meta.tabatas,h+=c.meta.time_off*(_-1)*c.meta.tabatas,h+=c.meta.rest_time*(c.meta.tabatas-1),h},o=(c=null)=>{c||s(b=>c=b.meta)()();const _=Object.fromEntries(Object.entries(c));return _.rules=Object.fromEntries(Object.entries(c.rules)),_},i=(c=-1,_=k.EXERCISE,h="replace")=>{r(b=>{const $=b[_][c];switch(h){case"delete":f(c,b[_]),_!==k.PLANK&&(b.meta.rules[$.region]-=1);break;case"replace":const P=u(c,b[_],_);P.length&&f(c,b[_],P);break}return b})},g=(c=-1,_=-1,h=k.EXERCISE)=>{c<0||r(b=>{const $=b[h].length;_==-1?_=$-1:_==$&&(_=0);const P=b[h].splice(_,1,b[h][c]);return b[h].splice(c,1,...P),b})},u=(c,_,h)=>{const b=_[c];if(!b)return[];const $=_.filter(K=>K.region===b.region).map(K=>K.name),P=ce(M);let B=h;h==k.EXERCISE&&(B+=" > "+b.region);let C=P.querySelector(B);const x=Array.from(C.children).filter(K=>!$.includes(K.getAttribute("name")));return a(x,1,h==k.PLANK)},a=(c,_,h,b=!0)=>{c=c instanceof Array?c:Array.from(c),b===!1&&(c=c.filter(C=>parseInt(C.getAttribute("band_pos"))==0)),c.length>_&&(c=Be(c,_));let $;d.subscribe(C=>$=C)();let B=[];for(let C in c){const x=Boolean(parseInt(c[C].getAttribute("has_lr"))),K=c[C].getAttribute("name"),R=Ee();if(R.type=h?k.PLANK:k.EXERCISE,R.name=K,R.display_name=K+(x?" (Right)":""),R.region=c[C].parentElement.tagName,R.target=c[C].getAttribute("target"),R.has_lr=x,R.band_pos=parseInt(c[C].getAttribute("band_pos")),R.band_pos_text=$[c[C].getAttribute("band_pos")],x){const ue=Object.assign(Ee(),R);ue.display_name=K+" (Left)",B.push(ue)}B.push(R)}return B},f=(c=-1,_=[],h=[])=>{const b=_[c],$=b.has_lr===!0?_.findIndex(P=>P.name==b.name&&P!==b):-1;$>-1&&(_.splice($,1),c=_.indexOf(b)),h.length?_.splice(c,1,...h):_.splice(c,1)},d=ae(M,c=>{if(!c)return{};const _={},h=c.querySelector("band_legends");return Array.from(h.children).forEach(b=>{_[b.getAttribute("id")]=b.getAttribute("title")}),_},{});return{subscribe:s,set:t,update:r,save:p,cloneMeta:o,alterExercise:i,swapExercise:g,getTotalTime:m,get preset(){return n},set preset(c){l(c)}}};var y=Ue();function Qe(n){let e,s;return e=new We({props:{id:Ye,title:"Customize "+n[0].title+" Workout",fieldsets:n[3]()}}),e.$on("change",n[1]),e.$on("click",n[2]),{c(){I(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p(t,[r]){const l={};r&1&&(l.title="Customize "+t[0].title+" Workout"),e.$set(l)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}const Ye="workoutSettingsForm";function Ze(n,e,s){let t,r,l;U(n,y,d=>s(6,t=d)),U(n,$e,d=>s(7,l=d));const p=(d,c)=>{const _=d.currentTarget.type==="checkbox"?d.currentTarget.checked:parseInt(d.currentTarget.value);if(!isNaN(_)){if(c){a.updateRule(d.currentTarget.name,_);const b=d.currentTarget.form.querySelector("input[name=total_exercises]");b.value=a.getTotalExercises(r)}else W(a,r[d.currentTarget.name]=_,r);const h=d.currentTarget.form.querySelector("input[name=total_time]");h.value=J(a.getTotalTime(r))}},m=d=>{const c=d.currentTarget,_=Object.keys(u).includes(c.name),h=["has_plank","with_equipment"].includes(c.name);p(d,!_&&!h)},o=d=>{d.preventDefault();const c=new FormData(d.currentTarget.form);W(a,r.tabatas=parseInt(c.get("tabatas")),r),W(a,r.prep_time=parseInt(c.get("prep_time")),r),W(a,r.time_on=parseInt(c.get("time_on")),r),W(a,r.time_off=parseInt(c.get("time_off")),r),W(a,r.rest_time=parseInt(c.get("rest_time")),r);for(let _ in r.rules)W(a,r.rules[_]=parseInt(c.get(_)),r);y.preset=a},i=d=>{d.currentTarget.name==="submit"&&o(d),s(5,f=!1)},g=()=>{const d=[];let c={legend:"Exercises",inputs:[]};return l.forEach(_=>{const h={label:_.title,type:"number",value:r.rules[_.id],id:_.id,name:_.id};c.inputs.push(h)}),c.inputs.push({label:"Total Exercises",type:"text",value:a.getTotalExercises(r),id:"total_exercises",name:"total_exercises",readonly:!0}),d.push(c),c={legend:"Time:",inputs:[]},Object.entries(u).forEach(_=>{const h={label:_[1],type:"number",value:r[_[0]],id:_[0],name:_[0]};c.inputs.push(h)}),c.inputs.push({label:"Total Time",type:"text",value:J(a.getTotalTime(r)),id:"total_time",name:"total_time",readonly:!0}),d.push(c),c={legend:"Options:",inputs:[]},c.inputs.push({label:"Planks?",type:"slider",checked:r.has_plank,id:"has_plank",name:"has_plank"}),c.inputs.push({label:"Use Bands?",type:"slider",checked:r.with_equipment,id:"with_equipment",name:"with_equipment"}),d.push(c),c={inputs:[{label:"Generate",bindValue:!1,type:"submit",value:"Generate Workout",id:"submit",name:"submit"}]},d.push(c),d},u={prep_time:"Prep Time (seconds)",time_on:"Active Time (seconds)",time_off:"Rest Time (seconds)",rest_time:"Break Time (seconds)",tabatas:"Rounds"},a=se(t.meta);U(n,a,d=>s(0,r=d));let{open:f=!0}=e;return n.$$set=d=>{"open"in d&&s(5,f=d.open)},[r,m,i,g,a,f]}class Je extends z{constructor(e){super();G(this,e,Ze,Qe,H,{open:5})}}function Te(n,e,s){const t=n.slice();return t[10]=e[s],t}function Se(n){let e,s=n[10][1]+"",t,r,l,p,m,o;return{c(){e=D("span"),t=oe(s),r=N(),this.h()},l(i){e=q(i,"SPAN",{class:!0,"data-value":!0,"data-placeholder":!0});var g=X(e);t=le(g,s),r=L(g),g.forEach(E),this.h()},h(){S(e,"class","sel-box-option svelte-6j4pg4"),S(e,"data-value",l=n[10][0]),S(e,"data-placeholder",p=n[10][1]),Q(e,"selected",n[0]===n[10][0])},m(i,g){T(i,e,g),F(e,t),F(e,r),m||(o=ee(e,"click",n[5]),m=!0)},p(i,g){g&8&&s!==(s=i[10][1]+"")&&ie(t,s),g&8&&l!==(l=i[10][0])&&S(e,"data-value",l),g&8&&p!==(p=i[10][1])&&S(e,"data-placeholder",p),g&9&&Q(e,"selected",i[0]===i[10][0])},d(i){i&&E(e),m=!1,o()}}}function xe(n){let e,s,t,r,l,p,m,o=n[3],i=[];for(let g=0;g<o.length;g+=1)i[g]=Se(Te(n,o,g));return{c(){e=D("div"),s=D("span"),t=oe(n[1]),r=N(),l=D("div");for(let g=0;g<i.length;g+=1)i[g].c();this.h()},l(g){e=q(g,"DIV",{class:!0,id:!0});var u=X(e);s=q(u,"SPAN",{class:!0,"data-label":!0});var a=X(s);t=le(a,n[1]),a.forEach(E),r=L(u),l=q(u,"DIV",{class:!0});var f=X(l);for(let d=0;d<i.length;d+=1)i[d].l(f);f.forEach(E),u.forEach(E),this.h()},h(){S(s,"class","sel-placeholder svelte-6j4pg4"),S(s,"data-label",n[1]),S(l,"class","sel-box svelte-6j4pg4"),S(e,"class","sel svelte-6j4pg4"),S(e,"id",n[2]),Q(e,"active",n[4])},m(g,u){T(g,e,u),F(e,s),F(s,t),F(e,r),F(e,l);for(let a=0;a<i.length;a+=1)i[a].m(l,null);p||(m=ee(e,"click",n[6]),p=!0)},p(g,[u]){if(u&2&&ie(t,g[1]),u&2&&S(s,"data-label",g[1]),u&41){o=g[3];let a;for(a=0;a<o.length;a+=1){const f=Te(g,o,a);i[a]?i[a].p(f,u):(i[a]=Se(f),i[a].c(),i[a].m(l,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=o.length}u&4&&S(e,"id",g[2]),u&16&&Q(e,"active",g[4])},i:fe,o:fe,d(g){g&&E(e),me(i,g),p=!1,m()}}}function et(n,e,s){const t=pe(),r=()=>{const f=document.getElementById(g);if(!f)return null;let d="";return f.querySelectorAll(".sel-box-option").forEach(c=>{c.dataset.value==u&&(d=c.dataset.label)}),d},l=f=>{const d=document.getElementById(g).querySelector(".sel-placeholder");d.textContent=f},p=f=>{f.currentTarget.dataset.value!=u&&(s(0,u=f.currentTarget.dataset.value),l(f.currentTarget.dataset.placeholder),t("change",u))},m=()=>{s(4,o=!o),t("open",o)};Ce(()=>{const f=r();f&&l(f)});let o=!1,{label:i,name:g,value:u,options:a}=e;return n.$$set=f=>{"label"in f&&s(1,i=f.label),"name"in f&&s(2,g=f.name),"value"in f&&s(0,u=f.value),"options"in f&&s(3,a=f.options)},[u,i,g,a,o,p,m]}class tt extends z{constructor(e){super();G(this,e,et,xe,H,{label:1,name:2,value:0,options:3})}}function Ie(n,e,s){const t=n.slice();return t[11]=e[s],t[13]=s,t}function nt(n){let e,s;return e=new ke({props:{buttons:typeof n[2]=="function"?n[2](n[1],n[13]):n[2]}}),e.$on("click",n[7]),e.$on("dblclick",n[8]),e.$on("mouseenter",n[9]),e.$on("mouseleave",n[10]),{c(){I(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p(t,r){const l={};r&6&&(l.buttons=typeof t[2]=="function"?t[2](t[1],t[13]):t[2]),e.$set(l)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function Ae(n){let e,s,t,r,l,p;return s=new Fe({props:{name:n[11].display_name,completed:!1,region:n[11].region,target:n[11].target,band_pos:n[11].band_pos,band_pos_text:n[11].band_pos_text,$$slots:{default:[nt]},$$scope:{ctx:n}}}),{c(){e=D("li"),I(s.$$.fragment),t=N(),this.h()},l(m){e=q(m,"LI",{draggable:!0,class:!0});var o=X(e);A(s.$$.fragment,o),t=L(o),o.forEach(E),this.h()},h(){S(e,"draggable",n[3]),S(e,"class","svelte-1i892xx"),Q(e,"grabbable",n[3])},m(m,o){T(m,e,o),O(s,e,null),F(e,t),r=!0,l||(p=ee(e,"dragstart",n[6]),l=!0)},p(m,o){const i={};o&2&&(i.name=m[11].display_name),o&2&&(i.region=m[11].region),o&2&&(i.target=m[11].target),o&2&&(i.band_pos=m[11].band_pos),o&2&&(i.band_pos_text=m[11].band_pos_text),o&16390&&(i.$$scope={dirty:o,ctx:m}),s.$set(i),(!r||o&8)&&S(e,"draggable",m[3]),o&8&&Q(e,"grabbable",m[3])},i(m){r||(w(s.$$.fragment,m),r=!0)},o(m){v(s.$$.fragment,m),r=!1},d(m){m&&E(e),j(s),l=!1,p()}}}function st(n){let e,s,t,r,l,p,m,o=n[1],i=[];for(let u=0;u<o.length;u+=1)i[u]=Ae(Ie(n,o,u));const g=u=>v(i[u],1,1,()=>{i[u]=null});return{c(){e=D("h5"),s=oe(n[0]),t=N(),r=D("ol");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=q(u,"H5",{class:!0});var a=X(e);s=le(a,n[0]),a.forEach(E),t=L(u),r=q(u,"OL",{class:!0});var f=X(r);for(let d=0;d<i.length;d+=1)i[d].l(f);f.forEach(E),this.h()},h(){S(e,"class","svelte-1i892xx"),S(r,"class","svelte-1i892xx")},m(u,a){T(u,e,a),F(e,s),T(u,t,a),T(u,r,a);for(let f=0;f<i.length;f+=1)i[f].m(r,null);l=!0,p||(m=[ee(r,"dragover",Ne(n[4])),ee(r,"drop",n[5])],p=!0)},p(u,[a]){if((!l||a&1)&&ie(s,u[0]),a&14){o=u[1];let f;for(f=0;f<o.length;f+=1){const d=Ie(u,o,f);i[f]?(i[f].p(d,a),w(i[f],1)):(i[f]=Ae(d),i[f].c(),w(i[f],1),i[f].m(r,null))}for(te(),f=o.length;f<i.length;f+=1)g(f);ne()}},i(u){if(!l){for(let a=0;a<o.length;a+=1)w(i[a]);l=!0}},o(u){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)v(i[a]);l=!1},d(u){u&&E(e),u&&E(t),u&&E(r),me(i,u),p=!1,Le(m)}}}function rt(n,e,s){let{title:t,items:r,buttons:l}=e,{draggable:p=!0}=e;function m(d){V.call(this,n,d)}function o(d){V.call(this,n,d)}function i(d){V.call(this,n,d)}function g(d){V.call(this,n,d)}function u(d){V.call(this,n,d)}function a(d){V.call(this,n,d)}function f(d){V.call(this,n,d)}return n.$$set=d=>{"title"in d&&s(0,t=d.title),"items"in d&&s(1,r=d.items),"buttons"in d&&s(2,l=d.buttons),"draggable"in d&&s(3,p=d.draggable)},[t,r,l,p,m,o,i,g,u,a,f]}class Oe extends z{constructor(e){super();G(this,e,rt,st,H,{title:0,items:1,buttons:2,draggable:3})}}function je(n){let e,s;return e=new Oe({props:{title:"Planks",items:n[0][k.PLANK],draggable:n[2]>1,buttons:n[6]}}),e.$on("dragstart",n[3]),e.$on("drop",n[4]),e.$on("click",n[5]),{c(){I(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p(t,r){const l={};r&1&&(l.items=t[0][k.PLANK]),e.$set(l)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function at(n){let e,s,t,r;e=new Oe({props:{title:"Exercises",items:n[0][k.EXERCISE],draggable:n[1]>1,buttons:n[6]}}),e.$on("dragstart",n[3]),e.$on("drop",n[4]),e.$on("click",n[5]);let l=n[0][k.PLANK].length>0&&n[0].meta.has_plank===!0&&je(n);return{c(){I(e.$$.fragment),s=N(),l&&l.c(),t=Y()},l(p){A(e.$$.fragment,p),s=L(p),l&&l.l(p),t=Y()},m(p,m){O(e,p,m),T(p,s,m),l&&l.m(p,m),T(p,t,m),r=!0},p(p,[m]){const o={};m&1&&(o.items=p[0][k.EXERCISE]),e.$set(o),p[0][k.PLANK].length>0&&p[0].meta.has_plank===!0?l?(l.p(p,m),m&1&&w(l,1)):(l=je(p),l.c(),w(l,1),l.m(t.parentNode,t)):l&&(te(),v(l,1,1,()=>{l=null}),ne())},i(p){r||(w(e.$$.fragment,p),w(l),r=!0)},o(p){v(e.$$.fragment,p),v(l),r=!1},d(p){j(e,p),p&&E(s),l&&l.d(p),p&&E(t)}}}function ot(n,e,s){let t;U(n,y,u=>s(0,t=u));let r=t[k.EXERCISE].length,l=t[k.PLANK].length,p=null;return[t,r,l,u=>{p=u.currentTarget,u.dataTransfer.effectAllowed="move"},u=>{u.preventDefault();const a=u.path.indexOf(p.parentNode);if(a<1)return;const f=u.path[a-1];if(p===f)return;const d=Array.from(p.parentNode.children);y.swapExercise(d.indexOf(p),d.indexOf(f),k.EXERCISE)},u=>{const a=u.currentTarget.dataset,f=parseInt(a.id);switch(a.action){case"up":case"down":y.swapExercise(f,f+(a.action=="down"?1:-1),a.type);break;case"delete":case"replace":y.alterExercise(f,a.type,a.action);break}},(u,a)=>{const f=u.type===k.PLANK?l>1:r>1,d=u.type===k.PLANK?!1:r>1,c={"data-id":a,"data-type":u.type};return[{icon:"bi bi-arrow-repeat",title:"Replace Exercise",disabled:!1,data:Object.assign({"data-action":"replace"},c)},{icon:"bi bi-arrow-up-circle",title:"Move Up",disabled:!f,data:Object.assign({"data-action":"up"},c)},{icon:"bi bi-arrow-down-circle",title:"Move Down",disabled:!f,data:Object.assign({"data-action":"down"},c)},{icon:"bi bi-trash",title:"Trash",disabled:!d,data:Object.assign({"data-action":"delete"},c)}]}]}class lt extends z{constructor(e){super();G(this,e,ot,at,H,{})}}function ye(n){let e,s,t,r,l,p,m,o,i,g,u;return e=new we({props:{click:n[4],$$slots:{default:[it]},$$scope:{ctx:n}}}),r=new ke({props:{buttons:n[5]()}}),r.$on("click",n[3]),m=new lt({}),i=new we({props:{click:n[4],$$slots:{default:[ut]},$$scope:{ctx:n}}}),{c(){s=D("div"),I(e.$$.fragment),t=N(),l=D("div"),I(r.$$.fragment),p=N(),I(m.$$.fragment),o=N(),g=D("div"),I(i.$$.fragment),this.h()},l(a){s=q(a,"DIV",{style:!0});var f=X(s);A(e.$$.fragment,f),t=L(a),l=q(a,"DIV",{style:!0});var d=X(l);A(r.$$.fragment,d),p=L(a),A(m.$$.fragment,a),o=L(a),g=q(a,"DIV",{style:!0});var c=X(g);A(i.$$.fragment,c),this.h()},h(){Z(s,"display","contents"),Z(s,"--theme-icon-size",".4rem"),Z(l,"display","contents"),Z(l,"--theme-icon-size","1.6rem"),Z(g,"display","contents"),Z(g,"--theme-icon-size",".3rem")},m(a,f){T(a,s,f),O(e,s,null),T(a,t,f),T(a,l,f),O(r,l,null),T(a,p,f),O(m,a,f),T(a,o,f),T(a,g,f),O(i,g,null),u=!0},p(a,f){const d={};f&4098&&(d.$$scope={dirty:f,ctx:a}),e.$set(d);const c={};f&4098&&(c.$$scope={dirty:f,ctx:a}),i.$set(c)},i(a){u||(w(e.$$.fragment,a),w(r.$$.fragment,a),w(m.$$.fragment,a),w(i.$$.fragment,a),u=!0)},o(a){v(e.$$.fragment,a),v(r.$$.fragment,a),v(m.$$.fragment,a),v(i.$$.fragment,a),u=!1},d(a){a&&E(s),j(e,a),a&&E(t),a&&E(l),j(r,a),a&&E(p),j(m,a),a&&E(o),a&&E(g),j(i,a)}}}function it(n){let e,s;return e=new ve({props:{label:"Total Time",value:J(y.getTotalTime(n[1]))}}),{c(){I(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p(t,r){const l={};r&2&&(l.value=J(y.getTotalTime(t[1]))),e.$set(l)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function ut(n){let e,s;return e=new ve({props:{label:"Total Time",value:J(y.getTotalTime(n[1]))}}),{c(){I(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){O(e,t,r),s=!0},p(t,r){const l={};r&2&&(l.value=J(y.getTotalTime(t[1]))),e.$set(l)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function ct(n){let e,s,t,r,l,p;e=new be({props:{title:""+((n[1].meta.title?n[1].meta.title:"Create")+" Workout")}}),t=new tt({props:{label:"Presets",name:"preset",value:n[1].meta.id,options:n[2].map(Pe)}}),t.$on("change",n[7]),t.$on("open",n[8]);let m=!n[0]&&n[1].exercises.length&&ye(n);return{c(){I(e.$$.fragment),s=N(),I(t.$$.fragment),r=N(),m&&m.c(),l=Y()},l(o){A(e.$$.fragment,o),s=L(o),A(t.$$.fragment,o),r=L(o),m&&m.l(o),l=Y()},m(o,i){O(e,o,i),T(o,s,i),O(t,o,i),T(o,r,i),m&&m.m(o,i),T(o,l,i),p=!0},p(o,[i]){const g={};i&2&&(g.title=""+((o[1].meta.title?o[1].meta.title:"Create")+" Workout")),e.$set(g);const u={};i&2&&(u.value=o[1].meta.id),i&4&&(u.options=o[2].map(Pe)),t.$set(u),!o[0]&&o[1].exercises.length?m?(m.p(o,i),i&3&&w(m,1)):(m=ye(o),m.c(),w(m,1),m.m(l.parentNode,l)):m&&(te(),v(m,1,1,()=>{m=null}),ne())},i(o){p||(w(e.$$.fragment,o),w(t.$$.fragment,o),w(m),p=!0)},o(o){v(e.$$.fragment,o),v(t.$$.fragment,o),v(m),p=!1},d(o){j(e,o),o&&E(s),j(t,o),o&&E(r),m&&m.d(o),o&&E(l)}}}const Pe=n=>[n.get("id"),n.get("title")];function ft(n,e,s){let t,r;U(n,y,c=>s(1,t=c)),U(n,He,c=>s(2,r=c));let l,{settingsOpen:p}=e;const m=pe(),o=c=>{switch(c.currentTarget.dataset.action){case"reset":y.preset=y.preset;break;case"share":g();break;case"settings_open":s(6,p=!0);break}},i=()=>navigator.share&&navigator.canShare(),g=async()=>{y.save();const c={title:"Share Test",text:"Kalabaaz Workout",url:window.location.domain};i()?window.navigator.share(c).catch(_=>{console.error(_)}):navigator.clipboard&&navigator.clipboard.writeText(c.url).then(_=>{console.info("Show copied notification here")}).catch(_=>{console.error(_)})},u=()=>{y.save(),m("workout")},a=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:Ve,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}],f=c=>y.preset=r.find(_=>_.get("id")==c.detail),d=c=>s(0,l=c.detail);return n.$$set=c=>{"settingsOpen"in c&&s(6,p=c.settingsOpen)},[l,t,r,o,u,a,p,f,d]}class mt extends z{constructor(e){super();G(this,e,ft,ct,H,{settingsOpen:6})}}function pt(n){let e,s,t;function r(p){n[4](p)}let l={};return n[0]!==void 0&&(l.settingsOpen=n[0]),e=new mt({props:l}),de.push(()=>ge(e,"settingsOpen",r)),e.$on("workout",n[1]),{c(){I(e.$$.fragment)},l(p){A(e.$$.fragment,p)},m(p,m){O(e,p,m),t=!0},p(p,m){const o={};!s&&m&1&&(s=!0,o.settingsOpen=p[0],_e(()=>s=!1)),e.$set(o)},i(p){t||(w(e.$$.fragment,p),t=!0)},o(p){v(e.$$.fragment,p),t=!1},d(p){j(e,p)}}}function dt(n){let e,s,t,r,l;e=new be({props:{title:"Customize Workout"}});function p(o){n[3](o)}let m={};return n[0]!==void 0&&(m.open=n[0]),t=new Je({props:m}),de.push(()=>ge(t,"open",p)),{c(){I(e.$$.fragment),s=N(),I(t.$$.fragment)},l(o){A(e.$$.fragment,o),s=L(o),A(t.$$.fragment,o)},m(o,i){O(e,o,i),T(o,s,i),O(t,o,i),l=!0},p(o,i){const g={};!r&&i&1&&(r=!0,g.open=o[0],_e(()=>r=!1)),t.$set(g)},i(o){l||(w(e.$$.fragment,o),w(t.$$.fragment,o),l=!0)},o(o){v(e.$$.fragment,o),v(t.$$.fragment,o),l=!1},d(o){j(e,o),o&&E(s),j(t,o)}}}function gt(n){let e,s,t,r,l;const p=[dt,pt],m=[];function o(i,g){return i[0]?0:1}return s=o(n),t=m[s]=p[s](n),{c(){e=N(),t.c(),r=Y(),this.h()},l(i){Re('[data-svelte="svelte-8h4qcl"]',document.head).forEach(E),e=L(i),t.l(i),r=Y(),this.h()},h(){document.title="SWEAT Workout"},m(i,g){T(i,e,g),m[s].m(i,g),T(i,r,g),l=!0},p(i,[g]){let u=s;s=o(i),s===u?m[s].p(i,g):(te(),v(m[u],1,1,()=>{m[u]=null}),ne(),t=m[s],t?t.p(i,g):(t=m[s]=p[s](i),t.c()),w(t,1),t.m(r.parentNode,r))},i(i){l||(w(t),l=!0)},o(i){v(t),l=!1},d(i){i&&E(e),m[s].d(i),i&&E(r)}}}async function St({fetch:n}){const e={xml:null};if(!ce(M)){const t=await n("/data/workout_list.xml");t.ok&&(e.xml=await t.text())}return{props:e}}function _t(n,e,s){let{xml:t}=e;const r=()=>{Xe.setItem("routine",[]),De("/routine/tabata")};t&&M.setDb(t);let l=!1;function p(o){l=o,s(0,l)}function m(o){l=o,s(0,l)}return n.$$set=o=>{"xml"in o&&s(2,t=o.xml)},[l,r,t,p,m]}class It extends z{constructor(e){super();G(this,e,_t,gt,H,{xml:2})}}export{It as default,St as load};
