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

  var push_to_firebase = function(data){
    alert("Thanks for applying for the team. I'll try and get back to you as soon as possible.")
    var db = firebase.firestore();

    db.collection("messages").add({
        firstname: data["firstname"],
        lastname: data["lastname"],
        email: data["email"],
        gametime: data["gametime"],
        gamingcategory: data["gamingcategory"],
        kdratio: data["kdratio"],
        gameconsole: data["gameconsole"],
        youtube: data["youtube"],
        ytname: data["ytname"],
        
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
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var gametime = document.getElementById("gametime");
    var gamingcategory = document.getElementById("gamingcategory");
    var kdratio = document.getElementById("kdratio");
    var gameconsole = document.getElementById("gameconsole");
    var youtube = document.getElementById("youtube");
    var ytname = document.getElementById("ytname");
    
  var data = {
      "firstname": firstname.value,
      "lastname": lastname.value,
      "email": email.value,
      "gametime": gametime.value,
      "gamingcategory": gamingcategory.value,
      "kdratio": kdratio.value,
      "gameconsole": gameconsole.value,
      "youtube": youtube.value,
      "ytname":  ytname.value,

    }
    push_to_firebase(data);

  }

  document.getElementById("submit_msg").addEventListener("click", contact_submit);
})();