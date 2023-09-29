// https://dog.ceo/api/breeds/image/random Fetch!
async function getRandomDogImageFromApi() {
  //     fetch("https://dog.ceo/api/breeds/image/random");

  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random").then(
      (res) => res.json()
    );
    return res.message;
  } catch (error) {
    console.log(error);
  }
}
