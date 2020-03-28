// Once it installs, these are the files to be cached
self.addEventListener("install", function(event) {
	event.waitUntil(
		caches.open("v1").then(function(cache) {
			return cache.addAll([
				"/index.html",
				"/images/favicon_48.png",
				"/images/favicon_96.png",
				"/images/favicon_144.png",
				"/images/favicon.ico",
				"/css/style.css",
				"/js/app.js",
				"/js/panel.js"
			]);
		})
	);
});

// Will either return immediately, or only when fetch promise returns
self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.open("v1").then(function(cache) {
			return cache.match(event.request).then(function (response) {
				if (response) {
					console.log("Found in cache: ", event.request.url);
				} else {
					console.log("Not in cache: ", event.request.url);
				}
				var fetchPromise = fetch(event.request).then(function (networkResponse) {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
				return response || fetchPromise;
			})
		})
	);
});

// Can't add the prices through the service worker, because it comes from a different domain.