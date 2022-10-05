export * from "./get-profile.mjs";
export * from "./update.mjs";
/*import * as listeners from "../js/handlers/index.mjs";
import * as postMethods from "../js/api/posts/index.mjs";
import { displayPosts } from "../../src/js/templates/post.mjs";
import { handleSearch } from "../js/handlers/search.mjs";
import { get } from "../js/storage/index.mjs";
import { posts } from "../../script.js";

const profileName = document.querySelector(".profile-name");
const profileAvatar = document.querySelector(".large-avatar-container");

export function displayProfile() {
  const name = get("user".name);
  const avatar = get("user".avatar);

  profileName.innerText = name;
  profileAvatar.innerHTML = `<img src="${avatar}" alt="Profile picture of ${name}" class="profile-img img-fluid rounded-circle position-absolute top-50 left-50">`;
}

displayProfile();

let posts = [];
async function test() {
  posts = await postMethods.getPosts();
  const name = get("user".name);

  if (posts.author === name) {
    displayPosts(posts);
    console.log(posts);
  }
}
test();*/
