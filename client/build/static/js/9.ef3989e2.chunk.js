(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{202:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u}));var a=r(24),n=r.n(a),s=r(41),l=r(8),c=r(63),i=r(61),o=function(e,t){return function(){var r=Object(s.a)(n.a.mark((function r(a){var s,o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:l.a.LOADING_REQUEST,payload:{loading:!0}}),r.next=3,c.a(e);case 3:!0===(s=r.sent).success?(o={current:s.result.user,loading:!1,isLoggedIn:!0},i.a.set("auth",o),a({type:l.a.LOGIN_SUCCESS,payload:s.result.user}),t.push("/")):a({type:l.a.FAILED_REQUEST,payload:s});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.b(),r({type:l.a.LOGOUT_SUCCESS}),e.push("/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},203:function(e,t,r){"use strict";r(0);var a=r(156),n=r(2);t.a=function(){var e={start:{y:"0%"},end:{y:"100%"}},t={duration:.4,yoyo:1/0,ease:"easeInOut"};return Object(n.jsxs)(a.a.div,{className:"absolute flex flex-row left-0 pl-10 pb-2 items-center justify-center gap-1",variants:{start:{transition:{staggerChildren:.2}},end:{transition:{staggerChildren:.2}}},initial:"start",animate:"end",children:[Object(n.jsx)(a.a.div,{className:"w-2 h-2 bg-white rounded-full",variants:e,transition:t}),Object(n.jsx)(a.a.div,{className:"w-2 h-2 bg-white rounded-full",variants:e,transition:t}),Object(n.jsx)(a.a.div,{className:"w-2 h-2 bg-white rounded-full",variants:e,transition:t})]})}},323:function(e,t,r){"use strict";r.r(t);var a=r(100),n=r(6),s=r(98),l=r(0),c=r(39),i=r(202),o=r(27),u=r(46),d=r.p+"static/media/6.27b95fc4.png",b=r(203),f=r(15),m=r(2);t.default=function(){var e=Object(f.g)(),t=Object(l.useState)({username:"",email:"",password:""}),r=Object(s.a)(t,2),x=r[0],g=r[1],j=Object(o.b)(),p=Object(o.c)(u.b).loading,h=function(e){g(Object(n.a)(Object(n.a)({},x),{},Object(a.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"lg:flex flex-row h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10",children:[Object(m.jsx)("div",{className:"lg:flex bg-gradient-to-r from-blue-500 to-blue-800 lg:w-3/5 rounded-l-lg hidden z-0"}),Object(m.jsxs)("div",{className:"flex flex-col justify-between bg-white w-full lg:w-3/5 h-full rounded-lg xl:rounded-r-lg p-10 lg:p-20 z-10",children:[Object(m.jsx)("img",{src:d,alt:"",className:"h-20 w-20"}),Object(m.jsx)("h1",{className:"text-xl font-bold text-center text-gray-700",children:"\xa1Bienvenido de nuevo!"}),Object(m.jsx)("div",{className:"flex flex-col gap-5",children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j(Object(i.a)(x,e))},className:"flex flex-col  w-full gap-5",children:[Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsx)("label",{className:"text-xs font-medium text-gray-600",children:"Nombre de Usuario"}),Object(m.jsx)("input",{name:"username",type:"text",required:!0,className:"appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Nombre de Usuario",onChange:h})]}),Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsx)("label",{className:"text-xs font-medium text-gray-600",children:"Correo Electr\xf3nico"}),Object(m.jsx)("input",{name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"example@gmail.com",onChange:h})]}),Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsx)("label",{className:"text-xs font-medium text-gray-600",children:"Contrase\xf1a"}),Object(m.jsx)("input",{name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"*****",onChange:h})]}),Object(m.jsxs)("div",{className:"flex flex-row justify-between items-center gap-10 lg:gap-28",children:[Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),Object(m.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Recuerdame"})]}),Object(m.jsxs)("button",{type:"submit",className:"group relative w-full h-10 flex flex-row items-center justify-center border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[p?Object(m.jsx)(b.a,{}):Object(m.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(m.jsx)(c.f,{className:"h-5 w-5 text-blue-600 group-hover:text-blue-400","aria-hidden":"true"})}),"Iniciar Sesi\xf3n"]})]})]})}),Object(m.jsx)("h1",{className:"font-light text-xs text-gray-400",children:"version 1.0982021"})]})]})}}}]);
//# sourceMappingURL=9.ef3989e2.chunk.js.map