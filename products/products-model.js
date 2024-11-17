//modelo- obtencion de datos que necesitará nuestra aplicacion

//los productos/anuncios tienen que vnir desde el API SPARREST

export async function getProducts() {
  try {
    const response = await fetch("http://localhost:8000/api/products");
    const products = await response.json();
    
    if (!response.ok) {
      throw new Error("Recurso no existente");
    }

    return products;

  } catch (error) {
    throw new Error(error.message)
  }
}