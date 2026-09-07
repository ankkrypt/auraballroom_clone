   <footer class="site-footer">
        <div class="footer-nav">
            <div class="footer_brand_space">
                <div class="footer_brand_logo">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/public/assets/images/AURA-LOGO.png' ); ?>" alt="Aura Logo" />
                </div>
                <div class="footer_brand_description">
                    Long Island’s premier luxury event venue for weddings, corporate events, and private celebrations.
                </div>
            </div>
            <div class="footer_quick_links">
                <ul>
                    <li>
                        <h2>Quick Links</h2>
                    </li>
                    <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
                    <li><a href="<?php echo esc_url( get_template_directory_uri() . '/about.html' ); ?>">About</a></li>
                    <li><a href="<?php echo esc_url( get_template_directory_uri() . '/services.html' ); ?>">Services</a></li>
                    <li><a href="<?php echo esc_url( get_template_directory_uri() . '/contact/index.html' ); ?>">Contact</a></li>
                </ul>
            </div>
            <div class="footer_event_types">
                <ul>
                    <li>
                        <h2>Event Types</h2>
                    </li>
                    <li><a href="#">Weddings & Receptions</a></li>
                    <li><a href="#">Corporate Events</a></li>
                </ul>
            </div>
            <div class="footer_contact_us">
                <ul>
                    <li>
                        <h2>Contact Us</h2>
                    </li>
                    <li>215 Sunnyside Blvd Plainview, NY 11803</li>
                    <li>Inside Holiday Inn Plainview</li>
                    <li>347-969-0597</li>
                    <li>+1 (631) 703-1347</li>
                    <li>auraballroom@gmail.com</li>
                </ul>
            </div>
        </div>
        <div class="divider">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/public/assets/images/aura-ballroom-decorative-line-1024x2.png' ); ?>" alt="Footer Divider" />
        </div>
        <div class="footer_copyright_bar">
            <div class="footer_copyright_statement">
                © 2026 Aura Ballroom. All Rights Reserved.
            </div>
            <div class="footer_powered_by_statement">
                Powered By DAM Networks
            </div>
        </div>
    </footer>
    
        <?php wp_footer()?>
</body>

</html>