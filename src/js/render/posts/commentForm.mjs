import { createComment } from "../../templates/posts/index.mjs";
import { commentListener } from "../../handlers/index.mjs";

export function displayCommentForm() {
  const createCommentForm = document.querySelector("#createCommentForm");

  if (createCommentForm) {
    createCommentForm.innerHTML = createComment();
    commentListener();
  }
}
