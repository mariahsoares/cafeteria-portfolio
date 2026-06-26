//Video cabeçalho
window.addEventListener("load", () => {

    const video = document.getElementById("video-cabecalho");

    setTimeout(() => {

        video.currentTime = 0;
        video.play();

    }, 3200);

});

//Menu mobile 
const menuMobile = document.querySelector(".menu-mobile");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay-mobile");

function toggleMenu() {
    menuMobile.classList.toggle("ativo");
    sidebar.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
    document.body.classList.toggle("menu-aberto");
}

// abrir/fechar pelo botão
menuMobile.addEventListener("click", toggleMenu);

// fechar clicando fora
overlay.addEventListener("click", toggleMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menuMobile.classList.remove("ativo");
        sidebar.classList.remove("ativo");
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }
});

window.addEventListener("resize", () => {

    if (window.innerWidth > 950) {

        menuMobile.classList.remove("ativo");
        sidebar.classList.remove("ativo");
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");

    }

});