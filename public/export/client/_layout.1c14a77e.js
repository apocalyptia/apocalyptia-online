import{S as s,i as t,s as a,e,t as n,h as l,c as r,a as o,j as c,d as i,k as u,b as m,f,l as h,D as p,n as v,E as $,A as d,R as b,o as T,C as j,T as g,p as k,r as y,v as E,U as S,y as O,w as H,z as U}from"./client.04a4a16d.js";import{c as x}from"./characterStore.e04b972f.js";import{S as B}from"./Skills.35c4252b.js";import"./Specialty.adf26afb.js";import"./ConstitutionSkills.56e093ee.js";import"./RandomRoll.f18d347c.js";import{T as D}from"./Traits.2656d3ca.js";function N(s){let t,a,d,b,T,j,g,k,y,E;return{c(){t=e("div"),a=e("button"),d=n("◂"),b=l(),T=e("button"),j=n("Home"),g=l(),k=e("button"),this.h()},l(s){t=r(s,"DIV",{class:!0});var e=o(t);a=r(e,"BUTTON",{class:!0});var n=o(a);d=c(n,"◂"),n.forEach(i),b=u(e),T=r(e,"BUTTON",{class:!0});var l=o(T);j=c(l,"Home"),l.forEach(i),g=u(e),k=r(e,"BUTTON",{class:!0}),o(k).forEach(i),e.forEach(i),this.h()},h(){m(a,"class","link-btn nav-button svelte-lvfy6h"),m(T,"class","link-btn nav-button home-button svelte-lvfy6h"),m(k,"class","link-btn nav-button svelte-lvfy6h"),m(t,"class","nav-bar svelte-lvfy6h")},m(e,n){f(e,t,n),h(t,a),h(a,d),h(t,b),h(t,T),h(T,j),h(t,g),h(t,k),k.innerHTML=s[0],y||(E=[p(a,"click",s[1]),p(T,"click",s[2]),p(k,"click",s[3])],y=!0)},p(s,[t]){1&t&&(k.innerHTML=s[0])},i:v,o:v,d(s){s&&i(t),y=!1,$(E)}}}function R(s,t,a){let e,n;d(s,x,(s=>a(6,e=s)));const l=()=>{n=!0,(1==r&&Object.values(e.desc).some((s=>""==s.value))||2==r&&D.remaining(e)>0||3==r&&B.remaining(e)>0||6==r&&Object.values(e.gear).some((s=>0==s.inventory.length)))&&(n=!1),a(0,o=n?"&rtrif;":"&#10006;")};let r,o;return b((s=>l())),T((s=>l())),s.$$.update=()=>{64&s.$$.dirty&&(r=e.meta.status.step)},a(0,o="X"),[o,()=>{j(x,e.meta.status.step-=1,e),x.set(e)},()=>{j(x,e.meta.status.step=1,e),x.set(e)},()=>{l(),n&&(j(x,e.meta.status.step+=1,e),x.set(e))}]}class w extends s{constructor(s){super(),t(this,s,R,N,a,{})}}function C(s){let t,a,n,c;const h=s[1].default,p=g(h,s,s[0],null);return n=new w({}),{c(){t=e("div"),p&&p.c(),a=l(),k(n.$$.fragment),this.h()},l(s){t=r(s,"DIV",{class:!0});var e=o(t);p&&p.l(e),e.forEach(i),a=u(s),y(n.$$.fragment,s),this.h()},h(){m(t,"class","creator-page svelte-s9i01e")},m(s,e){f(s,t,e),p&&p.m(t,null),f(s,a,e),E(n,s,e),c=!0},p(s,[t]){p&&p.p&&1&t&&S(p,h,s,s[0],t,null,null)},i(s){c||(O(p,s),O(n.$$.fragment,s),c=!0)},o(s){H(p,s),H(n.$$.fragment,s),c=!1},d(s){s&&i(t),p&&p.d(s),s&&i(a),U(n,s)}}}function I(s,t,a){let{$$slots:e={},$$scope:n}=t;return s.$$set=s=>{"$$scope"in s&&a(0,n=s.$$scope)},[n,e]}export default class extends s{constructor(s){super(),t(this,s,I,C,a,{})}}
