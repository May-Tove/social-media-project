import { get } from "../../storage/index.mjs";
import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/profiles";

/**
 *
 * @param {String} name
 * @returns
 */
export async function getProfile(name = get("user").name) {
  if (!name) {
    throw new Error("Get requires a name");
  }
  const getProfileUrl = `${api_social_url}${endpoint}/${name}`;

  const response = await fetchWithAuth(getProfileUrl);

  return await response.json();
}
