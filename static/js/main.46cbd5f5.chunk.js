(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,,function(e,t,a){},,,,function(e){e.exports=JSON.parse('{"employees":[{"first":"Ffej","last":"Caplan","department":"Dev","hasDog":"No","id":1},{"first":"Dan","last":"Caplan","department":"Recruiting","hasDog":"Yes","id":2},{"first":"Dana","last":"McCabe","department":"Management","hasDog":"No","id":3},{"first":"Cassie","last":"Sullivan","department":"Dev","hasDog":"Yes","id":4}],"sorted":false,"check":false}')},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(14),a(15),a(4)),s=a(5),u=a(8),i=a(7);a(2);function m(e){return l.a.createElement("tbody",null,e.value.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.first),l.a.createElement("td",null,e.last),l.a.createElement("td",null,e.department),l.a.createElement("td",null,e.hasDog))})))}var p=a(6);function d(e){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name",l.a.createElement("button",{value:"first",onClick:e.clickOne},"Sort")),l.a.createElement("th",null,"Last Name",l.a.createElement("button",{value:"last",onClick:e.clickOne},"Sort")),l.a.createElement("th",null,"Department",l.a.createElement("button",{value:"department",onClick:e.clickOne},"Sort")),l.a.createElement("th",null,"Has Dog",l.a.createElement("input",{value:"hasDog",type:"checkbox",onClick:e.clickTwo}))))}var f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state=p,e.handleSubmit=function(t){var a=t.target.value;t.preventDefault(),console.log(t),e.state.sorted?e.setState({employees:e.state.employees.sort((function(e,t){return t[a].localeCompare(e[a])})),sorted:!1}):e.setState({employees:e.state.employees.sort((function(e,t){return e[a].localeCompare(t[a])})),sorted:!0})},e.handleClick=function(){if(e.state.check)e.setState({employees:e.state.ogArray,check:!1});else{var t=e.state.employees.filter((function(e){return"Yes"===e.hasDog})),a=e.state.employees;e.setState({employees:t,ogArray:a,check:!0})}},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("table",null,l.a.createElement(d,{clickOne:this.handleSubmit,clickTwo:this.handleClick}),l.a.createElement(m,{value:this.state.employees}))}}]),a}(n.Component);function h(){return l.a.createElement("h1",null,"Employee Summary Table")}var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(f,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.46cbd5f5.chunk.js.map