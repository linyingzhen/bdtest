(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{903:function(e,t,n){__NEXT_REGISTER_PAGE("/person/share",function(){return e.exports=n(989),{page:e.exports.default}})},989:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(1),c=n.n(o),i=n(6),s=n.n(i),l=n(5),m=n(10),u=n(3),p=n(7),d=n(4),f=function(e,t){var n=t.$,a=n.getState("code"),o=n.getState("userInfo").niname;return c.a.createElement(u.u,{className:"mt-lg"},c.a.createElement(u.u.Item,{thumb:c.a.createElement(u.p,{type:"message",className:"t-28"}),arrow:"horizontal",onClick:n.page.showSMSModal},"短信邀请"),c.a.createElement(u.u.Item,{thumb:c.a.createElement(u.p,{type:"icon-link",className:"t-28"}),arrow:"horizontal"},c.a.createElement(u.w,{config:{icon:"https://www.nidosport.com/common/images/share_logo.png",link:"".concat(p.a.__WEB_ORGIN__,"/event/share_regist/").concat(a),title:"".concat(o,"邀请您加入灵动"),desc:p.a.__WX_DESC__},actionSheetConfig:{message:"分享邀请链接到"}},"发送链接邀请")),c.a.createElement(u.u.Item,{thumb:c.a.createElement(u.p,{type:"icon-history",className:"t-28"}),arrow:"horizontal",onClick:function(){return d.a.router.push("/person/share/record")}},"我的邀请记录"),c.a.createElement(r.a,{styleId:"4252735716",css:".am-list-item{padding-left:0 !important;}.c-form{margin-top:0 !important;}.am-list-item .am-list-line{padding-right:0 !important;}"}))};f.contextTypes={$:s.a.object};var y=Object(l.a)(Object(l.d)(f)),b=function(){return c.a.createElement("div",{className:"jsx-3876428095"},c.a.createElement(u.o,{show:!0,title:"推广邀请",bd:c.a.createElement("p",{className:"jsx-3876428095 t-34 l-48 t-void"},"推广邀请"),style:{background:"#404040"}}),c.a.createElement(r.a,{styleId:"3876428095",css:""}))};b.contextTypes={$:s.a.object};var h=Object(l.d)(b),w=n(37),g=n.n(w),_=n(0),v=function(e,t){var n=t.$,a=e.form,o=e.onSubmit,i=e.show;return c.a.createElement(g.a,{visible:i,animationType:"slide-up"},c.a.createElement("div",{className:"jsx-2337276968 "+r.a.dynamic([["1606863918",[_.a.wind,_.a.wind]]])+" modal t-c"},c.a.createElement(u.l,{justify:"between",key:"1",style:{borderBottom:"1px solid #ccc"}},c.a.createElement(u.l,{justify:"center",align:"center",key:"2"},c.a.createElement(u.p,{type:"me-circle",className:"t-32",key:"3"}),c.a.createElement(u.m,{form:a,className:"ml-sm",key:"4"},c.a.createElement(u.m.Input,{name:"phone",type:"phone",placeholder:"请输入好友手机号码"}))),c.a.createElement(u.p,{key:"6",className:"t-32",type:"right",onClick:function(){d.a.checkLogin(function(){o(a,function(e){n.do.doSend(e),n.page.hideSMSModal()})})}})),c.a.createElement(u.p,{key:"7",type:"cross",className:"close t-32",onClick:n.page.hideSMSModal})),c.a.createElement(r.a,{styleId:"1606863918",css:".modal.__jsx-style-dynamic-selector{padding:3.5rem ".concat(_.a.wind," 0 ").concat(_.a.wind,";}"),dynamic:[_.a.wind,_.a.wind]}),c.a.createElement(r.a,{styleId:"2337276968",css:".close{margin-top:5.5rem !important;}.am-modal-content{background:#fff !important;opacity:0.5;}"}))};v.contextTypes={$:s.a.object};var E,j,S=Object(l.a)(Object(l.d)(v)),x=n(9),k=n.n(x),O=n(11),N=n(12),I=n(15),z=n(13);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,r)}function T(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){M(o,a,r,c,i,"next",e)}function i(e){M(o,a,r,c,i,"throw",e)}c(void 0)})}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var W,R,G,J,Y,A,B,X,D,L=(E=function(e){function t(){var e,n,a,r,o,c,i,s,l,m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,p=new Array(u),f=0;f<u;f++)p[f]=arguments[f];return a=this,r=(e=C(t)).call.apply(e,[this].concat(p)),n=!r||"object"!==P(r)&&"function"!=typeof r?$(a):r,o=n,c="state",i=j,s=$($(n)),i&&Object.defineProperty(o,c,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0}),n.params={},n.setQuery={},n.fetch={config:{static:[["userInfo","userInfo"]],update:["code"]},userInfo:(l=T(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=z.a.fetchUserInfo(),e.t0=n,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)}),code:function(){n.fetchThenSetState("get_invite_code","code")}},n.computed={},n.do={doSend:(m=T(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),!a.isSend){e.next=3;break}return e.abrupt("return",d.a.light("已发送，请稍后再试"));case 3:return e.next=5,I.a.P("do_invite_send-sms",t);case 5:return d.a.light("发送短信成功"),n.setState({isSend:!0}),e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,this)})),function(e){return m.apply(this,arguments)})},n.page={showSMSModal:function(){n.setState({smsWindow:!0})},hideSMSModal:function(){n.setState({smsWindow:!1})}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,N["a"]),t}(),W=E.prototype,R="state",G=[O.k],J={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({code:"",userInfo:z.a.toJS("userInfo"),state:{isSend:!1,smsWindow:!1}})}},A={},Object.keys(J).forEach(function(e){A[e]=J[e]}),A.enumerable=!!A.enumerable,A.configurable=!!A.configurable,("value"in A||A.initializer)&&(A.writable=!0),A=G.slice().reverse().reduce(function(e,t){return t(W,R,e)||e},A),Y&&void 0!==A.initializer&&(A.value=A.initializer?A.initializer.call(Y):void 0,A.initializer=void 0),void 0===A.initializer&&(Object.defineProperty(W,R,A),A=null),j=A,E),Q=n(24),U=d.a.cdn("/static/images/src/person/share"),F=Q.a;function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function V(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var te=Object(l.c)(L)(B=Object(l.d)((D=X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,Z(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,c.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.context.$,t=e.getState("code"),n=e.getState().smsWindow;return c.a.createElement(m.k,{title:"推广邀请",header:c.a.createElement(h,null)},c.a.createElement(u.l,{justify:"center",style:{overflow:"initial",background:_.a.color_main}},c.a.createElement("p",{onClick:function(){F.showMask({children:c.a.createElement(u.l,{direction:"column"},c.a.createElement(u.q,{key:"0",src:"".concat(U,"/code.jpg"),size:"4rem"}),c.a.createElement("p",{key:"1",className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" mt-md"},"截图发送二维码给好友"),c.a.createElement(u.p,{key:"2",className:"mt-128 t-32",type:"cross",onClick:F.hideMask}))})},className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" qr-bg"},c.a.createElement(u.p,{type:"qrcode",className:"qr t-void"}))),c.a.createElement("div",{className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" main"},c.a.createElement("div",{className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" con"},c.a.createElement("p",{className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" t-c t-30 l-42"},"使用二维码邀请"),c.a.createElement(u.l,{justify:"center",className:"mt-md"},t.split("").map(function(e){return c.a.createElement(u.q,{className:"code-img ml-xs",src:"".concat(U,"/").concat(e,".png"),key:e})})),c.a.createElement("p",{className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" t-30 p-42 t-c mt-md"},"邀请码",c.a.createElement("span",{className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" t-danger"},"(好友注册填写)")),c.a.createElement(u.l,{justify:"center",className:"mt-sm"},c.a.createElement(u.c,{type:"primary",size:"sm",inline:!0},"复制邀请码")),c.a.createElement("p",{className:"jsx-1980021801 "+r.a.dynamic([["1652398016",[_.a.color_void,_.a.color_primary,_.a.wind]]])+" line mt-lg"}),c.a.createElement(y,null))),c.a.createElement(S,{show:n}),c.a.createElement(r.a,{styleId:"1652398016",css:".qr-bg.__jsx-style-dynamic-selector{padding:0.8rem;-webkit-transform:translateY(40px);-ms-transform:translateY(40px);transform:translateY(40px);border-radius:50%;border:0.15rem solid ".concat(_.a.color_void,";box-shadow:0px 0.04rem 0.14rem 0px rgba(46,142,255,0.2);background:").concat(_.a.color_primary,";}.main.__jsx-style-dynamic-selector{padding:").concat(_.a.wind,";}.con.__jsx-style-dynamic-selector{width:100%;padding:1.5rem 0.5rem 0.32rem 0.5rem;margin-top:-120px;background:#fff;border-radius:5px;}.line.__jsx-style-dynamic-selector{border-bottom:2px dashed #e9e9e9;}"),dynamic:[_.a.color_void,_.a.color_primary,_.a.wind]}),c.a.createElement(r.a,{styleId:"1980021801",css:".qr{font-size:0.79rem !important;}.t-title{color:#fff !important;border:none !important;}.code-img{width:0.7rem;height:1.1rem;}.am-modal-mask{background-color:rgba(255,255,255,0.97);}"}))}}])&&K(n.prototype,a),o&&K(n,o),t}(),X.contextTypes={$:s.a.object},B=D))||B)||B;t.default=te}},[[903,1,0]]]);