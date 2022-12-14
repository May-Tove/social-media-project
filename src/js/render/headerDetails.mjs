import { getProfile } from "../api/profile/getProfile.mjs";

/**
 * Displaying avatar and username of the logged in user in the header link
 */
export async function getUserHeaderDetails() {
  const profile = await getProfile();
  const userName = profile.name;

  const userNameContainer = document.querySelector(".username-container");

  if (userNameContainer) {
    let avatar = "";
    if (profile.avatar === "") {
      avatar = "../../../images/avatar-placeholder.jpg";
    } else {
      avatar = profile.avatar;
    }

    userNameContainer.innerHTML = `                  
      <img
      src="${avatar}"
      alt="Profile picture"
      class="img-thumbnail nav-img rounded-circle"
      />
      ${userName}`;
  }
}
