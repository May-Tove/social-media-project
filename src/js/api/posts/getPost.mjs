import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const endpoint = "/posts?_author=true&_comments=true&reactions=true";

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostUrl = `${api_social_url}${endpoint}/${id}`;

  const response = await fetchWithAuth(getPostUrl);

  console.log(response.json());
  return await response.json();
}

/*import { getPosts } from "./getPosts.mjs";

export async function getPost(id) {
  const posts = await getPosts();
  return posts.find((post) => post.id === id);
}*/
