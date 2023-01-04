import * as templates from "../../templates/profile/index.mjs";
import { noResultError } from "../../components/error.mjs";

export async function renderFollowing(profile) {
  const following = profile.following;
  const output = following.map(templates.following);

  const followingContainer = document.querySelector("#nav-following");
  const followingCount = document.querySelector("#followingCount");

  if (followingContainer) {
    followingCount.innerHTML = `(${profile._count.following})`;

    if (profile._count.following === 0) {
      followingContainer.innerHTML = noResultError("Not following anyone yet");
    } else {
      followingContainer.innerHTML = output.join("");
    }
  }
}
