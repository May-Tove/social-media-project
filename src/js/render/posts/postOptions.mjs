import { get } from "../../storage/index.mjs";
import { postOptions } from "../../templates/index.mjs";

export function displayPostOptions(author) {
  const dropdown = document.querySelector("#dropdownContainer");

  if (dropdown) {
    dropdown.innerHTML = "";
    const loggedInUser = get("user").name;

    if (loggedInUser === author) {
      dropdown.innerHTML = postOptions();
    }
  }
}
