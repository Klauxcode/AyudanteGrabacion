(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{330:function(e,t,a){"use strict";var c=a(13),n=a(124),s=a(50),r=a(322),i=a(2),l=["data","formatDate"];t.a=function(e){var t=e.data,a=e.formatDate,u=Object(n.a)(e,l);return Object(i.jsx)(r.c.AppointmentContent,Object(c.a)(Object(c.a)({},u),{},{formatDate:a,data:t,children:Object(i.jsxs)("div",{className:"flex flex-col gap-4 w-full ",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsxs)("div",{className:"text-sm text-white font-bold",children:[" ",t.school]}),Object(i.jsx)("div",{className:"bg-white w-14 h-2 rounded-lg"}),Object(i.jsx)("div",{className:"text-white text-xs font-semibold mt-3",children:t.departament})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"flex items-center gap-2",children:[Object(i.jsx)(s.c,{className:"w-5 h-5"}),Object(i.jsx)("div",{children:a(t.startDate,{hour:"numeric",minute:"numeric"})}),Object(i.jsx)("span",{children:"-"}),Object(i.jsx)("div",{children:a(t.endDate,{hour:"numeric",minute:"numeric"})})]}),Object(i.jsxs)("div",{className:"flex text-white items-center gap-2",children:[Object(i.jsx)(s.f,{className:"w-5 h-5"}),Object(i.jsx)("span",{children:t.title})]})]})]})}))}},348:function(e,t,a){"use strict";a.r(t);var c=a(13),n=a(74),s=a(0),r=a(41),i=a(326),l=a(322),u=a(330),o=a(159),d=a(105),j=(Object(d.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.map((function(e){var t=new Date(e.startDate).getHours(),a=new Date(e.startDate).getMinutes(),c=t-new Date(e.endDate).getHours(),n=a-new Date(e.endDate).getMinutes();return"".concat(Math.abs(c),":").concat(Math.abs(n))}))})),Object(d.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.map((function(e){var t=new Date(e.startDate).getHours(),a=new Date(e.startDate).getMinutes(),c=new Date(e.endDate).getHours(),n=new Date(e.endDate).getMinutes();return{hour:Math.abs(t-c),minute:Math.abs(a-n)}}))}))),b=a(2);t.default=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){var t;return null===(t=e.allScheduler)||void 0===t?void 0:t.scheduler})),a=(Object(r.c)((function(e){return e.allScheduler.schools})),Object(r.c)((function(e){return e.allScheduler.currentDate}))),d=Object(s.useState)({data:t}),x=Object(n.a)(d,2),h=(x[0],x[1],Object(r.c)(j),["Preparador F\xedsico","Actuaci\xf3n","Sonido","Redes y Telecomunicaciones","Audiovisual"]),O=[{fieldName:"departament",title:"Department",instances:[{id:h[0],text:h[0],color:"#36A5C4"},{id:h[1],text:h[1],color:"#BF0249"},{id:h[2],text:h[2],color:"#F78B30"},{id:h[3],text:h[3],color:"#939393"},{id:h[4],text:h[4],color:"#132CAA"}]}];return Object(b.jsx)("div",{className:"bg-white rounded-l-lg ",children:Object(b.jsxs)(l.h,{data:t,locale:"es-Cl",firstDayOfWeek:1,height:520,children:[Object(b.jsx)(i.q,{currentDate:a,onCurrentDateChange:function(t){return e(Object(o.c)(t))},defaultCurrentViewName:"Week"}),Object(b.jsx)(l.f,{displayName:"Dias",startDayHour:8,endDayHour:21,excludedDays:[0,6]}),Object(b.jsx)(l.k,{displayName:"Semanas",startDayHour:8,endDayHour:21,excludedDays:[0,6]}),Object(b.jsx)(l.c,{appointmentContentComponent:u.a}),Object(b.jsx)(l.b,{showCloseButton:!0}),Object(b.jsx)(l.a,{}),Object(b.jsx)(l.d,{shadePreviousCells:!1}),Object(b.jsx)(l.g,{data:O}),Object(b.jsx)(l.i,{flexibleSpaceComponent:function(e){var t=Object.assign({},e);return Object(b.jsx)(l.i.FlexibleSpace,Object(c.a)(Object(c.a)({},t),{},{className:"flex flex-row items-center justify-center m-auto gap-2"}))}}),Object(b.jsx)(l.e,{}),Object(b.jsx)(l.j,{})]})})}}}]);
//# sourceMappingURL=8.364c29a6.chunk.js.map