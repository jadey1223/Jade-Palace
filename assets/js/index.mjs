
import authgear from "@authgear/web";

authgear
  .configure({
    endpoint: "https://print-winner-643.authgear.cloud",
    clientID: "16fc902e7d7a9115",
    sessionType: "refresh_token",
  })
  .then(
    () => {
      console.log("Authgear configured successfully.");
    },
    (err) => {
      console.error("Failed to configure Authgear.", err);
    }
  );

  authgear
  .startAuthentication({
    // configure redirectURI which users will be redirected to
    // after they have authenticated with Authgear
    // you can use any path in your website
    // make sure it is in the "Redirect URIs" list of the Application
    redirectURI: "http://127.0.0.1:3000/index.html/auth-redirect",
    prompt: "login",
  })

  authgear.finishAuthentication().then(
    (userInfo) => {
      // authorized successfully
      // you should navigate the user to another path
    },
    (err) => {
      // failed to finish authorization
    },
  );

