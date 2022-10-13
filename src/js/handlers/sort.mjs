import * as postMethods from "../api/posts/index.mjs";
import * as template from "../templates/index.mjs";

const sortSelector = document.querySelector("#sort-posts");
let sortedPosts = [];

/**
 *
 * @param {*} e
 */
export async function sortPosts(e) {
  const sortSelected = e.target.value;

  const posts = await postMethods.getPosts();

  if (sortSelected === "newest") {
    sortedPosts = posts;
  } else if (sortSelected === "reactions") {
    sortedPosts = posts.sort((a, b) => {
      return b._count.reactions - a._count.reactions;
    });
  } else if (sortSelected === "comments") {
    sortedPosts = posts.sort((a, b) => {
      return b._count.comments - a._count.comments;
    });
  } else if (sortSelected === "oldest") {
    sortedPosts = posts.sort((a, b) => {
      return new Date(a.created) - new Date(b.created);
    });
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
