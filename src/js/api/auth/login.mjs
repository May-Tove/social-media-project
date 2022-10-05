import { api_social_url } from "../constants.mjs";
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

    const { accessToken, ...user } = await response.json();

    storage.store("token", accessToken);
    storage.store("user", user);

    if (!response.ok) {
      responseContainer.classList.remove("d-none");
      responseContainer.innerHTML =
        "<p class='auth-error'>Invalid email or password</p>";
    } else {
      window.location = "../../../../posts/feed/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}
