import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
import { noResultError } from "../components/error.js";
import { get } from "../storage/index.mjs";

/**
 * Displaying a single post details on the page using API call
 */
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

    // buttons to edit or delete post if the post belongs to the logged in user
    const dropdown = document.querySelector("#dropdownContainer");

    if (dropdown) {
      dropdown.innerHTML = "";
      const loggedInUser = get("user").name;

      if (loggedInUser === result.author.name) {
        console.log(result.author.name);
        dropdown.innerHTML = templates.postOptions();
      }
    }

    // displaying comments
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

  // displaying comment form regardless if there already are comments or not
  const createCommentForm = document.querySelector("#createCommentForm");

  if (createCommentForm) {
    createCommentForm.innerHTML = "";
    createCommentForm.innerHTML = templates.createComment();
  }
}
