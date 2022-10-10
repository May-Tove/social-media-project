import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const deletePostUrl = `${api_social_url}${endpoint}/${id}`;

  const response = await fetchWithAuth(deletePostUrl, {
    method,
  });
  console.log(response);

  if (response.ok) {
    window.alert("Post deleted");
    location.replace(document.referrer);
  }

  return await response.json();
}
