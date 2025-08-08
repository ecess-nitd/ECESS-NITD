const CACHE_NAME = 'ecess-images-v1';
const IMAGE_CACHE_NAME = 'ecess-images-cache-v1';

// URLs to cache on install
const urlsToCache = [
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Image domains that should be cached
const IMAGE_DOMAINS = [
  'i.imgur.com',
  'live.staticflickr.com',
  'nitdgp.ac.in'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle image requests
  if (request.destination === 'image' || isImageRequest(url)) {
    event.respondWith(handleImageRequest(request));
    return;
  }

  // Handle other requests
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(request);
      })
  );
});

function isImageRequest(url) {
  return IMAGE_DOMAINS.some(domain => url.hostname.includes(domain)) ||
         /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname);
}

async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE_NAME);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone the response before caching
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Image fetch failed:', error);
    
    // Return a placeholder image for failed requests
    return new Response(
      `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#999" text-anchor="middle" dy=".3em">Image not available</text>
      </svg>`,
      {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
}
