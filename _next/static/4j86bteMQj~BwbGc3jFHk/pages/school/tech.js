(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1001:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(6),i=a.n(o),l=a(5),c=a(10),u=a(3),s=a(4),d=function(){return r.a.createElement(u.o,{show:!0,hd:r.a.createElement(u.p,{className:"t-34 t-void t-b",type:"left",onClick:s.a.router.back}),bd:null,style:{background:"transparent"}})},f=a(2),m=a.n(f),p=a(0),v=a(27),b=function(e,t){var a=t.$,n=a.getState("detail"),o=n.tbId,i=n.name,l=n.explain,c=n._loaded,s=a.getState("video"),d=s.list,f=s.pageinfo,b=s._loaded,h=c&&b;return r.a.createElement(u.l,{className:"style-115514",direction:"column",justify:"center",style:{backgroundImage:o?"url(".concat(v.b,"/").concat(o,".png)"):void 0}},h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:m.a.dynamic([["3566552872",[p.a._bg,p.a.color_main]]])+" t-30 l-42 t-void mt-36"},i),r.a.createElement("p",{className:m.a.dynamic([["3566552872",[p.a._bg,p.a.color_main]]])+" t-24 l-34 t-void mt-8"},"每季 - 期 / 观看"," ",d.reduce(function(e,t){return parseInt(t.viewCount)+e},0)," /"," ",f.recordtotal," 个视频"),l&&r.a.createElement("p",{className:m.a.dynamic([["3566552872",[p.a._bg,p.a.color_main]]])+" t-24 l-34 t-void mt-8"},l)),r.a.createElement(m.a,{styleId:"3566552872",css:".style-115514{height:40vw;padding:0.56rem 0.48rem;margin-top:-1rem;".concat(p.a._bg,";background-color:").concat(p.a.color_main,";}"),dynamic:[p.a._bg,p.a.color_main]}))};b.contextTypes={$:i.a.object};var h=Object(l.d)(b),y=a(8),g=a.n(y),_=a(176),w=function(e,t){var a=t.$,n=e.className,o=a.getState("video");return r.a.createElement(u.v,{className:g()("style-182735",n),data:o,renderRow:function(e){return r.a.createElement(_.a,e)},onEndReached:a.fetch.video})};w.contextTypes={$:i.a.object};var E,j,x=Object(l.d)(w),O=a(9),S=a.n(O),N=a(11),k=a(12),I=a(7);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t,a,n,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void a(e)}l.done?t(c):Promise.resolve(c).then(n,r)}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var R,A,G,J,M,F,U=(E=function(e){function t(){var e,a,n,r,o,i,l,c,u,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var d=arguments.length,f=new Array(d),m=0;m<d;m++)f[m]=arguments[m];return n=this,r=(e=z(t)).call.apply(e,[this].concat(f)),a=!r||"object"!==P(r)&&"function"!=typeof r?C(n):r,o=a,i="state",l=j,c=C(C(a)),l&&Object.defineProperty(o,i,{enumerable:l.enumerable,configurable:l.configurable,writable:l.writable,value:l.initializer?l.initializer.call(c):void 0}),a.fetch={config:{one:["detail","video"]},detail:(u=S.a.mark(function e(){var t,n,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.params.params.id,n=a.fetchThenSetState("get_video-v2_type_id-list","tech",{tbId:t}),e.next=4,n;case 4:return(r=e.sent)&&r.list&&r.list.length&&a.setState(r.list[0],"detail"),e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}),s=function(){var e=this,t=arguments;return new Promise(function(a,n){var r=u.apply(e,t);function o(e){T(r,a,n,o,i,"next",e)}function i(e){T(r,a,n,o,i,"throw",e)}o(void 0)})},function(){return s.apply(this,arguments)}),video:function(){var e=a.params.params.id;return a.fetchThenSetState("get_video_list-list","video",{_:{search:{typeId:e}}})}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,k["a"]),t}(),R=E.prototype,A="state",G=[N.k],J={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({detail:{},video:I.a.__EMPTY__})}},F={},Object.keys(J).forEach(function(e){F[e]=J[e]}),F.enumerable=!!F.enumerable,F.configurable=!!F.configurable,("value"in F||F.initializer)&&(F.writable=!0),F=G.slice().reverse().reduce(function(e,t){return t(R,A,e)||e},F),M&&void 0!==F.initializer&&(F.value=F.initializer?F.initializer.call(M):void 0,F.initializer=void 0),void 0===F.initializer&&(Object.defineProperty(R,A,F),F=null),j=F,E),V=function(e,t){var a=t.$.getState("detail").name;return r.a.createElement(c.k,{title:a||"教学专题",header:r.a.createElement(d,null)},r.a.createElement(h,null),r.a.createElement(x,null))};V.contextTypes={$:i.a.object};var X=Object(l.c)(U)(Object(l.d)(V));t.default=X},176:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(1),i=a.n(o),l=a(5),c=a(3),u=a(4);t.a=Object(l.d)(function(e){var t=e.tbId,a=e.fileinfo,n=void 0===a?{}:a,o=e.tit,l=e.viewCount,s=e.likeCount,d=n.surface;return i.a.createElement(c.u.Item,{className:"style-188332",thumb:i.a.createElement("div",{className:"jsx-1682861026 thumb"},i.a.createElement(c.G,{poster:u.a.getAppImgUrl(d,"scale"),height:"1.48rem",isPoster:!0})),href:"/video/detail?id=".concat(t),as:"/video/detail/".concat(t)},i.a.createElement("div",{className:"jsx-1682861026 wrap"},i.a.createElement("p",{className:"jsx-1682861026 t-30 l-42 t-c2"},o),i.a.createElement("p",{className:"jsx-1682861026 t-24 l-34 t-sub mt-8"},"播放 ",l," / 点赞 ",s)),i.a.createElement(r.a,{styleId:"1682861026",css:".thumb.jsx-1682861026{width:2.2rem;padding:0.32rem 0;}.thumb.jsx-1682861026 .c-video{border-radius:0.04rem;}.thumb.jsx-1682861026 .img-play{width:0.8rem !important;height:0.8rem !important;}.wrap.jsx-1682861026{height:1.24rem;}"}))})},27:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return o});var n=a(4).a.cdn("/static/images/src/school"),r=[{label:"学院推荐",value:"",type:"home",href:"/school",replace:!0},{label:"教学专题",value:"",type:"tech",href:"/school/tech_category"},{label:"本汀产品",value:"31",type:"video",href:"/school/video?id=31",as:"/school/video/31",replace:!0},{label:"钓鱼实战",value:"32",type:"video",href:"/school/video?id=32",as:"/school/video/32",replace:!0},{label:"真人秀",value:"33",type:"video",href:"/school/video?id=33",as:"/school/video/33",replace:!0},{label:"资讯类",value:"",type:"article",href:"/school/article"},{label:"MV",value:"34",type:"video",href:"/school/video?id=34",as:"/school/video/34",replace:!0},{label:"微电影",value:"35",type:"video",href:"/school/video?id=35",as:"/school/video/35",replace:!0}],o=[{label:"推荐阅读",value:[98,99,100,101]},{label:"基础教学",value:"98"},{label:"实战分享",value:"99"},{label:"赛事指南",value:"100"},{label:"实战论文",value:"101"}]},923:function(e,t,a){__NEXT_REGISTER_PAGE("/school/tech",function(){return e.exports=a(1001),{page:e.exports.default}})}},[[923,1,0]]]);