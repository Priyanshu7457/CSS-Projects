const playButton = document.querySelector(".playBtn");
const pauseButton = document.querySelector(".pauseBtn");
const audioButton = document.createElement("audio");
audioButton.src = "./1.mp3";
playButton.addEventListener("click", () => {
  audioButton.play();
  if (playButton.classList.contains("showBtn")) {
    playButton.classList.remove("showBtn");
    playButton.classList.add("hideBtn");
  }
  pauseButton.classList.remove("hideBtn");
  pauseButton.classList.add("showBtn");
});

pauseButton.addEventListener("click", () => {
  audioButton.pause();
  if (pauseButton.classList.contains("showBtn")) {
    pauseButton.classList.remove("showBtn");
    pauseButton.classList.add("hideBtn");
  }
  playButton.classList.remove("hideBtn");
  playButton.classList.add("showBtn");
});
