import { api_social_url } from "../constants.mjs";
import { authError } from "../../components/error.js";
import * as storage from "../../storage/index.mjs";

const endpoint = "/auth/login";
const method = "post";
const responseContainer = document.querySelector(".response-container");

export async function login(profile) {
  const loginUrl = api_social_url + endpoint;
  const body = JSON.stringify(profile);
  try {
    const response = await fetch(loginUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    //Getting token and all profile details
    const { accessToken, ...user } = await response.json();

    //Storing them in localStorage
    storage.store("token", accessToken);
    storage.store("user", user);

    //Show error message if login failed or be redirected to homepage if login succeed
    if (!response.ok) {
      responseContainer.classList.remove("d-none");
      responseContainer.innerHTML = authError("Invalid email or password");
    } else {
      window.location = "../../../../posts/feed/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}
