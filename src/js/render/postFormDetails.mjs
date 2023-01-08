import { getProfile } from "../api/profile/getProfile.mjs";

/**
 * Displaying avatar of the logged in user in the "create post" form
 */
export async function renderFormAvatar() {
  const profile = await getProfile();
  const userName = profile.name;
  const profilePicture = profile.avatar;

  const avatarContainer = document.querySelector(".avatar-container");

  if (avatarContainer) {
    let avatar = "";
    if (profilePicture === "") {
      avatar = "/images/avatar-placeholder.jpg";
    } else {
      avatar = profilePicture;
    }

    avatarContainer.innerHTML = `<img src="${avatar}" alt="${userName}" class="img-thumbnail rounded-circle me-3">`;
  }
}
