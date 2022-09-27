import { api_base_url } from "../components/api.js";

// form variables

const signupForm = document.querySelector("#signup-form");

/**
 * API call that signup new users
 * @param {string} url
 * @param {any} userData
 * ```js
 * signupUser(signupUrl, newUser);
 * ```
 */
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector("#signup-name").value;
  const emailInput = document.querySelector("#signup-email").value;
  const passwordInput = document.querySelector("#signup-password").value;
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
        window.location = "profile.html";
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  // values from form creates new user
  const newUser = {
    name: nameInput,
    email: emailInput,
    password: passwordInput,
  };

  const signupUrl = `${api_base_url}/api/v1/social/auth/register`;

  signupUser(signupUrl, newUser);
});
