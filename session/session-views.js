export function buildAuthorizedSession() {
  return `
    <a href="/create-product.html">Crear Producto</a>
    <button>cerrar sesión</button>
  `
}

export function buildUnauthorizedSession() {
  return `
    <a href="/login.html"><button>Login</button></a>
    <a href="/signup.html"><button>Register</button></a>
  `
}