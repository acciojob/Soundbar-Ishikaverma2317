const soundNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let sounds = {};

// preload all sounds
soundNames.forEach(name => {
  sounds[name] = new Audio(`./sounds/${name}.mp3`);
});

// play buttons
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let sound = btn.getAttribute("data-sound");
    stopAll();
    sounds[sound].currentTime = 0;
    sounds[sound].play();
  });
});

// stop button
document.querySelector(".stop").addEventListener("click", stopAll);

function stopAll() {
  soundNames.forEach(name => {
    sounds[name].pause();
    sounds[name].currentTime = 0;
  });
}
