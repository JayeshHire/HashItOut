<?php
// Load posts from JSON file
$posts = json_decode(file_get_contents("posts.json"), true);

// Display each post
foreach ($posts as $post) {
  echo "<h2>" . $post["title"] . "</h2>";
  echo "<p>By " . $post["author"] . "</p>";
  echo "<p>" . $post["content"] . "</p>";
  echo "<hr>";
}
?>
