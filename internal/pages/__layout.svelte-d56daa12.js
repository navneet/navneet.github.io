import{S as Y,i as M,s as Q,e as b,t as X,j as q,c as p,a as v,g as Z,d as h,l as H,b as d,D as w,f as P,E as C,F as N,p as g,v as S,w as V,G as z,x as A,y as x,z as $,n as k,A as R,m as L,o as O,H as ee,I as te,J as B,B as ne,K as le,L as ae,M as U,k as F,N as se,O as re,P as oe,Q as ie,R as ce,T as ue,U as fe}from"../chunks/vendor-7dd5008c.js";import{I as he,P as G,l as _e,V as me}from"../chunks/Voice-8cd8bd45.js";import{p as de}from"../chunks/stores-f350dcdb.js";import{A as ge}from"../chunks/appStore-1a30960b.js";function ye(c){let e,t,n,a,i;return{c(){e=b("a"),t=b("h1"),n=X("Sweat"),a=q(),i=b("i"),this.h()},l(l){e=p(l,"A",{href:!0,title:!0,class:!0});var r=v(e);t=p(r,"H1",{class:!0});var s=v(t);n=Z(s,"Sweat"),s.forEach(h),a=H(r),i=p(r,"I",{class:!0}),v(i).forEach(h),r.forEach(h),this.h()},h(){d(t,"class","svelte-kqpg9s"),d(i,"class","bi bi-moisture svelte-kqpg9s"),d(e,"href","/"),d(e,"title","Home"),d(e,"class","logo svelte-kqpg9s"),w(e,"shrink",c[0])},m(l,r){P(l,e,r),C(e,t),C(t,n),C(e,a),C(e,i)},p(l,[r]){r&1&&w(e,"shrink",l[0])},i:N,o:N,d(l){l&&h(e)}}}function be(c,e,t){let{shrink:n=!1}=e;return c.$$set=a=>{"shrink"in a&&t(0,n=a.shrink)},[n]}class pe extends Y{constructor(e){super();M(this,e,be,ye,Q,{shrink:0})}}function J(c,e,t){const n=c.slice();return n[4]=e[t],n}function K(c){let e,t,n=c[1],a=[];for(let l=0;l<n.length;l+=1)a[l]=W(J(c,n,l));const i=l=>k(a[l],1,1,()=>{a[l]=null});return{c(){e=b("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var r=v(e);for(let s=0;s<a.length;s+=1)a[s].l(r);r.forEach(h),this.h()},h(){d(e,"class","menu svelte-16okims")},m(l,r){P(l,e,r);for(let s=0;s<a.length;s+=1)a[s].m(e,null);t=!0},p(l,r){if(r&2){n=l[1];let s;for(s=0;s<n.length;s+=1){const u=J(l,n,s);a[s]?(a[s].p(u,r),g(a[s],1)):(a[s]=W(u),a[s].c(),g(a[s],1),a[s].m(e,null))}for(L(),s=n.length;s<a.length;s+=1)i(s);O()}},i(l){if(!t){for(let r=0;r<n.length;r+=1)g(a[r]);t=!0}},o(l){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)k(a[r]);t=!1},d(l){l&&h(e),ee(a,l)}}}function W(c){let e,t,n;const a=[c[4]];let i={};for(let l=0;l<a.length;l+=1)i=ne(i,a[l]);return e=new he({props:i}),{c(){t=b("div"),S(e.$$.fragment),this.h()},l(l){t=p(l,"DIV",{style:!0});var r=v(t);V(e.$$.fragment,r),this.h()},h(){z(t,"display","contents"),z(t,"--theme-icon-size","1.4rem")},m(l,r){P(l,t,r),A(e,t,null),n=!0},p(l,r){const s=r&2?x(a,[$(l[4])]):{};e.$set(s)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){l&&h(t),R(e,l)}}}function ve(c){let e,t,n,a,i,l,r,s=c[0]&&K(c);return{c(){e=b("nav"),s&&s.c(),t=q(),n=b("i"),a=b("span"),this.h()},l(u){e=p(u,"NAV",{class:!0});var f=v(e);s&&s.l(f),t=H(f),n=p(f,"I",{class:!0});var y=v(n);a=p(y,"SPAN",{class:!0}),v(a).forEach(h),y.forEach(h),f.forEach(h),this.h()},h(){d(a,"class","svelte-16okims"),d(n,"class","hamburger svelte-16okims"),w(n,"icon-cross",c[0]),d(e,"class","svelte-16okims"),w(e,"open",c[0])},m(u,f){P(u,e,f),s&&s.m(e,null),C(e,t),C(e,n),C(n,a),i=!0,l||(r=te(n,"click",c[2]),l=!0)},p(u,[f]){u[0]?s?(s.p(u,f),f&1&&g(s,1)):(s=K(u),s.c(),g(s,1),s.m(e,t)):s&&(L(),k(s,1,1,()=>{s=null}),O()),f&1&&w(n,"icon-cross",u[0]),f&1&&w(e,"open",u[0])},i(u){i||(g(s),i=!0)},o(u){k(s),i=!1},d(u){u&&h(e),s&&s.d(),l=!1,r()}}}function ke(c,e,t){let{open:n=!1}=e,a=[];const i=de.subscribe(r=>{!r.url||(t(1,a=[{icon:"bi bi-alarm",title:"Tabata/Timer",href:"/routine"},{icon:"bi bi-tools",title:"Create New Workout",href:"/workout"},{icon:"bi bi-music-note-beamed",title:"Play Music",href:"/music"}]),t(1,a=a.map(s=>(s.active=r.url.pathname.match(s.href),s))))});B(()=>i());const l=()=>t(0,n=!n);return c.$$set=r=>{"open"in r&&t(0,n=r.open)},[n,a,l]}class we extends Y{constructor(e){super();M(this,e,ke,ve,Q,{open:0})}}function Pe(c){let e,t,n,a,i;return t=new G({}),{c(){e=b("div"),S(t.$$.fragment),this.h()},l(l){e=p(l,"DIV",{style:!0,class:!0});var r=v(e);V(t.$$.fragment,r),r.forEach(h),this.h()},h(){d(e,"style",c[1]),d(e,"class","svelte-1sgh73s"),w(e,"hide",c[0])},m(l,r){P(l,e,r),A(t,e,null),n=!0,a||(i=le(c[2].call(null,e)),a=!0)},p(l,[r]){(!n||r&2)&&d(e,"style",l[1]),r&1&&w(e,"hide",l[0])},i(l){n||(g(t.$$.fragment,l),n=!0)},o(l){k(t.$$.fragment,l),n=!1},d(l){l&&h(e),R(t),a=!1,i()}}}function Ce(c,e,t){const n=()=>new Promise(o=>{typeof window!="undefined"&&(typeof window.YT!="undefined"&&typeof window.YT.Player=="function"?o():(window.onYouTubeIframeAPIReady=()=>o(),_e("https://www.youtube.com/iframe_api")))}),a=o=>{n().then(()=>{const m={events:{onReady:f,onStateChange:y,onError:E,onApiChange:_,onPlaybackQualityChange:D,onPlaybackRateChange:j},playerVars:l,videoId:u};for(t(3,i=new window.YT.Player(document.createElement("div"),m));o.firstChild;)o.removeChild(o.firstChild);o.appendChild(i.getIframe())})};B(()=>{i&&i.destroy()});let{player:i=null}=e,{playerVars:l={}}=e,{hide:r=!1}=e,{style:s=null}=e,{videoId:u=null}=e,{onReady:f=null}=e,{onStateChange:y=null}=e,{onPlaybackQualityChange:D=null}=e,{onPlaybackRateChange:j=null}=e,{onError:E=null}=e,{onApiChange:_=null}=e;return c.$$set=o=>{"player"in o&&t(3,i=o.player),"playerVars"in o&&t(4,l=o.playerVars),"hide"in o&&t(0,r=o.hide),"style"in o&&t(1,s=o.style),"videoId"in o&&t(5,u=o.videoId),"onReady"in o&&t(6,f=o.onReady),"onStateChange"in o&&t(7,y=o.onStateChange),"onPlaybackQualityChange"in o&&t(8,D=o.onPlaybackQualityChange),"onPlaybackRateChange"in o&&t(9,j=o.onPlaybackRateChange),"onError"in o&&t(10,E=o.onError),"onApiChange"in o&&t(11,_=o.onApiChange)},[r,s,a,i,l,u,f,y,D,j,E,_]}class Ee extends Y{constructor(e){super();M(this,e,Ce,Pe,Q,{player:3,playerVars:4,hide:0,style:1,videoId:5,onReady:6,onStateChange:7,onPlaybackQualityChange:8,onPlaybackRateChange:9,onError:10,onApiChange:11})}}function Ie(c){let e,t;return e=new Ee({props:{playerVars:c[2](),hide:!c[0].showPlayer,onReady:c[3],onStateChange:c[4]}}),{c(){S(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,a){A(e,n,a),t=!0},p(n,[a]){const i={};a&1&&(i.hide=!n[0].showPlayer),e.$set(i)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Se(c,e,t){let n;const a=ge.music;ae(c,a,u=>t(0,n=u));const i=()=>Object.preventExtensions({autoplay:0,cc_load_policy:0,color:"red",controls:1,disablekb:0,enablejsapi:1,fs:1,iv_load_policy:3,loop:0,modestbranding:1,playsinline:!0}),l=u=>{U(a,n.player=u.target,n),u.target.setVolume(100),u.target.cuePlaylist(n.playlist),me.utteranceCallbacks=s},r=u=>{console.log(u)},s=u=>{console.log(u)};return B(()=>U(a,n.player=void 0,n)),[n,a,i,l,r]}class Ve extends Y{constructor(e){super();M(this,e,Se,Ie,Q,{})}}function Ae(c){let e,t,n;return t=new G({}),{c(){e=b("main"),S(t.$$.fragment),this.h()},l(a){e=p(a,"MAIN",{class:!0});var i=v(e);V(t.$$.fragment,i),i.forEach(h),this.h()},h(){d(e,"class","preloader svelte-5jiaxk")},m(a,i){P(a,e,i),A(t,e,null),n=!0},p:N,i(a){n||(g(t.$$.fragment,a),n=!0)},o(a){k(t.$$.fragment,a),n=!1},d(a){a&&h(e),R(t)}}}function Re(c){let e,t,n,a,i,l,r,s,u,f,y;n=new pe({props:{shrink:c[0]}});function D(o){c[3](o)}let j={};c[0]!==void 0&&(j.open=c[0]),i=new we({props:j}),se.push(()=>re(i,"open",D));const E=c[2].default,_=oe(E,c,c[1],null);return f=new Ve({}),{c(){e=b("header"),t=b("div"),S(n.$$.fragment),a=q(),S(i.$$.fragment),r=q(),s=b("main"),_&&_.c(),u=q(),S(f.$$.fragment),this.h()},l(o){e=p(o,"HEADER",{class:!0});var m=v(e);t=p(m,"DIV",{class:!0});var T=v(t);V(n.$$.fragment,T),T.forEach(h),a=H(m),V(i.$$.fragment,m),m.forEach(h),r=H(o),s=p(o,"MAIN",{class:!0});var I=v(s);_&&_.l(I),u=H(I),V(f.$$.fragment,I),I.forEach(h),this.h()},h(){d(t,"class","spacer svelte-5jiaxk"),w(t,"shrink",c[0]),d(e,"class","svelte-5jiaxk"),d(s,"class","svelte-5jiaxk")},m(o,m){P(o,e,m),C(e,t),A(n,t,null),C(e,a),A(i,e,null),P(o,r,m),P(o,s,m),_&&_.m(s,null),C(s,u),A(f,s,null),y=!0},p(o,m){const T={};m&1&&(T.shrink=o[0]),n.$set(T),m&1&&w(t,"shrink",o[0]);const I={};!l&&m&1&&(l=!0,I.open=o[0],ie(()=>l=!1)),i.$set(I),_&&_.p&&(!y||m&2)&&ce(_,E,o,o[1],y?fe(E,o[1],m,null):ue(o[1]),null)},i(o){y||(g(n.$$.fragment,o),g(i.$$.fragment,o),g(_,o),g(f.$$.fragment,o),y=!0)},o(o){k(n.$$.fragment,o),k(i.$$.fragment,o),k(_,o),k(f.$$.fragment,o),y=!1},d(o){o&&h(e),R(n),R(i),o&&h(r),o&&h(s),_&&_.d(o),R(f)}}}function je(c){let e,t,n,a;const i=[Re,Ae],l=[];function r(s,u){return 0}return e=r(),t=l[e]=i[e](c),{c(){t.c(),n=F()},l(s){t.l(s),n=F()},m(s,u){l[e].m(s,u),P(s,n,u),a=!0},p(s,[u]){t.p(s,u)},i(s){a||(g(t),a=!0)},o(s){k(t),a=!1},d(s){l[e].d(s),s&&h(n)}}}function De(c,e,t){let{$$slots:n={},$$scope:a}=e,i;function l(r){i=r,t(0,i)}return c.$$set=r=>{"$$scope"in r&&t(1,a=r.$$scope)},[i,a,n,l]}class qe extends Y{constructor(e){super();M(this,e,De,je,Q,{})}}export{qe as default};
