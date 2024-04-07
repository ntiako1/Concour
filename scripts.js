var lastScrollTop = 0;
var navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop){
        // Scroll down
        navbar.classList.add("scrolled-down");
        navbar.classList.remove("scrolled-up");
    } else {
        // Scroll up
        navbar.classList.add("scrolled-up");
        navbar.classList.remove("scrolled-down");
    }
    lastScrollTop = currentScroll;
}, false);