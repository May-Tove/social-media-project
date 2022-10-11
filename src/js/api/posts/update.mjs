import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";
const method = "put";

/**
 * Updating a post using PUT method
 * @param {object} postData
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

      // Calling function
      updatePost(post);
    });
 * ```
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostUrl = `${api_social_url}${endpoint}/${postData.id}`;

  const response = await fetchWithAuth(updatePostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    location.reload();
  }

  return await response.json();
}
