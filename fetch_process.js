const firebaseConfig = {
    apiKey: "AIzaSyBx0bMskTVFWOjiHMlcnIgQPvAQ01ZhFwU",
    authDomain: "portfolio-contact-form-6cb07.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-6cb07-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-6cb07",
    storageBucket: "portfolio-contact-form-6cb07.appspot.com",
    messagingSenderId: "333505767242",
    appId: "1:333505767242:web:06d571004e8244482ac3b3"
  };

  firebase.initializeApp(firebaseConfig);

  document.getElementById("fetchForm").addEventListener("submit", submitForm);

  function submitForm() {
    var db = firebase.database().ref();

    db.on('value', (snapchat) => {
        const data = snapchat.val();
        console.log(data);
    });
  }