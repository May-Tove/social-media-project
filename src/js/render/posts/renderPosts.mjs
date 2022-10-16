import * as postMethods from "../../api/posts/index.mjs";
import { postTemplate } from "../../templates/posts/post.mjs";
import { noResultError } from "../../components/error.mjs";

/**
 * Displaying all posts on the page using API call
 */
export async function renderPostsHtml() {
  const posts = await postMethods.getPosts();
  const output = posts.map(postTemplate);
  const feedContainer = document.querySelector("#feed-container");

  if (feedContainer) {
    if (output.length === 0) {
      feedContainer.innerHTML = noResultError("No posts yet");
    } else {
      feedContainer.innerHTML = output.join("");
    }
  }
}
