import { getPosts } from "../api/posts/getPosts.mjs";
import { get } from "../storage/index.mjs";
import * as templates from "../templates/post.mjs";
import { noResultError } from "../components/error.js";

/**
 * Displaying posts created of the logged in user on the page using API call
 */
export async function renderProfilePosts() {
  const postsContainer = document.querySelector("#user-post-container");

  const posts = await getPosts();
  const author = get("user").name.toLowerCase();

  const result = posts.filter((post) =>
    post.author.name.toLowerCase().includes(author)
  );

  if (postsContainer) {
    postsContainer.innerHTML = "";
    if (result.length === 0) {
      postsContainer.innerHTML = noResultError("No posts yet :(");
    } else {
      result.forEach((post) => {
        postsContainer.innerHTML += templates.postTemplate(post);
      });
    }
  }
}
