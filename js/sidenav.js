var sidenav = document.querySelector("nav.sidenav");
var sidenavicon = document.querySelector("header.nav-bar .icon-menu");


function openSideNav() {

    sidenav.classList.add("sidenav-active");
}

function closeSideNav() {
    sidenav.classList.remove("sidenav-active");

}

function setCloseIcon() {
    sidenavicon.innerHTML = "❌";
}

function setMenuIcon() {
    sidenavicon.innerHTML = "☰";
}


sidenavicon.onclick = function() {
    if (sidenavicon.classList.contains('icon-menu-open')) {
        openSideNav();
        setCloseIcon();
        sidenavicon.classList.remove("icon-menu-open");
        sidenavicon.classList.add("icon-menu-close");
    } else {
        closeSideNav();
        setMenuIcon();
        sidenavicon.classList.remove("icon-menu-close");
        sidenavicon.classList.add("icon-menu-open");
    }
}