import { api_social_url } from "../constants.mjs";
import { authError } from "../../components/error.mjs";
import * as storage from "../../storage/index.mjs";

const endpoint = "/auth/login";
const method = "post";
const responseContainer = document.querySelector(".response-container");

/**
 * This will log in a registered user and store profile information in localStorage
 * @param {object} profile -  the values from the log in form will create this object when logging in
 */
export async function login(profile) {
  const loginUrl = api_social_url + endpoint;
  const body = JSON.stringify(profile);

  const response = await fetch(loginUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  //Storing token and profile details in localStorage
  storage.store("token", accessToken);
  storage.store("user", user);

  //Show error message if login failed or be redirected to homepage if login succeed
  if (!response.ok) {
    responseContainer.classList.remove("d-none");
    responseContainer.innerHTML = authError("Invalid email or password");
  } else {
    location.href = "/src/pages/posts/feed/index.html";
  }
}
