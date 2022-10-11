import { getPosts, reaction } from "../api/posts/index.mjs";

/**
 *
 */
export async function reactToPostListener() {
  const likeBtn = document.querySelector(".like-btn");
  console.log(likeBtn);

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (likeBtn) {
    const post = await getPosts(id);
    post.id = id;

    likeBtn.forEach((button) => {
      button.addEventListener("click", () => {
        reaction(id);
        console.log("clicked");
      });
    });
  }
}
