import "./style.css";

import { fetchRandomDogImage } from "./utils/dogApi";

// import { animals } from "./utils/dog";
// // import { allDogs } from "./utils/dog";

// function printDogs() {
//   animals.sayHello();
//   // console.log(animals);
// }

// document.querySelector("#app").innerHTML = `<h1>Hello world</h1>`;
// printDogs();

async function start() {
  try {
    const res = await fetchRandomDogImage();
    console.log(res.data.message);
  } catch (error) {
    console.log(error);
  }
}

start();
