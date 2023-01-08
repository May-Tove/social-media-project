export const following = (following) => {
  // avatar placeholder
  let avatar = "";
  if (following.avatar === "") {
    avatar = "../../../images/avatar-placeholder.jpg";
  } else {
    avatar = following.avatar;
  }

  return `
    <div class="d-flex align-items-center mb-3 m-2 m-lg-0">
    <img
      class="img-thumbnail rounded-circle mb-2 me-3"
      src="${following.avatar}"
      alt="Profile picture"
    />
    <h6 class="text-center">${following.name}</h6>
  </div>`;
};
