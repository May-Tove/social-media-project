export const commentTemplate = (comment) => {
  // Format Date
  let apiDate = comment.created;
  let timestamp = new Date(apiDate).getTime();
  let day = new Date(timestamp).getDate();
  let month = new Date(timestamp).getMonth() + 1;
  let year = new Date(timestamp).getFullYear();
  let datePosted = `${day}.${month}.${year}`;

  return `
    <div class="bg-light rounded p-3 mb-2">
      <div class="d-flex align-items-center">          
        <p class="me-2 mb-2 fw-semibold">${comment.owner}</p>
        <small class="text-muted mb-2">${datePosted}</small>
      </div>
        <p>${comment.body}</p>
    </div>`;
};
