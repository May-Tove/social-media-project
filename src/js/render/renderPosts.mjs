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
    feedContainer.innerHTML = output.join("");
  }

  // if post contain no image, hide img tag from html template
  const media = document.querySelectorAll(".media");
  if (media) {
    console.log(media);
    media.forEach((img) => {
      console.log(img.src);
      if (img.src === " ") {
        media.style.display = "none";
      }
    });
  }
}
