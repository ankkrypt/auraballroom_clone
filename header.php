<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- SEO meta data -->
    <title>Home - Aura</title>
    <meta name="description" content="YOUR PERFECT EVENT SPACE" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://aurballroom.com" />

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!-- css files -->
    <!-- <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="animation.css" /> -->

    <!-- script -->
    <!-- <script src="script.js" defer></script> -->

    <?php wp_head(); ?>
</head>

<body>
    <?php wp_body_open(); ?>
    <header>
        <nav class="navbar">
            <div class="logo">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/public/assets/images/cropped-Aura-Logo-no-bg-without-AB.png' ); ?>" alt="Aura Logo" />
            </div>
            <ul>
                <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="active">Home</a></li>
                <li><a href="<?php echo esc_url( get_template_directory_uri() . '/about.html' ); ?>">About</a></li>
                <li>
                    <a href="#">Services</a>
                    <ul class="navbar_submenu">
                        <li><a href="#">Wedding Venue</a></li>
                        <li><a href="#">Banquet Hall Plainview, NY</a></li>
                        <li><a href="#">Corporate Events</a></li>
                    </ul>
                </li>
                <li><a href="<?php echo esc_url( get_template_directory_uri() . '/gallery.html' ); ?>">Gallery</a></li>
                <li><a href="<?php echo esc_url( get_template_directory_uri() . '/contact' ); ?>">Contact</a></li>
                <li><a href="<?php echo esc_url( get_template_directory_uri() . '/blog.html' ); ?>">Blog</a></li>
            </ul>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <div class="btn">
                    Book Tour
                </div>
            </a>
        </nav>
    </header>