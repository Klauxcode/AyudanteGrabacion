(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[11],{297:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return m}));var r=n(157),s=n(290),a=n(100),c=function(e){return e.assistant},l=(Object(a.a)((function(e){return e.allAssistants.assistants}),(function(e){return e.allAssistants.currentFilter}),(function(e,t){var n=e.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(t.toLowerCase())}));return""===t?e:n})),Object(a.a)((function(e){return e.allAssistants.assistants}),(function(e){return e.allAssistants.selectDay}),(function(e){return e.allAssistants.currentFilter}),(function(e,t,n){var r=e.filter((function(e){return e.daysAvailable.map((function(e){var t;return null===(t=e.day[0])||void 0===t?void 0:t.toLowerCase()})).includes(t.toLowerCase())})),s=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.lastName.toLowerCase().includes(n.toLowerCase())||e.rut.toLowerCase().includes(n.toLowerCase())}));return"Todos"===t&&""===n?e:"Todos"===t?s:"Todos"!==t?r:e}))),i=Object(a.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.allAssistants.assistants}),(function(e){return e.allScheduler.currentFilter}),(function(e,t,n){var r=e.map((function(e){return{title:e.title,departament:e.departament,school:e.school,teacher:e.teacher,startDate:e.startDate,endDate:e.endDate,confirmationTurn:e.confirmationTurn,assistant:t.filter((function(t){return t._id.includes(e.assistant)}))[0]}})),s=r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())||e.assistant.name.toLowerCase().includes(n.toLowerCase())||e.assistant.rut.toLowerCase().includes(n.toLowerCase())}));return""===n?r:s})),o=Object(a.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.auth.current}),(function(e,t){return e.filter((function(e){return e.assistant.includes(t.assistant)}))})),u=function(e){return Object(a.a)((function(e){return e.allAssistants.currentDay}),(function(t){return e.filter((function(e){return Object(r.a)(new Date(e.startDate),"EEEE dd/MM",{locale:s.a}).replace(/^\w/,(function(e){return e.toUpperCase()})).includes(t)}))}))},f=Object(a.a)([c],(function(e){return e.assistant})),m=Object(a.a)([c],(function(e){var t;return null===(t=e.assistant.daysAvailable)||void 0===t?void 0:t.length}))},357:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var r,s,a,c,l,i,o,u,f,m,w,d,g,h,x,b,j=n(12),p=n(26),v=n.n(p),O=n(42),y=n(140),E=n(157),N=n(290),C=n(0),L=n(34),D=n(103),S=n(109),M=n(88),k=n(297),A=["title","titleId"];function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function H(e,t){var n=e.title,j=e.titleId,p=z(e,A);return C.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlnssvgjs:"http://svgjs.com/svgjs",width:512,height:512,x:0,y:0,viewBox:"0 0 512.13 512.13",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",className:"",ref:t,"aria-labelledby":j},p),n?C.createElement("title",{id:j},n):null,C.createElement("g",null,C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},C.createElement("g",null,C.createElement("path",{d:"M256.065,0C114.43,0,0,114.298,0,256.065S114.298,512.13,256.065,512.13S512.13,397.832,512.13,256.065    S397.702,0,256.065,0z M256.065,477.892c-122.891,0-221.828-98.937-221.828-221.828S133.175,34.236,256.065,34.236    s221.828,98.937,221.828,221.828S378.956,477.892,256.065,477.892z",fill:"#5a5a5a","data-original":"#000000",style:{},className:""}))),C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},C.createElement("g",null,C.createElement("path",{d:"M378.956,180.952c-6.769-6.771-17.054-6.771-23.953-0.001L223.651,312.304l-66.523-66.522    c-6.769-6.769-17.054-6.769-23.953,0c-6.769,6.769-6.769,17.053,0,23.953l78.498,78.498c3.385,3.385,6.769,5.077,11.977,5.077    c5.077,0,8.592-1.692,11.977-5.077l143.329-143.328C385.725,198.136,385.725,187.853,378.956,180.952z",fill:"#5a5a5a","data-original":"#000000",style:{},className:""}))),r||(r=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),s||(s=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),a||(a=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),c||(c=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),l||(l=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),i||(i=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),o||(o=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),u||(u=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),f||(f=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),m||(m=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),w||(w=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),d||(d=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),g||(g=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),h||(h=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),x||(x=C.createElement("g",{xmlns:"http://www.w3.org/2000/svg"})),b||(b=C.createElement("script",null))))}var P=C.forwardRef(H),F=(n.p,n(48)),I=n.n(F),R=n(2);function B(){var e=Object(L.b)(),t=Object(L.c)(k.b).filter((function(e){return e.confirmationTurn.includes("Pendiente")})),n=Object(L.c)(D.a);Object(C.useEffect)((function(){function t(){return(t=Object(O.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(M.e)(n)),e(S.a);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,n]);return Object(R.jsxs)("div",{className:"flex flex-col w-full",children:[Object(R.jsxs)("div",{className:"flex flex-row items-center justify-between w-full pl-10 pr-10 mt-5",children:[Object(R.jsx)("h1",{className:"text-lg text-gray-700 font-semibold select-none",children:"Confirmaci\xf3n"}),Object(R.jsx)("div",{className:"flex flex-row items-center gap-7",children:Object(R.jsx)("button",{onClick:function(){return e(S.a)},className:"flex items-center justify-center hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8",children:Object(R.jsx)(y.e,{className:"h-6 w-6 text-gray-600"})})})]}),0===t.length?Object(R.jsxs)("div",{className:"flex flex-col items-center justify-center w-full gap-5 h-screen",children:[Object(R.jsx)(P,{className:"h-20 w-20 "}),Object(R.jsx)("h1",{className:"text-gray-500 text-sm font-medium",children:"Sin turnos por confirmar"})]}):Object(R.jsx)("div",{className:"flex flex-col items-center w-full",children:t.map((function(t){var n=Object(E.a)(new Date(t.startDate),"dd MMM, yyyy",{locale:N.a}),r=Object(E.a)(new Date(t.startDate),"HH:mm"),s=Object(E.a)(new Date(t.endDate),"HH:mm");return Object(R.jsxs)("div",{onClick:function(){return function(t,n,r,s,a){var c=Object(j.a)(Object(j.a)({},s),{},{confirmationTurn:"Confirmado"}),l=Object(j.a)(Object(j.a)({},s),{},{confirmationTurn:"Rechazado"});I()({title:"\xbfQue desea hacer?",text:"Clase del d\xeda ".concat(t," desde las ").concat(n," hasta las ").concat(r),icon:"info",closeOnClickOutside:!1,buttons:{cancel:{text:"Cancelar",value:null,visible:!0,closeModal:!0},rejected:{text:"Rechazar",value:!1,className:"bg-red-400",closeModal:!0},confirm:{text:"Confirmar",value:!0,visible:!0,className:"",closeModal:!0}}}).then((function(t){null!==t&&(t?I()("\xa1Haz confirmado este turno con \xe9xito!",{icon:"success",buttons:!1,timer:1e3}).then((function(){return e(Object(S.c)(a,c))})):I()("\xa1Este turno ha sido rechazado con \xe9xito!",{icon:"success",buttons:!1,timer:1e3}).then((function(){return e(Object(S.c)(a,l))})))}))}(n,r,s,t,t._id)},className:"flex flex-col border-b border-gray-200 pt-5 pb-5 w-full hover:bg-gray-200 pl-10 pr-10",children:[Object(R.jsx)("h3",{className:"text-gray-500 font-medium text-sm",children:n}),Object(R.jsx)("h1",{className:"text-gray-700 font-medium text-lg mt-2",children:t.school}),Object(R.jsxs)("div",{className:"flex flex-col gap-1s mt-3",children:[Object(R.jsxs)("div",{className:"flex flex-row items-center text-gray-500 gap-3",children:[Object(R.jsx)(y.b,{className:"h-4 w-4"}),Object(R.jsxs)("h3",{className:"text-sm",children:[r," - ",s]})]}),Object(R.jsxs)("div",{className:"flex flex-row items-center text-gray-500 gap-3",children:[Object(R.jsx)(y.a,{className:"h-4 w-4"}),Object(R.jsx)("h3",{className:"text-sm",children:t.departament})]}),Object(R.jsxs)("div",{className:"flex flex-row items-center  text-gray-500 gap-3",children:[Object(R.jsx)(y.c,{className:"h-4 w-4"}),Object(R.jsx)("h3",{className:"text-sm",children:t.title})]})]})]})}))})]})}}}]);
//# sourceMappingURL=11.889e56a8.chunk.js.map