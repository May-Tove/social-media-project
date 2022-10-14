import { createPost } from "../../api/posts/index.mjs";

/**
 * Event listener that creates a new form when submitting form
 */
export function createPostFormListener() {
  const form = document.querySelector("#createForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      if (!post.media) {
        delete post.media;
      }

      createPost(post);
    });
  }
}
