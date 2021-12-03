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
var db = firebase.firestore();

function storeData(){

  var inputText = document.getElementById("comment").value;

  db.collection("teamproject").doc().set({
        comments: inputText
  })
  .then(function(){
    console.log("Document successfully written");
  })
  .catch(function(error) {
    console.error("Error writing document:  ", error);
  });

}