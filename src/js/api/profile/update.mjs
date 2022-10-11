import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/profiles";
const method = "put";

/**
 * Updating profile media details using PUT method
 * @param {object} profileData
 * @returns Updated value to existing profile
 * @example
 * ```js
 * // When form is submitted, the function will be called.
 * // Replacing the old values with the new entries from the form
 *   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // calling the function
      updateProfile(profile);
    });
 * ```
 */
export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileUrl = `${api_social_url}${endpoint}/${profileData.name}/media`;

  const response = await fetchWithAuth(updateProfileUrl, {
    method,
    body: JSON.stringify(profileData),
  });

  if (response.ok) {
    location.reload();
  }

  return await response.json();
}
