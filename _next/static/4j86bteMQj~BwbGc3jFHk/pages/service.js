(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1040:function(e,t,n){"use strict";n.r(t);var r,a,o=n(1),i=n.n(o),l=n(6),c=n.n(l),u=n(5),s=n(3),p=n(10),f=n(7),m=n(13),b=n(9),d=n.n(b),y=n(11),h=n(12),v=n(15),g=n(4);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function _(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){E(o,r,a,i,l,"next",e)}function l(e){E(o,r,a,i,l,"throw",e)}i(void 0)})}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var P,j,T,x,N,C,I,z,q,R=(r=function(e){function t(){var e,n,r,o,i,l,c,u,s,p,f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var b=arguments.length,y=new Array(b),h=0;h<b;h++)y[h]=arguments[h];return r=this,o=(e=O(t)).call.apply(e,[this].concat(y)),n=!o||"object"!==w(o)&&"function"!=typeof o?S(r):o,i=n,l="state",c=a,u=S(S(n)),c&&Object.defineProperty(i,l,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(u):void 0}),n.do={loginThenBack:(f=_(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m.a.setJump(),g.a.router.push("/login");case 2:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)}),registerThenSubmit:(p=_(d.a.mark(function e(t){var r,a,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.mobile,a=t.code,o=t.pwd,e.next=3,v.a.P("do_user_register",{mobile:r,code:a,pwd:o});case 3:return e.next=5,m.a.doLoginByPwd({account:r,pwd:o});case 5:n.do.submit(t);case 6:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)}),submit:(s=_(d.a.mark(function e(t){var n,r,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.shopName,r=t.orderNo,a=t.cardImg,e.next=3,v.a.P("do_consumer_add",{shopName:n,orderNo:r,cardImg:a});case 3:g.a.router.push("/service/success");case 4:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})},n.page={onTabClick:function(e,t){n.setState({page:t},"_tabs")}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,h["a"]),t}(),P=r.prototype,j="state",T=[y.k],x={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_tabs:{page:0}})}},C={},Object.keys(x).forEach(function(e){C[e]=x[e]}),C.enumerable=!!C.enumerable,C.configurable=!!C.configurable,("value"in C||C.initializer)&&(C.writable=!0),C=T.slice().reverse().reduce(function(e,t){return t(P,j,e)||e},C),N&&void 0!==C.initializer&&(C.value=C.initializer?C.initializer.call(N):void 0,C.initializer=void 0),void 0===C.initializer&&(Object.defineProperty(P,j,C),C=null),a=C,r),B=[{title:"线上"},{title:"实体店"}],F=[{label:"天猫：本汀旗舰店",value:"天猫：本汀旗舰店"},{label:"天猫：本汀麦酥专卖店",value:"天猫：本汀麦酥专卖店"},{label:"淘宝：西门町台客名品",value:"淘宝：西门町台客名品"},{label:"京东：本汀渔具旗舰店",value:"京东：本汀渔具旗舰店"},{label:"苏宁：本汀旗舰店",value:"苏宁：本汀旗舰店"},{label:"唯品会",value:"唯品会"}];function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G="style-150941",H=Object(u.c)(R)(I=Object(u.a)(I=Object(u.d)((q=z=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=J(this,(e=L(t)).call.apply(e,[this].concat(a)))).handleUploadPic=function(){document.querySelector(".".concat(G," input[type=file]")).click()},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,i.a.Component),n=t,(r=[{key:"renderRegister",value:function(){if(!m.a.getState("mounted"))return null;var e=this.context.$,t=this.props.form,n=!0;return f.a.__CLIENT__&&(n=!!m.a.getState("tk")),n?null:i.a.createElement(s.m,{id:"register",className:"mb-d",label:!0,form:t,renderHeader:function(){return i.a.createElement("p",{className:"t-28 l-40 t-sub"},i.a.createElement("span",null,"需先登录，"),i.a.createElement("span",{className:"t-primary",onClick:e.do.loginThenBack},"点击登录"),i.a.createElement("span",null,"或在下方一并注册"))}},i.a.createElement(s.m.Input,{label:"手机号",name:"mobile",option:f.a.rules.gen("mobile"),type:"phone",updatePlaceholder:!1}),i.a.createElement(s.m.Captcha,{label:"验证码",name:"code",option:f.a.rules.required,placeholder:"6位短信验证码",updatePlaceholder:!1,smsType:"register"}),i.a.createElement(s.m.Input,{label:"密码",name:"pwd",option:f.a.rules.required,placeholder:"8-16位密码",type:"password",updatePlaceholder:!1}))}},{key:"renderForm",value:function(){var e=this.props,t=e.form,n=e.onSubmit,r=this.context.$,a=1===r.getState("_tabs").page,o=!0;return f.a.__CLIENT__&&(o=!!m.a.getState("tk")),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.m,{label:!0,form:t,renderHeader:function(){return i.a.createElement("p",{className:"t-28 l-40 t-sub"},"审核通过后，电子售后凭证和积分将会在7天内发放")}},!a&&i.a.createElement(s.m.Picker,{label:"店铺",name:"shopName",initialValue:[F[0].value],option:f.a.rules.required,data:F}),!a&&i.a.createElement(s.m.Input,{label:"订单号",type:"number",name:"orderNo",option:f.a.rules.required}),a&&i.a.createElement(s.m.Upload,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"t-34 l-48"},"上传图片"),i.a.createElement("p",{className:"t-24 l-34 t-danger"},"请把实体店铺售后卡拍照并上传")),name:"cardImg",extra:i.a.createElement("span",{onClick:this.handleUploadPic},"选择"),option:f.a.rules.required}),i.a.createElement(s.m.Input,{label:"防伪码",name:"authCode",placeholder:"选填，可加快审核速度"})),i.a.createElement(s.m.Button,{type:"main",onClick:function(){n(t,o?r.do.submit:r.do.registerThenSubmit)}},"提交"))}},{key:"render",value:function(){var e=this.context.$,t=e.getState("_tabs").page;return i.a.createElement(p.k,{className:G,title:"售后中心"},i.a.createElement(s.D,{tabs:B,page:t,align:"center",onTabClick:e.page.onTabClick},i.a.createElement("div",null,this.renderRegister(),this.renderForm())))}}])&&A(n.prototype,r),a&&A(n,a),t}(),z.contextTypes={$:c.a.object},I=q))||I)||I)||I;t.default=H},925:function(e,t,n){__NEXT_REGISTER_PAGE("/service",function(){return e.exports=n(1040),{page:e.exports.default}})}},[[925,1,0]]]);