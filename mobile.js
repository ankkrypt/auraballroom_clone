const main_menu = document.querySelector(".main_menu");
const main_menu_items = document.querySelectorAll(".main_menu_item");
const hamburger = document.querySelector(".hamburger");
const services_item = document.querySelector(".services_menu_item");
const services_toggle = document.querySelector(".services_menu_toggle");
const submenu_links = document.querySelectorAll(".navbar_submenu a");

hamburger.addEventListener("click",(event)=>{
    main_menu.classList.toggle("active");
    services_item.classList.remove("submenu-open");
    services_toggle.setAttribute("aria-expanded", "false");
});

services_toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const is_open = services_item.classList.toggle("submenu-open");
    services_toggle.setAttribute("aria-expanded", String(is_open));
});

main_menu_items.forEach(item => {
    if (item === services_item) {
        return;
    }

    item.addEventListener("click", () => {
        main_menu.classList.remove("active");
    });
});

submenu_links.forEach(link => {
    link.addEventListener("click", () => {
        main_menu.classList.remove("active");
        services_item.classList.remove("submenu-open");
        services_toggle.setAttribute("aria-expanded", "false");
    });
});