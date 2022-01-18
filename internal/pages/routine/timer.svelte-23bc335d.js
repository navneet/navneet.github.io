import{S as j,i as A,s as C,v as h,w as $,x as v,F as L,p as f,n as _,A as y,L as S,M as O,V as M,j as N,e as Q,l as E,c as H,a as J,G as R,f as w,d as T,u as X,k as P,m as q,o as z,$ as Y,N as Z,O as x,Q as ee}from"../../chunks/vendor-7dd5008c.js";import{A as V,L as te}from"../../chunks/appStore-1a30960b.js";import{V as K}from"../../chunks/Voice-d1b93c82.js";import{F as ne,M as se,I as re,P as oe,L as ae}from"../../chunks/playPauseToggleIcon-5d114729.js";import{T as ie}from"../../chunks/TimeKeeper-157a15c5.js";function ce(o){let t,n;return t=new ne({props:{id:"timerSettingsForm",title:"Timer Settings",fieldsets:o[2]()}}),t.$on("change",o[1]),t.$on("submit",o[3]),t.$on("click",o[4]),{c(){h(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p:L,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function le(o,t,n){let e;const s=V.userSettings;S(o,s,a=>n(6,e=a));const i=a=>{switch(a.currentTarget.name){case"prep_time":case"announce_every":const u=parseInt(a.currentTarget.value);isNaN(u)||O(s,e[a.currentTarget.name]=u,e);break;case"show_plank":case"use_voice":O(s,e[a.currentTarget.name]=a.currentTarget.checked,e);break;case"preferred_voice":O(s,e.preferred_voice=a.currentTarget.value,e),K.defaultVoice=e.preferred_voice;break}},r=()=>[{legend:"Update",inputs:[{id:"prep_time",name:"prep_time",value:e.prep_time,label:"Prep Time (seconds)",type:"number"},{id:"announce_every",name:"announce_every",value:e.announce_every,label:"Announce Every (seconds)",type:"number"},{id:"show_plank",name:"show_plank",checked:e.show_plank,label:"Show Planks?",type:"slider"},{id:"use_voice",name:"use_voice",checked:e.use_voice,label:"Use Voice?",type:"slider"},{id:"preferred_voice",name:"preferred_voice",value:e.preferred_voice,label:"Preferred Voice",type:"select",placeholder:"Available Voices",options:K.getVoices(null,!0)}]}];function c(a){M.call(this,o,a)}function l(a){M.call(this,o,a)}return[s,i,r,c,l]}class ue extends j{constructor(t){super();A(this,t,le,ce,C,{})}}function G(o){let t,n;return t=new ae({props:{label:"Plank",value:o[0]}}),{c(){h(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p(e,s){const i={};s&1&&(i.value=e[0]),t.$set(i)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function pe(o){let t,n,e=o[2].show_plank&&G(o);return{c(){e&&e.c(),t=P()},l(s){e&&e.l(s),t=P()},m(s,i){e&&e.m(s,i),w(s,t,i),n=!0},p(s,i){s[2].show_plank?e?(e.p(s,i),i&4&&f(e,1)):(e=G(s),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(q(),_(e,1,1,()=>{e=null}),z())},i(s){n||(f(e),n=!0)},o(s){_(e),n=!1},d(s){e&&e.d(s),s&&T(t)}}}function me(o){let t,n,e,s,i;return t=new se({props:{timeKeeper:o[5],value:o[1],$$slots:{default:[pe]},$$scope:{ctx:o}}}),e=new re({props:{buttons:o[7]()}}),e.$on("click",o[6]),{c(){h(t.$$.fragment),n=N(),s=Q("div"),h(e.$$.fragment),this.h()},l(r){$(t.$$.fragment,r),n=E(r),s=H(r,"DIV",{style:!0});var c=J(s);$(e.$$.fragment,c),this.h()},h(){R(s,"display","contents"),R(s,"--theme-icon-size","1.6rem")},m(r,c){v(t,r,c),w(r,n,c),w(r,s,c),v(e,s,null),i=!0},p(r,[c]){const l={};c&2&&(l.value=r[1]),c&8197&&(l.$$scope={dirty:c,ctx:r}),t.$set(l)},i(r){i||(f(t.$$.fragment,r),f(e.$$.fragment,r),i=!0)},o(r){_(t.$$.fragment,r),_(e.$$.fragment,r),i=!1},d(r){y(t,r),r&&T(n),r&&T(s),y(e,r)}}}function fe(o,t,n){let e,s,i,r,{settingsOpen:c,planks:l}=t;const a=V.userSettings;S(o,a,p=>n(2,e=p));const u=V.routine;S(o,u,p=>n(10,i=p));const d=V.docBodyBgColor,m=ie();S(o,m,p=>n(9,s=p));const U=p=>{switch(p.currentTarget.dataset.action){case"reset":m.reset();break;case"settings_open":m.isTicking()&&m.stop(),n(8,c=!0);break}},W=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:oe,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}];X(()=>(m.set(i.stopTime),()=>{D(),O(u,i.stopTime=s,i)}));const D=m.subscribe(p=>{const g=p-e.prep_time,k=g<0?Math.abs(g):g;if(!m.isTicking()){n(1,r=g>0?m.asClock(k):0),d.set(null);return}if(e.use_voice){let b="";switch(g){case 0:b+="Go";break;case-1:case-2:case-3:b+=k.toString();break;default:const F=e.announce_every;if(F>0&&k%F==0){const{m:B,s:I}=m.minSecs(k);B!==0&&(b+=B+" minute"+(B==1?" ":"s ")),I!==0&&(b+=I+" second"+(I==1?"":"s"))}break}b.length&&K.speak(b)}g<0?(n(1,r=k),d.set("PREP")):(n(1,r=m.asClock(k)),d.set("WORK"))});return o.$$set=p=>{"settingsOpen"in p&&n(8,c=p.settingsOpen),"planks"in p&&n(0,l=p.planks)},[l,r,e,a,u,m,U,W,c]}class _e extends j{constructor(t){super();A(this,t,fe,me,C,{settingsOpen:8,planks:0})}}function de(o){let t,n,e;function s(r){o[4](r)}let i={planks:o[1]()};return o[0]!==void 0&&(i.settingsOpen=o[0]),t=new _e({props:i}),Z.push(()=>x(t,"settingsOpen",s)),{c(){h(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,c){v(t,r,c),e=!0},p(r,c){const l={};!n&&c&1&&(n=!0,l.settingsOpen=r[0],ee(()=>n=!1)),t.$set(l)},i(r){e||(f(t.$$.fragment,r),e=!0)},o(r){_(t.$$.fragment,r),e=!1},d(r){y(t,r)}}}function ge(o){let t,n;return t=new ue({}),t.$on("click",o[2]),t.$on("submit",o[3]),{c(){h(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p:L,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function ke(o){let t,n,e,s,i;const r=[ge,de],c=[];function l(a,u){return a[0]?0:1}return n=l(o),e=c[n]=r[n](o),{c(){t=N(),e.c(),s=P(),this.h()},l(a){Y('[data-svelte="svelte-7xz59n"]',document.head).forEach(T),t=E(a),e.l(a),s=P(),this.h()},h(){document.title="SWEAT Timer"},m(a,u){w(a,t,u),c[n].m(a,u),w(a,s,u),i=!0},p(a,[u]){let d=n;n=l(a),n===d?c[n].p(a,u):(q(),_(c[d],1,1,()=>{c[d]=null}),z(),e=c[n],e?e.p(a,u):(e=c[n]=r[n](a),e.c()),f(e,1),e.m(s.parentNode,s))},i(a){i||(f(e),i=!0)},o(a){_(e),i=!1},d(a){a&&T(t),c[n].d(a),a&&T(s)}}}function be(o,t,n){const e=()=>{const l=te.getItem("workout");return(l&&"planks"in l?l.planks:[]).map(u=>u.display_name)};let s=!1;const i=()=>n(0,s=!s),r=()=>n(0,s=!s);function c(l){s=l,n(0,s)}return[s,e,i,r,c]}class we extends j{constructor(t){super();A(this,t,be,ke,C,{})}}export{we as default};
