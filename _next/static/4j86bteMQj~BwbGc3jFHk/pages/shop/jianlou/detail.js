(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{38:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(1),i=a.n(o),c=a(8),l=a.n(c),s=a(5),m=a(3),u=a(4),d=a(0);t.a=Object(s.d)(function(e){var t,a,n,o=e.tag,c=e.nowTime,s=e.beginTime,f=e.endTime,p=e.className;switch(o){case"预告中":t=s,a="倒数",n="main";break;case"进行中":t=f,a="剩余",n="primary";break;case"已结束":n="default"}return i.a.createElement("div",{className:r.a.dynamic([["1364954403",[d.a.color_inner]],["3293149964",[d.a.color_void,d.a.color_main,d.a.color_primary,d.a.color_sub]]])},"预告中"===o&&i.a.createElement(m.l,{className:l()("style-110292",p)},i.a.createElement("p",{className:r.a.dynamic([["1364954403",[d.a.color_inner]],["3293149964",[d.a.color_void,d.a.color_main,d.a.color_primary,d.a.color_sub]]])+" "+"tag tag-".concat(n)},"预告中"),i.a.createElement(m.l.Item,{className:"t-24 l-34"},u.a.date("m-d H:i:s",s)," 开始")),"进行中"===o&&i.a.createElement(m.l,{className:l()("style-110292",p,"t-sub")},i.a.createElement("p",{className:r.a.dynamic([["1364954403",[d.a.color_inner]],["3293149964",[d.a.color_void,d.a.color_main,d.a.color_primary,d.a.color_sub]]])+" "+"tag tag-".concat(n)},"进行中"),i.a.createElement(m.l.Item,null,i.a.createElement(m.f,{className:"t-24 l-34",theme:!1,left:a,now:Number(c),beginTime:Number(t)}))),"已结束"===o&&i.a.createElement("p",{className:r.a.dynamic([["1364954403",[d.a.color_inner]],["3293149964",[d.a.color_void,d.a.color_main,d.a.color_primary,d.a.color_sub]]])+" "+(l()("tag tag-".concat(n),p)||"")},"已结束"),i.a.createElement(r.a,{styleId:"1364954403",css:".style-110292{background:".concat(d.a.color_inner,";}"),dynamic:[d.a.color_inner]}),i.a.createElement(r.a,{styleId:"3293149964",css:".tag.__jsx-style-dynamic-selector{display:inline-block;width:0.96rem;height:0.56rem;font-size:0.24rem;line-height:0.56rem;text-align:center;color:".concat(d.a.color_void,";}.tag-main.__jsx-style-dynamic-selector{background:").concat(d.a.color_main,";}.tag-primary.__jsx-style-dynamic-selector{background:").concat(d.a.color_primary,";}.tag-default.__jsx-style-dynamic-selector{background:").concat(d.a.color_sub,";}"),dynamic:[d.a.color_void,d.a.color_main,d.a.color_primary,d.a.color_sub]}))})},934:function(e,t,a){__NEXT_REGISTER_PAGE("/shop/jianlou/detail",function(){return e.exports=a(973),{page:e.exports.default}})},973:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(6),i=a.n(o),c=a(5),l=a(10),s=a(3),m=a(4),u=a(0);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e,t){var a=t.$,n=a.getState("_imgView"),o=n.show,i=n.index,c=a.getState("detail"),l=c.imgs,f=void 0===l?"":l,p=c.imglist,y=[f].concat(d((void 0===p?"":p).split(","))).filter(function(e){return""!==e}).map(function(e){return m.a.getAppImgUrl(e,"scale")});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.d,{data:y.map(function(e){return{src:e}}),height:"96vw",style:{backgroundColor:u.a.color_theme},onImgClick:a.page.showImgView}),!!y.length&&r.a.createElement(s.r,{show:o,data:y,current:i,hideOrigin:!0,onClose:a.page.hideImgView}))};f.contextTypes={$:i.a.object};var p=Object(c.d)(f),y=a(2),b=a.n(y),h=a(38),g=function(e,t){var a=t.$,n=e.tag,o=a.getState("detail"),i=o.title,c=o.property,l=o.nowTime,s=o.beginTime,m=o.endTime,d=o.salePrice,f=o._loaded,p=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"t-34 l-34 t-danger ml-xs"},parseFloat(d)),r.a.createElement("span",{className:"t-danger mr-xs"},"金币"));return r.a.createElement("div",{className:b.a.dynamic([["3367759151",[u.a.wind,u.a.color_theme]]])+" style-209462"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:b.a.dynamic([["3367759151",[u.a.wind,u.a.color_theme]]])+" t-34 l-48"},i),c&&r.a.createElement("p",{className:b.a.dynamic([["3367759151",[u.a.wind,u.a.color_theme]]])+" t-24 l-32 t-sub mt-4"},c),r.a.createElement(h.a,{className:"mt-24",tag:n,nowTime:l,beginTime:s,endTime:m,onEnd:function(){return setTimeout(function(){a.fetch.detail(),a.fetch.record(!0)},1e3)}}),r.a.createElement("p",{className:b.a.dynamic([["3367759151",[u.a.wind,u.a.color_theme]]])+" t-22 l-32 mt-24"},r.a.createElement("span",{className:b.a.dynamic([["3367759151",[u.a.wind,u.a.color_theme]]])+" t-sub"},"捡漏价"),p)),r.a.createElement(b.a,{styleId:"3367759151",css:".style-209462.__jsx-style-dynamic-selector{min-height:2.54rem;padding:0.32rem ".concat(u.a.wind,";background:").concat(u.a.color_theme,";}"),dynamic:[u.a.wind,u.a.color_theme]}))};g.contextTypes={$:i.a.object};var _=Object(c.d)(g),w=a(8),v=a.n(w),E=Object(c.d)(function(e){var t=e.userId,a=e.faceImg,n=e.niname,o=e.createTime;return r.a.createElement(s.u.Item,{thumb:r.a.createElement(l.c,{userId:t,img:a})},r.a.createElement(s.l,null,r.a.createElement(s.l.Item,null,r.a.createElement("p",{className:"t-30 l-44"},n),r.a.createElement("p",{className:"t-24 l-36 t-sub"},m.a.date("m-d H:i:s",o))),r.a.createElement("p",{className:"t-30 l-44 t-danger"},"成功捡漏")))}),j=function(e,t){var a=t.$,n=e.className,o=a.getState("record");return r.a.createElement("div",{className:v()("style-545566",n)},r.a.createElement(l.i,{title:"参与记录",isList:!!o.list.length}),r.a.createElement(s.v,{data:o,renderRow:function(e){return r.a.createElement(E,e)},onEndReached:a.fetch.record}))};j.contextTypes={$:i.a.object};var N=Object(c.d)(j),O=function(e,t){var a=t.$,n=e.tag,o=a.getState("detail").perNum;return"预告中"===n?r.a.createElement("div",{className:"tool-fixed"},r.a.createElement(s.c,{type:"primary"},"未开始")):"进行中"===n?r.a.createElement("div",{className:"tool-fixed"},r.a.createElement(s.c,{type:"primary",onClick:function(){return m.a.checkLogin(a.page.showPayConfirm)}},"立即捡漏")):r.a.createElement("div",{className:"tool-fixed"},r.a.createElement(s.c,{type:"primary"},0==o?"已抢光":"已结束"))};O.contextTypes={$:i.a.object};var S,T,x,P=Object(c.d)(O);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A,V,R=Object(c.d)((x=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,$(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r.a.Component),a=t,(n=[{key:"componentWillUnmount",value:function(){this.context.$.page.hidePayConfirm()}},{key:"render",value:function(){if("进行中"!==this.props.tag)return null;var e=this.context.$,t=e.getState("_payConfirm").show,a=e.getState("detail").salePrice;return r.a.createElement(s.y,{show:t,type:"coin",amount:a,onClose:e.page.hidePayConfirm,onConfirm:e.do.miaosha})}}])&&k(a.prototype,n),o&&k(a,o),t}(),T.contextTypes={$:i.a.object},S=x))||S,F=a(9),L=a.n(F),G=a(11),H=a(12),J=a(15),M=a(7);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,a,n,r,o,i){try{var c=e[o](i),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(n,r)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var B,D,K,Q,Z,ee,te=(A=function(e){function t(){var e,a,n,r,o,i,c,l,s,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var d=arguments.length,f=new Array(d),p=0;p<d;p++)f[p]=arguments[p];return n=this,r=(e=X(t)).call.apply(e,[this].concat(f)),a=!r||"object"!==U(r)&&"function"!=typeof r?q(n):r,o=a,i="state",c=V,l=q(q(a)),c&&Object.defineProperty(o,i,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(l):void 0}),a.fetch={config:{update:["detail","record"]},detail:function(){var e=a.params.params.id;return a.fetchThenSetState("get_shop_miaosha-detail","detail",{panicId:e})},record:function(e){var t=a.params.params.id;return a.fetchListThenSetState("get_shop_miaosha-record","record",{_:{limit:M.a.__LIMIT__,search:{panicId:t}}},e)}},a.do={miaosha:(s=L.a.mark(function e(){var t,n,r,o;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.getState("detail"),n=t.panicId,e.next=3,J.a.P("do_shop_miaosha",{panicId:n});case 3:r=e.sent,o=r.orderNo,a.page.hidePayConfirm(),a.fetch.detail(),a.fetch.record(!0),m.a.router.push("/pay/result?id=".concat(o),"/pay/result/".concat(o));case 9:case"end":return e.stop()}},e,this)}),u=function(){var e=this,t=arguments;return new Promise(function(a,n){var r=s.apply(e,t);function o(e){W(r,a,n,o,i,"next",e)}function i(e){W(r,a,n,o,i,"throw",e)}o(void 0)})},function(){return u.apply(this,arguments)})},a.page={showImgView:function(e){return a.setState({show:!0,index:e},"_imgView")},hideImgView:function(){return a.setState({show:!1},"_imgView")},showPayConfirm:function(){return a.setState({show:!0},"_payConfirm")},hidePayConfirm:function(){return a.setState({show:!1},"_payConfirm")}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,H["a"]),t}(),B=A.prototype,D="state",K=[G.k],Q={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_payConfirm:{show:!1,amount:0,addPrice:0},_imgView:{show:!1,index:0},detail:{},record:M.a.__EMPTY__})}},ee={},Object.keys(Q).forEach(function(e){ee[e]=Q[e]}),ee.enumerable=!!ee.enumerable,ee.configurable=!!ee.configurable,("value"in ee||ee.initializer)&&(ee.writable=!0),ee=K.slice().reverse().reduce(function(e,t){return t(B,D,e)||e},ee),Z&&void 0!==ee.initializer&&(ee.value=ee.initializer?ee.initializer.call(Z):void 0,ee.initializer=void 0),void 0===ee.initializer&&(Object.defineProperty(B,D,ee),ee=null),V=ee,A),ae=function(e,t){var a,n,o,i=t.$.getState("detail"),c=i.nowTime,s=i.beginTime,m=i.endTime,u=i.perNum,d=i.explain,f=i._loaded,y=(a=m,o=u,(n=c)<=s?"预告中":!o||a&&n>a?"已结束":"进行中");return r.a.createElement(l.k,{title:"捡漏详情"},r.a.createElement(p,null),r.a.createElement(_,{tag:y}),d&&r.a.createElement(l.o,{className:"mt-d",title:"说明",showNum:!0,content:d.split("\n")}),r.a.createElement(N,{className:"mt-d"}),f&&r.a.createElement(P,{tag:y}),f&&r.a.createElement(R,{tag:y}))};ae.contextTypes={$:i.a.object};var ne=Object(c.c)(te)(Object(c.d)(ae));t.default=ne}},[[934,1,0]]]);