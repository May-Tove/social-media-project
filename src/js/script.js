import { handleSearch } from "../js/handlers/search.mjs";
import * as render from "./render/index.mjs";
import * as listeners from "./handlers/index.mjs";

render.getUserHeaderDetails();
render.renderProfile();
render.renderFormAvatar();
render.renderProfilePosts();
render.renderPostHtml();
render.renderPostsHtml();

listeners.loginFormListener();
listeners.registerFormListener();
listeners.createPostFormListener();
listeners.updatePostListener();
listeners.removePostListener();
listeners.updateProfileListener();
listeners.createCommentFormListener();
listeners.reactToPostListener();
