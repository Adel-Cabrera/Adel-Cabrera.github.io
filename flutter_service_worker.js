'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "b84fca0a687480ebc0198ae69a1b1200",
"index.html": "0f16998604130202e333e3fabe8f2b30",
"/": "0f16998604130202e333e3fabe8f2b30",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/AssetManifest.json": "97fe5602ee8809fa175c97d9eefb511f",
"assets/assets/images/64.jpg": "137335e990088b0a6972b027ff41f45d",
"assets/assets/images/66.jpg": "1b36f48573ccbfa6fc3d6cd2e014037c",
"assets/assets/images/55.jpg": "dabe38b14284b671313fc3310fcb4329",
"assets/assets/images/58.jpg": "d6726eb3e08125261e4467d45687554b",
"assets/assets/images/65.jpg": "9aba8b3149635299f0f5754e4aa203f8",
"assets/assets/images/27.jpg": "e6cdaeedd046b882162f063012694019",
"assets/assets/images/21.jpg": "d2f7d56f7016d474338706c09e486fe4",
"assets/assets/images/75.jpg": "4112467ab46f5bd968fd1f88be0bebf8",
"assets/assets/images/47.jpg": "4bbb85d80498418211327a61cb1419a7",
"assets/assets/images/69.jpg": "d7a27551afceadcfc525e54e6be516a4",
"assets/assets/images/44.jpg": "e42c8c04fafac64fec3e1a54d590b2a0",
"assets/assets/images/34.jpg": "b0c8df90e1393d03f63d47ed909cda79",
"assets/assets/images/23.jpg": "9196e4964f60c237ac14fbfc4a7f5e27",
"assets/assets/images/6.jpg": "5b9762d9f79c6c0b051c4b2b9f459c9b",
"assets/assets/images/41.jpg": "795b0ffdca235bd258b49ac6f694c946",
"assets/assets/images/52.jpg": "55494f2b46e9c148802ad7c6dd8be8ef",
"assets/assets/images/71.jpg": "a548eacd01e3f80a46a6d43554bb5cec",
"assets/assets/images/29.jpg": "34fe3d3fece0a48d857606d21aaffa77",
"assets/assets/images/54.jpg": "9909b07403aeb4f56f18fa193ff49d3a",
"assets/assets/images/49.jpg": "c33d11f77414b9a22b3a6e6df8b10713",
"assets/assets/images/37.jpg": "b131e34eb14d724fb6b3d9e5831c539b",
"assets/assets/images/62.jpg": "806846b1acf8b7895c01744e82def1ff",
"assets/assets/images/45.jpg": "aaa93f917dd8277104e783718fcf109e",
"assets/assets/images/oracle.jpg": "4a54c2246a74d5475c0e20c5d5c9d9db",
"assets/assets/images/15.jpg": "ac1f51208b6a6751f0c553c64aa9f24b",
"assets/assets/images/5.jpg": "5034f853428a7e33ed68b3d06d526679",
"assets/assets/images/48.jpg": "73f309ea451caf5b7e0970c77fa4db0f",
"assets/assets/images/4.jpg": "510c93f353f66ea8d9bb9419afc48b2b",
"assets/assets/images/8.jpg": "be5734b42460517a61b246ea0cb6fd5d",
"assets/assets/images/9.jpg": "288982aef734f021867e4afcf185f5c1",
"assets/assets/images/tarotback.png": "efd3d1541e3a1012319218a571c2dd40",
"assets/assets/images/32.jpg": "d5d363c7efc3e930e5abe58479e820c1",
"assets/assets/images/12.jpg": "2c608f9411ee653bc373c1cfa59fbb39",
"assets/assets/images/42.jpg": "05bcfadbcbf686d4268253a0e58a0b3d",
"assets/assets/images/70.jpg": "c5e79188371a39f2a63ffef6cd05425f",
"assets/assets/images/46.jpg": "dceea3c8bfa7167534f9e8f14ac3841c",
"assets/assets/images/74.jpg": "6c271cd05a609f1b6dc983e33b72064d",
"assets/assets/images/26.jpg": "fc545e936fcbe00c5ce46483a0616e7e",
"assets/assets/images/cups.jpg": "0538c16f943ed37d9b5d242b8e99860d",
"assets/assets/images/61.jpg": "8f007e4d782b6b69141bdaded2caa78a",
"assets/assets/images/56.jpg": "2d951bbd175e1e4da7806c6c57c39eb7",
"assets/assets/images/3.jpg": "0b5622cf3c8d4c9d1ab3f679def62735",
"assets/assets/images/39.jpg": "2e1400246e88f90d97a94166047a2de2",
"assets/assets/images/wands.jpg": "66f58f8fe37149417218a9dd58e28cb3",
"assets/assets/images/7.jpg": "ed6a9c8f71612c76b52aa9e898a6ec7c",
"assets/assets/images/77.jpg": "9ef01559a1bf154062538312ad65e575",
"assets/assets/images/35.jpg": "0b8a03127b892ec21dbaa2f09f274eb8",
"assets/assets/images/25.jpg": "be21c29934bb7fc93ccb5343d44f2a06",
"assets/assets/images/16.jpg": "8f2f2635517b2be5e8c7e469530abad4",
"assets/assets/images/2.jpg": "81e0ce0e9b52077293abd8660e49c6d7",
"assets/assets/images/1.jpg": "2303bec96d93e6f9f492311f22812577",
"assets/assets/images/goddess.jpg": "f0d13358470b620c286e27621c5cdfcd",
"assets/assets/images/30.jpg": "5cefcfd37bca80f71dd9679c8432c6c3",
"assets/assets/images/53.jpg": "93fe3525249fa21a725edeedbf8bf09c",
"assets/assets/images/10.jpg": "f9c9aad643d5b6440d92a6907a7b8d55",
"assets/assets/images/20.jpg": "f7fb8421a2892f2a00ab7b222fbe3987",
"assets/assets/images/68.jpg": "2e74a243cf90819beacc4a476300e47f",
"assets/assets/images/57.jpg": "a788787d39b3c66b56a806b2992fd441",
"assets/assets/images/63.jpg": "91eb440b2482aa97a25a33e6df919e80",
"assets/assets/images/14.jpg": "71c46665fe246a4c7344184ad79c1050",
"assets/assets/images/72.jpg": "edf349569a3ad85b3606092b549f3182",
"assets/assets/images/18.jpg": "8bb72cdebc14a3be823f06706a4b718c",
"assets/assets/images/76.jpg": "780ddaa7140a336182218bcfa99fcf33",
"assets/assets/images/19.jpg": "7d84c51dbbfae4e69c61d578d236bf51",
"assets/assets/images/59.jpg": "465f1b867c073e5fc5438a187cfc21f8",
"assets/assets/images/swords.jpg": "b697d2f42d8755c86de3d68449892ecd",
"assets/assets/images/13.jpg": "ca605399936c1672b39da1d1001a8f6b",
"assets/assets/images/50.jpg": "5788637bb269dbba9221e0e0349f8baf",
"assets/assets/images/36.jpg": "bdb8fae0d5c68fd320105c17104a4f6e",
"assets/assets/images/28.jpg": "dc1782ddc40686e682b033d068e89dcb",
"assets/assets/images/0.jpg": "09bcef9ae24fb19f1448832d9e49c030",
"assets/assets/images/31.jpg": "93684db341f8a917e28dbd0217b2c14e",
"assets/assets/images/arcana.jpg": "cdc3f8fb5d0479d42d7f59462412048f",
"assets/assets/images/pentacles.jpg": "7a93b0736bf94ad839225199d8926589",
"assets/assets/images/38.jpg": "00a5a01c5bd0e55a61dc71a5b8015707",
"assets/assets/images/67.jpg": "0218d7b79f76537d54ffef790538e033",
"assets/assets/images/24.jpg": "372dac83bbf376a570272b58a63c0dd0",
"assets/assets/images/33.jpg": "7995fda27487958f9a75bc71ae2702bc",
"assets/assets/images/11.jpg": "648b67fdbdedd207267a3abd730f6274",
"assets/assets/images/73.jpg": "4fb01a0e94851a88275fedc76f1cb9c6",
"assets/assets/images/51.jpg": "fddadfb58b2336debb3aa04e2ae038ec",
"assets/assets/images/17.jpg": "e80ef3597b07f23721df69bce52e5e06",
"assets/assets/images/40.jpg": "4a9f741f1d15939256c999e56ec8d06c",
"assets/assets/images/60.jpg": "8585028b5ff3a406428b059c62eccf7f",
"assets/assets/images/22.jpg": "ca95e1968cffa0887aeba376efdbd88f",
"assets/assets/images/43.jpg": "ba6a881de7aaef469ef1d25aa1bd39ae",
"assets/assets/spreads/spread13.jpg": "b21055c2e94b334ea7762fa8d256b5f6",
"assets/assets/spreads/spread1.jpg": "55f93bcb8f7669dd048dc29c6709199e",
"assets/assets/spreads/spread11.jpg": "6ae31d0371ab84af2d90ea425ccb8106",
"assets/assets/spreads/spread3.jpg": "df1794e8198a4e7048c11dbc9930e1b3",
"assets/assets/spreads/spread4.jpg": "6c92bf5c7e6031ec34598a7b429c42a7",
"assets/assets/spreads/spread0.jpg": "8f197f6bb1bf7a5212ca72867d7a3b77",
"assets/assets/spreads/spread12.jpg": "a1b283cfd1ed2ceea77942ef9ad7fe76",
"assets/assets/spreads/spread2.jpg": "d1cb137dc91b820779136b440c234cf9",
"assets/assets/spreads/spread5.jpg": "d04b07776f05a9cef437e61af968fddf",
"assets/assets/spreads/spread8.jpg": "0f743846f2b694086296cac9864c0b38",
"assets/assets/spreads/spread7.jpg": "bece63fe131d695ed2c1e2d91468b5da",
"assets/assets/spreads/spread6.jpg": "32ecd9263f4fc1b48251820ed547ab14",
"assets/assets/spreads/spread10.jpg": "dc8dce393354b311082ba43e0004dd70",
"assets/assets/spreads/spread9.jpg": "a58ef62b1a32c92c53e4e0965e936b1d",
"assets/google_fonts/Galada-Regular.ttf": "d7d86e7e7e6fdfcac55037c13bafde3a",
"assets/google_fonts/OFL.txt": "295da97b6d25da9455b811259f85016d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/LICENSE": "608cc7e00008fe9824ee54a4bf225620",
"main.dart.js": "718cd93b8506428597df327d6d91e08b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
