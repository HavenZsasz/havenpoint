function setupSticky_m() {
    window.onscroll = function () { stickyHeader_m() };
}
// When the user scrolls the page, execute myFunction


// Get the header
var header_m = document.getElementById("navigation_m");

// Get the offset position of the navbar
var sticky_m = header_m.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader_m() {
    if (window.pageYOffset > sticky_m) {
        header_m.classList.add("sticky_m");
    } else {
        header_m.classList.remove("sticky_m");
    }
}

window.addEventListener("load", setupSticky_m);