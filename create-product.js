import { createProductController } from "./create-product/create-product-controller.js";
import { isUserLoggedIn } from "./utils/auth.js"

if (!isUserLoggedIn()) {
  window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
  const createProductForm = document.querySelector('form');

  createProductController(createProductForm)
})