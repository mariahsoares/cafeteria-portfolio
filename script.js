//Video cabeçalho
window.addEventListener("load", () => {

    const video = document.getElementById("video-cabecalho");

    setTimeout(() => {

        video.currentTime = 0;
        video.play();

    }, 3200);

});