import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm) {
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = loginForm.querySelector("#user-email");
    const passwordElement = loginForm.querySelector("#password");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    

    // 2- validar el email
    const emailRegExp = new RegExp(REGEXP.email);
    if (!emailRegExp.test(userEmail)) {
      alert('Formato de email incorrecto')
    } else {
      handleLoginUser(userEmail, password)
    }

  })
}

async function handleLoginUser(userEmail, password) {
  try {
    const token = await loginUser(userEmail, password);
  
    localStorage.setItem("jwt", token);
    window.location.href = "/"
  } catch (error) {
    alert(error.message)
  }
}
