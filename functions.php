<?php
function aura_block_theme_assets() {
    // Load your custom CSS file
    wp_enqueue_style( 'auraballroom_css', get_template_directory_uri() . '/style.css', array(), '1.0' );

    // Load your custom JS file
    wp_enqueue_script( 'auraballroom_js', get_template_directory_uri() . '/script.js', array(), '1.0', array('in_footer' => true) );
}
add_action( 'wp_enqueue_scripts', 'aura_block_theme_assets' );
