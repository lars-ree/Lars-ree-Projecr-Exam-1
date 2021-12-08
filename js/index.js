const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getProducts(productId) {
  try {
    const response = await fetch(
      "https://trodalree.no/wp-json/wc/store/products/" + productId
    );
    const jsonResults = await response.json();
    const products = jsonResults;
    console.log(products);
      //name
    document.title = products.name;
    document.querySelector(".card").innerHTML = `<h2>${products.name}</h2>`;
      //img
    document.querySelector(
      ".card4"
    ).innerHTML = `<img class="product__img" src="${products.images[0].src}">`;
    //short desc
    document.querySelector(
      ".card5"
    ).innerHTML = `<li>${products.short_description}</li>`;
    //desc
    document.querySelector(
      ".card2"
    ).innerHTML = `<p class="ingList">${products.description}</p>`;
  } catch (error) {
    document.querySelector(".alert").innerHTML = showError(
      "An error occured (Cannot load content)",
      "error"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 4000);
  }
}

getProducts(id);
