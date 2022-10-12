import { getPosts, reaction } from "../api/posts/index.mjs";

/**
 * NOT WORKING
 */
export async function reactToPostListener() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const id = post.id;
  });

  const likeBtn = document.querySelectorAll(".like-btn");

  if (likeBtn) {
    likeBtn.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("clicked");
        reaction(id);
      });
    });
  }
}
