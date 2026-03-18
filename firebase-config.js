<!doctype html>
<meta charset="utf-8">
<title>Firebase Config Test</title>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyAt0rXQIIZI2MxS0a6b6ObixF0Bf-UiiPI",
    authDomain: "md-kitchen-live.firebaseapp.com",
    projectId: "md-kitchen-live",
    storageBucket: "md-kitchen-live.firebasestorage.app",
    messagingSenderId: "552178339796",
    appId: "1:552178339796:web:14ca54af158fd40e089041",
    measurementId: "G-8E7EMVBKZQ"
  };

  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    document.body.innerHTML =
      "<pre>" + JSON.stringify(firebase.app().options, null, 2) + "</pre>";
  } catch (e) {
    document.body.innerHTML =
      "<pre style='color:#b91c1c'>INIT ERROR:\n" +
      (e && e.message ? e.message : e) +
      "</pre>";
    console.error(e);
  }
</script>
