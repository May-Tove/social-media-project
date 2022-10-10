import { getProfile } from "../api/profile/getProfile.mjs";
import * as templates from "../templates/profile.mjs";

/**
 *
 */
export async function renderProfile() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");
  const profileContainer = document.querySelector("#profileDetailContainer");
  const profile = await getProfile();

  if (profileContainer) {
    profileContainer.innerHTML = "";
    profileContainer.innerHTML = templates.profileTemplate(profile);
  }
}
