import { getProfile } from "../../api/profile/getProfile.mjs";
import * as templates from "../../templates/profile.mjs";

/**
 * Displaying the profile details on the page using API call
 */
export async function renderProfile() {
  const profileContainer = document.querySelector("#profileDetailContainer");
  const profile = await getProfile();

  if (profileContainer) {
    profileContainer.innerHTML = templates.profileTemplate(profile);
  }
}
