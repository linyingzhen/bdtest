(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1006:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(6),c=a.n(i),l=a(5),o=a(10),u=a(3),s=a(2),b=a.n(s),f=a(8),p=a.n(f),m=a(4),d=a(0),y=[{label:"信息提交成功",value:"1"},{label:"信息审核通过",value:"2"},{label:"信息审核失败",value:"3"},{label:"重新提交信息成功",value:"4"},{label:"奖金发放成功",value:"5"},{label:"奖金发放失败",value:"6"},{label:"报名成功",value:"7"}];var v,_,g=Object(l.d)(function(e){var t,a,n,i,c=e.perateId,l=e.acName,o=e.schedule,s=e.createTime,f=e.covermapId;switch(m.a.getLabel(y,o)){case"信息审核失败":case"奖金发放失败":t="danger";break;case"奖金发放成功":t="success"}return r.a.createElement(u.u.Item,{href:"/event/cashback?id=".concat(c),as:"/event/cashback/".concat(c)},r.a.createElement(u.l,{className:"t-28 l-40 t-sub"},r.a.createElement(u.l.Item,null,m.a.date(s)),r.a.createElement("span",{className:b.a.dynamic([["1877707819",["style-131369",d.a.wind,d.a.color_bg]]])+" "+(p()((a={},n="t-".concat(t),i=t,n in a?Object.defineProperty(a,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[n]=i,a))||"")},m.a.getLabel(y,o)),r.a.createElement(u.p,{className:"t-32 t-icon ml-xs",type:"right"})),r.a.createElement(u.l,{className:"".concat("style-131369","__wrap-goods mt-16")},r.a.createElement(u.q,{src:m.a.getAppImgUrl(f),size:"1.6rem"}),r.a.createElement(u.l.Item,null,r.a.createElement("p",{className:b.a.dynamic([["1877707819",["style-131369",d.a.wind,d.a.color_bg]]])+" t-34 l-48 t-title"},l))),r.a.createElement(b.a,{styleId:"1877707819",css:".".concat("style-131369","__wrap-goods{padding:").concat(d.a.wind,";background:").concat(d.a.color_bg,";}"),dynamic:["style-131369",d.a.wind,d.a.color_bg]}))}),w=a(11),h=a(12),E=a(7);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k,z,L,P,T,N,x=(v=function(e){function t(){var e,a,n,r,i,c,l,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),b=0;b<u;b++)s[b]=arguments[b];return n=this,r=(e=j(t)).call.apply(e,[this].concat(s)),a=!r||"object"!==O(r)&&"function"!=typeof r?S(n):r,i=a,c="state",l=_,o=S(S(a)),l&&Object.defineProperty(i,c,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(o):void 0}),a.fetch={config:{update:["eventList"]},eventList:function(e){return a.fetchListThenSetState("get_person-event_list","eventList",{_:{limit:E.a.__LIMIT__,order:{perateId:"desc"}}},e)}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,h["a"]),t}(),k=v.prototype,z="state",L=[w.k],P={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({eventList:E.a.__EMPTY__})}},N={},Object.keys(P).forEach(function(e){N[e]=P[e]}),N.enumerable=!!N.enumerable,N.configurable=!!N.configurable,("value"in N||N.initializer)&&(N.writable=!0),N=L.slice().reverse().reduce(function(e,t){return t(k,z,e)||e},N),T&&void 0!==N.initializer&&(N.value=N.initializer?N.initializer.call(T):void 0,N.initializer=void 0),void 0===N.initializer&&(Object.defineProperty(k,z,N),N=null),_=N,v),R=function(e,t){var a=t.$,n=a.getState("eventList");return r.a.createElement(o.k,{title:"粉丝福利"},r.a.createElement(u.v,{className:"tool-list-split mt-d",data:n,renderRow:function(e){return r.a.createElement(g,e)},onEndReached:a.fetch.eventList}))};R.contextTypes={$:c.a.object};var A=Object(l.c)(x)(Object(l.d)(R));t.default=A},859:function(e,t,a){__NEXT_REGISTER_PAGE("/person/event/cashback",function(){return e.exports=a(1006),{page:e.exports.default}})}},[[859,1,0]]]);