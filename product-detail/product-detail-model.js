export async function getProduct(productId) {
  try {
    const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`);
    const product = await response.json();
    
    if (!response.ok) {
      throw new Error("Recurso no existente");
    }

    return product;

  } catch (error) {
    throw new Error(error.message)
  }
}

export async function removeProduct(productId) {
  const token = localStorage.getItem('jwt');

  try {
    const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error("Recurso no existente");
    }
  } catch (error) {
    throw new Error(error.message)
  }
}