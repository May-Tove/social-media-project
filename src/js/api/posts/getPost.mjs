import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostUrl = `${api_social_url}${endpoint}/${id}?_author=true&_comments=true&reactions=true`;

  const response = await fetchWithAuth(getPostUrl);
  return await response.json();
}
