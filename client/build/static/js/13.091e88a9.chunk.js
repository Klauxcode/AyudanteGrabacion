(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{297:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return b}));var r=n(157),a=n(290),s=n(100),c=function(e){return e.assistant},o=(Object(s.a)((function(e){return e.allAssistants.assistants}),(function(e){return e.allAssistants.currentFilter}),(function(e,t){var n=e.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(t.toLowerCase())}));return""===t?e:n})),Object(s.a)((function(e){return e.allAssistants.assistants}),(function(e){return e.allAssistants.selectDay}),(function(e){return e.allAssistants.currentFilter}),(function(e,t,n){var r=e.filter((function(e){return e.daysAvailable.map((function(e){var t;return null===(t=e.day[0])||void 0===t?void 0:t.toLowerCase()})).includes(t.toLowerCase())})),a=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.lastName.toLowerCase().includes(n.toLowerCase())||e.rut.toLowerCase().includes(n.toLowerCase())}));return"Todos"===t&&""===n?e:"Todos"===t?a:"Todos"!==t?r:e}))),l=Object(s.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.allAssistants.assistants}),(function(e){return e.allScheduler.currentFilter}),(function(e,t,n){var r=e.map((function(e){return{title:e.title,departament:e.departament,school:e.school,teacher:e.teacher,startDate:e.startDate,endDate:e.endDate,confirmationTurn:e.confirmationTurn,assistant:t.filter((function(t){return t._id.includes(e.assistant)}))[0]}})),a=r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())||e.assistant.name.toLowerCase().includes(n.toLowerCase())||e.assistant.rut.toLowerCase().includes(n.toLowerCase())}));return""===n?r:a})),i=Object(s.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.auth.current}),(function(e,t){return e.filter((function(e){return e.assistant.includes(t.assistant)}))})),u=function(e){return Object(s.a)((function(e){return e.allAssistants.currentDay}),(function(t){return e.filter((function(e){return Object(r.a)(new Date(e.startDate),"EEEE dd/MM",{locale:a.a}).replace(/^\w/,(function(e){return e.toUpperCase()})).includes(t)}))}))},d=Object(s.a)([c],(function(e){return e.assistant})),b=Object(s.a)([c],(function(e){var t;return null===(t=e.assistant.daysAvailable)||void 0===t?void 0:t.length}))},358:function(e,t,n){"use strict";n.r(t);var r=n(91),a=n(12),s=n(61),c=n(26),o=n.n(c),l=n(42),i=n(0),u=n(115),d=n.n(u),b=n(34),f=n(109),j=n(157),x=n(297),p=n(2);function h(){var e=Object(b.c)(x.b),t=Object(b.b)();return Object(i.useEffect)((function(){t(f.a)}),[t]),e.map((function(e){var t=Object(j.a)(new Date(e.startDate),"HH:mm"),n=Object(j.a)(new Date(e.endDate),"HH:mm");return Object(p.jsxs)("option",{value:e._id,children:[e.title," ",t," - ",n]},e._id)}))}var m=n(48),O=n.n(m),g=n(30),v=n(88);t.default=Object(g.k)((function(e){var t=Object(g.g)(),n=Object(b.c)((function(e){var t;return null===(t=e.assistant)||void 0===t?void 0:t.assistant})),c=Object(g.i)().id,u=Object(b.b)(),f=n.name,j=n.lastName;console.log(c),Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(Object(v.e)(c));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(){}))}),[u,c]);var x=Object(i.useState)({name:f+" "+j,motivo:"",observacion:"",clase:"",addstudents:""}),m=Object(s.a)(x,2),w=m[0],N=m[1],C=function(e){N(Object(a.a)(Object(a.a)({},w),{},Object(r.a)({},e.target.name,e.target.value)))},y=function(){d.a.post("https://api-ayudantes.herokuapp.com/api/report",w).then((function(e){console.log(e)})),O()({title:"Reporte",text:"Datos Guardados correctamente",icon:"success",button:"Aceptar",timer:"2000"}),t.push("/")};return Object(p.jsxs)("div",{className:"container mx-auto",children:[Object(p.jsx)("h1",{className:"flex items-center justify-start text-2xl font-bold p-10 ",children:"Reporte"}),Object(p.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),y()}(e)},className:"grid grid-cols-1 lg:grid-cols-2 gap-5 p-3 lg:p-20",children:[Object(p.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(p.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"Nombre:"}),Object(p.jsx)("input",{name:"name",disabled:!0,value:f+" "+j,className:" bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 pl-3 truncate w-full",onChange:function(e){return C(e)}})]}),Object(p.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(p.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"CLASES"}),Object(p.jsxs)("select",{className:"bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full ",name:"clase",onChange:function(e){return C(e)},children:[");",Object(p.jsx)("option",{children:"Seleccionar Clase"}),Object(p.jsx)(h,{})]})]}),Object(p.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(p.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"Motivo del reporte"}),Object(p.jsxs)("select",{className:"bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full ",name:"motivo",defaultValue:"Seleccionar",onChange:function(e){return C(e)},children:[Object(p.jsx)("option",{children:"Seleccionar Motivo"}),Object(p.jsx)("option",{children:"REGISTRO DE ALUMNOS"}),Object(p.jsx)("option",{children:"SUSPENSI\xd3N DE CLASES"})]})]}),Object(p.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(p.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"CANTIDAD ALUMNOS"}),Object(p.jsx)("input",{type:"number",placeholder:"Ingresar alumnos",name:"addstudents",className:"bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 pl-3",onChange:function(e){return C(e)}})]}),Object(p.jsxs)("div",{className:"flex flex-col gap-3 lg:col-span-2",children:[Object(p.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"Observaci\xf3n"}),Object(p.jsx)("textarea",{placeholder:"Ingresa una observaci\xf3n",className:"bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 p-3",name:"observacion",onChange:function(e){return C(e)}})]}),Object(p.jsx)("button",{type:"submit",className:"bg-gray-900 text-white border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 lg:col-span-2 h-10 rounded-lg",children:"Generar Reporte"})]})]})}))}}]);
//# sourceMappingURL=13.091e88a9.chunk.js.map