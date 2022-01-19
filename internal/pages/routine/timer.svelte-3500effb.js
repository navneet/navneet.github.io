import{S as j,i as A,s as C,v as h,w as $,x as v,F as L,p as m,n as _,A as T,L as S,O,X as E,j as M,e as Q,l as N,c as X,a as H,G as R,f as w,d as y,u as J,k as P,m as q,o as z,a1 as Y,P as Z,Q as x,T as ee}from"../../chunks/vendor-a6521ad7.js";import{A as B,L as te}from"../../chunks/appStore-ff2f2670.js";import{V as K}from"../../chunks/helpers-3dc73931.js";import{F as ne,M as se,I as re,P as ae,L as oe}from"../../chunks/playPauseToggleIcon-1b3930ec.js";import{T as ie}from"../../chunks/TimeKeeper-21e41350.js";function ce(a){let t,n;return t=new ne({props:{id:"timerSettingsForm",title:"Timer Settings",fieldsets:a[2]()}}),t.$on("change",a[1]),t.$on("submit",a[3]),t.$on("click",a[4]),{c(){h(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p:L,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function le(a,t,n){let e;const s=B.userSettings;S(a,s,o=>n(6,e=o));const i=o=>{switch(o.currentTarget.name){case"prep_time":case"announce_every":const u=parseInt(o.currentTarget.value);isNaN(u)||O(s,e[o.currentTarget.name]=u,e);break;case"show_plank":case"use_voice":O(s,e[o.currentTarget.name]=o.currentTarget.checked,e);break;case"preferred_voice":O(s,e.preferred_voice=o.currentTarget.value,e),K.defaultVoice=e.preferred_voice;break}},r=()=>[{legend:"Update",inputs:[{id:"prep_time",name:"prep_time",value:e.prep_time,label:"Prep Time (seconds)",type:"number"},{id:"announce_every",name:"announce_every",value:e.announce_every,label:"Announce Every (seconds)",type:"number"},{id:"show_plank",name:"show_plank",checked:e.show_plank,label:"Show Planks?",type:"slider"},{id:"use_voice",name:"use_voice",checked:e.use_voice,label:"Use Voice?",type:"slider"},{id:"preferred_voice",name:"preferred_voice",value:e.preferred_voice,label:"Preferred Voice",type:"select",placeholder:"Available Voices",options:K.getVoices(null,!0)}]}];function c(o){E.call(this,a,o)}function l(o){E.call(this,a,o)}return[s,i,r,c,l]}class ue extends j{constructor(t){super();A(this,t,le,ce,C,{})}}function G(a){let t,n;return t=new oe({props:{label:"Plank",value:a[0]}}),{c(){h(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p(e,s){const i={};s&1&&(i.value=e[0]),t.$set(i)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function pe(a){let t,n,e=a[2].show_plank&&G(a);return{c(){e&&e.c(),t=P()},l(s){e&&e.l(s),t=P()},m(s,i){e&&e.m(s,i),w(s,t,i),n=!0},p(s,i){s[2].show_plank?e?(e.p(s,i),i&4&&m(e,1)):(e=G(s),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(q(),_(e,1,1,()=>{e=null}),z())},i(s){n||(m(e),n=!0)},o(s){_(e),n=!1},d(s){e&&e.d(s),s&&y(t)}}}function fe(a){let t,n,e,s,i;return t=new se({props:{timeKeeper:a[5],value:a[1],$$slots:{default:[pe]},$$scope:{ctx:a}}}),e=new re({props:{buttons:a[7]()}}),e.$on("click",a[6]),{c(){h(t.$$.fragment),n=M(),s=Q("div"),h(e.$$.fragment),this.h()},l(r){$(t.$$.fragment,r),n=N(r),s=X(r,"DIV",{style:!0});var c=H(s);$(e.$$.fragment,c),this.h()},h(){R(s,"display","contents"),R(s,"--theme-icon-size","1.6rem")},m(r,c){v(t,r,c),w(r,n,c),w(r,s,c),v(e,s,null),i=!0},p(r,[c]){const l={};c&2&&(l.value=r[1]),c&8197&&(l.$$scope={dirty:c,ctx:r}),t.$set(l)},i(r){i||(m(t.$$.fragment,r),m(e.$$.fragment,r),i=!0)},o(r){_(t.$$.fragment,r),_(e.$$.fragment,r),i=!1},d(r){T(t,r),r&&y(n),r&&y(s),T(e,r)}}}function me(a,t,n){let e,s,i,r,{settingsOpen:c,planks:l}=t;const o=B.userSettings;S(a,o,p=>n(2,e=p));const u=B.routine;S(a,u,p=>n(10,i=p));const d=B.docBodyBgColor,f=ie();S(a,f,p=>n(9,s=p));const U=p=>{switch(p.currentTarget.dataset.action){case"reset":f.reset();break;case"settings_open":f.isTicking()&&f.stop(),n(8,c=!0);break}},W=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:ae,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}];J(()=>(f.set(i.stopTime),()=>{D(),O(u,i.stopTime=s,i),d.set(null)}));const D=f.subscribe(p=>{const g=p-e.prep_time,k=g<0?Math.abs(g):g;if(!f.isTicking()){n(1,r=g>0?f.asClock(k):0),d.set(null);return}if(e.use_voice){let b="";switch(g){case 0:b+="Go";break;case-1:case-2:case-3:b+=k.toString();break;default:const F=e.announce_every;if(F>0&&k%F==0){const{m:V,s:I}=f.minSecs(k);V!==0&&(b+=V+" minute"+(V==1?" ":"s ")),I!==0&&(b+=I+" second"+(I==1?"":"s"))}break}b.length&&K.speak(b)}g<0?(n(1,r=k),d.set("PREP")):(n(1,r=f.asClock(k)),d.set("WORK"))});return a.$$set=p=>{"settingsOpen"in p&&n(8,c=p.settingsOpen),"planks"in p&&n(0,l=p.planks)},[l,r,e,o,u,f,U,W,c]}class _e extends j{constructor(t){super();A(this,t,me,fe,C,{settingsOpen:8,planks:0})}}function de(a){let t,n,e;function s(r){a[4](r)}let i={planks:a[1]()};return a[0]!==void 0&&(i.settingsOpen=a[0]),t=new _e({props:i}),Z.push(()=>x(t,"settingsOpen",s)),{c(){h(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,c){v(t,r,c),e=!0},p(r,c){const l={};!n&&c&1&&(n=!0,l.settingsOpen=r[0],ee(()=>n=!1)),t.$set(l)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){_(t.$$.fragment,r),e=!1},d(r){T(t,r)}}}function ge(a){let t,n;return t=new ue({}),t.$on("click",a[2]),t.$on("submit",a[3]),{c(){h(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p:L,i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function ke(a){let t,n,e,s,i;const r=[ge,de],c=[];function l(o,u){return o[0]?0:1}return n=l(a),e=c[n]=r[n](a),{c(){t=M(),e.c(),s=P(),this.h()},l(o){Y('[data-svelte="svelte-7xz59n"]',document.head).forEach(y),t=N(o),e.l(o),s=P(),this.h()},h(){document.title="SWEAT Timer"},m(o,u){w(o,t,u),c[n].m(o,u),w(o,s,u),i=!0},p(o,[u]){let d=n;n=l(o),n===d?c[n].p(o,u):(q(),_(c[d],1,1,()=>{c[d]=null}),z(),e=c[n],e?e.p(o,u):(e=c[n]=r[n](o),e.c()),m(e,1),e.m(s.parentNode,s))},i(o){i||(m(e),i=!0)},o(o){_(e),i=!1},d(o){o&&y(t),c[n].d(o),o&&y(s)}}}function be(a,t,n){const e=()=>{const l=te.getItem("workout");return(l&&"planks"in l?l.planks:[]).map(u=>u.display_name)};let s=!1;const i=()=>n(0,s=!s),r=()=>n(0,s=!s);function c(l){s=l,n(0,s)}return[s,e,i,r,c]}class we extends j{constructor(t){super();A(this,t,be,ke,C,{})}}export{we as default};
