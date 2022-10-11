import * as postMethods from "../api/posts/index.mjs";
import { postTemplate } from "../templates/post.mjs";

/**
 * Displaying all posts on the page using API call
 */
export async function renderPostsHtml() {
  const posts = await postMethods.getPosts();
  const output = posts.map(postTemplate);
  const feedContainer = document.querySelector("#feed-container");

  if (feedContainer) {
    feedContainer.innerHTML = "";
    feedContainer.innerHTML = output.join("");
    console.log(posts);
  }
}
