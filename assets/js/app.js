const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



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
// /**
//  * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
//  * from the client_secret.json file. To get these credentials for your application, visit
//  * https://console.cloud.google.com/apis/credentials.
//  */
// const oauth2Client = new google.auth.OAuth2(
//   YOUR_CLIENT_ID,
//   YOUR_CLIENT_SECRET,
//   YOUR_REDIRECT_URL
// );

// // Access scopes for read-only Drive activity.
// const scopes = [
//   'https://www.googleapis.com/auth/drive.metadata.readonly'
// ];

// // Generate a secure random state value.
// const state = crypto.randomBytes(32).toString('hex');

// // Store state in the session
// req.session.state = state;

// // Generate a url that asks permissions for the Drive activity scope
// const authorizationUrl = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'offline',
//   /** Pass in the scopes array defined above.
//     * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
//   scope: scopes,
//   // Enable incremental authorization. Recommended as a best practice.
//   include_granted_scopes: true,
//   // Include the state parameter to reduce the risk of CSRF attacks.
//   state: state
// });