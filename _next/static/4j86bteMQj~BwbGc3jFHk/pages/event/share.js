(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{173:function(e,t,n){"use strict";var o=n(282).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n(1)),i=c(n(283));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),s=0;s<r;s++)c[s]=arguments[s];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.onClick=function(e){var t=o.props,n=t.text,r=t.onCopy,c=t.children,l=t.options,s=a.default.Children.only(c),u=(0,i.default)(n,l);r&&r(n,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["text","onCopy","options","children"]),r=a.default.Children.only(t);return a.default.cloneElement(r,o({},n,{onClick:this.onClick}))}}]),t}()).defaultProps={onCopy:void 0,options:void 0}},283:function(e,t,n){"use strict";var o=n(284),r="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,a,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",document.body.appendChild(s),c.selectNode(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),u=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:r),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},284:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},839:function(e,t,n){__NEXT_REGISTER_PAGE("/event/share",function(){return e.exports=n(990),{page:e.exports.default}})},990:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),a=n(1),i=n.n(a),c=n(6),l=n.n(c),s=n(5),u=n(10),d=n(3),m=n(173),p=n(7),f=n(4),y=function(e,t){var n=t.$,o=n.getState("code"),a=n.getState("userInfo").niname;return i.a.createElement(d.u,{className:"mt-lg"},i.a.createElement(d.u.Item,{thumb:i.a.createElement(d.p,{type:"message",className:"t-28"}),arrow:"horizontal",onClick:n.page.showSMSModal},"短信邀请"),i.a.createElement(d.u.Item,{thumb:i.a.createElement(d.p,{type:"link",className:"t-28"}),arrow:"horizontal"},i.a.createElement(d.w,{config:{icon:"https://www.nidosport.com/common/images/share_logo.png",link:"".concat(p.a.__WEB_ORGIN__,"/event/share_regist/").concat(o),title:"".concat(a,"邀请您加入灵动"),desc:p.a.__WX_DESC__},actionSheetConfig:{message:"分享邀请链接到"}},"发送链接邀请")),i.a.createElement(d.u.Item,{thumb:i.a.createElement(d.p,{type:"list",className:"t-28"}),arrow:"horizontal",onClick:function(){return f.a.router.push("/event/share/record")}},"我的邀请记录"),i.a.createElement(r.a,{styleId:"4252735716",css:".am-list-item{padding-left:0 !important;}.c-form{margin-top:0 !important;}.am-list-item .am-list-line{padding-right:0 !important;}"}))};y.contextTypes={$:l.a.object};var b=Object(s.a)(Object(s.d)(y)),h=n(0),v=function(){return i.a.createElement("div",{className:r.a.dynamic([["2849461931",[h.a.color_void]]])+" style-2018101514387"},i.a.createElement(d.o,{show:!0,title:"推广邀请",bd:i.a.createElement("p",{className:r.a.dynamic([["2849461931",[h.a.color_void]]])+" t-34 l-48 t-void"},"推广邀请"),style:{background:"#404040"}}),i.a.createElement(r.a,{styleId:"2849461931",css:".style-2018101514387 .t-34{color:".concat(h.a.color_void," !important;}"),dynamic:[h.a.color_void]}))};v.contextTypes={$:l.a.object};var w=Object(s.d)(v),g=n(37),_=n.n(g),E=function(e,t){var n=t.$,o=e.form,a=e.onSubmit,c=e.show;return i.a.createElement(_.a,{visible:c,animationType:"slide-up"},i.a.createElement("div",{className:"jsx-2337276968 "+r.a.dynamic([["2658165784",[h.a.wind,h.a.wind]]])+" modal t-c"},i.a.createElement(d.l,{justify:"between",key:"1",style:{borderBottom:"1px solid #ccc"}},i.a.createElement(d.l,{justify:"center",align:"center",key:"2"},i.a.createElement(d.p,{type:"me-circle",className:"t-32",key:"3"}),i.a.createElement(d.m,{form:o,className:"ml-sm",key:"4"},i.a.createElement(d.m.Input,{name:"phone",type:"phone",placeholder:"请输入好友手机号码"}))),i.a.createElement(d.p,{key:"6",className:"t-32",type:"right",onClick:function(){f.a.checkLogin(function(){a(o,function(e){n.do.doSend(e),n.page.hideSMSModal()})})}})),i.a.createElement(d.p,{key:"7",type:"cross",className:"close t-32",onClick:n.page.hideSMSModal})),i.a.createElement(r.a,{styleId:"2658165784",css:".modal.__jsx-style-dynamic-selector{padding:3.5rem ".concat(h.a.wind," 0 ").concat(h.a.wind,";}"),dynamic:[h.a.wind,h.a.wind]}),i.a.createElement(r.a,{styleId:"2337276968",css:".close{margin-top:5.5rem !important;}.am-modal-content{background:#fff !important;opacity:0.5;}"}))};E.contextTypes={$:l.a.object};var x,j,k=Object(s.a)(Object(s.d)(E)),S=n(9),C=n.n(S),O=n(11),N=n(12),P=n(15),I=n(13);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function R(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function i(e){z(a,o,r,i,c,"next",e)}function c(e){z(a,o,r,i,c,"throw",e)}i(void 0)})}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var q,U,W,D,G,J,X,Y,B,L=(x=function(e){function t(){var e,n,o,r,a,i,c,l,s,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];return o=this,r=(e=M(t)).call.apply(e,[this].concat(m)),n=!r||"object"!==T(r)&&"function"!=typeof r?$(o):r,a=n,i="state",c=j,l=$($(n)),c&&Object.defineProperty(a,i,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(l):void 0}),n.fetch={config:{static:[["userInfo","userInfo"]],update:["code"]},userInfo:(s=R(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=I.a.fetchUserInfo(),e.t0=n,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)}),code:function(){n.fetchThenSetState("get_invite_code","code")}},n.do={doSend:(u=R(C.a.mark(function e(t){var o;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.getState(),!o.isSend){e.next=3;break}return e.abrupt("return",f.a.light("已发送，请稍后再试"));case 3:return e.next=5,P.a.P("do_invite_send-sms",t);case 5:return f.a.light("发送短信成功"),n.setState({isSend:!0}),e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,this)})),function(e){return u.apply(this,arguments)})},n.page={showSMSModal:function(){n.setState({smsWindow:!0})},hideSMSModal:function(){n.setState({smsWindow:!1})}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,N["a"]),t}(),q=x.prototype,U="state",W=[O.k],D={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({code:"",userInfo:I.a.toJS("userInfo"),state:{isSend:!1,smsWindow:!1}})}},J={},Object.keys(D).forEach(function(e){J[e]=D[e]}),J.enumerable=!!J.enumerable,J.configurable=!!J.configurable,("value"in J||J.initializer)&&(J.writable=!0),J=W.slice().reverse().reduce(function(e,t){return t(q,U,e)||e},J),G&&void 0!==J.initializer&&(J.value=J.initializer?J.initializer.call(G):void 0,J.initializer=void 0),void 0===J.initializer&&(Object.defineProperty(q,U,J),J=null),j=J,x),F=n(24),H=f.a.cdn("/static/images/src/event/Share"),K=F.a;function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ne=Object(s.c)(L)(X=Object(s.d)((B=Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Z(this,ee(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,i.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.context.$,t=e.getState("code"),n=e.getState().smsWindow;return i.a.createElement(u.k,{title:"推广邀请",header:i.a.createElement(w,null)},i.a.createElement(d.l,{justify:"center",style:{overflow:"initial",background:h.a.color_main}},i.a.createElement("p",{onClick:function(){K.showMask({children:i.a.createElement(d.l,{direction:"column"},i.a.createElement(d.q,{key:"0",src:"".concat(H,"/code.jpg"),size:"4rem"}),i.a.createElement("p",{key:"1",className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" mt-md"},"截图发送二维码给好友"),i.a.createElement(d.p,{key:"2",className:"mt-128 t-32",type:"cross",onClick:K.hideMask}))})},className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" qr-bg"},i.a.createElement(d.p,{type:"qrcode",className:"qr t-void"}))),i.a.createElement("div",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" main"},i.a.createElement("div",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" con"},i.a.createElement("p",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" t-c t-30 l-80"},"使用二维码邀请"),i.a.createElement("ul",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" nums"},t.split("").map(function(e,t){return i.a.createElement("li",{key:t,className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])},e)})),i.a.createElement("p",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" t-30 p-42 t-c mt-md"},"邀请码",i.a.createElement("span",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" t-danger"},"(好友注册填写)")),i.a.createElement(m.CopyToClipboard,{text:t,onCopy:function(){return f.a.light("已复制")}},i.a.createElement(d.l,{justify:"center",className:"mt-sm"},i.a.createElement(d.c,{type:"primary",size:"md",inline:!0},"复制邀请码"))),i.a.createElement("p",{className:"jsx-1980021801 "+r.a.dynamic([["4249016680",[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]]])+" line mt-lg"}),i.a.createElement(b,null))),i.a.createElement(k,{show:n}),i.a.createElement(r.a,{styleId:"4249016680",css:".qr-bg.__jsx-style-dynamic-selector{padding:0.8rem;-webkit-transform:translateY(40px);-ms-transform:translateY(40px);transform:translateY(40px);border-radius:50%;border:0.15rem solid ".concat(h.a.color_void,";box-shadow:0px 0.04rem 0.14rem 0px rgba(46,142,255,0.2);background:").concat(h.a.color_primary,";}.main.__jsx-style-dynamic-selector{padding:.6rem ").concat(h.a.wind," ").concat(h.a.wind,";}.con.__jsx-style-dynamic-selector{width:100%;padding:1rem 0.5rem 0.32rem 0.5rem;margin-top:-120px;background:#fff;border-radius:5px;}.line.__jsx-style-dynamic-selector{border-bottom:2px dashed #e9e9e9;}.nums.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:1.38rem;list-style:none;color:").concat(h.a.color_void,";font-size:0.48rem;text-align:center;}.nums.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{display:inline-block;width:0.84rem;height:1.38rem;line-height:1.38rem;background:#404040;border-radius:0.04rem;margin-right:0.16rem;}"),dynamic:[h.a.color_void,h.a.color_primary,h.a.wind,h.a.wind,h.a.color_void]}),i.a.createElement(r.a,{styleId:"1980021801",css:".qr{font-size:0.79rem !important;}.t-title{color:#fff !important;border:none !important;}.code-img{width:0.7rem;height:1.1rem;}.am-modal-mask{background-color:rgba(255,255,255,0.97);}"}))}}])&&V(n.prototype,o),a&&V(n,a),t}(),Y.contextTypes={$:l.a.object},X=B))||X)||X;t.default=ne}},[[839,1,0]]]);