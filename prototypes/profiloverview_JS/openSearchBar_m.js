function setupSearchBar_m() {
    document.getElementById("suchlupe_m").addEventListener("click", openSearchbar_m);
}

function openSearchbar_m() {
    document.getElementById("suchlupe_m").removeEventListener("click", openSearchbar_m);
    document.getElementById('over-div-suchfeld_m').style.display="flex";
    document.getElementById("suchfeld_m").style.animation = "openSearchbar 0.5s forwards";
    document.getElementById("suchlupe_m").addEventListener("click", closeSearchbar_m);

}

function closeSearchbar_m() {
    document.getElementById("suchlupe_m").removeEventListener("click", closeSearchbar_m);
    document.getElementById("suchfeld_m").style.animation = "closeSearchbar 0.2s forwards";
    document.getElementById('over-div-suchfeld_m').style.display="none";
    document.getElementById("suchlupe_m").addEventListener("click", openSearchbar_m);

}

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

window.addEventListener("load", setupSearchBar_m);