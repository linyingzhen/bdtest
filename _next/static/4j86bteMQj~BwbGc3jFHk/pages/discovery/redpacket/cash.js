(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1020:function(e,t,n){"use strict";n.r(t);var r,a,o=n(2),i=n.n(o),c=n(1),l=n.n(c),u=n(6),s=n.n(u),f=n(5),p=n(3),y=n(10),d=n(8),m=n.n(d),b=n(9),w=n.n(b),h=n(11),v=n(12),g=n(15),_=n(4),O=n(13);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){x(e,t,n[t])})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){P(o,r,a,i,c,"next",e)}function c(e){P(o,r,a,i,c,"throw",e)}i(void 0)})}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var z,N,F,R,A,V,$=(r=function(e){function t(){var e,n,r,o,i,c,l,u,s,f,p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var y=arguments.length,d=new Array(y),m=0;m<y;m++)d[m]=arguments[m];return r=this,o=(e=k(t)).call.apply(e,[this].concat(d)),n=!o||"object"!==S(o)&&"function"!=typeof o?C(r):o,i=n,c="state",l=a,u=C(C(n)),l&&Object.defineProperty(i,c,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(u):void 0}),n.fetch={config:{every:["walletInfo"]},walletInfo:(s=j(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.fetchWalletInfo(),e.t0=n,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"walletInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},n.do={doAddReward:(p=j(w.a.mark(function e(t){var r,a,o,i,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.amount,a=t.total,o=n.getState("state"),!(1===(i=o.redPriceType)&&r/a<.1)){e.next=5;break}return _.a.light("单个红包金额不可低于0.1元"),e.abrupt("return",!1);case 5:if(!(2===i&&r*a<1)){e.next=8;break}return _.a.light("红包总金额不可低于1元"),e.abrupt("return",!1);case 8:return e.next=10,g.a.P("do_redpacket_send",T({redPriceType:i},t));case 10:return c=e.sent,n.setState({orderId:c.orderId,payType:c.payType},"_payConfirm"),n.do.pay(),e.abrupt("return",!0);case 14:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)}),pay:(f=j(w.a.mark(function e(){var t,r,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getState("_payConfirm"),r=t.orderId,a=t.payType,window.console.log(r),e.next=4,g.a.PP("do_wx_pay",{orderId:r,payType:a});case 4:0===e.sent.code?(_.a.light("支付成功"),_.a.router.push("/discovery"),n.page.reset(),n.fetch.walletInfo()):_.a.router.push("/pay/do");case 6:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)})},n.page={onTabClick:function(e,t){n.setState({page:t},"_affixTabs"),_.a.scrollTo(0);var r=n.getState("_affixTabs").page;n.setState({redPriceType:1===r?2:1})},reset:function(){var e=n.getState("_payConfirm").form;e&&e.resetFields(),n.page.hidePayConfirm()},showPayConfirm:function(e,t){return n.setState({show:!0,orderId:e.orderId,payType:e.payType,form:t},"_payConfirm")},hidePayConfirm:function(){return n.setState({show:!1,orderId:"",payType:2,form:null},"_payConfirm")}},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,v["a"]),n=t,(r=[{key:"storeInit",value:function(){var e=this.params.params.id;1==e&&this.setState({page:e},"_affixTabs")}}])&&E(n.prototype,r),o&&E(n,o),t}(),z=r.prototype,N="state",F=[h.k],R={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_payConfirm:{show:!1,orderId:"",payType:2,form:null},walletInfo:O.a.toJS("walletInfo"),_affixTabs:{page:0},state:{redPriceType:1,show:!1,_filter:!0}})}},V={},Object.keys(R).forEach(function(e){V[e]=R[e]}),V.enumerable=!!V.enumerable,V.configurable=!!V.configurable,("value"in V||V.initializer)&&(V.writable=!0),V=F.slice().reverse().reduce(function(e,t){return t(z,N,e)||e},V),A&&void 0!==V.initializer&&(V.value=V.initializer?V.initializer.call(A):void 0,V.initializer=void 0),void 0===V.initializer&&(Object.defineProperty(z,N,V),V=null),a=V,r),q=[{title:"拼手气"},{title:"固定金额"}],J=n(39),G=n.n(J),L=n(7),D=n(0),M=function(e,t){var n=t.$,r=e.form,a=e.label,o=e.onSubmit,c=r.getFieldValue("amount"),u=r.getFieldValue("total"),s=r.getFieldValue("title");s=_.a.trim(s);var f="发红包",y="",d=!0;return 1===n.getState("state").redPriceType?(c>=1&&u>=0&&""!=s&&c/u>=.1&&c/u<=200&&(d=!1,f="发红包(总金额".concat(c,"元)")),(c/u<.1||c/u>200)&&(y="单个红包金额不可低于0.1元高于200元"),c<1&&(y="红包总金额不可小于1元")):(c>=.1&&c<=200&&""!=s&&c*u>=1&&(d=!1,f="发红包(总金额".concat((c*u).toFixed(2),"元)")),(c<.1||c>200)&&(y="单个红包金额不可低于0.1元高于200元"),c*u<1&&(y="红包总金额不可小于1元")),l.a.createElement(p.m,{form:r},l.a.createElement(p.m.MoneyInput,{className:"mt-sm",label:a,name:"amount",placeholder:"0.00",extra:"￥",maxLength:7,option:L.a.rules.required}),l.a.createElement(p.m.Input,{className:"number",label:"红包个数",name:"total",type:"phone",placeholder:"请输入数量",extra:"个",maxLength:3,option:L.a.rules.required}),l.a.createElement("div",{className:i.a.dynamic([["2939256129",[D.a.space,D.a.wind]],["3327234786",[D.a.space,D.a.wind,D.a.wind]]])+" t-32 mt-12 ml-32"},"祝福语"),l.a.createElement(p.m.Textarea,{className:"mt-sm",name:"title",initialValue:"大鲫大鲤，渔获多多",count:200,option:L.a.rules.required}),l.a.createElement("div",{className:i.a.dynamic([["2939256129",[D.a.space,D.a.wind]],["3327234786",[D.a.space,D.a.wind,D.a.wind]]])+" no t-24"},y),l.a.createElement(G.a,{type:"warning",className:"m-w",onClick:function(){return _.a.onConfirm("确认发布金额红包？",function(){return o(r,n.do.doAddReward)})},disabled:d},f),l.a.createElement(i.a,{styleId:"2939256129",css:".m-w{margin:".concat(D.a.space," ").concat(D.a.wind,";}"),dynamic:[D.a.space,D.a.wind]}),l.a.createElement(i.a,{styleId:"3327234786",css:".no.__jsx-style-dynamic-selector{height:0.64rem;color:#d74e59;padding:".concat(D.a.space," ").concat(D.a.wind," 0 ").concat(D.a.wind,";}"),dynamic:[D.a.space,D.a.wind,D.a.wind]}))};M.contextTypes={$:s.a.object};var W,X,B,H=Object(f.d)(M);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ee=Object(f.c)($)(W=Object(f.a)(W=Object(f.d)((B=X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,Y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,l.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.className,t=this.context.$,n=this.props,r=n.form,a=n.onSubmit,o=t.getState("_affixTabs").page;return l.a.createElement(y.k,{title:"现金红包",className:m()("style-20181011152940",e)},l.a.createElement(p.a,{tabs:q,align:"center",animated:!0,destroyInactiveTab:!1,page:o,onTabClick:t.page.onTabClick},l.a.createElement(H,{form:r,onSubmit:a,label:"总金额"}),l.a.createElement(H,{form:r,onSubmit:a,label:"单个金额"})),l.a.createElement(i.a,{styleId:"1237709734",css:".style-20181011152940 .am-list-item .am-input-extra{color:#FF4242;}.style-20181011152940 .c-tabs .am-tabs-default-bar-tab{word-break:keep-all;}"}))}}])&&Q(n.prototype,r),a&&Q(n,a),t}(),X.contextTypes={$:s.a.object},W=B))||W)||W)||W;t.default=ee},832:function(e,t,n){__NEXT_REGISTER_PAGE("/discovery/redpacket/cash",function(){return e.exports=n(1020),{page:e.exports.default}})}},[[832,1,0]]]);