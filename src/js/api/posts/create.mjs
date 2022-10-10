import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts?_author=true&_comments=true&reactions=true";
const method = "post";

export async function createPost(postData) {
  const createPostUrl = api_social_url + endpoint;

  const response = await fetchWithAuth(createPostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  const form = document.querySelector("#createForm");
  if (response.ok) {
    location.reload();
    form.reset();
  }

  return await response.json();
}

// create a post
/*const postForm = document.querySelector("#share-form");

postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const postTitle = document.querySelector("#post-title").value;
  const postBody = document.querySelector("#post-input").value;
  const imgInput = document.querySelector("#img-input").value;
  console.log(postBody);

  async function createNewPost(url, postData) {
    try {
      const token = localStorage.getItem("accessToken");
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch(url, postOptions);
      console.log(response);
      const post = await response.json();
      console.log(post);
      if (!response.ok) {
        //error message here
      } else {
        window.location.reload();
        postForm.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const newPost = {
    title: postTitle,
    body: postBody,
    media: imgInput,
  };
  const postUrl = `${api_social_url}/posts?_author=true&_comments=true&reactions=true`;
  createNewPost(postUrl, newPost);
});*/
