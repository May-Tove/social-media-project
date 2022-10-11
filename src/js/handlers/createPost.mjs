import { createPost } from "../api/posts/index.mjs";

/**
 * New post gets created when submitting the form
 * @param {event} submit
 * @returns A new post to the API
 * @example
 * ```js
 * // When form is submitted, the function for creating a post will be called
 * // Entries from the form will be created as a new post to the API
 *     form.addEventListener("submit", (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        createPost(post);
    });
 * ```
 */
export function createPostFormListener() {
  const form = document.querySelector("#createForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);
    });
  }
}
