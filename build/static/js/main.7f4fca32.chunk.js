(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=(a(13),a(14),a(3)),s=a(4),i=a(6),u=a(5),h=a(7),m=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search da robuts",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"200px"}},e.children)},f=(a(15),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(d,{robots:n}))):r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component));o.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.7f4fca32.chunk.js.map