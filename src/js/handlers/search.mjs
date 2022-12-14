import { postTemplate } from "../templates/posts/post.mjs";
import { noResultError } from "../components/error.mjs";
import * as postMethods from "../api/posts/index.mjs";

const searchInput = document.querySelector("#search-input");

/**
 * Search for posts by title, body and/or author name on keyup
 * @param {event} keyup - event listens for keyup
 * @example
 * ```js
 * searchInput.addEventListener("keyup", handleSearch);
 * ```
 */
export async function handleSearch(e) {
  const inputValue = e.target.value.toLowerCase();

  const posts = await postMethods.getPosts();

  const searchResult = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(inputValue) ||
      post.body.toLowerCase().includes(inputValue) ||
      post.author.name.toLowerCase().includes(inputValue)
  );
  const output = searchResult.map(postTemplate);

  const postsContainer = document.querySelector("#feed-container");
  if (searchResult.length === 0) {
    postsContainer.innerHTML = noResultError("No results found");
  } else {
    postsContainer.innerHTML = output.join("");
  }
}

if (searchInput) {
  searchInput.addEventListener("keyup", handleSearch);
}
