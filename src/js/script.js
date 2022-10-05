import * as listeners from "../js/handlers/index.mjs";
import * as postMethods from "../js/api/posts/index.mjs";
/*import { displayPosts } from "../../src/js/templates/post.mjs";*/
import { handleSearch } from "../js/handlers/search.mjs";
import * as storage from "../js/storage/index.mjs";
import { renderPostsHtml } from "./api/posts/renderPosts.mjs";
import { renderPostHtml } from "./api/posts/renderPost.mjs";

listeners.loginFormListener();
listeners.registerFormListener();
listeners.createPostFormListener();
/*listeners.updatePostListener();*/
listeners.updateProfileListener();

/*postMethods.getPost(931).then(console.log);*/

renderPostsHtml();
renderPostHtml();

/*export let posts = [];

/*const mediaBtn = document.querySelector("#mediaBtn");

mediaBtn.addEventListener("click", () => {
  const mediaInput = document.querySelector("#media-input");
  if (mediaInput.classList.contains("d-none")) {
    mediaInput.classList.remove("d-none");
  } else if (!mediaInput.classList.contains("d-none")) {
    mediaInput.classList.add("d-none");
  }
});

const tagBtn = document.querySelector("#tagBtn");

tagBtn.addEventListener("click", () => {
  const tagInput = document.querySelector("#tag-input");
  if (tagInput.classList.contains("d-none")) {
    tagInput.classList.remove("d-none");
  } else if (!tagInput.classList.contains("d-none")) {
    tagInput.classList.add("d-none");
  }
});

const userName = get("user").name;
const profilePicture = get("user").avatar;
console.log(userName);

const userNameContainer = document.querySelector(".username-container");

let avatar = "";
if (profilePicture === "") {
  avatar = "../../../images/avatar-placeholder.jpg";
} else {
  avatar = profilePicture;
}

userNameContainer.innerHTML = `                  
<img
src="${avatar}"
alt="Profile picture"
class="img-thumbnail nav-img rounded-circle"
/>
${userName}`;

const avatarContainer = document.querySelector(".avatar-container");

avatarContainer.innerHTML = `<img src="${avatar}" alt="Profile picture of ${userName}" class="img-thumbnail rounded-circle me-3">`;*/

/*const largeAvatar = document.querySelector(".large-avatar-container");
largeAvatar.innerHTML = `<img src="${avatar}" alt="Profile picture of ${userName}" class="profile-img img-fluid rounded-circle position-absolute top-50 left-50">`;

const profileName = document.querySelector(".profile-name");
profileName.innerText = userName;*/
