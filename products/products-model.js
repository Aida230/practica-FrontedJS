//modelo- obtencion de datos que necesitará nuestra aplicacion

//los productos/anuncios tienen que vnir desde el API SPARREST

export function getProducts() {
  const response = fetch("http://localhost:8000/api/products");
  const products = response.json();
  return products
}