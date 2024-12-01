import { REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";
import { spinner } from "../utils/spinner.js";

export function signupController(form) {

  // 1- obtener los datos del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = form.querySelector("#user-email");
    const passwordElement = form.querySelector("#password");
    const passwordConfirmElement = form.querySelector("#password-confirm");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    const passwordConfirm = passwordConfirmElement.value;
    
    const errors = [];

    // 2- validarlos
    const emailRegExp = new RegExp(REGEXP.email);
    if (!emailRegExp.test(userEmail)) {
      errors.push('formato de mail incorrecto')
    }

    if (password !== passwordConfirm) {
      errors.push('las passwords no sin iguales')
    }

    for (const error of errors) {
      alert(errors)
    }

    if (errors.length === 0) {
      handleCreateUser(userEmail, password)
    }
  })

}

async function handleCreateUser(userEmail, password) {
  // 3- consumir sparrest para crear el usuario
  try {
    spinner('hidden')
    await createUser(userEmail, password)
    window.location.href = "/";
  } catch (error) {
    alert(error.message)
  } finally {
    spinner('hidden')
  }
}
