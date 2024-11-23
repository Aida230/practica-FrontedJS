import { isUserLoggedIn } from "../utils/auth.js";
import { buildAuthorizedSession, buildUnauthorizedSession } from "./session-views.js";

export function sessionController(sessionContainer) {

  if (isUserLoggedIn()) {
    sessionContainer.innerHTML = buildAuthorizedSession();
    const closeSessionButton = sessionContainer.querySelector("button")
    closeSessionButton.addEventListener("click", () => {
      localStorage.removeItem("jwt")
      sessionController(sessionContainer)
    })
  } else {
    sessionContainer.innerHTML = buildUnauthorizedSession()
  }
}