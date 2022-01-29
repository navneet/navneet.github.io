import{D as Re,S as H,i as q,s as F,T as se,k as j,w as y,m as V,x as w,g as v,y as R,V as ae,W as oe,X as le,q as h,o as g,d as b,B as I,H as z,M as N,O as x,Y as ce,e as B,c as O,a as C,b as A,G as K,K as X,l as L,n as Q,p as U,I as ie,Q as ee,t as G,h as Y,j as Ie,R as ue,f as fe,U as pe,a3 as Se,a4 as Ee,a2 as Te,a5 as Pe}from"../../chunks/vendor-e13e40a5.js";import{p as Be}from"../../chunks/stores-e2f0a4ed.js";import{A as te,L as me,S as ne}from"../../chunks/appStore-343e38e2.js";import{r as $,R as J,a as Oe,E as Ke,S as We}from"../../chunks/exerciseCard-fa8c0ad7.js";import{V as re,s as _e,P as Ce}from"../../chunks/helpers-54c49464.js";import{g as je}from"../../chunks/navigation-bd39ff07.js";import{L as Ve,F as Ne,a as M,M as Ae,I as Le,P as De}from"../../chunks/playPauseToggleIcon-0a45c742.js";import{T as He}from"../../chunks/TimeKeeper-87c5f3af.js";import"../../chunks/singletons-a6a7384f.js";const qe=()=>{const{subscribe:l,set:e,update:r}=Re([]),t=s=>{e(n(s.meta,s.exercises))},n=(s,c)=>{let f=[];for(let i=0;i<s.tabatas;i++)if(c.forEach((p,m)=>{const d=Object.assign({cycle:m+1,round:i+1,elapsed:0,duration:s.time_on},p);if(d.type=$.WORK,f.push(J(d)),m<c.length-1){const P={name:"Rest",display_name:"Rest",type:$.REST,cycle:m+1,round:i+1,elapsed:0,duration:s.time_off};f.push(J(P))}}),i<s.tabatas-1){const p={name:"Break",display_name:"Break",type:$.BREAK,cycle:0,round:i+2,elapsed:0,duration:s.rest_time};f.push(J(p))}return f.unshift(J({name:"Prepare",display_name:"Prep",type:$.PREP,cycle:0,round:0,elapsed:0,duration:s.prep_time})),f};return{subscribe:l,set:e,update:r,setWorkout:t,reset:()=>{r(s=>s.map(c=>(c.elapsed=0,c)))},isComplete:()=>{let s=!1;return r(c=>(s=Boolean(c.length)&&c.every(f=>f.elapsed===f.duration),c)),s},hasStarted:()=>{let s=!1;return l(f=>{f.length&&(s=f[0].elapsed>0)})(),s}}};var T=qe();function Fe(l){let e,r,t;const n=l[1].default,a=se(n,l,l[0],null);return r=new Ve({props:{label:"Create New Workout",type:"button",name:"create",id:"create"}}),r.$on("click",l[2]),{c(){a&&a.c(),e=j(),y(r.$$.fragment)},l(o){a&&a.l(o),e=V(o),w(r.$$.fragment,o)},m(o,u){a&&a.m(o,u),v(o,e,u),R(r,o,u),t=!0},p(o,[u]){a&&a.p&&(!t||u&1)&&ae(a,n,o,o[0],t?le(n,o[0],u,null):oe(o[0]),null)},i(o){t||(h(a,o),h(r.$$.fragment,o),t=!0)},o(o){g(a,o),g(r.$$.fragment,o),t=!1},d(o){a&&a.d(o),o&&b(e),I(r,o)}}}function Ge(l,e,r){let{$$slots:t={},$$scope:n}=e;const a=()=>je("/workout",{replaceState:!0});return l.$$set=o=>{"$$scope"in o&&r(0,n=o.$$scope)},[n,t,a]}class de extends H{constructor(e){super();q(this,e,Ge,Fe,F,{})}}function Ye(l){let e,r;return e=new Ne({props:{id:"tabataSettingsForm",title:"Tabata Settings",fieldsets:l[1]()}}),e.$on("change",l[2]),e.$on("submit",l[3]),e.$on("click",l[4]),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p:z,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function ze(l,e,r){let t,n;N(l,T,i=>r(6,t=i));const a=te.userSettings;N(l,a,i=>r(7,n=i));const o=()=>{const i=t.find(S=>S.type===$.PREP),p=t.find(S=>S.type===$.WORK),m=t.find(S=>S.type===$.REST),d=t.find(S=>S.type===$.BREAK);return[{legend:"Runtime",inputs:[{id:"prep_time",name:"PREP",value:i?i.duration:0,label:"Prep Time (seconds)",type:"number"},{id:"time_on",name:"WORK",value:p?p.duration:0,label:"Exercise Time (seconds)",type:"number"},{id:"time_off",name:"REST",value:m?m.duration:0,label:"Rest Time (seconds)",type:"number"},{id:"rest_time",name:"BREAK",value:d?d.duration:0,label:"Break Time (seconds)",type:"number"},{id:"round",name:"round",value:t.length?t[t.length-1].round:0,label:"Rounds",type:"number"},{id:"use_voice",name:"use_voice",checked:n.use_voice,label:"Use Voice?",type:"slider"},{id:"preferred_voice",name:"preferred_voice",value:n.preferred_voice,label:"Preferred Voice",type:"select",placeholder:"Available Voices",options:re.getVoices(null,!0)}]}]},u=i=>{switch(i.currentTarget.name){case"PREP":case"WORK":case"REST":case"BREAK":const p=parseInt(i.currentTarget.value);isNaN(p)||T.update(d=>(d.forEach((P,S)=>{P.type===$[i.currentTarget.name]&&d[S].elapsed!==d[S].duration&&(d[S].duration=p)}),d));break;case"round":const m=parseInt(i.currentTarget.value);!isNaN(m)&&m>0&&s(m);break;case"use_voice":x(a,n.use_voice=i.currentTarget.checked,n);break;case"preferred_voice":x(a,n.preferred_voice=i.currentTarget.value,n),re.defaultVoice=n.preferred_voice;break}},s=i=>{const p=t.filter(W=>W.round===1&&W.type===$.WORK),m=p.map(W=>Oe(W)),d=t.find(W=>W.type===$.PREP),P=t.find(W=>W.type===$.REST),S=t.find(W=>W.type===$.BREAK),Z={tabatas:i,prep_time:d?d.duration:0,time_on:p.length?p[0].duration:0,time_off:P?P.duration:0,rest_time:S?S.duration:0};T.setWorkout({meta:Z,exercises:m})};function c(i){ce.call(this,l,i)}function f(i){ce.call(this,l,i)}return[a,o,u,c,f]}class Qe extends H{constructor(e){super();q(this,e,ze,Ye,F,{})}}function Ue(l){let e,r,t,n,a,o,u,s,c;return r=new M({props:{label:"Elapsed",value:l[0]}}),n=new M({props:{label:"Remaining",value:l[1]}}),o=new M({props:{label:"Cycles",value:l[2]}}),s=new M({props:{label:"Tabatas",value:l[3]}}),{c(){e=B("div"),y(r.$$.fragment),t=j(),y(n.$$.fragment),a=j(),y(o.$$.fragment),u=j(),y(s.$$.fragment),this.h()},l(f){e=O(f,"DIV",{class:!0});var i=C(e);w(r.$$.fragment,i),t=V(i),w(n.$$.fragment,i),a=V(i),w(o.$$.fragment,i),u=V(i),w(s.$$.fragment,i),i.forEach(b),this.h()},h(){A(e,"class","svelte-1ujgwto")},m(f,i){v(f,e,i),R(r,e,null),K(e,t),R(n,e,null),K(e,a),R(o,e,null),K(e,u),R(s,e,null),c=!0},p(f,[i]){const p={};i&1&&(p.value=f[0]),r.$set(p);const m={};i&2&&(m.value=f[1]),n.$set(m);const d={};i&4&&(d.value=f[2]),o.$set(d);const P={};i&8&&(P.value=f[3]),s.$set(P)},i(f){c||(h(r.$$.fragment,f),h(n.$$.fragment,f),h(o.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){g(r.$$.fragment,f),g(n.$$.fragment,f),g(o.$$.fragment,f),g(s.$$.fragment,f),c=!1},d(f){f&&b(e),I(r),I(n),I(o),I(s)}}}function Xe(l,e,r){let t="00:00",n="00:00",a="0/0",o="0/0";const u=T.subscribe(s=>{if(!s.length)return;const c=s.findIndex(p=>p.elapsed<p.duration);if(c===-1)return;const f=s.reduce((p,m)=>p+m.elapsed,0),i=s.reduce((p,m)=>p+m.duration,0);r(0,t=_e(f)),r(1,n=_e(i-f)),r(2,a=s[c].cycle+"/"+s[s.length-1].cycle),r(3,o=s[c].round+"/"+s[s.length-1].round)});return X(()=>u()),[t,n,a,o]}class Je extends H{constructor(e){super();q(this,e,Xe,Ue,F,{})}}function Me(l){let e,r;const t=l[1].default,n=se(t,l,l[0],null);return{c(){e=B("div"),n&&n.c(),this.h()},l(a){e=O(a,"DIV",{class:!0});var o=C(e);n&&n.l(o),o.forEach(b),this.h()},h(){A(e,"class","svelte-1t55ahf")},m(a,o){v(a,e,o),n&&n.m(e,null),r=!0},p(a,[o]){n&&n.p&&(!r||o&1)&&ae(n,t,a,a[0],r?le(t,a[0],o,null):oe(a[0]),null)},i(a){r||(h(n,a),r=!0)},o(a){g(n,a),r=!1},d(a){a&&b(e),n&&n.d(a)}}}function Ze(l,e,r){let{$$slots:t={},$$scope:n}=e;return l.$$set=a=>{"$$scope"in a&&r(0,n=a.$$scope)},[n,t]}class xe extends H{constructor(e){super();q(this,e,Ze,Me,F,{})}}function he(l,e,r){const t=l.slice();return t[6]=e[r],t}function be(l,e,r){const t=l.slice();return t[9]=e[r],t}function et(l){let e,r;return e=new Ke({props:{name:l[9].display_name,completed:l[9].duration===l[9].elapsed,region:l[9].region,target:l[9].target,band_pos:l[9].band_pos,band_pos_text:l[9].band_pos_text}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p(t,n){const a={};n&2&&(a.name=t[9].display_name),n&2&&(a.completed=t[9].duration===t[9].elapsed),n&2&&(a.region=t[9].region),n&2&&(a.target=t[9].target),n&2&&(a.band_pos=t[9].band_pos),n&2&&(a.band_pos_text=t[9].band_pos_text),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function tt(l){let e,r=l[9].display_name+"",t;return{c(){e=B("h2"),t=G(r),this.h()},l(n){e=O(n,"H2",{class:!0});var a=C(e);t=Y(a,r),a.forEach(b),this.h()},h(){A(e,"class","rest-item svelte-1bof0sx")},m(n,a){v(n,e,a),K(e,t)},p(n,a){a&2&&r!==(r=n[9].display_name+"")&&Ie(t,r)},i:z,o:z,d(n){n&&b(e)}}}function ge(l){let e,r,t,n;const a=[tt,et],o=[];function u(s,c){return s[9].type!==$.WORK?0:1}return e=u(l),r=o[e]=a[e](l),{c(){r.c(),t=L()},l(s){r.l(s),t=L()},m(s,c){o[e].m(s,c),v(s,t,c),n=!0},p(s,c){let f=e;e=u(s),e===f?o[e].p(s,c):(Q(),g(o[f],1,1,()=>{o[f]=null}),U(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),h(r,1),r.m(t.parentNode,t))},i(s){n||(h(r),n=!0)},o(s){g(r),n=!1},d(s){o[e].d(s),s&&b(t)}}}function $e(l){let e,r,t,n=l[6],a=[];for(let u=0;u<n.length;u+=1)a[u]=ge(be(l,n,u));const o=u=>g(a[u],1,1,()=>{a[u]=null});return{c(){e=B("li");for(let u=0;u<a.length;u+=1)a[u].c();r=j(),this.h()},l(u){e=O(u,"LI",{class:!0});var s=C(e);for(let c=0;c<a.length;c+=1)a[c].l(s);r=V(s),s.forEach(b),this.h()},h(){A(e,"class","svelte-1bof0sx")},m(u,s){v(u,e,s);for(let c=0;c<a.length;c+=1)a[c].m(e,null);K(e,r),t=!0},p(u,s){if(s&6){n=u[6];let c;for(c=0;c<n.length;c+=1){const f=be(u,n,c);a[c]?(a[c].p(f,s),h(a[c],1)):(a[c]=ge(f),a[c].c(),h(a[c],1),a[c].m(e,r))}for(Q(),c=n.length;c<a.length;c+=1)o(c);U()}},i(u){if(!t){for(let s=0;s<n.length;s+=1)h(a[s]);t=!0}},o(u){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)g(a[s]);t=!1},d(u){u&&b(e),ie(a,u)}}}function nt(l){let e,r,t=l[2](l[1]),n=[];for(let o=0;o<t.length;o+=1)n[o]=$e(he(l,t,o));const a=o=>g(n[o],1,1,()=>{n[o]=null});return{c(){e=B("ol");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=O(o,"OL",{class:!0});var u=C(e);for(let s=0;s<n.length;s+=1)n[s].l(u);u.forEach(b),this.h()},h(){A(e,"class","svelte-1bof0sx")},m(o,u){v(o,e,u);for(let s=0;s<n.length;s+=1)n[s].m(e,null);l[4](e),r=!0},p(o,u){if(u&6){t=o[2](o[1]);let s;for(s=0;s<t.length;s+=1){const c=he(o,t,s);n[s]?(n[s].p(c,u),h(n[s],1)):(n[s]=$e(c),n[s].c(),h(n[s],1),n[s].m(e,null))}for(Q(),s=t.length;s<n.length;s+=1)a(s);U()}},i(o){if(!r){for(let u=0;u<t.length;u+=1)h(n[u]);r=!0}},o(o){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)g(n[u]);r=!1},d(o){o&&b(e),ie(n,o),l[4](null)}}}function rt(l){let e,r;return e=new xe({props:{$$slots:{default:[nt]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p(t,[n]){const a={};n&4099&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function st(l,e,r){let t;N(l,T,c=>r(1,t=c));const n=c=>{const f=[];return c.forEach((i,p)=>{p%2!=0&&f.push([c[p-1],i])}),f};let a,{active:o}=e;const u=T.subscribe(c=>{if(!c.length||!o)return;const f=c.findIndex(m=>m.elapsed<m.duration&&m.type===$.WORK);if(f===-1)return;const i=Math.ceil(f/2)-1,p=a.children[i];a.scrollTo({top:p.offsetHeight*i,behavior:"smooth"})});X(()=>u());function s(c){ee[c?"unshift":"push"](()=>{a=c,r(0,a)})}return l.$$set=c=>{"active"in c&&r(3,o=c.active)},[a,t,n,o,s]}class at extends H{constructor(e){super();q(this,e,st,rt,F,{active:3})}}function ot(l){let e,r;return e=new Je({}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function lt(l){let e,r,t,n,a,o,u,s;function c(i){l[8](i)}let f={timeKeeper:l[3],value:l[1],$$slots:{default:[ot]},$$scope:{ctx:l}};return l[0]!==void 0&&(f.active=l[0]),e=new Ae({props:f}),ee.push(()=>ue(e,"active",c)),n=new Le({props:{buttons:l[6]()}}),n.$on("click",l[5]),u=new at({props:{active:l[0]}}),{c(){y(e.$$.fragment),t=j(),a=B("div"),y(n.$$.fragment),o=j(),y(u.$$.fragment),this.h()},l(i){w(e.$$.fragment,i),t=V(i),a=O(i,"DIV",{style:!0});var p=C(a);w(n.$$.fragment,p),o=V(i),w(u.$$.fragment,i),this.h()},h(){fe(a,"display","contents"),fe(a,"--theme-icon-size","1.6rem")},m(i,p){R(e,i,p),v(i,t,p),v(i,a,p),R(n,a,null),v(i,o,p),R(u,i,p),s=!0},p(i,[p]){const m={};p&2&&(m.value=i[1]),p&1048576&&(m.$$scope={dirty:p,ctx:i}),!r&&p&1&&(r=!0,m.active=i[0],pe(()=>r=!1)),e.$set(m);const d={};p&1&&(d.active=i[0]),u.$set(d)},i(i){s||(h(e.$$.fragment,i),h(n.$$.fragment,i),h(u.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(n.$$.fragment,i),g(u.$$.fragment,i),s=!1},d(i){I(e,i),i&&b(t),i&&b(a),I(n,i),i&&b(o),I(u,i)}}}function ct(l,e,r){let t,n,a,o;N(l,T,_=>r(9,t=_));let{settingsOpen:u=!1}=e,s;const c=te.userSettings;N(l,c,_=>r(11,a=_));const f=te.docBodyBgColor,i=He();N(l,i,_=>r(10,n=_));const p=_=>Object.entries($).reduce((E,k)=>k[1]===t[_].type?k[0]:E,null),m=()=>t.findIndex(_=>_.elapsed<_.duration),d=()=>{const _=t.findIndex(D=>D.type===$.WORK&&D.elapsed===0);if(_===-1)return"";const E=t[_];let k=`Next Exercise is ${E.display_name}
`;return E.band_pos>0&&(k+=`Band's Position: ${E.band_pos_text}
`),k},P=Se(T,_=>{if(!_.length||!T.hasStarted())return 0;const E=m();if(E===-1)return 0;const k=_[E];return k.duration-k.elapsed});N(l,P,_=>r(1,o=_));const S=_=>{if(!a.use_voice)return;const E=m();if(E===-1)return;let k="";const D=t[E];switch(D.elapsed){case 0:switch(D.type){case $.WORK:k+=`Go
`;break;case $.REST:k+=`Stop
Rest
`;break;case $.BREAK:k+=`Stop
Break
`;break}break;case 1:switch(D.type){case $.REST:k+=d();break;case $.PREP:k+=`Prep
`,k+=d();break}break}if(_<4)k+=`${_}
`;else if(D.type===$.BREAK)switch(_){case 14:k+=d();break;case 15:k+=`Get Ready
`;break}T.isComplete()&&(k+=`Well done
`),k.length&&re.speak(k)},Z=_=>{const E=m();E==-1||n===0?f.set(null):(i.isTicking()&&!document.body.classList.length||_===t[E].duration)&&f.set(p(E))},W=_=>{switch(i.isTicking()&&i.stop(),_.currentTarget.dataset.action){case"reset":r(0,s=!1),i.reset(),T.reset();break;case"settings_open":r(7,u=!0);break}},ke=()=>[{icon:"bi bi-bootstrap-reboot",title:"Reset",data:{"data-action":"reset"}},{component:De,props:{}},{component:We,props:{}},{icon:"bi bi-gear-wide-connected",title:"Timer Settings",data:{"data-action":"settings_open"}}],ve=i.subscribe(()=>{const _=m();_!==-1&&i.isTicking()&&x(T,t[_].elapsed+=1,t)}),ye=P.subscribe(_=>{S(_),Z(_)});X(()=>{ve(),ye(),f.set(null)});function we(_){s=_,r(0,s)}return l.$$set=_=>{"settingsOpen"in _&&r(7,u=_.settingsOpen)},[s,o,c,i,P,W,ke,u,we]}class it extends H{constructor(e){super();q(this,e,ct,lt,F,{settingsOpen:7})}}function ut(l){let e,r;return e=new de({props:{$$slots:{default:[ft]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p(t,n){const a={};n&256&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function ft(l){let e,r,t,n,a,o,u;return{c(){e=B("h2"),r=G("Workout not found!"),t=j(),n=B("p"),a=G("The workout you are looking for was not found."),o=B("br"),u=G("Perhaps it has expired. Please create a new one."),this.h()},l(s){e=O(s,"H2",{class:!0});var c=C(e);r=Y(c,"Workout not found!"),c.forEach(b),t=V(s),n=O(s,"P",{});var f=C(n);a=Y(f,"The workout you are looking for was not found."),o=O(f,"BR",{}),u=Y(f,"Perhaps it has expired. Please create a new one."),f.forEach(b),this.h()},h(){A(e,"class","center error")},m(s,c){v(s,e,c),K(e,r),v(s,t,c),v(s,n,c),K(n,a),K(n,o),K(n,u)},d(s){s&&b(e),s&&b(t),s&&b(n)}}}function pt(l){let e,r,t,n;const a=[_t,mt],o=[];function u(s,c){return s[1].length?0:1}return e=u(l),r=o[e]=a[e](l),{c(){r.c(),t=L()},l(s){r.l(s),t=L()},m(s,c){o[e].m(s,c),v(s,t,c),n=!0},p(s,c){let f=e;e=u(s),e===f?o[e].p(s,c):(Q(),g(o[f],1,1,()=>{o[f]=null}),U(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),h(r,1),r.m(t.parentNode,t))},i(s){n||(h(r),n=!0)},o(s){g(r),n=!1},d(s){o[e].d(s),s&&b(t)}}}function mt(l){let e,r;return e=new de({props:{$$slots:{default:[dt]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p(t,n){const a={};n&256&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function _t(l){let e,r,t,n;const a=[bt,ht],o=[];function u(s,c){return s[0]?0:1}return e=u(l),r=o[e]=a[e](l),{c(){r.c(),t=L()},l(s){r.l(s),t=L()},m(s,c){o[e].m(s,c),v(s,t,c),n=!0},p(s,c){let f=e;e=u(s),e===f?o[e].p(s,c):(Q(),g(o[f],1,1,()=>{o[f]=null}),U(),r=o[e],r?r.p(s,c):(r=o[e]=a[e](s),r.c()),h(r,1),r.m(t.parentNode,t))},i(s){n||(h(r),n=!0)},o(s){g(r),n=!1},d(s){o[e].d(s),s&&b(t)}}}function dt(l){let e,r,t,n,a,o,u;return{c(){e=B("h2"),r=G("No Workout!"),t=j(),n=B("p"),a=G("You need of a workout."),o=B("br"),u=G("Please create one."),this.h()},l(s){e=O(s,"H2",{class:!0});var c=C(e);r=Y(c,"No Workout!"),c.forEach(b),t=V(s),n=O(s,"P",{});var f=C(n);a=Y(f,"You need of a workout."),o=O(f,"BR",{}),u=Y(f,"Please create one."),f.forEach(b),this.h()},h(){A(e,"class","center")},m(s,c){v(s,e,c),K(e,r),v(s,t,c),v(s,n,c),K(n,a),K(n,o),K(n,u)},d(s){s&&b(e),s&&b(t),s&&b(n)}}}function ht(l){let e,r,t;function n(o){l[5](o)}let a={};return l[0]!==void 0&&(a.settingsOpen=l[0]),e=new it({props:a}),ee.push(()=>ue(e,"settingsOpen",n)),{c(){y(e.$$.fragment)},l(o){w(e.$$.fragment,o)},m(o,u){R(e,o,u),t=!0},p(o,u){const s={};!r&&u&1&&(r=!0,s.settingsOpen=o[0],pe(()=>r=!1)),e.$set(s)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){I(e,o)}}}function bt(l){let e,r;return e=new Qe({}),e.$on("click",l[3]),e.$on("submit",l[4]),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){R(e,t,n),r=!0},p:z,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function gt(l){let e,r,t;return r=new Ce({}),{c(){e=B("div"),y(r.$$.fragment),this.h()},l(n){e=O(n,"DIV",{class:!0});var a=C(e);w(r.$$.fragment,a),a.forEach(b),this.h()},h(){A(e,"class","center")},m(n,a){v(n,e,a),R(r,e,null),t=!0},p:z,i(n){t||(h(r.$$.fragment,n),t=!0)},o(n){g(r.$$.fragment,n),t=!1},d(n){n&&b(e),I(r)}}}function $t(l){let e,r,t,n={ctx:l,current:null,token:null,hasCatch:!0,pending:gt,then:pt,catch:ut,blocks:[,,,]};return Ee(l[2](),n),{c(){e=j(),r=L(),n.block.c(),this.h()},l(a){Te('[data-svelte="svelte-1jsep15"]',document.head).forEach(b),e=V(a),r=L(),n.block.l(a),this.h()},h(){document.title="SWEAT Tabata"},m(a,o){v(a,e,o),v(a,r,o),n.block.m(a,n.anchor=o),n.mount=()=>r.parentNode,n.anchor=r,t=!0},p(a,[o]){l=a,Pe(n,l,o)},i(a){t||(h(n.block),t=!0)},o(a){for(let o=0;o<3;o+=1){const u=n.blocks[o];g(u)}t=!1},d(a){a&&b(e),a&&b(r),n.block.d(a),n.token=null,n=null}}}function kt(l,e,r){let t,n;N(l,T,i=>r(1,t=i)),N(l,Be,i=>r(6,n=i));const a=()=>new Promise(async i=>{let p="https://kalabaaz.pythonanywhere.com";p+=`/api/tabata/${n.url.searchParams.get("w")}.json`;try{const m=await fetch(p,{credentials:"include"});if(m.ok){const d=await m.json();i(d)}}catch(m){console.error(m),i(null)}}),o=()=>new Promise(async(i,p)=>{if("url"in n&&n.url.searchParams.has("w")){const d=await a();if(!d)return p();me.setItem("workout",d),ne.setItem("routine",[])}const m=ne.getItem("routine");if(m.length)T.set(m);else{const d=me.getItem("workout");d&&T.setWorkout(d)}i()});X(()=>ne.setItem("routine",t));let u;const s=()=>r(0,u=!u),c=()=>r(0,u=!u);function f(i){u=i,r(0,u)}return[u,t,o,s,c,f]}class Bt extends H{constructor(e){super();q(this,e,kt,$t,F,{})}}export{Bt as default};
