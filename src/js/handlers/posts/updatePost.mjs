import { getPost, updatePost } from "../../api/posts/index.mjs";

/**
 * Event listener to update a post on form submit
 */
export async function updatePostListener() {
  const form = document.querySelector("#editForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);
    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      if (!post.media) {
        delete post.media;
      }

      updatePost(post);
    });
  }
}
