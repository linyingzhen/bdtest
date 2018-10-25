/**
 * const prefixCls = 'style-149096';
 * const images = '/static/images/static/js';
 * @Author: czy0729
 * @Date:   2017-10-06 11:46:25
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-10-17 10:18:18
 * @Path m.benting.com.cn /static/js/init.js
 */

/*if ('addEventListener' in document) {
    document.addEventListener(
        'DOMContentLoaded',
        function() {
            FastClick.attach(document.body);
        },
        false
    );
}*/

if (!window.Promise) {
  document.writeln(
    '<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' +
      '>' +
      '<' +
      '/' +
      'script>'
  );
}

// baidu
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?aba07baae3045f144feba9bd0868dfcd';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
})();

(function() {
  function getQuery(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }

  // wx
  if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    document.writeln(
      '<script src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"' +
        '>' +
        '<' +
        '/' +
        'script>'
    );
  }

  // dev
  if (getQuery('dev') === 'true') {
    document.writeln(
      '<script src="/static/js/vconsole.min.js"' + '>' + '<' + '/' + 'script>'
    );
  }
})();

// PWA
// if (typeof __DEV__ === 'undefined' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw-180828.js')
//     .then(registration => {
//       console.log(
//         'ServiceWorker registration successful with scope: ',
//         registration.scope
//       );
//     })
//     .catch(err => {
//       console.log('ServiceWorker registration failed: ', err);
//     });
// }
