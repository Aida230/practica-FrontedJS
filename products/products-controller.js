//nexo de unión enre modelo y vista

import { getProducts } from "./products-model.js"
import { buildProduct, buildEmptyProductList } from "./products-views.js"

function drawProducts(products, productsContainer) {
  if(products.length === 0) {
    productsContainer.innerHTML = buildEmptyProductList();
  } else {
    products.forEach(product => {
      const newProduct = buildProduct(product);
      productsContainer.appendChild(newProduct);
    })
  }
}

async function showProducts() {
  const productsContainer = document.querySelector('#products-container');
  productsContainer.innerHTML = "";
  const products = await getProducts();
  drawProducts(products, productsContainer)
}

document.addEventListener("DOMContentLoaded", showProducts);

