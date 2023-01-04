import * as render from "./render/index.mjs";
import * as listeners from "./handlers/index.mjs";

render.getUserHeaderDetails();

const path = location.pathname;

function router() {
  switch (path) {
    case "/src/pages/posts/feed/index.html":
      render.renderPostsHtml();
      listeners.createPostFormListener();
      render.renderFormAvatar();
      break;
    case "/src/pages/posts/post/index.html":
      render.renderPostHtml();
      break;
    case "/src/pages/profile/login/index.html":
      listeners.loginFormListener();
      break;
    case "/src/pages/profile/register/index.html":
      listeners.registerFormListener();
      break;
    case "/src/pages/profile/index.html":
      render.renderProfile();
      render.renderFormAvatar();
      listeners.createPostFormListener();
      break;
  }
}

router();
