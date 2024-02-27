"use server";
async function getAnimal() {
  const response = await fetch(
    "https://65dc41c1e7edadead7eb6f69.mockapi.io/api/v1/DogCat"
  );
  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}

