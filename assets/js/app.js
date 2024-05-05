let authgearClient = null;

const fetchAuthConfig = () => fetch("/authgear_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
    authgearClient = window.authgear.default;

    await authgearClient.configure({
        endpoint: config.endpoint,
        clientID: config.clientID,
        sessionType: "refresh_token",
    }).then(
        () => {
            console.log("Authgear client successfully configured!");
        },
        (err) => {
            console.log("Failed to configure Authgear");
        }
    );
};

const login = async () => {
    await authgearClient
        .startAuthentication({
            redirectURI: window.location.origin,
            prompt: "login",
        })
        .then(
            () => {
                console.log("Logged in!");
            },
            (err) => {
                console.log("Log in failed", err);
            }
        );
};

const logout = () => {
    authgearClient
    .logout({
      redirectURI: window.location.origin,
    })
    .then(
      () => {
        console.log("Logged out successfully");
      },
      (err) => {
        console.log("Failed to logout");
      }
    );
};

window.onload = async () => {
    await configureClient();
    updateUI();

    const query = window.location.search;
    if (query.includes("code=")) {

        updateUI();

        window.history.replaceState({}, document.title, "/");
    }
}

const updateUI = async () => {
    const isAuthenticated = authgearClient.sessionState === "AUTHENTICATED";

    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;
};

import authgear from "@authgear/web";

authgear
  .configure({
    // custom domain endpoint or default endpoint
    // default domain should be something like: https://<yourapp>.authgear.cloud
    endpoint: "<your_app_endpoint>",
    // Client ID of your application
    clientID: "<your_client_id>",
    // sessionType can be "refresh_token" or "cookie", default "refresh_token"
    sessionType: "refresh_token",
  })
  .then(
    () => {
      // configure successfully.
    },
    (err) => {
      // failed to configure.
    }
  );
  