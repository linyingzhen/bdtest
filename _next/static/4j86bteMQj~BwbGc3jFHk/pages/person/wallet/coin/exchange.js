(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{63:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(1),i=n.n(a),c=n(8),l=n.n(c),u=n(4),s=u.a.cdn("/static/images/src/person/wallet/_/FlowWrap");t.a=function(e){var t=e.className,n=e.children;return i.a.createElement("div",{className:"jsx-1064413498 "+(l()("style-105627",t)||"")},n,i.a.createElement("img",{src:"".concat(s,"/wave.png"),alt:"",className:"jsx-1064413498 img-wave"}),i.a.createElement(o.a,{styleId:"1064413498",css:".style-105627.jsx-1064413498{padding:1.18rem 0 0 0;margin-top:-1rem;background-image:linear-gradient( 90deg, rgba(90,194,255,1), rgba(46,142,255,1) );overflow:hidden;}.img-wave.jsx-1064413498{width:100%;margin-bottom:-0.01rem;opacity:0.4;}"}))}},909:function(e,t,n){__NEXT_REGISTER_PAGE("/person/wallet/coin/exchange",function(){return e.exports=n(991),{page:e.exports.default}})},991:function(e,t,n){"use strict";n.r(t);var r,o,a,i=n(1),c=n.n(i),l=n(6),u=n.n(l),s=n(5),f=n(3),m=n(10),p=n(0),y=n(63),b=n(8),d=n.n(b),h=n(7);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=Object(s.d)((a=o=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=g(this,(e=_(t)).call.apply(e,[this].concat(o)))).state={focused:!0},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,c.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.context.$.getState("walletInfo").btAmount,n=void 0===t?"-":t,r=this.props,o=r.form,a=r.className,i=this.state.focused;return c.a.createElement(f.m,{className:d()("style-460489",a),form:o,label:!0,renderHeader:c.a.createElement("p",{className:"t-30 l-42 t-sub"},c.a.createElement("span",{style:{display:"inline-block",minWidth:"2.4rem"}},"账户余额\b：",n),c.a.createElement(f.t,{className:"t-primary ml-32",href:"/pay/do"},"去充值"))},c.a.createElement(f.m.MoneyInput,{name:"price",label:"兑换数量",option:h.a.rules.required,focused:i,placeholder:"请输入数量，10金币=1元",updatePlaceholder:!1,format:"int",onBlur:function(){return e.setState({focused:!1})},onFocus:function(){return e.setState({focused:!0})}}))}}])&&w(n.prototype,r),o&&w(n,o),t}(),o.contextTypes={$:u.a.object},r=a))||r,E=n(2),S=n.n(E),x=[{label:"10",value:"1.00"},{label:"50",value:"5.00"},{label:"100",value:"10.00"},{label:"200",value:"20.00"},{label:"500",value:"50.00"},{label:"1000",value:"100.00"}],P=function(e,t){var n=e.className,r=t.$;return c.a.createElement("div",{className:S.a.dynamic([["4125813868",[p.a.wind,p.a.color_theme]]])+" "+(d()("style-557743",n)||"")},x.map(function(e){return c.a.createElement("div",{key:e.label,onClick:function(){return r.page.showPayConfirm({price:e.label})},className:S.a.dynamic([["4125813868",[p.a.wind,p.a.color_theme]]])+" item"},c.a.createElement("p",{className:S.a.dynamic([["4125813868",[p.a.wind,p.a.color_theme]]])+" t-34 l-44 t-primary t-b t-c"},e.label,"枚"),c.a.createElement("p",{className:S.a.dynamic([["4125813868",[p.a.wind,p.a.color_theme]]])+" t-30 l-44 t-sub t-c mt-8"},"¥ ",e.value))}),c.a.createElement(S.a,{styleId:"4125813868",css:".style-557743.__jsx-style-dynamic-selector{padding:0 ".concat(p.a.wind,";}.item.__jsx-style-dynamic-selector{display:inline-block;width:32%;padding:0.56rem 0;margin-right:1.66666%;background:").concat(p.a.color_theme,";border:0.02rem solid rgba(220,236,255,1);}.item.__jsx-style-dynamic-selector:nth-of-type(3n){margin-right:0;}.item.__jsx-style-dynamic-selector:nth-of-type(n + 3){margin-top:2%;}"),dynamic:[p.a.wind,p.a.color_theme]}))};P.contextTypes={$:u.a.object};var C,k,N,I=Object(s.d)(P);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F,W,J=Object(s.d)((N=k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,A(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,c.a.Component),n=t,(r=[{key:"componentWillUnmount",value:function(){this.context.$.page.reset()}},{key:"render",value:function(){var e=this.context.$,t=e.getState("_payConfirm"),n=t.show,r=t.amount;return c.a.createElement(f.y,{show:n,amount:r,onClose:e.page.hidePayConfirm,onConfirm:e.do.exchange})}}])&&z(n.prototype,r),o&&z(n,o),t}(),k.contextTypes={$:u.a.object},C=N))||C,B=n(9),G=n.n(B),q=n(11),H=n(12),M=n(15),U=n(4),X=n(13);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function L(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){K(a,r,o,i,c,"next",e)}function c(e){K(a,r,o,i,c,"throw",e)}i(void 0)})}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Z,ee,te,ne,re,oe,ae=(F=function(e){function t(){var e,n,r,o,a,i,c,l,u,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,m=new Array(f),p=0;p<f;p++)m[p]=arguments[p];return r=this,o=(e=Q(t)).call.apply(e,[this].concat(m)),n=!o||"object"!==D(o)&&"function"!=typeof o?Y(r):o,a=n,i="state",c=W,l=Y(Y(n)),c&&Object.defineProperty(a,i,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(l):void 0}),n.fetch={config:{every:["walletInfo"]},walletInfo:(u=L(G.a.mark(function e(){var t;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=X.a.fetchWalletInfo(),e.t0=n,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"walletInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},n.do={exchange:(s=L(G.a.mark(function e(){var t,r;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getState("_payConfirm"),r=t.amount,e.next=3,M.a.P("do_wallet_buy-coin",{amount:r});case 3:U.a.light("兑换成功"),n.page.reset(),n.fetch.walletInfo();case 6:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},n.page={reset:function(){var e=n.getState("_payConfirm").form;e&&e.resetFields(),n.page.hidePayConfirm()},showPayConfirm:function(e,t){return n.setState({show:!0,amount:parseFloat(e.price)/10,form:t},"_payConfirm")},hidePayConfirm:function(){return n.setState({show:!1,amount:0,form:null},"_payConfirm")}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,H["a"]),t}(),Z=F.prototype,ee="state",te=[q.k],ne={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_payConfirm:{show:!1,amount:0,form:null},walletInfo:X.a.toJS("walletInfo")})}},oe={},Object.keys(ne).forEach(function(e){oe[e]=ne[e]}),oe.enumerable=!!oe.enumerable,oe.configurable=!!oe.configurable,("value"in oe||oe.initializer)&&(oe.writable=!0),oe=te.slice().reverse().reduce(function(e,t){return t(Z,ee,e)||e},oe),re&&void 0!==oe.initializer&&(oe.value=oe.initializer?oe.initializer.call(re):void 0,oe.initializer=void 0),void 0===oe.initializer&&(Object.defineProperty(Z,ee,oe),oe=null),W=oe,F),ie=function(e,t){var n=t.$,r=e.form,o=e.onSubmit,a=n.getState("walletInfo").sysAmount,i=void 0===a?"-":a;return c.a.createElement(m.k,{title:"兑换金币",bd:null,headerStyle:{color:p.a.color_theme,background:"transparent"}},c.a.createElement(y.a,null,c.a.createElement("p",{className:"t-48 l-66 t-void t-b t-c mt-64"},i),c.a.createElement("p",{className:"t-24 l-34 t-void t-c mt-24"},"金币")),c.a.createElement(O,{className:"mt-d",form:r}),c.a.createElement(I,{className:"mt-d"}),c.a.createElement(m.p,{className:"mt-md"},"金币一经兑换将无法退款，请确认后再兑换。"),c.a.createElement(f.m.Button,{onClick:function(){return o(r,function(e){return n.page.showPayConfirm(e,r)})}},"兑换"),c.a.createElement(J,null))};ie.contextTypes={$:u.a.object};var ce=Object(s.c)(ae)(Object(s.a)(Object(s.d)(ie)));t.default=ce}},[[909,1,0]]]);