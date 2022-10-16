import * as postMethods from "../api/posts/index.mjs";
import * as template from "../templates/posts/index.mjs";

const sortSelector = document.querySelector("#sort-posts");
let sortedPosts = [];

/**
 * Event listener that sorts posts on change
 */
export async function sortPosts(e) {
  const sortSelected = e.target.value;

  const posts = await postMethods.getPosts();

  switch (sortSelected) {
    case "newest":
      sortedPosts = posts;
      break;
    case "oldest":
      sortedPosts = posts.sort(
        (a, b) => new Date(a.created) - new Date(b.created)
      );
      break;
    case "reactions":
      sortedPosts = posts.sort(
        (a, b) => b._count.reactions - a._count.reactions
      );
      break;
    case "comments":
      sortedPosts = posts.sort((a, b) => b._count.comments - a._count.comments);
      break;
  }

  const output = sortedPosts.map(template.postTemplate);

  const postsContainer = document.querySelector("#feed-container");
  if (postsContainer) {
    postsContainer.innerHTML = output.join("");
  }
}

if (sortSelector) {
  sortSelector.addEventListener("change", sortPosts);
}
