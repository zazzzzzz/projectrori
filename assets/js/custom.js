$(document).ready(function () {
    /*********** Nav menu ***************/
    $('.canvas-icon').click(function () {
        $('.menubar-area').toggleClass('offcanvas-menu');
        return false;
    });
    
    AOS.init({
        once:true,
    });
});
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });