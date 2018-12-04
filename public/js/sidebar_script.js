/*-----------------------------
---------- SIDEBAR ------------
-----------------------------*/
console.log(window.location);
if (window.location.pathname == '/mainPage.html') {
    let backIcon = document.querySelector(".back-icon");
    backIcon.style.display = "none";
} else {
    let backIcon = document.querySelector(".back-icon");
    backIcon.onclick = function () {
        window.location = 'mainPage.html'
    };
}

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
