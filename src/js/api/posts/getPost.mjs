import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts";

/**
 * API call that gets one specific post by id
 * @param {number} id
 * @param {string} url
 * @returns Specific post
 * @example
 * ```js
 * // get id from url
 *  const url = new URL(location.href);
    const id = url.searchParams.get("id");

    // calling the function to get the post
    const result = await getPost(id);
 * ```
 */
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostUrl = `${api_social_url}${endpoint}/${id}?_author=true&_comments=true&reactions=true`;

  const response = await fetchWithAuth(getPostUrl);
  return await response.json();
}
