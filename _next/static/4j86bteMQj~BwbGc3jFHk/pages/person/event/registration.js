(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1008:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),c=n.n(i),o=n(5),l=n(3),s=n(10),u=n(2),m=n.n(u),b=n(8),f=n.n(b),p=n(4),d=n(0),y=[{label:"取消报名",value:"-1"},{label:"报名审核中",value:"0"},{label:"报名审核未通过",value:"1"},{label:"报名审核通过",value:"2"},{label:"订单信息审核中",value:"3"},{label:"订单信息审核未通过",value:"4"},{label:"订单信息审核通过",value:"5"},{label:"已提交财务",value:"6"},{label:"已发放奖励",value:"7"}],g=function(e,t){var n,a=t.$,i=e.id,c=e.thread_id,o=e.subject,s=e.status,u=e.marks,b=e.end_time,g=e.className,v=p.a.getLabel(y,s),h=!1,E=!1,w=!1,_="提交订单",k=!1;switch(v){case"取消报名":break;case"报名审核中":h=!0,n="desc";break;case"报名审核未通过":E=!0,k=!!u,n="danger";break;case"报名审核通过":p.a.getTimestamp()>b?(w=!0,n="primary"):w=!1;break;case"订单信息审核中":n="desc";break;case"订单信息审核未通过":k=!!u,w=!0,n="danger",_="重新提交订单";break;case"订单信息审核通过":case"已提交财务":case"已发放奖励":n="primary"}return r.a.createElement(l.u.Item,{className:f()("style-184592",g),wrap:!0},r.a.createElement(l.l,{href:"/bbs/article?id=".concat(c),as:"/bbs/article/".concat(c)},r.a.createElement(l.l.Item,{className:"t-34 l-48"},o),r.a.createElement(l.p,{className:"t-32 t-icon ml-xs",type:"right"})),r.a.createElement("div",{className:m.a.dynamic([["2937204417",[d.a.border]]])+" line"}),k?r.a.createElement("div",{className:m.a.dynamic([["2937204417",[d.a.border]]])},r.a.createElement("p",{className:m.a.dynamic([["2937204417",[d.a.border]]])+" "+"t-sm t-".concat(n)},"状态：",v),r.a.createElement("p",{className:m.a.dynamic([["2937204417",[d.a.border]]])+" t-sm t-sub mt-xs"},u),r.a.createElement("div",{className:m.a.dynamic([["2937204417",[d.a.border]]])+" t-right mt-md"},r.a.createElement(l.c,{type:"primary",size:"sm",inline:!0,ghost:!0,onClick:function(){return p.a.router.push("/person/event/registration/detail?id=".concat(i),"/person/event/registration/detail/".concat(i))}},"报名资料"),w&&r.a.createElement(l.c,{className:"ml-sm",type:"primary",size:"sm",inline:!0,onClick:function(){return p.a.router.push("/bbs/registration?id=".concat(c),"/bbs/registration/".concat(c))}},_),h&&r.a.createElement(l.c,{className:"ml-sm",type:"danger",size:"sm",inline:!0,onClick:function(){return p.a.onConfirm("确定取消报名?",function(){return a.doCancel(i)})}},"取消报名"),E&&r.a.createElement(l.c,{className:"ml-sm",type:"primary",size:"sm",inline:!0,onClick:function(){return p.a.router.push("/bbs/registration?id=".concat(c),"/bbs/registration/".concat(c))}},"重新报名"))):r.a.createElement(l.l,null,r.a.createElement(l.l.Item,null,r.a.createElement("p",{className:m.a.dynamic([["2937204417",[d.a.border]]])+" "+"t-sm t-".concat(n)},"状态：",v)),r.a.createElement(l.c,{type:"primary",size:"sm",inline:!0,ghost:!0,onClick:function(){return p.a.router.push("/person/event/registration/detail?id=".concat(i),"/person/event/registration/detail/".concat(i))}},"报名资料"),w&&r.a.createElement(l.c,{className:"ml-sm",type:"primary",size:"sm",inline:!0,onClick:function(){return p.a.router.push("/bbs/registration?id=".concat(c),"/bbs/registration/".concat(c))}},_),h&&r.a.createElement(l.c,{className:"ml-sm",type:"danger",size:"sm",inline:!0,onClick:function(){return p.a.onConfirm("确定取消报名?",function(){return a.doCancel(i)})}},"取消报名"),E&&r.a.createElement(l.c,{className:"ml-sm",type:"primary",size:"sm",inline:!0,onClick:function(){return p.a.router.push("/bbs/registration?id=".concat(c),"/bbs/registration/".concat(c))}},"重新报名")),r.a.createElement(m.a,{styleId:"2937204417",css:".line.__jsx-style-dynamic-selector{margin:0.16rem 0;border-bottom:".concat(d.a.border,";}"),dynamic:[d.a.border]}))};g.contextTypes={$:c.a.object};var v,h,E=Object(o.d)(g),w=n(9),_=n.n(w),k=n(11),N=n(12),z=n(15),j=n(7);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n,a,r,i,c){try{var o=e[i](c),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T,I,R,$,A,G,J=(v=function(e){function t(){var e,n,a,r,i,c,o,l,s,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var m=arguments.length,b=new Array(m),f=0;f<m;f++)b[f]=arguments[f];return a=this,r=(e=x(t)).call.apply(e,[this].concat(b)),n=!r||"object"!==O(r)&&"function"!=typeof r?S(a):r,i=n,c="state",o=h,l=S(S(n)),o&&Object.defineProperty(i,c,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(l):void 0}),n.fetch={config:{update:["registration"]},registration:function(e){return n.fetchListThenSetState("get_registration_records","registration",{},e)}},n.do={cancel:(s=_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.P("do_registration_cancel",{registration_id:t});case 2:p.a.light("取消报名成功"),n.fetch.registration(!0);case 4:case"end":return e.stop()}},e,this)}),u=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=s.apply(e,t);function i(e){C(r,n,a,i,c,"next",e)}function c(e){C(r,n,a,i,c,"throw",e)}i(void 0)})},function(e){return u.apply(this,arguments)})},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,N["a"]),t}(),T=v.prototype,I="state",R=[k.k],$={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({registration:j.a.__EMPTY__})}},G={},Object.keys($).forEach(function(e){G[e]=$[e]}),G.enumerable=!!G.enumerable,G.configurable=!!G.configurable,("value"in G||G.initializer)&&(G.writable=!0),G=R.slice().reverse().reduce(function(e,t){return t(T,I,e)||e},G),A&&void 0!==G.initializer&&(G.value=G.initializer?G.initializer.call(A):void 0,G.initializer=void 0),void 0===G.initializer&&(Object.defineProperty(T,I,G),G=null),h=G,v),L=function(e,t){var n=t.$,a=n.getState("registration");return r.a.createElement(s.k,{title:"社区活动"},r.a.createElement(l.v,{className:"tool-list-split mt-d",data:a,renderRow:function(e){return r.a.createElement(E,e)},onEndReached:n.fetch.registration}))};L.contextTypes={$:c.a.object};var M=Object(o.c)(J)(Object(o.d)(L));t.default=M},868:function(e,t,n){__NEXT_REGISTER_PAGE("/person/event/registration",function(){return e.exports=n(1008),{page:e.exports.default}})}},[[868,1,0]]]);