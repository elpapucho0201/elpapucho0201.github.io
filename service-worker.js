// service-worker.js

// Evento 'install': Se activa cuando se instala el service worker
self.addEventListener('install', event => {
    console.log('Service Worker instalado');
  });
  
  // Evento 'activate': Se activa cuando el service worker se activa
  self.addEventListener('activate', event => {
    console.log('Service Worker activado');
  });
  
  // Evento 'fetch': Se activa cuando la página web solicita recursos al servidor
  self.addEventListener('fetch', event => {
    console.log('Solicitud de recurso: ', event.request.url);
  
    // Aquí puedes agregar lógica para manejar las solicitudes fetch, como cachear recursos
    // o interceptar solicitudes para proporcionar respuestas personalizadas.
  });
  