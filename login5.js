<<<<<<< HEAD
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr('src', profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
}
/*window.onload = function () {
  google.accounts.id.initialize({
    client_id: "530952297189-mf883h2r76vinbhtq41i07krlqnn9vn2.apps.googleusercontent.com",
    callback: onSignIn
  });
} */   

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
     alert("Log out com sucesso");
      $(".g-signin2").css("display", "block");
     $(".data").css("display", "none");
    location.reload();      
 });
}


 //       function handleCredentialResponse(response) {
         //console.log("Encoded JWT ID token: " + response.credential);
 //         const data = jwt_decode(response.credential)
  //        name.textContent=data.name
 //         image.setAttribute('src' data.image)
 //         email.textContent=email.name
  //      }
  //        window.onload = function () {
  //        google.accounts.id.initialize({
   //         client_id: "530952297189-mf883h2r76vinbhtq41i07krlqnn9vn2.apps.googleusercontent.com",
   //         callback: handleCredentialResponse
   //       });
   //      google.accounts.id.renderButton(
    //        document.getElementById("buttonDiv"),
    //        { theme: "outline", size: "large" }  // customization attributes
    //      );
   //       google.accounts.id.prompt(); // also display the One Tap dialog
    //   }
   
=======
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr('src', profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
}
/*window.onload = function () {
  google.accounts.id.initialize({
    client_id: "530952297189-mf883h2r76vinbhtq41i07krlqnn9vn2.apps.googleusercontent.com",
    callback: onSignIn
  });
} */   

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
     alert("Log out com sucesso");
      $(".g-signin2").css("display", "block");
     $(".data").css("display", "none");
    location.reload();      
 });
}


 //       function handleCredentialResponse(response) {
         //console.log("Encoded JWT ID token: " + response.credential);
 //         const data = jwt_decode(response.credential)
  //        name.textContent=data.name
 //         image.setAttribute('src' data.image)
 //         email.textContent=email.name
  //      }
  //        window.onload = function () {
  //        google.accounts.id.initialize({
   //         client_id: "530952297189-mf883h2r76vinbhtq41i07krlqnn9vn2.apps.googleusercontent.com",
   //         callback: handleCredentialResponse
   //       });
   //      google.accounts.id.renderButton(
    //        document.getElementById("buttonDiv"),
    //        { theme: "outline", size: "large" }  // customization attributes
    //      );
   //       google.accounts.id.prompt(); // also display the One Tap dialog
    //   }
   
>>>>>>> 59f7530a47230756c9e584f1369ab35b68e9ab1e
   