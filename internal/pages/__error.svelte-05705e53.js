import{S as I,i as T,s as W,j as g,e as h,t as k,k as j,a1 as C,d as i,l as S,c as d,a as m,g as E,b as L,f as u,E as v,h as b,F as q,H as D}from"../chunks/vendor-a6521ad7.js";function A(n,s,a){const t=n.slice();return t[3]=s[a],t}function F(n){let s,a=n[0].message+"",t;return{c(){s=h("div"),t=k(a)},l(l){s=d(l,"DIV",{});var r=m(s);t=E(r,a),r.forEach(i)},m(l,r){u(l,s,r),v(s,t)},p(l,r){r&1&&a!==(a=l[0].message+"")&&b(t,a)},d(l){l&&i(s)}}}function N(n){let s,a=n[2](n[0].stack),t=[];for(let l=0;l<a.length;l+=1)t[l]=H(A(n,a,l));return{c(){s=h("ol");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){s=d(l,"OL",{});var r=m(s);for(let e=0;e<t.length;e+=1)t[e].l(r);r.forEach(i)},m(l,r){u(l,s,r);for(let e=0;e<t.length;e+=1)t[e].m(s,null)},p(l,r){if(r&5){a=l[2](l[0].stack);let e;for(e=0;e<a.length;e+=1){const f=A(l,a,e);t[e]?t[e].p(f,r):(t[e]=H(f),t[e].c(),t[e].m(s,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=a.length}},d(l){l&&i(s),D(t,l)}}}function H(n){let s,a,t=n[3]+"",l;return{c(){s=h("li"),a=h("pre"),l=k(t),this.h()},l(r){s=d(r,"LI",{});var e=m(s);a=d(e,"PRE",{class:!0});var f=m(a);l=E(f,t),f.forEach(i),e.forEach(i),this.h()},h(){L(a,"class","svelte-jci754")},m(r,e){u(r,s,e),v(s,a),v(a,l)},p(r,e){e&1&&t!==(t=r[3]+"")&&b(l,t)},d(r){r&&i(s)}}}function O(n){let s,a,t,l,r,e;document.title=s="SWEAT Error "+n[1];function f(o,_){return o[0].stack?N:F}let p=f(n),c=p(n);return{c(){a=g(),t=h("h2"),l=k(n[1]),r=g(),c.c(),e=j(),this.h()},l(o){C('[data-svelte="svelte-1rx6b74"]',document.head).forEach(i),a=S(o),t=d(o,"H2",{class:!0});var y=m(t);l=E(y,n[1]),y.forEach(i),r=S(o),c.l(o),e=j(),this.h()},h(){L(t,"class","svelte-jci754")},m(o,_){u(o,a,_),u(o,t,_),v(t,l),u(o,r,_),c.m(o,_),u(o,e,_)},p(o,[_]){_&2&&s!==(s="SWEAT Error "+o[1])&&(document.title=s),_&2&&b(l,o[1]),p===(p=f(o))&&c?c.p(o,_):(c.d(1),c=p(o),c&&(c.c(),c.m(e.parentNode,e)))},i:q,o:q,d(o){o&&i(a),o&&i(t),o&&i(r),c.d(o),o&&i(e)}}}const V=({error:n,status:s})=>({props:{error:n,status:s}});function P(n,s,a){const t=e=>e.split(`
`);let{error:l,status:r}=s;return n.$$set=e=>{"error"in e&&a(0,l=e.error),"status"in e&&a(1,r=e.status)},[l,r,t]}class w extends I{constructor(s){super();T(this,s,P,O,W,{error:0,status:1})}}export{w as default,V as load};
