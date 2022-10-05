import { getProfile, updateProfile } from "../api/profile/index.mjs";
import { get } from "../storage/index.mjs";

export async function updateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = get("profile");
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

      updateProfile(profile);
    });
  }
}
