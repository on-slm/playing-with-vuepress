/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/01/01/prispevek-z-noveho-roku19/index.html",
    "revision": "64fe4d5e8e26c966092a377310066102"
  },
  {
    "url": "2019/02/01/prispevek-z-pulky-unora/index.html",
    "revision": "bb5592429e5b6455dcdae012fbcacf0f"
  },
  {
    "url": "2019/06/30/prispevek-z-konce-cervna19/index.html",
    "revision": "5c45cd6e8a73f9c5b86ecd0b2809a9f8"
  },
  {
    "url": "404.html",
    "revision": "67ccb39753a10d0a2a56cd814e049e0e"
  },
  {
    "url": "assets/css/0.styles.c1bd6dae.css",
    "revision": "ba95458cde7df16e42374b4f10717127"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c78658e0.js",
    "revision": "c854b834afab782e32c5e8b8d9688ac8"
  },
  {
    "url": "assets/js/11.4b860f94.js",
    "revision": "cf20f39ec9c82dda1151ecf2a9ee1e62"
  },
  {
    "url": "assets/js/12.4eea9af6.js",
    "revision": "338d376388901d6b9befad139113c9b8"
  },
  {
    "url": "assets/js/13.cbb17fcf.js",
    "revision": "21df81a9358b6fe7df9c656333c2548f"
  },
  {
    "url": "assets/js/14.8894278a.js",
    "revision": "c963216a68c42915a90a39df9c8921f7"
  },
  {
    "url": "assets/js/15.ac458149.js",
    "revision": "0ee397c7dbc33345ab601210626ff6f1"
  },
  {
    "url": "assets/js/16.a28a1a60.js",
    "revision": "a7b7c2e629d6d26e66b8af91618934aa"
  },
  {
    "url": "assets/js/17.824e2c6f.js",
    "revision": "0f5c9811853257c345ad04dde0fe9227"
  },
  {
    "url": "assets/js/3.85f164e0.js",
    "revision": "91537b4518d37479f2b85d55e17ba54c"
  },
  {
    "url": "assets/js/4.423235e4.js",
    "revision": "49a4f2928d5141b425506acec3461ef7"
  },
  {
    "url": "assets/js/5.edf835e3.js",
    "revision": "fcea673e967bf33a3a1667db2d367e96"
  },
  {
    "url": "assets/js/6.2d34ee9e.js",
    "revision": "5ad7c7cc62e615f250e46626a917eb6b"
  },
  {
    "url": "assets/js/7.12af79b4.js",
    "revision": "d3f6d9a98aab6669a02ac44890a42335"
  },
  {
    "url": "assets/js/8.b6dea517.js",
    "revision": "dd9226a8960777c97a25812990fc1e4c"
  },
  {
    "url": "assets/js/9.5396534b.js",
    "revision": "169e04b7b88652f51721281c1d2ee4f9"
  },
  {
    "url": "assets/js/app.e1119ceb.js",
    "revision": "065e722d3251c503701c6a55400c5e8a"
  },
  {
    "url": "assets/js/vuejs-paginate.90d0d0a2.js",
    "revision": "10484881149f77d902a59f736dee9560"
  },
  {
    "url": "en/index.html",
    "revision": "3c28bfbd3cc9493960f8a0d84963c406"
  },
  {
    "url": "guide/index.html",
    "revision": "7696c7f109c6cd03daa3fa4b1cb9d170"
  },
  {
    "url": "index.html",
    "revision": "549c090533f397150015724caf8c83ef"
  },
  {
    "url": "page/2/index.html",
    "revision": "d1c3e572f5da134242515e4a1da63563"
  },
  {
    "url": "tag/index.html",
    "revision": "f23b93813652753fa2b18e2c19044449"
  },
  {
    "url": "tag/kocovina/index.html",
    "revision": "89e0d66e7b2224f2790d17e844ff9d26"
  },
  {
    "url": "tag/měsíc/index.html",
    "revision": "476811bd15aa4ff23f009bd2b36cb094"
  },
  {
    "url": "tag/sv�tek/index.html",
    "revision": "d35d3195ebdbf9253e055c4a4b40e585"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
