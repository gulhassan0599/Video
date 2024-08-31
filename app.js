const video = document.querySelector('video');
const playPauseBtn = document.querySelector(".btns");
const switchSlider = document.querySelector('.switch');
const preloader = document.querySelector('.preloader');


playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        switchSlider.style.transform = 'translateX(0)'; // Slide to show pause
    } else {
        video.pause();
        switchSlider.style.transform = 'translateX(100%)'; // Slide to show play
    }
});


window.addEventListener("load", () => {
    preloader.classList.add("hide");
});