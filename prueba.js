document.getElementById('create-product-form').addEventListener('submit', async (event) => {
      event.preventDefault(); // Evitar recargar la página

      // Obtener valores del formulario
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const price = parseFloat(document.getElementById('price').value);
      const type = document.getElementById('type').value;
      const image = document.getElementById('image').value;

      try {
        // Llamar a la función createProduct
        const product = await createProduct({ name, description, price, type, image });
        alert('Producto creado con éxito: ' + JSON.stringify(product));
      } catch (error) {
        alert('Error al crear el producto: ' + error.message);
      }
    });




    export function createProductController(createProductForm) {
      // 1- escuchar al evento submit para obtener los datos de creacion de productos
      createProductForm.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const formElement = createProductForm.querySelector("#create-product-form");
        const productFeature = formElement.value; //para obtener las caracteristicas del producto, no se si funcionará EL ERROR ESTA AQUI, NO CREA EL PRODUCTO
    
        handleProductCreation(productFeature)
      })
    
      async function handleProductCreation(productFeature) {
        // 2- crear producto
        try {
          await createProduct(productFeature)
          window.location.href = "/"
        } catch (error) {
          alert(error.message)
        }
      }
    
    }

    /*
export const buildProduct = (product) => {
  // Crear el contenedor principal para el producto
  const newProduct = document.createElement('div'); //DEBO INSERTAR UN ENLACE PARA QUE PUEDA PINCHAR EN ELLA
  newProduct.classList.add('product-card');

  // Si el producto tiene una imagen, agregarla
  const image = product.image ? `<img src="${product.image}" alt="${product.name}" class="product-image"/>` : '';

  // Estructurar el HTML del producto de manera más organizada
  newProduct.innerHTML = `
    <div class="product-image-container">
      ${image}
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <span class="product-price">$${product.price}</span>
      <span class="product-type">${product.type}</span>
    </div>
  `;

  // Devuelve el contenedor del producto
  return newProduct;
};

*/






/*
esto iba dentro de product-views
export const buildProduct = (product) => {
  const newProduct = document.createElement('a')
  newProduct.innerHTML = `
    <span>${product.id}</span>
    <span>${product.name}</span>
    <span>${product.description}</span>
    <span>${product.price}</span>
    <span>${product.type}</span>
    <span>${product.image}</span>
  `;
  return newProduct;
}
*/
