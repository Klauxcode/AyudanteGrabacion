(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{169:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return b}));var a=n(157),r=n(160),s=(n(35),n(61)),c=function(e){return e.assistant},o=Object(s.a)((function(e){return e.allAssistants.assistants}),(function(e){return e.allAssistants.currentFilter}),(function(e,t){var n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return""===t?e:n})),i=Object(s.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.auth.current}),(function(e,t){return e.filter((function(e){return e.assistant.includes(t.assistant)}))})),l=function(e){return Object(s.a)((function(e){return e.allAssistants.currentDay}),(function(t){return e.filter((function(e){return Object(a.a)(new Date(e.startDate),"EEEE",{locale:r.a}).replace(/^\w/,(function(e){return e.toUpperCase()})).includes(t)}))}))},u=Object(s.a)([c],(function(e){return e.assistant})),b=Object(s.a)([c],(function(e){var t;return null===(t=e.assistant.daysAvailable)||void 0===t?void 0:t.length}))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(98),r=n(24),s=n.n(r),c=n(41),o=n(211),i=n(212),l=n(217),u=n(216),b=n(0),d=n.n(b),f=n(35),m=n(123),p=n(169),h=(n(49),n(75)),x=n.n(h),j=n(157),v=n(2);function g(){var e=Object(f.c)(p.b),t=Object(f.b)();return Object(b.useEffect)((function(){t(m.a)}),[t]),e.map((function(e){var t=Object(j.a)(new Date(e.startDate),"HH:mm"),n=Object(j.a)(new Date(e.endDate),"HH:mm");return Object(v.jsxs)("option",{value:e._id,children:[e.title," ",t," - ",n]},e._id)}))}var O=n(263),y=n.n(O),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={name:"",motivo:"",observacion:"",clase:""},e.name=function(e){var t=e.name.indexOf(" "),n=e.lastName.indexOf(" "),a=e.name.substr(0,t),r=e.lastName.substr(0,n);return""===a&&(a=e.name),""===r&&(r=e.lastName),a+" "+r},e.mostrar=function(){y()({title:"titulo",text:"texto de pana",icon:"success",button:"Aceptar",timer:"60000"})},e.onSubmit=function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,x.a.post("https://api-ayudantes.herokuapp.com/api/report",{name:e.state.name,motivo:e.state.motivo,observacion:e.state.observacion,clase:e.state.clase});case 3:e.mostrar(),window.location.href="/AyudanteGrabacion";case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChange=function(t){e.setState(Object(a.a)({},t.target.name,t.target.value))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api-ayudantes.herokuapp.com/api/assistant/"+this.props.match.params.id);case 2:t=e.sent,console.log(t.data),this.setState({name:this.name(t.data)});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"flex flex-col items-center justify-center gap-5 px-5",children:[Object(v.jsx)("h1",{className:"flex items-center justify-center text-2xl font-bold",children:"Reportes"}),Object(v.jsxs)("form",{onSubmit:this.onSubmit,className:"grid grid-cols-2 content-center items-center bg-white shadow-md rounded p-10 gap-5",children:[Object(v.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(v.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"Nombre:"}),Object(v.jsx)("input",{value:this.state.name,name:"name",className:" bg-gray-200 text-black border border-gray-200 rounded h-10  max-w-min pl-3",onChange:this.onChange})]}),Object(v.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(v.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"Motivo:"}),Object(v.jsx)("input",{name:"motivo",className:"bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3",value:this.state.motivo,onChange:this.onChange})]}),Object(v.jsxs)("div",{className:"flex flex-col gap-3 col-span-2",children:[Object(v.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"Observaci\xf3n:"}),Object(v.jsx)("input",{className:"bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3",value:this.state.observacion,name:"observacion",onChange:this.onChange})]}),Object(v.jsxs)("div",{className:"flex flex-col gap-3",children:[Object(v.jsx)("label",{className:"uppercase tracking-wide text-black text-xs font-bold",children:"CLASE:"}),Object(v.jsxs)("select",{className:"bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full ",value:this.state.clase,name:"clase",defaultValue:"Seleccionar",onChange:this.onChange,children:[Object(v.jsx)("option",{children:"SELECCIONA UNA CLASE"}),");",Object(v.jsx)(g,{})]})]}),Object(v.jsx)("button",{type:"submit",className:"bg-gray-900 text-white font-bold border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full h-10 mt-6",children:"Generar Reporte"})]})]})}}]),n}(d.a.Component)}}]);
//# sourceMappingURL=13.7b54a23d.chunk.js.map