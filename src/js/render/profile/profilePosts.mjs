import { getPosts } from "../../api/posts/getPosts.mjs";
import { get } from "../../storage/index.mjs";
import { postTemplate } from "../../templates/posts/post.mjs";
import { noResultError } from "../../components/error.mjs";

/**
 * Displaying posts created of the logged in user on the page using API call
 */
export async function renderProfilePosts() {
  const posts = await getPosts();
  const author = get("user").name.toLowerCase();

  const result = posts.filter((post) =>
    post.author.name.toLowerCase().includes(author)
  );

  const output = result.map(postTemplate);
  const postsContainer = document.querySelector("#user-post-container");

  if (postsContainer) {
    if (result.length === 0) {
      postsContainer.innerHTML = noResultError("No posts yet :(");
    } else {
      postsContainer.innerHTML = output.join("");
    }
  }
}
