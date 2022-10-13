import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint =
  "/posts?_author=true&_comments=true&reactions=true&limit=700&offset=0";

/**
 * Get all posts from API using GET method
 * @param {string} url
 * @returns All posts from API
 * @example
 * ```js
 * const posts = await getPosts();
 * ```
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
