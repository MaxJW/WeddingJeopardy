(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function k(){}const be=t=>t;function qe(t){return t()}function oe(){return Object.create(null)}function T(t){t.forEach(qe)}function te(t){return typeof t=="function"}function ve(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Fe(t){return Object.keys(t).length===0}const ke=typeof window<"u";let Ae=ke?()=>window.performance.now():()=>Date.now(),ne=ke?t=>requestAnimationFrame(t):k;const O=new Set;function We(t){O.forEach(e=>{e.c(t)||(O.delete(e),e.f())}),O.size!==0&&ne(We)}function Oe(t){let e;return O.size===0&&ne(We),{promise:new Promise(n=>{O.add(e={c:t,f:n})}),abort(){O.delete(e)}}}function v(t,e){t.appendChild(e)}function $e(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Se(t){const e=q("style");return Te($e(t),e),e.sheet}function Te(t,e){return v(t.head||t,e),e.sheet}function b(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function B(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function P(){return V(" ")}function D(){return V("")}function R(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function $(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ve(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.data!==e&&(t.data=e)}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function Re(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,s,e),o}const I=new Map;let K=0;function je(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Le(t,e){const n={stylesheet:Se(e),rules:{}};return I.set(t,n),n}function le(t,e,n,s,o,r,i,l=0){const a=16.666/s;let u=`{
`;for(let f=0;f<=1;f+=a){const g=e+(n-e)*r(f);u+=f*100+`%{${i(g,1-g)}}
`}const m=u+`100% {${i(n,1-n)}}
}`,p=`__svelte_${je(m)}_${l}`,d=$e(t),{stylesheet:c,rules:h}=I.get(d)||Le(d,t);h[p]||(h[p]=!0,c.insertRule(`@keyframes ${p} ${m}`,c.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${p} ${s}ms linear ${o}ms 1 both`,K+=1,p}function De(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),K-=o,K||Qe())}function Qe(){ne(()=>{K||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)}),I.clear())})}let se;function L(t){se=t}const A=[],re=[];let S=[];const ae=[],ze=Promise.resolve();let ee=!1;function Be(){ee||(ee=!0,ze.then(Ce))}function N(t){S.push(t)}const Y=new Set;let F=0;function Ce(){if(F!==0)return;const t=se;do{try{for(;F<A.length;){const e=A[F];F++,L(e),Ie(e.$$)}}catch(e){throw A.length=0,F=0,e}for(L(null),A.length=0,F=0;re.length;)re.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];Y.has(n)||(Y.add(n),n())}S.length=0}while(A.length);for(;ae.length;)ae.pop()();ee=!1,Y.clear(),L(t)}function Ie(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function Ke(t){const e=[],n=[];S.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),S=e}let j;function xe(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function Z(t,e,n){t.dispatchEvent(Re(`${e?"intro":"outro"}${n}`))}const z=new Set;let E;function x(){E={r:0,c:[],p:E}}function G(){E.r||T(E.c),E=E.p}function W(t,e){t&&t.i&&(z.delete(t),t.i(e))}function J(t,e,n,s){if(t&&t.o){if(z.has(t))return;z.add(t),E.c.push(()=>{z.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Ge={duration:0};function M(t,e,n,s){const o={direction:"both"};let r=e(t,n,o),i=s?0:1,l=null,a=null,u=null;function m(){u&&De(t,u)}function p(c,h){const y=c.b-i;return h*=Math.abs(y),{a:i,b:c.b,d:y,duration:h,start:c.start,end:c.start+h,group:c.group}}function d(c){const{delay:h=0,duration:y=300,easing:f=be,tick:g=k,css:_}=r||Ge,C={start:Ae()+h,b:c};c||(C.group=E,E.r+=1),l||a?a=C:(_&&(m(),u=le(t,i,c,y,h,f,_)),c&&g(0,1),l=p(C,y),N(()=>Z(t,c,"start")),Oe(Q=>{if(a&&Q>a.start&&(l=p(a,y),a=null,Z(t,l.b,"start"),_&&(m(),u=le(t,i,l.b,l.duration,0,f,r.css))),l){if(Q>=l.end)g(i=l.b,1-i),Z(t,l.b,"end"),a||(l.b?m():--l.group.r||T(l.group.c)),l=null;else if(Q>=l.start){const Me=Q-l.start;i=l.a+l.d*f(Me/l.duration),g(i,1-i)}}return!!(l||a)}))}return{run(c){te(r)?xe().then(()=>{r=r(o),d(c)}):d(c)},end(){m(),l=a=null}}}function He(t){t&&t.c()}function Ee(t,e,n,s){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),s||N(()=>{const i=t.$$.on_mount.map(qe).filter(te);t.$$.on_destroy?t.$$.on_destroy.push(...i):T(i),t.$$.on_mount=[]}),r.forEach(N)}function Je(t,e){const n=t.$$;n.fragment!==null&&(Ke(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(t,e){t.$$.dirty[0]===-1&&(A.push(t),Be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pe(t,e,n,s,o,r,i,l=[-1]){const a=se;L(t);const u=t.$$={fragment:null,ctx:[],props:r,update:k,not_equal:o,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:oe(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};i&&i(u.root);let m=!1;if(u.ctx=n?n(t,e.props||{},(p,d,...c)=>{const h=c.length?c[0]:d;return u.ctx&&o(u.ctx[p],u.ctx[p]=h)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](h),m&&Ue(t,p)),d}):[],u.update(),m=!0,T(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const p=Ve(e.target);u.fragment&&u.fragment.l(p),p.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&W(t.$$.fragment),Ee(t,e.target,e.anchor,e.customElement),Ce()}L(a)}class Ne{$destroy(){Je(this,1),this.$destroy=k}$on(e,n){if(!te(n))return k;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Xe(t){const e=t-1;return e*e*e+1}function H(t,{delay:e=0,duration:n=400,easing:s=be}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*o}`}}function U(t,{delay:e=0,duration:n=400,easing:s=Xe,start:o=0,opacity:r=0}={}){const i=getComputedStyle(t),l=+i.opacity,a=i.transform==="none"?"":i.transform,u=1-o,m=l*(1-r);return{delay:e,duration:n,easing:s,css:(p,d)=>`
			transform: ${a} scale(${1-u*d});
			opacity: ${l-m*d}
		`}}const Ye=[{categories:[{name:"Musicals",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Superheroes",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Weddings",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Firsts",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Photo Round",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]}]},{categories:[{name:"Category 1",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Category 2",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Category 3",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Category 4",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]},{name:"Category 5",questions:[{points:100,question:"What is the capital of France?",answer:"Paris",done:!1},{points:200,question:"What is the largest planet in our solar system?",answer:"Jupiter",done:!1},{points:300,question:"What is the smallest country in the world?",answer:"Vatican City",done:!1},{points:400,question:"What is the highest mountain in the world?",answer:"Mount Everest",done:!1},{points:500,question:"What is the capital of Japan?",answer:"Tokyo",done:!1}]}]}],Ze={rounds:Ye};function ue(t,e,n){const s=t.slice();return s[14]=e[n],s[16]=n,s}function fe(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function ce(t,e,n){const s=t.slice();return s[20]=e[n],s[22]=n,s}function he(t,e,n){const s=t.slice();return s[17]=e[n],s}function de(t){let e,n=t[17].name+"",s;return{c(){e=q("div"),s=V(n),$(e,"class","category svelte-1prff6c")},m(o,r){b(o,e,r),v(e,s)},p(o,r){r&2&&n!==(n=o[17].name+"")&&X(s,n)},d(o){o&&w(e)}}}function pe(t){let e,n=t[20].done?"\u2705":"\xA3"+t[20].points,s,o,r;function i(){return t[12](t[20])}return{c(){e=q("div"),s=V(n),$(e,"class","tile svelte-1prff6c"),ie(e,"done",t[20].done)},m(l,a){b(l,e,a),v(e,s),o||(r=R(e,"click",i),o=!0)},p(l,a){t=l,a&2&&n!==(n=t[20].done?"\u2705":"\xA3"+t[20].points)&&X(s,n),a&2&&ie(e,"done",t[20].done)},d(l){l&&w(e),o=!1,r()}}}function _e(t){let e,n=t[20].points===t[14]&&pe(t);return{c(){n&&n.c(),e=D()},m(s,o){n&&n.m(s,o),b(s,e,o)},p(s,o){s[20].points===s[14]?n?n.p(s,o):(n=pe(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function me(t){let e,n=t[17].questions,s=[];for(let o=0;o<n.length;o+=1)s[o]=_e(ce(t,n,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=D()},m(o,r){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(o,r);b(o,e,r)},p(o,r){if(r&290){n=o[17].questions;let i;for(i=0;i<n.length;i+=1){const l=ce(o,n,i);s[i]?s[i].p(l,r):(s[i]=_e(l),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(o){B(s,o),o&&w(e)}}}function ye(t){let e,n=t[1],s=[];for(let o=0;o<n.length;o+=1)s[o]=me(fe(t,n,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=D()},m(o,r){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(o,r);b(o,e,r)},p(o,r){if(r&290){n=o[1];let i;for(i=0;i<n.length;i+=1){const l=fe(o,n,i);s[i]?s[i].p(l,r):(s[i]=me(l),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(o){B(s,o),o&&w(e)}}}function ge(t){let e,n,s,o=t[2].question+"",r,i,l,a,u,m;const p=[tt,et],d=[];function c(h,y){return h[3]?0:1}return l=c(t),a=d[l]=p[l](t),{c(){e=q("div"),n=q("div"),s=q("h2"),r=V(o),i=P(),a.c(),$(n,"class","modal-content svelte-1prff6c"),$(e,"class","question-modal svelte-1prff6c")},m(h,y){b(h,e,y),v(e,n),v(n,s),v(s,r),v(n,i),d[l].m(n,null),m=!0},p(h,y){(!m||y&4)&&o!==(o=h[2].question+"")&&X(r,o);let f=l;l=c(h),l===f?d[l].p(h,y):(x(),J(d[f],1,1,()=>{d[f]=null}),G(),a=d[l],a?a.p(h,y):(a=d[l]=p[l](h),a.c()),W(a,1),a.m(n,null))},i(h){m||(W(a),N(()=>{!m||(u||(u=M(e,U,{},!0)),u.run(1))}),m=!0)},o(h){J(a),u||(u=M(e,U,{},!1)),u.run(0),m=!1},d(h){h&&w(e),d[l].d(),h&&u&&u.end()}}}function et(t){let e,n,s;return{c(){e=q("button"),e.textContent="Show Answer"},m(o,r){b(o,e,r),n||(s=R(e,"click",t[9]),n=!0)},p:k,i:k,o:k,d(o){o&&w(e),n=!1,s()}}}function tt(t){let e,n,s,o=t[2].answer+"",r,i,l,a,u,m,p;return{c(){e=q("h2"),e.textContent="---",n=P(),s=q("h2"),r=V(o),l=P(),a=q("button"),a.textContent="Close"},m(d,c){b(d,e,c),b(d,n,c),b(d,s,c),v(s,r),b(d,l,c),b(d,a,c),u=!0,m||(p=R(a,"click",t[10]),m=!0)},p(d,c){(!u||c&4)&&o!==(o=d[2].answer+"")&&X(r,o)},i(d){u||(N(()=>{!u||(i||(i=M(s,H,{},!0)),i.run(1))}),u=!0)},o(d){i||(i=M(s,H,{},!1)),i.run(0),u=!1},d(d){d&&w(e),d&&w(n),d&&w(s),d&&i&&i.end(),d&&w(l),d&&w(a),m=!1,p()}}}function we(t){let e,n,s,o,r,i;return{c(){e=q("div"),n=q("button"),n.textContent="Next Round",$(n,"class","svelte-1prff6c"),$(e,"class","next-round-button svelte-1prff6c")},m(l,a){b(l,e,a),v(e,n),o=!0,r||(i=R(n,"click",t[7]),r=!0)},p:k,i(l){o||(N(()=>{!o||(s||(s=M(e,U,{},!0)),s.run(1))}),o=!0)},o(l){s||(s=M(e,U,{},!1)),s.run(0),o=!1},d(l){l&&w(e),l&&s&&s.end(),r=!1,i()}}}function nt(t){let e,n,s,o,r,i,l,a,u,m=t[1],p=[];for(let f=0;f<m.length;f+=1)p[f]=de(he(t,m,f));let d=t[5],c=[];for(let f=0;f<d.length;f+=1)c[f]=ye(ue(t,d,f));let h=t[2]!==null&&ge(t),y=t[0]<t[6].length-1&&t[4]&&we(t);return{c(){e=q("div");for(let f=0;f<p.length;f+=1)p[f].c();n=P();for(let f=0;f<c.length;f+=1)c[f].c();s=P(),h&&h.c(),r=P(),y&&y.c(),i=D(),$(e,"class","jeopardy-board svelte-1prff6c")},m(f,g){b(f,e,g);for(let _=0;_<p.length;_+=1)p[_]&&p[_].m(e,null);v(e,n);for(let _=0;_<c.length;_+=1)c[_]&&c[_].m(e,null);v(e,s),h&&h.m(e,null),b(f,r,g),y&&y.m(f,g),b(f,i,g),l=!0,a||(u=R(window,"keydown",t[11]),a=!0)},p(f,[g]){if(g&2){m=f[1];let _;for(_=0;_<m.length;_+=1){const C=he(f,m,_);p[_]?p[_].p(C,g):(p[_]=de(C),p[_].c(),p[_].m(e,n))}for(;_<p.length;_+=1)p[_].d(1);p.length=m.length}if(g&290){d=f[5];let _;for(_=0;_<d.length;_+=1){const C=ue(f,d,_);c[_]?c[_].p(C,g):(c[_]=ye(C),c[_].c(),c[_].m(e,s))}for(;_<c.length;_+=1)c[_].d(1);c.length=d.length}f[2]!==null?h?(h.p(f,g),g&4&&W(h,1)):(h=ge(f),h.c(),W(h,1),h.m(e,null)):h&&(x(),J(h,1,1,()=>{h=null}),G()),f[0]<f[6].length-1&&f[4]?y?(y.p(f,g),g&17&&W(y,1)):(y=we(f),y.c(),W(y,1),y.m(i.parentNode,i)):y&&(x(),J(y,1,1,()=>{y=null}),G())},i(f){l||(W(h),N(()=>{!l||(o||(o=M(e,H,{},!0)),o.run(1))}),W(y),l=!0)},o(f){J(h),o||(o=M(e,H,{},!1)),o.run(0),J(y),l=!1},d(f){f&&w(e),B(p,f),B(c,f),h&&h.d(),f&&o&&o.end(),f&&w(r),y&&y.d(f),f&&w(i),a=!1,u()}}}function st(t,e,n){const s=[100,200,300,400,500];let o=0;const r=Ze.rounds;let i=r[o].categories,l=null,a=!1,u=!1;function m(){n(0,o++,o),n(1,i=r[o].categories),n(2,l=null),n(3,a=!1),n(4,u=!1)}function p(g){n(2,l=g)}function d(){n(3,a=!0),n(2,l.done=!0,l),n(1,i)}function c(){n(2,l=null),n(3,a=!1),y()}function h(g){!l||(g.code==="Escape"?c():g.code==="Space"&&(a?c():d()))}function y(){const g=[].concat(...i.map(_=>_.questions));n(4,u=g.every(_=>_.done))}return[o,i,l,a,u,s,r,m,p,d,c,h,g=>p(g)]}class ot extends Ne{constructor(e){super(),Pe(this,e,st,nt,ve,{})}}function it(t){let e,n,s,o,r,i,l,a;return{c(){e=q("div"),n=q("h1"),n.textContent="Welcome to",s=P(),o=q("h1"),o.textContent="Wedding Jeopardy",r=P(),i=q("button"),i.textContent="Start",$(n,"class","welcome-text svelte-e6ybte"),$(o,"class","title-text svelte-e6ybte"),$(e,"class","center svelte-e6ybte")},m(u,m){b(u,e,m),v(e,n),v(e,s),v(e,o),v(e,r),v(e,i),l||(a=R(i,"click",t[1]),l=!0)},p:k,i:k,o:k,d(u){u&&w(e),l=!1,a()}}}function lt(t){let e,n;return e=new ot({}),{c(){He(e.$$.fragment)},m(s,o){Ee(e,s,o),n=!0},p:k,i(s){n||(W(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){Je(e,s)}}}function rt(t){let e,n,s,o;const r=[lt,it],i=[];function l(a,u){return a[0]?0:1}return e=l(t),n=i[e]=r[e](t),{c(){n.c(),s=D()},m(a,u){i[e].m(a,u),b(a,s,u),o=!0},p(a,[u]){let m=e;e=l(a),e===m?i[e].p(a,u):(x(),J(i[m],1,1,()=>{i[m]=null}),G(),n=i[e],n?n.p(a,u):(n=i[e]=r[e](a),n.c()),W(n,1),n.m(s.parentNode,s))},i(a){o||(W(n),o=!0)},o(a){J(n),o=!1},d(a){i[e].d(a),a&&w(s)}}}function at(t,e,n){let s=!1;return[s,()=>{n(0,s=!0)}]}class ut extends Ne{constructor(e){super(),Pe(this,e,at,rt,ve,{})}}new ut({target:document.getElementById("app")});
