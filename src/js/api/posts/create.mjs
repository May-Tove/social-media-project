import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts?_author=true&_comments=true&reactions=true";
const method = "post";

/**
 * Creating a post using POST method
 * @param {object} postData - values from form input creates this object
 * @returns A new post to the API
 */
export async function createPost(postData) {
  const createPostUrl = api_social_url + endpoint;

  const response = await fetchWithAuth(createPostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  // if response is OK, reload the page and reset the form
  const form = document.querySelector("#createForm");
  if (response.ok) {
    location.reload();
    form.reset();
  }

  return await response.json();
}
