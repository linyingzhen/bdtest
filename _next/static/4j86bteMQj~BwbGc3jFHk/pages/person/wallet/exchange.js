(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1058:function(e,t,a){"use strict";a.r(t);var n,r,i=a(50),o=a.n(i),c=a(2),l=a.n(c),s=a(1),u=a.n(s),p=a(6),m=a.n(p),f=a(5),y=a(10),d=a(3),v=a(0),b=a(63),g=a(9),h=a.n(g),w=a(11),E=a(12),x=a(15),S=a(4),N=a(13);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,a,n,r,i,o){try{var c=e[i](o),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(n,r)}function j(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){I(i,n,r,o,c,"next",e)}function c(e){I(i,n,r,o,c,"throw",e)}o(void 0)})}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var P,C,A,T,F,J,R=(n=function(e){function t(){var e,a,n,i,o,c,l,s,u,p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var m=arguments.length,f=new Array(m),y=0;y<m;y++)f[y]=arguments[y];return n=this,i=(e=k(t)).call.apply(e,[this].concat(f)),a=!i||"object"!==_(i)&&"function"!=typeof i?z(n):i,o=a,c="state",l=r,s=z(z(a)),l&&Object.defineProperty(o,c,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(s):void 0}),a.fetch={config:{every:["walletInfo"]},walletInfo:(u=j(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=N.a.fetchWalletInfo(),e.t0=a,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"walletInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},a.do={exchange:(p=j(h.a.mark(function e(){var t,n,r,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.getState(),n=t.type,r=t.ipt,i=parseFloat(void 0===r?0:r)){e.next=5;break}return S.a.light("划转金额必须大于0"),e.abrupt("return");case 5:return e.next=7,x.a.P("do_wallet_exchange",{type:n,amount:i});case 7:S.a.light("划转成功"),a.fetch.walletInfo(),a.setState({ipt:""});case 10:case"end":return e.stop()}},e,this)})),function(){return p.apply(this,arguments)})},a.page={changeType:function(){var e=a.getState().type;a.setState({type:1===e?0:1,ipt:""})},prev:"",moneyNatural:function(e){return e&&!/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(e)?"."===e?"0.":e?a.page.prev:"":(a.page.prev=e,e)},onIptChange:function(e){var t=a.getState("walletInfo"),n=t.amount,r=void 0===n?0:n,i=t.btAmount,o=void 0===i?0:i,c=0;c=0===a.getState().type?parseFloat(o):parseFloat(r);var l=a.page.moneyNatural(e);l>c&&(l=c),a.setState({ipt:l})},onAllClick:function(){var e=a.getState("walletInfo"),t=e.amount,n=void 0===t?0:t,r=e.btAmount,i=void 0===r?0:r,o=0;o=0===a.getState().type?parseFloat(i):parseFloat(n),a.setState({ipt:o})}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,E["a"]),t}(),P=n.prototype,C="state",A=[w.k],T={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({state:{type:1,ipt:""},walletInfo:N.a.toJS("walletInfo")})}},J={},Object.keys(T).forEach(function(e){J[e]=T[e]}),J.enumerable=!!J.enumerable,J.configurable=!!J.configurable,("value"in J||J.initializer)&&(J.writable=!0),J=A.slice().reverse().reduce(function(e,t){return t(P,C,e)||e},J),F&&void 0!==J.initializer&&(J.value=J.initializer?J.initializer.call(F):void 0,J.initializer=void 0),void 0===J.initializer&&(Object.defineProperty(P,C,J),J=null),r=J,n),$="style-989758",G=function(e,t){var a=t.$,n=a.getState(),r=n.type,i=n.ipt,c=a.getState("walletInfo"),s=c.amount,p=void 0===s?"-":s,m=c.btAmount,f=void 0===m?"-":m,g=1===r;return u.a.createElement(y.k,{title:"余额划转",bd:null,headerStyle:{color:v.a.color_theme,background:"transparent"}},u.a.createElement(b.a,null,u.a.createElement(d.l,{className:"mt-64",style:{padding:"0 ".concat(v.a.wind)}},u.a.createElement(d.l.Item,null,u.a.createElement("p",{className:l.a.dynamic([["759979597",[$]]])+" t-48 l-66 t-void t-b t-c"},f),u.a.createElement("p",{className:l.a.dynamic([["759979597",[$]]])+" t-24 l-34 t-void t-c mt-24"},"本汀账户")),u.a.createElement(d.l.Item,null,u.a.createElement("p",{className:l.a.dynamic([["759979597",[$]]])+" t-48 l-66 t-void t-b t-c"},p),u.a.createElement("p",{className:l.a.dynamic([["759979597",[$]]])+" t-24 l-34 t-void t-c mt-24"},"灵动账户")))),u.a.createElement(d.u,null,u.a.createElement(d.u.Item,{extra:u.a.createElement(d.p,{className:"t-48 t-primary",type:"transfer-circle-fill",onClick:a.page.changeType})},u.a.createElement("p",{className:l.a.dynamic([["759979597",[$]]])+" t-30 l-46"},u.a.createElement("span",{className:l.a.dynamic([["759979597",[$]]])},"从"),u.a.createElement("span",{className:l.a.dynamic([["759979597",[$]]])+" t-primary ml-xs mr-xs"},g?"灵动账户":"本汀账户"),u.a.createElement("span",{className:l.a.dynamic([["759979597",[$]]])},"划转到"),u.a.createElement("span",{className:l.a.dynamic([["759979597",[$]]])+" t-primary ml-xs"},g?"本汀账户":"灵动账户")))),u.a.createElement(d.u,{className:"mt-d"},u.a.createElement(o.a,{className:"".concat($,"__ipt"),placeholder:"请输入划转金额",extra:u.a.createElement("span",{onClick:a.page.onAllClick,className:l.a.dynamic([["759979597",[$]]])+" t-30 l-46 t-primary"},"全部划转"),value:i,onChange:a.page.onIptChange})),u.a.createElement(d.m.Button,{onClick:a.do.exchange},"确认划转"),u.a.createElement(l.a,{styleId:"759979597",css:".".concat($,"__ipt input{font-size:0.3rem !important;}"),dynamic:[$]}))};G.contextTypes={$:m.a.object};var W=Object(f.c)(R)(Object(f.d)(G));t.default=W},63:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(1),o=a.n(i),c=a(8),l=a.n(c),s=a(4),u=s.a.cdn("/static/images/src/person/wallet/_/FlowWrap");t.a=function(e){var t=e.className,a=e.children;return o.a.createElement("div",{className:"jsx-1064413498 "+(l()("style-105627",t)||"")},a,o.a.createElement("img",{src:"".concat(u,"/wave.png"),alt:"",className:"jsx-1064413498 img-wave"}),o.a.createElement(r.a,{styleId:"1064413498",css:".style-105627.jsx-1064413498{padding:1.18rem 0 0 0;margin-top:-1rem;background-image:linear-gradient( 90deg, rgba(90,194,255,1), rgba(46,142,255,1) );overflow:hidden;}.img-wave.jsx-1064413498{width:100%;margin-bottom:-0.01rem;opacity:0.4;}"}))}},911:function(e,t,a){__NEXT_REGISTER_PAGE("/person/wallet/exchange",function(){return e.exports=a(1058),{page:e.exports.default}})}},[[911,1,0]]]);