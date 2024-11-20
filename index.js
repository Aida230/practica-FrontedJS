//el tercer paso es que mi orquestador ponga a funcionar el controllador
import { notificationController } from "./notification/notification-controller.js";
import { productsController } from "./products/products-controller.js";

document.addEventListener("DOMContentLoaded", () => {//esta funcion siempre es necesaria en el orquestador para esperar a que cargue todo el html y luego ya empieza a funcionar los controladores
  const productsContainer = document.querySelector("#products-container");
  const notificationContainer = document.querySelector("#notification-container");

  productsController(productsContainer)
  const { showNotification } = notificationController(notificationContainer)

  productsContainer.addEventListener("loading-products-info", (event) => {
    showNotification(event.detail.message, event.detail.type);
  })//lo que hay entre parentesis es el nodo del que se va a encargar de gestionar
})
