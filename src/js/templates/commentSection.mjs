export const commentTemplate = (comment) => {
  // Format Date
  let apiDate = comment.created;
  let timestamp = new Date(apiDate).getTime();
  let day = new Date(timestamp).getDate();
  let month = new Date(timestamp).getMonth() + 1;
  let year = new Date(timestamp).getFullYear();
  let datePosted = `${day}.${month}.${year}`;

  return `
    <div class="border-bottom">
      <div class="d-flex align-items-center my-3">          
        <p class="me-2 mb-1 fw-semibold">${comment.owner}</p>
        <p class="text-muted mb-1">Commented: ${datePosted}</p>
      </div>
        <p>${comment.body}</p>
    </div>`;
};
