const getData = () => {
  const request = fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((response) => {
      console.log("resolviendo");
      return response.results[0].image;
    });
  console.log("estamos?");
};

const url = getData();
const img = document.createElement("img");
img.src = url;
document.body.append(img);

// Pasa esto porque se ejecuto lo de afuera de la funcion getData sin que se termine de resolver. Por eso se utiliza Async-Await
const getDataAsync = async () => {
  const request = await fetch("https://rickandmortyapi.com/api/character");
  console.log("esperando");
  const data = await request.json();
  console.log("resuelto");
  return data;
};

getDataAsync()