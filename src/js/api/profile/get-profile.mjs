import { get } from "../../storage/index.mjs";
import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/profiles";

/*export async function getProfiles() {
  const getProfilesUrl = `${api_social_url}${endpoint}`;

  const response = await fetchWithAuth(getProfilesUrl);

  return await response.json();
}*/

export async function getProfile(name = get("profile").name) {
  if (!name) {
    throw new Error("Get requires a name");
  }
  const getProfileUrl = `${api_social_url}${endpoint}/${name}`;

  const response = await fetchWithAuth(getProfileUrl);
  console.log(response);

  const profile = await response.json();
  console.log(profile);
}
