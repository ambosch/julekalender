var le=Object.defineProperty;var oe=(t,e,n)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var N=(t,e,n)=>(oe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function C(){}function ie(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function F(){return Object.create(null)}function H(t){t.forEach(X)}function Y(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let I;function fe(t,e){return t===e?!0:(I||(I=document.createElement("a")),I.href=e,t===I.href)}function ce(t){return Object.keys(t).length===0}function Z(t,e,n,r){if(t){const s=ee(t,e,n,r);return t[0](s)}}function ee(t,e,n,r){return t[1]&&r?ie(n.ctx.slice(),t[1](r(e))):n.ctx}function te(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],o=Math.max(e.dirty.length,s.length);for(let i=0;i<o;i+=1)l[i]=e.dirty[i]|s[i];return l}return e.dirty|s}return e.dirty}function ne(t,e,n,r,s,l){if(s){const o=ee(e,n,r,l);t.p(o,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function ae(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function b(){return L(" ")}function de(){return L("")}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function ge(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}class pe{constructor(e=!1){N(this,"is_svg",!1);N(this,"e");N(this,"n");N(this,"t");N(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=ae(n.nodeName):this.e=_(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(g)}}let K;function M(t){K=t}const S=[],U=[];let A=[];const V=[],$e=Promise.resolve();let R=!1;function _e(){R||(R=!0,$e.then(se))}function D(t){A.push(t)}const G=new Set;let E=0;function se(){if(E!==0)return;const t=K;do{try{for(;E<S.length;){const e=S[E];E++,M(e),ye(e.$$)}}catch(e){throw S.length=0,E=0,e}for(M(null),S.length=0,E=0;U.length;)U.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];G.has(n)||(G.add(n),n())}A.length=0}while(S.length);for(;V.length;)V.pop()();R=!1,G.clear(),M(t)}function ye(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function xe(t){const e=[],n=[];A.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),A=e}const B=new Set;let j;function be(){j={r:0,c:[],p:j}}function we(){j.r||H(j.c),j=j.p}function h(t,e){t&&t.i&&(B.delete(t),t.i(e))}function y(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),j.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function J(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function k(t){t&&t.c()}function w(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),D(()=>{const l=t.$$.on_mount.map(X).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...l):H(l),t.$$.on_mount=[]}),s.forEach(D)}function v(t,e){const n=t.$$;n.fragment!==null&&(xe(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(t,e){t.$$.dirty[0]===-1&&(S.push(t),_e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(t,e,n,r,s,l,o=null,i=[-1]){const m=K;M(t);const f=t.$$={fragment:null,ctx:[],props:l,update:C,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:F(),dirty:i,skip_bound:!1,root:e.target||m.$$.root};o&&o(f.root);let u=!1;if(f.ctx=n?n(t,e.props||{},(c,a,...x)=>{const z=x.length?x[0]:a;return f.ctx&&s(f.ctx[c],f.ctx[c]=z)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](z),u&&ve(t,c)),a}):[],f.update(),u=!0,H(f.before_update),f.fragment=r?r(f.ctx):!1,e.target){if(e.hydrate){const c=me(e.target);f.fragment&&f.fragment.l(c),c.forEach(g)}else f.fragment&&f.fragment.c();e.intro&&h(t.$$.fragment),w(t,e.target,e.anchor),se()}M(m)}class P{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){v(this,1),this.$destroy=C}$on(e,n){if(!Y(n))return C;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);class ke extends P{constructor(e){super(),O(this,e,null,null,T,{})}}function je(t){let e,n,r;const s=t[2].default,l=Z(s,t,t[1],null);return{c(){e=_("p"),l&&l.c(),d(e,"class",n="text-gray-600 text-lg lg:text-xl my-6 "+t[0])},m(o,i){$(o,e,i),l&&l.m(e,null),r=!0},p(o,[i]){l&&l.p&&(!r||i&2)&&ne(l,s,o,o[1],r?te(s,o[1],i,null):re(o[1]),null),(!r||i&1&&n!==(n="text-gray-600 text-lg lg:text-xl my-6 "+o[0]))&&d(e,"class",n)},i(o){r||(h(l,o),r=!0)},o(o){y(l,o),r=!1},d(o){o&&g(e),l&&l.d(o)}}}function Ee(t,e,n){let{$$slots:r={},$$scope:s}=e,{className:l=""}=e;return t.$$set=o=>{"className"in o&&n(0,l=o.className),"$$scope"in o&&n(1,s=o.$$scope)},[l,s,r]}class q extends P{constructor(e){super(),O(this,e,Ee,je,T,{className:0})}}function Se(t){let e;return{c(){e=L(`Hver dag fra 1. desember til og med 24. desember kommer det ut en ny sang i\r
    julekalenderen. Alle låtene henger sammen med et overordnet tema, klarer du\r
    å gjette hva det er? Som før lover jeg at det ikke kommer noen julesanger i\r
    denne kalenderen. Nytt for årets kalender er at det ikke bare kan komme\r
    ukjente sanger. Send meg gjett på Messenger, LinkedIn, SMS, brevdue eller\r
    andre kanaler du vet at jeg sjekker (ikke snap altså 🤶). Kanskje er\r
    det premie til vinneren. Gjettet må komme frem innen 24. desember for å\r
    telles med!`)},m(n,r){$(n,e,r)},d(n){n&&g(e)}}}function Ae(t){let e;return{c(){e=L("Enjoy, hilsen fra Anne")},m(n,r){$(n,e,r)},d(n){n&&g(e)}}}function Le(t){let e,n,r,s,l,o,i,m,f;return s=new q({props:{className:"text-justify",$$slots:{default:[Se]},$$scope:{ctx:t}}}),o=new q({props:{$$slots:{default:[Ae]},$$scope:{ctx:t}}}),{c(){e=_("div"),n=_("h1"),n.textContent="Anne sin julekalender 2023",r=b(),k(s.$$.fragment),l=b(),k(o.$$.fragment),i=b(),m=_("a"),m.innerHTML='<img class="w-6" alt="Go to GitHub repo" src="github-mark.svg"/>',d(n,"class","text-4xl md:text-5xl lg:text-7xl text-rose-400 font-extrabold font-mono mb-10 mt-10 tracking-tight leading-none"),d(m,"class","w-full flex justify-center"),d(m,"href","https://github.com/ambosch/julekalender"),d(m,"target","_blank"),d(m,"title","Take me to the source code!"),d(e,"class","lg:w-2/3 self-center")},m(u,c){$(u,e,c),p(e,n),p(e,r),w(s,e,null),p(e,l),w(o,e,null),p(e,i),p(e,m),f=!0},p(u,[c]){const a={};c&1&&(a.$$scope={dirty:c,ctx:u}),s.$set(a);const x={};c&1&&(x.$$scope={dirty:c,ctx:u}),o.$set(x)},i(u){f||(h(s.$$.fragment,u),h(o.$$.fragment,u),f=!0)},o(u){y(s.$$.fragment,u),y(o.$$.fragment,u),f=!1},d(u){u&&g(e),v(s),v(o)}}}class Te extends P{constructor(e){super(),O(this,e,null,Le,T,{})}}const Oe={"-1":"Her kommer det noe snart &#127769;"},Pe={descriptions:Oe};function Me(t){let e,n;return{c(){e=L(t[0]),n=L(". desember")},m(r,s){$(r,e,s),$(r,n,s)},p(r,s){s&1&&he(e,r[0])},d(r){r&&(g(e),g(n))}}}function Ce(t){let e;const n=t[1].default,r=Z(n,t,t[2],null);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),e=!0},p(s,l){r&&r.p&&(!e||l&4)&&ne(r,n,s,s[2],e?te(n,s[2],l,null):re(s[2]),null)},i(s){e||(h(r,s),e=!0)},o(s){y(r,s),e=!1},d(s){r&&r.d(s)}}}function He(t){let e,n,r,s,l;return n=new q({props:{className:"font-bold text-left pl-5",$$slots:{default:[Me]},$$scope:{ctx:t}}}),s=new q({props:{className:"text-left pl-5 pb-5 pr-5",$$slots:{default:[Ce]},$$scope:{ctx:t}}}),{c(){e=_("div"),k(n.$$.fragment),r=b(),k(s.$$.fragment),d(e,"class","rounded-xl bg-rose-100 mx-4 max-h-80 overflow-y-hidden hover:overflow-y-auto")},m(o,i){$(o,e,i),w(n,e,null),p(e,r),w(s,e,null),l=!0},p(o,[i]){const m={};i&5&&(m.$$scope={dirty:i,ctx:o}),n.$set(m);const f={};i&4&&(f.$$scope={dirty:i,ctx:o}),s.$set(f)},i(o){l||(h(n.$$.fragment,o),h(s.$$.fragment,o),l=!0)},o(o){y(n.$$.fragment,o),y(s.$$.fragment,o),l=!1},d(o){o&&g(e),v(n),v(s)}}}function Ie(t,e,n){let{$$slots:r={},$$scope:s}=e,{day_nr:l}=e;return t.$$set=o=>{"day_nr"in o&&n(0,l=o.day_nr),"$$scope"in o&&n(2,s=o.$$scope)},[l,r,s]}class Be extends P{constructor(e){super(),O(this,e,Ie,He,T,{day_nr:0})}}function Q(t,e,n){const r=t.slice();return r[2]=e[n][0],r[3]=e[n][1],r}function qe(t){let e,n=t[3]+"",r;return{c(){e=new pe(!1),r=de(),e.a=r},m(s,l){e.m(n,s,l),$(s,r,l)},p:C,d(s){s&&(g(r),e.d())}}}function W(t){let e,n,r,s;return n=new Be({props:{day_nr:t[2],$$slots:{default:[qe]},$$scope:{ctx:t}}}),{c(){e=_("div"),k(n.$$.fragment),r=b(),d(e,"class","")},m(l,o){$(l,e,o),w(n,e,null),p(e,r),s=!0},p(l,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:l}),n.$set(i)},i(l){s||(h(n.$$.fragment,l),s=!0)},o(l){y(n.$$.fragment,l),s=!1},d(l){l&&g(e),v(n)}}}function Ge(t){let e,n,r,s,l,o=J(Object.entries(t[1])),i=[];for(let f=0;f<o.length;f+=1)i[f]=W(Q(t,o,f));const m=f=>y(i[f],1,1,()=>{i[f]=null});return{c(){e=_("div"),n=_("h2"),n.textContent="Litt snacks om de valgte låtene",r=b();for(let f=0;f<i.length;f+=1)i[f].c();d(n,"class","text-gray-900 pt-6 font-mono font-extrabold text-3xl"),d(e,"class",s=t[0]+" bg-rose-400 rounded-2xl flex flex-col gap-y-6 pb-6 overflow-y-auto sm:[overflow-anchor:top] h-fit max-h-screen")},m(f,u){$(f,e,u),p(e,n),p(e,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);l=!0},p(f,[u]){if(u&2){o=J(Object.entries(f[1]));let c;for(c=0;c<o.length;c+=1){const a=Q(f,o,c);i[c]?(i[c].p(a,u),h(i[c],1)):(i[c]=W(a),i[c].c(),h(i[c],1),i[c].m(e,null))}for(be(),c=o.length;c<i.length;c+=1)m(c);we()}(!l||u&1&&s!==(s=f[0]+" bg-rose-400 rounded-2xl flex flex-col gap-y-6 pb-6 overflow-y-auto sm:[overflow-anchor:top] h-fit max-h-screen"))&&d(e,"class",s)},i(f){if(!l){for(let u=0;u<o.length;u+=1)h(i[u]);l=!0}},o(f){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)y(i[u]);l=!1},d(f){f&&g(e),ue(i,f)}}}function Re(t,e,n){const r=Pe.descriptions;let{className:s}=e;return t.$$set=l=>{"className"in l&&n(0,s=l.className)},[s,r]}class De extends P{constructor(e){super(),O(this,e,Re,Ge,T,{className:0})}}function Ke(t){let e,n,r,s,l,o,i,m,f,u,c;return e=new ke({}),s=new Te({}),u=new De({props:{className:"min-h-[384px] lg:flex-1"}}),{c(){k(e.$$.fragment),n=b(),r=_("main"),k(s.$$.fragment),l=b(),o=_("div"),i=_("iframe"),f=b(),k(u.$$.fragment),d(i,"class","min-h-[384px] lg:flex-1"),d(i,"width","100%"),d(i,"height","100%"),d(i,"title","spotify"),ge(i,"border-radius","12px"),fe(i.src,m="https://open.spotify.com/embed/playlist/52jE7sLRoc71fLt1pNbRuO?utm_source=generator")||d(i,"src",m),d(i,"frameborder","0"),d(i,"allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"),d(i,"loading","lazy"),d(o,"class","flex gap-y-4 lg:gap-y-0 lg:gap-x-4 flex-col lg:flex-row lg:h-screen"),d(r,"class","container flex flex-col gap-y-8")},m(a,x){w(e,a,x),$(a,n,x),$(a,r,x),w(s,r,null),p(r,l),p(r,o),p(o,i),p(o,f),w(u,o,null),c=!0},p:C,i(a){c||(h(e.$$.fragment,a),h(s.$$.fragment,a),h(u.$$.fragment,a),c=!0)},o(a){y(e.$$.fragment,a),y(s.$$.fragment,a),y(u.$$.fragment,a),c=!1},d(a){a&&(g(n),g(r)),v(e,a),v(s),v(u)}}}class ze extends P{constructor(e){super(),O(this,e,null,Ke,T,{})}}new ze({target:document.getElementById("app")});
