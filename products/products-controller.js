//nexo de unión enre modelo y vista

import { getProducts } from "./products-model.js"
import { buildProduct, buildEmptyProductList } from "./products-views.js"
import { fireEvent } from "../utils/fire-event.js"
import { spinner } from "../utils/spinner.js";

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

export async function productsController(productsContainer) {
  productsContainer.innerHTML = "";
  spinner('hidden');
  try {
    const products = await getProducts();
    fireEvent("Pokemon cargados correctamente", "success", productsContainer);
    drawProducts(products, productsContainer)
  } catch (error) {
    // alert(error.message)
    fireEvent(error.message, "error", productsContainer);
  } finally {
    spinner('hidden');
  }
}