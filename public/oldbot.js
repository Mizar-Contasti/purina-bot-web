// // Function to get a token via POST request
// async function getToken(url, credentials) {
//   try {
//     let response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });
//     let data = await response.json();
//     return data.access_token; // Assuming the token is returned in a property called 'access_token'
//   } catch (error) {
//     console.error("Error getting token:", error);
//   }
// }

// // Function to make a GET request using the token
// async function getData(url, token) {
//   try {
//     let response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Function to fetch the token and then use it to fetch data
// async function fetchDog(dogId) {
//   const tokenUrl = "https://api.petfinder.com/v2/oauth2/token";
//   const credentials = {
//     grant_type: "client_credentials",
//     client_id: "ulFwQEA9yUpsC40LPW3xYqwuTc0POiY83j8nOJcqHKsAfUk5dH",
//     client_secret: "cu2zN86yH1kgUF86XRlRZRgr0hGq4wtSn1IJqYtn",
//   };

//   try {
//     // Get the token
//     const token = await getToken(tokenUrl, credentials);
//     // console.log("Received token:", token);

//     // Use the token to make a GET request
//     const getUrl = `https://api.petfinder.com/v2/animals/${dogId}`;
//     const data = await getData(getUrl, token);
//     // console.log("GET response data:", data);

//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Variable to store dog data
// let dogData;

// function extractNumbersFromURL(url) {
//   // Use a regular expression to extract the numbers after the last '-'
//   let match = url.match(/-(\d+)\//);
//   return match ? match[1] : null;
// }

// // Example usage
// let url = window.location.href;
// let dogId = extractNumbersFromURL(url);

// // const dogId = urlParams.get("dogid");
// // const shelterId = urlParams.get("shelterid");

// if (dogId) {
//   fetchDog(dogId)
//     .then((data) => {
//       dogData = data;
//       // console.log("Dog data:", dogData);
//       console.log(dogData.animal);
//       // You can now use the dogData variable to work with the fetched data
//     })
//     .catch((error) => {
//       console.error("Error fetching dog data:", error);
//     });

//   window.addEventListener("df-messenger-loaded", () => {
//     // Messenger is now ready.
//     console.log("Messenger is now ready");
//     const dfMessenger = document.querySelector("df-messenger");
//     dfMessenger.sendQuery("dog id is " + dogId);
//   });
// } else {
//   console.log("please declare dogid");
// }

// // Calling fetchData and storing the result in dogData variable

// // window.addEventListener("df-chat-open-changed", (event) => {
// //   console.log(`Chat is ${event.detail.isOpen ? "open" : "closed"}`);
// // });

// // check if the param is created
