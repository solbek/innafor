/*-----------------------------
---------- SIDEBAR ------------
-----------------------------*/

let backIcon = document.querySelector(".back-icon");
backIcon.onclick = displayMainPage;

let menuIcon = document.querySelector(".menu-icon");
menuIcon.onclick = toggleSidebar;

let overlay = document.querySelector(".sidebar-overlay");
overlay.onclick = toggleSidebar;

let menuCloseIcon = document.querySelector(".close-menu-icon");
menuCloseIcon.onclick = toggleSidebar;

function toggleSidebar() {
    if (menuIcon.classList.contains("menu-active")) {
        menuIcon.classList.remove("menu-active");
    } else {
        menuIcon.classList.add("menu-active");
    }
}
