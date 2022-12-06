<?php

// Content Blocker
// assuming you have a folder named "content-blocker" in your child theme folder with both files
add_action('wp_enqueue_scripts', 'content_blocker');
function content_blocker() {
    wp_enqueue_style('content-blocker-style', get_stylesheet_directory_uri() . '/content-blocker/style.css', null, null, 'all');
    wp_enqueue_script('content-blocker-script', get_stylesheet_directory_uri() . '/content-blocker/script.js', '', '', true);
}
