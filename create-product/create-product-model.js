// primero vamos a crear la funcion que nos dará los productos con sus parametros correspondientes

export async function createProduct(name, description, price, type, image) {
  const token = localStorage.getItem('jwt');

  const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      price,
      type,
      image
    }), // Convertir los datos del producto en JSON
    headers: {
      "Content-type": "application/json", // Especificar el tipo de contenido
      "Authorization": `Bearer ${token}` // Token de autorización
    }
  })
  
  if (!response.ok) {
    throw new Error("Error creando producto");
  }

  const product = await response.json()
  return product;
}