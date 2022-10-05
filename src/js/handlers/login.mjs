import { login } from "../api/auth/login.mjs";

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
/*import { login } from "../api/auth/login.mjs";

export function loginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;

      const formData = new FormData(form);
      const user = Object.fromEntries(formData.entries());
      console.log("does it work");

      login(user);
    });
  }
}*/

/*import { api_social_url } from "../api/constants.mjs";

const loginUrl = `${api_social_url}/auth/login`;

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email;
  const password = form.password;
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
      console.log(json);

      // Show error message if login failed or go to home page if login success
      if (!response.ok) {
        responseContainer.classList.remove("d-none");
        responseContainer.innerHTML = "<p>Invalid email or password</p>";
      } else {
        window.location = "../../../index.html";
      }

      // Storing JWT token from login in local storage
      const accessToken = json.accessToken;
      const userName = json.name;
      const profilePicture = json.avatar;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", userName);
      localStorage.setItem("profilePicture", profilePicture);
    } catch (error) {
      console.log(error);
    }
  }

  const userLogin = {
    email: email.value,
    password: password.value,
  };

  loginUser(loginUrl, userLogin);
});*/
