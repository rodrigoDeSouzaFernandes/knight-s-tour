(this["webpackJsonpknight-s-tour"]=this["webpackJsonpknight-s-tour"]||[]).push([[0],{18:function(n,e,t){},19:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),c=t(10),r=t.n(c),d=(t(18),t(19),t(4)),o=function(n){var e=n.toLowerCase().split(""),t=Object(d.a)(e,2),a=t[0],i=t[1];return"".concat(i-1,"-").concat({a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8}[a]-1)},s=function(n){return["a","b","c","d","e","f","g","h"][Number(n)]},l=t(8),h=["d4","f5","d6","e8","c7","a8","b6","a4","b2","d1","f2","h1","g3","h5","g7","e6","f8","d7","b8","a6","b4","a2","c1","e2","g1","h3","f4","d3","c5","e4","c3","d5","e3","c4","e5","c6","d8","b7","a5","b3","a1","c2","e1","g2","h4","g6","h8","f7","h6","g4","h2","f1","d2","b1","a3","b5","a7","c8","e7","g8","f6","h7","g5","f3"];var x,u,b,p,j,g,f,m,O,w,v=function(){var n=Array(8).fill(Array(8).fill({visited:!1,knight:!1,content:""})),e=Object(a.useState)(n),t=Object(d.a)(e,2),i=t[0],c=t[1],r=Object(a.useState)({line:0,column:0}),x=Object(d.a)(r,2),u=x[0],b=x[1],p=Object(a.useState)([]),j=Object(d.a)(p,2),g=j[0],f=j[1],m=Object(a.useState)(!1),O=Object(d.a)(m,2),w=O[0],v=O[1],k=Object(a.useState)(!1),y=Object(d.a)(k,2),C=y[0],S=y[1],q=Object(a.useCallback)((function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=n.split("-").map(Number),a=Object(d.a)(t,2),i=a[0],r=a[1];b({line:i,column:r}),c((function(n){return n.map((function(n,t){return n.map((function(n,a){return t==i&&r==a?{content:e,visited:!0,knight:!0}:Object(l.a)(Object(l.a)({},n),{},{knight:!1})}))}))}))}),[i]),z=function(n){var e=n.line,t=n.column,a=function(n){var e=h.indexOf(n.toLowerCase());if(0===e)return h;var t=[],a=[];return h.forEach((function(n,i){i<e?a.push(n):t.push(n)})),[].concat(t,a)}("".concat(s(t)).concat(e+1)),i=a.map(o),c=0,r=[],d=setInterval((function(){r.push({moveNumber:c+1,square:a[c]}),f(r),q(i[c],c+1),c===i.length-1?(clearInterval(d),S(!0)):c+=1}),500)},A=Object(a.useCallback)((function(){v(!0),z(u)}),[u]),D=Object(a.useMemo)((function(){return w?null:function(n){var e=n.target.id;return q(e)}}),[w]);return{board:i,playing:w,reset:C,cleanBoard:function(){S(!1),c(n),f([]),b({line:0,column:0}),v(!1)},movements:g,start:A,handleClickSquare:D}},k=t(2),y=t(3),C=t.p+"static/media/horse.28904a4d.png",S=y.a.main(x||(x=Object(k.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column-reverse;\n"]))),q=y.a.div(u||(u=Object(k.a)(["\n  align-items: center;\n  background: white;\n  color: red;\n  display: flex;\n  font-weight: 900;\n  height: 50px;\n  justify-content: center;\n  width: 50px;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  @media screen and (max-width: 490px) {\n    height: 30px;\n    width: 30px;\n  }\n"]))),z=y.a.div(b||(b=Object(k.a)(["\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  height: 50px;\n  width: 50px;\n  outline: none;\n  border: none;\n\n  @media screen and (max-width: 490px) {\n    height: 30px;\n    width: 30px;\n  }\n"])),C),A=y.a.div(p||(p=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n\n  :nth-child(even) div:nth-child(even),\n  :nth-child(ODD) div:nth-child(ODD) {\n    background-color: white;\n    color: teal;\n    filter: invert(100%);\n  }\n\n  p {\n    width: 50px;\n    text-align:center;\n  }\n\n  @media screen and (max-width: 490px) {\n    p {\n      height: 30px;\n      margin: 0;\n      width: 30px;\n    }\n\n    height: 30px;\n  }\n"]))),D=y.a.span(j||(j=Object(k.a)(["\n  background: white;\n  min-width: 70px;\n  padding: 0 3px;\n  :nth-child(odd) {\n    background: rgb(200, 200, 200);\n  }\n\n  @media screen and (max-width: 490px) {\n    min-width: 55px;\n    font-size: 12px;\n  }\n"]))),F=y.a.p(g||(g=Object(k.a)(["\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  height: fit-content;\n  justify-content: stretch;\n  line-height: 2;\n  margin: 10px;\n  text-align: center;\n"]))),L=y.a.div(f||(f=Object(k.a)(["\n  align-items: start;\n  display: flex;\n  justify-content: center;\n  padding: 30px;\n\n  @media screen and (max-width: 880px) {\n    align-items: center;\n    flex-direction: column;\n  }\n"]))),M=y.a.div(m||(m=Object(k.a)(["\n  display: flex;\n  align-self: flex-end;\n\n  p {\n    width: 50px;\n    text-align:center;\n  }\n\n  @media screen and (max-width: 490px) {\n    p {\n      width: 30px;\n    }\n  }\n"]))),N=y.a.div(O||(O=Object(k.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  justify-content: center;\n  padding-left: 20px;\n  width: 100%;\n\n  @media screen and (max-width: 880px) {\n    height: fit-content;\n  }\n"]))),B=y.a.button(w||(w=Object(k.a)(['\n  align-self: flex-end;\n  background: seaGreen;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  font-family: "Merienda", cursive;\n  font-size: 25px;\n  height: 50px;\n  margin: 2px 0;\n  width: 400px;\n\n  :disabled {\n    background-color: grey;\n  }\n\n  @media screen and (max-width: 490px) {\n    width: 240px;\n  }\n']))),I=t(1);var P,E,G,H,J=function(){var n=v(),e=n.board,t=n.playing,a=n.reset,i=n.cleanBoard,c=n.movements,r=n.start,d=n.handleClickSquare;return Object(I.jsxs)(L,{children:[Object(I.jsxs)(S,{children:[Object(I.jsx)(M,{children:Array(8).fill(" ").map((function(n,e){return Object(I.jsxs)("p",{children:[" ",s(e)," "]},n+e)}))}),e.map((function(n,e){return Object(I.jsxs)(A,{children:[Object(I.jsx)("p",{children:e+1}),n.map((function(n,t){var a=n.knight,i=n.content;return a?Object(I.jsx)(z,{id:"".concat(e,"-").concat(t)},"square ".concat(t)):Object(I.jsx)(q,{id:"".concat(e,"-").concat(t),onClick:d,children:i},"square ".concat(t))}))]},"linha ".concat(e))})),t?Object(I.jsx)(B,{disabled:!a,onClick:i,children:"Limpar tabuleiro"}):Object(I.jsx)(B,{disabled:t,onClick:r,children:"COME\xc7AR"})]}),Object(I.jsx)(N,{children:Object(I.jsx)(F,{children:c.map((function(n){var e=n.moveNumber,t=n.square;return Object(I.jsx)(D,{children:"".concat(e,"\xb0 - ").concat(t)},"".concat(e).concat(t))}))})})]})},T=y.a.header(P||(P=Object(k.a)(["\n  background: linear-gradient(grey, gainsboro);\n  color: rgb(30, 30, 50);\n"]))),K=y.a.div(E||(E=Object(k.a)(["\n  max-width: 1300px;  \n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),R=y.a.img(G||(G=Object(k.a)(["\n  height: 50px;\n  width: 100px;\n\n  :nth-child(even) {\n    filter: invert(100%);\n    transform: rotateY(180deg);\n  }\n\n  @media screen and (max-width: 600px) {\n    display: none;\n  }\n"]))),Y=y.a.h1(H||(H=Object(k.a)(['\n  color: white;\n  font-family: "Merienda", cursive;\n  font-size: 30px;\n  text-shadow: 5px 5px 5px black;\n  padding-left: 30px;\n\n  @media screen and (max-width: 600px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 370px) {\n    font-size: 20px;\n  }\n'])));var Q,U,V,W,X=function(){return Object(I.jsx)(T,{children:Object(I.jsxs)(K,{children:[Object(I.jsx)(Y,{children:"O Passeio do Cavalo"}),Object(I.jsxs)("div",{children:[Object(I.jsx)(R,{src:C,alt:"Horse logo"}),Object(I.jsx)(R,{src:C,alt:"Horse logo"})]})]})})},Z=y.a.div(Q||(Q=Object(k.a)(["\n  align-items: center;\n  background: rgba(200, 200, 200, 0.5);\n  backdrop-filter: blur(10px);\n  display: flex;\n  min-height: 100vh;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n"]))),$=y.a.div(U||(U=Object(k.a)(["\n  background: white;\n  border-radius: 5px;\n  padding: 30px;\n  width: 35%;\n  \n  @media screen and (max-width: 880px) {\n    width: 60%;\n  }\n\n  @media screen and (max-width: 880px) {\n    width: 100%;\n  }\n"]))),_=y.a.p(V||(V=Object(k.a)(["\n  font-weight: 550;\n  text-align: left;\n  text-shadow: 3px 3px 5px grey;\n"]))),nn=y.a.button(W||(W=Object(k.a)(["\n  background: seaGreen;\n  border: none;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n  padding: 10px 20px;\n"])));var en=function(){var n=Object(a.useState)(!0),e=Object(d.a)(n,2),t=e[0],i=e[1];return t&&Object(I.jsx)(Z,{children:Object(I.jsxs)($,{children:[Object(I.jsx)(_,{children:'Seja bem vindo \xe0 resolu\xe7\xe3o do desafio "O Passeio do cavalo"'}),Object(I.jsx)(_,{children:'Selecione uma casa do tabuleiro e ent\xe3o clique em come\xe7ar, caso n\xe3o selecione nenhuma, a casa inicial ser\xe1 "a1"'}),Object(I.jsx)(nn,{onClick:function(){return i(!1)},children:"OK"})]})})};var tn=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{}),Object(I.jsxs)("main",{className:"App",children:[Object(I.jsx)(en,{}),Object(I.jsx)(J,{})]})]})},an=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),c(n),r(n)}))};r.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(tn,{})}),document.getElementById("root")),an()}},[[25,1,2]]]);
//# sourceMappingURL=main.0ee26b30.chunk.js.map