(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=(n(14),n(8)),s=n(5),o=n(1),m=n(4),u=function(e){var t=e.items,n=e.removeItem,a=e.editItem;return c.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,r=e.title;return c.a.createElement("article",{key:t,className:"grocery-item"},c.a.createElement("p",{className:"title"}," ",r),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return a(t)}},c.a.createElement(m.a,null)),c.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return n(t)}},c.a.createElement(m.b,null))))})))},b=function(e){var t=e.type,n=e.msg,r=e.removeAlert,l=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){r()}),3e3);return function(){return clearTimeout(e)}}),[l]),c.a.createElement("p",{className:"alert alert-".concat(t)},n)};var f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),m=Object(o.a)(l,2),f=m[0],d=m[1],g=Object(a.useState)(!1),v=Object(o.a)(g,2),E=v[0],p=v[1],O=Object(a.useState)(null),j=Object(o.a)(O,2),y=j[0],N=j[1],h=Object(a.useState)({show:!1,msg:"",type:""}),S=Object(o.a)(h,2),I=S[0],k=S[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k({show:e,type:n,msg:t})};return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(f))}),[f]),c.a.createElement("section",{className:"section-center"},c.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),n)if(n&&E)d(f.map((function(e){return e.id===y?Object(s.a)(Object(s.a)({},e),{},{title:n}):e}))),r(""),N(null),p(!1),w(!0,"value changed","success");else{w(!0,"item added to the list","success");var t={id:(new Date).getTime().toString(),title:n};d([].concat(Object(i.a)(f),[t])),r("")}else w(!0,"please enter value","danger")}},I.show&&c.a.createElement(b,Object.assign({},I,{removeAlert:w,list:f})),c.a.createElement("h3",null,"grocery list"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"eg. bananas",value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"submit-btn"},E?"edit":"submit"))),f.length>0&&c.a.createElement("div",{className:"grocery-container"},c.a.createElement(u,{items:f,removeItem:function(e){w(!0,"item removed","danger"),d(f.filter((function(t){return t.id!==e})))},editItem:function(e){var t=f.find((function(t){return t.id===e}));p(!0),N(e),r(t.title)}}),c.a.createElement("button",{className:"clear-btn",onClick:function(){w(!0,"items cleared","danger"),d([])}},"clear items")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.fe8500dc.chunk.js.map