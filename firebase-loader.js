(function () {
  if (!window.MDK_FIREBASE_CONFIG) {
    console.error("Firebase config missing");
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(window.MDK_FIREBASE_CONFIG);
  }

  window.MDK_AUTH = firebase.auth();
  window.MDK_DB = firebase.firestore ? firebase.firestore() : null;
  window.MDK_STORAGE = firebase.storage ? firebase.storage() : null;
})();
