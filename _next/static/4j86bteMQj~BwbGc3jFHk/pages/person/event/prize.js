(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1036:function(e,a,t){"use strict";t.r(a);var r,o,n=t(2),c=t.n(n),i=t(1),l=t.n(i),m=t(6),d=t.n(m),s=t(5),u=t(3),p=t(10),_=t(4),w=t(0),y=t(9),f=t.n(y),b=t(11),h=t(12),g=t(15),v=[{label:"待确认",value:"0"},{label:"已确认",value:"1"},{label:"待发货",value:"2"},{label:"已发货",value:"3"},{label:"已签收",value:"4"},{label:"完成交易",value:"5"},{label:"已取消",value:"6"}],E=[{label:"待付款",value:"0"}],N=[{label:"本汀余额",value:"0"},{label:"灵动余额",value:"1"}];function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,a,t,r,o,n,c){try{var i=e[n](c),l=i.value}catch(e){return void t(e)}i.done?a(l):Promise.resolve(l).then(r,o)}function P(e){return function(){var a=this,t=arguments;return new Promise(function(r,o){var n=e.apply(a,t);function c(e){k(n,r,o,c,i,"next",e)}function i(e){k(n,r,o,c,i,"throw",e)}c(void 0)})}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,a){return(S=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var C,O,z,T,A,F,R=(r=function(e){function a(){var e,t,r,n,c,i,l,m,d,s;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var u=arguments.length,p=new Array(u),w=0;w<u;w++)p[w]=arguments[w];return r=this,n=(e=x(a)).call.apply(e,[this].concat(p)),t=!n||"object"!==I(n)&&"function"!=typeof n?j(r):n,c=t,i="state",l=o,m=j(j(t)),l&&Object.defineProperty(c,i,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(m):void 0}),t.fetch={config:{every:["orderInfo"]},orderInfo:(d=P(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.params.id,e.abrupt("return",t.fetchThenSetState("get_bt_order_detail","orderInfo",{orderId:a}));case 2:case"end":return e.stop()}},e,this)})),function(){return d.apply(this,arguments)})},t.do={payFee:(s=P(f.a.mark(function e(){var a,r,o,n,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.getState("orderInfo"),r=a.orderinfo,n=(o=r||{}).orderNo,c=o.dataType,e.t0=_.a.getLabel(N,c),e.next="本汀余额"===e.t0?5:"灵动余额"===e.t0?8:11;break;case 5:return e.next=7,g.a.P("do_pay_bt",{orderNo:n,payPort:0});case 7:return e.abrupt("break",13);case 8:return e.next=10,g.a.P("do_pay_ld",{orderNo:n,payPort:0});case 10:return e.abrupt("break",13);case 11:return _.a.light("支付类型出错，请联系客服"),e.abrupt("return");case 13:return e.next=15,t.fetch.orderInfo();case 15:t.page.hidePayConfirm(),_.a.light("领取成功");case 17:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},t.page={showPayConfirm:function(){return t.setState({show:!0},"_payConfirm")},hidePayConfirm:function(){return t.setState({show:!1},"_payConfirm")}},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&S(e,a)}(a,h["a"]),a}(),C=r.prototype,O="state",z=[b.k],T={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_payConfirm:{show:!1},orderInfo:{}})}},F={},Object.keys(T).forEach(function(e){F[e]=T[e]}),F.enumerable=!!F.enumerable,F.configurable=!!F.configurable,("value"in F||F.initializer)&&(F.writable=!0),F=z.slice().reverse().reduce(function(e,a){return a(C,O,e)||e},F),A&&void 0!==F.initializer&&(F.value=F.initializer?F.initializer.call(A):void 0,F.initializer=void 0),void 0===F.initializer&&(Object.defineProperty(C,O,F),F=null),o=F,r),V="style-807297",G=function(e,a){var t,r,o=a.$,n=o.getState("_payConfirm").show,i=o.getState("orderInfo"),m=i.defaultAddress,d=i.orderinfo,s=i._loaded,y=m||{},f=y.province,b=y.city,h=y.district,g=y.address,N=y.recName,I=y.phone,k=d||{},P=k.orderId,x=k.item,S=void 0===x?{}:x,j=k.goodsNum,C=k.state,O=void 0===C?0:C,z=k.dataType,T=k.amount,A=void 0===T?0:T,F=k.payType,R=k.payState,G=k.payAmount,J=k.logisticsNo,L=O<parseInt(_.a.getValue(v,"已发货")),$=0!==F,q=$&&R===parseInt(_.a.getValue(E,"待付款"));return t=I?_.a.getLabel(v,O):"待确认",r=$?0===parseFloat(G)?"支付邮费（".concat(A,"元）"):"已付邮费（".concat(A,"元）"):"包邮",l.a.createElement(p.k,{title:"领取奖品"},l.a.createElement("div",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" wrap-top"},l.a.createElement("p",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" t-34 l-48 t-void t-b"},"状态：",s?t:"-")),l.a.createElement("div",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" wrap-content"},l.a.createElement(u.l,{className:"".concat(V,"__wrap-address"),align:"center",href:L?"/person/order/address?id=".concat(P):void 0,as:L?"/person/order/address/".concat(P):void 0},l.a.createElement(u.l.Item,null,l.a.createElement(u.l,{align:"start"},l.a.createElement(u.p,{className:"t-32 l-42 t-title",type:"location"}),g?l.a.createElement(u.l.Item,null,l.a.createElement("p",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" t-30 l-42 t-title"},N," ",I),l.a.createElement("p",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" t-24 l-34 mt-8"},f," ",b," ",h," ",g)):l.a.createElement(u.l.Item,{className:"t-30 l-42 t-title"},"添加收货地址"))),L&&l.a.createElement(u.p,{className:"t-32 l-42 t-title",type:"right"})),l.a.createElement(u.l,{className:"".concat(V,"__wrap-goods")},l.a.createElement(u.q,{className:"".concat(V,"__thumb border"),src:_.a.getAppImgUrl(S.imgId,"scale"),size:"1.6rem"}),l.a.createElement(u.l.Item,null,l.a.createElement("p",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" t-34 l-48 t-title"},S.title||"-"),l.a.createElement("p",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" t-28 l-40 t-sub mt-4"},"共 ",j||"-"," 件商品"))),l.a.createElement(u.l,{className:"".concat(V,"__wrap-extra")},l.a.createElement(u.l.Item,null,s&&l.a.createElement("p",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" t-28 l-40 t-sub mt-4"},O>parseInt(_.a.getValue(v,"待发货"))?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])},"物流单号："),l.a.createElement("span",{onClick:function(){return window.location="https://www.kuaidi100.com/all/zt.shtml?mscomnu=".concat(J)},className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])+" link t-primary user-select"},J)):l.a.createElement("span",{className:c.a.dynamic([["2545482754",[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]],["1146484642",[w.a.wind,w.a.color_primary]]])},"物流单号待更新"))),l.a.createElement(u.c,{type:"primary",size:"sm",inline:!0,ghost:!0,radius:!0,onClick:function(){return _.a.router.push("/person/help/service")}},"联系客服"))),s&&l.a.createElement(u.m.Button,{disabled:!q,onClick:o.page.showPayConfirm},r),s&&l.a.createElement(u.y,{show:n,dataType:z,amount:A,onClose:o.page.hidePayConfirm,onConfirm:o.do.payFee}),l.a.createElement(c.a,{styleId:"2545482754",css:".".concat(V,"__wrap-address{height:1.5rem;padding:0 ").concat(w.a.wind,";background:").concat(w.a.color_theme,";}.").concat(V,"__wrap-goods{padding:").concat(w.a.wind,";background:").concat(w.a.color_bg,";}.").concat(V,"__thumb{background-color:").concat(w.a.color_theme," !important;}.").concat(V,"__wrap-extra{padding:").concat(w.a.wind,";background:").concat(w.a.color_theme,";}"),dynamic:[V,w.a.wind,w.a.color_theme,V,w.a.wind,w.a.color_bg,V,w.a.color_theme,V,w.a.wind,w.a.color_theme]}),l.a.createElement(c.a,{styleId:"1146484642",css:".wrap-top.__jsx-style-dynamic-selector{padding:0.4rem 0.64rem 1.8rem;background:linear-gradient( -90deg, rgba(255,101,101,1) 0%, rgba(255,125,66,1) 100% );}.wrap-content.__jsx-style-dynamic-selector{margin:-1.5rem ".concat(w.a.wind," 0;box-shadow:0 0.04rem 0.08rem rgba(0,0,0,0.08);border-radius:0.08rem;overflow:hidden;}.link.__jsx-style-dynamic-selector{border-bottom:0.01rem solid ").concat(w.a.color_primary,";}"),dynamic:[w.a.wind,w.a.color_primary]}))};G.contextTypes={$:d.a.object};var J=Object(s.c)(R)(Object(s.d)(G));a.default=J},866:function(e,a,t){__NEXT_REGISTER_PAGE("/person/event/prize",function(){return e.exports=t(1036),{page:e.exports.default}})}},[[866,1,0]]]);