(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{887:function(e,a,t){__NEXT_REGISTER_PAGE("/person",function(){return e.exports=t(975),{page:e.exports.default}})},975:function(e,a,t){"use strict";t.r(a);var l=t(1),r=t.n(l),o=t(5),n=t(10),c=t(3),s=t(4),i=Object(o.d)(function(){return r.a.createElement(c.o,{show:!0,hideBack:!0,ft:r.a.createElement(c.l,{justify:"end"},r.a.createElement(c.p,{className:"t-40 t-void",type:"message",onClick:function(){return s.a.router.push("/person/message")}}),r.a.createElement(c.p,{className:"t-40 t-void ml-32",type:"setting",onClick:function(){return s.a.router.push("/person/setup")}})),style:{background:"transparent"}})}),_=t(8),m=t.n(_),u=s.a.cdn("/static/images/src/person/Index"),d=[{label:"初始会员",value:"0"},{label:"一星会员",value:"1"},{label:"二星会员",value:"2"},{label:"三星会员",value:"3"},{label:"四星会员",value:"4"},{label:"五星会员",value:"5"},{label:"黄金会员",value:"6"},{label:"铂金会员",value:"7"},{label:"钻石会员",value:"8"},{label:"至尊会员",value:"9"}],p=[{label:"小咖",value:"1"},{label:"大咖",value:"2"}],f=[{label:"每日签到",href:"/person/sign",type:"sign-square-fill",color:"#ff9e69"},{label:"我的钱包",href:"/person/wallet",type:"cash-square-fill",color:"#2e8eff"},{label:"活动中心",href:"/person/event",type:"event-square-fill",color:"#ff6969"},{label:"我的订单",href:"/person/order",type:"order-square-fill",color:"#2e8eff"},{label:"我的礼单",href:"",type:"sign-square-fill",color:"#ff6969"},{label:"我的发布",href:"/person/publish",type:"publish-square-fill",color:"#ff9e69"},{label:"我的约钓",href:"",type:"team-square-fill",color:"#2e8eff"},{label:"我的好友",href:"/person/friends",type:"friend-square-fill",color:"#35e2aa"}],y=[[{label:"会员中心",href:"/person/vip",type:"vip-fill"},{label:"我的收藏",href:"/person/favorites",type:"favor-fill"},{label:"我的售后",href:"/person/customer",type:"server-circle-fill"},{label:"地址管理",href:"/person/address",type:"address-fill"},{label:"推广邀请",href:"/event/share",type:"notice-fill"}],[{label:"关于我们",href:"/person/about",type:"information-circle-fill"},{label:"帮助反馈中心",href:"/person/help",type:"question-square-fill"}]],b=function(e){var a=e.className;return r.a.createElement("div",{className:m()("style-157025",a)},y.map(function(e,a){return r.a.createElement(c.u,{key:a,className:m()({"mt-d":a>0})},e.map(function(e){return r.a.createElement(c.u.Item,{key:e.label,thumb:r.a.createElement(c.p,{className:"t-32 t-sub",type:e.type,onClick:function(){return s.a.router.push(e.href)}}),href:e.href},r.a.createElement(c.l,null,r.a.createElement(c.l.Item,null,r.a.createElement("p",{className:"t-30 l-42"},e.label)),r.a.createElement(c.p,{className:"t-32 t-icon",type:"right"})))}))}))},h=t(2),w=t.n(h),g=t(0),v=function(e){var a=e.className;return r.a.createElement("div",{className:w.a.dynamic([["903302081",[g.a.space,g.a.wind,g.a.color_theme,"style-191166"]]])+" "+(m()("style-191166",a)||"")},f.map(function(e,a){return r.a.createElement(c.t,{key:e.label,className:m()("".concat("style-191166","__item t-c"),{"mt-32":a>3}),href:e.href},r.a.createElement(c.p,{className:"t-64",type:e.type,style:{color:e.color}}),r.a.createElement("p",{className:w.a.dynamic([["903302081",[g.a.space,g.a.wind,g.a.color_theme,"style-191166"]]])+" t-24 l-34 t-sub mt-16"},e.label))}),r.a.createElement(w.a,{styleId:"903302081",css:".style-191166{padding:".concat(g.a.space," ").concat(g.a.wind,";background:").concat(g.a.color_theme,";}.").concat("style-191166","__item{display:inline-block;width:25%;}"),dynamic:[g.a.space,g.a.wind,g.a.color_theme,"style-191166"]}))},E=t(6),I=t.n(E),N=t(7),k=function(e,a){var t=a.$,l=t.getState("userInfo"),o=l.niname,i=void 0===o?"-":o,_=l.faceImg,f=l.grade,y=l.vip,b=l.btlevel,h=l.fanAuth,v=t.getState("count"),E=v.infoflowCount,I=void 0===E?"-":E,k=v.postCount,P=void 0===k?"-":k,j=v.fanCount,R=void 0===j?"-":j,G=s.a.getLabel(d,b),D=s.a.getLabel(p,h);return r.a.createElement("div",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" style-562167"},r.a.createElement("div",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" wrap-top"},r.a.createElement(c.q,{className:"".concat("style-562167","__avatar"),size:"1.28rem",src:_,circle:!0,onClick:function(){return s.a.router.push("/person/user/info")}})),r.a.createElement("div",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" wrap-info"},r.a.createElement(c.l,null,r.a.createElement(c.l.Item,null,r.a.createElement(c.l,null,r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-34 l-48 t-b mr-sm"},i),r.a.createElement(n.l,{value:f}))),r.a.createElement(c.p,{className:"t-32 t-icon",type:"right",onClick:function(){return s.a.router.push("/person/user/info")}})),r.a.createElement("div",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" wrap-tag l-28 mt-16"},1==y&&r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" tag tag-desc mr-sm"},r.a.createElement(c.l,null,r.a.createElement(c.p,{className:"t-24 t-gold",type:"vip-fill"}),r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-20 l-28 t-gold ml-4"},"灵动VIP"))),G&&r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" tag tag-desc mr-sm"},r.a.createElement(c.l,null,r.a.createElement(c.p,{className:"t-24 t-void",type:"star-fill"}),r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-20 l-28 t-void ml-4"},"本汀",G))),D&&r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" "+(m()("tag",{"tag-sub":"小咖"===D,"tag-warning":"大咖"===D})||"")},r.a.createElement(c.l,null,r.a.createElement(c.p,{className:"t-24 t-void",type:"ka"}),r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-20 l-28 t-void"},D)))),r.a.createElement(c.l,{className:"mt-36"},r.a.createElement(c.l.Item,null,r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-40 l-56 t-b"},I),r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-24 l-34 t-sub ml-xs"},"动态")),r.a.createElement(c.l.Item,null,r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-40 l-56 t-b"},P),r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-24 l-34 t-sub ml-xs"},"帖子")),r.a.createElement(c.l.Item,null,r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-40 l-56 t-b"},R),r.a.createElement("span",{className:w.a.dynamic([["3406827630",["style-562167",g.a.color_theme]],["2291240727",[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]]])+" t-24 l-34 t-sub ml-xs"},"粉丝")))),r.a.createElement(w.a,{styleId:"3406827630",css:".".concat("style-562167","__avatar{border:0.08rem solid ").concat(g.a.color_theme,";-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);}"),dynamic:["style-562167",g.a.color_theme]}),r.a.createElement(w.a,{styleId:"2291240727",css:".wrap-top.__jsx-style-dynamic-selector{padding:1rem ".concat(g.a.wind," 0;margin-top:-1rem;background-color:").concat(g.a.color_desc,";background-image:url(").concat(u,"/person-bg").concat(N.a.__IMG_DPR__,".png);background-repeat:no-repeat;background-position:right bottom;background-size:2.4rem;}.wrap-info.__jsx-style-dynamic-selector{padding:0.68rem ").concat(g.a.wind," 0.24rem;background:").concat(g.a.color_theme,";}.wrap-tag.__jsx-style-dynamic-selector{min-height:0.36rem;}.tag.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;padding:0.04rem 0.16rem;border-radius:0.24rem;}.tag-desc.__jsx-style-dynamic-selector{background:").concat(g.a.color_desc,";}.tag-sub.__jsx-style-dynamic-selector{background:").concat(g.a.color_sub,";}.tag-warning.__jsx-style-dynamic-selector{background:").concat(g.a.color_warning,";}"),dynamic:[g.a.wind,g.a.color_desc,u,N.a.__IMG_DPR__,g.a.wind,g.a.color_theme,g.a.color_desc,g.a.color_sub,g.a.color_warning]}))};k.contextTypes={$:I.a.object};var P,j,R=Object(o.d)(k),G=t(9),D=t.n(G),M=t(11),x=t(12),O=t(13);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,a,t,l,r,o,n){try{var c=e[o](n),s=c.value}catch(e){return void t(e)}c.done?a(s):Promise.resolve(s).then(l,r)}function z(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,a){return(T=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var A,J,L,$,B,F,U=(P=function(e){function a(){var e,t,l,r,o,n,c,s,i,_;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var m=arguments.length,u=new Array(m),d=0;d<m;d++)u[d]=arguments[d];return l=this,r=(e=C(a)).call.apply(e,[this].concat(u)),t=!r||"object"!==S(r)&&"function"!=typeof r?Y(l):r,o=t,n="state",c=j,s=Y(Y(t)),c&&Object.defineProperty(o,n,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(s):void 0}),t.fetch={config:{static:["userInfo"],one:["count"]},userInfo:(i=D.a.mark(function e(){var a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.a.fetchUserInfo(),e.t0=t,e.next=4,a;case 4:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1,"userInfo"),e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}),_=function(){var e=this,a=arguments;return new Promise(function(t,l){var r=i.apply(e,a);function o(e){q(r,t,l,o,n,"next",e)}function n(e){q(r,t,l,o,n,"throw",e)}o(void 0)})},function(){return _.apply(this,arguments)}),count:function(){return t.fetchThenSetState("get_person_center_count","count")}},t}var t,l,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&T(e,a)}(a,x["a"]),t=a,(l=[{key:"storeDidFetch",value:function(){this.getState("userInfo").userId||s.a.router.replace("/login")}}])&&z(t.prototype,l),r&&z(t,r),a}(),A=P.prototype,J="state",L=[M.k],$={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({userInfo:O.a.toJS("userInfo"),count:N.a.__EMPTY__})}},F={},Object.keys($).forEach(function(e){F[e]=$[e]}),F.enumerable=!!F.enumerable,F.configurable=!!F.configurable,("value"in F||F.initializer)&&(F.writable=!0),F=L.slice().reverse().reduce(function(e,a){return a(A,J,e)||e},F),B&&void 0!==F.initializer&&(F.value=F.initializer?F.initializer.call(B):void 0,F.initializer=void 0),void 0===F.initializer&&(Object.defineProperty(A,J,F),F=null),j=F,P),V=Object(o.c)(U)(function(){return r.a.createElement(n.k,{title:"个人中心",header:r.a.createElement(i,null)},r.a.createElement(R,null),r.a.createElement(v,{className:"mt-d"}),r.a.createElement(b,{className:"mt-d"}))});a.default=V}},[[887,1,0]]]);