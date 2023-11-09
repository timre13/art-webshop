var Te=Object.defineProperty;var be=(t,e,s)=>e in t?Te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var j=(t,e,s)=>(be(t,typeof e!="symbol"?e+"":e,s),s);import{s as ye,o as Se,f as ue,r as Ce}from"../chunks/scheduler.ce52b9dc.js";import{S as Ee,i as Ne,g as f,s as k,m as P,r as $e,h as p,x as Q,c as D,j as N,f as _,n as J,u as ke,k as c,a as Y,y as r,v as De,o as K,d as Ve,t as Oe,z as we,w as Le,A as he}from"../chunks/index.6ca43f9a.js";import{e as ve,i as Me,p as He}from"../chunks/ordertypes.4a5c3ac8.js";import{b as Pe}from"../chunks/paths.f795a52f.js";import{F as Je}from"../chunks/FancyButton.8ec65b1a.js";function fe(t,e,s){const a=t.slice();return a[10]=e[s],a[12]=s,a}function pe(t){let e,s=`The cart is empty.
            <br/>You can order items from the <a href="${Pe}/gallery" class="svelte-12rhdm5">Gallery</a>.`;return{c(){e=f("h2"),e.innerHTML=s,this.h()},l(a){e=p(a,"H2",{id:!0,class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1b25qbl"&&(e.innerHTML=s),this.h()},h(){c(e,"id","cart-empty-label"),c(e,"class","svelte-12rhdm5")},m(a,n){Y(a,e,n)},d(a){a&&_(e)}}}function _e(t){let e,s='<div class="header-col svelte-12rhdm5"><i>#</i></div> <div class="header-col svelte-12rhdm5">Thumbnail</div> <div class="header-col svelte-12rhdm5">Title</div> <div class="header-col svelte-12rhdm5">Format</div> <div class="header-col svelte-12rhdm5">Price/Item</div> <div class="header-col svelte-12rhdm5">Count</div> <div class="header-col svelte-12rhdm5">Total</div> <div class="header-col svelte-12rhdm5"></div>';return{c(){e=f("div"),e.innerHTML=s,this.h()},l(a){e=p(a,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-13q64q2"&&(e.innerHTML=s),this.h()},h(){c(e,"id","list-header"),c(e,"class","svelte-12rhdm5")},m(a,n){Y(a,e,n)},d(a){a&&_(e)}}}function ge(t){let e,s,a,n=t[12]+1+"",$,q,L,E,y,U,M,o=t[10].itemName+"",i,T,v,S=t[10].orderTypeStr+"",V,H,g,O=t[10].pricePerItem+"",I,b,B,u,l,m,C,h,w,F=t[10].priceSum+"",G,W,X,A,z,le='<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 384 512" class="svelte-12rhdm5"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>',Z,x,re;function Ie(){return t[4](t[10])}return{c(){e=f("div"),s=f("div"),a=f("i"),$=P(n),q=k(),L=f("div"),E=f("img"),U=k(),M=f("div"),i=P(o),T=k(),v=f("div"),V=P(S),H=k(),g=f("div"),I=P(O),b=P("€"),B=k(),u=f("div"),l=f("input"),C=k(),h=f("div"),w=f("b"),G=P(F),W=P("€"),X=k(),A=f("div"),z=f("button"),z.innerHTML=le,Z=k(),this.h()},l(R){e=p(R,"DIV",{class:!0});var d=N(e);s=p(d,"DIV",{class:!0});var se=N(s);a=p(se,"I",{});var ae=N(a);$=J(ae,n),ae.forEach(_),se.forEach(_),q=D(d),L=p(d,"DIV",{class:!0});var ie=N(L);E=p(ie,"IMG",{src:!0,class:!0}),ie.forEach(_),U=D(d),M=p(d,"DIV",{class:!0});var oe=N(M);i=J(oe,o),oe.forEach(_),T=D(d),v=p(d,"DIV",{class:!0});var ce=N(v);V=J(ce,S),ce.forEach(_),H=D(d),g=p(d,"DIV",{class:!0});var ee=N(g);I=J(ee,O),b=J(ee,"€"),ee.forEach(_),B=D(d),u=p(d,"DIV",{class:!0});var ne=N(u);l=p(ne,"INPUT",{class:!0,type:!0,min:!0,title:!0}),ne.forEach(_),C=D(d),h=p(d,"DIV",{class:!0});var de=N(h);w=p(de,"B",{});var te=N(w);G=J(te,F),W=J(te,"€"),te.forEach(_),de.forEach(_),X=D(d),A=p(d,"DIV",{class:!0});var me=N(A);z=p(me,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),Q(z)!=="svelte-69v4kx"&&(z.innerHTML=le),me.forEach(_),Z=D(d),d.forEach(_),this.h()},h(){c(s,"class","item-col svelte-12rhdm5"),ue(E.src,y=t[10].pictureUrl)||c(E,"src",y),c(E,"class","svelte-12rhdm5"),c(L,"class","item-col img-col svelte-12rhdm5"),c(M,"class","item-col svelte-12rhdm5"),c(v,"class","item-col svelte-12rhdm5"),c(g,"class","item-col svelte-12rhdm5"),l.value=m=t[10].count,c(l,"class","item-cnt-in svelte-12rhdm5"),c(l,"type","number"),c(l,"min","1"),c(l,"title","Change number of items to order"),c(u,"class","item-col svelte-12rhdm5"),c(h,"class","item-col svelte-12rhdm5"),c(z,"class","remove-btn svelte-12rhdm5"),c(z,"title","Remove from cart"),c(A,"class","item-col svelte-12rhdm5"),c(e,"class","item svelte-12rhdm5")},m(R,d){Y(R,e,d),r(e,s),r(s,a),r(a,$),r(e,q),r(e,L),r(L,E),r(e,U),r(e,M),r(M,i),r(e,T),r(e,v),r(v,V),r(e,H),r(e,g),r(g,I),r(g,b),r(e,B),r(e,u),r(u,l),r(e,C),r(e,h),r(h,w),r(w,G),r(w,W),r(e,X),r(e,A),r(A,z),r(e,Z),x||(re=[he(l,"change",t[3]),he(z,"click",Ie)],x=!0)},p(R,d){t=R,d&1&&!ue(E.src,y=t[10].pictureUrl)&&c(E,"src",y),d&1&&o!==(o=t[10].itemName+"")&&K(i,o),d&1&&S!==(S=t[10].orderTypeStr+"")&&K(V,S),d&1&&O!==(O=t[10].pricePerItem+"")&&K(I,O),d&1&&m!==(m=t[10].count)&&l.value!==m&&(l.value=m),d&1&&F!==(F=t[10].priceSum+"")&&K(G,F)},d(R){R&&_(e),x=!1,Ce(re)}}}function qe(t){let e;return{c(){e=P("Proceed to checkout")},l(s){e=J(s,"Proceed to checkout")},m(s,a){Y(s,e,a)},d(s){s&&_(e)}}}function Ue(t){let e,s="Cart",a,n,$,q="Your cart",L,E,y,U,M,o,i,T,v,S,V,H,g,O,I=t[0].length==0&&pe(),b=t[0].length!=0&&_e(),B=ve(t[0]),u=[];for(let l=0;l<B.length;l+=1)u[l]=ge(fe(t,B,l));return g=new Je({props:{callback:t[5],isEnabled:t[1]>0,$$slots:{default:[qe]},$$scope:{ctx:t}}}),{c(){e=f("title"),e.textContent=s,a=k(),n=f("div"),$=f("h1"),$.textContent=q,L=k(),I&&I.c(),E=k(),y=f("div"),b&&b.c(),U=k();for(let l=0;l<u.length;l+=1)u[l].c();M=k(),o=f("div"),i=f("h3"),T=P("Order Total: "),v=f("b"),S=P(t[1]),V=P("€"),H=k(),$e(g.$$.fragment),this.h()},l(l){e=p(l,"TITLE",{"data-svelte-h":!0}),Q(e)!=="svelte-fw748q"&&(e.textContent=s),a=D(l),n=p(l,"DIV",{id:!0});var m=N(n);$=p(m,"H1",{class:!0,"data-svelte-h":!0}),Q($)!=="svelte-1irabfz"&&($.textContent=q),L=D(m),I&&I.l(m),E=D(m),y=p(m,"DIV",{id:!0,class:!0});var C=N(y);b&&b.l(C),U=D(C);for(let G=0;G<u.length;G+=1)u[G].l(C);C.forEach(_),M=D(m),o=p(m,"DIV",{id:!0,class:!0});var h=N(o);i=p(h,"H3",{});var w=N(i);T=J(w,"Order Total: "),v=p(w,"B",{});var F=N(v);S=J(F,t[1]),V=J(F,"€"),F.forEach(_),w.forEach(_),H=D(h),ke(g.$$.fragment,h),h.forEach(_),m.forEach(_),this.h()},h(){c($,"class","svelte-12rhdm5"),c(y,"id","item-list"),c(y,"class","svelte-12rhdm5"),c(o,"id","cart-summary"),c(o,"class","svelte-12rhdm5"),c(n,"id","content-inner")},m(l,m){Y(l,e,m),Y(l,a,m),Y(l,n,m),r(n,$),r(n,L),I&&I.m(n,null),r(n,E),r(n,y),b&&b.m(y,null),r(y,U);for(let C=0;C<u.length;C+=1)u[C]&&u[C].m(y,null);r(n,M),r(n,o),r(o,i),r(i,T),r(i,v),r(v,S),r(v,V),r(o,H),De(g,o,null),O=!0},p(l,[m]){if(l[0].length==0?I||(I=pe(),I.c(),I.m(n,E)):I&&(I.d(1),I=null),l[0].length!=0?b||(b=_e(),b.c(),b.m(y,U)):b&&(b.d(1),b=null),m&13){B=ve(l[0]);let h;for(h=0;h<B.length;h+=1){const w=fe(l,B,h);u[h]?u[h].p(w,m):(u[h]=ge(w),u[h].c(),u[h].m(y,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=B.length}(!O||m&2)&&K(S,l[1]);const C={};m&2&&(C.isEnabled=l[1]>0),m&8192&&(C.$$scope={dirty:m,ctx:l}),g.$set(C)},i(l){O||(Ve(g.$$.fragment,l),O=!0)},o(l){Oe(g.$$.fragment,l),O=!1},d(l){l&&(_(e),_(a),_(n)),I&&I.d(),b&&b.d(),we(u,l),Le(g)}}}function Be(){if(!localStorage)return{};let t=JSON.parse(localStorage.getItem("cartItems")||"[]"),e={};return t.forEach(s=>{let a=JSON.stringify({picture:s.picture,orderType:s.orderType});e[a]=0}),t.forEach(s=>{let a=JSON.stringify({picture:s.picture,orderType:s.orderType});e[a]+=s.count}),e}function Fe(t,e,s){class a{constructor(i,T,v,S,V,H,g,O){j(this,"pictureUrl","");j(this,"orderTypeStr","");j(this,"count",0);j(this,"itemName","");j(this,"pricePerItem",0);j(this,"priceSum",0);j(this,"pictureId",0);j(this,"orderTypeId",0);this.pictureUrl=i,this.orderTypeStr=T,this.count=v,this.itemName=S,this.pricePerItem=V,this.priceSum=H,this.pictureId=g,this.orderTypeId=O}}let n=[];function $(){let o=[];o=Object.entries(Be()).map(i=>[JSON.parse(i[0]),i[1]]),console.log(o),s(0,n=o.map(i=>{let T=Me[i[0].picture],v=He[i[0].orderType],S=i[1];return new a(T.src,v.text,S,T.title,v.price,v.price*S,i[0].picture,i[0].orderType)}))}Se(()=>$());let q=0;function L(){s(1,q=n.reduce((o,i)=>o+i.priceSum,0)),console.log(`Total price: ${q}`)}function E(o){if(console.log(`Removing: ${o}`),!localStorage)return;let i=JSON.parse(localStorage.getItem("cartItems")||"[]");i=i.filter(T=>T.picture!=o.pictureId||T.orderType!=o.orderTypeId),localStorage.setItem("cartItems",JSON.stringify(i)),$()}function y(o){var S,V,H,g;const i=o.target;i.value=Math.max(Number.parseInt(i.value),1).toString();const T=Number.parseInt(((g=(H=(V=(S=i.parentElement)==null?void 0:S.parentElement)==null?void 0:V.firstChild)==null?void 0:H.firstChild)==null?void 0:g.childNodes[1].nodeValue)??"")-1;let v=JSON.parse(localStorage.getItem("cartItems")||"[]");console.log(T),console.log(v[T]),v[T].count=Number.parseInt(i.value),localStorage.setItem("cartItems",JSON.stringify(v)),$()}const U=o=>E(o),M=o=>console.log("Checkout");return t.$$.update=()=>{t.$$.dirty&1&&n&&L()},[n,q,E,y,U,M]}class Ke extends Ee{constructor(e){super(),Ne(this,e,Fe,Ue,ye,{})}}export{Ke as component};
