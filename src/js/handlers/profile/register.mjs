import { register } from "../../api/auth/register.mjs";

/**
 * Event listener that register new users on submit
 */
export function registerFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const user = Object.fromEntries(formData.entries());

      register(user);
    });
  }
}
