const menu = document.querySelector(".navbar-toggler");
const toggler = document.querySelector(".btn-toggle");
const moon_sun = document.querySelector(".moon_sun");

const sidebarMenu = document.querySelector(".nav"),
    sidebarLi = sidebarMenu.querySelectorAll("li"),
    totalNav = sidebarLi.length;

moon_sun.addEventListener("click", () => {
    moon_sun.querySelector('.moon').classList.toggle("d-none");
    moon_sun.querySelector('.sun').classList.toggle("d-none");
    document.body.classList.toggle("dark");
});
menu.addEventListener("click", () => {
    document.querySelector('.nav__bar').classList.add("show");
    document.querySelector('.nav__bar').classList.remove("hide");
});
toggler.addEventListener("click", () => {
    document.querySelector('.nav__bar').classList.add("hide");
    document.querySelector('.nav__bar').classList.remove("show");
});

for (let i = 0; i < totalNav; i++) {
    const a = sidebarLi[i].querySelector(".nav-link");
    a.addEventListener("click", function() {

        for (let j = 0; j < totalNav; j++) {
            sidebarLi[j].querySelector(".nav-link").classList.remove("active");
        }
        this.classList.add("active");
    })
}