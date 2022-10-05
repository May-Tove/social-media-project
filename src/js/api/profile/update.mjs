import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileUrl = `${api_social_url}${endpoint}/${profileData.name}/media`;

  const response = await fetchWithAuth(updateProfileUrl, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
