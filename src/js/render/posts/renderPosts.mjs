import * as postMethods from "../../api/posts/index.mjs";
import { postTemplate } from "../../templates/posts/post.mjs";

/**
 * Displaying all posts on the page using API call
 */
export async function renderPostsHtml() {
  const posts = await postMethods.getPosts();
  const output = posts.map(postTemplate);
  const feedContainer = document.querySelector("#feed-container");

  if (feedContainer) {
    feedContainer.innerHTML = output.join("");
  }

  // if post contain no image, hide img tag from html template
  // Does not work?? can not figure out why, tried many things
  const media = document.querySelector(".media");
  posts.forEach((post) => {
    if (!post.media === "") {
      media.style.display += "none";
    }
  });
}
