import { createComment } from "../../api/posts/index.mjs";

/**
 * NOT WORKING - Creating comments on a post
 */
export async function createCommentFormListener() {
  const form = document.querySelector("#comment-form");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const comment = Object.fromEntries(formData.entries());

      createComment(comment);
    });
  }
}
