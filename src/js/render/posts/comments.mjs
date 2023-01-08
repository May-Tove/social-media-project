import { commentTemplate } from "../../templates/posts/commentSection.mjs";
import { noResultError } from "../../components/error.mjs";

export async function renderComments(post) {
  const comments = post.comments;
  const output = comments.map(commentTemplate);

  // displaying comments if there is any
  const commentSection = document.querySelector(".comment-section");
  const commentHeading = document.querySelector("#commentHeading");

  if (commentSection) {
    if (comments.length === 0) {
      commentSection.innerHTML = noResultError("No comments yet :(");
    } else {
      commentHeading.classList.remove("d-none");
      commentSection.innerHTML = output.join("");
    }
  }
}
