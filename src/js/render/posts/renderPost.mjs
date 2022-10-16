import * as postMethods from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import { displayCommentForm } from "./commentForm.mjs";
import { displayPostOptions } from "./postOptions.mjs";
import { noResultError } from "../../components/error.mjs";

/**
 * Displaying a single post details on the page using API call
 */
export async function renderPostHtml() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (id) {
    const result = await postMethods.getPost(id);

    const postContainer = document.querySelector("#post-container");
    if (postContainer) {
      postContainer.innerHTML = templates.postTemplate(result);
    }

    // buttons to edit or delete post if the post belongs to the logged in user
    displayPostOptions(result.author.name);

    // displaying comments if there is any
    const commentSection = document.querySelector(".comment-section");
    const commentHeading = document.querySelector("#commentHeading");
    const comments = result.comments;
    const output = comments.map(templates.commentTemplate);

    if (commentSection) {
      if (comments.length === 0) {
        commentSection.innerHTML = noResultError("No comments yet :(");
      } else {
        commentHeading.classList.remove("d-none");
        commentSection.innerHTML = output.join("");
      }
    }
  }

  // displaying comment form regardless if there already are comments or not
  displayCommentForm();
}
