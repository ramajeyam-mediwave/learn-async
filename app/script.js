async function getImage() {
  try {
    const image = await getRandomDogImageFromApi();
    console.log(image);
  } catch (error) {
    console.log(error);
  }
}
