<?php
// Get form input values
$username = $_POST["username"];
$password = $_POST["password"];
$title = $_POST["title"];
$content = $_POST["content"];

// Validate form input values
if (empty($username) || empty($password) || empty($title) || empty($content)) {
  die("Error: All fields are required.");
}

// Authenticate user
if ($username !== "admin" || $password !== "password") {
  die("Error: Invalid username or password.");
}

// Load existing posts from JSON file
$posts = json_decode(file_get_contents("posts.json"), true);

// Create new post object
$newPost = array(
  "title" => $title,
  "author" => $username,
  "content" => $content
);

// Add new post to posts array
array_push($posts, $newPost);

// Save updated posts array to JSON file
file_put_contents("posts.json", json_encode($posts));

// Redirect user to posts page
header("Location: posts.php");
exit();
?>
