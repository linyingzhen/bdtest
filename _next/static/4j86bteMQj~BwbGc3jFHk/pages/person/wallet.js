(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{63:function(e,t,a){"use strict";var r=a(2),n=a.n(r),l=a(1),c=a.n(l),o=a(8),i=a.n(o),s=a(4),u=s.a.cdn("/static/images/src/person/wallet/_/FlowWrap");t.a=function(e){var t=e.className,a=e.children;return c.a.createElement("div",{className:"jsx-1064413498 "+(i()("style-105627",t)||"")},a,c.a.createElement("img",{src:"".concat(u,"/wave.png"),alt:"",className:"jsx-1064413498 img-wave"}),c.a.createElement(n.a,{styleId:"1064413498",css:".style-105627.jsx-1064413498{padding:1.18rem 0 0 0;margin-top:-1rem;background-image:linear-gradient( 90deg, rgba(90,194,255,1), rgba(46,142,255,1) );overflow:hidden;}.img-wave.jsx-1064413498{width:100%;margin-bottom:-0.01rem;opacity:0.4;}"}))}},913:function(e,t,a){__NEXT_REGISTER_PAGE("/person/wallet",function(){return e.exports=a(985),{page:e.exports.default}})},985:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(5),c=a(10),o=a(0),i=a(2),s=a.n(i),u=a(8),m=a.n(u),f=a(3),p=Object(l.d)(function(e){var t=e.className;return n.a.createElement(f.l,{className:m()("style-178649",t),href:"/person/wallet/exchange"},n.a.createElement(f.p,{className:"t-48 t-primary",type:"transfer-circle-fill"}),n.a.createElement("p",{className:s.a.dynamic([["4271659168",[o.a.wind,o.a.color_theme]]])+" t-30 l-42 t-sub ml-16"},"余额划转"),n.a.createElement(s.a,{styleId:"4271659168",css:".style-178649{padding:0.08rem 0.24rem 0.08rem 0.08rem;margin-right:-".concat(o.a.wind,";background:").concat(o.a.color_theme,";border-top-left-radius:0.32rem;border-bottom-left-radius:0.32rem;box-shadow:0 0.08rem 0.16rem 0 rgba(32,86,148,0.2);}"),dynamic:[o.a.wind,o.a.color_theme]}))}),d=a(6),y=a.n(d),b=a(63),w=function(e,t){var a=t.$,r=e.className,l=a.getState("walletInfo"),c=l.btAmount,i=void 0===c?"-":c,u=l.sysAmount,p=void 0===u?"-":u,d=a.getState("userInfo").point,y=void 0===d?"-":d;return n.a.createElement(b.a,{className:m()("style-133454",r)},n.a.createElement(f.t,{href:"/person/wallet/flow",block:!0},n.a.createElement("p",{className:s.a.dynamic([["151887759",["style-133454",o.a.border]]])+" t-30 l-42 t-void t-c"},"余额"),n.a.createElement("p",{className:s.a.dynamic([["151887759",["style-133454",o.a.border]]])+" t-72 l-100 t-void t-c"},i)),n.a.createElement(f.l,{className:"mt-40"},n.a.createElement(f.l.Item,{href:"/person/wallet/coin/flow"},n.a.createElement("p",{className:s.a.dynamic([["151887759",["style-133454",o.a.border]]])+" t-24 l-34 t-void t-c"},"金币"),n.a.createElement("p",{className:s.a.dynamic([["151887759",["style-133454",o.a.border]]])+" t-48 l-66 t-void t-c mt-4"},p)),n.a.createElement(f.l.Item,{className:"".concat("style-133454","__right"),href:"/person/wallet/score/flow"},n.a.createElement("p",{className:s.a.dynamic([["151887759",["style-133454",o.a.border]]])+" t-24 l-34 t-void t-c"},"积分"),n.a.createElement("p",{className:s.a.dynamic([["151887759",["style-133454",o.a.border]]])+" t-48 l-66 t-void t-c mt-4"},y))),n.a.createElement(s.a,{styleId:"151887759",css:".".concat("style-133454","__right{margin-left:0;border-left:").concat(o.a.border,";}"),dynamic:["style-133454",o.a.border]}))};w.contextTypes={$:y.a.object};var h,v,g=Object(l.d)(w),E=a(4),N=(E.a.cdn("/static/images/src/person/wallet/Index"),[{label:"余额充值",icon:"charge-fill",type:"primary",onClick:E.a.goToPay},{label:"余额提现",icon:"wallet-fill",href:"/person/wallet/withdraw",type:"success"},{label:"兑换金币",icon:"coin-circle-fill",href:"/person/wallet/coin/exchange",type:"warning"}]),_=[{label:"我的银行卡",icon:"card-circle-fill",href:"/person/wallet/bank",type:"primary"},{label:"资金记录",icon:"transfer-square-fill",href:"/person/wallet/flow",type:"success"},{label:"金币记录",icon:"transfer-circle-fill",href:"/person/wallet/coin/flow",type:"warning"}],I=Object(l.d)(function(e){var t=e.className;return n.a.createElement(f.l,{className:m()("style-145388",t),justify:"around"},N.map(function(e){return n.a.createElement(f.t,{key:e.label,className:"t-c",href:e.href,onClick:e.onClick},n.a.createElement(f.p,{className:"t-".concat(e.type," t-52"),type:e.icon}),n.a.createElement("p",{className:s.a.dynamic([["1871757774",[o.a.wind,o.a.color_theme]]])+" t-26 l-36 t-sub mt-28"},e.label))}),n.a.createElement(s.a,{styleId:"1871757774",css:".style-145388{padding:0.48rem ".concat(o.a.wind,";background:").concat(o.a.color_theme,";}"),dynamic:[o.a.wind,o.a.color_theme]}))}),j=Object(l.d)(function(e){var t=e.className;return n.a.createElement(f.u,{className:m()("style-685489",t)},_.map(function(e){return n.a.createElement(f.u.Item,{key:e.label,thumb:n.a.createElement(f.p,{className:"t-".concat(e.type," t-32"),type:e.icon,style:{minWidth:"0.32rem"}}),arrow:"horizontal",href:e.href},n.a.createElement("p",{className:"t-30 l-42 t-title"},e.label))}))}),k=a(9),x=a.n(k),O=a(11),S=a(12),z=a(13);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t,a,r,n,l,c){try{var o=e[l](c),i=o.value}catch(e){return void a(e)}o.done?t(i):Promise.resolve(i).then(r,n)}function A(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var l=e.apply(t,a);function c(e){T(l,r,n,c,o,"next",e)}function o(e){T(l,r,n,c,o,"throw",e)}c(void 0)})}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var W,G,$,q,F,U,X=(h=function(e){function t(){var e,a,r,n,l,c,o,i,s,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var m=arguments.length,f=new Array(m),p=0;p<m;p++)f[p]=arguments[p];return r=this,n=(e=C(t)).call.apply(e,[this].concat(f)),a=!n||"object"!==P(n)&&"function"!=typeof n?R(r):n,l=a,c="state",o=v,i=R(R(a)),o&&Object.defineProperty(l,c,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(i):void 0}),a.fetch={config:{static:["userInfo"],every:["walletInfo"]},userInfo:(u=A(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.a.fetchUserInfo(),e.t0=a,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)}),walletInfo:(s=A(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.a.fetchWalletInfo(),e.t0=a,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"walletInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,S["a"]),t}(),W=h.prototype,G="state",$=[O.k],q={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({userInfo:z.a.toJS("userInfo"),walletInfo:z.a.toJS("walletInfo")})}},U={},Object.keys(q).forEach(function(e){U[e]=q[e]}),U.enumerable=!!U.enumerable,U.configurable=!!U.configurable,("value"in U||U.initializer)&&(U.writable=!0),U=$.slice().reverse().reduce(function(e,t){return t(W,G,e)||e},U),F&&void 0!==U.initializer&&(U.value=U.initializer?U.initializer.call(F):void 0,U.initializer=void 0),void 0===U.initializer&&(Object.defineProperty(W,G,U),U=null),v=U,h),B=Object(l.c)(X)(function(){return n.a.createElement(c.k,{title:"我的资产",bd:null,ft:n.a.createElement(p,null),headerStyle:{color:o.a.color_theme,background:"transparent"}},n.a.createElement(g,null),n.a.createElement(I,null),n.a.createElement(j,{className:"mt-d"}))});t.default=B}},[[913,1,0]]]);