// function printAll() {
//   setTimeout(() => {
//     console.log("after 3 seconds");
//   }, 3 * 1000);

//   setTimeout(() => {
//     console.log("after 2 seconds");
//   }, 2 * 1000);

//   setTimeout(() => {
//     console.log("after 1 second");
//   }, 1 * 1000);
// }

// call backs
// function printAll() {
//   // call back hell
//   setTimeout(() => {
//     console.log("after 3 seconds");
//     setTimeout(() => {
//       console.log("after 2 seconds");
//       setTimeout(() => {
//         console.log("after 1 second");
//       }, 1 * 1000);
//     }, 2 * 1000);
//   }, 3 * 1000);
// }

// promises
// function printAll(num) {
//   return new Promise((resolve, reject) => {
//     // reject("an error");
//     if (num == 2) {
//       reject("error: num is 2");
//     } else {
//       resolve("a success");
//     }
//   });
// }

// printAll(4)
//   .then((result) => {
//     // resolve
//     console.log(result);
//   })
//   .catch((e) => {
//     // reject
//     console.log(e);
//   });

// printAll(2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

function delayPrint(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("oh no");
      resolve("Printed after " + seconds + " secs");
    }, seconds * 1000);
  });
}

// delayPrint(3)
//   .then(() => {
//     console.log("Im printed after 3 seconds");
//     delayPrint(2).then(() => {
//       console.log("Im printed after 2 seconds");
//       delayPrint(1).then(() => {
//         console.log("Im printed after 1 seconds");
//       });
//     });
//   })
//   .catch();

// delayPrint(3)
//   .then((result) => {
//     console.log(result);
//     return delayPrint(2);
//   })
//   .then((result) => {
//     console.log(result);
//     return delayPrint(1);
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("Executed after 6 seconds");
//   })
//   .catch();

async function callMeMaybe() {
  try {
    const resp1 = await delayPrint(3);
    console.log(resp1);
    const resp2 = await delayPrint(2);
    console.log(resp2);
    const resp3 = await delayPrint(1);
    console.log(resp3);
  } catch (error) {
    console.log(error);
  }
}

callMeMaybe();
