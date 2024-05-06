
// Correct
import authgear from "@authgear/web";

// Use authgear in your code
authgear.configure({ /* ... */ });



// // Correct
// import authgear from "@authgear/web";

// // Use authgear in your code
// authgear.configure({ /* ... */ });



// let authgearClient = null;

// const fetchAuthConfig = () => fetch("/authgear_config.json");

// const configureClient = async () => {
//     const response = await fetchAuthConfig();
//     const config = await response.json();
//     authgearClient = window.authgear.default;

//     await authgearClient.configure({
//         endpoint: config.endpoint,
//         clientID: config.clientID,
//         sessionType: "refresh_token",
//     }).then(
//         () => {
//             console.log("Authgear client successfully configured!");
//         },
//         (err) => {
//             console.log("Failed to configure Authgear");
//         }
//     );
// };

// const login = async () => {
//     await authgearClient
//         .startAuthentication({
//             redirectURI: window.location.origin,
//             prompt: "login",
//         })
//         .then(
//             () => {
//                 console.log("Logged in!");
//             },
//             (err) => {
//                 console.log("Log in failed", err);
//             }
//         );
// };

// const logout = () => {
//     authgearClient
//     .logout({
//       redirectURI: window.location.origin,
//     })
//     .then(
//       () => {
//         console.log("Logged out successfully");
//       },
//       (err) => {
//         console.log("Failed to logout");
//       }
//     );
// };

// window.onload = async () => {
//     await configureClient();
//     updateUI();

//     const query = window.location.search;
//     if (query.includes("code=")) {

//         updateUI();

//         window.history.replaceState({}, document.title, "/");
//     }
// }

// const updateUI = async () => {
//     const isAuthenticated = authgearClient.sessionState === "AUTHENTICATED";

//     document.getElementById("btn-logout").disabled = !isAuthenticated;
//     document.getElementById("btn-login").disabled = isAuthenticated;
// };

// import authgear from "@authgear/web";

// authgear.configure({
//   // Your Authgear Client ID
//   clientID: "5c015605271bda72",
//   // Your Authgear endpoint
//   endpoint: "https://print-winner-643.authgear.cloud"
// });
// // Check if the user is authenticated when the page loads
// authgear.fetchUserInfo().then(userInfo => {
//   if (userInfo) {
//     // The user is authenticated
//     // You can update the UI accordingly
//   } else {
//     // The user is not authenticated
//     // You can redirect the user to the login page
//     authgear.startAuthorization();
//   }
// });
  