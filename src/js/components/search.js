import { getPosts } from "../feed.js";
import { displayPosts } from "./post.js";

// searching posts
const searchInput = document.querySelector("#search-input");

export function handleSearch(event) {
  const inputValue = event.currentTarget.value.toLowerCase();
  const searchResult = getPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(inputValue) ||
      post.body.toLowerCase().includes(inputValue) ||
      post.author.name.toLowerCase().includes(inputValue)
  );
  displayPosts(searchResult);
  console.log(searchResult);
}

searchInput.addEventListener("keyup", handleSearch);
