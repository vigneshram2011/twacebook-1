var firebaseConfig = {
      apiKey: "AIzaSyA2juQkb__SauNSpkaSHT-fy7klYLxL32M",
      authDomain: "twacebook-97581.firebaseapp.com",
      databaseURL: "https://twacebook-97581-default-rtdb.firebaseio.com",
      projectId: "twacebook-97581",
      storageBucket: "twacebook-97581.appspot.com",
      messagingSenderId: "149392623679",
      appId: "1:149392623679:web:7d4625deb75421ff80d08a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();