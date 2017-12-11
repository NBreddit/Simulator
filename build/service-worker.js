"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Simulator/index.html","033f9d6c9196b2bc397f8df035e188b0"],["/Simulator/static/css/main.c4bba502.css","b52863a395d1aad4af40a1b077f62e3c"],["/Simulator/static/js/main.939ce93d.js","d59f0390ca4dbbc7f348ac2f622585c3"],["/Simulator/static/media/3bg.9acf856e.png","9acf856e3196f2df7049d79fa8d29d7d"],["/Simulator/static/media/3star.260ae30c.png","260ae30c8cb8d221af3fc8ebf91c12f0"],["/Simulator/static/media/4bg.18c4edc2.png","18c4edc25a37ee5dc4c25ffe627f5b51"],["/Simulator/static/media/4star.dc4e8b80.png","dc4e8b8067dfba89f30f13d87d60e662"],["/Simulator/static/media/5bg.25cdbfbb.png","25cdbfbb745dece6ab3266e063614d19"],["/Simulator/static/media/5star.0e1472ce.png","0e1472ceb15570e9729bce237ed7f73c"],["/Simulator/static/media/bod.c1db6cd4.png","c1db6cd4fdf16e8140a679f21d9abe19"],["/Simulator/static/media/brv.8c50000f.png","8c50000f018ac672363d33c567429174"],["/Simulator/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/Simulator/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/Simulator/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/Simulator/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/Simulator/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/Simulator/static/media/hrt.f3cf3cdb.png","f3cf3cdb2dda39e97d25dc6ad5283c5c"],["/Simulator/static/media/multi.62c0b7aa.png","62c0b7aa16e26a011587f2eb0462735f"],["/Simulator/static/media/single.ea884711.png","ea8847113a3f9a0434c622f216ed42e1"],["/Simulator/static/media/skl.35252651.png","35252651ad02b46d9e7aa94037d18f7e"],["/Simulator/static/media/wis.3f2a62f4.png","3f2a62f415880daefed4107cae705775"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/Simulator/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});