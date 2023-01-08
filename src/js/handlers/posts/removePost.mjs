import { removePost } from "../../api/posts/index.mjs";

/**
 * Event listener to delete a post on button click
 */
export async function removePostListener(id) {
  const deleteBtn = document.querySelector("#deleteBtn");

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      removePost(id);
    });
  }
}
