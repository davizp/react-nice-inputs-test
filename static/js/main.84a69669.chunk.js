(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),s=a.n(l),c=(a(27),a(28),a(1)),o=a(2),i=a(3),u=a(6),h=a(4),m=a(7),p=a(5),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:""},a.handleChange=function(e,t,n){a.setState(Object(c.a)({},t,e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"firstName"},"First Name: "),r.a.createElement(p.Input,{type:"text",id:"firstName",name:"firstName",value:this.state.firstName,classList:[],onChange:this.handleChange,attrs:{placeholder:"enter a value"}}))}}]),t}(n.Component),b={countriesOptions:[{label:"Honduras",value:"hn"},{label:"United States",value:"us"},{label:"Canada",value:"ca"}]},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={countries:""},a._handleChange=function(e,t,n){a.setState(Object(c.a)({},t,e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"countries"},"Select a Country:"),r.a.createElement(p.Select,{id:"countries",name:"countries",value:this.state.countries,classList:[],onChange:this._handleChange,options:b.countriesOptions,defaultText:"Select a Country..."}))}}]),t}(n.Component),v={petsOptions:[{label:"Dogs \ud83d\udc3a",value:"dogs"},{label:"Parrots \ud83d\udc26",value:"parrots"},{label:"Cats \ud83d\ude39",value:"cats"},{label:"Dinosaurs \ud83e\udd96",value:"dinos",attrs:{disabled:!0}}]},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={pets:[]},a._handleChange=function(e,t,n){var r=e.split(",");a.setState(Object(c.a)({},t,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"pets"},"Pets:"),r.a.createElement(p.InputGroup,{type:"checkbox",id:"pets",name:"pets",value:this.state.pets,classList:[],onChange:this._handleChange,options:v.petsOptions}))}}]),t}(n.Component),C={taksOptions:[{label:"Wash Car",value:"car"},{label:"Clean House",value:"house"},{label:"Do Homework",value:"homework"},{label:"Study",value:"study",attrs:{disabled:!0}}]},g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[]},a._handleChange=function(e,t,n){var r=e.split(",");a.setState(Object(c.a)({},t,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"pets"},"Select Task:"),r.a.createElement(p.InputGroup,{type:"radio",id:"tasks",name:"tasks",value:this.state.tasks,classList:[],onChange:this._handleChange,options:C.taksOptions}))}}]),t}(n.Component),j={countriesOptions:[{label:"Honduras",value:"hn"},{label:"United States",value:"us"},{label:"Canada",value:"ca"}]},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={country:""},a._handleChange=function(e,t,n){a.setState(Object(c.a)({},t,e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"countries"},"Select a Country:"),r.a.createElement(p.FormGroup,{type:"autocomplete",name:"country",onChange:this._handleChange,classList:[""],boxClassList:["sm-12","lg-6","departing"],label:"Flights departing from:",attrs:{placeholder:"Select Gateway",autoComplete:"off",maxLength:50},dataList:j.countriesOptions,icon:["icon-pin"]}))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={birth:""},a._handleChange=function(e,t,n){a.setState(Object(c.a)({},t,e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"pets"},"Date:"),r.a.createElement(p.DropDownDate,{name:"birth",classList:[],onChange:this._handleChange,labelM:"",labelD:"",labelY:"",mmClassList:["sm-4"],ddClassList:["sm-4"],yyyyClassList:["sm-4"],defaultTextM:"MM",defaultTextD:"DD",defaultTextY:"YYYY",maxDate:"2022-01-01",minDate:"1985-01-01",format:"YYYY-MM-DD"}))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={creditCard:""},a.handleChange=function(e,t,n){a.setState(Object(c.a)({},t,e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-controls"},r.a.createElement("label",{htmlFor:"creditCard"},"Credit Card Number: "),r.a.createElement(p.InputMask,{type:"text",name:"creditCard",classList:["hi"],onChange:this.handleChange,value:this.state.creditCard,attrs:{"data-testid":"creditCard",required:!0,maxLength:16},cc:!0,last:!0}))}}]),t}(n.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"React Nice Inputs"),r.a.createElement("p",{className:"intro"},"This is a demo of ",r.a.createElement("a",{href:"//www.npmjs.com/package/react-nice-inputs",target:"_blank",rel:"noopener noreferrer"},"react-nice-inputs"),". This repository was created for testing purposes using ",r.a.createElement("a",{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},"jest")," and ",r.a.createElement("a",{href:"//github.com/airbnb/enzyme/",target:"_blank",rel:"noopener noreferrer"},"enzyme"),"."),r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(E,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.84a69669.chunk.js.map