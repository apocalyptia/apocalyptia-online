import{S as t,i as l,s,e,t as a,h as i,c as n,a as r,j as c,k as o,d as h,b as f,J as u,f as m,l as v,K as d,D as p,G as b,n as g,H as y,E,A,N as $,C as k,B as L,w as M,x as D,y as I,L as V,M as x,p as P,r as N,v as S,z as T,Q as j,q as w,R as C}from"./client.04a4a16d.js";import{c as _}from"./characterStore.e04b972f.js";import"./SWBodyguard.54177d3a.js";import"./AppendToGUUID.176d1458.js";import"./Skills.35c4252b.js";import"./Specialty.adf26afb.js";import"./ConstitutionSkills.56e093ee.js";import"./RandomRoll.f18d347c.js";import"./Traits.2656d3ca.js";import{A as O}from"./Abilities.5f272c11.js";function R(t,l,s){const e=t.slice();return e[7]=l[s],e[9]=s,e}function B(t,l,s){const e=t.slice();return e[4]=l[s],e[5]=l,e[6]=s,e}function X(t){let l,s,e,i=t[4].opts[0].name+"";return{c(){l=a(" ("),s=a(i),e=a(")")},l(t){l=c(t," ("),s=c(t,i),e=c(t,")")},m(t,a){m(t,l,a),m(t,s,a),m(t,e,a)},p(t,l){2&l&&i!==(i=t[4].opts[0].name+"")&&b(s,i)},d(t){t&&h(l),t&&h(s),t&&h(e)}}}function z(t){let l,s,i;return{c(){l=e("option"),s=a(t[9]),this.h()},l(e){l=n(e,"OPTION",{value:!0});var a=r(l);s=c(a,t[9]),a.forEach(h),this.h()},h(){l.__value=i=t[9],l.value=l.__value},m(t,e){m(t,l,e),v(l,s)},p:g,d(t){t&&h(l)}}}function U(t){let l,s,g,A,$,k,L,M,D,I,V,x,P,N,S,T,j=t[4].name+"",w=t[4].xp+"",C=t[4].max+"",_=t[4].opts[0]&&X(t),O=Array(t[4].max+1),B=[];for(let l=0;l<O.length;l+=1)B[l]=z(R(t,O,l));function U(){t[2].call(P,t[5],t[6])}return{c(){l=e("div"),s=e("span"),g=a(j),A=i(),_&&_.c(),$=i(),k=e("span"),L=a(w),M=i(),D=e("span"),I=a(C),V=i(),x=e("span"),P=e("select");for(let t=0;t<B.length;t+=1)B[t].c();N=i(),this.h()},l(t){l=n(t,"DIV",{class:!0});var e=r(l);s=n(e,"SPAN",{class:!0});var a=r(s);g=c(a,j),A=o(a),_&&_.l(a),a.forEach(h),$=o(e),k=n(e,"SPAN",{class:!0});var i=r(k);L=c(i,w),i.forEach(h),M=o(e),D=n(e,"SPAN",{class:!0});var f=r(D);I=c(f,C),f.forEach(h),V=o(e),x=n(e,"SPAN",{class:!0});var u=r(x);P=n(u,"SELECT",{class:!0});var m=r(P);for(let t=0;t<B.length;t+=1)B[t].l(m);m.forEach(h),u.forEach(h),N=o(e),e.forEach(h),this.h()},h(){f(s,"class","l-col svelte-35kn9a"),f(k,"class","s-col svelte-35kn9a"),f(D,"class","s-col svelte-35kn9a"),f(P,"class","taken-number"),void 0===t[4].taken&&u(U),f(x,"class","s-col svelte-35kn9a"),f(l,"class","current-ability-row svelte-35kn9a")},m(e,a){m(e,l,a),v(l,s),v(s,g),v(s,A),_&&_.m(s,null),v(l,$),v(l,k),v(k,L),v(l,M),v(l,D),v(D,I),v(l,V),v(l,x),v(x,P);for(let t=0;t<B.length;t+=1)B[t].m(P,null);d(P,t[4].taken),v(l,N),S||(T=[p(P,"change",U),p(P,"blur",t[3])],S=!0)},p(l,e){if(t=l,2&e&&j!==(j=t[4].name+"")&&b(g,j),t[4].opts[0]?_?_.p(t,e):(_=X(t),_.c(),_.m(s,null)):_&&(_.d(1),_=null),2&e&&w!==(w=t[4].xp+"")&&b(L,w),2&e&&C!==(C=t[4].max+"")&&b(I,C),2&e){let l;for(O=Array(t[4].max+1),l=0;l<O.length;l+=1){const s=R(t,O,l);B[l]?B[l].p(s,e):(B[l]=z(s),B[l].c(),B[l].m(P,null))}for(;l<B.length;l+=1)B[l].d(1);B.length=O.length}2&e&&d(P,t[4].taken)},d(t){t&&h(l),_&&_.d(),y(B,t),S=!1,E(T)}}}function q(t){let l,s,u,d,p,b,E,A,$,k,L,M,D,I,V,x,P,N,S,T=t[1].abilities,j=[];for(let l=0;l<T.length;l+=1)j[l]=U(B(t,T,l));return{c(){l=e("div"),s=e("div"),u=a("Current Abilities"),d=i(),p=e("div"),b=e("div"),E=e("span"),A=a("Name"),$=i(),k=e("span"),L=a("XP"),M=i(),D=e("span"),I=a("Max"),V=i(),x=e("span"),P=a("Taken"),N=i(),S=e("div");for(let t=0;t<j.length;t+=1)j[t].c();this.h()},l(t){l=n(t,"DIV",{class:!0});var e=r(l);s=n(e,"DIV",{class:!0});var a=r(s);u=c(a,"Current Abilities"),a.forEach(h),d=o(e),p=n(e,"DIV",{class:!0});var i=r(p);b=n(i,"DIV",{class:!0});var f=r(b);E=n(f,"SPAN",{class:!0});var m=r(E);A=c(m,"Name"),m.forEach(h),$=o(f),k=n(f,"SPAN",{class:!0});var v=r(k);L=c(v,"XP"),v.forEach(h),M=o(f),D=n(f,"SPAN",{class:!0});var g=r(D);I=c(g,"Max"),g.forEach(h),V=o(f),x=n(f,"SPAN",{class:!0});var y=r(x);P=c(y,"Taken"),y.forEach(h),f.forEach(h),N=o(i),S=n(i,"DIV",{class:!0});var T=r(S);for(let t=0;t<j.length;t+=1)j[t].l(T);T.forEach(h),i.forEach(h),e.forEach(h),this.h()},h(){f(s,"class","current-abilities-title svelte-35kn9a"),f(E,"class","l-col svelte-35kn9a"),f(k,"class","s-col svelte-35kn9a"),f(D,"class","s-col svelte-35kn9a"),f(x,"class","s-col svelte-35kn9a"),f(b,"class","current-abilities-header svelte-35kn9a"),f(S,"class","current-abilities-list"),f(p,"class","current-abilities-section"),f(l,"class","current-abilities svelte-35kn9a")},m(t,e){m(t,l,e),v(l,s),v(s,u),v(l,d),v(l,p),v(p,b),v(b,E),v(E,A),v(b,$),v(b,k),v(k,L),v(b,M),v(b,D),v(D,I),v(b,V),v(b,x),v(x,P),v(p,N),v(p,S);for(let t=0;t<j.length;t+=1)j[t].m(S,null)},p(t,[l]){if(3&l){let s;for(T=t[1].abilities,s=0;s<T.length;s+=1){const e=B(t,T,s);j[s]?j[s].p(e,l):(j[s]=U(e),j[s].c(),j[s].m(S,null))}for(;s<j.length;s+=1)j[s].d(1);j.length=T.length}},i:g,o:g,d(t){t&&h(l),y(j,t)}}}function H(t,l,s){let e;A(t,_,(t=>s(1,e=t)));let{MasterAbilityList:a}=l;return t.$$set=t=>{"MasterAbilityList"in t&&s(0,a=t.MasterAbilityList)},[a,e,function(t,l){t[l].taken=$(this),_.set(e)},()=>k(_,e.abilities=a.filter((t=>t.taken)),e)]}class G extends t{constructor(t){super(),l(this,t,H,q,s,{MasterAbilityList:0})}}function J(t,l,s){const e=t.slice();return e[5]=l[s],e[7]=s,e}function K(t){let l,s,i;return{c(){l=e("option"),s=a(t[7]),this.h()},l(e){l=n(e,"OPTION",{value:!0});var a=r(l);s=c(a,t[7]),a.forEach(h),this.h()},h(){l.__value=i=t[7],l.value=l.__value},m(t,e){m(t,l,e),v(l,s)},p:g,d(t){t&&h(l)}}}function Q(t){let l,s,A,$,k,L,M,D,I,V,x,P=t[0].name+"",N=Array(t[0].max+1),S=[];for(let l=0;l<N.length;l+=1)S[l]=K(J(t,N,l));return{c(){l=e("div"),s=e("div"),A=e("div"),$=a(P),k=i(),L=e("div"),M=a("Taken:\n\t\t\t"),D=e("select");for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){l=n(t,"DIV",{class:!0});var e=r(l);s=n(e,"DIV",{class:!0});var a=r(s);A=n(a,"DIV",{class:!0});var i=r(A);$=c(i,P),i.forEach(h),k=o(a),L=n(a,"DIV",{class:!0});var f=r(L);M=c(f,"Taken:\n\t\t\t"),D=n(f,"SELECT",{name:!0,class:!0});var u=r(D);for(let t=0;t<S.length;t+=1)S[t].l(u);u.forEach(h),f.forEach(h),a.forEach(h),e.forEach(h),this.h()},h(){f(A,"class","ability-name-label"),f(D,"name",I=t[0].name),f(D,"class","svelte-1sfjlhz"),void 0===t[0].taken&&u((()=>t[3].call(D))),f(L,"class","taken-label"),f(s,"class","ability-section svelte-1sfjlhz"),f(l,"class","options-section svelte-1sfjlhz")},m(e,a){m(e,l,a),v(l,s),v(s,A),v(A,$),v(s,k),v(s,L),v(L,M),v(L,D);for(let t=0;t<S.length;t+=1)S[t].m(D,null);d(D,t[0].taken),V||(x=[p(D,"change",t[3]),p(D,"blur",t[4])],V=!0)},p(t,[l]){if(1&l&&P!==(P=t[0].name+"")&&b($,P),1&l){let s;for(N=Array(t[0].max+1),s=0;s<N.length;s+=1){const e=J(t,N,s);S[s]?S[s].p(e,l):(S[s]=K(e),S[s].c(),S[s].m(D,null))}for(;s<S.length;s+=1)S[s].d(1);S.length=N.length}1&l&&I!==(I=t[0].name)&&f(D,"name",I),1&l&&d(D,t[0].taken)},i:g,o:g,d(t){t&&h(l),y(S,t),V=!1,E(x)}}}function W(t,l,s){let e;A(t,_,(t=>s(2,e=t)));let{ability:a}=l,{MasterAbilityList:i}=l;a=i.filter((t=>t.name==a.name))[0];return t.$$set=t=>{"ability"in t&&s(0,a=t.ability),"MasterAbilityList"in t&&s(1,i=t.MasterAbilityList)},[a,i,e,function(){a.taken=$(this),s(0,a)},()=>k(_,e.abilities=i.filter((t=>t.taken)),e)]}class Y extends t{constructor(t){super(),l(this,t,W,Q,s,{ability:0,MasterAbilityList:1})}}function F(t,l,s){const e=t.slice();return e[8]=l[s],e[10]=s,e}function Z(t,l,s){const e=t.slice();return e[1]=l[s],e[6]=l,e[7]=s,e}function tt(t){let l,s,i;return{c(){l=e("option"),s=a(t[10]),this.h()},l(e){l=n(e,"OPTION",{value:!0});var a=r(l);s=c(a,t[10]),a.forEach(h),this.h()},h(){l.__value=i=t[10],l.value=l.__value},m(t,e){m(t,l,e),v(l,s)},p:g,d(t){t&&h(l)}}}function lt(t){let l,s,g,A,$,k,L,M,D,I,V,x=t[1].opts[0].name+"",P=Array(t[1].max+1),N=[];for(let l=0;l<P.length;l+=1)N[l]=tt(F(t,P,l));function S(){t[4].call(L,t[6],t[7])}return{c(){l=e("div"),s=e("div"),g=a(x),A=i(),$=e("div"),k=a("Taken:\n\t\t\t\t"),L=e("select");for(let t=0;t<N.length;t+=1)N[t].c();D=i(),this.h()},l(t){l=n(t,"DIV",{class:!0});var e=r(l);s=n(e,"DIV",{class:!0});var a=r(s);g=c(a,x),a.forEach(h),A=o(e),$=n(e,"DIV",{class:!0});var i=r($);k=c(i,"Taken:\n\t\t\t\t"),L=n(i,"SELECT",{name:!0,class:!0});var f=r(L);for(let t=0;t<N.length;t+=1)N[t].l(f);f.forEach(h),i.forEach(h),D=o(e),e.forEach(h),this.h()},h(){f(s,"class","ability-name-label"),f(L,"name",M=t[1].name),f(L,"class","svelte-1sfjlhz"),void 0===t[1].taken&&u(S),f($,"class","taken-label"),f(l,"class","ability-section svelte-1sfjlhz")},m(e,a){m(e,l,a),v(l,s),v(s,g),v(l,A),v(l,$),v($,k),v($,L);for(let t=0;t<N.length;t+=1)N[t].m(L,null);d(L,t[1].taken),v(l,D),I||(V=[p(L,"change",S),p(L,"blur",t[5])],I=!0)},p(l,s){if(t=l,4&s&&x!==(x=t[1].opts[0].name+"")&&b(g,x),4&s){let l;for(P=Array(t[1].max+1),l=0;l<P.length;l+=1){const e=F(t,P,l);N[l]?N[l].p(e,s):(N[l]=tt(e),N[l].c(),N[l].m(L,null))}for(;l<N.length;l+=1)N[l].d(1);N.length=P.length}4&s&&M!==(M=t[1].name)&&f(L,"name",M),4&s&&d(L,t[1].taken)},d(t){t&&h(l),y(N,t),I=!1,E(V)}}}function st(t){let l,s=t[2],a=[];for(let l=0;l<s.length;l+=1)a[l]=lt(Z(t,s,l));return{c(){l=e("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){l=n(t,"DIV",{class:!0});var s=r(l);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(h),this.h()},h(){f(l,"class","options-section svelte-1sfjlhz")},m(t,s){m(t,l,s);for(let t=0;t<a.length;t+=1)a[t].m(l,null)},p(t,[e]){if(13&e){let i;for(s=t[2],i=0;i<s.length;i+=1){const n=Z(t,s,i);a[i]?a[i].p(n,e):(a[i]=lt(n),a[i].c(),a[i].m(l,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=s.length}},i:g,o:g,d(t){t&&h(l),y(a,t)}}}function et(t,l,s){let e;A(t,_,(t=>s(3,e=t)));let{ability:a}=l,{MasterAbilityList:i}=l,n=i.filter((t=>t.name==a.name));return t.$$set=t=>{"ability"in t&&s(1,a=t.ability),"MasterAbilityList"in t&&s(0,i=t.MasterAbilityList)},[i,a,n,e,function(t,l){t[l].taken=$(this),s(2,n)},()=>k(_,e.abilities=i.filter((t=>t.taken)),e)]}class at extends t{constructor(t){super(),l(this,t,et,st,s,{ability:1,MasterAbilityList:0})}}function it(t){let l,s;return l=new Y({props:{ability:t[0],MasterAbilityList:t[1]}}),{c(){P(l.$$.fragment)},l(t){N(l.$$.fragment,t)},m(t,e){S(l,t,e),s=!0},p(t,s){const e={};1&s&&(e.ability=t[0]),2&s&&(e.MasterAbilityList=t[1]),l.$set(e)},i(t){s||(I(l.$$.fragment,t),s=!0)},o(t){M(l.$$.fragment,t),s=!1},d(t){T(l,t)}}}function nt(t){let l,s;return l=new at({props:{ability:t[0],MasterAbilityList:t[1]}}),{c(){P(l.$$.fragment)},l(t){N(l.$$.fragment,t)},m(t,e){S(l,t,e),s=!0},p(t,s){const e={};1&s&&(e.ability=t[0]),2&s&&(e.MasterAbilityList=t[1]),l.$set(e)},i(t){s||(I(l.$$.fragment,t),s=!0)},o(t){M(l.$$.fragment,t),s=!1},d(t){T(l,t)}}}function rt(t){let l,s,u,d,g,y,A,$,k,V,x,P,N,S,T,j,w,C,_,O,R,B,X,z,U,q=t[0].name+"",H=t[0].desc+"";const G=[nt,it],J=[];function K(t,l){return t[0].opts.length?0:1}return w=K(t),C=J[w]=G[w](t),{c(){l=e("div"),s=i(),u=e("div"),d=e("div"),g=e("div"),y=e("h2"),A=a(q),$=i(),k=e("div"),V=e("span"),x=a("Description:"),P=i(),N=e("span"),S=a(H),T=i(),j=e("div"),C.c(),_=i(),O=e("div"),R=e("button"),B=a("Close"),this.h()},l(t){l=n(t,"DIV",{class:!0}),r(l).forEach(h),s=o(t),u=n(t,"DIV",{class:!0,role:!0,"aria-modal":!0});var e=r(u);d=n(e,"DIV",{class:!0});var a=r(d);g=n(a,"DIV",{class:!0});var i=r(g);y=n(i,"H2",{class:!0});var f=r(y);A=c(f,q),f.forEach(h),i.forEach(h),$=o(a),k=n(a,"DIV",{class:!0});var m=r(k);V=n(m,"SPAN",{class:!0});var v=r(V);x=c(v,"Description:"),v.forEach(h),P=o(m),N=n(m,"SPAN",{class:!0});var p=r(N);S=c(p,H),p.forEach(h),m.forEach(h),T=o(a),j=n(a,"DIV",{class:!0});var b=r(j);C.l(b),b.forEach(h),_=o(a),O=n(a,"DIV",{class:!0});var E=r(O);R=n(E,"BUTTON",{class:!0});var L=r(R);B=c(L,"Close"),L.forEach(h),E.forEach(h),a.forEach(h),e.forEach(h),this.h()},h(){f(l,"class","modal-background svelte-1l8191m"),f(y,"class","svelte-1l8191m"),f(g,"class","ability-name svelte-1l8191m"),f(V,"class","description-label svelte-1l8191m"),f(N,"class","ability-description svelte-1l8191m"),f(k,"class","description-section svelte-1l8191m"),f(j,"class","stats-section svelte-1l8191m"),f(R,"class","svelte-1l8191m"),f(O,"class","btn-row svelte-1l8191m"),f(d,"class","modal-content svelte-1l8191m"),f(u,"class","modal svelte-1l8191m"),f(u,"role","dialog"),f(u,"aria-modal","true")},m(e,a){m(e,l,a),m(e,s,a),m(e,u,a),v(u,d),v(d,g),v(g,y),v(y,A),v(d,$),v(d,k),v(k,V),v(V,x),v(k,P),v(k,N),v(N,S),v(d,T),v(d,j),J[w].m(j,null),v(d,_),v(d,O),v(O,R),v(R,B),X=!0,z||(U=[p(window,"keydown",t[3]),p(l,"click",t[4]),p(R,"click",t[5])],z=!0)},p(t,[l]){(!X||1&l)&&q!==(q=t[0].name+"")&&b(A,q),(!X||1&l)&&H!==(H=t[0].desc+"")&&b(S,H);let s=w;w=K(t),w===s?J[w].p(t,l):(L(),M(J[s],1,1,(()=>{J[s]=null})),D(),C=J[w],C||(C=J[w]=G[w](t),C.c()),I(C,1),C.m(j,null))},i(t){X||(I(C),X=!0)},o(t){M(C),X=!1},d(t){t&&h(l),t&&h(s),t&&h(u),J[w].d(),z=!1,E(U)}}}function ct(t,l,s){let{ability:e}=l,{MasterAbilityList:a}=l;const i=V(),n="undefined"!=typeof document&&document.activeElement;n&&x((t=>n.focus()));return t.$$set=t=>{"ability"in t&&s(0,e=t.ability),"MasterAbilityList"in t&&s(1,a=t.MasterAbilityList)},[e,a,i,t=>{"Escape"===t.key&&i("close")},()=>i("close"),()=>i("close")]}class ot extends t{constructor(t){super(),l(this,t,ct,rt,s,{ability:0,MasterAbilityList:1})}}var ht=(t,l=null)=>(t.visible=!t.visible,l);function ft(t){let l,s;return l=new ot({props:{ability:t[1],MasterAbilityList:t[0]}}),l.$on("close",t[3]),{c(){P(l.$$.fragment)},l(t){N(l.$$.fragment,t)},m(t,e){S(l,t,e),s=!0},p(t,s){const e={};2&s&&(e.ability=t[1]),1&s&&(e.MasterAbilityList=t[0]),l.$set(e)},i(t){s||(I(l.$$.fragment,t),s=!0)},o(t){M(l.$$.fragment,t),s=!1},d(t){T(l,t)}}}function ut(t){let l,s,u,d,g,y,E,A,$,k,V,x,P,N=t[1].name+"",S=t[1].desc+"",T=1==t[1].visible&&ft(t);return{c(){l=e("div"),s=e("div"),u=e("span"),d=a(N),g=i(),y=e("div"),E=e("span"),A=a(S),$=i(),T&&T.c(),k=j(),this.h()},l(t){l=n(t,"DIV",{class:!0});var e=r(l);s=n(e,"DIV",{class:!0});var a=r(s);u=n(a,"SPAN",{class:!0});var i=r(u);d=c(i,N),i.forEach(h),a.forEach(h),g=o(e),y=n(e,"DIV",{class:!0});var f=r(y);E=n(f,"SPAN",{class:!0});var m=r(E);A=c(m,S),m.forEach(h),f.forEach(h),e.forEach(h),$=o(t),T&&T.l(t),k=j(),this.h()},h(){f(u,"class","ability-name svelte-kyd8dq"),f(s,"class","card-row svelte-kyd8dq"),f(E,"class","ability-description"),f(y,"class","card-row svelte-kyd8dq"),f(l,"class","ability-card svelte-kyd8dq")},m(e,a){m(e,l,a),v(l,s),v(s,u),v(u,d),v(l,g),v(l,y),v(y,E),v(E,A),m(e,$,a),T&&T.m(e,a),m(e,k,a),V=!0,x||(P=p(l,"click",t[2]),x=!0)},p(t,[l]){(!V||2&l)&&N!==(N=t[1].name+"")&&b(d,N),(!V||2&l)&&S!==(S=t[1].desc+"")&&b(A,S),1==t[1].visible?T?(T.p(t,l),2&l&&I(T,1)):(T=ft(t),T.c(),I(T,1),T.m(k.parentNode,k)):T&&(L(),M(T,1,1,(()=>{T=null})),D())},i(t){V||(I(T),V=!0)},o(t){M(T),V=!1},d(t){t&&h(l),t&&h($),T&&T.d(t),t&&h(k),x=!1,P()}}}function mt(t,l,s){let{ability:e}=l,{MasterAbilityList:a}=l;return t.$$set=t=>{"ability"in t&&s(1,e=t.ability),"MasterAbilityList"in t&&s(0,a=t.MasterAbilityList)},[a,e,()=>s(0,a=ht(e,a)),()=>s(0,a=ht(e,a))]}class vt extends t{constructor(t){super(),l(this,t,mt,ut,s,{ability:1,MasterAbilityList:0})}}function dt(t,l,s){const e=t.slice();return e[2]=l[s],e}function pt(t){let l,s;return l=new vt({props:{ability:t[2],MasterAbilityList:t[1]}}),{c(){P(l.$$.fragment)},l(t){N(l.$$.fragment,t)},m(t,e){S(l,t,e),s=!0},p(t,s){const e={};1&s&&(e.ability=t[2]),2&s&&(e.MasterAbilityList=t[1]),l.$set(e)},i(t){s||(I(l.$$.fragment,t),s=!0)},o(t){M(l.$$.fragment,t),s=!1},d(t){T(l,t)}}}function bt(t){let l,s,u,d,p,g,E,A=t[0].name+"",$=t[0].list,k=[];for(let l=0;l<$.length;l+=1)k[l]=pt(dt(t,$,l));const V=t=>M(k[t],1,1,(()=>{k[t]=null}));return{c(){l=e("details"),s=e("summary"),u=a(A),d=a("XP Abilities"),p=i(),g=e("div");for(let t=0;t<k.length;t+=1)k[t].c();this.h()},l(t){l=n(t,"DETAILS",{class:!0});var e=r(l);s=n(e,"SUMMARY",{});var a=r(s);u=c(a,A),d=c(a,"XP Abilities"),a.forEach(h),p=o(e),g=n(e,"DIV",{class:!0});var i=r(g);for(let t=0;t<k.length;t+=1)k[t].l(i);i.forEach(h),e.forEach(h),this.h()},h(){f(g,"class","ability-group-card"),f(l,"class","ability-group-details svelte-ial7of")},m(t,e){m(t,l,e),v(l,s),v(s,u),v(s,d),v(l,p),v(l,g);for(let t=0;t<k.length;t+=1)k[t].m(g,null);E=!0},p(t,[l]){if((!E||1&l)&&A!==(A=t[0].name+"")&&b(u,A),3&l){let s;for($=t[0].list,s=0;s<$.length;s+=1){const e=dt(t,$,s);k[s]?(k[s].p(e,l),I(k[s],1)):(k[s]=pt(e),k[s].c(),I(k[s],1),k[s].m(g,null))}for(L(),s=$.length;s<k.length;s+=1)V(s);D()}},i(t){if(!E){for(let t=0;t<$.length;t+=1)I(k[t]);E=!0}},o(t){k=k.filter(Boolean);for(let t=0;t<k.length;t+=1)M(k[t]);E=!1},d(t){t&&h(l),y(k,t)}}}function gt(t,l,s){let{group:e}=l,{MasterAbilityList:a}=l;return t.$$set=t=>{"group"in t&&s(0,e=t.group),"MasterAbilityList"in t&&s(1,a=t.MasterAbilityList)},[e,a]}class yt extends t{constructor(t){super(),l(this,t,gt,bt,s,{group:0,MasterAbilityList:1})}}function Et(t,l,s){const e=t.slice();return e[4]=l[s],e[6]=s,e}function At(t,l,s){const e=t.slice();return e[7]=l[s],e}function $t(t){let l,s,i=t[7]+"";return{c(){l=e("p"),s=a(i)},l(t){l=n(t,"P",{});var e=r(l);s=c(e,i),e.forEach(h)},m(t,e){m(t,l,e),v(l,s)},p:g,d(t){t&&h(l)}}}function kt(t){let l,s,a;return s=new G({props:{MasterAbilityList:t[1]}}),{c(){l=e("div"),P(s.$$.fragment),this.h()},l(t){l=n(t,"DIV",{class:!0});var e=r(l);N(s.$$.fragment,e),e.forEach(h),this.h()},h(){f(l,"class","section-card")},m(t,e){m(t,l,e),S(s,l,null),a=!0},p:g,i(t){a||(I(s.$$.fragment,t),a=!0)},o(t){M(s.$$.fragment,t),a=!1},d(t){t&&h(l),T(s)}}}function Lt(t){let l,s;return l=new yt({props:{group:t[4],MasterAbilityList:t[1]}}),{c(){P(l.$$.fragment)},l(t){N(l.$$.fragment,t)},m(t,e){S(l,t,e),s=!0},p:g,i(t){s||(I(l.$$.fragment,t),s=!0)},o(t){M(l.$$.fragment,t),s=!1},d(t){T(l,t)}}}function Mt(t){let l,s,u,d,g,A,$,k,V,x,P,N,S,T,j,C,_,R,B,X,z,U,q,H,G,J,K=t[0].props.experience.remaining+"",Q=O.explanation,W=[];for(let l=0;l<Q.length;l+=1)W[l]=$t(At(t,Q,l));let Y=t[0].abilities.length&&kt(t),F=O.groups,Z=[];for(let l=0;l<F.length;l+=1)Z[l]=Lt(Et(t,F,l));const tt=t=>M(Z[t],1,1,(()=>{Z[t]=null}));return{c(){l=i(),s=e("h1"),u=a("Abilities"),d=i(),g=e("div");for(let t=0;t<W.length;t+=1)W[t].c();A=i(),$=e("p"),k=a("Buy Abilities for your Character using XP, or save some or all of your starting XP for later."),V=i(),x=e("div"),P=e("h3"),N=a("Remaining: "),S=a(K),T=i(),Y&&Y.c(),j=i(),C=e("div");for(let t=0;t<Z.length;t+=1)Z[t].c();_=i(),R=e("div"),B=e("button"),X=a("Reset"),z=i(),U=e("button"),q=a("Random"),this.h()},l(t){w('[data-svelte="svelte-1sd5z0r"]',document.head).forEach(h),l=o(t),s=n(t,"H1",{});var e=r(s);u=c(e,"Abilities"),e.forEach(h),d=o(t),g=n(t,"DIV",{class:!0});var a=r(g);for(let t=0;t<W.length;t+=1)W[t].l(a);A=o(a),$=n(a,"P",{});var i=r($);k=c(i,"Buy Abilities for your Character using XP, or save some or all of your starting XP for later."),i.forEach(h),a.forEach(h),V=o(t),x=n(t,"DIV",{class:!0});var f=r(x);P=n(f,"H3",{});var m=r(P);N=c(m,"Remaining: "),S=c(m,K),m.forEach(h),f.forEach(h),T=o(t),Y&&Y.l(t),j=o(t),C=n(t,"DIV",{class:!0});var v=r(C);for(let t=0;t<Z.length;t+=1)Z[t].l(v);v.forEach(h),_=o(t),R=n(t,"DIV",{class:!0});var p=r(R);B=n(p,"BUTTON",{class:!0});var b=r(B);X=c(b,"Reset"),b.forEach(h),z=o(p),U=n(p,"BUTTON",{class:!0});var y=r(U);q=c(y,"Random"),y.forEach(h),p.forEach(h),this.h()},h(){document.title="Apocalyptia Online - Character Creator - Abilities",f(g,"class","explanation"),f(x,"class","remaining"),f(C,"class","abilities-list svelte-1147wm9"),f(B,"class","small-cntr-btn"),f(U,"class","small-cntr-btn"),f(R,"class","btn-row")},m(e,a){m(e,l,a),m(e,s,a),v(s,u),m(e,d,a),m(e,g,a);for(let t=0;t<W.length;t+=1)W[t].m(g,null);v(g,A),v(g,$),v($,k),m(e,V,a),m(e,x,a),v(x,P),v(P,N),v(P,S),m(e,T,a),Y&&Y.m(e,a),m(e,j,a),m(e,C,a);for(let t=0;t<Z.length;t+=1)Z[t].m(C,null);m(e,_,a),m(e,R,a),v(R,B),v(B,X),v(R,z),v(R,U),v(U,q),H=!0,G||(J=[p(B,"click",t[3]),p(U,"click",t[2])],G=!0)},p(t,[l]){if(0&l){let s;for(Q=O.explanation,s=0;s<Q.length;s+=1){const e=At(t,Q,s);W[s]?W[s].p(e,l):(W[s]=$t(e),W[s].c(),W[s].m(g,A))}for(;s<W.length;s+=1)W[s].d(1);W.length=Q.length}if((!H||1&l)&&K!==(K=t[0].props.experience.remaining+"")&&b(S,K),t[0].abilities.length?Y?(Y.p(t,l),1&l&&I(Y,1)):(Y=kt(t),Y.c(),I(Y,1),Y.m(j.parentNode,j)):Y&&(L(),M(Y,1,1,(()=>{Y=null})),D()),2&l){let s;for(F=O.groups,s=0;s<F.length;s+=1){const e=Et(t,F,s);Z[s]?(Z[s].p(e,l),I(Z[s],1)):(Z[s]=Lt(e),Z[s].c(),I(Z[s],1),Z[s].m(C,null))}for(L(),s=F.length;s<Z.length;s+=1)tt(s);D()}},i(t){if(!H){I(Y);for(let t=0;t<F.length;t+=1)I(Z[t]);H=!0}},o(t){M(Y),Z=Z.filter(Boolean);for(let t=0;t<Z.length;t+=1)M(Z[t]);H=!1},d(t){t&&h(l),t&&h(s),t&&h(d),t&&h(g),y(W,t),t&&h(V),t&&h(x),t&&h(T),Y&&Y.d(t),t&&h(j),t&&h(C),y(Z,t),t&&h(_),t&&h(R),G=!1,E(J)}}}function Dt(t,l,s){let e;A(t,_,(t=>s(0,e=t)));let a=O.masterList;return C((t=>{k(_,e.abilities=a.filter((t=>t.taken)),e),k(_,e=O.remainingXP(e),e)})),[e,a,()=>k(_,e=O.random(e),e),()=>k(_,e=O.reset(e),e)]}export default class extends t{constructor(t){super(),l(this,t,Dt,Mt,s,{})}}