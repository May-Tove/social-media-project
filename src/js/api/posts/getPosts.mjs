import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts?_author=true&_comments=true&reactions=true&limit=200";

/**
 * Get all posts from API using GET method(default)
 */
export async function getPosts() {
  const getPostsUrl = `${api_social_url}${endpoint}`;
  const response = await fetchWithAuth(getPostsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }
}
