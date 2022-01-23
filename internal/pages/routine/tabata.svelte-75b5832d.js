import{D as Re,S as N,i as L,s as D,T as te,k as K,w,m as W,x as R,g as y,y as S,V as ne,W as re,X as se,q as d,o as h,d as b,B as T,H as G,M as j,O as J,Y as ae,e as B,c as O,a as C,b as H,G as P,K as Q,l as A,n as Y,p as z,I as oe,Q as Z,t as q,h as F,j as Se,R as le,f as ce,U as ie,a3 as Te,a4 as Ee,a2 as Ie,a5 as Pe}from"../../chunks/vendor-e13e40a5.js";import{p as Be}from"../../chunks/stores-e2f0a4ed.js";import{A as M,L as ue,S as x}from"../../chunks/appStore-343e38e2.js";import{r as k,R as U,E as Oe,S as Ke}from"../../chunks/exerciseCard-9f40ced8.js";import{V as ee,s as fe,P as We}from"../../chunks/helpers-7746061f.js";import{g as Ce}from"../../chunks/navigation-bd39ff07.js";import{L as je,F as Ve,a as X,M as Ae,I as Ne,P as Le}from"../../chunks/playPauseToggleIcon-daa24825.js";import{T as De}from"../../chunks/TimeKeeper-59cb4b66.js";import"../../chunks/singletons-a6a7384f.js";const He=()=>{const{subscribe:l,set:e,update:r}=Re([]),t=s=>{e(n(s.meta,s.exercises))},n=(s,c)=>{let u=[];for(let f=0;f<s.tabatas;f++)if(c.forEach((p,_)=>{const g=Object.assign({cycle:_+1,round:f+1,elapsed:0,duration:s.time_on},p);if(g.type=k.WORK,u.push(U(g)),_<c.length-1){const $={name:"Rest",display_name:"Rest",type:k.REST,cycle:_+1,round:f+1,elapsed:0,duration:s.time_off};u.push(U($))}}),f<s.tabatas-1){const p={name:"Break",display_name:"Break",type:k.BREAK,cycle:0,round:f+2,elapsed:0,duration:s.rest_time};u.push(U(p))}return u.unshift(U({name:"Prepare",display_name:"Prep",type:k.PREP,cycle:0,round:0,elapsed:0,duration:s.prep_time})),u};return{subscribe:l,set:e,update:r,setWorkout:t,reset:()=>{r(s=>s.map(c=>(c.elapsed=0,c)))},isComplete:()=>{let s=!1;return r(c=>(s=Boolean(c.length)&&c.every(u=>u.elapsed===u.duration),c)),s},hasStarted:()=>{let s=!1;return l(u=>{u.length&&(s=u[0].elapsed>0)})(),s}}};var I=He();function qe(l){let e,r,t;const n=l[1].default,a=te(n,l,l[0],null);return r=new je({props:{label:"Create New Workout",type:"button",name:"create",id:"create"}}),r.$on("click",l[2]),{c(){a&&a.c(),e=K(),w(r.$$.fragment)},l(o){a&&a.l(o),e=W(o),R(r.$$.fragment,o)},m(o,i){a&&a.m(o,i),y(o,e,i),S(r,o,i),t=!0},p(o,[i]){a&&a.p&&(!t||i&1)&&ne(a,n,o,o[0],t?se(n,o[0],i,null):re(o[0]),null)},i(o){t||(d(a,o),d(r.$$.fragment,o),t=!0)},o(o){h(a,o),h(r.$$.fragment,o),t=!1},d(o){a&&a.d(o),o&&b(e),T(r,o)}}}function Fe(l,e,r){let{$$slots:t={},$$scope:n}=e;const a=()=>Ce("/workout",{replaceState:!0});return l.$$set=o=>{"$$scope"in o&&r(0,n=o.$$scope)},[n,t,a]}class pe extends N{constructor(e){super();L(this,e,Fe,qe,D,{})}}function Ge(l){let e,r;return e=new Ve({props:{id:"tabataSettingsForm",title:"Tabata Settings",fieldsets:l[1]()}}),e.$on("change",l[2]),e.$on("submit",l[3]),e.$on("click",l[4]),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p:G,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Ye(l,e,r){let t,n;j(l,I,u=>r(7,n=u));const a=M.userSettings;j(l,a,u=>r(6,t=u));const o=()=>{const u=n.find($=>$.type===k.PREP),f=n.find($=>$.type===k.WORK),p=n.find($=>$.type===k.REST),_=n.find($=>$.type===k.BREAK);return[{legend:"Runtime",inputs:[{id:"prep_time",name:"PREP",value:u?u.duration:0,label:"Prep Time (seconds)",type:"number"},{id:"time_on",name:"WORK",value:f?f.duration:0,label:"Exercise Time (seconds)",type:"number"},{id:"time_off",name:"REST",value:p?p.duration:0,label:"Rest Time (seconds)",type:"number"},{id:"rest_time",name:"BREAK",value:_?_.duration:0,label:"Break Time (seconds)",type:"number"},{id:"use_voice",name:"use_voice",checked:t.use_voice,label:"Use Voice?",type:"slider"},{id:"preferred_voice",name:"preferred_voice",value:t.preferred_voice,label:"Preferred Voice",type:"select",placeholder:"Available Voices",options:ee.getVoices(null,!0)}]}]},i=u=>{switch(u.currentTarget.name){case"PREP":case"WORK":case"REST":case"BREAK":const f=parseInt(u.currentTarget.value);isNaN(f)||I.update(p=>(p.forEach((_,g)=>{_.type===k[u.currentTarget.name]&&p[g].elapsed!==p[g].duration&&(p[g].duration=f)}),p));break;case"use_voice":J(a,t.use_voice=u.currentTarget.checked,t);break;case"preferred_voice":J(a,t.preferred_voice=u.currentTarget.value,t),ee.defaultVoice=t.preferred_voice;break}};function s(u){ae.call(this,l,u)}function c(u){ae.call(this,l,u)}return[a,o,i,s,c]}class ze extends N{constructor(e){super();L(this,e,Ye,Ge,D,{})}}function Qe(l){let e,r,t,n,a,o,i,s,c;return r=new X({props:{label:"Elapsed",value:l[0]}}),n=new X({props:{label:"Remaining",value:l[1]}}),o=new X({props:{label:"Cycles",value:l[2]}}),s=new X({props:{label:"Tabatas",value:l[3]}}),{c(){e=B("div"),w(r.$$.fragment),t=K(),w(n.$$.fragment),a=K(),w(o.$$.fragment),i=K(),w(s.$$.fragment),this.h()},l(u){e=O(u,"DIV",{class:!0});var f=C(e);R(r.$$.fragment,f),t=W(f),R(n.$$.fragment,f),a=W(f),R(o.$$.fragment,f),i=W(f),R(s.$$.fragment,f),f.forEach(b),this.h()},h(){H(e,"class","svelte-1ujgwto")},m(u,f){y(u,e,f),S(r,e,null),P(e,t),S(n,e,null),P(e,a),S(o,e,null),P(e,i),S(s,e,null),c=!0},p(u,[f]){const p={};f&1&&(p.value=u[0]),r.$set(p);const _={};f&2&&(_.value=u[1]),n.$set(_);const g={};f&4&&(g.value=u[2]),o.$set(g);const $={};f&8&&($.value=u[3]),s.$set($)},i(u){c||(d(r.$$.fragment,u),d(n.$$.fragment,u),d(o.$$.fragment,u),d(s.$$.fragment,u),c=!0)},o(u){h(r.$$.fragment,u),h(n.$$.fragment,u),h(o.$$.fragment,u),h(s.$$.fragment,u),c=!1},d(u){u&&b(e),T(r),T(n),T(o),T(s)}}}function Ue(l,e,r){let t="00:00",n="00:00",a="0/0",o="0/0";const i=I.subscribe(s=>{if(!s.length)return;const c=s.findIndex(p=>p.elapsed<p.duration);if(c===-1)return;const u=s.reduce((p,_)=>p+_.elapsed,0),f=s.reduce((p,_)=>p+_.duration,0);r(0,t=fe(u)),r(1,n=fe(f-u)),r(2,a=s[c].cycle+"/"+s[s.length-1].cycle),r(3,o=s[c].round+"/"+s[s.length-1].round)});return Q(()=>i()),[t,n,a,o]}class Xe extends N{constructor(e){super();L(this,e,Ue,Qe,D,{})}}function Je(l){let e,r;const t=l[1].default,n=te(t,l,l[0],null);return{c(){e=B("div"),n&&n.c(),this.h()},l(a){e=O(a,"DIV",{class:!0});var o=C(e);n&&n.l(o),o.forEach(b),this.h()},h(){H(e,"class","svelte-1t55ahf")},m(a,o){y(a,e,o),n&&n.m(e,null),r=!0},p(a,[o]){n&&n.p&&(!r||o&1)&&ne(n,t,a,a[0],r?se(t,a[0],o,null):re(a[0]),null)},i(a){r||(d(n,a),r=!0)},o(a){h(n,a),r=!1},d(a){a&&b(e),n&&n.d(a)}}}function Ze(l,e,r){let{$$slots:t={},$$scope:n}=e;return l.$$set=a=>{"$$scope"in a&&r(0,n=a.$$scope)},[n,t]}class Me extends N{constructor(e){super();L(this,e,Ze,Je,D,{})}}function me(l,e,r){const t=l.slice();return t[6]=e[r],t}function _e(l,e,r){const t=l.slice();return t[9]=e[r],t}function xe(l){let e,r;return e=new Oe({props:{name:l[9].display_name,completed:l[9].duration===l[9].elapsed,region:l[9].region,target:l[9].target,band_pos:l[9].band_pos,band_pos_text:l[9].band_pos_text}}),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,n){const a={};n&2&&(a.name=t[9].display_name),n&2&&(a.completed=t[9].duration===t[9].elapsed),n&2&&(a.region=t[9].region),n&2&&(a.target=t[9].target),n&2&&(a.band_pos=t[9].band_pos),n&2&&(a.band_pos_text=t[9].band_pos_text),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function et(l){let e,r=l[9].display_name+"",t;return{c(){e=B("h2"),t=q(r),this.h()},l(n){e=O(n,"H2",{class:!0});var a=C(e);t=F(a,r),a.forEach(b),this.h()},h(){H(e,"class","rest-item svelte-1bof0sx")},m(n,a){y(n,e,a),P(e,t)},p(n,a){a&2&&r!==(r=n[9].display_name+"")&&Se(t,r)},i:G,o:G,d(n){n&&b(e)}}}function de(l){let e,r,t,n;const a=[et,xe],o=[];function i(s,c){return s[9].type!==k.WORK?0:1}return e=i(l),r=o[e]=a[e](l),{c(){r.c(),t=A()},l(s){r.l(s),t=A()},m(s,c){o[e].m(s,c),y(s,t,c),n=!0},p(s,c){let u=e;e=i(s),e===u?o[e].p(s,c):(Y(),h(o[u],1,1,()=>{o[u]=null}),z(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),d(r,1),r.m(t.parentNode,t))},i(s){n||(d(r),n=!0)},o(s){h(r),n=!1},d(s){o[e].d(s),s&&b(t)}}}function he(l){let e,r,t,n=l[6],a=[];for(let i=0;i<n.length;i+=1)a[i]=de(_e(l,n,i));const o=i=>h(a[i],1,1,()=>{a[i]=null});return{c(){e=B("li");for(let i=0;i<a.length;i+=1)a[i].c();r=K(),this.h()},l(i){e=O(i,"LI",{class:!0});var s=C(e);for(let c=0;c<a.length;c+=1)a[c].l(s);r=W(s),s.forEach(b),this.h()},h(){H(e,"class","svelte-1bof0sx")},m(i,s){y(i,e,s);for(let c=0;c<a.length;c+=1)a[c].m(e,null);P(e,r),t=!0},p(i,s){if(s&6){n=i[6];let c;for(c=0;c<n.length;c+=1){const u=_e(i,n,c);a[c]?(a[c].p(u,s),d(a[c],1)):(a[c]=de(u),a[c].c(),d(a[c],1),a[c].m(e,r))}for(Y(),c=n.length;c<a.length;c+=1)o(c);z()}},i(i){if(!t){for(let s=0;s<n.length;s+=1)d(a[s]);t=!0}},o(i){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)h(a[s]);t=!1},d(i){i&&b(e),oe(a,i)}}}function tt(l){let e,r,t=l[2](l[1]),n=[];for(let o=0;o<t.length;o+=1)n[o]=he(me(l,t,o));const a=o=>h(n[o],1,1,()=>{n[o]=null});return{c(){e=B("ol");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=O(o,"OL",{class:!0});var i=C(e);for(let s=0;s<n.length;s+=1)n[s].l(i);i.forEach(b),this.h()},h(){H(e,"class","svelte-1bof0sx")},m(o,i){y(o,e,i);for(let s=0;s<n.length;s+=1)n[s].m(e,null);l[4](e),r=!0},p(o,i){if(i&6){t=o[2](o[1]);let s;for(s=0;s<t.length;s+=1){const c=me(o,t,s);n[s]?(n[s].p(c,i),d(n[s],1)):(n[s]=he(c),n[s].c(),d(n[s],1),n[s].m(e,null))}for(Y(),s=t.length;s<n.length;s+=1)a(s);z()}},i(o){if(!r){for(let i=0;i<t.length;i+=1)d(n[i]);r=!0}},o(o){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)h(n[i]);r=!1},d(o){o&&b(e),oe(n,o),l[4](null)}}}function nt(l){let e,r;return e=new Me({props:{$$slots:{default:[tt]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,[n]){const a={};n&4099&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function rt(l,e,r){let t;j(l,I,c=>r(1,t=c));const n=c=>{const u=[];return c.forEach((f,p)=>{p%2!=0&&u.push([c[p-1],f])}),u};let a,{active:o}=e;const i=I.subscribe(c=>{if(!c.length||!o)return;const u=c.findIndex(_=>_.elapsed<_.duration&&_.type===k.WORK);if(u===-1)return;const f=Math.ceil(u/2)-1,p=a.children[f];a.scrollTo({top:p.offsetHeight*f,behavior:"smooth"})});Q(()=>i());function s(c){Z[c?"unshift":"push"](()=>{a=c,r(0,a)})}return l.$$set=c=>{"active"in c&&r(3,o=c.active)},[a,t,n,o,s]}class st extends N{constructor(e){super();L(this,e,rt,nt,D,{active:3})}}function at(l){let e,r;return e=new Xe({}),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ot(l){let e,r,t,n,a,o,i,s;function c(f){l[8](f)}let u={timeKeeper:l[3],value:l[1],$$slots:{default:[at]},$$scope:{ctx:l}};return l[0]!==void 0&&(u.active=l[0]),e=new Ae({props:u}),Z.push(()=>le(e,"active",c)),n=new Ne({props:{buttons:l[6]()}}),n.$on("click",l[5]),i=new st({props:{active:l[0]}}),{c(){w(e.$$.fragment),t=K(),a=B("div"),w(n.$$.fragment),o=K(),w(i.$$.fragment),this.h()},l(f){R(e.$$.fragment,f),t=W(f),a=O(f,"DIV",{style:!0});var p=C(a);R(n.$$.fragment,p),o=W(f),R(i.$$.fragment,f),this.h()},h(){ce(a,"display","contents"),ce(a,"--theme-icon-size","1.6rem")},m(f,p){S(e,f,p),y(f,t,p),y(f,a,p),S(n,a,null),y(f,o,p),S(i,f,p),s=!0},p(f,[p]){const _={};p&2&&(_.value=f[1]),p&1048576&&(_.$$scope={dirty:p,ctx:f}),!r&&p&1&&(r=!0,_.active=f[0],ie(()=>r=!1)),e.$set(_);const g={};p&1&&(g.active=f[0]),i.$set(g)},i(f){s||(d(e.$$.fragment,f),d(n.$$.fragment,f),d(i.$$.fragment,f),s=!0)},o(f){h(e.$$.fragment,f),h(n.$$.fragment,f),h(i.$$.fragment,f),s=!1},d(f){T(e,f),f&&b(t),f&&b(a),T(n,f),f&&b(o),T(i,f)}}}function lt(l,e,r){let t,n,a,o;j(l,I,m=>r(9,t=m));let{settingsOpen:i=!1}=e,s;const c=M.userSettings;j(l,c,m=>r(11,a=m));const u=M.docBodyBgColor,f=De();j(l,f,m=>r(10,n=m));const p=m=>Object.entries(k).reduce((E,v)=>v[1]===t[m].type?v[0]:E,null),_=()=>t.findIndex(m=>m.elapsed<m.duration),g=()=>{const m=t.findIndex(V=>V.type===k.WORK&&V.elapsed===0);if(m===-1)return"";const E=t[m];let v=`Next Exercise is ${E.display_name}
`;return E.band_pos>0&&(v+=`Band's Position: ${E.band_pos_text}`),v},$=Te(I,m=>{if(!m.length||!I.hasStarted())return 0;const E=_();if(E===-1)return 0;const v=m[E];return v.duration-v.elapsed});j(l,$,m=>r(1,o=m));const be=m=>{if(!a.use_voice||!f.isTicking())return;const E=_();if(E===-1)return;let v="";const V=t[E];switch(V.elapsed){case 0:switch(V.type){case k.WORK:v+=`Go
`;break;case k.REST:case k.BREAK:v+=`Stop
`;break}break;case 1:switch(V.type){case k.REST:v+=`Rest
`;break;case k.BREAK:v+=`Break
`;break;case k.PREP:v+=`Prep
`;break}break;case 2:switch(V.type){case k.REST:case k.PREP:v+=g();break}break}if(m<4)v+=`${m}
`;else if(V.type===k.BREAK)switch(m){case 14:v+=g();break;case 15:v+=`Get Ready
`;break}else I.isComplete()&&(v+=`Well done
`);v.length&&ee.speak(v)},ge=m=>{const E=_();E==-1||n===0?u.set(null):(f.isTicking()&&!document.body.classList.length||m===t[E].duration)&&u.set(p(E))},$e=m=>{switch(f.isTicking()&&f.stop(),m.currentTarget.dataset.action){case"reset":r(0,s=!1),f.reset(),I.reset();break;case"settings_open":r(7,i=!0);break}},ke=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:Le,props:{}},{component:Ke,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}],ve=f.subscribe(()=>{const m=_();m!==-1&&f.isTicking()&&J(I,t[m].elapsed+=1,t)}),ye=$.subscribe(m=>{be(m),ge(m)});Q(()=>{ve(),ye(),u.set(null)});function we(m){s=m,r(0,s)}return l.$$set=m=>{"settingsOpen"in m&&r(7,i=m.settingsOpen)},[s,o,c,f,$,$e,ke,i,we]}class ct extends N{constructor(e){super();L(this,e,lt,ot,D,{settingsOpen:7})}}function it(l){let e,r;return e=new pe({props:{$$slots:{default:[ut]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,n){const a={};n&512&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ut(l){let e,r,t,n,a,o,i;return{c(){e=B("h2"),r=q("Workout not found!"),t=K(),n=B("p"),a=q("The workout you are looking for was not found."),o=B("br"),i=q("Perhaps it has expired. Please create a new workout"),this.h()},l(s){e=O(s,"H2",{class:!0});var c=C(e);r=F(c,"Workout not found!"),c.forEach(b),t=W(s),n=O(s,"P",{});var u=C(n);a=F(u,"The workout you are looking for was not found."),o=O(u,"BR",{}),i=F(u,"Perhaps it has expired. Please create a new workout"),u.forEach(b),this.h()},h(){H(e,"class","center error")},m(s,c){y(s,e,c),P(e,r),y(s,t,c),y(s,n,c),P(n,a),P(n,o),P(n,i)},d(s){s&&b(e),s&&b(t),s&&b(n)}}}function ft(l){let e,r,t,n;const a=[mt,pt],o=[];function i(s,c){return s[1].length?0:1}return e=i(l),r=o[e]=a[e](l),{c(){r.c(),t=A()},l(s){r.l(s),t=A()},m(s,c){o[e].m(s,c),y(s,t,c),n=!0},p(s,c){let u=e;e=i(s),e===u?o[e].p(s,c):(Y(),h(o[u],1,1,()=>{o[u]=null}),z(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),d(r,1),r.m(t.parentNode,t))},i(s){n||(d(r),n=!0)},o(s){h(r),n=!1},d(s){o[e].d(s),s&&b(t)}}}function pt(l){let e,r;return e=new pe({props:{$$slots:{default:[_t]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p(t,n){const a={};n&512&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function mt(l){let e,r,t,n;const a=[ht,dt],o=[];function i(s,c){return s[0]?0:1}return e=i(l),r=o[e]=a[e](l),{c(){r.c(),t=A()},l(s){r.l(s),t=A()},m(s,c){o[e].m(s,c),y(s,t,c),n=!0},p(s,c){let u=e;e=i(s),e===u?o[e].p(s,c):(Y(),h(o[u],1,1,()=>{o[u]=null}),z(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),d(r,1),r.m(t.parentNode,t))},i(s){n||(d(r),n=!0)},o(s){h(r),n=!1},d(s){o[e].d(s),s&&b(t)}}}function _t(l){let e,r,t,n,a,o,i;return{c(){e=B("h2"),r=q("No Workout!"),t=K(),n=B("p"),a=q("You are in need of a workout."),o=B("br"),i=q("Please create one."),this.h()},l(s){e=O(s,"H2",{class:!0});var c=C(e);r=F(c,"No Workout!"),c.forEach(b),t=W(s),n=O(s,"P",{});var u=C(n);a=F(u,"You are in need of a workout."),o=O(u,"BR",{}),i=F(u,"Please create one."),u.forEach(b),this.h()},h(){H(e,"class","center")},m(s,c){y(s,e,c),P(e,r),y(s,t,c),y(s,n,c),P(n,a),P(n,o),P(n,i)},d(s){s&&b(e),s&&b(t),s&&b(n)}}}function dt(l){let e,r,t;function n(o){l[5](o)}let a={};return l[0]!==void 0&&(a.settingsOpen=l[0]),e=new ct({props:a}),Z.push(()=>le(e,"settingsOpen",n)),{c(){w(e.$$.fragment)},l(o){R(e.$$.fragment,o)},m(o,i){S(e,o,i),t=!0},p(o,i){const s={};!r&&i&1&&(r=!0,s.settingsOpen=o[0],ie(()=>r=!1)),e.$set(s)},i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){h(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function ht(l){let e,r;return e=new ze({}),e.$on("click",l[3]),e.$on("submit",l[4]),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p:G,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function bt(l){let e,r;return e=new We({}),{c(){w(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){S(e,t,n),r=!0},p:G,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function gt(l){let e,r,t,n={ctx:l,current:null,token:null,hasCatch:!0,pending:bt,then:ft,catch:it,blocks:[,,,]};return Ee(l[2](),n),{c(){e=K(),r=A(),n.block.c(),this.h()},l(a){Ie('[data-svelte="svelte-1jsep15"]',document.head).forEach(b),e=W(a),r=A(),n.block.l(a),this.h()},h(){document.title="SWEAT Tabata"},m(a,o){y(a,e,o),y(a,r,o),n.block.m(a,n.anchor=o),n.mount=()=>r.parentNode,n.anchor=r,t=!0},p(a,[o]){l=a,Pe(n,l,o)},i(a){t||(d(n.block),t=!0)},o(a){for(let o=0;o<3;o+=1){const i=n.blocks[o];h(i)}t=!1},d(a){a&&b(e),a&&b(r),n.block.d(a),n.token=null,n=null}}}function $t(l,e,r){let t,n;j(l,I,p=>r(1,t=p)),j(l,Be,p=>r(7,n=p));const a=()=>new Promise(async p=>{let _="https://kalabaaz.pythonanywhere.com";_+=`/api/tabata/${n.url.searchParams.get("w")}.json`;try{const g=await fetch(_,{credentials:"include"});if(g.ok){const $=await g.json();p($)}}catch(g){console.error(g),p(null)}}),o=()=>new Promise(async(p,_)=>{if(n.url.searchParams.has("w")&&!s){const $=await a();if(s=!0,$)ue.setItem("workout",$),x.setItem("routine",[]);else{_();return}}const g=x.getItem("routine");if(g.length)I.set(g);else{const $=ue.getItem("workout");$&&I.setWorkout($)}p()});Q(()=>x.setItem("routine",t));let i,s;const c=()=>r(0,i=!i),u=()=>r(0,i=!i);function f(p){i=p,r(0,i)}return[i,t,o,c,u,f]}class Pt extends N{constructor(e){super();L(this,e,$t,gt,D,{})}}export{Pt as default};
