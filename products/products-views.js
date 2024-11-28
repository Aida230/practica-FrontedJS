//html que vamos a mostrar
export const buildProduct = (product) => {
  // Crear el enlace que llevará al detalle del producto
  const productLink = document.createElement('a');
  productLink.setAttribute("href",`/product-detail.html?id=${product.id}`);  // URL con el ID del producto

  // Crear el contenedor del producto (este será solo un enlace ahora)
  const newProduct = document.createElement('div');
  newProduct.classList.add('product-card');

  
  newProduct.innerHTML = `
    <div class="product-info">
    <h3 class="product-name">${product.name}</h3>
    <span>user: ${product.user.username}</span>
    <p class="product-description">${product.description}</p>
    <img class="product-image" src="${product.image}" alt="${product.name}"/> 
    <span class="product-price">$${product.price}</span>
      <span class="product-type">${product.type}</span>
    </div>
  `;

  // Añadir el contenedor del producto dentro del enlace
  productLink.appendChild(newProduct);

  // Devuelve el enlace que contiene el producto
  return productLink;
};


export function buildEmptyProductList() {
  return '<h2>No hay Pokemon disponibles</h2>';
}