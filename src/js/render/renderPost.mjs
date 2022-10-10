import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
import { noResultError } from "../components/error.js";
import { get } from "../storage/index.mjs";

export async function renderPostHtml() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (id) {
    const result = await postMethods.getPost(id);
    console.log(result);

    const postContainer = document.querySelector("#post-container");
    if (postContainer) {
      postContainer.innerHTML = "";
      postContainer.innerHTML = templates.postTemplate(result);
    }

    const dropdown = document.querySelector("#dropdownContainer");

    if (dropdown) {
      dropdown.innerHTML = "";
      const loggedInUser = get("user").name;

      if (loggedInUser === result.author.name) {
        console.log(result.author.name);
        dropdown.innerHTML = `<div class="dropdown">
          <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownBtn">
          <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu">
              <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#editPostModal"><i class="fa-regular fa-pen-to-square"></i> Edit</button></li>
              <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-regular fa-trash-can"></i> Delete</button></li>
          </ul>
          </div>`;
      }
    }

    const commentSection = document.querySelector(".comment-section");
    const commentHeading = document.querySelector("#commentHeading");
    const comments = result.comments;

    if (commentSection) {
      commentSection.innerHTML = "";
      if (comments.length === 0) {
        commentSection.innerHTML = noResultError("No comments yet :(");
      } else {
        commentHeading.classList.remove("d-none");

        comments.forEach((comment) => {
          commentSection.innerHTML += templates.commentTemplate(comment);
          console.log(comment);
        });
      }
    }
  }

  const createCommentForm = document.querySelector("#createCommentForm");

  if (createCommentForm) {
    createCommentForm.innerHTML = "";
    createCommentForm.innerHTML = templates.createComment();
  }
}
