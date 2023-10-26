function initialize() {
    const headerMenuCloseIcon = document.getElementById("button-side-menu-open");
    headerMenuCloseIcon.addEventListener("click", openSideMenu);
}

function openSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.remove("side-menu-close");
    sideMenu.classList.add("side-menu-open");
}
initialize();