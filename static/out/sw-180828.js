/**
 * const prefixCls = 'style-209675';
 * const images = '/static/images/static/out';
 * @Author: czy0729
 * @Date: 2018-08-28 15:28:05
 * @Last Modified by:   czy0729
 * @Last Modified time: 2018-09-10 15:28:05
 * @Path m.benting.com.cn /static/out/sw-180828.js
 */
importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

if (workbox) {
  workbox.setConfig({
    debug: false,
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
  });
  workbox.skipWaiting();
  workbox.clientsClaim();

  // 开发环境hot-loader:仅网络
  workbox.routing.registerRoute(
    function(event) {
      if (~event.url.pathname.indexOf('/on-demand-entries-ping/')) {
        return true;
      }
      return false;
    },
    workbox.strategies.networkOnly({})
  );

  // 静态html:网络优先
  const cacheList = ['/', '/nido', '/discovery', '/bbs'];
  workbox.routing.registerRoute(
    function(event) {
      // 需要缓存的HTML路径列表
      if (~cacheList.indexOf(event.url.pathname)) {
        return true;
      }
      return false;
    },
    workbox.strategies.networkFirst({
      cacheName: 'html-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 10
        })
      ]
    })
  );

  // 静态js:网络优先
  const regJS = /(t\/font_.*\.js$)|(\/rmsportal\/wzWaWInUcXErDyTwvySY.js)|(\/static\/js\/hd.min.js)/;
  workbox.routing.registerRoute(
    function(event) {
      return regJS.test(event.url.pathname);
    },
    workbox.strategies.networkFirst({
      cacheName: 'js-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 10
        })
      ]
    })
  );

  // next.js编译文件:缓存优先 (开发环境的不匹配)
  const regNextJs = /(^\/_next\/.*\/page\/.*\.js$)|(^\/_next\/.*\/main-.*\.js$)/;
  workbox.routing.registerRoute(
    function(event) {
      if (~event.url.pathname.indexOf('/_next/-/')) {
        return false;
      }

      return regNextJs.test(event.url.pathname);
    },
    workbox.strategies.cacheFirst({
      cacheName: 'next-js-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 3 * 24 * 60 * 60
        })
      ]
    })
  );

  // 静态缓存:缓存优先
  const regStatic = /.*\.(?:css|png|jpg|jpeg|gif|svg)/;
  workbox.routing.registerRoute(
    function(event) {
      // 百度统计使用图片请求方式, 排除掉
      if (~event.url.href.indexOf('https://hm.baidu.com/hm.gif')) {
        return false;
      }

      return regStatic.test(event.url.pathname);
    },
    workbox.strategies.cacheFirst({
      cacheName: 'static-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 200,
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  );

  // oss图片:缓存优先,延迟检测更新
  const regOSS = new RegExp('.com/file/getimg/|.com/static/uploads/');
  workbox.routing.registerRoute(
    function(event) {
      return regOSS.test(event.url.href);
    },
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'oss-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 200,
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  );
}
