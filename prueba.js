export async function productDetailController(productDetailContainer, productId) {

  try {
    const product = await getProduct(productId)

    productDetailContainer.innerHTML = buildProductDetail(product)
    
    
    
    const user = await getCurrentUserInfo();
    

    if (user.id === product.user.id) {
      const removeButtonElement = buildDeleteButton();
      productDetailContainer.appendChild(removeButtonElement);
      removeButtonElement.addEventListener("click", async () => {
        const shouldRemoveProduct = confirm('¿Seguro que quieres borrar el producto?');
        if (shouldRemoveProduct) {
          // gestión del error
          await removeProduct(product.id);//GESTIONAR LOS ERRORES
          window.location.href = "/"
        }
      })
    }
  } catch (error) {
    alert(error.message)
    window.location.href = "/"
  }
  
}