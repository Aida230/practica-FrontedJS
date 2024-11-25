import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getProduct, removeProduct } from "./product-detail-model.js"
import { buildDeleteButton, buildProductDetail } from "./product-detail-views.js"

export async function productDetailController(productDetailContainer, productId) {

  try {
    const product = await getProduct(productId)
    const user = await getCurrentUserInfo();

    productDetailContainer.innerHTML = buildProductDetail(product)

    if (user.id === product.user.id) {
      const removeButtonElement = buildDeleteButton();
      productDetailContainer.appendChild(removeButtonElement);
      removeButtonElement.addEventListener("click", async () => {
        const shouldRemoveProduct = confirm('¿Seguro que quieres borrar el producto?');
        if (shouldRemoveProduct) {
          // gestión del error
          await removeProduct(product.id);//GESTIONAR LOS ERRORES
          window.location.href = "/"
        }
      })
    }
  } catch (error) {
    alert(error.message)
    window.location.href = "/"
  }
  
}