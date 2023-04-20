// Retrieve the form and input elements
const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const contentInput = document.getElementById('content');

// Retrieve all posts from local storage or create an empty array
const posts = JSON.parse(localStorage.getItem('posts')) || [];

// Listen for form submission events
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the input values
  const title = titleInput.value;
  const author = authorInput.value;
  const content = contentInput.value;

  // Create a new post object
  const post = {
    title: title,
    author: author,
    content: content
  };

  // Add the new post to the posts array and store it in local storage
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  // Clear the input values
  titleInput.value = '';
  authorInput.value = '';
  contentInput.value = '';

  // Display a success message to the user
  alert('Post submitted successfully!');
});
