function toggleMenu(){
    const menu = document.querySelector(".hamburger_menulinks");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}