import { api_social_url } from "../constants.mjs";

const endpoint = "/auth/register";
const method = "post";
const responseContainer = document.querySelector(".response-container");

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

  if (!response.ok) {
    responseContainer.classList.remove("d-none");
    responseContainer.innerHTML = "<p>User already exists</p>";
  } else {
    window.location = "../../../../profile/login/index.html";
  }

  const results = await response.json();
  return results;
}
