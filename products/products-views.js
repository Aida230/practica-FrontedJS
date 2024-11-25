//html que vamos a mostrar
export const buildProduct = (product) => {
  // Crear el enlace que llevará al detalle del producto
  const productLink = document.createElement('a');
  productLink.setAttribute("href",`/product-detail.html?id=${product.id}`);  // URL con el ID del producto

  // Crear el contenedor del producto (este será solo un enlace ahora)
  const newProduct = document.createElement('div');
  newProduct.classList.add('product-card');

  // Estructurar el HTML del producto de manera más organizada
  newProduct.innerHTML = `
    <div class="product-info">
      <span>usuario: ${product.user.username}</span>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <span class="product-price">$${product.price}</span>
      <span class="product-type">${product.type}</span>
      <img class="product-image" src="${product.image}" alt="${product.name}"/> 
    </div>
  `;

  // Añadir el contenedor del producto dentro del enlace
  productLink.appendChild(newProduct);

  // Devuelve el enlace que contiene el producto
  return productLink;
};


export function buildEmptyProductList() {
  return '<h2>No hay productos disponibles</h2>';
}