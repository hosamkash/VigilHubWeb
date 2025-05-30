'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d31e9bd1f9c35c063422373a562db5c7",
"assets/AssetManifest.bin.json": "761c7a4be333c7af0b444c53bfbed87d",
"assets/AssetManifest.json": "aeb815c7fa5b1b5c1f0be0d158bb9ce4",
"assets/assets/bording1.png": "ed35243570bac989eefda34cd6bf4a7c",
"assets/assets/bording2.png": "ed725d8e27a3dd7539cbe06e03aa7eb8",
"assets/assets/bording3.png": "457dcef9b89d94452e491c140fea924e",
"assets/assets/bording4.png": "974cfb52ada7222af904a96004ef04ed",
"assets/assets/Dashboard/chat5.png": "c1521cddfac8d601f305d5e1ce4b4fa2",
"assets/assets/Dashboard/erp1.png": "526ab8b3ea1c697d399642d0546596b3",
"assets/assets/Dashboard/offer1.jpg": "9e1f1340d4bbc033eff98a7fab097c3d",
"assets/assets/Dashboard/settings1.jpg": "5255ae9d954381e80b97a0224896fa6f",
"assets/assets/Dashboard/shop1.jpg": "6fd3d7f0458dfb157ef1d99e35658772",
"assets/assets/Dashboard/shop3.jpg": "3e58563828fa5c0fcb6b05a24a5964b1",
"assets/assets/Dashboard/social1.jpg": "a969eac5b50c43f15e9a355c44fd6adf",
"assets/assets/defaultUser.png": "6cd8703ea51f51b5c895fe989c39696e",
"assets/assets/ERP/dealing/client.jpg": "ba3f6d295c3f9ca5a0d10cb624b5c2ec",
"assets/assets/ERP/dealing/employee.jpg": "4b4b103d75fedbc2d52e5fcc34e8982d",
"assets/assets/ERP/dealing/statement.jpg": "64b6e86ef988caf2adc36245b08bc35e",
"assets/assets/ERP/dealing/users.jpg": "2f848e9e5a7c38ec18ba41262d79fa21",
"assets/assets/ERP/dealing/vendor.jpg": "aefbf5922fa0b0c0672b016c934e3654",
"assets/assets/ERP/defenition/banner1.jpg": "882d2130ce97b2ea0d70fe85114c9e78",
"assets/assets/ERP/defenition/categories.jpg": "490737aaf9bc9b48712fe521805b0992",
"assets/assets/ERP/defenition/cities.png": "14c9e8c02d1bcf2b135525b3c72e0488",
"assets/assets/ERP/defenition/departments.png": "62df5b83cd490b44c53d04d1430c5a5f",
"assets/assets/ERP/defenition/eria.png": "365b64db1de1ff864887c745b6c36d7b",
"assets/assets/ERP/defenition/financial%2520cluse2.png": "ad43a831ef6cc701a81b34678d9e8aaf",
"assets/assets/ERP/defenition/home.jpg": "d0d6aebcc0d5a4c2090f5a41ccb3fc4d",
"assets/assets/ERP/defenition/jobs.png": "cedbd4af901d387bcf3be506726874c9",
"assets/assets/ERP/defenition/manufactor.png": "12188a7c0385bf943ffa3232bde58a3e",
"assets/assets/ERP/defenition/offers.png": "576a63d0734c07bc29bfd2aba1857178",
"assets/assets/ERP/defenition/products.png": "5a201bb0a4ee351cb6e46641f8649762",
"assets/assets/ERP/defenition/stock.png": "e7d2418511c77d5c1e9b0db731039ef5",
"assets/assets/ERP/defenition/trasure.png": "86a7bdaa9ff3b6477d96bc131ce5e421",
"assets/assets/ERP/defenition/unit.jpg": "c1c0646f9790aa74e534e069650d604f",
"assets/assets/ERP/financil/bind%2520account.jpg": "d24bd092cbde3c38b3fb053b084bd9a6",
"assets/assets/ERP/financil/close%2520account.jpg": "6aba004e668feb0d2b2928b8c0bd96e2",
"assets/assets/ERP/financil/count.jpg": "fc6de7481f5b6c646da8849240716961",
"assets/assets/ERP/financil/exchangemony.jpg": "7c1522e8e90de746dcb393fe30e50686",
"assets/assets/ERP/financil/supplay%2520mony.jpg": "3c161b312b8028212429b7495072945a",
"assets/assets/ERP/financil/transfer%2520mony.jpg": "1780d37f1d880ca2ca24354c245ca390",
"assets/assets/ERP/financil/Treasury%2520movement%25202.jpg": "ac1585059b1ed9dd7affeb319259e51a",
"assets/assets/ERP/financil/Treasury%2520movement.jpg": "1256fefe18b69df8a3224df54ac460e6",
"assets/assets/ERP/financil/Treasury%2520movement3.jpg": "f968449fc2d1da6540753d4e562c8516",
"assets/assets/ERP/financil/Treasury%2520movement4.png": "1b003e4db8bda0af3e838e1c286700e0",
"assets/assets/ERP/financil/Treasury%2520movement5.png": "394188949771a794d7f06df01dfaa4dd",
"assets/assets/ERP/financil/Treasury%2520movement6.png": "65eac6559b8fa0ce2ca59f383ca30c1d",
"assets/assets/ERP/hr/advances.png": "6eb301e93cf1e6761954b781337322e3",
"assets/assets/ERP/hr/attendance%2520finger.png": "2ceef3feda607d3ff3fd43c6a51214c4",
"assets/assets/ERP/hr/attendance.jpg": "a8c6891c2febddf00ca62a8d603ff7f8",
"assets/assets/ERP/hr/bonus.jpg": "ee8fe2b1a5551054f2fe4943405879e5",
"assets/assets/ERP/hr/employee.jpg": "317803460275347c8bc57bdcfc691e30",
"assets/assets/ERP/hr/mas7obat.png": "be8a6a625398834f87af1fbc244daa5e",
"assets/assets/ERP/hr/salary.jpg": "d0e9a7b93347d7b2343b58e18762982e",
"assets/assets/ERP/hr/sanctions.png": "5c185c28c55392b7c44b2435ff0ecf4e",
"assets/assets/ERP/inventory/materialQty.jpg": "6fedf6bdb127e29125547397b6397666",
"assets/assets/ERP/inventory/permession%2520add5.jpg": "0e5e6a4999b16ea69413be2ea7dce379",
"assets/assets/ERP/inventory/permession%2520discount1.jpg": "05b25a6fa4ffe3cf2fc6c4b41746b1a6",
"assets/assets/ERP/inventory/recivedQty.jpg": "d02cc40ddeb991eaaafc80744b05b711",
"assets/assets/ERP/inventory/settelment1.jpg": "ab99ab02314adb3285043800ad1fc69b",
"assets/assets/ERP/inventory/transefer.jpg": "d5516abe5a1245e206c6554d81fecba0",
"assets/assets/ERP/invoices/invoices%2520purchase%2520returned.png": "59dfbea47a4188fe9ba77e17f90b8097",
"assets/assets/ERP/invoices/invoices%2520purchase.jpg": "28e506816f26e5ef6b6d6488f3ecca2e",
"assets/assets/ERP/invoices/invoices%2520sales%2520returned.png": "08bea737a4c5e142affb2072e196c74a",
"assets/assets/ERP/invoices/invoices%2520sales.png": "dd183293833835e92cd57145246ed944",
"assets/assets/ERP/invoices/invoices%2520sales2.jpg": "460c0381b7791718c4d8767863fa615c",
"assets/assets/ERP/represent/add%2520represent%2520invoice.png": "4f16ed4e4c1c76e0899fc7b8c5aea0e1",
"assets/assets/ERP/represent/calc%2520invoices.png": "d263f588fa8ce8aaef43ac114c21c6d8",
"assets/assets/ERP/represent/offer.jpg": "f2a1e245c53d0174d2d1ee354b3c5aa5",
"assets/assets/ERP/represent/represent%2520invoices.png": "f4414d98aba42db2725595b16fa7f641",
"assets/assets/ERP/represent/represent%2520orders.jpg": "015758831f11b7c783762f40c115a4dd",
"assets/assets/ERP/represent/represent%2520stock.jpg": "05b25a6fa4ffe3cf2fc6c4b41746b1a6",
"assets/assets/ERP/settings/backup.jpg": "b782fe23b6a7a21e741a796b58d01b22",
"assets/assets/ERP/settings/restart.png": "dbf58e3902dbd0d9c1ef11f00c6c9811",
"assets/assets/ERP/settings/switch%2520user.jpg": "7bd8494b02e2609e3db78a7ffae03329",
"assets/assets/ERP/settings/update%2520app.jpg": "270fa685d4e78d54fa93fc511b3f80c6",
"assets/assets/erp_icon.png": "ab42bb644e2a370bf3b8c6a3ea448ad4",
"assets/assets/Icons/BuscetEmpty.jpg": "788d13d22d9f1ccc37a105d0c834161a",
"assets/assets/Icons/offerByProducts.png": "fe0b4f739d16191c2bc21058a775853a",
"assets/assets/Icons/orderDone.jpg": "61c91c0707ad5aa1acfe77098e3b6aea",
"assets/assets/Icons/pic.jpg": "6f90fe16124751eae7e80eb7e76628aa",
"assets/assets/Icon_svg/facebook-icon.svg": "647c0b46df6c43655944e2460e895948",
"assets/assets/Icon_svg/telegram-icon.svg": "66f8dfa319c57a98440f8401a9d4d90a",
"assets/assets/Icon_svg/tiktok-icon.svg": "08d4fdb5c0be946ad07378aa71f5be10",
"assets/assets/Icon_svg/whatsapp-icon.svg": "f8202b69207a8eb456472bedf1f15b99",
"assets/FontManifest.json": "3a78d1f23fab05fa6e4aa95f86216196",
"assets/fonts/MaterialIcons-Regular.otf": "982d6297853b2854895ccc1adc8f627c",
"assets/NOTICES": "ad5862d095f17dce4cb007566217b66f",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_lock_screen/fonts/OpenSans-Bold.ttf": "f5331cb6372b6c0d8baf2dd7e200498c",
"assets/packages/flutter_lock_screen/fonts/OpenSans-Light.ttf": "9ff12f694e5951a6f51a9d63b05062e7",
"assets/packages/flutter_lock_screen/fonts/OpenSans-Regular.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
"assets/packages/flutter_lock_screen/images/bg.jpg": "03e46626e66c2d3df70f99629f68d28b",
"assets/packages/flutter_lock_screen/images/fingerprint.png": "3eb3f3257680391352ceccf4826c1b82",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7390f46d3a5ff3c7c454872ac1cd97e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c59361e5f269b9cfb9dec1793eb91a8e",
"/": "c59361e5f269b9cfb9dec1793eb91a8e",
"main.dart.js": "9dfd14df74c3ce6f1d53401e1426da70",
"manifest.json": "e9f28c21c9cf98ef97318227cb89de8c",
"version.json": "5bfd7c2b0be285a085a85715c72c9aa8"};
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
