import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";
const method = "post";

/**
 *
 * @param {*} postData
 * @returns
 */
export async function createComment(postData) {
  const createCommentUrl = `${api_social_url}${endpoint}/${id}/comment`;

  const response = await fetchWithAuth(createCommentUrl, {
    method,
    body: JSON.stringify(postData),
  });

  const form = document.querySelector("#comment-form");
  if (response.ok) {
    location.reload();
    form.reset();
  }

  return await response.json();
}
