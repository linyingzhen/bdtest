(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1045:function(e,t,n){"use strict";n.r(t);var r=n(296),a=n.n(r),o=n(1),i=n.n(o),s=n(10),l=n(15),u=n(7),c=n(4),f=[{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"本汀首页",href:"/"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"灵动首页",href:"/nido"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"动态",href:"/discovery"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"社区",href:"/bbs"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"个人中心",href:"/person"}],p=[{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"竞拍",href:"/shop/auction"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",text:"秒杀",href:"/shop/miaosha"}];function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){u.a.__API__="https://dev.nidosport.com",u.a.__NEW_API__="https://lumen.nidosport.com",u.a.__IMG_API__="http://csimg.tw-bt.com",u.a.__WSS__="wss://dev.nidosport.com/wss",u.a.__WEB_BT__="https://dev.tw-bt.com",u.a.__WEB_NIDO__="https://wap.nidosport.com",l.a.initApis()}},{key:"render",value:function(){return i.a.createElement(s.k,{title:"测试环境",hideBack:!0},i.a.createElement(a.a,{className:"mt-d",data:f,onClick:function(e){e.href&&c.a.router.push(e.href,e.as)}}),i.a.createElement(a.a,{className:"mt-d",data:p,onClick:function(e){e.href&&c.a.router.push(e.href,e.as)}}))}}])&&d(n.prototype,r),o&&d(n,o),t}();t.default=_},296:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(21)),a=d(n(16)),o=d(n(18)),i=d(n(19)),s=d(n(17)),l=d(n(20)),u=d(n(8)),c=d(n(1)),f=d(n(78)),p=d(n(145)),m=d(n(14));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},y=function(e){function t(){(0,o.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={initialSlideWidth:0},e.renderCarousel=function(t,n,r){for(var a=e.props.prefixCls,o=e.props.carouselMaxRow,i=[],s=0;s<n;s++){for(var l=[],u=0;u<o;u++){var f=s*o+u;f<r?l.push(t[f]):l.push(c.default.createElement("div",{key:"gridline-"+f}))}i.push(c.default.createElement("div",{key:"pageitem-"+s,className:a+"-carousel-page"},l))}return i},e.renderItem=function(t,n,r,a){var o=e.props.prefixCls,i=null;if(a)i=a(t,n);else if(t){var s=t.icon,l=t.text;i=c.default.createElement("div",{className:o+"-item-inner-content column-num-"+r},c.default.isValidElement(s)?s:c.default.createElement("img",{className:o+"-icon",src:s}),c.default.createElement("div",{className:o+"-text"},l))}return c.default.createElement("div",{className:o+"-item-content"},i)},e.getRows=function(t,n){for(var r=e.props,o=r.columnNum,i=r.data,s=r.renderItem,l=r.prefixCls,u=r.onClick,p=r.activeStyle,d=r.activeClassName,h=r.itemStyle,y=[],v=100/(o=o)+"%",_=(0,a.default)({width:v},h),w=0;w<t;w++){for(var b=[],g=function(t){var r=w*o+t,a=void 0;if(r<n){var h=i&&i[r];a=c.default.createElement(f.default,{key:"griditem-"+r,activeClassName:d||l+"-item-active",activeStyle:p},c.default.createElement(m.default.Item,{className:l+"-item",onClick:function(){return u&&u(h,r)},style:_},e.renderItem(h,r,o,s)))}else a=c.default.createElement(m.default.Item,{key:"griditem-"+r,className:l+"-item "+l+"-null-item",style:_});b.push(a)},P=0;P<o;P++)g(P);y.push(c.default.createElement(m.default,{justify:"center",align:"stretch",key:"gridline-"+w},b))}return y},e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.setState({initialSlideWidth:document.documentElement.clientWidth})}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,i=t.data,s=t.hasLine,l=t.isCarousel,f=t.square,m=(t.activeStyle,t.activeClassName,h(t,["prefixCls","className","data","hasLine","isCarousel","square","activeStyle","activeClassName"])),d=m.columnNum,y=m.carouselMaxRow,v=(m.onClick,m.renderItem,h(m,["columnNum","carouselMaxRow","onClick","renderItem"])),_=this.state.initialSlideWidth;d=d,y=y;var w=i&&i.length||0,b=Math.ceil(w/d),g=void 0,P=void 0;if(l){if(_<0)return null;b%y!=0&&(b=b+y-b%y);var x=Math.ceil(b/y);g=this.getRows(b,w);var S={};x<=1&&(S={dots:!1,dragging:!1,swiping:!1}),P=c.default.createElement(p.default,(0,a.default)({initialSlideWidth:_},v,S),this.renderCarousel(g,x,b))}else P=g=this.getRows(b,w);var E=(0,u.default)(n,o,(e={},(0,r.default)(e,n+"-square",f),(0,r.default)(e,n+"-line",s),(0,r.default)(e,n+"-carousel",l),e));return c.default.createElement("div",{className:E},P)}}]),t}(c.default.Component);t.default=y,y.defaultProps={data:[],hasLine:!0,isCarousel:!1,columnNum:4,carouselMaxRow:2,prefixCls:"am-grid",square:!0,itemStyle:{}},e.exports=t.default},825:function(e,t,n){__NEXT_REGISTER_PAGE("/dev",function(){return e.exports=n(1045),{page:e.exports.default}})}},[[825,1,0]]]);