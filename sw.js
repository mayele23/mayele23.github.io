importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1281013c3e6734ada024.js",
    "revision": "af87b09e7fd3fa2066a79cdacb70c48a"
  },
  {
    "url": "/_nuxt/5926c4598c3c1a5e1f2b.js",
    "revision": "1cae849785bb81bb08cb1fc7d69462b5"
  },
  {
    "url": "/_nuxt/86a1858114c710aaee55.js",
    "revision": "b5f28a4859b62516bc7360bd93bb9d75"
  },
  {
    "url": "/_nuxt/9f17650adae3b456e027.js",
    "revision": "a0e68f2dd03752f73dc966387ed483ab"
  },
  {
    "url": "/_nuxt/b1043e10262faa515e7c.js",
    "revision": "0436bbb4fd1406ee5a77fef66b91a5c1"
  },
  {
    "url": "/_nuxt/d765083b8a58eea825a3.js",
    "revision": "34d5fc5cef2d47379738c6ef53bd3c1c"
  }
], {
  "cacheId": "nuxty",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
