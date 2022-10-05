import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostUrl = `${api_social_url}${endpoint}/${postData.id}`;

  const response = await fetchWithAuth(updatePostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
