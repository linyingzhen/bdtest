(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{29:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return o});var n={1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",11:"十一",12:"十二"},r=[{label:"视频",value:"1"},{label:"图文",value:"2"},{label:"纯文",value:"3"},{label:"金币红包",value:"10"},{label:"积分红包",value:"11"},{label:"现金红包",value:"12"},{label:"优惠券红包",value:"13"}],l=[{label:"鱼竿",value:"36"},{label:"鱼饵",value:"38"},{label:"鱼线",value:"37"},{label:"鱼漂",value:"40"},{label:"装备",value:"49"},{label:"服饰",value:"51"},{label:"配件",value:"50"}],i=[{label:"社区",href:"/bbs"},{label:"话题",href:"/bbs/topic"},{label:"视频",href:"/video"}],o=[{label:"工商银行",value:"工商银行",icon:"gongshang",type:"danger"},{label:"农业银行",value:"农业银行",icon:"nongye",type:"success"},{label:"中国银行",value:"中国银行",icon:"zhongguo"},{label:"建设银行",value:"建设银行",icon:"jianshe",type:"primary"},{label:"招商银行",value:"招商银行",icon:"zhaoshang",type:"danger"},{label:"广发银行",value:"广发银行",icon:"guangfa",type:"danger"},{label:"邮政储蓄银行",value:"邮政储蓄银行",icon:"youzheng",type:"success"},{label:"光大银行",value:"光大银行",icon:"guangda",type:"warning"},{label:"中信银行",value:"中信银行",icon:"zhongxin",type:"danger"},{label:"交通银行",value:"交通银行",icon:"jiaotong",type:"danger"},{label:"兴业银行",value:"兴业银行",icon:"xingye",type:"primary"},{label:"浦发银行",value:"浦发银行",icon:"pufa",type:"primary"},{label:"华夏银行",value:"华夏银行",icon:"huaxia",type:"danger"},{label:"深圳发展银行",value:"深圳发展银行",icon:"shenzhenfazhan",type:"primary"},{label:"广州农商银行",value:"广州农商银行",icon:"nongshang",type:"warning"},{label:"民生银行",value:"民生银行",icon:"minsheng",type:"primary"},{label:"北京银行",value:"北京银行",icon:"beijing",type:"danger"},{label:"平安银行",value:"平安银行",icon:"pingan",type:"danger"},{label:"天津银行",value:"天津银行",icon:"tianjin",type:"primary"},{label:"上海银行",value:"上海银行",icon:"shanghai",type:"warning"},{label:"南京银行",value:"南京银行",icon:"nanjing",type:"danger"},{label:"宁波银行",value:"宁波银行",icon:"ningbo",type:"warning"},{label:"杭州银行",value:"杭州银行",icon:"hangzhou",type:"primary"},{label:"江苏银行",value:"江苏银行",icon:"jiangsu",type:"warning"},{label:"重庆银行",value:"重庆银行",icon:"chongqin",type:"success"},{label:"成都银行",value:"成都银行",icon:"chengdu",type:"warning"},{label:"哈尔滨银行",value:"哈尔滨银行",icon:"haerbin",type:"danger"},{label:"其他",value:"其他",icon:"",type:"primary"}]},945:function(e,t,a){__NEXT_REGISTER_PAGE("/video",function(){return e.exports=a(993),{page:e.exports.default}})},993:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(6),i=a.n(l),o=a(5),c=a(10),u=a(29),s=a(2),p=a.n(s),m=a(8),b=a.n(m),f=a(3),y=a(0),d=function(e,t){var a=t.$,n=e.className,l=a.getState("videoTop");return r.a.createElement(f.u,{className:b()("style-172177",n)},l.list.map(function(e){return r.a.createElement(f.u.Item,{key:e.tbId,thumb:r.a.createElement("span",{className:p.a.dynamic([["2228290073",[y.a.color_theme]]])+" t-30 l-42 t-primary"},"置顶"),href:"/video/detail?id=".concat(e.tbId),as:"/video/detail/".concat(e.tbId)},r.a.createElement("p",{className:p.a.dynamic([["2228290073",[y.a.color_theme]]])+" t-30 l-42 t-c1"},e.tit))}),r.a.createElement(p.a,{styleId:"2228290073",css:".style-172177{min-height:2.72rem;background:".concat(y.a.color_theme,";}"),dynamic:[y.a.color_theme]}))};d.contextTypes={$:i.a.object};var v=Object(o.d)(d),h=a(4),g=function(e,t){var a=t.$,n=e.commentCount,l=e.createTime,i=e.face,o=e.fileinfo,u=void 0===o?{}:o,s=e.likeCount,m=e.tag,d=void 0===m?[]:m,v=e.tbId,g=e.tit,_=e.userId,E=e.userName,w=e.className;return r.a.createElement(f.u.Item,{className:b()("style-336285",w)},r.a.createElement(c.b,{userId:_,img:i,name:E,date:h.a.lastDate(l),right:!!d.length&&" | ".concat(d.map(function(e){return e.label}).join("、"))}),r.a.createElement(f.t,{className:"mt-28",href:"/video/detail?id=".concat(v),as:"/video/detail/".concat(v),block:!0},r.a.createElement("p",{className:p.a.dynamic([["171164074",["style-336285",y.a.radius_sm]]])+" t-34 l-48 ls-o1"},g),r.a.createElement(f.G,{className:"".concat("style-336285","__poster mt-24"),src:u.path,poster:u.surface,fileSize:u.size,playSecond:u.play_time,height:"44vw",isPoster:!0,posterAnimate:!1})),r.a.createElement(f.l,{className:"mt-24"},r.a.createElement(f.l.Item,null,r.a.createElement(f.l,{justify:"center"},r.a.createElement(f.p,{className:"t-28 t-icon",type:"like-fill"}),r.a.createElement("span",{className:p.a.dynamic([["171164074",["style-336285",y.a.radius_sm]]])+" t-24 l-34 t-sub ls-o1 ml-sm"},parseInt(s)||"点赞"))),r.a.createElement(f.l.Item,null,r.a.createElement(f.l,{justify:"center"},r.a.createElement(f.p,{className:"t-32 t-icon",type:"comment-fill"}),r.a.createElement("span",{className:p.a.dynamic([["171164074",["style-336285",y.a.radius_sm]]])+" t-24 l-34 t-sub ls-o1 ml-sm"},parseInt(n)||"评论"))),r.a.createElement(f.l.Item,null,r.a.createElement(f.l,{justify:"center",onClick:function(){return a.page.showNativeShare()}},r.a.createElement(f.p,{className:"t-32 t-icon",type:"share-fill"}),r.a.createElement("span",{className:p.a.dynamic([["171164074",["style-336285",y.a.radius_sm]]])+" t-24 l-34 t-sub ls-o1 ml-sm"},"分享")))),r.a.createElement(p.a,{styleId:"171164074",css:".".concat("style-336285","__poster{width:100%;padding-bottom:36%;border-radius:").concat(y.a.radius_sm,";}"),dynamic:["style-336285",y.a.radius_sm]}))};g.contextTypes={$:i.a.object};var _=Object(o.d)(g),E=[{title:"推荐"},{title:"最新"},{title:"官方"}],w=function(e,t){var a=t.$,n=e.className,l=a.getState("_affixTabs").page,i=a.getState("video");return r.a.createElement("div",{className:b()("style-834045",n)},r.a.createElement(f.a,{tabs:E,page:l,onTabClick:a.page.onTabClick,extra:r.a.createElement(f.c,{type:"primary",size:"xs",inline:!0,ghost:!0,onClick:function(){return h.a.checkLogin(function(){return h.a.router.push("/video/post")})}},"发视频")},r.a.createElement(f.v,{className:"tool-list-split",data:i,renderRow:function(e){return r.a.createElement(_,e)},onEndReached:a.fetch.video})))};w.contextTypes={$:i.a.object};var j,T,O=Object(o.d)(w),S=a(11),N=a(12),I=a(7);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var $,R,L,M,q,A,G,Q,V,J=(j=function(e){function t(){var e,a,n,r,l,i,o,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),p=0;p<u;p++)s[p]=arguments[p];return n=this,r=(e=x(t)).call.apply(e,[this].concat(s)),a=!r||"object"!==k(r)&&"function"!=typeof r?C(n):r,l=a,i="state",o=T,c=C(C(a)),o&&Object.defineProperty(l,i,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(c):void 0}),a.params={queryVideo:{}},a.setQuery={video:function(e){var t;switch(E[e].title){case"推荐":t={_:{limit:I.a.__LIMIT__,order:{sortNo:"desc",createTime:"desc"}}};break;case"最新":t={_:{limit:I.a.__LIMIT__,order:{createTime:"desc"}}};break;case"官方":t={_:{limit:I.a.__LIMIT__,order:{createTime:"desc"},search:{from:0}}}}a.setParams({queryVideo:t})}},a.fetch={config:{one:["videoTop"],update:["video"]},videoTop:function(){return a.fetchThenSetState("get_video_list-list","videoTop",{_:{limit:3,search:{recomNo:[1,50]}}})},video:function(e){var t=a.params.queryVideo;return a.fetchListThenSetState("get_video_list-list","video",t,e)}},a.page={onTabClick:function(e,t){a.setQuery.video(t),a.fetch.video(!0),a.setState({page:t},"_affixTabs"),h.a.scrollTo(0)}},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,N["a"]),a=t,(n=[{key:"storeInit",value:function(){var e=this.params.params.id,t=void 0===e?1:e;this.setQuery.video(t),this.setState({page:t},"_affixTabs")}}])&&z(a.prototype,n),r&&z(a,r),t}(),$=j.prototype,R="state",L=[S.k],M={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_affixTabs:{page:0},videoTop:I.a.__EMPTY__,video:I.a.__EMPTY__})}},A={},Object.keys(M).forEach(function(e){A[e]=M[e]}),A.enumerable=!!A.enumerable,A.configurable=!!A.configurable,("value"in A||A.initializer)&&(A.writable=!0),A=L.slice().reverse().reduce(function(e,t){return t($,R,e)||e},A),q&&void 0!==A.initializer&&(A.value=A.initializer?A.initializer.call(q):void 0,A.initializer=void 0),void 0===A.initializer&&(Object.defineProperty($,R,A),A=null),T=A,j);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function X(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=Object(o.c)(J)(G=Object(o.d)((V=Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,B(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement(c.k,{title:"视频",hide:!0},r.a.createElement(c.h,{data:u.b,active:"视频"}),r.a.createElement(v,null),r.a.createElement(O,{className:"mt-d"}))}}])&&D(a.prototype,n),l&&D(a,l),t}(),Q.contextTypes={$:i.a.object},G=V))||G)||G;t.default=H}},[[945,1,0]]]);