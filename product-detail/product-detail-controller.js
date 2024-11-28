import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getProduct, removeProduct } from "./product-detail-model.js"
import { buildDeleteButton, buildProductDetail, buildHomePageButton } from "./product-detail-views.js"

export async function productDetailController(productDetailContainer, productId) {
  try {
    
    const product = await getProduct(productId);

    // Construir y mostrar los detalles del producto
    productDetailContainer.innerHTML = buildProductDetail(product);

    //Creacion de booton volver a casa
    const homeButtonElement = buildHomePageButton();
    productDetailContainer.appendChild(homeButtonElement);

    homeButtonElement.addEventListener("click", () => {
      window.location.href = "/";
    });



    // Verificar si el usuario está logueado
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        const user = await getCurrentUserInfo();

        // Mostrar botón de eliminar solo si el usuario es el propietario del producto
        if (user.id === product.user.id) {
          const removeButtonElement = buildDeleteButton();
          productDetailContainer.appendChild(removeButtonElement);

          removeButtonElement.addEventListener("click", async () => {
            const shouldRemoveProduct = confirm("¿Seguro que quieres borrar el Pokemon?");
            if (shouldRemoveProduct) {
              try {
                await removeProduct(product.id);
                window.location.href = "/";
              } catch (error) {
                alert("No se pudo eliminar el Pokemon: " + error.message);
              }
            }
          });
        }
      } catch (error) {
        console.warn("El usuario no está autenticado o hubo un problema al verificar su sesión.");
      }
    }
  } catch (error) {
    // Gestión de errores para la carga de detalles del producto
    if (error.message.includes("not found")) {
      alert("El Pokemon no existe o no se pudo cargar.");
    } else if (error.message.includes("network")) {
      alert("Hubo un problema de conexión. Por favor, inténtalo de nuevo más tarde.");
    } else {
      alert("Ocurrió un error inesperado: " + error.message);
    }

    // Redirigir a la página principal tras el error
    window.location.href = "/";
  }
}
