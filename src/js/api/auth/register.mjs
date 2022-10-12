import { api_social_url } from "../constants.mjs";
import { authError } from "../../components/error.mjs";

const endpoint = "/auth/register";
const method = "post";
const responseContainer = document.querySelector(".response-container");

/**
 * API call that signup new users
 * @param {string} profile
 * ```js
 * signupUser(signupUrl, newUser);
 * ```
 */
export async function register(profile) {
  const registerUrl = api_social_url + endpoint;
  const body = JSON.stringify(profile);

  const response = await fetch(registerUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  //Show error message if register failed or be redirected to login if register succeed
  if (!response.ok) {
    responseContainer.classList.remove("d-none");
    responseContainer.innerHTML = authError("User already exists");
  } else {
    window.location = "../../../../profile/login/index.html";
  }

  const results = await response.json();
  return results;
}
