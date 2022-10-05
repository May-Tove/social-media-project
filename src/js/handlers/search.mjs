import { postTemplate } from "../templates/post.mjs";
import { displayError } from "../components/error.js";
import * as postMethods from "../api/posts/index.mjs";

const searchInput = document.querySelector("#search-input");

/**
 * Search for posts by title, body and/or author name on keyup
 * @param {event} keyup
 * @example
 * ```js
 * searchInput.addEventListener("keyup", handleSearch);
 * ```
 */
export function handleSearch(event) {
  const inputValue = event.currentTarget.value.toLowerCase();
  const searchResult = post.filter(
    (post) =>
      post.title.toLowerCase().includes(inputValue) ||
      post.body.toLowerCase().includes(inputValue) ||
      post.author.name.toLowerCase().includes(inputValue)
  );

  if (searchResult.length === 0) {
    const postsContainer = document.querySelector("#feed-container");
    postsContainer.innerHTML = displayError("No results found");
  } else {
    postTemplate(searchResult);
  }
}

searchInput.addEventListener("keyup", handleSearch);
