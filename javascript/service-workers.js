// Progressive Enhancement (SW Supported)
// Script to Enable the service worker.
if (naviagator.serviceWorker) {

  // Register the sw
  naviagator.serviceWorker.register('./sw.js').then((resgistration) => {
      console.log('SW Registered');
  })
  .catch((err) => {
      console.log(err);
  });

}

/* Life-Cycle Methods:
  1. refer service worker use self keyword inside file.
  2. self.skipWaiting() to forcefully run the other service worker.
*/

// Service Worker Code:
self.addEventListener('install', (e) => {
    console.log('SW: Install Event');

    let installPromise = new Promise((resolve) => {
        // Some Async Tasks
        setTimeout(resolve, 3000);
    });

    // Tasks for the install event
    e.waitUntil(installPromise);
});


// USed for taking over the other task from other service worker;
self.addEventListener('activate', (e) => {
    console.log('SW: Activate Event');

    let activePromise = new Promise((resolve) => {
        // Some Async Tasks
        setTimeout(resolve, 3000);
    });

    // Tasks for the install event
    e.waitUntil(activePromise);
});


/*
Intercepting the request is the best application of the SW.
The power of service workers is once a service worker has been installed and is
running it remains in the background regardless of the application state the
*/
self.addEventListener('fetch', (e) => {
    console.log('SW: Fetch Event', e);
    // We can add the proxies to the resources we fetch & do redirection.
    if (e.request.url.endsWith('style.css')) {
      e.respondWith( fetch('style2.css') );
    }

    // Custom response created with custom header
    if (e.request.url.endsWith('greet')) {

      let headers = new Headers({ 'Content-Type': 'text/html' });
      let customResponse = new Reponse('<h1>hello world</h1>', {headers});

      e.respondWith(customResponse);
    }

});


// Get Camera Feed
fetch('camer_feed.html').then((res) => {
    return res.text();
}).then((html) => {
    document.getElementById('camers_feed').innerHTML = html;
});

// Handling camer_feed failure if not exist
self.addEventListener('fetch', (e) => {
    // Custom response created with custom header
    if (e.request.url.endsWith('/camer_feed.html')) {
      e.respondWith(
        fetch(e.request)
          .then((res) => {
            if (res.ok)  return res;
            return new Response('Camera feed currently not available');
          });
      );
    }
});

/*
  Scope of Service Worker:
  1. If its in top-level/root directory its having access to all pages
  2. If SW is in Sub-directory it only having access to those request which are passing through that directory
    & don't have access to root.
  3. This one is done for Security purpose. But it can be installed from anywhere.
  4. We can also define scope of SW while registering it.
*/
if (naviagator.serviceWorker) {
  // Register the sw
  naviagator.serviceWorker.register('./sw.js', { scope: '/posts' }).then((resgistration) => {
      console.log('SW Registered');
  });
}


/* Service Worker Registration */
if (naviagator.serviceWorker) {
  naviagator.serviceWorker.register('./sw.js').then((resgistration) => {
      console.log(resgistration);

      resgistration.onupdatefound = () => {
          console.log('New SW found');
          let newSW = resgistration.installing;

          newSW.onstatechange = () => {
            console.log(newSW.state);
          };
      };
  });
}

/* Service Worker Events Message
  1. Messaging API which is used in SW is standard HTML5 messaging API.
*/
if (naviagator.serviceWorker) {
  naviagator.serviceWorker.register('./sw.js').then((resgistration) => {
      console.log(resgistration);

      if (resgistration.active) {
        resgistration.active.postMessage('hello from main.js');
      }

      resgistration.onupdatefound = () => {
          let newSW = resgistration.installing;

          if (confirm('App update found. Do you want to update now?')) {
              newSW.postMessage('update_self');
          }
      };
  }).catch((err) => console.log(err));

  naviagator.serviceWorker.addEventListener()
}

// SW.js
self.addEventListener('message', (e) => {
  console.log(e.data);

  if (e.data === 'update_self') {
      console.log('Service Worker Updating');
      self.skipWaiting();
  }

  // Respond to all clients -> Multiple Tabs in same browser
  // When new window opens same SW is used.
  self.clients.matchAll() // All active clients
    .then((clients) => {
      clients.forEach((client) => {

        // Only repond to client who sent us the message (Private messaging with the respective client)
        if (e.source.id === client.id) {
          client.postMessage('Hello from Service Worker');
        }
      });
    });
});



/* Service Worker Push Events
  1.Can simulate with Push in Chrome dev tools.
*/
self.addEventListener('push', () => {
    console.log('Push Received');
});

//=============================================================================
// HTML 5 Notifications
//=============================================================================
// Notification Support
function showNotification() {
  let notificationOptions = {
      body: 'wegienr',
      icon: './icon.png'
  };

  let n = new Notification('My new Notification', notificationOptions);
  n.onclick = () => {
    console.log('Notification Clicked');
  };
}

if (window.Notification) {
  // Manage Permission: granted / denied/ default (browser default)
  if (Notification.permission === 'granted') {
      showNotification();

  } else if (Notification.permission !== 'denied') {

      Notification.requestPermission((permission) => {
          if (permission === 'granted') {
            showNotification();
          }
      });
  }
}

//=============================================================================
// Push Notifications
//=============================================================================
// send notification on push
self.addEventListener('push', (e) => {
    let n = self.resgistration.showNotification('A notification from SW');
    e.waitUntil(n);

    let pubKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

    resgistration.pushManager.getSubscription().then((sub) => {
        if (sub) return sub;

        let key = urlBase64ToUnit8Array(pubKey); // UTILITY method
        // Subscribe
        return resgistration.pushManager.subscribe({
          userVisible: true,
          applicationServerKey: key
        });
      })
      .then(sub => sub.toJSON())
      .then(console.log)
      .catch(console.log);
});


/*=============================================================================
----------------------Storage Options-----------------------
1. IndexedDB: APIs are complex to use.
2. Web SQL
3. Local Storage: synchronous (Multiple can write at same time)
4. Cache API

- If App has to sync betweeen multiple devices you can use pouchdb (based on couchDB).
- LocalForage
-
=============================================================================
*/
