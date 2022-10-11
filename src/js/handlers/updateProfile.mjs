import { getProfile, updateProfile } from "../api/profile/index.mjs";
import { get } from "../storage/index.mjs";

/**
 * Event listener to update profile media details on form submit
 * @param {event} submit
 * @returns Updated value to existing post
 * @example
 * ```js
 * // When form is submitted, the function will be called.
 * // Replacing the old values with the new entries from the form
 *   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      updateProfile(profile);
    });
 * ```
 */
export async function updateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = get("user");
    form.name.value = name;
    form.email.value = email;

    const profile = await getProfile(name);

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
