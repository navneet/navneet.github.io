function h(){}function W(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t&&typeof t=="object"&&typeof t.then=="function"}function L(t){return t()}function z(){return Object.create(null)}function g(t){t.forEach(L)}function j(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let v;function bt(t,e){return v||(v=document.createElement("a")),v.href=e,t===v.href}function K(t){return Object.keys(t).length===0}function C(t,...e){if(t==null)return h;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t){let e;return C(t,n=>e=n)(),e}function gt(t,e,n){t.$$.on_destroy.push(C(e,n))}function xt(t,e,n,r){if(t){const c=B(t,e,n,r);return t[0](c)}}function B(t,e,n,r){return t[1]&&r?W(n.ctx.slice(),t[1](r(e))):n.ctx}function $t(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],u=Math.max(e.dirty.length,c.length);for(let l=0;l<u;l+=1)o[l]=e.dirty[l]|c[l];return o}return e.dirty|c}return e.dirty}function kt(t,e,n,r,c,o){if(c){const u=B(e,n,r,o);t.p(u,c)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Et(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function At(t){return t==null?"":t}function St(t,e,n){return t.set(n),e}function jt(t){return t&&j(t.destroy)?t.destroy:h}let E=!1;function Q(){E=!0}function R(){E=!1}function U(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let i=0;i<e.length;i++){const f=e[i];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const i=e[s].claim_order,f=(c>0&&e[n[c]].claim_order<=i?c+1:U(1,c,_=>e[n[_]].claim_order,i))-1;r[s]=n[f]+1;const a=f+1;n[a]=s,c=Math.max(a,c)}const o=[],u=[];let l=e.length-1;for(let s=n[c]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);l>=s;l--)u.push(e[l]);l--}for(;l>=0;l--)u.push(e[l]);o.reverse(),u.sort((s,i)=>s.claim_order-i.claim_order);for(let s=0,i=0;s<u.length;s++){for(;i<o.length&&u[s].claim_order>=o[i].claim_order;)i++;const f=i<o.length?o[i]:null;t.insertBefore(u[s],f)}}function X(t,e){if(E){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){E&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function qt(){return N(" ")}function Dt(){return N("")}function Mt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ot(t){return function(e){return e.preventDefault(),t.call(this,e)}}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Tt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:tt(t,r,e[r])}function Lt(t){return t===""?null:+t}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,r,c=!1){nt(t);const o=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const l=t[u];if(e(l)){const s=n(l);return s===void 0?t.splice(u,1):t[u]=s,c||(t.claim_info.last_index=u),l}}for(let u=t.claim_info.last_index-1;u>=0;u--){const l=t[u];if(e(l)){const s=n(l);return s===void 0?t.splice(u,1):t[u]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,e,n,r){return P(t,c=>c.nodeName===e,c=>{const o=[];for(let u=0;u<c.attributes.length;u++){const l=c.attributes[u];n[l.name]||o.push(l.name)}o.forEach(u=>c.removeAttribute(u))},()=>r(e))}function zt(t,e,n){return rt(t,e,n,Z)}function ct(t,e){return P(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>N(e),!0)}function Bt(t){return ct(t," ")}function Pt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function It(t,e){t.value=e==null?"":e}function Ft(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function Ht(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Wt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Gt(t,e,n){t.classList[n?"add":"remove"](e)}function st(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function Jt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let $;function m(t){$=t}function p(){if(!$)throw new Error("Function called outside component initialization");return $}function Kt(t){p().$$.on_mount.push(t)}function Qt(t){p().$$.after_update.push(t)}function Rt(t){p().$$.on_destroy.push(t)}function Ut(){const t=p();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const c=st(e,n);r.slice().forEach(o=>{o.call(t,c)})}}}function Vt(t,e){p().$$.context.set(t,e)}function Xt(t){return p().$$.context.get(t)}function Yt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const k=[],I=[],w=[],q=[],it=Promise.resolve();let D=!1;function ut(){D||(D=!0,it.then(T))}function M(t){w.push(t)}function Zt(t){q.push(t)}const O=new Set;let A=0;function T(){const t=$;do{for(;A<k.length;){const e=k[A];A++,m(e),lt(e.$$)}for(m(null),k.length=0,A=0;I.length;)I.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];O.has(n)||(O.add(n),n())}w.length=0}while(k.length);for(;q.length;)q.pop()();D=!1,O.clear(),m(t)}function lt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const S=new Set;let b;function ot(){b={r:0,c:[],p:b}}function at(){b.r||g(b.c),b=b.p}function F(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ft(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),b.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function te(t,e){const n=e.token={};function r(c,o,u,l){if(e.token!==n)return;e.resolved=l;let s=e.ctx;u!==void 0&&(s=s.slice(),s[u]=l);const i=c&&(e.current=c)(s);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==o&&a&&(ot(),ft(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),at())}):e.block.d(1),i.c(),F(i,1),i.m(e.mount(),e.anchor),f=!0),e.block=i,e.blocks&&(e.blocks[o]=i),f&&T()}if(G(t)){const c=p();if(t.then(o=>{m(c),r(e.then,1,e.value,o),m(null)},o=>{if(m(c),r(e.catch,2,e.error,o),m(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ee(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function ne(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const u=t[o],l=e[o];if(l){for(const s in u)s in l||(r[s]=1);for(const s in l)c[s]||(n[s]=l[s],c[s]=1);t[o]=l}else for(const s in u)c[s]=1}for(const u in r)u in n||(n[u]=void 0);return n}function re(t){return typeof t=="object"&&t!==null?t:{}}function ce(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function se(t){t&&t.c()}function ie(t,e){t&&t.l(e)}function _t(t,e,n,r){const{fragment:c,on_mount:o,on_destroy:u,after_update:l}=t.$$;c&&c.m(e,n),r||M(()=>{const s=o.map(L).filter(j);u?u.push(...s):g(s),t.$$.on_mount=[]}),l.forEach(M)}function dt(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(k.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,r,c,o,u,l=[-1]){const s=$;m(t);const i=t.$$={fragment:null,ctx:null,props:o,update:h,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};u&&u(i.root);let f=!1;if(i.ctx=n?n(t,e.props||{},(a,_,...d)=>{const y=d.length?d[0]:_;return i.ctx&&c(i.ctx[a],i.ctx[a]=y)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](y),f&&ht(t,a)),_}):[],i.update(),f=!0,g(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){Q();const a=et(e.target);i.fragment&&i.fragment.l(a),a.forEach(Y)}else i.fragment&&i.fragment.c();e.intro&&F(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),R(),T()}m(s)}class le{$destroy(){dt(this,1),this.$destroy=h}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function mt(t,e){return{subscribe:pt(t,e).subscribe}}function pt(t,e=h){let n;const r=new Set;function c(l){if(J(t,l)&&(t=l,n)){const s=!x.length;for(const i of r)i[1](),x.push(i,t);if(s){for(let i=0;i<x.length;i+=2)x[i][0](x[i+1]);x.length=0}}}function o(l){c(l(t))}function u(l,s=h){const i=[l,s];return r.add(i),r.size===1&&(n=e(c)||h),l(t),()=>{r.delete(i),r.size===0&&(n(),n=null)}}return{set:c,update:o,subscribe:u}}function oe(t,e,n){const r=!Array.isArray(t),c=r?[t]:t,o=e.length<2;return mt(n,u=>{let l=!1;const s=[];let i=0,f=h;const a=()=>{if(i)return;f();const d=e(r?s[0]:s,u);o?u(d):f=j(d)?d:h},_=c.map((d,y)=>C(d,H=>{s[y]=H,i&=~(1<<y),l&&a()},()=>{i|=1<<y}));return l=!0,a(),function(){g(_),f()}})}export{Jt as $,dt as A,W as B,pt as C,Gt as D,X as E,h as F,Ft as G,Nt as H,Mt as I,Rt as J,jt as K,gt as L,St as M,I as N,ce as O,xt as P,Zt as Q,kt as R,le as S,vt as T,$t as U,Yt as V,Tt as W,g as X,At as Y,bt as Z,Xt as _,et as a,oe as a0,Et as a1,Lt as a2,Wt as a3,Ht as a4,It as a5,te as a6,ee as a7,M as a8,C as a9,wt as aa,yt as ab,Ut as ac,Ot as ad,tt as b,zt as c,Y as d,Z as e,Ct as f,ct as g,Pt as h,ue as i,qt as j,Dt as k,Bt as l,ot as m,ft as n,at as o,F as p,Vt as q,Qt as r,J as s,N as t,Kt as u,se as v,ie as w,_t as x,ne as y,re as z};
