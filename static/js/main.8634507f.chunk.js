(this.webpackJsonplisttodo=this.webpackJsonplisttodo||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(6),a=c.n(i),d=c(7),l=c(5),r=(c(12),c(0)),o=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(l.a)(i,2),o=a[0],j=a[1],b=0;return Object(r.jsx)("div",{className:"main-div",children:Object(r.jsxs)("div",{className:"child-div",children:[Object(r.jsxs)("figure",{className:"img",children:[Object(r.jsx)("img",{src:"images/todo.svg",alt:"todologo"}),Object(r.jsx)("figcaption",{children:"Add Your List Here \u270c\u270c"})]}),Object(r.jsxs)("div",{className:"addItems",children:[Object(r.jsx)("input",{type:"text",placeholder:" \u270d\u270d Add Item",className:"form-control",value:c,onChange:function(e){return n(e.target.value)}}),Object(r.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Item",onClick:function(){c&&(j([].concat(Object(d.a)(o),[b,c])),b+=1,n(""))}})]}),Object(r.jsx)("div",{className:"showItems",children:o.map((function(e,t){return Object(r.jsxs)("div",{className:"eachItem",children:[Object(r.jsx)("h3",{children:e}),Object(r.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return function(e){var t=o.filter((function(e){return e.ind!==e.ind}));j(t)}()}})]},e.ind)}))}),Object(r.jsx)("div",{className:"showItems",children:Object(r.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){j([])},children:Object(r.jsx)("span",{children:"Check List "})})})]})})},j=function(){return Object(r.jsx)(o,{})};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8634507f.chunk.js.map