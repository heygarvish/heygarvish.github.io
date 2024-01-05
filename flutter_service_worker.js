'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bcb9367d88e852176fd0266a5a25be41",
"index.html": "d14c634cb8831d12c183c050449b8f3c",
"/": "d14c634cb8831d12c183c050449b8f3c",
"main.dart.js": "02bca2ed68fd2cf046565a5ff8448596",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "964fa89743ebec7ee492c6d0d1c5ec5f",
"assets/NOTICES": "58ec68540b67e4f5c59344bea380c87a",
"assets/FontManifest.json": "10bc86f8c3617084736753d46f4d69fc",
"assets/AssetManifest.bin.json": "6960b186a086b86d2a224d42abd6bdba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1909685b4237ac84748613b47040c010",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3711945217c571c053ae88b5f4bf8c14",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/spotify.png": "14cd230c960926154e5d0e7de0cc400e",
"assets/assets/images/me.jpg": "14e641a7437e28ee37d6e0b66186ce80",
"assets/assets/images/pfp.jpg": "f0ce91644d96675c995a3efad69a9adb",
"assets/assets/images/figma-large.png": "ee44e827af9b7bb41c48e60c2d89b9a9",
"assets/assets/images/git-vcs.png": "108140760e045709f1734139dca11e17",
"assets/assets/images/syncverse.png": "178361df3b470e8b148a600d2e54e7be",
"assets/assets/images/flutter.png": "f2052f1b9f3e87570c0178783c167aa2",
"assets/assets/images/figma-small.png": "75166e0d3f61bc06eef514e07d6d542c",
"assets/assets/images/vs-code.png": "607f032dba49f0d5552a7d3d7accc4e9",
"assets/assets/images/github.png": "bc2230be36668a2766f99b2ef11906ba",
"assets/assets/images/simple-whatsapp-status-saver.png": "b76d8ad2feb97d1295394a689be8b0fc",
"assets/assets/images/firebase.png": "aaebb7b5c1e7a6ecc95f8820c977db3e",
"assets/assets/images/favorites.gif": "56b8070c4bd3182666bf24bf571b4950",
"assets/assets/images/android.png": "1ea0641943e7001da45beeeb96f30e10",
"assets/assets/images/bunk-app.png": "43731abe72217334142ea13e197e60ef",
"assets/assets/images/my-work.jpg": "615af638eb164cace23807a1a44c801c",
"assets/assets/images/duolingo.png": "4c7ed0b710bbbf24d66673f5944fe3b0",
"assets/assets/images/swift.png": "4f07f85a57b28b6f7ae4ddb61f1454c0",
"assets/assets/images/postman.png": "4e9cdede8d72b0b82ebfbb554952a6d1",
"assets/assets/images/arc.png": "68e99d552e6fb119d7936b95ff44a276",
"assets/assets/images/pinterest.png": "6401e446f34a085485d6da9f4a1b2056",
"assets/assets/images/dart.png": "08e40fda64aea32b06403ba47128ef79",
"assets/assets/images/mongodb.png": "bf1e539548a2447bff1bfd3045fe70b0",
"assets/assets/images/nodejs.png": "b905d6f2be3d0c8ad2937a1947081462",
"assets/assets/icons/chevron.svg": "6228cd08ed0c2f65cb2bb0aa3930f108",
"assets/assets/icons/multi-underline.svg": "61cda9893c9aafadbbf91f36bbf519af",
"assets/assets/icons/redirect-arrow.svg": "793d00e69a2cbc58bf14790850adfe9b",
"assets/assets/icons/location.svg": "5ecb1ea797e6313ed85a73f4ce63a800",
"assets/assets/icons/simple-underline.svg": "12290cd622b6ac918e961e03e5446d98",
"assets/assets/fonts/circular-medium.ttf": "3900fcac5a07f0ae740aeaa613be0b60",
"assets/assets/fonts/circular-light.ttf": "7158ab67309f3ae516cdb69105c00eca",
"assets/assets/fonts/circular-black.ttf": "5ddff65fcb251c7ffae699d1ad3cc5cd",
"assets/assets/fonts/circular-bold.ttf": "fc45c938b44a9d7e967b482652f8dd7e",
"assets/assets/fonts/circular-book.ttf": "1f6e1b9f752859dc5ace8fe9221b07e6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
