import * as postMethods from "../api/posts/index.mjs";
import { postTemplate } from "../templates/post.mjs";
import { get } from "../storage/index.mjs";

export async function renderPostsHtml() {
  const posts = await postMethods.getPosts();
  const output = posts.map(postTemplate);
  const feedContainer = document.querySelector("#feed-container");

  if (feedContainer) {
    feedContainer.innerHTML = "";
    feedContainer.innerHTML = output.join("");
    console.log(posts);
  }

  /*const editBtn = document.querySelector("#editPostBtn");
  const deleteBtn = document.querySelector("#deletePostBtn");
  const dropdown = document.querySelector("#dropdownContainer");
  const loggedInUser = get("user").name;
  posts.forEach((post) => {
    const author = post.author.name;
    if (loggedInUser === author) {
      dropdown.innerHTML += `<div class="dropdown">
      <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownBtn">
      <i class="fa-solid fa-ellipsis"></i>
      </button>
      <ul class="dropdown-menu">
          <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#editPostModal"><i class="fa-regular fa-pen-to-square"></i> Edit</button></li>
          <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-regular fa-trash-can"></i> Delete</button></li>
      </ul>
      </div>`;
    }
    console.log(post.author.name);
  });*/
}
