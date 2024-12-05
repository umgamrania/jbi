// Mobile menu
const menuBtn = document.querySelector(".menu-btn")
const linksContainer = document.querySelector(".links-container")
let menuState = 0;

menuBtn.onclick = () => {
    linksContainer.classList.toggle("open")
}

const links = document.querySelectorAll(".link:not(:has(.sub-menu))")
links.forEach(link => {
    link.onclick = () => {
        linksContainer.classList.remove("open")
    }
})

// nav bar scroll behaviour
const nav = document.querySelector(".nav-bar")
window.onscroll = () => {
    if(window.scrollY > 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
}