import { register } from "../api/auth/register.mjs";

/**
 * API call that signup new users
 * @param {string} url
 * @param {any} userData
 * ```js
 * signupUser(signupUrl, newUser);
 * ```
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
