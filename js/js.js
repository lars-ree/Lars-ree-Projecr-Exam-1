const productsUrl = "";

async function getProducts() {
  try {
    const response = await fetch(
      "https://trodalree.no/wp-json/wc/store/products/"
    );
    const jsonFromServer = await response.json();
    const products = jsonFromServer;
    console.log(products);

    for (let i = 0; i < products.length; i++) {
      document.querySelector(".results").innerHTML += `  
      <div class="sm-cont">
     
      <div class ="column-5">
      <img class="column-5" src="${products[i].images[0].src}">
     
      <h4 class="recipe_name">${products[i].name}</h4>
      <a class=btn href="ind.html?id=${products[i].id}">
      get recipe
      </a>
      </div>  </div>`;

      if (i === 9) {
        break;
      }
    }
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "An error occured",
      "error"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}

getProducts(productsUrl);
