'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "426313f2f3133c2f20415344c4a22df3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "87e1c239ef9297a9c45f377fd0c7c55e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "3a305a0195918d9028939827ca96724f",
".git/refs/remotes/origin/main": "3a305a0195918d9028939827ca96724f",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/COMMIT_EDITMSG": "c5ab520d4629d555513bd35834c0bf74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b82bce97a6396f144d4931bdd48efe0",
".git/logs/refs/heads/main": "eece1453b450cb817b8a22fd148e9e46",
".git/logs/refs/remotes/origin/main": "4700db8c03ec9689cb7290c6d1e23194",
".git/objects/8d/43c20611043467ce44bc19ce16566f80f7ab3d": "5e96916f2af698049cd1c5fa61061d66",
".git/objects/8d/974d954ad2ea1e13d16854eb29d7088c62b55d": "8459f23a4366b6bfac014bda3733d16b",
".git/objects/bd/b51a218d7e6fe87885076aa34d894bf70e57b6": "7879ce8ca5bc9cc16cc4bda90e56096c",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4a/cf8a1ae3e1696d1978c33306551e87081e0f1f": "3621d976b3ba343c5a895e9a58c569ba",
".git/objects/31/f5282334d8032192dc4f69bc37ac2df53530de": "c1987ca2d0ac3bfb2c21c9a6f8f12cde",
".git/objects/90/36b6b82c5a7ad88658ae4c4575cb5c8095eb4d": "6d7b48990076189e6db01e977933f01d",
".git/objects/60/94aa17a98a78cb35889ae4787bb1e3bf760be6": "1cc1f5531c366b06693af2baa1c0643f",
".git/objects/60/b5185e3f1380fbd9f8b71bb962a9e73dfc5f6f": "b90950ee3597f82dc7a25bf0b8f6c1af",
".git/objects/fc/8866bf671e16f6def13829e783a626bdf3645b": "25d9977888871fe2f496aacbd43a2e93",
".git/objects/20/48c495ff124a8213832ca11976659f4195340e": "4d9a78db11b85446e0bd2930a2059b81",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/6d/c94929ab56e979a7055b3a45aa19754c808e2c": "181379d7e94adcfe7fcc25ec42209d8c",
".git/objects/25/524f7c065e49184f8c1768ab9d54b0e1e4949f": "d6b9f75dda2ab430473a6eb915075d0b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/35/2ad7ed62148d2972d53fe4f0f88c654d236e69": "5dad05305423bda1feb4c65e4db20a42",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/28/35dc49c404be89dbcae1bf8999125bb55252d6": "183cbaf3049bef026da614973ba50a71",
".git/objects/28/3866a42895653a6cc457cb1c1fe962cab47a40": "b5228f9fd32180342c8b9abbdfb2638b",
".git/objects/ef/5d4af0dd988840648daa7e4d7407952f63fc30": "cbf30e52ac93c448c6aeda84e61e3f11",
".git/objects/49/47b765ddd8e7c8a8cbfa809c2781c745ae4bae": "9c3c37b56d349df207e402767bee178b",
".git/objects/49/3a80b2cb189942fcb117c64e6a1e89719195a4": "f6bc25305d39949f9635d4ac28da6bce",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/27/e59a753ae441661c13f2ce00b171cb092f9115": "cf99a247e78307d73f39755edd95dd3f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/4d/1563a199e9ef88c7174b9924fd3834b743d820": "ccc294b04115fe49307afa63030c1250",
".git/objects/51/8259309e090681758961e0f5cb49686183f8ae": "410ce7588d81cdb129d9f22fe36869e5",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/9d/d54536deb696528895381563021601b95bae05": "0560e11553195602b298715ee6047b4f",
".git/objects/34/9a92d8c0cb8967f3e4537a00bc366397ca6183": "cf4c67d53c6a25d7bc98f4428a6fb44e",
".git/objects/c0/5229fccec77f0ebc22f7b8c4b100b757a7291a": "8ed0595fb4f40afeb09b81f63b732d7e",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/7d/83e85ef1ae3e96f3ac74b92a141da606807023": "a9f9b30eff321db226c60d276fcf2b76",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/13/7c42477710e5284d2d1d2b82ee730af52612b2": "0b23e441a41f0242f2f099fda92a5544",
".git/objects/08/f62eb877f9297ffb08db97b1ddcb5df1b80408": "198106130be6e1793e13b86b2fdb24eb",
".git/objects/2c/33adf1b8afd8d9e5903d942b5bba76103e0a92": "b1bbdc584e0e7175597c9596f83b1941",
".git/objects/18/3d625a7d3e8a8207ec8984da4d4d788333c6a0": "be07ab4345e7692b4f113b658ba2535f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/d8/fab9f7fe2a19cac1839cdfc3ec42599bec4aa7": "d75fd9598baa6160481dba8155f6d8f0",
".git/objects/bc/93b2638f4821fc525562ac465d6752436efe9b": "f0d85b5ecf61a1e6d479be3667dc8d2c",
".git/objects/7f/a6aeb319c1dcdc4bb2be764a36c4d6c9e4b81a": "288182cfbaaed98a351542a294664b29",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/09545fc1f48c4feaf7c23a341928af191a5386": "2b40a3357e06df01e91bf4cb54c61211",
".git/objects/f0/88c72381cf07882b8712634b8c5277570f50df": "14dc6272db54ee0949e881ffad6aa80c",
".git/objects/70/2717cc6866523fdfebeba363cb8ede5c77615b": "68885f7d80bd66186cde625a33cd7407",
".git/objects/b9/816e9df1ebeaa3d3b99b45f5a6f085d8c27e83": "08b21e82265866c28d45b500cf6b6462",
".git/objects/87/5f6221754e4d491e4ae5a233c0856bafd66f87": "3d75450651b85f722b7802080f5c8dca",
".git/objects/e0/e367e3d3b806ea83cd9eee7993e192ddc8a72c": "f4492b499527a996248ef561863856ae",
".git/objects/5b/e7f5e993be60b6b676c3db0bfe7fd86e0c68b3": "25daeae4afc5a6c13c3730eaf2254250",
".git/objects/e3/9b02b1b9009c735489de7886cc3341ca035341": "050744fbe7fe71a277089cdb75658d95",
".git/config": "414a167f690b5331387898414656a718",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"main.dart.js": "2f3812d57255c682ee561675b9cf51cb",
"assets/FontManifest.json": "291accf909aeb9d0e2312255bcc2c965",
"assets/NOTICES": "3fe3be251dd329137f7e8f6c982be2f8",
"assets/fonts/cardium-regular.otf": "c3ae49bbbfc3b6521f0e480500caf71b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "7c958759fe9ceec6703b26e2f416ff54",
"assets/images/linkedin.png": "6715cf6b779276ce7c99d4c0de26482a",
"assets/images/facebook.png": "fceb5962724920b2fd4949d7b717a03a",
"assets/images/experience.png": "dbcf86392e5e9d27c10ce22b9c03d342",
"assets/images/user.png": "1bc612d13f8c8a571a856e181050bf0a",
"assets/images/twitter.png": "829e95c1ea26bbc4eb88072954a5082d",
"assets/images/email.png": "d16b093873af794130487692dd52ba6c",
"assets/images/me-nobg.png": "23cb625e84f2a9f530ae931e1aaf5c98",
"assets/images/graduate.png": "72eaaaed134af08be2667936adb5db61",
"assets/images/music.png": "806d8d727edfb6c9313d035213426292",
"assets/images/flutter.png": "a6e7653946808758f7fc9c3633ab8b4e",
"assets/images/movie.png": "020a47609a9dfcb665d8dc8c56b61057",
"assets/images/github.png": "3670e8d8856969f3a95bed23560d781a",
"assets/images/phone.png": "0544a1a5f2201fd7bcc28739bd8794d0",
"index.html": "b6a9a1c7fd7e7b4e0bed0dd0be75e18b",
"/": "b6a9a1c7fd7e7b4e0bed0dd0be75e18b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
