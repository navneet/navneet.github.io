import{S as R,i as V,s as F,w as v,x as T,y as E,q as b,o as h,B as y,M as N,O as B,e as D,t as K,k as S,c as P,a as C,h as z,m as O,d as g,b as w,F as M,g as k,G as j,J as G,j as Q,H,I as x,ah as ee,v as be,ai as he,n as Y,p as J,_ as ke,Y as q,l as W,f as U,a2 as $e,Q as te,R as ne,U as se}from"../chunks/vendor-e13e40a5.js";import{w as I,b as we,P as ve,E as Te,a as A,p as Ee,S as ye,W as Z}from"../chunks/exerciseCard-0ce116b0.js";import{g as Ie}from"../chunks/navigation-bd39ff07.js";import{A as Se,S as Oe}from"../chunks/appStore-343e38e2.js";import{V as ae}from"../chunks/ViewTitle-9c0b94cb.js";import{s as X}from"../chunks/helpers-7746061f.js";import{F as De,I as le,M as re,a as oe,P as Pe}from"../chunks/playPauseToggleIcon-daa24825.js";import"../chunks/stores-e2f0a4ed.js";import"../chunks/singletons-a6a7384f.js";function Ce(l){let e,n;return e=new De({props:{id:je,title:"Customize "+l[0].title+" Workout",fieldsets:l[3]()}}),e.$on("change",l[1]),e.$on("click",l[2]),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,[r]){const i={};r&1&&(i.title="Customize "+t[0].title+" Workout"),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}const je="workoutSettingsForm";function Ae(l,e,n){let t,r,i;N(l,I,d=>n(6,t=d)),N(l,we,d=>n(7,i=d));const c=(d,_)=>{const $=d.currentTarget.type==="checkbox"?d.currentTarget.checked:parseInt(d.currentTarget.value);if(!isNaN($)){if(_){o.updateRule(d.currentTarget.name,$);const ge=d.currentTarget.form.querySelector("input[name=total_exercises]");ge.value=o.getTotalExercises(r)}else B(o,r[d.currentTarget.name]=$,r);const L=d.currentTarget.form.querySelector("input[name=total_time]");L.value=X(o.getTotalTime(r))}},u=d=>{const _=d.currentTarget,$=Object.keys(f).includes(_.name),L=["has_plank","with_equipment"].includes(_.name);c(d,!$&&!L)},a=d=>{d.preventDefault();const _=new FormData(d.currentTarget.form);B(o,r.tabatas=parseInt(_.get("tabatas")),r),B(o,r.prep_time=parseInt(_.get("prep_time")),r),B(o,r.time_on=parseInt(_.get("time_on")),r),B(o,r.time_off=parseInt(_.get("time_off")),r),B(o,r.rest_time=parseInt(_.get("rest_time")),r);for(let $ in r.rules)B(o,r.rules[$]=parseInt(_.get($)),r);I.preset=o},s=d=>{d.currentTarget.name==="submit"&&a(d),n(5,p=!1)},m=()=>{const d=[];let _={legend:"Exercises",inputs:[]};return i.forEach($=>{const L={label:$.title,type:"number",value:r.rules[$.id],id:$.id,name:$.id};_.inputs.push(L)}),_.inputs.push({label:"Total Exercises",type:"text",value:o.getTotalExercises(r),id:"total_exercises",name:"total_exercises",readonly:!0}),d.push(_),_={legend:"Time:",inputs:[]},Object.entries(f).forEach($=>{const L={label:$[1],type:"number",value:r[$[0]],id:$[0],name:$[0]};_.inputs.push(L)}),_.inputs.push({label:"Total Time",type:"text",value:X(o.getTotalTime(r)),id:"total_time",name:"total_time",readonly:!0}),d.push(_),_={legend:"Options:",inputs:[]},_.inputs.push({label:"Planks?",type:"slider",checked:r.has_plank,id:"has_plank",name:"has_plank"}),_.inputs.push({label:"Use Bands?",type:"slider",checked:r.with_equipment,id:"with_equipment",name:"with_equipment"}),d.push(_),_={inputs:[{label:"Generate",bindValue:!1,type:"submit",value:"Generate Workout",id:"submit",name:"submit"}]},d.push(_),d},f={prep_time:"Prep Time (seconds)",time_on:"Active Time (seconds)",time_off:"Rest Time (seconds)",rest_time:"Break Time (seconds)",tabatas:"Rounds"},o=ve(t.meta);N(l,o,d=>n(0,r=d));let{open:p=!0}=e;return l.$$set=d=>{"open"in d&&n(5,p=d.open)},[r,u,s,m,o,p]}class Ne extends R{constructor(e){super();V(this,e,Ae,Ce,F,{open:5})}}function ie(l,e,n){const t=l.slice();return t[10]=e[n],t}function ue(l){let e,n=l[10][1]+"",t,r,i,c,u,a;return{c(){e=D("span"),t=K(n),r=S(),this.h()},l(s){e=P(s,"SPAN",{class:!0,"data-value":!0,"data-placeholder":!0});var m=C(e);t=z(m,n),r=O(m),m.forEach(g),this.h()},h(){w(e,"class","sel-box-option svelte-6j4pg4"),w(e,"data-value",i=l[10][0]),w(e,"data-placeholder",c=l[10][1]),M(e,"selected",l[0]===l[10][0])},m(s,m){k(s,e,m),j(e,t),j(e,r),u||(a=G(e,"click",l[5]),u=!0)},p(s,m){m&8&&n!==(n=s[10][1]+"")&&Q(t,n),m&8&&i!==(i=s[10][0])&&w(e,"data-value",i),m&8&&c!==(c=s[10][1])&&w(e,"data-placeholder",c),m&9&&M(e,"selected",s[0]===s[10][0])},d(s){s&&g(e),u=!1,a()}}}function We(l){let e,n,t,r,i,c,u,a=l[3],s=[];for(let m=0;m<a.length;m+=1)s[m]=ue(ie(l,a,m));return{c(){e=D("div"),n=D("span"),t=K(l[1]),r=S(),i=D("div");for(let m=0;m<s.length;m+=1)s[m].c();this.h()},l(m){e=P(m,"DIV",{class:!0,id:!0});var f=C(e);n=P(f,"SPAN",{class:!0,"data-label":!0});var o=C(n);t=z(o,l[1]),o.forEach(g),r=O(f),i=P(f,"DIV",{class:!0});var p=C(i);for(let d=0;d<s.length;d+=1)s[d].l(p);p.forEach(g),f.forEach(g),this.h()},h(){w(n,"class","sel-placeholder svelte-6j4pg4"),w(n,"data-label",l[1]),w(i,"class","sel-box svelte-6j4pg4"),w(e,"class","sel svelte-6j4pg4"),w(e,"id",l[2]),M(e,"active",l[4])},m(m,f){k(m,e,f),j(e,n),j(n,t),j(e,r),j(e,i);for(let o=0;o<s.length;o+=1)s[o].m(i,null);c||(u=G(e,"click",l[6]),c=!0)},p(m,[f]){if(f&2&&Q(t,m[1]),f&2&&w(n,"data-label",m[1]),f&41){a=m[3];let o;for(o=0;o<a.length;o+=1){const p=ie(m,a,o);s[o]?s[o].p(p,f):(s[o]=ue(p),s[o].c(),s[o].m(i,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=a.length}f&4&&w(e,"id",m[2]),f&16&&M(e,"active",m[4])},i:H,o:H,d(m){m&&g(e),x(s,m),c=!1,u()}}}function Le(l,e,n){const t=ee(),r=()=>{const p=document.getElementById(m);if(!p)return null;let d="";return p.querySelectorAll(".sel-box-option").forEach(_=>{_.dataset.value==f&&(d=_.dataset.label)}),d},i=p=>{const d=document.getElementById(m).querySelector(".sel-placeholder");d.textContent=p},c=p=>{p.currentTarget.dataset.value!=f&&(n(0,f=p.currentTarget.dataset.value),i(p.currentTarget.dataset.placeholder),t("change",f))},u=()=>{n(4,a=!a),t("open",a)};be(()=>{const p=r();p&&i(p)});let a=!1,{label:s,name:m,value:f,options:o}=e;return l.$$set=p=>{"label"in p&&n(1,s=p.label),"name"in p&&n(2,m=p.name),"value"in p&&n(0,f=p.value),"options"in p&&n(3,o=p.options)},[f,s,m,o,a,c,u]}class Be extends R{constructor(e){super();V(this,e,Le,We,F,{label:1,name:2,value:0,options:3})}}function ce(l,e,n){const t=l.slice();return t[11]=e[n],t[13]=n,t}function qe(l){let e,n;return e=new le({props:{buttons:typeof l[2]=="function"?l[2](l[11],l[13]):l[2]}}),e.$on("click",l[7]),e.$on("dblclick",l[8]),e.$on("mouseenter",l[9]),e.$on("mouseleave",l[10]),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const i={};r&6&&(i.buttons=typeof t[2]=="function"?t[2](t[11],t[13]):t[2]),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function fe(l){let e,n,t,r,i,c;return n=new Te({props:{name:l[11].display_name,completed:!1,region:l[11].region,target:l[11].target,band_pos:l[11].band_pos,band_pos_text:l[11].band_pos_text,$$slots:{default:[qe]},$$scope:{ctx:l}}}),{c(){e=D("li"),v(n.$$.fragment),t=S(),this.h()},l(u){e=P(u,"LI",{draggable:!0,class:!0});var a=C(e);T(n.$$.fragment,a),t=O(a),a.forEach(g),this.h()},h(){w(e,"draggable",l[3]),w(e,"class","svelte-1i892xx"),M(e,"grabbable",l[3])},m(u,a){k(u,e,a),E(n,e,null),j(e,t),r=!0,i||(c=G(e,"dragstart",l[6]),i=!0)},p(u,a){const s={};a&2&&(s.name=u[11].display_name),a&2&&(s.region=u[11].region),a&2&&(s.target=u[11].target),a&2&&(s.band_pos=u[11].band_pos),a&2&&(s.band_pos_text=u[11].band_pos_text),a&16390&&(s.$$scope={dirty:a,ctx:u}),n.$set(s),(!r||a&8)&&w(e,"draggable",u[3]),a&8&&M(e,"grabbable",u[3])},i(u){r||(b(n.$$.fragment,u),r=!0)},o(u){h(n.$$.fragment,u),r=!1},d(u){u&&g(e),y(n),i=!1,c()}}}function Re(l){let e,n,t,r,i,c,u,a=l[1],s=[];for(let f=0;f<a.length;f+=1)s[f]=fe(ce(l,a,f));const m=f=>h(s[f],1,1,()=>{s[f]=null});return{c(){e=D("h5"),n=K(l[0]),t=S(),r=D("ol");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=P(f,"H5",{class:!0});var o=C(e);n=z(o,l[0]),o.forEach(g),t=O(f),r=P(f,"OL",{class:!0});var p=C(r);for(let d=0;d<s.length;d+=1)s[d].l(p);p.forEach(g),this.h()},h(){w(e,"class","svelte-1i892xx"),w(r,"class","svelte-1i892xx")},m(f,o){k(f,e,o),j(e,n),k(f,t,o),k(f,r,o);for(let p=0;p<s.length;p+=1)s[p].m(r,null);i=!0,c||(u=[G(r,"dragover",he(l[4])),G(r,"drop",l[5])],c=!0)},p(f,[o]){if((!i||o&1)&&Q(n,f[0]),o&14){a=f[1];let p;for(p=0;p<a.length;p+=1){const d=ce(f,a,p);s[p]?(s[p].p(d,o),b(s[p],1)):(s[p]=fe(d),s[p].c(),b(s[p],1),s[p].m(r,null))}for(Y(),p=a.length;p<s.length;p+=1)m(p);J()}},i(f){if(!i){for(let o=0;o<a.length;o+=1)b(s[o]);i=!0}},o(f){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)h(s[o]);i=!1},d(f){f&&g(e),f&&g(t),f&&g(r),x(s,f),c=!1,ke(u)}}}function Ve(l,e,n){let{title:t,items:r,buttons:i}=e,{draggable:c=!0}=e;function u(d){q.call(this,l,d)}function a(d){q.call(this,l,d)}function s(d){q.call(this,l,d)}function m(d){q.call(this,l,d)}function f(d){q.call(this,l,d)}function o(d){q.call(this,l,d)}function p(d){q.call(this,l,d)}return l.$$set=d=>{"title"in d&&n(0,t=d.title),"items"in d&&n(1,r=d.items),"buttons"in d&&n(2,i=d.buttons),"draggable"in d&&n(3,c=d.draggable)},[t,r,i,c,u,a,s,m,f,o,p]}class pe extends R{constructor(e){super();V(this,e,Ve,Re,F,{title:0,items:1,buttons:2,draggable:3})}}function me(l){let e,n;return e=new pe({props:{title:"Planks",items:l[0][A.PLANK],draggable:l[2]>1,buttons:l[6]}}),e.$on("dragstart",l[3]),e.$on("drop",l[4]),e.$on("click",l[5]),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const i={};r&1&&(i.items=t[0][A.PLANK]),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Fe(l){let e,n,t,r;e=new pe({props:{title:"Exercises",items:l[0][A.EXERCISE],draggable:l[1]>1,buttons:l[6]}}),e.$on("dragstart",l[3]),e.$on("drop",l[4]),e.$on("click",l[5]);let i=l[0][A.PLANK].length>0&&l[0].meta.has_plank===!0&&me(l);return{c(){v(e.$$.fragment),n=S(),i&&i.c(),t=W()},l(c){T(e.$$.fragment,c),n=O(c),i&&i.l(c),t=W()},m(c,u){E(e,c,u),k(c,n,u),i&&i.m(c,u),k(c,t,u),r=!0},p(c,[u]){const a={};u&1&&(a.items=c[0][A.EXERCISE]),e.$set(a),c[0][A.PLANK].length>0&&c[0].meta.has_plank===!0?i?(i.p(c,u),u&1&&b(i,1)):(i=me(c),i.c(),b(i,1),i.m(t.parentNode,t)):i&&(Y(),h(i,1,1,()=>{i=null}),J())},i(c){r||(b(e.$$.fragment,c),b(i),r=!0)},o(c){h(e.$$.fragment,c),h(i),r=!1},d(c){y(e,c),c&&g(n),i&&i.d(c),c&&g(t)}}}function Ke(l,e,n){let t;N(l,I,f=>n(0,t=f));let r=t[A.EXERCISE].length,i=t[A.PLANK].length,c=null;return[t,r,i,f=>{c=f.currentTarget,f.dataTransfer.effectAllowed="move"},f=>{f.preventDefault();const o=f.path.indexOf(c.parentNode);if(o<1)return;const p=f.path[o-1];if(c===p)return;const d=Array.from(c.parentNode.children);I.swapExercise(d.indexOf(c),d.indexOf(p),A.EXERCISE)},f=>{const o=f.currentTarget.dataset,p=parseInt(o.id);switch(o.action){case"up":case"down":I.swapExercise(p,p+(o.action=="down"?1:-1),o.type);break;case"delete":case"replace":I.alterExercise(p,o.type,o.action);break}},(f,o)=>{const p=f.type===A.PLANK?i>1:r>1,d=f.type===A.PLANK?!1:r>1,_={"data-id":o,"data-type":f.type};return[{icon:"bi bi-arrow-repeat",title:"Replace Exercise",disabled:!1,data:Object.assign({"data-action":"replace"},_)},{icon:"bi bi-arrow-up-circle",title:"Move Up",disabled:!p,data:Object.assign({"data-action":"up"},_)},{icon:"bi bi-arrow-down-circle",title:"Move Down",disabled:!p,data:Object.assign({"data-action":"down"},_)},{icon:"bi bi-trash",title:"Trash",disabled:!d,data:Object.assign({"data-action":"delete"},_)}]}]}class ze extends R{constructor(e){super();V(this,e,Ke,Fe,F,{})}}function de(l){let e,n,t,r,i,c,u,a,s,m,f;return e=new re({props:{click:l[4],$$slots:{default:[Me]},$$scope:{ctx:l}}}),r=new le({props:{buttons:l[5]()}}),r.$on("click",l[3]),u=new ze({}),s=new re({props:{click:l[4],$$slots:{default:[Ue]},$$scope:{ctx:l}}}),{c(){n=D("div"),v(e.$$.fragment),t=S(),i=D("div"),v(r.$$.fragment),c=S(),v(u.$$.fragment),a=S(),m=D("div"),v(s.$$.fragment),this.h()},l(o){n=P(o,"DIV",{style:!0});var p=C(n);T(e.$$.fragment,p),t=O(o),i=P(o,"DIV",{style:!0});var d=C(i);T(r.$$.fragment,d),c=O(o),T(u.$$.fragment,o),a=O(o),m=P(o,"DIV",{style:!0});var _=C(m);T(s.$$.fragment,_),this.h()},h(){U(n,"display","contents"),U(n,"--theme-icon-size",".4rem"),U(i,"display","contents"),U(i,"--theme-icon-size","1.6rem"),U(m,"display","contents"),U(m,"--theme-icon-size",".3rem")},m(o,p){k(o,n,p),E(e,n,null),k(o,t,p),k(o,i,p),E(r,i,null),k(o,c,p),E(u,o,p),k(o,a,p),k(o,m,p),E(s,m,null),f=!0},p(o,p){const d={};p&1026&&(d.$$scope={dirty:p,ctx:o}),e.$set(d);const _={};p&1026&&(_.$$scope={dirty:p,ctx:o}),s.$set(_)},i(o){f||(b(e.$$.fragment,o),b(r.$$.fragment,o),b(u.$$.fragment,o),b(s.$$.fragment,o),f=!0)},o(o){h(e.$$.fragment,o),h(r.$$.fragment,o),h(u.$$.fragment,o),h(s.$$.fragment,o),f=!1},d(o){o&&g(n),y(e,o),o&&g(t),o&&g(i),y(r,o),o&&g(c),y(u,o),o&&g(a),o&&g(m),y(s,o)}}}function Me(l){let e,n;return e=new oe({props:{label:"Total Time",value:X(I.getTotalTime(l[1]))}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const i={};r&2&&(i.value=X(I.getTotalTime(t[1]))),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ue(l){let e,n;return e=new oe({props:{label:"Total Time",value:X(I.getTotalTime(l[1]))}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const i={};r&2&&(i.value=X(I.getTotalTime(t[1]))),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Xe(l){let e,n,t,r,i,c;e=new ae({props:{title:""+((l[1].meta.title?l[1].meta.title:"Create")+" Workout")}}),t=new Be({props:{label:"Presets",name:"preset",value:l[1].meta.id,options:l[2].map(_e)}}),t.$on("change",l[7]),t.$on("open",l[8]);let u=!l[0]&&l[1].exercises.length&&de(l);return{c(){v(e.$$.fragment),n=S(),v(t.$$.fragment),r=S(),u&&u.c(),i=W()},l(a){T(e.$$.fragment,a),n=O(a),T(t.$$.fragment,a),r=O(a),u&&u.l(a),i=W()},m(a,s){E(e,a,s),k(a,n,s),E(t,a,s),k(a,r,s),u&&u.m(a,s),k(a,i,s),c=!0},p(a,[s]){const m={};s&2&&(m.title=""+((a[1].meta.title?a[1].meta.title:"Create")+" Workout")),e.$set(m);const f={};s&2&&(f.value=a[1].meta.id),s&4&&(f.options=a[2].map(_e)),t.$set(f),!a[0]&&a[1].exercises.length?u?(u.p(a,s),s&3&&b(u,1)):(u=de(a),u.c(),b(u,1),u.m(i.parentNode,i)):u&&(Y(),h(u,1,1,()=>{u=null}),J())},i(a){c||(b(e.$$.fragment,a),b(t.$$.fragment,a),b(u),c=!0)},o(a){h(e.$$.fragment,a),h(t.$$.fragment,a),h(u),c=!1},d(a){y(e,a),a&&g(n),y(t,a),a&&g(r),u&&u.d(a),a&&g(i)}}}const _e=l=>[l.get("id"),l.get("title")];function Ge(l,e,n){let t,r;N(l,I,p=>n(1,t=p)),N(l,Ee,p=>n(2,r=p));let i,{settingsOpen:c}=e;const u=ee(),a=p=>{switch(p.currentTarget.dataset.action){case"reset":I.preset=I.preset;break;case"settings_open":n(6,c=!0);break}},s=()=>{I.save(!1),u("workout")},m=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:Pe,props:{}},{component:ye,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}],f=p=>I.preset=r.find(d=>d.get("id")==p.detail),o=p=>n(0,i=p.detail);return l.$$set=p=>{"settingsOpen"in p&&n(6,c=p.settingsOpen)},[i,t,r,a,s,m,c,f,o]}class He extends R{constructor(e){super();V(this,e,Ge,Xe,F,{settingsOpen:6})}}function Ye(l){let e,n,t,r,i,c,u,a;return{c(){e=D("h2"),n=K("Unable to connect to database"),t=S(),r=D("p"),i=K("This is embarrassing! I'm unable to connect to the database."),c=S(),u=D("p"),a=K("Please try again later. Sorry!"),this.h()},l(s){e=P(s,"H2",{class:!0});var m=C(e);n=z(m,"Unable to connect to database"),m.forEach(g),t=O(s),r=P(s,"P",{});var f=C(r);i=z(f,"This is embarrassing! I'm unable to connect to the database."),f.forEach(g),c=O(s),u=P(s,"P",{});var o=C(u);a=z(o,"Please try again later. Sorry!"),o.forEach(g),this.h()},h(){w(e,"class","center error")},m(s,m){k(s,e,m),j(e,n),k(s,t,m),k(s,r,m),j(r,i),k(s,c,m),k(s,u,m),j(u,a)},p:H,i:H,o:H,d(s){s&&g(e),s&&g(t),s&&g(r),s&&g(c),s&&g(u)}}}function Je(l){let e,n,t,r;const i=[Ze,Qe],c=[];function u(a,s){return a[0]?0:1}return e=u(l),n=c[e]=i[e](l),{c(){n.c(),t=W()},l(a){n.l(a),t=W()},m(a,s){c[e].m(a,s),k(a,t,s),r=!0},p(a,s){let m=e;e=u(a),e===m?c[e].p(a,s):(Y(),h(c[m],1,1,()=>{c[m]=null}),J(),n=c[e],n?n.p(a,s):(n=c[e]=i[e](a),n.c()),b(n,1),n.m(t.parentNode,t))},i(a){r||(b(n),r=!0)},o(a){h(n),r=!1},d(a){c[e].d(a),a&&g(t)}}}function Qe(l){let e,n,t;function r(c){l[6](c)}let i={};return l[0]!==void 0&&(i.settingsOpen=l[0]),e=new He({props:i}),te.push(()=>ne(e,"settingsOpen",r)),e.$on("workout",l[3]),{c(){v(e.$$.fragment)},l(c){T(e.$$.fragment,c)},m(c,u){E(e,c,u),t=!0},p(c,u){const a={};!n&&u&1&&(n=!0,a.settingsOpen=c[0],se(()=>n=!1)),e.$set(a)},i(c){t||(b(e.$$.fragment,c),t=!0)},o(c){h(e.$$.fragment,c),t=!1},d(c){y(e,c)}}}function Ze(l){let e,n,t,r,i;e=new ae({props:{title:"Customize Workout"}});function c(a){l[5](a)}let u={};return l[0]!==void 0&&(u.open=l[0]),t=new Ne({props:u}),te.push(()=>ne(t,"open",c)),{c(){v(e.$$.fragment),n=S(),v(t.$$.fragment)},l(a){T(e.$$.fragment,a),n=O(a),T(t.$$.fragment,a)},m(a,s){E(e,a,s),k(a,n,s),E(t,a,s),i=!0},p(a,s){const m={};!r&&s&1&&(r=!0,m.open=a[0],se(()=>r=!1)),t.$set(m)},i(a){i||(b(e.$$.fragment,a),b(t.$$.fragment,a),i=!0)},o(a){h(e.$$.fragment,a),h(t.$$.fragment,a),i=!1},d(a){y(e,a),a&&g(n),y(t,a)}}}function xe(l){let e,n,t,r,i;const c=[Je,Ye],u=[];function a(s,m){return s[1]?0:1}return n=a(l),t=u[n]=c[n](l),{c(){e=S(),t.c(),r=W(),this.h()},l(s){$e('[data-svelte="svelte-8h4qcl"]',document.head).forEach(g),e=O(s),t.l(s),r=W(),this.h()},h(){document.title="SWEAT Workout"},m(s,m){k(s,e,m),u[n].m(s,m),k(s,r,m),i=!0},p(s,[m]){let f=n;n=a(s),n===f?u[n].p(s,m):(Y(),h(u[f],1,1,()=>{u[f]=null}),J(),t=u[n],t?t.p(s,m):(t=u[n]=c[n](s),t.c()),b(t,1),t.m(r.parentNode,r))},i(s){i||(b(t),i=!0)},o(s){h(t),i=!1},d(s){s&&g(e),u[n].d(s),s&&g(r)}}}async function ct({fetch:l}){const e={xml:null};let n=!1;if(Z.subscribe(r=>{n=r!==null})(),!n){const r=await l("/data/workout_list.xml");r.ok&&(e.xml=await r.text())}return{props:e}}function et(l,e,n){let t,r;N(l,Z,f=>n(1,r=f));let{xml:i}=e;const c=Se.routine;N(l,c,f=>n(7,t=f));const u=()=>{Oe.setItem("routine",[]),Ie(t.tabataLink)};i&&Z.setDb(i);let a=!1;function s(f){a=f,n(0,a)}function m(f){a=f,n(0,a)}return l.$$set=f=>{"xml"in f&&n(4,i=f.xml)},[a,r,c,u,i,s,m]}class ft extends R{constructor(e){super();V(this,e,et,xe,F,{xml:4})}}export{ft as default,ct as load};
