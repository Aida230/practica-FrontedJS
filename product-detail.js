import { productDetailController } from "./product-detail/product-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  
  // 1- obtener id del producto de la url
  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id");

  // 2- acceder al nodo donde pintaremos el detalle del producto
  const productDetailContainer = document.querySelector("#product-detail");
  
  productDetailController(productDetailContainer, productId)

})