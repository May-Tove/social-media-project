import { updatePost } from "../../api/posts/index.mjs";

/**
 * Event listener to update a post on form submit
 */
export async function updatePostListener(post, id) {
  const form = document.querySelector("#editForm");

  if (form) {
    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags.join(", ");
    form.media.value = post.media;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const title = data.get("title");
      const body = data.get("body");
      const tags = data.get("tags").split(", ");
      const media = data.get("media");

      const post = { title, body, media, tags };

      post.id = id;

      if (!post.media) {
        delete post.media;
      }

      updatePost(post);
    });
  }
}
