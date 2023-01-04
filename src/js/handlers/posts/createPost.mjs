import { createPost } from "../../api/posts/index.mjs";

/**
 * Event listener that creates a new form when submitting form
 */
export function createPostFormListener() {
  const form = document.querySelector("#createForm");

  function populateForm(post) {
    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;
    form.tags.value = post.tags.join(", ");
  }

  if (form) {
    form.addEventListener("input", () => {
      const post = {
        title: form.title.value,
        body: form.body.value,
        media: form.media.value,
        tags: form.tags.value.split(", "),
      };
      populateForm(post);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const title = data.get("title");
      const body = data.get("body");
      const media = data.get("media");
      const tags = data.get("tags").split(", ");

      const post = { title, body, media, tags };

      if (!post.media) {
        delete post.media;
      }

      await createPost(post);
    });
  }
}
