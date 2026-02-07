importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCj3Uyxcxe1VzmRGsBWfAshyCljOlQkOfM",
  authDomain: "workout-coach-a8430.firebaseapp.com",
  projectId: "workout-coach-a8430",
  storageBucket: "workout-coach-a8430.firebasestorage.app",
  messagingSenderId: "335310300734",
  appId: "1:335310300734:web:d2ad9deb156338b240d36f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Workout Coach";
  const options = {
    body: payload.notification?.body || "New update",
    icon: "/icon-192.png"
  };
  self.registration.showNotification(title, options);
});
