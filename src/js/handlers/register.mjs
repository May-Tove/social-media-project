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

/*import { register } from "../api/auth/register.mjs";

export function registerFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name;
      const email = form.email;
      const password = form.password;
      const avatar = form.avatar;
      const banner = form.banner;
      const formData = new FormData(form);
      const user = Object.fromEntries(formData.entries());
      console.log(name, email, password, avatar, banner);

      register(name, email, password, avatar, banner);
    });
  }
}*/
/*import { api_social_url } from "../api/constants.mjs";*/

// form variables

/*form.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name;
  const email = form.email;
  const password = form.password;
  const avatar = form.avatar;
  const banner = form.banner;
  const responseContainer = document.querySelector(".signup-response");

  async function signupUser(url, userData) {
    console.log(url, userData);
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      if (!response.ok) {
        responseContainer.innerHTML = `<p>User already exists</p>`;
      } else {
        window.location = "../../../profile/login/index.html";
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  // values from form creates new user
  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value,
    banner: banner.value,
  };

  const signupUrl = `${api_social_url}/auth/register`;

  signupUser(signupUrl, newUser);
});*/
