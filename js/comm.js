(function() {
var firebaseConfig = {
  apiKey: "AIzaSyBMOeEj9tueXDYOtlmrNE9XudXXVMe7PoU",
  authDomain: "csci-project-689af.firebaseapp.com",
  projectId: "csci-project-689af",
  storageBucket: "csci-project-689af.appspot.com",
  messagingSenderId: "12242382443",
  appId: "1:12242382443:web:eefab9d4ce311d35194b2e",
  measurementId: "G-38VKC96CK4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Initialize Cloud Firestore through Firebase
var push_to_firebase = function(data){
  alert("Thanks for leaving a comment/suggestion!")
  var db = firebase.firestore();

  db.collection("teamproject").add({
      comm: data["comm"]
  })
  .then(function(docRef) {
      console.log("Message sent, ID: ", docRef.id);
      location.reload();
  })
  .catch(function(error) {
      console.error("Message could not be sent: ", error);
  });
}

var contact_submit = function(){
  var comm = document.getElementById("comm");
  
var data = {
    "comm": comm.value,

  }
  push_to_firebase(data);

}

document.getElementById("submit_btn").addEventListener("click", contact_submit);
})();