import{D as Z,a3 as W,a6 as Se,S as x,i as $,s as ee,T as oe,k as H,e as C,m as K,c as L,a as T,d as j,b as X,F as le,g as k,J as ve,V as ie,W as ce,X as ue,q as B,o as D,v as Ae,a7 as Ie,l as Y,a8 as je,Q as fe,C as ye,w as me,x as _e,y as be,U as Oe,B as he,z as we,A as Re,n as Pe,p as Ne,M as te,R as Ce,t as q,h as z,G as I,j as G}from"./vendor-e13e40a5.js";import{p as Le}from"./stores-e2f0a4ed.js";import{L as Te,A as Xe}from"./appStore-343e38e2.js";import{t as Q,g as qe,p as ze,I as ke}from"./helpers-7746061f.js";const w={EXERCISE:"exercises",PLANK:"planks"},se=(s={})=>{const e=Object.preventExtensions({name:"",display_name:"",type:w.EXERCISE,region:"",target:"",has_lr:!1,band_pos:0,band_pos_text:""});return Object.assign(e,s)},tt={PREP:-3,BREAK:-2,REST:-1,WORK:1},st=(s=null)=>{const e=Object.preventExtensions(Object.assign({elapsed:0,duration:0,cycle:0,round:0},se()));return s?Object.assign(e,s):e},He=()=>({saveWorkout:e=>new Promise(t=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"};let c="https://kalabaaz.pythonanywhere.com";c+="/api/workout/save",fetch(c,r).then(async b=>{b.ok&&t()}).catch(b=>{console.error(b)})})});var Ke=He();const Be=()=>{const{subscribe:s,set:e}=Z(null);return{subscribe:s,setDb:r=>{const b=new DOMParser().parseFromString(r,"text/xml"),l=b.querySelector("parsererror");e(l||b)}}};var F=Be();const De=W(F,s=>{if(!s)return[];const e=s.querySelector("exercises");return Array.from(e.children).map(t=>Object.seal({id:t.tagName,title:Q(t.tagName.replace("_"," "))}))},[]),ne=(s=null)=>{const e=Object.preventExtensions({id:null,title:null,tabatas:3,prep_time:10,time_on:40,time_off:15,rest_time:60,with_equipment:!0,has_plank:!0,pathname:null,rules:{}}),{subscribe:t,set:r,update:c}=Z(e),b=i=>{i=Object.assign(e,i),De.subscribe(d=>{if(d.length){const R=Object.fromEntries(d.map(a=>[a.id,0]));i.rules=Object.preventExtensions(Object.assign(R,i.rules))}return!0})(),r(i)},l=(i,u)=>{let d=!1;return c(R=>(u&&!isNaN(u)&&(R.rules[i]=u),d=!0,R)),d},o=(i=null)=>(i||t(d=>i=d)(),Object.entries(i.rules).reduce((u,d)=>u+(isNaN(d[1])?0:d[1]),0)),n=(i=null)=>{i||t(a=>i=a)();const u=o(i);let d=0;return d+=i.prep_time,d+=i.time_on*u*i.tabatas,d+=i.time_off*(u-1)*i.tabatas,d+=i.rest_time*(i.tabatas-1),d},f=(i=null)=>{let u;return t(R=>u=R)(),i?u[i]:u},h=(i=null)=>{i||t(R=>i=R)();const u=Object.fromEntries(Object.entries(i));return u.rules=Object.fromEntries(Object.entries(i.rules)),u};return s&&b(s),{subscribe:t,set:b,get:f,clone:h,update:c,updateRule:l,getTotalTime:n,getTotalExercises:o}},nt=W(F,(s,e)=>{if(!s)return[];const t=s.querySelector("selection_rules");if(!t)return[];const r=[];Array.from(t.children).forEach(c=>{const b={id:c.tagName,title:Q(c.tagName.replace("_"," ")),tabatas:parseInt(c.getAttribute("tabatas")),rest_time:parseInt(c.getAttribute("rest_time")),time_on:parseInt(c.getAttribute("time_on")),time_off:parseInt(c.getAttribute("time_off")),prep_time:parseInt(c.getAttribute("prep_time"))||10},l=Array.from(c.children).map(o=>[o.tagName,parseInt(o.getAttribute("select"))]);b.rules=Object.fromEntries(l),r.push(ne(b))}),e(r)},[]),Me=(s=ne())=>{const e=Object.preventExtensions({meta:s?s.get():null,[w.EXERCISE]:[],[w.PLANK]:[]}),{subscribe:t,set:r,update:c}=Z(e),b=(a=ne())=>{s=a,F.subscribe(p=>{if(!p)return;const m={};m.meta=n(s.get()),m[w.EXERCISE]=[],m[w.PLANK]=[];for(let E in m.meta.rules){if(!parseInt(m.meta.rules[E]))continue;const y=p.querySelector("exercises > "+E).children;m[w.EXERCISE]=m[w.EXERCISE].concat(u(y,m.meta.rules[E],!1,m.meta.with_equipment))}if(m.meta.with_equipment){const E=Math.random()>.5?1:-1;m[w.EXERCISE]=m[w.EXERCISE].sort((y,O)=>(y.band_pos-O.band_pos)*E)}if(m.meta.has_plank){const E=p.querySelector("planks");m[w.PLANK]=u(E.children,parseInt(E.getAttribute("select")),!0,m.meta.with_equipment)}r(m)})()},l=(a=!1)=>{c(_=>(a===!0&&(_.meta.pathname||(_.meta.pathname=qe(10)),Ke.saveWorkout(_)),Te.setItem("workout",_),_))},o=(a=null)=>{a||t(E=>a=E)();const _=a[w.EXERCISE].length;let p=0;return p+=a.meta.prep_time,p+=a.meta.time_on*_*a.meta.tabatas,p+=a.meta.time_off*(_-1)*a.meta.tabatas,p+=a.meta.rest_time*(a.meta.tabatas-1),p},n=(a=null)=>{a||t(m=>a=m.meta)()();const _=Object.fromEntries(Object.entries(a));return _.rules=Object.fromEntries(Object.entries(a.rules)),_},f=(a=-1,_=w.EXERCISE,p="replace")=>{c(m=>{const E=m[_][a];switch(p){case"delete":d(a,m[_]),_!==w.PLANK&&(m.meta.rules[E.region]-=1);break;case"replace":const y=i(a,m[_],_);y.length&&d(a,m[_],y);break}return m})},h=(a=-1,_=-1,p=w.EXERCISE)=>{a<0||c(m=>{const E=m[p].length;_==-1?_=E-1:_==E&&(_=0);const y=m[p].splice(_,1,m[p][a]);return m[p].splice(a,1,...y),m})},i=(a,_,p)=>{const m=_[a];if(!m)return[];const E=_.filter(N=>N.region===m.region).map(N=>N.name),y=Se(F);let O=p;p==w.EXERCISE&&(O+=" > "+m.region);let g=y.querySelector(O);const A=Array.from(g.children).filter(N=>!E.includes(N.getAttribute("name")));return u(A,1,p==w.PLANK)},u=(a,_,p,m=!0)=>{a=a instanceof Array?a:Array.from(a),m===!1&&(a=a.filter(g=>parseInt(g.getAttribute("band_pos"))==0)),a.length>_&&(a=ze(a,_));let E;R.subscribe(g=>E=g)();let O=[];for(let g in a){const A=Boolean(parseInt(a[g].getAttribute("has_lr"))),N=a[g].getAttribute("name"),v=se();if(v.type=p?w.PLANK:w.EXERCISE,v.name=N,v.display_name=N+(A?" (Right)":""),v.region=a[g].parentElement.tagName,v.target=a[g].getAttribute("target"),v.has_lr=A,v.band_pos=parseInt(a[g].getAttribute("band_pos")),v.band_pos_text=E[a[g].getAttribute("band_pos")],A){const S=Object.assign(se(),v);S.display_name=N+" (Left)",O.push(S)}O.push(v)}return O},d=(a=-1,_=[],p=[])=>{const m=_[a],E=m.has_lr===!0?_.findIndex(y=>y.name==m.name&&y!==m):-1;E>-1&&(_.splice(E,1),a=_.indexOf(m)),p.length?_.splice(a,1,...p):_.splice(a,1)},R=W(F,a=>{if(!a)return{};const _={},p=a.querySelector("band_legends");return Array.from(p.children).forEach(m=>{_[m.getAttribute("id")]=m.getAttribute("title")}),_},{});return{subscribe:t,set:r,update:c,save:l,cloneMeta:n,alterExercise:f,swapExercise:h,getTotalTime:o,get preset(){return s},set preset(a){b(a)}}};var pe=Me();function Fe(s){let e,t;return{c(){e=new Ie,t=Y(),this.h()},l(r){e=je(r),t=Y(),this.h()},h(){e.a=t},m(r,c){e.m(s[1],r,c),k(r,t,c)},p(r,c){c&2&&e.p(r[1])},d(r){r&&j(t),r&&e.d()}}}function Ve(s){let e,t,r,c,b;const l=s[6].default,o=oe(l,s,s[5],null),n=o||Fe(s);return{c(){e=H(),t=C("div"),n&&n.c(),this.h()},l(f){e=K(f),t=L(f,"DIV",{class:!0});var h=T(t);n&&n.l(h),h.forEach(j),this.h()},h(){X(t,"class","tooltip svelte-jacfdc"),le(t,"show",s[0])},m(f,h){k(f,e,h),k(f,t,h),n&&n.m(t,null),s[7](t),r=!0,c||(b=ve(document.body,"mousemove",s[3]),c=!0)},p(f,[h]){o?o.p&&(!r||h&32)&&ie(o,l,f,f[5],r?ue(l,f[5],h,null):ce(f[5]),null):n&&n.p&&(!r||h&2)&&n.p(f,r?h:-1),h&1&&le(t,"show",f[0])},i(f){r||(B(n,f),r=!0)},o(f){D(n,f),r=!1},d(f){f&&j(e),f&&j(t),n&&n.d(f),s[7](null),c=!1,b()}}}function Je(s,e,t){let{$$slots:r={},$$scope:c}=e;const b=u=>{h||(h={x:u.screenX,y:u.screenY},f.style.setProperty("transform",`translateX(${h.x-f.parentNode.offsetLeft}px)`),f.style.setProperty("transition",`transform ${o/10}ms`))};Ae(()=>{setTimeout(()=>t(0,n=!1),o)});let{body:l=null}=e,{duration:o=1500}=e,{show:n}=e,f,h;function i(u){fe[u?"unshift":"push"](()=>{f=u,t(2,f)})}return s.$$set=u=>{"body"in u&&t(1,l=u.body),"duration"in u&&t(4,o=u.duration),"show"in u&&t(0,n=u.show),"$$scope"in u&&t(5,c=u.$$scope)},[n,l,f,b,o,c,r,i]}class Ye extends x{constructor(e){super();$(this,e,Je,Ve,ee,{body:1,duration:4,show:0})}}function de(s){let e,t,r;function c(l){s[5](l)}let b={body:s[0]};return s[1]!==void 0&&(b.show=s[1]),e=new Ye({props:b}),fe.push(()=>Ce(e,"show",c)),{c(){me(e.$$.fragment)},l(l){_e(e.$$.fragment,l)},m(l,o){be(e,l,o),r=!0},p(l,o){const n={};o&1&&(n.body=l[0]),!t&&o&2&&(t=!0,n.show=l[1],Oe(()=>t=!1)),e.$set(n)},i(l){r||(B(e.$$.fragment,l),r=!0)},o(l){D(e.$$.fragment,l),r=!1},d(l){he(e,l)}}}function Ge(s){let e,t,r,c;const b=[s[4]()];let l={};for(let n=0;n<b.length;n+=1)l=ye(l,b[n]);e=new ke({props:l}),e.$on("click",s[3]);let o=s[1]&&de(s);return{c(){me(e.$$.fragment),t=H(),o&&o.c(),r=Y()},l(n){_e(e.$$.fragment,n),t=K(n),o&&o.l(n),r=Y()},m(n,f){be(e,n,f),k(n,t,f),o&&o.m(n,f),k(n,r,f),c=!0},p(n,[f]){const h=f&16?we(b,[Re(n[4]())]):{};e.$set(h),n[1]?o?(o.p(n,f),f&2&&B(o,1)):(o=de(n),o.c(),B(o,1),o.m(r.parentNode,r)):o&&(Pe(),D(o,1,1,()=>{o=null}),Ne())},i(n){c||(B(e.$$.fragment,n),B(o),c=!0)},o(n){D(e.$$.fragment,n),D(o),c=!1},d(n){he(e,n),n&&j(t),o&&o.d(n),n&&j(r)}}}function Qe(s,e,t){let r,c,b;te(s,pe,u=>t(6,r=u)),te(s,Le,u=>t(8,b=u));const l=Xe.routine;te(s,l,u=>t(7,c=u));let o="",n=!1;const f=async()=>{pe.save(!0);const u={title:"Sweat Workout",text:"Here's the link to your saved workout.",url:`${b.url.origin}${c.tabataLink}/?w=${r.meta.pathname}&`};"canShare"in navigator&&navigator.canShare(u)?await navigator.share(u):"clipboard"in navigator&&(await navigator.clipboard.writeText(u.url),n||(t(0,o="Link Copied!"),t(1,n=!0)))},h=()=>({icon:`bi bi-${"canShare"in navigator&&navigator.canShare()?"share-fill":"link"}`,title:"Share"});function i(u){n=u,t(1,n)}return[o,n,l,f,h,i]}class at extends x{constructor(e){super();$(this,e,Qe,Ge,ee,{})}}function ge(s){let e;return{c(){e=C("i"),this.h()},l(t){e=L(t,"I",{class:!0}),T(e).forEach(j),this.h()},h(){X(e,"class","bi bi-check svelte-nz0c3b")},m(t,r){k(t,e,r)},d(t){t&&j(e)}}}function Ee(s){let e,t,r,c,b;return{c(){e=C("span"),t=C("h6"),r=q("Band:"),c=C("h6"),b=q(s[5]),this.h()},l(l){e=L(l,"SPAN",{class:!0});var o=T(e);t=L(o,"H6",{class:!0});var n=T(t);r=z(n,"Band:"),n.forEach(j),c=L(o,"H6",{class:!0});var f=T(c);b=z(f,s[5]),f.forEach(j),o.forEach(j),this.h()},h(){X(t,"class","svelte-nz0c3b"),X(c,"class","svelte-nz0c3b"),X(e,"class","svelte-nz0c3b")},m(l,o){k(l,e,o),I(e,t),I(t,r),I(e,c),I(c,b)},p(l,o){o&32&&G(b,l[5])},d(l){l&&j(e)}}}function Ue(s){let e,t,r,c,b,l,o,n,f,h,i,u,d,R=Q(s[2].replace("_"," "))+"",a,_,p,m,E,y,O,g=s[1]&&ge(),A=s[4]!==0&&Ee(s);const N=s[7].default,v=oe(N,s,s[6],null);return{c(){e=C("div"),t=C("span"),r=C("h6"),c=q("Exercise:"),b=H(),l=C("h4"),o=q(s[0]),n=H(),g&&g.c(),f=H(),h=C("span"),i=C("h6"),u=q("Region:"),d=C("h6"),a=q(R),_=q("\xA0("),p=q(s[3]),m=q(")"),E=H(),A&&A.c(),y=H(),v&&v.c(),this.h()},l(S){e=L(S,"DIV",{class:!0});var P=T(e);t=L(P,"SPAN",{class:!0});var V=T(t);r=L(V,"H6",{class:!0});var ae=T(r);c=z(ae,"Exercise:"),ae.forEach(j),b=K(V),l=L(V,"H4",{class:!0});var J=T(l);o=z(J,s[0]),n=K(J),g&&g.l(J),J.forEach(j),V.forEach(j),f=K(P),h=L(P,"SPAN",{class:!0});var U=T(h);i=L(U,"H6",{class:!0});var re=T(i);u=z(re,"Region:"),re.forEach(j),d=L(U,"H6",{class:!0});var M=T(d);a=z(M,R),_=z(M,"\xA0("),p=z(M,s[3]),m=z(M,")"),M.forEach(j),U.forEach(j),E=K(P),A&&A.l(P),y=K(P),v&&v.l(P),P.forEach(j),this.h()},h(){X(r,"class","svelte-nz0c3b"),X(l,"class","svelte-nz0c3b"),X(t,"class","svelte-nz0c3b"),X(i,"class","svelte-nz0c3b"),X(d,"class","svelte-nz0c3b"),X(h,"class","svelte-nz0c3b"),X(e,"class","svelte-nz0c3b")},m(S,P){k(S,e,P),I(e,t),I(t,r),I(r,c),I(t,b),I(t,l),I(l,o),I(l,n),g&&g.m(l,null),I(e,f),I(e,h),I(h,i),I(i,u),I(h,d),I(d,a),I(d,_),I(d,p),I(d,m),I(e,E),A&&A.m(e,null),I(e,y),v&&v.m(e,null),O=!0},p(S,[P]){(!O||P&1)&&G(o,S[0]),S[1]?g||(g=ge(),g.c(),g.m(l,null)):g&&(g.d(1),g=null),(!O||P&4)&&R!==(R=Q(S[2].replace("_"," "))+"")&&G(a,R),(!O||P&8)&&G(p,S[3]),S[4]!==0?A?A.p(S,P):(A=Ee(S),A.c(),A.m(e,y)):A&&(A.d(1),A=null),v&&v.p&&(!O||P&64)&&ie(v,N,S,S[6],O?ue(N,S[6],P,null):ce(S[6]),null)},i(S){O||(B(v,S),O=!0)},o(S){D(v,S),O=!1},d(S){S&&j(e),g&&g.d(),A&&A.d(),v&&v.d(S)}}}function Ze(s,e,t){let{$$slots:r={},$$scope:c}=e,{name:b,completed:l,region:o,target:n,band_pos:f,band_pos_text:h}=e;return s.$$set=i=>{"name"in i&&t(0,b=i.name),"completed"in i&&t(1,l=i.completed),"region"in i&&t(2,o=i.region),"target"in i&&t(3,n=i.target),"band_pos"in i&&t(4,f=i.band_pos),"band_pos_text"in i&&t(5,h=i.band_pos_text),"$$scope"in i&&t(6,c=i.$$scope)},[b,l,o,n,f,h,c,r]}class rt extends x{constructor(e){super();$(this,e,Ze,Ue,ee,{name:0,completed:1,region:2,target:3,band_pos:4,band_pos_text:5})}}export{rt as E,ne as P,st as R,at as S,F as W,w as a,De as b,nt as p,tt as r,pe as w};
