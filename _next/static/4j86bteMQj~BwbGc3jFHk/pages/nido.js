(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{28:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(16)),r=d(a(21)),c=d(a(18)),o=d(a(19)),s=d(a(17)),n=d(a(20)),i=d(a(8)),m=d(a(1));function d(e){return e&&e.__esModule?e:{default:e}}var y=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&(a[l[r]]=e[l[r]])}return a},b=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,n.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t,a=this.props,c=a.className,o=a.prefixCls,s=a.children,n=a.text,d=a.size,b=a.overflowCount,u=a.dot,_=a.corner,p=a.hot,f=y(a,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);b=b,n="number"==typeof n&&n>b?b+"+":n,u&&(n="");var h=(0,i.default)((e={},(0,r.default)(e,o+"-dot",u),(0,r.default)(e,o+"-dot-large",u&&"large"===d),(0,r.default)(e,o+"-text",!u&&!_),(0,r.default)(e,o+"-corner",_),(0,r.default)(e,o+"-corner-large",_&&"large"===d),e)),g=(0,i.default)(o,c,(t={},(0,r.default)(t,o+"-not-a-wrapper",!s),(0,r.default)(t,o+"-corner-wrapper",_),(0,r.default)(t,o+"-hot",!!p),(0,r.default)(t,o+"-corner-wrapper-large",_&&"large"===d),t));return m.default.createElement("span",{className:g},s,(n||u)&&m.default.createElement("sup",(0,l.default)({className:h},f),n))}}]),t}(m.default.Component);t.default=b,b.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},e.exports=t.default},848:function(e,t,a){__NEXT_REGISTER_PAGE("/nido",function(){return e.exports=a(955),{page:e.exports.default}})},955:function(e,t,a){"use strict";a.r(t);var l=a(1),r=a.n(l),c=a(5),o=a(3),s=a(10),n=a(2),i=a.n(n),m=a(6),d=a.n(m),y=a(8),b=a.n(y),u=function(e,t){var a=t.$,l=e.className,c=a.getState("bbs").list;return r.a.createElement("div",{className:"jsx-2964593064 "+(b()("style-125869",l)||"")},r.a.createElement(s.i,{title:"牛贴赏析",href:"/bbs?id=2",as:"/bbs/2"}),r.a.createElement(o.u,null,c.map(function(e){return r.a.createElement(s.m,{key:e.threadId,userId:e.userId,img:e.faceImg,vip:e.vip,name:e.niname,level:e.grade,createTime:e.createTime,title:e.title,likeCount:e.likeAdd,commentCount:e.replyNum,href:"/bbs/article?id=".concat(e.threadId),as:"/bbs/article/".concat(e.threadId)})})),r.a.createElement(i.a,{styleId:"2964593064",css:".style-125869.jsx-2964593064{min-height:9.61rem;}"}))};u.contextTypes={$:d.a.object};var _=Object(c.d)(u),p=a(4),f=function(e,t){var a=t.$.getState("carousel").list;return r.a.createElement("div",{className:"jsx-2008610434 style-185133"},r.a.createElement(o.d,{data:a.map(function(e){return{src:p.a.getAppImgUrl(e.imgPath,"scale"),href:e.url}}),height:"42.6vw"}),r.a.createElement(i.a,{styleId:"2008610434",css:".style-185133.jsx-2008610434{height:42.6vw;}"}))};f.contextTypes={$:d.a.object};var h=Object(c.d)(f),g=function(e,t){var a=t.$,l=e.className,c=a.getState("discovery").list;return r.a.createElement("div",{className:"jsx-3761651584 "+(b()("style-903950",l)||"")},r.a.createElement(s.i,{title:"动态精选",href:"/discovery?id=1",as:"/discovery/1"}),r.a.createElement(o.u,null,c.map(function(e){return r.a.createElement(s.m,{key:e.infoId,userId:e.userId,img:e.faceImg,vip:e.vip,name:e.niname,level:e.grade,createTime:e.publishTime,title:e.con,likeCount:e.likeCount,commentCount:e.commentCount,href:"/discovery/detail?id=".concat(e.infoId),as:"/discovery/detail/".concat(e.infoId)})})),r.a.createElement(i.a,{styleId:"3761651584",css:".style-903950.jsx-3761651584{min-height:9.61rem;}"}))};g.contextTypes={$:d.a.object};var E=Object(c.d)(g),v=a(28),N=a.n(v),I=a(0),w=function(e,t){var a=t.$.getState("event"),l=a.panic,c=a.floor,s=a.goldAuction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.t,{className:"".concat("style-148159","__block"),href:"/shop/miaosha"},r.a.createElement("div",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" content"},r.a.createElement("p",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])},r.a.createElement("span",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" t-34 l-48 t-danger"},"极速秒杀"),r.a.createElement("span",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" t-24 l-34 t-sub ml-8"},"倒计时：")),r.a.createElement(o.f,{className:"mt-10",beginTime:l.beginTime},r.a.createElement("span",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" t-24 mt-10"},"进行中")),r.a.createElement(o.q,{className:"".concat("style-148159","__img-lg"),src:p.a.getAppImgUrl(l.imgId),transparent:!0}))),r.a.createElement("div",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" "+"".concat("style-148159","__block")},r.a.createElement(o.t,{className:"".concat("style-148159","__square"),href:"/bbs/floor"},r.a.createElement("div",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" content"},r.a.createElement("p",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" t-30 l-42"},"欢乐踩楼"),r.a.createElement(N.a,{className:"mt-6",text:"进行中",style:I.a._badge}),r.a.createElement(o.q,{className:"".concat("style-148159","__img-sm"),src:p.a.getAppImgUrl(c.imgId,"scale"),transparent:!0}))),r.a.createElement(o.t,{className:"".concat("style-148159","__square"),href:"/shop/auction"},r.a.createElement("div",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" content"},r.a.createElement("p",{className:i.a.dynamic([["1724997762",["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]],["3966622350",[I.a._full]]])+" t-30 l-42"},"金币竞拍"),2===s.state&&r.a.createElement(N.a,{className:"mt-6",text:"进行中",style:I.a._badge}),r.a.createElement(o.q,{className:"".concat("style-148159","__img-sm"),src:p.a.getAppImgUrl(s.imgId,"scale"),transparent:!0})))),r.a.createElement(i.a,{styleId:"1724997762",css:".".concat("style-148159","__block{display:inline-block;position:relative;vertical-align:top;width:50%;padding-bottom:45.6%;background:").concat(I.a.color_theme,";}.").concat("style-148159","__block:first-child{border-right:").concat(I.a.border,";}.").concat("style-148159","__square{display:inline-block;position:absolute;top:0;left:0;width:100%;padding-bottom:45.6%;}.").concat("style-148159","__square:last-child{top:50%;border-top:").concat(I.a.border,";}.").concat("style-148159","__img-lg{position:absolute;right:0.2rem;bottom:0.2rem;width:44%;padding-bottom:44%;background-color:transparent;background-size:contain;}.").concat("style-148159","__img-sm{position:absolute;top:50%;left:1.8rem;width:32%;padding-bottom:32%;background-color:transparent;background-size:contain;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}"),dynamic:["style-148159",I.a.color_theme,"style-148159",I.a.border,"style-148159","style-148159",I.a.border,"style-148159","style-148159"]}),r.a.createElement(i.a,{styleId:"3966622350",css:".content.__jsx-style-dynamic-selector{".concat(I.a._full,";padding:6.4% 8%;}"),dynamic:[I.a._full]}))};w.contextTypes={$:d.a.object};var j=Object(c.d)(w),k=a(7),x=p.a.cdn("/static/images/src/index/Nido"),O=[{icon:"bt",label:"本汀官网",href:"/"},{icon:"invite",label:"同城约钓"},{icon:"point",label:"积分中心",href:"/points"},{icon:"book",label:"垂钓学院",href:"/school"},{icon:"coupon",label:"社区福利",href:"https://www.nidosport.com/event/get_coupon"},{icon:"gift",label:"粉丝福利",href:"/event"},{icon:"cash",label:"现金福利",href:"https://www.tw-bt.com/shop/coupon"},{icon:"nearby",label:"附近",href:"https://www.tw-bt.com/merchant"}],T={list:[{tid:4,subject:"分享一下你的野钓经验？",dateline:1522029258,closed:1,topicList:[{niname:"灵动1987",faceImg:"static/uploads/png/20170519/591e5f9e2c2bc.png",threadId:93116,topicId:4,userId:4711309810694711,content:"人们喜欢钓鱼不都是为了吃鱼， 为的是钓鱼过程中的那份心情。钓鱼最大的好处，就是可以静静地坐在那里，什么都不用想，只是目不转睛地盯着浮标，等着鱼儿上钩， 此刻，平常生活中的闲事、琐事、烦心事，全都抛到脑后，让人得到彻底放松。"},{niname:"喵老板",faceImg:"140696",threadId:93096,topicId:4,userId:4608069988300960,content:"晚上去水库野钓的时候看见别人在钓鱼时千万别问:有口吗？别问我为什么，上次被下的差点掉水里。"},{niname:"松江奇鱼",faceImg:"154529",threadId:93054,topicId:4,userId:4568450504623169,content:"我的野钓经验：首先你得找到一个有鱼的地方作钓，没鱼的地方再怎么钓还是次次空军；再者是上鱼后入护前先检查一下鱼护有没有破个大洞，不注意鱼钻洞跑了还是空军；最后是鱼护拉出水时得悠着点，当心鱼护挂底址破了你还是空军。[尴尬]"}],topicTotal:402},{tid:3,subject:"钓鱼时，最让你崩溃的瞬间是？",dateline:1522029258,closed:1,topicList:[{niname:"灵动平凡",faceImg:"148600",threadId:90938,topicId:3,userId:4592557630737344,content:"正钓的美，正期待上大物呢，家里人打电话让回家。"},{niname:"灵动7572",faceImg:"254713",threadId:90914,topicId:3,userId:4687405759568680,content:"遇上大鱼，搏斗了好久，最终因为各种原因，没钓起来，鱼跑了"},{niname:"shanrulong",faceImg:"93568",threadId:90879,topicId:3,userId:4599766574451693,content:"大鱼带着鱼钩，鱼线和鱼漂走了，还顺便带走了我的鱼竿！"}],topicTotal:340},{tid:2,subject:"分享一下你至今最大的渔获",dateline:1522029258,closed:1,topicList:[{niname:"张锦坤",faceImg:"static/uploads/jpeg/20170525/5926e039d3a9d.jpeg",threadId:89042,topicId:2,userId:4569898986946768,content:"去年用3.9米的爆草钓上一条11斤的白鲢"},{niname:"宏东",faceImg:"263408",threadId:89035,topicId:2,userId:4688463321237242,content:"三小时110斤，4.5米爆草，1.5主，0.8子，放鱼400斤"},{niname:"灵动82314",faceImg:"static/uploads/png/20170519/591e5f9e2c2bc.png",threadId:89033,topicId:2,userId:4691119048298272,content:"新人求罩，互拉进群！谢谢各位老司机！带小弟一块玩，一块娱乐"}],topicTotal:227}]},S=function(){return r.a.createElement(o.l,{className:"style-616917"},[{title:"精彩视频",desc:"精彩视频尽在本汀",icon:"video",href:"/video"},{title:"本汀直播",desc:"直播有礼，乐开怀",icon:"now",href:"https://www.tw-bt.com/bbs/block/95"}].map(function(e){return r.a.createElement(o.l.Item,{key:e.title,className:"".concat("style-616917","__item"),href:e.href},r.a.createElement(o.l,{justify:"center",align:"start"},r.a.createElement("img",{src:"".concat(x,"/").concat(e.icon).concat(k.a.__IMG_DPR__,".png"),alt:"",className:"jsx-2978618437 "+i.a.dynamic([["3733859128",["style-616917",I.a.color_theme]]])+" img-icon"}),r.a.createElement("div",{className:"jsx-2978618437 "+i.a.dynamic([["3733859128",["style-616917",I.a.color_theme]]])+" ml-8"},r.a.createElement("p",{className:"jsx-2978618437 "+i.a.dynamic([["3733859128",["style-616917",I.a.color_theme]]])+" t-34 l-48 t-title"},e.title),r.a.createElement("p",{className:"jsx-2978618437 "+i.a.dynamic([["3733859128",["style-616917",I.a.color_theme]]])+" t-24 l-34 t-sub mt-2"},e.desc))))}),r.a.createElement(i.a,{styleId:"3733859128",css:".style-616917{padding:0.16rem 0;}.".concat("style-616917","__item{position:relative;padding:0.6rem 0;margin-left:0 !important;background:").concat(I.a.color_theme,";}"),dynamic:["style-616917",I.a.color_theme]}),r.a.createElement(i.a,{styleId:"2978618437",css:".img-icon.jsx-2978618437{width:0.8rem;height:0.8rem;}"}))},q=a(14),P=a.n(q),z=function(e,t){var a=t.$.getState("event"),l=a.panicGold,c=a.pointOncebuy,s=a.guess,n=a.pointAuction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" block block-1"},r.a.createElement(o.t,{className:"".concat("style-519756","__square"),href:"/shop/jianlou"},r.a.createElement(P.a,{className:"".concat("style-519756","__content")},r.a.createElement(o.q,{className:"".concat("style-519756","__img-sm"),src:p.a.getAppImgUrl(l.imgId,"scale"),transparent:!0}),r.a.createElement("div",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" ml-16"},r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-30 l-42 t-title"},"金币捡漏"),1===l.state&&r.a.createElement(P.a,{className:"mt-6"},r.a.createElement(o.f,{className:"t-24 l-34 t-danger",beginTime:l.beginTime,theme:!1}),r.a.createElement("span",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-24 l-34 t-sub"},"后开始")),2===l.state&&r.a.createElement(N.a,{className:"mt-6",text:"进行中",style:I.a._badge}),void 0===l.state&&r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-22 l-48 t-sub"},"暂无活动")))),r.a.createElement(o.t,{className:"".concat("style-519756","__square"),href:"/shop/wabao"},r.a.createElement(P.a,{className:"".concat("style-519756","__content")},r.a.createElement(o.q,{className:"".concat("style-519756","__img-sm"),src:p.a.getAppImgUrl(c.imgId,"scale"),transparent:!0}),r.a.createElement("div",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" ml-16"},r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-30 l-42 t-title"},"积分挖宝"),2===c.state?r.a.createElement(N.a,{className:"mt-6",text:"进行中",style:I.a._badge}):r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-22 l-48 t-sub"},"暂无活动"))))),r.a.createElement("div",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" block"},r.a.createElement(o.t,{className:"".concat("style-519756","__square"),href:"/shop/guess"},r.a.createElement(P.a,{className:"".concat("style-519756","__content")},r.a.createElement(o.q,{className:"".concat("style-519756","__img-sm"),src:p.a.getAppImgUrl(s.imgId,"scale"),transparent:!0}),r.a.createElement("div",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" ml-16"},r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-30 l-42 t-title"},"欢乐猜鱼"),2===s.state?r.a.createElement(N.a,{className:"mt-6",text:"进行中",style:I.a._badge}):r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-22 l-48 t-sub"},"暂无活动")))),r.a.createElement(o.t,{className:"".concat("style-519756","__square"),href:"/shop/auction?id=1",as:"/shop/auction/1"},r.a.createElement(P.a,{className:"".concat("style-519756","__content")},r.a.createElement(o.q,{className:"".concat("style-519756","__img-sm"),src:p.a.getAppImgUrl(n.imgId,"scale"),transparent:!0}),r.a.createElement("div",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" ml-16"},r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-30 l-42 t-title"},"积分竞拍"),2===n.state?r.a.createElement(N.a,{className:"mt-6",text:"进行中",style:I.a._badge}):r.a.createElement("p",{className:i.a.dynamic([["3112063709",["style-519756","style-519756",I.a.border,"style-519756","style-519756"]],["143227008",[I.a.color_theme,I.a.border]]])+" t-22 l-48 t-sub"},"暂无活动"))))),r.a.createElement(i.a,{styleId:"3112063709",css:".".concat("style-519756","__square{display:inline-block;position:absolute;top:0;left:0;width:100%;padding-bottom:45.6%;}.").concat("style-519756","__square:last-child{top:50%;border-top:").concat(I.a.border,";}.").concat("style-519756","__content{position:absolute;top:0;right:0;bottom:0;left:0;padding:6.4% 8%;}.").concat("style-519756","__img-sm{width:32%;padding-bottom:32%;background-color:transparent;background-size:contain;}"),dynamic:["style-519756","style-519756",I.a.border,"style-519756","style-519756"]}),r.a.createElement(i.a,{styleId:"143227008",css:".block.__jsx-style-dynamic-selector{display:inline-block;position:relative;vertical-align:top;width:50%;padding-bottom:45.6%;background:".concat(I.a.color_theme,";}.block-1.__jsx-style-dynamic-selector{border-right:").concat(I.a.border,";}"),dynamic:[I.a.color_theme,I.a.border]}))};z.contextTypes={$:d.a.object};var A=Object(c.d)(z),C=function(e){var t=e.className;return r.a.createElement("div",{className:b()("style-210486",t)},r.a.createElement(j,null),r.a.createElement(S,null),r.a.createElement(A,null))};function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],l=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(l=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){r=!0,c=e}finally{try{l||null==s.return||s.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=function(e,t){var a=t.$,l=e.className,c=a.getState("fish").list;return r.a.createElement("div",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" "+(b()("style-767697",l)||"")},r.a.createElement(s.i,{title:"鱼获有礼",href:"/discovery/fish/category"}),r.a.createElement("div",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" tool-wrap-scroll tool-wind"},c.map(function(e){var t=$(e.tit.split("|"),4),a=t[0],l=t[2],c=t[3];return r.a.createElement(o.t,{key:e.tbId,className:"".concat("style-767697","__item"),href:"/discovery/detail?id=".concat(e.infoId),as:"/discovery/detail/".concat(e.infoId)},r.a.createElement(P.a,null,r.a.createElement(o.q,{src:e.faceImg,size:"0.72rem",circle:!0}),r.a.createElement(P.a.Item,{className:"ml-20"},r.a.createElement("p",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" t-30 l-44 t-title ls-o1"},e.niname),r.a.createElement("p",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" t-24 l-36 t-sub"},a," | 喜获",l,c,"斤巨物"))),r.a.createElement(o.q,{className:"".concat("style-767697","__thumb mt-24"),src:e.fileList&&e.fileList[0]?p.a.getAppImgUrl(e.fileList[0].fileId,"scale"):""},r.a.createElement("img",{src:"".concat(x,"/new").concat(k.a.__IMG_DPR__,".png"),alt:"",className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" img-new"})),r.a.createElement("div",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" info"},r.a.createElement("span",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" t-56 l-80 t-danger t-b ls-1"},e.rate),r.a.createElement("span",{className:i.a.dynamic([["36534420",["style-767697",I.a.color_bg,"style-767697","style-767697"]],["936518246",[I.a.bottom,I.a.color_theme]]])+" t-24 l-34 t-sub"},"分")))})),r.a.createElement(i.a,{styleId:"36534420",css:".".concat("style-767697","__item{display:inline-block;width:6rem;padding:0.24rem 0.32rem;background:").concat(I.a.color_bg,";border-radius:0.06rem;}.").concat("style-767697","__item:not(:first-child){margin-left:0.3rem;}.").concat("style-767697","__thumb{width:100% !important;height:auto !important;padding-bottom:48.4%;border-radius:0.06rem;}"),dynamic:["style-767697",I.a.color_bg,"style-767697","style-767697"]}),r.a.createElement(i.a,{styleId:"936518246",css:".style-767697.__jsx-style-dynamic-selector{min-height:6.75rem;padding-bottom:".concat(I.a.bottom,";background:").concat(I.a.color_theme,";}.img-new.__jsx-style-dynamic-selector{position:absolute;width:0.8rem;height:0.36rem;top:0.16rem;right:0;}.info.__jsx-style-dynamic-selector{padding:0.16rem 0.16rem 0;}"),dynamic:[I.a.bottom,I.a.color_theme]}))};U.contextTypes={$:d.a.object};var L=Object(c.d)(U),M=function(e){var t=e.className;return r.a.createElement("div",{className:i.a.dynamic([["3601931921",[I.a.space,I.a.wind,I.a.color_theme,"style-419025","style-419025"]]])+" "+(b()("style-419025",t)||"")},O.map(function(e){return r.a.createElement(o.t,{key:e.label,className:"".concat("style-419025","__item t-c"),href:e.href},r.a.createElement(o.p,{type:e.icon,color:!0,style:{width:"0.56rem",height:"0.56rem"}}),r.a.createElement("p",{className:i.a.dynamic([["3601931921",[I.a.space,I.a.wind,I.a.color_theme,"style-419025","style-419025"]]])+" t-24 l-34 t-sub mt-16"},e.label))}),r.a.createElement(i.a,{styleId:"3601931921",css:".style-419025{padding:".concat(I.a.space," ").concat(I.a.wind,";background:").concat(I.a.color_theme,";}.").concat("style-419025","__item{display:inline-block;width:25%;}.").concat("style-419025","__item:nth-of-type(n + 5){margin-top:0.42rem;}"),dynamic:[I.a.space,I.a.wind,I.a.color_theme,"style-419025","style-419025"]}))},R=function(e,t){var a=t.$,l=e.className,c=a.getState("topic");return r.a.createElement("div",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" "+(b()("style-189994",l)||"")},r.a.createElement(s.i,{title:"话题讨论",href:"/bbs/topic"}),r.a.createElement("div",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" wrap tool-wrap-scroll"},c.list.map(function(e,t){return r.a.createElement("div",{key:e.tid,className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" item"},r.a.createElement(P.a,null,r.a.createElement(o.q,{className:"".concat("style-189994","__avatar"),src:e.topicList[0].faceImg,size:"0.82rem",circle:!0}),r.a.createElement(P.a.Item,null,r.a.createElement("p",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-28 l-40 t-m"},e.subject),r.a.createElement("p",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-24 l-34 mt-4"},0===t&&r.a.createElement("span",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-danger"},"热门 · "),r.a.createElement("span",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-primary"},e.topicTotal,"人"),r.a.createElement("span",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-sub"},"参与讨论")))),r.a.createElement("div",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" mt-24"},e.topicList.map(function(e){return r.a.createElement(o.t,{key:e.threadId,className:"mt-16",href:"/bbs/article?id=".concat(e.threadId),as:"/bbs/article/".concat(e.threadId),block:!0},r.a.createElement("p",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" p-content t-30 l-42 t-c1"},r.a.createElement("span",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-sub"},e.niname,"："),r.a.createElement("span",{className:i.a.dynamic([["3353758153",["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]],["1828551649",[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]]])+" t-title"},e.content)))})))})),r.a.createElement(i.a,{styleId:"3353758153",css:".".concat("style-189994","__avatar{position:relative;border:0.04rem solid ").concat(I.a.color_primary,";}.").concat("style-189994","__avatar:before{").concat(I.a._full,";content:'#';font-size:0.48rem;line-height:0.72rem;text-align:center;color:").concat(I.a.color_void,";background:rgba(0,0,0,0.32);}"),dynamic:["style-189994",I.a.color_primary,"style-189994",I.a._full,I.a.color_void]}),r.a.createElement(i.a,{styleId:"1828551649",css:".style-189994.__jsx-style-dynamic-selector{padding-bottom:".concat(I.a.bottom,";background:").concat(I.a.color_theme,";}.wrap.__jsx-style-dynamic-selector{padding:0 ").concat(I.a.wind,";}.item.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:80%;padding-right:0.48rem;margin-right:0.48rem;border-right:").concat(I.a.border,";}.item.__jsx-style-dynamic-selector:last-child{margin-right:0;border-right:0;}.p-content.__jsx-style-dynamic-selector{white-space:initial;}"),dynamic:[I.a.bottom,I.a.color_theme,I.a.wind,I.a.border]}))};R.contextTypes={$:d.a.object};var Y,G,D=Object(c.d)(R),F=a(11),J=a(12);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Q,V,W,Z,ee,te,ae=(Y=function(e){function t(){var e,a,l,r,c,o,s,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,m=new Array(i),d=0;d<i;d++)m[d]=arguments[d];return l=this,r=(e=X(t)).call.apply(e,[this].concat(m)),a=!r||"object"!==B(r)&&"function"!=typeof r?K(l):r,c=a,o="state",s=G,n=K(K(a)),s&&Object.defineProperty(c,o,{enumerable:s.enumerable,configurable:s.configurable,writable:s.writable,value:s.initializer?s.initializer.call(n):void 0}),a.fetch={config:{one:[["carousel",!0],["event",!0],"fish","discovery","bbs"]},carousel:function(){return a.fetchThenSetState("get_carousel_list","carousel",{imgType:1})},event:function(){return a.fetchThenSetState("get_event_home-info","event")},fish:function(){return a.fetchThenSetState("get_discovery_list","fish",{_:{limit:3,search:{"rate[>]":0,isReclist:1}}})},discovery:function(){return a.fetchThenSetState("get_discovery_list","discovery",{_:{limit:6,search:{isRec:1}}})},bbs:function(){return a.fetchThenSetState("get_bbs_list","bbs",{_:{limit:6,search:{isDigest:1,"replyNum[>]":50}}})}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,J["a"]),t}(),Q=Y.prototype,V="state",W=[F.k],Z={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({carousel:k.a.__EMPTY__,event:{floor:{},guess:{},panic:{},panicGold:{},pointOncebuy:{},pointAuction:{},goldAuction:{}},topic:T,fish:k.a.__EMPTY__,discovery:k.a.__EMPTY__,bbs:k.a.__EMPTY__})}},te={},Object.keys(Z).forEach(function(e){te[e]=Z[e]}),te.enumerable=!!te.enumerable,te.configurable=!!te.configurable,("value"in te||te.initializer)&&(te.writable=!0),te=W.slice().reverse().reduce(function(e,t){return t(Q,V,e)||e},te),ee&&void 0!==te.initializer&&(te.value=te.initializer?te.initializer.call(ee):void 0,te.initializer=void 0),void 0===te.initializer&&(Object.defineProperty(Q,V,te),te=null),G=te,Y),le=Object(c.c)(ae)(Object(c.d)(function(){return r.a.createElement(s.k,{title:"灵动社区",hideBack:!0,ft:r.a.createElement(o.t,{className:"t-30 l-42",href:"/"},"官网")},r.a.createElement(h,null),r.a.createElement(M,null),r.a.createElement(C,{className:"mt-d"}),r.a.createElement(D,{className:"mt-d"}),r.a.createElement(L,{className:"mt-d"}),r.a.createElement(E,{className:"mt-d"}),r.a.createElement(_,{className:"mt-d"}))}));t.default=le}},[[848,1,0]]]);