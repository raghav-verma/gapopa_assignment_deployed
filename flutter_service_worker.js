'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "257b013412b2eb47d8ba29020f47525c",
"assets/NOTICES": "e2ad052b3b6ebca4bbdf4fa7ab6ac864",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "bfe5b35e2e324e98853299399ad9098e",
"canvaskit/canvaskit.wasm": "d1f909d9de385980c77f700302842299",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "5781e1286bd92ff76563a7c4743348c6",
"canvaskit/chromium/canvaskit.wasm": "eb7634821ce86605905fe50e6cc0e961",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "016a880a747a593960785246eab4d7b9",
"canvaskit/skwasm.wasm": "1b83ca988541fe07472e43fce0f8f33f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6cce69e31bf0d9af94578aa871390111",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb3823097be1442dc5786bb218bd4efb",
"/": "fb3823097be1442dc5786bb218bd4efb",
"main.dart.js": "99a178eff19d5108475b7ade8ee2dc88",
"manifest.json": "d52312d345631e95cb39d3bf0de689f7",
"release/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"release/web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"release/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"release/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"release/web/assets/fonts/MaterialIcons-Regular.otf": "257b013412b2eb47d8ba29020f47525c",
"release/web/assets/NOTICES": "e2ad052b3b6ebca4bbdf4fa7ab6ac864",
"release/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"release/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"release/web/canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"release/web/canvaskit/canvaskit.js.symbols": "bfe5b35e2e324e98853299399ad9098e",
"release/web/canvaskit/canvaskit.wasm": "d1f909d9de385980c77f700302842299",
"release/web/canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"release/web/canvaskit/chromium/canvaskit.js.symbols": "5781e1286bd92ff76563a7c4743348c6",
"release/web/canvaskit/chromium/canvaskit.wasm": "eb7634821ce86605905fe50e6cc0e961",
"release/web/canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"release/web/canvaskit/skwasm.js.symbols": "016a880a747a593960785246eab4d7b9",
"release/web/canvaskit/skwasm.wasm": "1b83ca988541fe07472e43fce0f8f33f",
"release/web/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"release/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"release/web/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"release/web/flutter_bootstrap.js": "6c05f146656ef03c8993ccc5ac8bfecd",
"release/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"release/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"release/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"release/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"release/web/index.html": "6e764270662bcbb8ae5e78563225d81b",
"release/web/main.dart.js": "99a178eff19d5108475b7ade8ee2dc88",
"release/web/manifest.json": "d52312d345631e95cb39d3bf0de689f7",
"release/web/version.json": "d1cf7852fd904bca1843c7e2a7966ad5",
"version.json": "d1cf7852fd904bca1843c7e2a7966ad5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
