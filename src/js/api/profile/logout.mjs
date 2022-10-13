import * as storage from "../../storage/index.mjs";

const logOutBtn = document.querySelector("#logoutBtn");

// log out user
export function logOut() {
  storage.remove("accessToken");
  storage.remove("user");
}

if (logOutBtn) {
  logOutBtn.addEventListener("click", logOut);
}
