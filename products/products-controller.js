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

function fireEvent(message, type, element) {
  const customEvent = new CustomEvent("loading-products-info", {
    detail: {
      message,
      type,
    }
  });
  element.dispatchEvent(customEvent);
}

export async function productsController(productsContainer) {
  const spinner = document.querySelector('.spinner')
  productsContainer.innerHTML = "";

  spinner.classList.toggle('hidden');
  try {
    const products = await getProducts();
    fireEvent("productos cargados correctamente", "success", productsContainer);
    drawProducts(products, productsContainer)
  } catch (error) {
    // alert(error.message)
    fireEvent(error.message, "error", productsContainer);
  } finally {
    spinner.classList.toggle('hidden');
  }
}

