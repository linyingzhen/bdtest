(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1080:function(e,t,a){"use strict";a.r(t);var n,r,i=a(1),c=a.n(i),o=a(6),l=a.n(o),s=a(5),u=a(3),m=a(10),d=a(52),f=a(4),p=a(11),b=a(12),y=a(7);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h,v,T,N,I,P,O=(n=function(e){function t(){var e,a,n,i,c,o,l,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,m=new Array(u),d=0;d<u;d++)m[d]=arguments[d];return n=this,i=(e=g(t)).call.apply(e,[this].concat(m)),a=!i||"object"!==w(i)&&"function"!=typeof i?_(n):i,c=a,o="state",l=r,s=_(_(a)),l&&Object.defineProperty(c,o,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(s):void 0}),a.fetch={config:{update:["list"]},list:function(e){return a.fetchListThenSetState("get_my_floor_list","list",{},e)}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,b["a"]),t}(),h=n.prototype,v="state",T=[p.k],N={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({list:y.a.__EMPTY__})}},P={},Object.keys(N).forEach(function(e){P[e]=N[e]}),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=T.slice().reverse().reduce(function(e,t){return t(h,v,e)||e},P),I&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(I):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),r=P,n),j=function(e,t){var a=t.$,n=a.getState("list"),r=f.a.getTimestamp();return c.a.createElement(m.k,{title:"欢乐踩楼"},c.a.createElement(u.v,{className:"tool-list-split mt-d",data:n,renderRow:function(e){var t=e.orderId,a=e.addressId,n=e.threadId,i=e.title,o=e.imgId,l=e.floor,s=e.allFloor,u=e.createTime,m=e.endTime,f=e.isWin,p=r>m?"已结束":c.a.createElement("span",{className:"t-success"},"进行中");return c.a.createElement(d.a,{orderId:t,addressId:""===a?0:a||1,title:String(i).replace("金币踩楼之",""),thumb:o,createTime:u,extra:p,endPrice:"".concat(s,"楼"),endPriceText:"总楼层数",myPrice:"".concat(l,"楼"),myPriceText:"我的楼层",win:1===f,winText:"恭喜中奖",href:"/bbs/floor/detail?id=".concat(n),as:"/bbs/floor/detail/".concat(n)})},onEndReached:a.fetch.list}))};j.contextTypes={$:l.a.object};var x=Object(s.c)(O)(Object(s.d)(j));t.default=x},52:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(1),c=a.n(i),o=a(8),l=a.n(o),s=a(5),u=a(3),m=a(4),d=a(0),f="style-372434";t.a=Object(s.d)(function(e){var t=e.orderId,a=e.addressId,n=e.title,i=e.thumb,o=e.thumbType,s=void 0===o?"scale":o,p=e.extra,b=e.createTime,y=e.endPrice,w=e.endPriceText,g=e.myPrice,E=e.myPriceText,_=e.win,h=e.winText,v=e.winDefaultText,T=e.href,N=e.as,I=e.className,P=parseInt(a),O=_&&!!t;return c.a.createElement(u.u.Item,{className:l()(f,I)},c.a.createElement(u.l,{className:"t-28 l-40 t-sub",href:T,as:N},c.a.createElement(u.l.Item,null,m.a.date(b)),p,T&&c.a.createElement(u.p,{className:"t-32 t-icon ml-xs",type:"right"})),c.a.createElement(u.l,{className:"".concat(f,"__wrap-goods mt-16")},c.a.createElement(u.q,{src:m.a.getAppImgUrl(i,s),size:"1.6rem"}),c.a.createElement(u.l.Item,null,c.a.createElement("p",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])+" t-34 l-48 t-title"},n),c.a.createElement("p",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])+" t-28 l-40 t-sub t-r mt-24"},w&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])},w,"："),c.a.createElement("span",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])+" t-primary"},y))),c.a.createElement("p",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])+" t-28 l-40 t-sub t-r mt-4"},E&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])},E,"："),c.a.createElement("span",{className:r.a.dynamic([["1441057026",[f,d.a.wind,d.a.color_bg]]])+" t-primary"},g))))),(_||v)&&c.a.createElement(u.l,{className:"mt-24",justify:"between"},c.a.createElement(u.l.Item,{className:"t-28 l-40 t-primary"},h||v),O&&c.a.createElement(u.c,{type:"primary",size:"sm",inline:!0,radius:!0,ghost:!!P,onClick:function(){return m.a.router.push("/person/event/prize?id=".concat(t),"/person/event/prize/".concat(t))}},P?"已确认":"确认地址")),c.a.createElement(r.a,{styleId:"1441057026",css:".".concat(f,"__wrap-goods{padding:").concat(d.a.wind,";background:").concat(d.a.color_bg,";}"),dynamic:[f,d.a.wind,d.a.color_bg]}))})},862:function(e,t,a){__NEXT_REGISTER_PAGE("/person/event/floor",function(){return e.exports=a(1080),{page:e.exports.default}})}},[[862,1,0]]]);