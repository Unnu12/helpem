var firebaseConfig = {
    apiKey: "AIzaSyA0gNyVAmzB8Tb7aftViPOCct4SPLB5FPo",
    authDomain: "kwitter-b8d57.firebaseapp.com",
    databaseURL: "https://kwitter-b8d57-default-rtdb.firebaseio.com",
    projectId: "kwitter-b8d57",
    storageBucket: "kwitter-b8d57.appspot.com",
    messagingSenderId: "821204879447",
    appId: "1:821204879447:web:a5621fb337e2fe9ab8fb12"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like: 0
});
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data ['message'];
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}