import { getProfile } from "../../api/profile/getProfile.mjs";
import * as templates from "../../templates/profile/index.mjs";
import { noResultError } from "../../components/error.mjs";

export async function renderFollowers() {
  const profile = await getProfile();

  const followers = profile.followers;
  const output = followers.map(templates.followers);

  const followerContainer = document.querySelector("#nav-followers");
  const followerCount = document.querySelector("#followerCount");

  if (followerContainer) {
    followerCount.innerHTML = `(${profile._count.followers})`;

    if (profile._count.followers === 0) {
      followerContainer.innerHTML = noResultError("No followers");
    } else {
      followerContainer.innerHTML = output.join("");
    }
  }
}
