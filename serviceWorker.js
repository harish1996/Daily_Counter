const staticDevCoffee = "dev-counter"
const assets = [
"/",
"/index.html",
"/css/app.css",
"/css/extras.css",
"/js/app.js",
"/images/icons/loopico.png",
"/images/icons/loop.jpg",
]

self.addEventListener("install", 
	installEvent => { 
		installEvent.waitUntil( caches.open(staticDevCoffee).then(
			cache => { 
				cache.addAll(assets) 
			})
		)
	}
)

self.addEventListener("fetch",
	fetchEvent => {
		fetchEvent.respondWith(
			caches.match(fetchEvent.request).then(
				res => {
					return res || fetch(fetchEvent.request)
				})
		)
	}
)