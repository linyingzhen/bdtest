(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1032:function(e,t,a){"use strict";a.r(t);var r,n,i=a(1),o=a.n(i),l=a(6),u=a.n(l),c=a(5),s=a(10),b=a(3),m=a(7),f=a(4),d=[{label:"本汀旗舰店（天猫）",value:"本汀旗舰店（天猫）"},{label:"本汀渔具旗舰店（京东）",value:"本汀渔具旗舰店（京东）"},{label:"本汀麦酥专卖店（天猫）",value:"本汀麦酥专卖店（天猫）"},{label:"本汀旗舰店（苏宁）",value:"本汀旗舰店（苏宁）"},{label:"西门町台客名品（淘宝）",value:"西门町台客名品（淘宝）"},{label:"唯品会",value:"唯品会"},{label:"本汀官网",value:"本汀官网"}],p=a(9),v=a.n(p),h=a(11),y=a(12),_=a(15),k=a(13);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){O(e,t,a[t])})}return e}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function E(e,t,a,r,n,i,o){try{var l=e[i](o),u=l.value}catch(e){return void a(e)}l.done?t(u):Promise.resolve(u).then(r,n)}function S(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){E(i,r,n,o,l,"next",e)}function l(e){E(i,r,n,o,l,"throw",e)}o(void 0)})}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j,P,x,z,D,V,q=(r=function(e){function t(){var e,a,r,i,o,l,u,c,s,b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var m=arguments.length,d=new Array(m),p=0;p<m;p++)d[p]=arguments[p];return r=this,i=(e=N(t)).call.apply(e,[this].concat(d)),a=!i||"object"!==w(i)&&"function"!=typeof i?T(r):i,o=a,l="state",u=n,c=T(T(a)),u&&Object.defineProperty(o,l,{enumerable:u.enumerable,configurable:u.configurable,writable:u.writable,value:u.initializer?u.initializer.call(c):void 0}),a.fetch={config:{static:["userInfo"],one:["eventDetail"],every:["bank","detail"]},userInfo:(s=S(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.fetchUserInfo(),e.t0=a,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)}),bank:function(){return a.fetchThenSetState("get_user_bank_info","bank")},eventDetail:function(){var e=a.params.params.id;return a.fetchThenSetState("get_event_detail","eventDetail",{tbId:e})},detail:function(){var e=a.params.params.id;return a.fetchThenSetState("get_event_cash_back_detail","detail",{perateId:e})}},a.do={checkOrder:function(e){e&&_.a.P("do_event_check-order-is-exist",{orderNumber:e})},submit:(b=S(v.a.mark(function e(t){var r,n,i,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.params.params.id,n=a.getState("detail"),i=n.createTime,(o=g({},t)).orderTime=f.a.formatDate(o.orderTime),delete o.bankName,delete o.branchName,delete o.bankNumber,delete o.userName,!i){e.next=14;break}return e.next=11,_.a.P("do_event_cash_back_update",g({},o,{perateId:r}));case 11:f.a.light("重新提交成功"),e.next=17;break;case 14:return e.next=16,_.a.P("do_event_cash_back_add",g({},o,{perateId:r}));case 16:f.a.light("提交成功");case 17:f.a.router.back();case 18:case"end":return e.stop()}},e,this)})),function(e){return b.apply(this,arguments)})},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,y["a"]),t}(),j=r.prototype,P="state",x=[h.k],z={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({userInfo:{},bank:{},eventDetail:{},detail:{}})}},V={},Object.keys(z).forEach(function(e){V[e]=z[e]}),V.enumerable=!!V.enumerable,V.configurable=!!V.configurable,("value"in V||V.initializer)&&(V.writable=!0),V=x.slice().reverse().reduce(function(e,t){return t(j,P,e)||e},V),D&&void 0!==V.initializer&&(V.value=V.initializer?V.initializer.call(D):void 0,V.initializer=void 0),void 0===V.initializer&&(Object.defineProperty(j,P,V),V=null),n=V,r),R=function(e,t){var a=t.$,r=e.form,n=e.onSubmit,i=a.getState("detail"),l=i.orderTime,u=i.shop,c=i.orderNumber,p=i.createTime,v=i._loaded,h=a.getState("bank"),y=h.bankcardId,_=h.bankName,k=h.branchName,w=h.bankNo,g=h.cardUsername,O=h._loaded,E=a.getState("eventDetail").tosTime,S=a.getState("userInfo").ww;if(!v||!O)return null;var N=f.a.getTimestamp(),I=f.a.toTimestamp(E),T=r.getFieldValue("orderNumber"),j="工商银行"!=_&&"农业银行"!=_&&"中国银行"!=_&&"建设银行"!=_;return o.a.createElement(s.k,{title:"提交资料"},o.a.createElement(b.m,{className:"mt-d",form:r,label:!0,renderHeader:"订单相关信息"},o.a.createElement(b.m.DatePicker,{name:"orderTime",label:"订单日期",initialValue:l||f.a.date("Y-m-d",N),option:m.a.rules.required,align:"left"}),o.a.createElement(b.m.Picker,{name:"shop",label:"订单店铺",initialValue:u?[u]:[d[0].value],option:m.a.rules.required,data:d}),o.a.createElement(b.m.Input,{name:"orderNumber",label:"订单号",initialValue:c,option:m.a.rules.required,type:"number",onBlur:c===T?void 0:function(){return a.do.checkOrder(T)}}),o.a.createElement(b.m.Input,{name:"ww",label:"旺旺ID",initialValue:S,option:m.a.rules.required,disabled:!0,extra:!S&&o.a.createElement(b.t,{className:"t-primary",href:m.a.__ROUTER__.ww},"去绑定")})),o.a.createElement(b.m,{className:"mt-d",form:r,label:!0,renderHeader:"银行卡信息"},o.a.createElement(b.m.Input,{name:"bankName",label:"银行名称",initialValue:_,option:m.a.rules.required,disabled:!0,extra:!y&&o.a.createElement(b.t,{className:"t-primary",href:m.a.__ROUTER__.bank},"去绑定")}),j&&o.a.createElement(b.m.Input,{name:"branchName",label:"支行名称",initialValue:k,option:m.a.rules.required,disabled:!0}),o.a.createElement(b.m.Input,{name:"bankNumber",label:"银行卡号",initialValue:w,option:m.a.rules.gen("bank"),type:"number",disabled:!0}),o.a.createElement(b.m.Input,{name:"userName",label:"持卡人",initialValue:g,option:m.a.rules.required,disabled:!0})),N>I?o.a.createElement(b.m.Button,{onClick:function(){return n(r,a.do.submit)}},p?"重新提交":"提交"):o.a.createElement(b.m.Button,{disabled:!0},"报名成功，",E,"后才能提交"))};R.contextTypes={$:u.a.object};var U=Object(c.c)(q)(Object(c.a)(Object(c.d)(R)));t.default=U},835:function(e,t,a){__NEXT_REGISTER_PAGE("/event/cashback/submit",function(){return e.exports=a(1032),{page:e.exports.default}})}},[[835,1,0]]]);