import { login } from "../../api/auth/login.mjs";

/**
 * This will log in a registered user when clicking the log in button
 *
 */
export function loginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const user = Object.fromEntries(formData.entries());

      login(user);
    });
  }
}
