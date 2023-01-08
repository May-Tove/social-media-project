import { get } from "../../storage/index.mjs";
import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/profiles";

/**
 * Getting profile details from API
 * @param {string} name
 * @returns profile details
 * @example
 * ```js
 * async function renderProfile() {
 * const profileContainer = document.querySelector("#profileDetailContainer");
 * const profile = await getProfile();
 *
 * profileContainer.innerHTML = templates.profileTemplate(profile);
 * }
 * ```
 */
export async function getProfile(name = get("user").name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileUrl = `${api_social_url}${endpoint}/${name}?_posts=true&_following=true&_followers=true`;

  const response = await fetchWithAuth(getProfileUrl);

  return await response.json();
}
