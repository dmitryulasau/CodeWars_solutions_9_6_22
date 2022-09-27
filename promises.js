// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("NICE");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("THEN " + message);
// }).catch((message) => {
//   console.log("CATCH " + message);
// });

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve(`${location} says HI`);
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resovle, reject) => {
    console.log("Processing response...");
    resovle(`Extra Information + ${response}'`);
  });
}

// makeRequest("Googfle")
//   .then((response) => {
//     console.log("Resposne has been received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function doWork() {
  const presponse = await makeRequest("Google");
  console.log("Resposne has been received");
  const processedResponse = await processRequest(response);
  console.log(processedResponse);
}

doWork();
