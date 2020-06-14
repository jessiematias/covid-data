(this["webpackJsonpreact-covid-chart"]=this["webpackJsonpreact-covid-chart"]||[]).push([[0],{156:function(t,e,n){t.exports=n(346)},346:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),u=n(14),s=n.n(u),i=n(31),l=n(42),d=(n(161),n(79)),f=n.n(d),p="https://covid19.mathdro.id/api",b=function(){var t=Object(i.a)(s.a.mark((function t(e){var n,a,r,c,o,u,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p,e&&(n="".concat(p,"/countries/").concat(e)),t.prev=2,t.next=5,f.a.get(n);case 5:return a=t.sent,r=a.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,t.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("".concat(p,"/daily"));case 3:return e=t.sent,n=e.data,a=n.map((function(t){return{confirmed:t.confirmed.total,deaths:t.deaths.total,date:t.reportDate}})),t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("".concat(p,"/countries"));case 3:return e=t.sent,n=e.data.countries,t.abrupt("return",n.map((function(t){return t.name})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),h=n(96),y=n(52),O=function(t){var e=t.data,n=e.confirmed,r=e.deaths,c=e.recovered,o=t.country,u=Object(a.useState)([]),d=Object(l.a)(u,2),f=d[0],p=d[1];Object(a.useEffect)((function(){(function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p,t.next=3,m();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var b=f?Object(y.b)(h.b,{data:{labels:f.map((function(t){return t.date})),datasets:[{data:f.map((function(t){return t.confirmed})),label:"Infected",borderColor:"#f6a5c0",backgroundColor:"#f6a5c0",fill:!0},{data:f.map((function(t){return t.deaths})),label:"Deaths",borderColor:"#c2185b",backgroundColor:"#c2185b",fill:!0}]}}):null,v=n?Object(y.b)(h.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#f48fb1","#f6a5c0","#c3185d"],data:[n.value,c.value,r.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Latest update for ".concat(o)}}}):null;return Object(y.b)("div",{css:{width:"80%"}},o?v:b)},j=n(349),g=n(348),x=j.a.Option,w=function(t){var e=t.handleCountryChange,n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){(function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.next=3,v();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[u]),r.a.createElement("div",null,r.a.createElement(g.a,{style:{margin:"2rem"}},r.a.createElement(j.a,{defaultValue:"Global Data",onChange:function(t){return e(t)},dropdownStyle:{backgroundColor:"#bdbdbd"}},o.map((function(t,e){return r.a.createElement(x,{key:e,value:t},t)})))))},E=n(347).a.Text,k=function(){var t=Object(a.useState)({}),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),d=u[0],f=u[1];Object(a.useEffect)((function(){function t(){return(t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,b();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var p=function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,b(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1),f(e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{styles:{body:{backgroundColor:"#212121"},".container":{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"white"}}}),r.a.createElement("div",{className:"container"},r.a.createElement(E,{style:{marginTop:"1rem",color:"#d4d4d4",fontSize:"2rem",textAlign:"center"}},"COVID-19 LATEST UPDATE"),r.a.createElement(w,{handleCountryChange:p}),r.a.createElement(O,{data:n,country:d})))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.ee4e9c5d.chunk.js.map