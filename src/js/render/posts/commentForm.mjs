import { createComment } from "../../templates/index.mjs";

export function displayCommentForm() {
  const createCommentForm = document.querySelector("#createCommentForm");

  if (createCommentForm) {
    createCommentForm.innerHTML = createComment();
  }
}
