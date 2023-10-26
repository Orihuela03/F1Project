function initialize() {
    const headerMenuCloseIcon = document.getElementById("button-side-menu-close");
    headerMenuCloseIcon.addEventListener("click", closeSideMenu);
}

function closeSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.remove("side-menu-open");
    sideMenu.classList.add("side-menu-close");
}
initialize();