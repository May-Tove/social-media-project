import { api_base_url } from "./components/api.js";

const loginUrl = `${api_base_url}/api/v1/social/auth/login`;

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Login variables
  const loginEmail = document.querySelector("#login-email").value;
  const loginPassword = document.querySelector("#login-password").value;
  const responseContainer = document.querySelector(".login-response");

  async function loginUser(url, userData) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const response = await fetch(url, postData);
      const json = await response.json();

      // Show error message if login failed or go to home page if login success
      if (!response.ok) {
        responseContainer.classList.remove("d-none");
        responseContainer.innerHTML = "<p>Invalid email or password</p>";
      } else {
        window.location = "index.html";
      }

      // Storing JWT token from login in local storage
      const accessToken = json.accessToken;
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      console.log(error);
    }
  }

  const userLogin = {
    email: loginEmail,
    password: loginPassword,
  };

  loginUser(loginUrl, userLogin);
});
