const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const content = document.getElementById('content').value;

  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `
    <h3>${title}</h3>
    <p>By ${author}</p>
    <p>${content}</p>
  `;

  const main = document.querySelector('main');
  main.appendChild(post);

  form.reset();
});
