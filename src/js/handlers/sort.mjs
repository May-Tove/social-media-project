import * as postMethods from "../api/posts/index.mjs";
import * as template from "../templates/index.mjs";

const sortSelector = document.querySelector("#sort-posts");

/**
 *
 * @param {*} e
 */
export async function sortPosts(e) {
  const sortSelected = e.target.value;

  const posts = await postMethods.getPosts();

  let sortedPosts = [];

  if (sortSelected.value === "all") {
    sortedPosts = posts;
  } else if (sortSelected.value === "reactions") {
    sortedPosts = posts.sort((a, b) => {
      return b._count.reactions - a._count.reactions;
    });
  } else if (sortSelected.value === "comments") {
    sortedPosts = posts.sort((a, b) => {
      return b._count.comments - a._count.comments;
    });
  }

  const postsContainer = document.querySelector("#feed-container");
  if (postsContainer) {
    postsContainer.innerHTML = "";

    sortedPosts.forEach((post) => {
      postsContainer.innerHTML += template.postTemplate(post);
      console.log(sortedPosts);
    });
  }
}

if (sortSelector) {
  sortSelector.addEventListener("change", sortPosts);
}
