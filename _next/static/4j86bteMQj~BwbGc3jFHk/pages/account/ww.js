(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1073:function(e,t,n){"use strict";n.r(t);var r,a,o=n(2),c=n.n(o),i=n(1),u=n.n(i),l=n(6),s=n.n(l),f=n(5),p=n(3),m=n(10),b=n(7),d=n(4),y=n(0),w=n(9),h=n.n(w),v=n(11),_=n(12),g=n(15),O=n(13);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){I(o,r,a,c,i,"next",e)}function i(e){I(o,r,a,c,i,"throw",e)}c(void 0)})}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var z,D,N,T,C,J,R=(r=function(e){function t(){var e,n,r,o,c,i,u,l,s,f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var p=arguments.length,m=new Array(p),b=0;b<p;b++)m[b]=arguments[b];return r=this,o=(e=P(t)).call.apply(e,[this].concat(m)),n=!o||"object"!==E(o)&&"function"!=typeof o?x(r):o,c=n,i="state",u=a,l=x(x(n)),u&&Object.defineProperty(c,i,{enumerable:u.enumerable,configurable:u.configurable,writable:u.writable,value:u.initializer?u.initializer.call(l):void 0}),n.fetch={config:{static:["userInfo"]},userInfo:(s=k(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.fetchUserInfo(),e.t0=n,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},n.do={submit:(f=k(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.P("do_user_bind-ww",t);case 2:return d.a.light("绑定成功"),e.next=5,O.a.fetchUserInfo();case 5:d.a.router.back();case 6:case"end":return e.stop()}},e,this)})),function(e){return f.apply(this,arguments)})},n.page={check:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({},e);t.ww=d.a.trim(t.ww),-1===t.ww.indexOf(" ")?d.a.validate(t.ww,"mobile")?d.a.light("旺旺ID不能为手机号"):d.a.onConfirm("一旦绑定后，只能通过客服修改。确认无误并且绑定?",function(){return n.do.submit(t)}):d.a.light("旺旺ID中不能有空格")}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,_["a"]),t}(),z=r.prototype,D="state",N=[v.k],T={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({userInfo:O.a.toJS("userInfo")})}},J={},Object.keys(T).forEach(function(e){J[e]=T[e]}),J.enumerable=!!J.enumerable,J.configurable=!!J.configurable,("value"in J||J.initializer)&&(J.writable=!0),J=N.slice().reverse().reduce(function(e,t){return t(z,D,e)||e},J),C&&void 0!==J.initializer&&(J.value=J.initializer?J.initializer.call(C):void 0,J.initializer=void 0),void 0===J.initializer&&(Object.defineProperty(z,D,J),J=null),a=J,r),A="style-136577",G=function(e,t){var n=t.$,r=e.form,a=e.onSubmit,o=n.getState("userInfo"),i=o.ww;if(!o._loaded)return null;var l=!!i;return u.a.createElement(m.k,{title:"绑定旺旺",bd:null},u.a.createElement("div",{className:c.a.dynamic([["89458324",[A,y.a.color_theme]],["1651213920",[y.a.space,y.a.wind,y.a.color_theme]]])+" wrap"},u.a.createElement("p",{className:c.a.dynamic([["89458324",[A,y.a.color_theme]],["1651213920",[y.a.space,y.a.wind,y.a.color_theme]]])+" t-48 l-66 t-b"},"绑定旺旺")),u.a.createElement(p.m,{className:"".concat(A,"__form"),form:r,label:!0},u.a.createElement(p.m.Input,{label:"旺旺ID",name:"ww",initialValue:i,option:b.a.rules.required,disabled:l})),u.a.createElement(m.p,{className:"mt-32"},"请注意：旺旺ID不是登录账号，是淘宝个人中心的【会员名】，会员名是唯一的。",u.a.createElement("span",{onClick:function(){return d.a.router.push("/bbs/article/53017")},className:c.a.dynamic([["89458324",[A,y.a.color_theme]],["1651213920",[y.a.space,y.a.wind,y.a.color_theme]]])+" tool-link"},"查看详细")),u.a.createElement(m.p,{className:"mt-32"},"此旺旺ID用于参加本站的所有活动，一旦确定之后无法更改。"),u.a.createElement(m.p,{className:"mt-32"},"后续所参加的活动如有需要在淘宝购买产品则必须用此旺旺ID进行购买，其他旺旺ID购买无效。"),u.a.createElement(p.m.Button,{disabled:l,onClick:function(){return a(r,n.page.check)}},l?"已绑定":"绑定"),u.a.createElement(c.a,{styleId:"89458324",css:".".concat(A,"__form{margin-top:0;background:").concat(y.a.color_theme,";}"),dynamic:[A,y.a.color_theme]}),u.a.createElement(c.a,{styleId:"1651213920",css:".wrap.__jsx-style-dynamic-selector{padding:".concat(y.a.space," ").concat(y.a.wind,";background:").concat(y.a.color_theme,";}"),dynamic:[y.a.space,y.a.wind,y.a.color_theme]}))};G.contextTypes={$:s.a.object};var U=Object(f.c)(R)(Object(f.a)(Object(f.d)(G)));t.default=U},808:function(e,t,n){__NEXT_REGISTER_PAGE("/account/ww",function(){return e.exports=n(1073),{page:e.exports.default}})}},[[808,1,0]]]);