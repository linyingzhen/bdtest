(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{939:function(e,t,a){__NEXT_REGISTER_PAGE("/shop/wabao/detail",function(){return e.exports=a(962),{page:e.exports.default}})},962:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(5),i=a(10),o=a(0),l=a(37),s=a.n(l),m=a(2),u=a.n(m),d=a(6),p=a.n(d),y=a(8),f=a.n(y),h=a(3),b=a(4),g=function(e,t){var a=t.$,n=e.className,c=a.getState("_imgView"),i=c.show,l=c.index,s=a.getState("detail").imgs,m=String(void 0===s?"":s).split(",").filter(function(e){return""!==e}).map(function(e){return b.a.getAppImgUrl(e,"scale")});return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.d,{className:f()("style-652435",n,"".concat("style-652435","__carousel")),height:"4.8rem",data:m.map(function(e){return{src:e}}),onImgClick:a.page.showImgView}),!!m.length&&r.a.createElement(h.r,{show:i,data:m,current:l,hideOrigin:!0,onClose:a.page.hideImgView}),r.a.createElement(u.a,{styleId:"664890561",css:".".concat("style-652435","__carousel{display:inline-block;width:4.8rem;height:4.8rem;background-color:").concat(o.a.color_bg,";border:0.12rem solid ").concat(o.a.color_theme,";border-radius:0.06rem;box-shadow:0 0.08rem 0.26rem 0 rgba(20,62,109,0.5);overflow:hidden;}"),dynamic:["style-652435",o.a.color_bg,o.a.color_theme]}))};g.contextTypes={$:p.a.object};var E=Object(c.d)(g),v=b.a.cdn("/static/images/src/shop/guess/Detail"),_=function(e,t){var a=t.$,n=e.className,c=a.getState("detail"),i=c.endTime,o=c.perLimit,l=void 0===o?"-":o,m=c.perVipLimit,d=c.point,p=c.perTotal,y=c._loaded;return r.a.createElement("div",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" "+(f()("style-115855",n,"t-c")||"")},r.a.createElement("div",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" bg"},r.a.createElement("div",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" time"},y&&r.a.createElement(r.a.Fragment,null,a.isEnd?r.a.createElement("p",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" t-24 l-34 t-c t-void"},"挖宝已结束"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" t-24 l-34 t-c t-void"},"距离结束还有"),r.a.createElement(h.f,{className:"".concat("style-115855","__count-down mt-24"),beginTime:Number(i)})))),r.a.createElement(E,{className:"mt-40"}),r.a.createElement("p",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" t-24 l-34 t-void mt-32"},r.a.createElement("span",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])},"已有"),r.a.createElement("span",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" ml-xs mr-xs"},p||"-"),r.a.createElement("span",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])},"人次参与，每人最多参与"),r.a.createElement("span",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" t-event ml-xs mr-xs"},l),r.a.createElement("span",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])},"人次")),y&&r.a.createElement(h.c,{className:"mt-32",type:"event",disabled:a.isEnd,onClick:function(){return b.a.checkLogin(function(){if(y){for(var e=a.getState().tempCount,t=1==a.getState("userInfo").vip?parseInt(m)-e:parseInt(l)-e,n=[],c=function(e){n.push({text:"挖".concat(e,"下"),onPress:function(){return a.page.showPayConfirm(e)}})},i=1;i<t+1;i+=1)c(i);n.push({text:r.a.createElement("span",{className:u.a.dynamic([["3530303876",["style-115855","style-115855","style-115855"]],["872457071",[v]]])+" t-sub"},"取消")}),s.a.alert("挖宝","普通用户可参加".concat(l,"次，VIP用户").concat(m,"次"),n)}})}},a.isEnd?"挖宝结束":"支付 ".concat(d,"积分 立即挖宝"))),r.a.createElement(u.a,{styleId:"3530303876",css:".".concat("style-115855","__count-down{display:inline-block;}.").concat("style-115855","__count-down .item{display:inline-block;width:auto !important;height:auto !important;padding:0.24rem 0.18rem !important;line-height:0.66rem !important;font-size:0.48rem !important;font-weight:bold;border-radius:0.06rem !important;}.").concat("style-115855","__count-down .split{margin:0 0.08rem !important;font-size:0.48rem !important;}"),dynamic:["style-115855","style-115855","style-115855"]}),r.a.createElement(u.a,{styleId:"872457071",css:".style-115855.__jsx-style-dynamic-selector{position:relative;margin-top:-1rem;background:linear-gradient( 90deg, rgba(87,226,255,1) 0%, rgba(66,165,255,1) 100% );}.bg.__jsx-style-dynamic-selector{min-height:9.24rem;padding:1.4rem 0.8rem 0.4rem;background-image:url(".concat(v,"/bg.png);background-repeat:no-repeat;background-size:initial;background-position:bottom right;}.time.__jsx-style-dynamic-selector{min-height:0.34rem;}"),dynamic:[v]}))};_.contextTypes={$:p.a.object};var w=Object(c.d)(_),N=function(e,t){var a=e.className,n=t.$.getState("detail"),c=n.perLimit,o=n.perVipLimit;return r.a.createElement(i.o,{className:f()("style-209773",a),title:"规则",showNum:!0,content:["挖宝时间结束前，每个用户可以使用相应的积分进行挖宝，挖宝号顺序发放","到达截止时间后，等待当天 039期 重庆时时彩出奖，计算“幸运号”，拥有“幸运号”者即可获得此商品","计算公式：{(时间值之和 + 重庆时时彩) / 所需人次}取余数 + 初始号","每期商品每个用户能参加".concat(c,"次，VIP用户可以参加").concat(o,"次")]})};N.contextTypes={$:p.a.object};var I=Object(c.d)(N),S=function(e,t){var a=t.$,n=e.className,c=a.getState("detail"),l=c.oncebuyId,s=c.niname,m=c.faceImg,d=c.userId,p=c.vip,y=c.buypernum,b=c.winNo;return b?r.a.createElement("div",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" "+(f()("style-163070",n)||"")},r.a.createElement(i.i,{title:"挖宝达人",isList:!0,linkExtra:"计算详情",href:"/shop/wabao/calculate?id=".concat(l),as:"/shop/wabao/calculate/".concat(l)}),r.a.createElement(h.u.Item,{thumb:r.a.createElement(i.c,{userId:d,img:m,vip:p})},r.a.createElement(h.l,null,r.a.createElement(h.l.Item,null,r.a.createElement("p",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" t-30 l-44"},s),r.a.createElement("p",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" t-24 l-36"},r.a.createElement("span",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" t-sub"},"幸运号"),r.a.createElement("span",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" t-danger"},b))),r.a.createElement("p",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" t-24 l-32 t-sub"},r.a.createElement("span",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])},"共参与"),r.a.createElement("span",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])+" t-primary ml-xs mr-xs"},y),r.a.createElement("span",{className:u.a.dynamic([["2844576662",[o.a.color_theme]]])},"人次")))),r.a.createElement(u.a,{styleId:"2844576662",css:".style-163070.__jsx-style-dynamic-selector{background:".concat(o.a.color_theme,";}"),dynamic:[o.a.color_theme]})):null};S.contextTypes={$:p.a.object};var x=Object(c.d)(S),j=Object(c.d)(function(e){var t=e.userId,a=e.niname,n=e.faceImg,c=e.vip,o=e.createTime,l=e.buypernum;return r.a.createElement(h.u.Item,{thumb:r.a.createElement(i.c,{userId:t,img:n,vip:c})},r.a.createElement(h.l,null,r.a.createElement(h.l.Item,null,r.a.createElement("p",{className:"t-30 l-44"},a),r.a.createElement("p",{className:"t-24 l-36 t-sub"},b.a.date("m-d H:i:s",o))),r.a.createElement("p",{className:"t-24 l-32 t-sub"},r.a.createElement("span",null,"参与"),r.a.createElement("span",{className:"t-primary ml-xs mr-xs"},l),r.a.createElement("span",null,"人次"))))}),k=function(e,t){var a=t.$,n=e.className,c=a.getState("record");return r.a.createElement("div",{className:f()("style-416865",n)},r.a.createElement(i.i,{title:"挖宝记录",isList:!0}),r.a.createElement(h.v,{data:c,renderRow:function(e){return r.a.createElement(j,e)},onEndReached:a.fetch.record}))};k.contextTypes={$:p.a.object};var C=Object(c.d)(k),T=function(e,t){var a=t.$;if(a.isEnd)return null;var n=a.getState("_payConfirm"),c=n.show,i=n.value,o=a.getState("detail").point;return r.a.createElement(h.y,{show:c,type:"nido",amount:i*parseInt(o),onClose:a.page.hidePayConfirm,onConfirm:a.do.wabao})};T.contextTypes={$:p.a.object};var O,P,z=Object(c.d)(T),V=a(9),$=a.n(V),L=a(11),R=a(12),A=a(7),F=a(13),J=a(15);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,a,n,r,c,i){try{var o=e[c](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(n,r)}function D(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var c=e.apply(t,a);function i(e){U(c,n,r,i,o,"next",e)}function o(e){U(c,n,r,i,o,"throw",e)}i(void 0)})}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Y,q,B,K,Q,W,Z=(O=function(e){function t(){var e,a,n,r,c,i,o,l,s,m,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var d=arguments.length,p=new Array(d),y=0;y<d;y++)p[y]=arguments[y];return n=this,r=(e=H(t)).call.apply(e,[this].concat(p)),a=!r||"object"!==G(r)&&"function"!=typeof r?X(n):r,c=a,i="state",o=P,l=X(X(a)),o&&Object.defineProperty(c,i,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(l):void 0}),a.fetch={config:{static:["userInfo"],one:["detail"],update:["record"]},userInfo:(m=D($.a.mark(function e(){var t;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=F.a.fetchUserInfo(),e.t0=a,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return m.apply(this,arguments)}),detail:(s=D($.a.mark(function e(){var t;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.params.params.id,e.abrupt("return",a.fetchThenSetState("get_indiana_info","detail",{oncebuyId:t}));case 2:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)}),record:function(e){var t=a.params.params.id;return a.fetchListThenSetState("get_indiana_list","record",{_:{search:{oncebuyId:t,buyState:[1,4]}}},e,"createTime")}},a.computed={isEnd:function(){var e=a.getState("detail"),t=e.endTime;return!e._loaded||b.a.getTimestamp()>t}},a.do={wabao:(u=D($.a.mark(function e(){var t,n,r;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.params.params.id,n=a.getState("_payConfirm"),r=n.value,e.next=4,J.a.P("do_indiana",{buypernum:r,oncebuyId:t});case 4:b.a.light("参与成功"),a.page.hidePayConfirm(),a.page.setTempCount(r),a.fetch.detail(),a.fetch.record(!0);case 9:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},a.page={showImgView:function(){return a.setState({show:!0},"_imgView")},hideImgView:function(){return a.setState({show:!1},"_imgView")},showPayConfirm:function(e){a.setState({show:!0,value:e},"_payConfirm")},hidePayConfirm:function(){return a.setState({show:!1,value:""},"_payConfirm")},setTempCount:function(e){var t=a.getState().tempCount;a.setState({tempCount:t+e})}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,R["a"]),t}(),Y=O.prototype,q="state",B=[L.k],K={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_payConfirm:{show:!1,value:""},_imgView:{show:!1,index:0},state:{tempCount:0},userInfo:F.a.toJS("userInfo"),detail:{},record:A.a.__EMPTY__})}},W={},Object.keys(K).forEach(function(e){W[e]=K[e]}),W.enumerable=!!W.enumerable,W.configurable=!!W.configurable,("value"in W||W.initializer)&&(W.writable=!0),W=B.slice().reverse().reduce(function(e,t){return t(Y,q,e)||e},W),Q&&void 0!==W.initializer&&(W.value=W.initializer?W.initializer.call(Q):void 0,W.initializer=void 0),void 0===W.initializer&&(Object.defineProperty(Y,q,W),W=null),P=W,O),ee=Object(c.c)(Z)(function(){return r.a.createElement(i.k,{title:"积分挖宝",bd:null,headerStyle:{color:o.a.color_theme,background:"transparent"}},r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(x,{className:"mt-d"}),r.a.createElement(C,{className:"mt-d"}),r.a.createElement(z,null))});t.default=ee}},[[939,1,0]]]);