// Collect all buttons
const soundButtons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let audios = {};  

// Preload audios
["sound1", "sound2", "sound3", "sound4", "sound5"].forEach(name => {
  audios[name] = new Audio(`./sounds/${name}.mp3`);
});

// Play audio on button click
soundButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    let soundName = btn.getAttribute("data-sound");

    stopAllSounds();  
    audios[soundName].currentTime = 0;
    audios[soundName].play();
  });
});

// Stop button
stopBtn.addEventListener("click", stopAllSounds);

function stopAllSounds() {
  Object.values(audios).forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
