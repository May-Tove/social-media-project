import { updateProfile } from "../../api/profile/index.mjs";
import { get } from "../../storage/index.mjs";

/**
 * Event listener to update profile media details on form submit
 */
export async function updateProfileListener(profile) {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = get("user");
    form.name.value = name;
    form.email.value = email;

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      updateProfile(profile);
    });
  }
}
