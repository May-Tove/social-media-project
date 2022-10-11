import { getPost, removePost } from "../api/posts/index.mjs";

/**
 * Event listener to delete a post on button click
 * @param {event} click
 * @example 
 * ```js
 * // When clicking on delete button, call function that deletes post by id
 *   deleteBtn.addEventListener("click", () => {
      removePost(id);
    });
 * ```
 */
export async function removePostListener() {
  const deleteBtn = document.querySelector("#deleteBtn");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (deleteBtn) {
    const post = await getPost(id);
    post.id = id;

    deleteBtn.addEventListener("click", () => {
      removePost(id);
    });
  }
}
