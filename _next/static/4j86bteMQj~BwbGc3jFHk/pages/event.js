(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1030:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(6),o=n.n(i),c=n(5),u=n(10),l=n(3),s=n(7),f=n(4),p=n(8),m=n.n(p),b=function(e){var t,n=e.tbId,r=e.acNaem,i=e.covermapId,o=e.startTime,c=e.endTime,u=e.className,l=f.a.getTimestamp();return t=l>c?function(){return f.a.light("该活动已结束")}:l<o?function(){return f.a.light("该活动尚未开始")}:function(){return f.a.router.push("/event/cashback?id=".concat(n),"/event/cashback/".concat(n))},a.a.createElement("img",{className:m()("tool-animate-scale",u),src:f.a.getAppImgUrl(i,"scale"),alt:r,style:{width:"100%",borderRadius:"0.16rem",boxShadow:"0 0.1rem 0.3rem rgba(0, 0, 0, 0.4)"},onClick:t})};b.contextTypes={$:o.a.object};var h,v,y=Object(c.d)(b),d=n(9),g=n.n(d),_=n(11),w=n(12),x=n(13);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k,z,I,P,A,N,R=(h=function(e){function t(){var e,n,r,a,i,o,c,u,l,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,p=new Array(f),m=0;m<f;m++)p[m]=arguments[m];return r=this,a=(e=S(t)).call.apply(e,[this].concat(p)),n=!a||"object"!==E(a)&&"function"!=typeof a?T(r):a,i=n,o="state",c=v,u=T(T(n)),c&&Object.defineProperty(i,o,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(u):void 0}),n.fetch={config:{static:["userInfo"],one:["event"],update:["fansAuth"]},userInfo:(l=g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.a.fetchUserInfo(),e.t0=n,e.next=4,t;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)}),s=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=l.apply(e,t);function i(e){O(a,n,r,i,o,"next",e)}function o(e){O(a,n,r,i,o,"throw",e)}i(void 0)})},function(){return s.apply(this,arguments)}),fansAuth:function(){return n.fetchThenSetState("get_user_fans-state","fansAuth")},event:function(){return n.fetchThenSetState("get_event_list","event")}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,w["a"]),t}(),k=h.prototype,z="state",I=[_.k],P={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({userInfo:x.a.getState("userInfo"),fansAuth:{},event:s.a.__EMPTY__})}},N={},Object.keys(P).forEach(function(e){N[e]=P[e]}),N.enumerable=!!N.enumerable,N.configurable=!!N.configurable,("value"in N||N.initializer)&&(N.writable=!0),N=I.slice().reverse().reduce(function(e,t){return t(k,z,e)||e},N),A&&void 0!==N.initializer&&(N.value=N.initializer?N.initializer.call(A):void 0,N.initializer=void 0),void 0===N.initializer&&(Object.defineProperty(k,z,N),N=null),v=N,h);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var U=function(e,t){var n=t.$;if(!s.a.__CLIENT__)return null;var r=n.getState("userInfo"),i=r.niname,o=r._loaded,c=n.getState("fansAuth"),p=c.authType,m=c._loaded,b=n.getState("event"),h=b.list,v=b._loaded;if(!o||!m||!v)return null;var d=parseInt(p)>0;return a.a.createElement(u.k,{title:"粉丝福利",theme:"fullTheme",ft:a.a.createElement(l.c,{type:"main",size:"sm",inline:!0,radius:!0,onClick:function(){return f.a.checkLogin(function(){return f.a.router.push("/person/event/cashback")})}},"我的活动")},d?h.length?a.a.createElement(l.H,{text:[{text:"粉丝专属福利活动，禁止外传！",style:{"font-size":"40px",x:"40px",y:"200px",opacity:"0.32",fill:"#fff"}},{text:i,style:{"font-size":"40px",x:"42px",y:"250px",opacity:"0.32",fill:"#fff"}}],style:{width:"720px",height:"480px"}},a.a.createElement("div",{className:"p-w"},h.map(function(e){return a.a.createElement(y,C({key:e.tbId,className:"mt-md"},e))}))):a.a.createElement(l.z,{image:"/static/svg/暂无活动.svg",title:"暂无活动",desc:"敬请关注"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(l.z,{image:"/static/svg/404.svg",title:"未进行粉丝认证",desc:"认证后方可查看所有活动"}),a.a.createElement("div",{className:"tool-wind mt-d"},a.a.createElement(l.c,{type:"primary",onClick:function(){return f.a.router.push(s.a.__ROUTER__.fans)}},"前往认证"))))};U.contextTypes={$:o.a.object};var $=Object(c.c)(R)(Object(c.d)(U));t.default=$},838:function(e,t,n){__NEXT_REGISTER_PAGE("/event",function(){return e.exports=n(1030),{page:e.exports.default}})}},[[838,1,0]]]);