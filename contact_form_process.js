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

  document.getElementById("myForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;

    var portfolio_db = firebase.database().ref("Submissions/"+name);
    
    var newSubmission = portfolio_db.push();
    newSubmission.set({
        Name: name,
        Company : email,
        Message: msg,
    }, function(error) {
      if (error) {
          alert("Error occurred: " + error.message);
      } else {
          alert("Submission successful!");
          window.location.href = "index.html"; // Redirect to index.html
      }
      });
  }