//html que vamos a mostrar

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

export function buildEmptyProductList() {
  return '<h2>No hay productos disponibles</h2>';
}