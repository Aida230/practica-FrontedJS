import { createProduct } from "./create-product-model.js";
import { spinner } from "../utils/spinner.js";

export function createProductController(createProductForm) {
  createProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();


    // Obtener los datos del formulario
    const name = createProductForm.querySelector("#name").value;
    const description = createProductForm.querySelector("#description").value;
    const price = parseFloat(createProductForm.querySelector("#price").value);
    const type = createProductForm.querySelector("#type").value;
    const image = createProductForm.querySelector("#image").value;

    // Validar que los datos sean correctos ARREGLAR LA VALIDACION DE LOS CAMPOS
    if (!name || !description || !price || !type) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // 2. Crear el producto
    try {
      spinner('hidden')
      const product = await handleProductCreation({ name, description, price, type, image });
      alert("¡Pokemon creado con éxito!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } catch (error) {
      alert("Error al crear el Pokemon: " + error.message);
    } finally {
      spinner('hidden')
    }
  });


  // 3. Función para manejar la creación del producto
  async function handleProductCreation(productData) {
    // Llamar a la función createProduct para crear el producto en el backend
    try {
      const product = await createProduct(
        productData.name,
        productData.description,
        productData.price,
        productData.type,
        productData.image
      );
      return product; // Devuelve el producto creado
    } catch (error) {
      throw new Error("Error creando el Pokemon en el servidor");
    }
  }
}


