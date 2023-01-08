import { api_social_url } from "../constants.mjs";
import { fetchWithAuth } from "../fetchWithToken.mjs";

const method = "post";

export async function comment(postId, body) {
  const createPostUrl = api_social_url + `/posts/${postId}/comment`;

  const response = await fetchWithAuth(createPostUrl, {
    method,
    body: JSON.stringify(body),
  });

  console.log(response);

  if (response.ok) {
    location.reload();
    return await response.json();
  }
}
