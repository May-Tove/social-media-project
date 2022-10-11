import { createComment } from "../api/posts/index.mjs";

/**
 * Creating comments on a post
 */
export function createCommentFormListener() {
  const form = document.querySelector("#comment-form");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const comment = Object.fromEntries(formData.entries());
      comment.id = id;

      createComment(id);
    });
  }
}
