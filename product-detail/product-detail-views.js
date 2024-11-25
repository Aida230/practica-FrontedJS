export function buildProductDetail(product) {
  return `
    <div class="product-detail">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h1 class="product-name">${product.name}</h1>
      <p class="product-description">${product.description}</p>
      <p class="product-price">Precio: $${product.price}</p>
      <p class="product-type">Tipo: ${product.type}</p>
    </div>
  `;
}

export function buildDeleteButton() {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Eliminar Producto";
  removeButton.className = "delete-product-button";
  return removeButton;
}
