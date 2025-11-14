const CACHE_NAME = 'jay-jay-portfolio-cache-v3';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/constants.ts',
  '/i18n/LanguageContext.tsx',
  '/i18n/locales/en.ts',
  '/i18n/locales/es.ts',
  '/i18n/locales/pt.ts',
  '/i18n/locales/it.ts',
  '/i18n/locales/ja.ts',
  '/i18n/locales/zh.ts',
  '/components/Header.tsx',
  '/components/ProjectCard.tsx',
  '/components/Footer.tsx',
  '/components/LanguageSwitcher.tsx',
  '/components/icons/GitHubIcon.tsx',
  '/components/icons/ExternalLinkIcon.tsx',
  '/components/icons/ARFlagIcon.tsx',
  '/components/icons/USFlagIcon.tsx',
  '/components/icons/BRFlagIcon.tsx',
  '/components/icons/ITFlagIcon.tsx',
  '/components/icons/JPFlagIcon.tsx',
  '/components/icons/CNFlagIcon.tsx',
  '/manifest.json',
  '/icon.svg'
];

// Install event: cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(err => {
        console.error('Failed to open cache and cache assets:', err);
      })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }
  
  // For navigation requests, use a network-first strategy to get the latest HTML.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If fetch is successful, cache the new response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If network fails, serve from cache
          return caches.match('/');
        })
    );
    return;
  }

  // For other requests (CSS, JS, images), use a cache-first strategy.
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then(networkResponse => {
            // Cache the new response for future use
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
            });
            return networkResponse;
        });
      })
  );
});