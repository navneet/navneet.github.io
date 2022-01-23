import{D as W,a3 as x,a6 as ve,S as $,i as ee,s as te,T as le,k as H,e as C,m as K,c as X,a as L,d as j,b as T,F as ie,g as z,J as Ae,V as ce,W as ue,X as fe,q as B,o as D,v as Ie,a7 as je,l as Y,a8 as ye,Q as me,C as Oe,w as _e,x as be,y as he,U as Re,B as pe,z as we,A as Pe,n as Ne,p as Ce,M as se,R as Xe,t as k,h as q,G as I,j as G}from"./vendor-e13e40a5.js";import{p as Le}from"./stores-e2f0a4ed.js";import{L as de,A as Te}from"./appStore-343e38e2.js";import{t as Q,g as ke,p as qe,I as ze}from"./helpers-7746061f.js";const y={EXERCISE:"exercises",PLANK:"planks"},U=(s={})=>{const e=Object.preventExtensions({name:"",display_name:"",type:y.EXERCISE,region:"",target:"",has_lr:!1,band_pos:0,band_pos_text:""});return Object.assign(e,s)},tt=(s=null)=>{const e=Object.preventExtensions(Object.assign({elapsed:0,duration:0,cycle:0,round:0},U()));return s?Object.assign(e,s):e},st={PREP:-3,BREAK:-2,REST:-1,WORK:1},nt=s=>{const e=U();return Object.keys(e).forEach(t=>e[t]=s[t]),e},He=()=>({saveWorkout:e=>new Promise(t=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"};let c="https://kalabaaz.pythonanywhere.com";c+="/api/workout/save",fetch(c,a).then(async b=>{b.ok&&t()}).catch(b=>{console.error(b)})})});var Ke=He();const Be=()=>{const{subscribe:s,set:e}=W(null);return{subscribe:s,setDb:a=>{const b=new DOMParser().parseFromString(a,"text/xml"),l=b.querySelector("parsererror");e(l||b)}}};var F=Be();const De=x(F,s=>{if(!s)return[];const e=s.querySelector("exercises");return Array.from(e.children).map(t=>Object.seal({id:t.tagName,title:Q(t.tagName.replace("_"," "))}))},[]),ne=(s=null)=>{const e=Object.preventExtensions({id:null,title:null,tabatas:3,prep_time:10,time_on:40,time_off:15,rest_time:60,with_equipment:!0,has_plank:!0,pathname:null,rules:{}}),{subscribe:t,set:a,update:c}=W(e),b=i=>{i=Object.assign(e,i),De.subscribe(d=>{if(d.length){const w=Object.fromEntries(d.map(r=>[r.id,0]));i.rules=Object.preventExtensions(Object.assign(w,i.rules))}return!0})(),a(i)},l=(i,u)=>{let d=!1;return c(w=>(u&&!isNaN(u)&&(w.rules[i]=u),d=!0,w)),d},o=(i=null)=>(i||t(d=>i=d)(),Object.entries(i.rules).reduce((u,d)=>u+(isNaN(d[1])?0:d[1]),0)),n=(i=null)=>{i||t(r=>i=r)();const u=o(i);let d=0;return d+=i.prep_time,d+=i.time_on*u*i.tabatas,d+=i.time_off*(u-1)*i.tabatas,d+=i.rest_time*(i.tabatas-1),d},f=(i=null)=>{let u;return t(w=>u=w)(),i?u[i]:u},h=(i=null)=>{i||t(w=>i=w)();const u=Object.fromEntries(Object.entries(i));return u.rules=Object.fromEntries(Object.entries(i.rules)),u};return s&&b(s),{subscribe:t,set:b,get:f,clone:h,update:c,updateRule:l,getTotalTime:n,getTotalExercises:o}},at=x(F,(s,e)=>{if(!s)return[];const t=s.querySelector("selection_rules");if(!t)return[];const a=[];Array.from(t.children).forEach(c=>{const b={id:c.tagName,title:Q(c.tagName.replace("_"," ")),tabatas:parseInt(c.getAttribute("tabatas")),rest_time:parseInt(c.getAttribute("rest_time")),time_on:parseInt(c.getAttribute("time_on")),time_off:parseInt(c.getAttribute("time_off")),prep_time:parseInt(c.getAttribute("prep_time"))||10},l=Array.from(c.children).map(o=>[o.tagName,parseInt(o.getAttribute("select"))]);b.rules=Object.fromEntries(l),a.push(ne(b))}),e(a)},[]),Me=(s=ne())=>{const e=Object.preventExtensions({meta:s?s.get():null,[y.EXERCISE]:[],[y.PLANK]:[]}),{subscribe:t,set:a,update:c}=W(e),b=(r=ne())=>{s=r,F.subscribe(p=>{if(!p)return;const m={};m.meta=n(s.get()),m[y.EXERCISE]=[],m[y.PLANK]=[];for(let E in m.meta.rules){if(!parseInt(m.meta.rules[E]))continue;const O=p.querySelector("exercises > "+E).children;m[y.EXERCISE]=m[y.EXERCISE].concat(u(O,m.meta.rules[E],!1,m.meta.with_equipment))}if(m.meta.with_equipment){const E=Math.random()>.5?1:-1;m[y.EXERCISE]=m[y.EXERCISE].sort((O,R)=>(O.band_pos-R.band_pos)*E)}if(m.meta.has_plank){const E=p.querySelector("planks");m[y.PLANK]=u(E.children,parseInt(E.getAttribute("select")),!0,m.meta.with_equipment)}a(m)})()},l=(r=!1)=>{c(_=>(r===!0&&(_.meta.pathname||(_.meta.pathname=ke(10)),Ke.saveWorkout(_)),de.setItem("workout",_),_))},o=(r=null)=>{r||t(E=>r=E)();const _=r[y.EXERCISE].length;let p=0;return p+=r.meta.prep_time,p+=r.meta.time_on*_*r.meta.tabatas,p+=r.meta.time_off*(_-1)*r.meta.tabatas,p+=r.meta.rest_time*(r.meta.tabatas-1),p},n=(r=null)=>{r||t(m=>r=m.meta)()();const _=Object.fromEntries(Object.entries(r));return _.rules=Object.fromEntries(Object.entries(r.rules)),_},f=(r=-1,_=y.EXERCISE,p="replace")=>{c(m=>{const E=m[_][r];switch(p){case"delete":d(r,m[_]),_!==y.PLANK&&(m.meta.rules[E.region]-=1);break;case"replace":const O=i(r,m[_],_);O.length&&d(r,m[_],O);break}return m})},h=(r=-1,_=-1,p=y.EXERCISE)=>{r<0||c(m=>{const E=m[p].length;_==-1?_=E-1:_==E&&(_=0);const O=m[p].splice(_,1,m[p][r]);return m[p].splice(r,1,...O),m})},i=(r,_,p)=>{const m=_[r];if(!m)return[];const E=_.filter(N=>N.region===m.region).map(N=>N.name),O=ve(F);let R=p;p==y.EXERCISE&&(R+=" > "+m.region);let g=O.querySelector(R);const A=Array.from(g.children).filter(N=>!E.includes(N.getAttribute("name")));return u(A,1,p==y.PLANK)},u=(r,_,p,m=!0)=>{r=r instanceof Array?r:Array.from(r),m===!1&&(r=r.filter(g=>parseInt(g.getAttribute("band_pos"))==0)),r.length>_&&(r=qe(r,_));let E;w.subscribe(g=>E=g)();let R=[];for(let g in r){const A=Boolean(parseInt(r[g].getAttribute("has_lr"))),N=r[g].getAttribute("name"),v=U();if(v.type=p?y.PLANK:y.EXERCISE,v.name=N,v.display_name=N+(A?" (Right)":""),v.region=r[g].parentElement.tagName,v.target=r[g].getAttribute("target"),v.has_lr=A,v.band_pos=parseInt(r[g].getAttribute("band_pos")),v.band_pos_text=E[r[g].getAttribute("band_pos")],A){const S=Object.assign(U(),v);S.display_name=N+" (Left)",R.push(S)}R.push(v)}return R},d=(r=-1,_=[],p=[])=>{const m=_[r],E=m.has_lr===!0?_.findIndex(O=>O.name==m.name&&O!==m):-1;E>-1&&(_.splice(E,1),r=_.indexOf(m)),p.length?_.splice(r,1,...p):_.splice(r,1)},w=x(F,r=>{if(!r)return{};const _={},p=r.querySelector("band_legends");return Array.from(p.children).forEach(m=>{_[m.getAttribute("id")]=m.getAttribute("title")}),_},{});return{subscribe:t,set:a,update:c,save:l,cloneMeta:n,alterExercise:f,swapExercise:h,getTotalTime:o,get preset(){return s},set preset(r){b(r)}}};var ae=Me();function Fe(s){let e,t;return{c(){e=new je,t=Y(),this.h()},l(a){e=ye(a),t=Y(),this.h()},h(){e.a=t},m(a,c){e.m(s[1],a,c),z(a,t,c)},p(a,c){c&2&&e.p(a[1])},d(a){a&&j(t),a&&e.d()}}}function Ve(s){let e,t,a,c,b;const l=s[6].default,o=le(l,s,s[5],null),n=o||Fe(s);return{c(){e=H(),t=C("div"),n&&n.c(),this.h()},l(f){e=K(f),t=X(f,"DIV",{class:!0});var h=L(t);n&&n.l(h),h.forEach(j),this.h()},h(){T(t,"class","tooltip svelte-jacfdc"),ie(t,"show",s[0])},m(f,h){z(f,e,h),z(f,t,h),n&&n.m(t,null),s[7](t),a=!0,c||(b=Ae(document.body,"mousemove",s[3]),c=!0)},p(f,[h]){o?o.p&&(!a||h&32)&&ce(o,l,f,f[5],a?fe(l,f[5],h,null):ue(f[5]),null):n&&n.p&&(!a||h&2)&&n.p(f,a?h:-1),h&1&&ie(t,"show",f[0])},i(f){a||(B(n,f),a=!0)},o(f){D(n,f),a=!1},d(f){f&&j(e),f&&j(t),n&&n.d(f),s[7](null),c=!1,b()}}}function Je(s,e,t){let{$$slots:a={},$$scope:c}=e;const b=u=>{h||(h={x:u.screenX,y:u.screenY},f.style.setProperty("transform",`translateX(${h.x-f.parentNode.offsetLeft}px)`),f.style.setProperty("transition",`transform ${o/10}ms`))};Ie(()=>{setTimeout(()=>t(0,n=!1),o)});let{body:l=null}=e,{duration:o=1500}=e,{show:n}=e,f,h;function i(u){me[u?"unshift":"push"](()=>{f=u,t(2,f)})}return s.$$set=u=>{"body"in u&&t(1,l=u.body),"duration"in u&&t(4,o=u.duration),"show"in u&&t(0,n=u.show),"$$scope"in u&&t(5,c=u.$$scope)},[n,l,f,b,o,c,a,i]}class Ye extends ${constructor(e){super();ee(this,e,Je,Ve,te,{body:1,duration:4,show:0})}}function ge(s){let e,t,a;function c(l){s[5](l)}let b={body:s[0]};return s[1]!==void 0&&(b.show=s[1]),e=new Ye({props:b}),me.push(()=>Xe(e,"show",c)),{c(){_e(e.$$.fragment)},l(l){be(e.$$.fragment,l)},m(l,o){he(e,l,o),a=!0},p(l,o){const n={};o&1&&(n.body=l[0]),!t&&o&2&&(t=!0,n.show=l[1],Re(()=>t=!1)),e.$set(n)},i(l){a||(B(e.$$.fragment,l),a=!0)},o(l){D(e.$$.fragment,l),a=!1},d(l){pe(e,l)}}}function Ge(s){let e,t,a,c;const b=[s[4]()];let l={};for(let n=0;n<b.length;n+=1)l=Oe(l,b[n]);e=new ze({props:l}),e.$on("click",s[3]);let o=s[1]&&ge(s);return{c(){_e(e.$$.fragment),t=H(),o&&o.c(),a=Y()},l(n){be(e.$$.fragment,n),t=K(n),o&&o.l(n),a=Y()},m(n,f){he(e,n,f),z(n,t,f),o&&o.m(n,f),z(n,a,f),c=!0},p(n,[f]){const h=f&16?we(b,[Pe(n[4]())]):{};e.$set(h),n[1]?o?(o.p(n,f),f&2&&B(o,1)):(o=ge(n),o.c(),B(o,1),o.m(a.parentNode,a)):o&&(Ne(),D(o,1,1,()=>{o=null}),Ce())},i(n){c||(B(e.$$.fragment,n),B(o),c=!0)},o(n){D(e.$$.fragment,n),D(o),c=!1},d(n){pe(e,n),n&&j(t),o&&o.d(n),n&&j(a)}}}function Qe(s,e,t){let a,c,b;se(s,ae,u=>t(6,a=u)),se(s,Le,u=>t(8,b=u));const l=Te.routine;se(s,l,u=>t(7,c=u));let o="",n=!1;const f=async()=>{if(!a[y.EXERCISE].length){const u=de.getItem("workout");u&&ae.set(u)}if(!a.meta.pathname&&a[y.EXERCISE].length&&ae.save(!0),a.meta.pathname){const u={title:"Sweat Workout",text:"Here's the link to your saved workout.",url:`${b.url.origin}${c.tabataLink}/?w=${a.meta.pathname}&`};"canShare"in navigator&&navigator.canShare(u)?await navigator.share(u):"clipboard"in navigator&&(await navigator.clipboard.writeText(u.url),n||(t(0,o="Link Copied!"),t(1,n=!0)))}},h=()=>({icon:`bi bi-${"canShare"in navigator&&navigator.canShare()?"share-fill":"link"}`,title:"Share"});function i(u){n=u,t(1,n)}return[o,n,l,f,h,i]}class rt extends ${constructor(e){super();ee(this,e,Qe,Ge,te,{})}}function Ee(s){let e;return{c(){e=C("i"),this.h()},l(t){e=X(t,"I",{class:!0}),L(e).forEach(j),this.h()},h(){T(e,"class","bi bi-check svelte-nz0c3b")},m(t,a){z(t,e,a)},d(t){t&&j(e)}}}function Se(s){let e,t,a,c,b;return{c(){e=C("span"),t=C("h6"),a=k("Band:"),c=C("h6"),b=k(s[5]),this.h()},l(l){e=X(l,"SPAN",{class:!0});var o=L(e);t=X(o,"H6",{class:!0});var n=L(t);a=q(n,"Band:"),n.forEach(j),c=X(o,"H6",{class:!0});var f=L(c);b=q(f,s[5]),f.forEach(j),o.forEach(j),this.h()},h(){T(t,"class","svelte-nz0c3b"),T(c,"class","svelte-nz0c3b"),T(e,"class","svelte-nz0c3b")},m(l,o){z(l,e,o),I(e,t),I(t,a),I(e,c),I(c,b)},p(l,o){o&32&&G(b,l[5])},d(l){l&&j(e)}}}function Ue(s){let e,t,a,c,b,l,o,n,f,h,i,u,d,w=Q(s[2].replace("_"," "))+"",r,_,p,m,E,O,R,g=s[1]&&Ee(),A=s[4]!==0&&Se(s);const N=s[7].default,v=le(N,s,s[6],null);return{c(){e=C("div"),t=C("span"),a=C("h6"),c=k("Exercise:"),b=H(),l=C("h4"),o=k(s[0]),n=H(),g&&g.c(),f=H(),h=C("span"),i=C("h6"),u=k("Region:"),d=C("h6"),r=k(w),_=k("\xA0("),p=k(s[3]),m=k(")"),E=H(),A&&A.c(),O=H(),v&&v.c(),this.h()},l(S){e=X(S,"DIV",{class:!0});var P=L(e);t=X(P,"SPAN",{class:!0});var V=L(t);a=X(V,"H6",{class:!0});var re=L(a);c=q(re,"Exercise:"),re.forEach(j),b=K(V),l=X(V,"H4",{class:!0});var J=L(l);o=q(J,s[0]),n=K(J),g&&g.l(J),J.forEach(j),V.forEach(j),f=K(P),h=X(P,"SPAN",{class:!0});var Z=L(h);i=X(Z,"H6",{class:!0});var oe=L(i);u=q(oe,"Region:"),oe.forEach(j),d=X(Z,"H6",{class:!0});var M=L(d);r=q(M,w),_=q(M,"\xA0("),p=q(M,s[3]),m=q(M,")"),M.forEach(j),Z.forEach(j),E=K(P),A&&A.l(P),O=K(P),v&&v.l(P),P.forEach(j),this.h()},h(){T(a,"class","svelte-nz0c3b"),T(l,"class","svelte-nz0c3b"),T(t,"class","svelte-nz0c3b"),T(i,"class","svelte-nz0c3b"),T(d,"class","svelte-nz0c3b"),T(h,"class","svelte-nz0c3b"),T(e,"class","svelte-nz0c3b")},m(S,P){z(S,e,P),I(e,t),I(t,a),I(a,c),I(t,b),I(t,l),I(l,o),I(l,n),g&&g.m(l,null),I(e,f),I(e,h),I(h,i),I(i,u),I(h,d),I(d,r),I(d,_),I(d,p),I(d,m),I(e,E),A&&A.m(e,null),I(e,O),v&&v.m(e,null),R=!0},p(S,[P]){(!R||P&1)&&G(o,S[0]),S[1]?g||(g=Ee(),g.c(),g.m(l,null)):g&&(g.d(1),g=null),(!R||P&4)&&w!==(w=Q(S[2].replace("_"," "))+"")&&G(r,w),(!R||P&8)&&G(p,S[3]),S[4]!==0?A?A.p(S,P):(A=Se(S),A.c(),A.m(e,O)):A&&(A.d(1),A=null),v&&v.p&&(!R||P&64)&&ce(v,N,S,S[6],R?fe(N,S[6],P,null):ue(S[6]),null)},i(S){R||(B(v,S),R=!0)},o(S){D(v,S),R=!1},d(S){S&&j(e),g&&g.d(),A&&A.d(),v&&v.d(S)}}}function Ze(s,e,t){let{$$slots:a={},$$scope:c}=e,{name:b,completed:l,region:o,target:n,band_pos:f,band_pos_text:h}=e;return s.$$set=i=>{"name"in i&&t(0,b=i.name),"completed"in i&&t(1,l=i.completed),"region"in i&&t(2,o=i.region),"target"in i&&t(3,n=i.target),"band_pos"in i&&t(4,f=i.band_pos),"band_pos_text"in i&&t(5,h=i.band_pos_text),"$$scope"in i&&t(6,c=i.$$scope)},[b,l,o,n,f,h,c,a]}class ot extends ${constructor(e){super();ee(this,e,Ze,Ue,te,{name:0,completed:1,region:2,target:3,band_pos:4,band_pos_text:5})}}export{ot as E,ne as P,tt as R,rt as S,F as W,nt as a,De as b,y as c,at as p,st as r,ae as w};
