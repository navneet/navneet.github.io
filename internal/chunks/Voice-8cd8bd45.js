import{S as L,i as D,s as N,e as C,c as M,a as T,d as k,b as g,f as I,F as S,k as R,m as j,n as B,o as q,p as P,V as y,B as F,W as A,D as v,I as p,y as G,X as W,Y as O,E as z,P as H,R as J,T as K,U as Q,Z as X}from"./vendor-7dd5008c.js";function x(l){let e;return{c(){e=C("div"),this.h()},l(t){e=M(t,"DIV",{class:!0}),T(e).forEach(k),this.h()},h(){g(e,"class","spinner svelte-1vi66va")},m(t,n){I(t,e,n)},p:S,i:S,o:S,d(t){t&&k(e)}}}class oe extends L{constructor(e){super();D(this,e,null,x,N,{})}}function $(l){let e,t,n,s,f,c;const h=[ne,le,te],i=[];function o(r,_){return r[3]?0:r[2]?1:2}t=o(l),n=i[t]=h[t](l);let m=[{disabled:l[5]},l[8]],u={};for(let r=0;r<m.length;r+=1)u=F(u,m[r]);return{c(){e=C("button"),n.c(),this.h()},l(r){e=M(r,"BUTTON",{});var _=T(e);n.l(_),_.forEach(k),this.h()},h(){A(e,u),v(e,"active",l[6]),v(e,"hide",l[7]),v(e,"svelte-ew6007",!0)},m(r,_){I(r,e,_),i[t].m(e,null),e.autofocus&&e.focus(),s=!0,f||(c=[p(e,"click",l[15]),p(e,"dblclick",l[16]),p(e,"mouseenter",l[17]),p(e,"mouseleave",l[18])],f=!0)},p(r,_){let d=t;t=o(r),t===d?i[t].p(r,_):(j(),B(i[d],1,1,()=>{i[d]=null}),q(),n=i[t],n?n.p(r,_):(n=i[t]=h[t](r),n.c()),P(n,1),n.m(e,null)),A(e,u=G(m,[(!s||_&32)&&{disabled:r[5]},_&256&&r[8]])),v(e,"active",r[6]),v(e,"hide",r[7]),v(e,"svelte-ew6007",!0)},i(r){s||(P(n),s=!0)},o(r){B(n),s=!1},d(r){r&&k(e),i[t].d(),f=!1,W(c)}}}function ee(l){let e,t,n,s,f,c=[{href:l[0]},{title:l[1]},l[8]],h={};for(let i=0;i<c.length;i+=1)h=F(h,c[i]);return{c(){e=C("a"),t=C("i"),this.h()},l(i){e=M(i,"A",{href:!0,title:!0});var o=T(e);t=M(o,"I",{class:!0}),T(t).forEach(k),o.forEach(k),this.h()},h(){g(t,"class",n=""+(O(l[2])+" svelte-ew6007")),A(e,h),v(e,"active",l[6]),v(e,"hide",l[7]),v(e,"svelte-ew6007",!0)},m(i,o){I(i,e,o),z(e,t),s||(f=[p(e,"click",l[11]),p(e,"dblclick",l[12]),p(e,"mouseenter",l[13]),p(e,"mouseleave",l[14])],s=!0)},p(i,o){o&4&&n!==(n=""+(O(i[2])+" svelte-ew6007"))&&g(t,"class",n),A(e,h=G(c,[o&1&&{href:i[0]},o&2&&{title:i[1]},o&256&&i[8]])),v(e,"active",i[6]),v(e,"hide",i[7]),v(e,"svelte-ew6007",!0)},i:S,o:S,d(i){i&&k(e),s=!1,W(f)}}}function te(l){let e;const t=l[10].default,n=H(t,l,l[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,f){n&&n.m(s,f),e=!0},p(s,f){n&&n.p&&(!e||f&512)&&J(n,t,s,s[9],e?Q(t,s[9],f,null):K(s[9]),null)},i(s){e||(P(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function le(l){let e,t;return{c(){e=C("i"),this.h()},l(n){e=M(n,"I",{class:!0,title:!0}),T(e).forEach(k),this.h()},h(){g(e,"class",t=""+(O(l[2])+" svelte-ew6007")),g(e,"title",l[1])},m(n,s){I(n,e,s)},p(n,s){s&4&&t!==(t=""+(O(n[2])+" svelte-ew6007"))&&g(e,"class",t),s&2&&g(e,"title",n[1])},i:S,o:S,d(n){n&&k(e)}}}function ne(l){let e,t;return{c(){e=C("img"),this.h()},l(n){e=M(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,t=l[3])||g(e,"src",t),g(e,"alt",l[4]),g(e,"class","svelte-ew6007")},m(n,s){I(n,e,s)},p(n,s){s&8&&!X(e.src,t=n[3])&&g(e,"src",t),s&16&&g(e,"alt",n[4])},i:S,o:S,d(n){n&&k(e)}}}function se(l){let e,t,n,s;const f=[ee,$],c=[];function h(i,o){return i[0]?0:1}return e=h(l),t=c[e]=f[e](l),{c(){t.c(),n=R()},l(i){t.l(i),n=R()},m(i,o){c[e].m(i,o),I(i,n,o),s=!0},p(i,[o]){let m=e;e=h(i),e===m?c[e].p(i,o):(j(),B(c[m],1,1,()=>{c[m]=null}),q(),t=c[e],t?t.p(i,o):(t=c[e]=f[e](i),t.c()),P(t,1),t.m(n.parentNode,n))},i(i){s||(P(t),s=!0)},o(i){B(t),s=!1},d(i){c[e].d(i),i&&k(n)}}}function ie(l,e,t){let{$$slots:n={},$$scope:s}=e,{href:f=null}=e,{title:c=null}=e,{icon:h=null}=e,{src:i=null}=e,{alt:o=""}=e,{disabled:m=!1}=e,{active:u=!1}=e,{hide:r=!1}=e,{data:_={}}=e;function d(a){y.call(this,l,a)}function w(a){y.call(this,l,a)}function b(a){y.call(this,l,a)}function U(a){y.call(this,l,a)}function V(a){y.call(this,l,a)}function E(a){y.call(this,l,a)}function Y(a){y.call(this,l,a)}function Z(a){y.call(this,l,a)}return l.$$set=a=>{"href"in a&&t(0,f=a.href),"title"in a&&t(1,c=a.title),"icon"in a&&t(2,h=a.icon),"src"in a&&t(3,i=a.src),"alt"in a&&t(4,o=a.alt),"disabled"in a&&t(5,m=a.disabled),"active"in a&&t(6,u=a.active),"hide"in a&&t(7,r=a.hide),"data"in a&&t(8,_=a.data),"$$scope"in a&&t(9,s=a.$$scope)},[f,c,h,i,o,m,u,r,_,s,n,d,w,b,U,V,E,Y,Z]}class ue extends L{constructor(e){super();D(this,e,ie,se,N,{href:0,title:1,icon:2,src:3,alt:4,disabled:5,active:6,hide:7,data:8})}}function fe(l,e={}){return new Promise((t,n)=>{const s=document.createElement("script");s.src=l,s.onload=c=>t(c),s.onerror=c=>n(c),Object.entries(e).map(([c,h])=>s.setAttribute(c,h));const f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(s,f)})}function ae(l){l=Math.abs(l);const e=Math.floor(l/60),t=l%60;return{m:e,s:t}}function _e(l){let{m:e,s:t}=ae(l);return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")}function he(l){return l.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase())}function de(l=[],e=1){if(l.length<e)return l;const t=[];for(let n=0;n<e;){const s=Math.floor(Math.random()*l.length);t.indexOf(l[s])===-1&&(t.push(l[s]),n++)}return t}function me(l=6){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let n=0;n<l;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}const re=()=>{let l=null,e=null,t=!1;function n(u=null){t||(m(u),h("ready",0),t=!0)}const s=()=>"speechSynthesis"in window;async function f(u=null,r=!1){return s()?await c(u,r):[]}function c(u,r){return new Promise(_=>{const d=window.speechSynthesis,w=()=>{d.removeEventListener("voiceschanged",w),_(b())},b=()=>{let V=d.getVoices();return u&&(V=V.filter(E=>E.lang.replace("_","-").substring(0,u.length)===u)),r&&(V=V.map(E=>({value:E.name,label:E.name}))),V};d.getVoices().length?_(b()):d.addEventListener("voiceschanged",w)})}const h=(u,r=1,_=1,d=1,w=null)=>{if(s()){const b=new SpeechSynthesisUtterance;b.text=u,b.volume=r,b.rate=_,b.pitch=d,b.onerror=o,w||(w=l),w&&(b.voice=w,b.lang=w.lang),window.speechSynthesis.speak(b)}},i=()=>{s()&&window.speechSynthesis.pending&&window.speechSynthesis.cancel()},o=u=>{console.log(u.error)},m=u=>{u&&f().then(r=>{l=r.reduce((_,d)=>"name"in d&&d.name===u?d:_,null)})};return{speak:h,getVoices:f,isSupported:s,activateOnClick:n,clearPending:i,utteranceCallbacks:e,get defaultVoice(){return l},set defaultVoice(u){m(u)}}},be=re();export{ue as I,oe as P,be as V,ae as a,me as g,fe as l,de as p,_e as s,he as t};
