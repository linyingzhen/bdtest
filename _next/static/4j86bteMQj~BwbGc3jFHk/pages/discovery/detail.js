(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{180:function(e,t,n){"use strict";var a,r,o,i=n(2),c=n.n(i),s=n(1),l=n.n(s),u=n(6),m=n.n(u),p=n(8),f=n.n(p),d=n(5),h=n(3),y=n(4),g=n(14),b=n.n(g),w=n(7),v="style-397295",_=function(e){var t=e.data,n=void 0===t?[]:t,a=e.max,r=void 0===a?9:a,o=e.onImgClick,i=e.className;if(1===n.length){var s=y.a.getAppImgUrl(n[0].src,"scale");return l.a.createElement(h.q,{className:f()(v,i),src:s,lazyload:!0,animate:!0,onClick:function(){return o(0)}},l.a.createElement("img",{src:s,alt:"",className:"jsx-186250477"}),l.a.createElement(c.a,{styleId:"868442853",css:".style-397295{position:relative;background-size:contain;background-position:top left;background-repeat:no-repeat;}"}),l.a.createElement(c.a,{styleId:"455188225",css:"img.jsx-186250477{width:100% !important;height:initial !important;max-width:57.5vw;max-height:100vw;visibility:hidden;}"}))}var u=n;return 4===u.length&&(u=n.length>=r?n:[n[0],n[1],{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",transparent:!0},n[2],n[3]]),l.a.createElement(b.a,{className:f()(v,i),wrap:"wrap"},u.filter(function(e,t){return t<r}).map(function(e,t){return l.a.createElement(h.q,{key:e.src,className:"".concat(v,"__img"),src:e.src,transparent:e.transparent,lazyload:!0,animate:!0,onClick:function(){if(4===n.length){if(2===t)return;o(t<2?t:t-1)}else o(t)}},y.a.isPoster(e.src)&&l.a.createElement("img",{src:"".concat(w.a.__IMG__,"/play").concat(w.a.__IMG_DPR__,".png"),alt:"",className:"jsx-2392059587 "+c.a.dynamic([["3081852352",[v,v,v,v,v]]])}))}),l.a.createElement(c.a,{styleId:"3081852352",css:".".concat(v,"__img{width:32.66666%;height:auto;padding-bottom:32.66666%;margin-top:1%;margin-right:1%;}.").concat(v,"__img:nth-of-type(1){margin-top:0 !important;}.").concat(v,"__img:nth-of-type(2){margin-top:0 !important;}.").concat(v,"__img:nth-of-type(3){margin-top:0 !important;}.").concat(v,"__img:nth-of-type(3n){margin-right:0 !important;}"),dynamic:[v,v,v,v,v]}),l.a.createElement(c.a,{styleId:"2392059587",css:"img.jsx-2392059587{position:absolute;top:48%;left:50%;width:0.96rem !important;height:0.96rem !important;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0.8;}"}))},x=n(43);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return N});var N=Object(d.d)((o=r=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=k(this,(e=O(t)).call.apply(e,[this].concat(r)))).state={renderImgView:!1,dataImgView:[],show:!1,current:0},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,l.a.Component),n=t,(a=[{key:"renderVideo",value:function(){var e=this.props,t=e.content,n=e.files,a=e.params,r=void 0===a?{}:a;return l.a.createElement(h.G,j({className:f()({"mt-18":!!t}),src:n.length&&n[0].filePath,poster:n.length?n[0].sfPath:void 0,fileSize:n.length&&n[0].fileSize,playSecond:n.length&&n[0].playSeconds,onClick:function(e){return e.preventDefault()}},r.video))}},{key:"renderImgs",value:function(){var e=this,t=this.props,n=t.content,a=t.files,r=void 0===a?[]:a,o=t.infoId,i=t.params,c=void 0===i?{}:i;return o?l.a.createElement(_,j({className:f()({"mt-18":!!n}),data:r.map(function(e){return{src:e.fileId||e.filePath}}),onImgClick:function(t){return e.setState({renderImgView:!0,dataImgView:r,show:!0,current:t})}},c.image)):l.a.createElement(h.d,{className:f()({"mt-18":!!n}),data:r.map(function(e){return{src:e.filePath}}),height:"100vw",autoplay:!1,style:{backgroundSize:"contain"},onImgClick:function(t){return e.setState({renderImgView:!0,dataImgView:r,show:!0,current:t})}})}},{key:"renderRedPacket",value:function(){var e,t=this.context.$,n=this.props,a=n.infoId,r=n.red,o=void 0===r?{}:r,i=n.redRecordsOpen,s=o.amount,u=o.getAmount,m=o.getNum,p=void 0===m?0:m,f=o.num,d=o.packetId,g=o.redPacketLogs,b=void 0===g?[]:g,w=o.redType,v=o.state,_=3==w,E=2==v,j="",I=u,k=s;switch(parseInt(w)){case 1:e="金币",j="枚",I=parseInt(u),k=parseInt(k);break;case 2:j="积分",I=parseInt(u),k=parseInt(k);break;case 3:j="元";break;case 4:e="优惠券",j="元"}var O,S=0,N=0;if(E){b.forEach(function(e){parseFloat(e.amount)>S&&(S=parseFloat(e.amount))});var A=b.map(function(e){return e.createTime}).sort(function(e,t){return e-t});N=A[A.length-1]-A[0]||1}return O="".concat(x.a,_?E?"/red-user-none.png":"/red-user.png":E?"/red-none.png":"/red.png"),l.a.createElement("div",{className:"jsx-3072411719 mt-d"},l.a.createElement("div",{style:{position:"relative",display:"inline-block"},className:"jsx-3072411719"},l.a.createElement("img",{src:O,onClick:function(){return y.a.checkLogin(function(){return t.do.redClick(d,w,a)})},alt:"",className:"jsx-3072411719 "+((_?"img-red-user":"img-red")||"")}),_?l.a.createElement("span",{className:"jsx-3072411719 p-red-user-text t-b"},"现金红包"):l.a.createElement("span",{className:"jsx-3072411719 p-red-text t-b"},e||j,"红包")),!isNaN(k)&&l.a.createElement("p",{className:"jsx-3072411719 t-24 l-34 mt-24"},l.a.createElement(h.p,{className:"t-24",type:"redpacket"}),l.a.createElement("span",{className:"jsx-3072411719 ml-16"},"已领取"),l.a.createElement("span",{className:"jsx-3072411719 t-danger ml-4"},p,"/",f),l.a.createElement("span",{className:"jsx-3072411719 ml-4"},"个，"),l.a.createElement("span",{className:"jsx-3072411719 t-danger"},I,"/",k),l.a.createElement("span",{className:"jsx-3072411719 ml-4"},j),!!N&&l.a.createElement("span",{className:"jsx-3072411719"},"，",N,"秒抢光")),!!b.length&&l.a.createElement("div",{className:"jsx-3072411719 logs"},b.filter(function(e,t){return i||t<10}).map(function(e){return l.a.createElement("p",{key:e.userId,className:"jsx-3072411719 t-24 l-34 mt-8"},l.a.createElement(h.t,{className:"t-primary",href:"/person/zone?id=".concat(e.userId),as:"/person/zone/".concat(e.userId)},e.niname),l.a.createElement("span",{className:"jsx-3072411719 t-sub ml-4"},"抢到"),l.a.createElement("span",{className:"jsx-3072411719 t-primary ml-4"},"元"===j?e.amount:parseInt(e.amount)),l.a.createElement("span",{className:"jsx-3072411719 t-sub ml-4"},j,"。"),!!S&&S===parseFloat(e.amount)&&l.a.createElement("img",{src:"".concat(x.a,"/best.png"),alt:"",className:"jsx-3072411719 img-best"}))}),!i&&b.length>10&&l.a.createElement("p",{onClick:function(){return t.page.onRedLogsOpen(a)},className:"jsx-3072411719 t-24 l-34 mt-8"},l.a.createElement("span",{className:"jsx-3072411719 t-sub"},"展开"),l.a.createElement(h.p,{className:"t-24 l-34 t-sub ml-4",type:"down"}))),l.a.createElement(c.a,{styleId:"3072411719",css:".img-red-user.jsx-3072411719{width:3.87rem;height:5.05rem;}.img-red.jsx-3072411719{width:6rem;max-width:100%;height:initial;}.p-red-text.jsx-3072411719{position:absolute;top:62%;left:50%;color:#ffd265;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-shadow:0.04rem 0.04rem 0.04rem rgba(0,0,0,0.16);}.p-red-user-text.jsx-3072411719{position:absolute;top:53%;left:1.93rem;color:#ffd265;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-shadow:0.04rem 0.04rem 0.04rem rgba(0,0,0,0.16);}.logs.jsx-3072411719{padding-left:0.4rem;}.img-best.jsx-3072411719{width:0.92rem;height:0.53rem;margin-top:-0.14rem;}"}))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.atList,r=n.content,o=n.infoId,i=n.params,c=void 0===i?{}:i,s=n.type,u=n.className,m=this.state,p=m.renderImgView,d=m.dataImgView,g=m.show,b=m.current;switch(parseInt(s)){case 1:e=this.renderVideo();break;case 2:e=this.renderImgs();break;case 10:case 11:case 12:case 13:e=this.renderRedPacket()}return l.a.createElement("div",{className:f()("style-100916",u)},r&&l.a.createElement(h.e,j({className:"t-34 l-48 ls-o1 user-select",atList:a,onClick:function(e){o&&(e.stopPropagation(),y.a.router.push("/discovery/detail?id=".concat(o),"/discovery/detail/".concat(o)))}},c.article),r),e,p&&l.a.createElement(h.r,{show:g,current:b,data:d.map(function(e){return-1!==e.filePath.indexOf(".gif")?y.a.getImgUrl(e.filePath):y.a.getAppImgUrl(e.filePath,"scale")}),onClose:function(){return t.setState({renderImgView:!1,dataImgView:[],show:!1})}}))}}])&&I(n.prototype,a),r&&I(n,r),t}(),r.contextTypes={$:m.a.object},a=o))||a},43:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a=n(4).a.cdn("/static/images/src/discovery/Index"),r=[{title:"最新"},{title:"精选"},{title:"渔获"},{title:"好友"}]},826:function(e,t,n){__NEXT_REGISTER_PAGE("/discovery/detail",function(){return e.exports=n(983),{page:e.exports.default}})},983:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(6),i=n.n(o),c=n(5),s=n(10),l=n(8),u=n.n(l),m=function(e,t){var n=t.$,a=e.className,o=n.getState("comment");return r.a.createElement("div",{className:u()("style-110592",a)},r.a.createElement(s.i,{title:"最新评论"}),r.a.createElement(s.d,{data:o,onEndReached:n.fetch.comment,onCommentClick:n.page.onCommentClick}))};m.contextTypes={$:i.a.object};var p=Object(c.d)(m),f=n(2),d=n.n(f),h=n(3),y=n(4),g=n(0),b=n(180),w=function(e,t){var n=t.$.getState("detail"),a=n.con,o=n.faceImg,i=n.fanAuth,c=n.grade,l=n.niname,m=n.publishTime,p=n.userId,f=n.infoType,w=n.fileList,v=n.redPacket,_=n.className;return r.a.createElement("div",{className:d.a.dynamic([["736284163",[g.a.wind,g.a.bottom,g.a.color_theme]]])+" "+(u()("style-471325",_)||"")},r.a.createElement(s.b,{userId:p,img:o,name:l,level:c,fansAuth:i,date:m&&y.a.date("y-m-d H:i:s",m)}),a&&r.a.createElement(h.e,{className:"t-34 l-48 mt-40"},a),r.a.createElement(b.a,{className:"mt-40",type:f,files:w,red:v}),r.a.createElement(d.a,{styleId:"736284163",css:".style-471325.__jsx-style-dynamic-selector{padding:0.16rem ".concat(g.a.wind," ").concat(g.a.bottom,";background:").concat(g.a.color_theme,";}"),dynamic:[g.a.wind,g.a.bottom,g.a.color_theme]}))};w.contextTypes={$:i.a.object};var v=Object(c.d)(w),_=function(e,t){var n=t.$,a=e.className,o=n.getState("_fixedTextarea"),i=o.show,c=o.placeholder,s=o.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.k,{show:i,placeholder:c,onSubmit:s,onClose:n.page.hideFixedTextarea}),!i&&r.a.createElement(h.j,{className:u()("style-154147",a),onInputClick:n.page.onCommentClick},r.a.createElement(h.p,{className:"t-48",type:"gift",onClick:function(){return y.a.checkLogin(n.page.showReward)}})))};_.contextTypes={$:i.a.object};var x=Object(c.d)(_),E=function(e,t){var n=t.$,a=n.getState("_reward").show;return r.a.createElement(h.A,{show:a,onCancel:n.page.hideReward,onSuccess:n.do.reward})};E.contextTypes={$:i.a.object};var j=Object(c.d)(E),I=function(e,t){var n=t.$,a=e.className,o=n.getState("reward");return r.a.createElement(s.n,{className:u()("style-493230",a),data:o.list})};I.contextTypes={$:i.a.object};var k,O,S=Object(c.d)(I),N=n(9),A=n.n(N),P=n(11),T=n(12),C=n(15),R=n(7);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t,n,a,r,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(a,r)}function L(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){$(o,a,r,i,c,"next",e)}function c(e){$(o,a,r,i,c,"throw",e)}i(void 0)})}}function F(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var U,D,J,Q,q,K,X,Y,H,W=(k=function(e){function t(){var e,n,a,r,o,i,c,s,l,u,m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var p=arguments.length,f=new Array(p),d=0;d<p;d++)f[d]=arguments[d];return a=this,r=(e=M(t)).call.apply(e,[this].concat(f)),n=!r||"object"!==z(r)&&"function"!=typeof r?B(a):r,o=n,i="state",c=O,s=B(B(n)),c&&Object.defineProperty(o,i,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(s):void 0}),n.fetch={config:{one:["detail"],update:["comment"]},detail:(l=L(A.a.mark(function e(){var t,a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.params.params.id,a=n.fetchThenSetState("get_detail","detail",{infoId:t}),e.next=4,a;case 4:return e.abrupt("return",n.fetch.reward());case 5:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)}),comment:function(e){var t=n.params.params.id;return n.fetchListThenSetState("get_detail_comment_list","comment",{_:{limit:R.a.__LIMIT__,order:{createTime:"desc"},search:{infoId:t}}},e)},updateComment:function(e){var t=n.params.params.id;return n.updateOneThenSetState("get_detail_comment_list","comment",{infoId:t,tbId:e},"tbId")},reward:function(){var e=n.getState("detail").tbId;return n.fetchThenSetState("get_new_reward-list","reward",{_:{limit:R.a.__LIMIT__,search:{dataId:e,typeId:2}}})}},n.do={view:function(){var e=n.params.params.id;C.a.P("do_view",{infoId:e},{show:!1})},comment:(m=L(A.a.mark(function e(t){var a,r,o,i,c,s,l,u;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.rootId,r=t.parId,o=t.con,!(y.a.getCharLength(o)<2)){e.next=4;break}return y.a.light("回复字数太少"),e.abrupt("return");case 4:return i={con:o},r?i.parId=r:(c=n.params.params.id,i.infoId=c),e.next=8,C.a.P("do_comment",i);case 8:s=e.sent,l=s.point,n.page.hideFixedTextarea(),y.a.light(0==l?"回复成功":"回复成功，积分+".concat(l)),r?n.fetch.updateComment(a):n.fetch.comment(!0),window.Stores["/discovery"]&&(u=n.params.params.id,window.Stores["/discovery"].updateOneDiscovery(u));case 14:case"end":return e.stop()}},e,this)})),function(e){return m.apply(this,arguments)}),reward:(u=L(A.a.mark(function e(t){var a,r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState("detail"),r=a.tbId,e.next=3,C.a.P("do_new_reward",{dataId:r,typeId:2,goodsId:t});case 3:n.page.hideReward(),y.a.light("打赏成功"),n.fetch.reward();case 6:case"end":return e.stop()}},e,this)})),function(e){return u.apply(this,arguments)})},n.page={onCommentClick:function(e){var t,a,r=e.rootId,o=e.parId,i=e.niname;o?(t="回复".concat(i,"："),a=function(e){return n.do.comment({rootId:r,parId:o,con:e})}):(t="回复：",a=function(e){return n.do.comment({con:e})}),n.page.showFixedTextarea({placeholder:t,onSubmit:a})},showFixedTextarea:function(e){return n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){V(e,t,n[t])})}return e}({},e,{show:!0}),"_fixedTextarea")},hideFixedTextarea:function(){return n.setState({show:!1},"_fixedTextarea")},showReward:function(){return n.setState({show:!0},"_reward")},hideReward:function(){return n.setState({show:!1},"_reward")}},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,T["a"]),n=t,(a=[{key:"storeDidMount",value:function(){this.do.view()}}])&&F(n.prototype,a),r&&F(n,r),t}(),U=k.prototype,D="state",J=[P.k],Q={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.initState({_fixedTextarea:{show:!1,placeholder:"",onSubmit:Function.prototype},_reward:{show:!1},detail:{},comment:R.a.__EMPTY__,reward:R.a.__EMPTY__})}},K={},Object.keys(Q).forEach(function(e){K[e]=Q[e]}),K.enumerable=!!K.enumerable,K.configurable=!!K.configurable,("value"in K||K.initializer)&&(K.writable=!0),K=J.slice().reverse().reduce(function(e,t){return t(U,D,e)||e},K),q&&void 0!==K.initializer&&(K.value=K.initializer?K.initializer.call(q):void 0,K.initializer=void 0),void 0===K.initializer&&(Object.defineProperty(U,D,K),K=null),O=K,k);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function te(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=Object(c.c)(W)(X=Object(c.d)((H=Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),te(this,ne(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(s.k,{title:"动态"},r.a.createElement(v,null),r.a.createElement(S,{className:"mt-d"}),r.a.createElement(p,{className:"mt-d"}),r.a.createElement(x,null),r.a.createElement(j,null))}}])&&ee(n.prototype,a),o&&ee(n,o),t}(),Y.contextTypes={$:i.a.object},X=H))||X)||X;t.default=re}},[[826,1,0]]]);