import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";
const method = "put";

/**
 * Reacting to a post
 */
export async function reaction(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const reactionUrl = `${api_social_url}${endpoint}/${postData.id}/👍`;

  const response = await fetchWithAuth(reactionUrl, {
    method,
  });

  console.log(response);

  if (response.ok) {
    location.reload();
  }

  return await response.json();
}
