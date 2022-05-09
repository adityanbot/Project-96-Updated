//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB2lvePlIj7JWkKXT8rQoPCC2TfLF1_DEs",
      authDomain: "kwitter-f7c1d.firebaseapp.com",
      databaseURL: "https://kwitter-f7c1d-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7c1d",
      storageBucket: "kwitter-f7c1d.appspot.com",
      messagingSenderId: "567476796389",
      appId: "1:567476796389:web:325d88d923c2654e558d0c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

