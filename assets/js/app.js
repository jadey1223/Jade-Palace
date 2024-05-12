


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
}

gapi.load('auth2', function() {
  gapi.auth2.init({
    client_id: '444189995200-3r9lni89ot0e7nchd82bhecnv2mftnlf.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  });
});

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:3000');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);