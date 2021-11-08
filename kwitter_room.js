
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAHYuaZfvMh6OsCN-KYUlGXVHB1EWN_pvA",
      authDomain: "kwitter-6c83c.firebaseapp.com",
      databaseURL: "https://kwitter-6c83c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c83c",
      storageBucket: "kwitter-6c83c.appspot.com",
      messagingSenderId: "1022816257000",
      appId: "1:1022816257000:web:fc5e864129478132c09a5d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
