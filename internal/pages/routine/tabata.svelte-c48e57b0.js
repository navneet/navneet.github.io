import{D as Re,S as A,i as D,s as U,T as te,k as C,w as y,m as W,x as R,g as v,y as S,V as ne,W as re,X as se,q as d,o as b,d as h,B as T,H as F,M as V,O as J,Y as ae,e as P,c as B,a as K,b as N,G as O,K as z,l as L,n as G,p as Y,I as oe,Q as Z,t as H,h as q,j as Se,R as le,f as ce,U as ie,a3 as Te,a4 as Ee,a2 as Ie,a5 as Pe}from"../../chunks/vendor-e13e40a5.js";import{A as M,L as ue,S as x}from"../../chunks/appStore-343e38e2.js";import{r as $,R as Q,E as Be,S as Oe}from"../../chunks/exerciseCard-0ce116b0.js";import{V as ee,s as fe,P as Ke}from"../../chunks/helpers-7746061f.js";import{g as Ce}from"../../chunks/navigation-bd39ff07.js";import{L as We,F as je,a as X,M as Ve,I as Ne,P as Le}from"../../chunks/playPauseToggleIcon-daa24825.js";import{T as Ae}from"../../chunks/TimeKeeper-59cb4b66.js";import"../../chunks/stores-e2f0a4ed.js";import"../../chunks/singletons-a6a7384f.js";const De=()=>{const{subscribe:l,set:e,update:r}=Re([]),t=s=>{e(n(s.meta,s.exercises))},n=(s,c)=>{let i=[];for(let f=0;f<s.tabatas;f++)if(c.forEach((p,m)=>{const g=Object.assign({cycle:m+1,round:f+1,elapsed:0,duration:s.time_on},p);if(g.type=$.WORK,i.push(Q(g)),m<c.length-1){const w={name:"Rest",display_name:"Rest",type:$.REST,cycle:m+1,round:f+1,elapsed:0,duration:s.time_off};i.push(Q(w))}}),f<s.tabatas-1){const p={name:"Break",display_name:"Break",type:$.BREAK,cycle:0,round:f+2,elapsed:0,duration:s.rest_time};i.push(Q(p))}return i.unshift(Q({name:"Prepare",display_name:"Prep",type:$.PREP,cycle:0,round:0,elapsed:0,duration:s.prep_time})),i};return{subscribe:l,set:e,update:r,setWorkout:t,reset:()=>{r(s=>s.map(c=>(c.elapsed=0,c)))},isComplete:()=>{let s=!1;return r(c=>(s=Boolean(c.length)&&c.every(i=>i.elapsed===i.duration),c)),s},hasStarted:()=>{let s=!1;return l(i=>{i.length&&(s=i[0].elapsed>0)})(),s}}};var I=De();function Ue(l){let e,r,t;const n=l[1].default,a=te(n,l,l[0],null);return r=new We({props:{label:"Create New Workout",type:"button",name:"create",id:"create"}}),r.$on("click",l[2]),{c(){a&&a.c(),e=C(),y(r.$$.fragment)},l(o){a&&a.l(o),e=W(o),R(r.$$.fragment,o)},m(o,u){a&&a.m(o,u),v(o,e,u),S(r,o,u),t=!0},p(o,[u]){a&&a.p&&(!t||u&1)&&ne(a,n,o,o[0],t?se(n,o[0],u,null):re(o[0]),null)},i(o){t||(d(a,o),d(r.$$.fragment,o),t=!0)},o(o){b(a,o),b(r.$$.fragment,o),t=!1},d(o){a&&a.d(o),o&&h(e),T(r,o)}}}function He(l,e,r){let{$$slots:t={},$$scope:n}=e;const a=()=>Ce("/workout",{replaceState:!0});return l.$$set=o=>{"$$scope"in o&&r(0,n=o.$$scope)},[n,t,a]}class pe extends A{constructor(e){super();D(this,e,He,Ue,U,{})}}function qe(l){let e,r;return e=new je({props:{id:"tabataSettingsForm",title:"Tabata Settings",fieldsets:l[1]()}}),e.$on("change",l[2]),e.$on("submit",l[3]),e.$on("click",l[4]),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p:F,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Fe(l,e,r){let t,n;V(l,I,i=>r(7,n=i));const a=M.userSettings;V(l,a,i=>r(6,t=i));const o=()=>{const i=n.find(w=>w.type===$.PREP),f=n.find(w=>w.type===$.WORK),p=n.find(w=>w.type===$.REST),m=n.find(w=>w.type===$.BREAK);return[{legend:"Runtime",inputs:[{id:"prep_time",name:"PREP",value:i?i.duration:0,label:"Prep Time (seconds)",type:"number"},{id:"time_on",name:"WORK",value:f?f.duration:0,label:"Exercise Time (seconds)",type:"number"},{id:"time_off",name:"REST",value:p?p.duration:0,label:"Rest Time (seconds)",type:"number"},{id:"rest_time",name:"BREAK",value:m?m.duration:0,label:"Break Time (seconds)",type:"number"},{id:"round",name:"round",value:n.length?n[n.length-1].round:0,label:"Rounds",type:"number"},{id:"use_voice",name:"use_voice",checked:t.use_voice,label:"Use Voice?",type:"slider"},{id:"preferred_voice",name:"preferred_voice",value:t.preferred_voice,label:"Preferred Voice",type:"select",placeholder:"Available Voices",options:ee.getVoices(null,!0)}]}]},u=i=>{switch(i.currentTarget.name){case"PREP":case"WORK":case"REST":case"BREAK":const f=parseInt(i.currentTarget.value);isNaN(f)||I.update(m=>(m.forEach((g,w)=>{g.type===$[i.currentTarget.name]&&m[w].elapsed!==m[w].duration&&(m[w].duration=f)}),m));break;case"round":const p=parseInt(i.currentTarget.value);!isNaN(p)&&p>0&&I.update(m=>m.filter(g=>g.round<=p));break;case"use_voice":J(a,t.use_voice=i.currentTarget.checked,t);break;case"preferred_voice":J(a,t.preferred_voice=i.currentTarget.value,t),ee.defaultVoice=t.preferred_voice;break}};function s(i){ae.call(this,l,i)}function c(i){ae.call(this,l,i)}return[a,o,u,s,c]}class Ge extends A{constructor(e){super();D(this,e,Fe,qe,U,{})}}function Ye(l){let e,r,t,n,a,o,u,s,c;return r=new X({props:{label:"Elapsed",value:l[0]}}),n=new X({props:{label:"Remaining",value:l[1]}}),o=new X({props:{label:"Cycles",value:l[2]}}),s=new X({props:{label:"Tabatas",value:l[3]}}),{c(){e=P("div"),y(r.$$.fragment),t=C(),y(n.$$.fragment),a=C(),y(o.$$.fragment),u=C(),y(s.$$.fragment),this.h()},l(i){e=B(i,"DIV",{class:!0});var f=K(e);R(r.$$.fragment,f),t=W(f),R(n.$$.fragment,f),a=W(f),R(o.$$.fragment,f),u=W(f),R(s.$$.fragment,f),f.forEach(h),this.h()},h(){N(e,"class","svelte-1ujgwto")},m(i,f){v(i,e,f),S(r,e,null),O(e,t),S(n,e,null),O(e,a),S(o,e,null),O(e,u),S(s,e,null),c=!0},p(i,[f]){const p={};f&1&&(p.value=i[0]),r.$set(p);const m={};f&2&&(m.value=i[1]),n.$set(m);const g={};f&4&&(g.value=i[2]),o.$set(g);const w={};f&8&&(w.value=i[3]),s.$set(w)},i(i){c||(d(r.$$.fragment,i),d(n.$$.fragment,i),d(o.$$.fragment,i),d(s.$$.fragment,i),c=!0)},o(i){b(r.$$.fragment,i),b(n.$$.fragment,i),b(o.$$.fragment,i),b(s.$$.fragment,i),c=!1},d(i){i&&h(e),T(r),T(n),T(o),T(s)}}}function ze(l,e,r){let t="00:00",n="00:00",a="0/0",o="0/0";const u=I.subscribe(s=>{if(!s.length)return;const c=s.findIndex(p=>p.elapsed<p.duration);if(c===-1)return;const i=s.reduce((p,m)=>p+m.elapsed,0),f=s.reduce((p,m)=>p+m.duration,0);r(0,t=fe(i)),r(1,n=fe(f-i)),r(2,a=s[c].cycle+"/"+s[s.length-1].cycle),r(3,o=s[c].round+"/"+s[s.length-1].round)});return z(()=>u()),[t,n,a,o]}class Qe extends A{constructor(e){super();D(this,e,ze,Ye,U,{})}}function Xe(l){let e,r;const t=l[1].default,n=te(t,l,l[0],null);return{c(){e=P("div"),n&&n.c(),this.h()},l(a){e=B(a,"DIV",{class:!0});var o=K(e);n&&n.l(o),o.forEach(h),this.h()},h(){N(e,"class","svelte-1t55ahf")},m(a,o){v(a,e,o),n&&n.m(e,null),r=!0},p(a,[o]){n&&n.p&&(!r||o&1)&&ne(n,t,a,a[0],r?se(t,a[0],o,null):re(a[0]),null)},i(a){r||(d(n,a),r=!0)},o(a){b(n,a),r=!1},d(a){a&&h(e),n&&n.d(a)}}}function Je(l,e,r){let{$$slots:t={},$$scope:n}=e;return l.$$set=a=>{"$$scope"in a&&r(0,n=a.$$scope)},[n,t]}class Ze extends A{constructor(e){super();D(this,e,Je,Xe,U,{})}}function me(l,e,r){const t=l.slice();return t[6]=e[r],t}function _e(l,e,r){const t=l.slice();return t[9]=e[r],t}function Me(l){let e,r;return e=new Be({props:{name:l[9].display_name,completed:l[9].duration===l[9].elapsed,region:l[9].region,target:l[9].target,band_pos:l[9].band_pos,band_pos_text:l[9].band_pos_text}}),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,n){const a={};n&2&&(a.name=t[9].display_name),n&2&&(a.completed=t[9].duration===t[9].elapsed),n&2&&(a.region=t[9].region),n&2&&(a.target=t[9].target),n&2&&(a.band_pos=t[9].band_pos),n&2&&(a.band_pos_text=t[9].band_pos_text),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function xe(l){let e,r=l[9].display_name+"",t;return{c(){e=P("h2"),t=H(r),this.h()},l(n){e=B(n,"H2",{class:!0});var a=K(e);t=q(a,r),a.forEach(h),this.h()},h(){N(e,"class","rest-item svelte-1bof0sx")},m(n,a){v(n,e,a),O(e,t)},p(n,a){a&2&&r!==(r=n[9].display_name+"")&&Se(t,r)},i:F,o:F,d(n){n&&h(e)}}}function de(l){let e,r,t,n;const a=[xe,Me],o=[];function u(s,c){return s[9].type!==$.WORK?0:1}return e=u(l),r=o[e]=a[e](l),{c(){r.c(),t=L()},l(s){r.l(s),t=L()},m(s,c){o[e].m(s,c),v(s,t,c),n=!0},p(s,c){let i=e;e=u(s),e===i?o[e].p(s,c):(G(),b(o[i],1,1,()=>{o[i]=null}),Y(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),d(r,1),r.m(t.parentNode,t))},i(s){n||(d(r),n=!0)},o(s){b(r),n=!1},d(s){o[e].d(s),s&&h(t)}}}function he(l){let e,r,t,n=l[6],a=[];for(let u=0;u<n.length;u+=1)a[u]=de(_e(l,n,u));const o=u=>b(a[u],1,1,()=>{a[u]=null});return{c(){e=P("li");for(let u=0;u<a.length;u+=1)a[u].c();r=C(),this.h()},l(u){e=B(u,"LI",{class:!0});var s=K(e);for(let c=0;c<a.length;c+=1)a[c].l(s);r=W(s),s.forEach(h),this.h()},h(){N(e,"class","svelte-1bof0sx")},m(u,s){v(u,e,s);for(let c=0;c<a.length;c+=1)a[c].m(e,null);O(e,r),t=!0},p(u,s){if(s&6){n=u[6];let c;for(c=0;c<n.length;c+=1){const i=_e(u,n,c);a[c]?(a[c].p(i,s),d(a[c],1)):(a[c]=de(i),a[c].c(),d(a[c],1),a[c].m(e,r))}for(G(),c=n.length;c<a.length;c+=1)o(c);Y()}},i(u){if(!t){for(let s=0;s<n.length;s+=1)d(a[s]);t=!0}},o(u){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)b(a[s]);t=!1},d(u){u&&h(e),oe(a,u)}}}function et(l){let e,r,t=l[2](l[1]),n=[];for(let o=0;o<t.length;o+=1)n[o]=he(me(l,t,o));const a=o=>b(n[o],1,1,()=>{n[o]=null});return{c(){e=P("ol");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=B(o,"OL",{class:!0});var u=K(e);for(let s=0;s<n.length;s+=1)n[s].l(u);u.forEach(h),this.h()},h(){N(e,"class","svelte-1bof0sx")},m(o,u){v(o,e,u);for(let s=0;s<n.length;s+=1)n[s].m(e,null);l[4](e),r=!0},p(o,u){if(u&6){t=o[2](o[1]);let s;for(s=0;s<t.length;s+=1){const c=me(o,t,s);n[s]?(n[s].p(c,u),d(n[s],1)):(n[s]=he(c),n[s].c(),d(n[s],1),n[s].m(e,null))}for(G(),s=t.length;s<n.length;s+=1)a(s);Y()}},i(o){if(!r){for(let u=0;u<t.length;u+=1)d(n[u]);r=!0}},o(o){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)b(n[u]);r=!1},d(o){o&&h(e),oe(n,o),l[4](null)}}}function tt(l){let e,r;return e=new Ze({props:{$$slots:{default:[et]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,[n]){const a={};n&4099&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function nt(l,e,r){let t;V(l,I,c=>r(1,t=c));const n=c=>{const i=[];return c.forEach((f,p)=>{p%2!=0&&i.push([c[p-1],f])}),i};let a,{active:o}=e;const u=I.subscribe(c=>{if(!c.length||!o)return;const i=c.findIndex(m=>m.elapsed<m.duration&&m.type===$.WORK);if(i===-1)return;const f=Math.ceil(i/2)-1,p=a.children[f];a.scrollTo({top:p.offsetHeight*f,behavior:"smooth"})});z(()=>u());function s(c){Z[c?"unshift":"push"](()=>{a=c,r(0,a)})}return l.$$set=c=>{"active"in c&&r(3,o=c.active)},[a,t,n,o,s]}class rt extends A{constructor(e){super();D(this,e,nt,tt,U,{active:3})}}function st(l){let e,r;return e=new Qe({}),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function at(l){let e,r,t,n,a,o,u,s;function c(f){l[8](f)}let i={timeKeeper:l[3],value:l[1],$$slots:{default:[st]},$$scope:{ctx:l}};return l[0]!==void 0&&(i.active=l[0]),e=new Ve({props:i}),Z.push(()=>le(e,"active",c)),n=new Ne({props:{buttons:l[6]()}}),n.$on("click",l[5]),u=new rt({props:{active:l[0]}}),{c(){y(e.$$.fragment),t=C(),a=P("div"),y(n.$$.fragment),o=C(),y(u.$$.fragment),this.h()},l(f){R(e.$$.fragment,f),t=W(f),a=B(f,"DIV",{style:!0});var p=K(a);R(n.$$.fragment,p),o=W(f),R(u.$$.fragment,f),this.h()},h(){ce(a,"display","contents"),ce(a,"--theme-icon-size","1.6rem")},m(f,p){S(e,f,p),v(f,t,p),v(f,a,p),S(n,a,null),v(f,o,p),S(u,f,p),s=!0},p(f,[p]){const m={};p&2&&(m.value=f[1]),p&1048576&&(m.$$scope={dirty:p,ctx:f}),!r&&p&1&&(r=!0,m.active=f[0],ie(()=>r=!1)),e.$set(m);const g={};p&1&&(g.active=f[0]),u.$set(g)},i(f){s||(d(e.$$.fragment,f),d(n.$$.fragment,f),d(u.$$.fragment,f),s=!0)},o(f){b(e.$$.fragment,f),b(n.$$.fragment,f),b(u.$$.fragment,f),s=!1},d(f){T(e,f),f&&h(t),f&&h(a),T(n,f),f&&h(o),T(u,f)}}}function ot(l,e,r){let t,n,a,o;V(l,I,_=>r(9,t=_));let{settingsOpen:u=!1}=e,s;const c=M.userSettings;V(l,c,_=>r(11,a=_));const i=M.docBodyBgColor,f=Ae();V(l,f,_=>r(10,n=_));const p=_=>Object.entries($).reduce((E,k)=>k[1]===t[_].type?k[0]:E,null),m=()=>t.findIndex(_=>_.elapsed<_.duration),g=()=>{const _=t.findIndex(j=>j.type===$.WORK&&j.elapsed===0);if(_===-1)return"";const E=t[_];let k=`Next Exercise is ${E.display_name}
`;return E.band_pos>0&&(k+=`Band's Position: ${E.band_pos_text}`),k},w=Te(I,_=>{if(!_.length||!I.hasStarted())return 0;const E=m();if(E===-1)return 0;const k=_[E];return k.duration-k.elapsed});V(l,w,_=>r(1,o=_));const be=_=>{if(!a.use_voice||!f.isTicking())return;const E=m();if(E===-1)return;let k="";const j=t[E];switch(j.elapsed){case 0:switch(j.type){case $.WORK:k+=`Go
`;break;case $.REST:case $.BREAK:k+=`Stop
`;break}break;case 1:switch(j.type){case $.REST:k+=`Rest
`;break;case $.BREAK:k+=`Break
`;break;case $.PREP:k+=`Prep
`;break}break;case 2:switch(j.type){case $.REST:case $.PREP:k+=g();break}break}if(_<4)k+=`${_}
`;else if(j.type===$.BREAK)switch(_){case 14:k+=g();break;case 15:k+=`Get Ready
`;break}else I.isComplete()&&(k+=`Well done
`);k.length&&ee.speak(k)},ge=_=>{const E=m();E==-1||n===0?i.set(null):(f.isTicking()&&!document.body.classList.length||_===t[E].duration)&&i.set(p(E))},$e=_=>{switch(f.isTicking()&&f.stop(),_.currentTarget.dataset.action){case"reset":r(0,s=!1),f.reset(),I.reset();break;case"settings_open":r(7,u=!0);break}},ke=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:Le,props:{}},{component:Oe,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}],ve=f.subscribe(()=>{const _=m();_!==-1&&f.isTicking()&&J(I,t[_].elapsed+=1,t)}),we=w.subscribe(_=>{be(_),ge(_)});z(()=>{ve(),we(),i.set(null)});function ye(_){s=_,r(0,s)}return l.$$set=_=>{"settingsOpen"in _&&r(7,u=_.settingsOpen)},[s,o,c,f,w,$e,ke,u,ye]}class lt extends A{constructor(e){super();D(this,e,ot,at,U,{settingsOpen:7})}}function ct(l){let e,r;return e=new pe({props:{$$slots:{default:[it]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,n){const a={};n&128&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function it(l){let e,r,t,n,a,o,u;return{c(){e=P("h2"),r=H("Workout not found!"),t=C(),n=P("p"),a=H("The workout you are looking for was not found."),o=P("br"),u=H("Perhaps it has expired. Please create a new workout"),this.h()},l(s){e=B(s,"H2",{class:!0});var c=K(e);r=q(c,"Workout not found!"),c.forEach(h),t=W(s),n=B(s,"P",{});var i=K(n);a=q(i,"The workout you are looking for was not found."),o=B(i,"BR",{}),u=q(i,"Perhaps it has expired. Please create a new workout"),i.forEach(h),this.h()},h(){N(e,"class","center error")},m(s,c){v(s,e,c),O(e,r),v(s,t,c),v(s,n,c),O(n,a),O(n,o),O(n,u)},d(s){s&&h(e),s&&h(t),s&&h(n)}}}function ut(l){let e,r,t,n;const a=[pt,ft],o=[];function u(s,c){return s[1].length?0:1}return e=u(l),r=o[e]=a[e](l),{c(){r.c(),t=L()},l(s){r.l(s),t=L()},m(s,c){o[e].m(s,c),v(s,t,c),n=!0},p(s,c){let i=e;e=u(s),e===i?o[e].p(s,c):(G(),b(o[i],1,1,()=>{o[i]=null}),Y(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),d(r,1),r.m(t.parentNode,t))},i(s){n||(d(r),n=!0)},o(s){b(r),n=!1},d(s){o[e].d(s),s&&h(t)}}}function ft(l){let e,r;return e=new pe({props:{$$slots:{default:[mt]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,n){const a={};n&128&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function pt(l){let e,r,t,n;const a=[dt,_t],o=[];function u(s,c){return s[0]?0:1}return e=u(l),r=o[e]=a[e](l),{c(){r.c(),t=L()},l(s){r.l(s),t=L()},m(s,c){o[e].m(s,c),v(s,t,c),n=!0},p(s,c){let i=e;e=u(s),e===i?o[e].p(s,c):(G(),b(o[i],1,1,()=>{o[i]=null}),Y(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),d(r,1),r.m(t.parentNode,t))},i(s){n||(d(r),n=!0)},o(s){b(r),n=!1},d(s){o[e].d(s),s&&h(t)}}}function mt(l){let e,r,t,n,a,o,u;return{c(){e=P("h2"),r=H("No Workout!"),t=C(),n=P("p"),a=H("You are in need of a workout."),o=P("br"),u=H("Please create one."),this.h()},l(s){e=B(s,"H2",{class:!0});var c=K(e);r=q(c,"No Workout!"),c.forEach(h),t=W(s),n=B(s,"P",{});var i=K(n);a=q(i,"You are in need of a workout."),o=B(i,"BR",{}),u=q(i,"Please create one."),i.forEach(h),this.h()},h(){N(e,"class","center")},m(s,c){v(s,e,c),O(e,r),v(s,t,c),v(s,n,c),O(n,a),O(n,o),O(n,u)},d(s){s&&h(e),s&&h(t),s&&h(n)}}}function _t(l){let e,r,t;function n(o){l[5](o)}let a={};return l[0]!==void 0&&(a.settingsOpen=l[0]),e=new lt({props:a}),Z.push(()=>le(e,"settingsOpen",n)),{c(){y(e.$$.fragment)},l(o){R(e.$$.fragment,o)},m(o,u){S(e,o,u),t=!0},p(o,u){const s={};!r&&u&1&&(r=!0,s.settingsOpen=o[0],ie(()=>r=!1)),e.$set(s)},i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){b(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function dt(l){let e,r;return e=new Ge({}),e.$on("click",l[3]),e.$on("submit",l[4]),{c(){y(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p:F,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ht(l){let e,r,t;return r=new Ke({}),{c(){e=P("div"),y(r.$$.fragment),this.h()},l(n){e=B(n,"DIV",{class:!0});var a=K(e);R(r.$$.fragment,a),a.forEach(h),this.h()},h(){N(e,"class","center")},m(n,a){v(n,e,a),S(r,e,null),t=!0},p:F,i(n){t||(d(r.$$.fragment,n),t=!0)},o(n){b(r.$$.fragment,n),t=!1},d(n){n&&h(e),T(r)}}}function bt(l){let e,r,t,n={ctx:l,current:null,token:null,hasCatch:!0,pending:ht,then:ut,catch:ct,blocks:[,,,]};return Ee(l[2](),n),{c(){e=C(),r=L(),n.block.c(),this.h()},l(a){Ie('[data-svelte="svelte-1jsep15"]',document.head).forEach(h),e=W(a),r=L(),n.block.l(a),this.h()},h(){document.title="SWEAT Tabata"},m(a,o){v(a,e,o),v(a,r,o),n.block.m(a,n.anchor=o),n.mount=()=>r.parentNode,n.anchor=r,t=!0},p(a,[o]){l=a,Pe(n,l,o)},i(a){t||(d(n.block),t=!0)},o(a){for(let o=0;o<3;o+=1){const u=n.blocks[o];b(u)}t=!1},d(a){a&&h(e),a&&h(r),n.block.d(a),n.token=null,n=null}}}function gt(l,e,r){let t;V(l,I,i=>r(1,t=i));const n=()=>new Promise(async i=>{const f=new URL(window.location.href);let p="https://kalabaaz.pythonanywhere.com";p+=`/api/tabata/${f.searchParams.get("w")}.json`;try{const m=await fetch(p,{credentials:"include"});if(m.ok){const g=await m.json();i(g)}}catch(m){console.error(m),i(null)}}),a=()=>new Promise(async(i,f)=>{if(new URL(window.location.href).searchParams.has("w")){const g=await n();if(g)ue.setItem("workout",g),x.setItem("routine",[]);else{f();return}}const m=x.getItem("routine");if(m.length)I.set(m);else{const g=ue.getItem("workout");g&&I.setWorkout(g)}i()});z(()=>x.setItem("routine",t));let o;const u=()=>r(0,o=!o),s=()=>r(0,o=!o);function c(i){o=i,r(0,o)}return[o,t,a,u,s,c]}class It extends A{constructor(e){super();D(this,e,gt,bt,U,{})}}export{It as default};
