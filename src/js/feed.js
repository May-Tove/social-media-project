/*import { api_social_url } from "./api/constants.mjs";
import { handleSearch } from "./components/search.js";
import { displayPosts } from "./components/post.js";
import { displayError } from "./components/error.js";
import { postsContainer } from "./components/api.js";

export let getPosts = [];

//getting posts
async function getActivityFeed(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    getPosts = await response.json();
    console.log(getPosts);

    displayPosts(getPosts);
  } catch (error) {
    postsContainer.innerHTML = displayError("Could not get activity feed");
    console.log(error);
  }
}
const postUrl = `${api_social_url}/posts?_author=true&_comments=true&reactions=true`;

getActivityFeed(postUrl);

// create a post
const postForm = document.querySelector("#share-form");

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
