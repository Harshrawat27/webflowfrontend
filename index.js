document.addEventListener('DOMContentLoaded', function () {
  fetch(
    'https://257c43fd-2114-4f1f-81fe-75fc70ade7a4-00-3p5f91n2iopaf.janeway.replit.dev/userdata'
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('[member-ms-data="first-name"]').textContent =
        data.title;
      document.querySelector('[member-ms-data="last-name"]').textContent =
        data.description;
    })
    .catch((error) => console.error('Error fetching user data:', error));
});
