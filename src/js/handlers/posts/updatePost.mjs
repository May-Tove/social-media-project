import { getPost, updatePost } from "../../api/posts/index.mjs";

/**
 * Event listener to update a post on form submit
 * @param {event} submit
 * @returns Updated value to existing post
 * @example
 * ```js
 * // When form is submitted, the function will be called.
 * // Replacing the old values with the new entries from the form
 *      form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      updatePost(post);
    });
 * ```
 */
export async function updatePostListener() {
  const form = document.querySelector("#editForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);
    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      updatePost(post);
    });
  }
}
