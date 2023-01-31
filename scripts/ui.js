function setGameOverView() {
  document.querySelector(".game-over").classList.toggle("hide");
  document.getElementById("main-game").classList.add("hide");
  document.getElementById("dom-score").innerText = score;
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
  }
  playSound("gameOver");
}

function playSound(sound) {
  const audio = new Audio();
  audio.crossOrigin = "anonymous";

  switch (sound) {
    case "bgm":
      const bgm = new Audio();
      bgm.crossOrigin = "anonymous";
      bgm.src = "../sfx/bg-music.mp3";
      bgm.loop = true;
      bgm.play();
      bgmAudio = bgm;
      break;
    case "shoot":
      audio.src = "../sfx/shoot.mp3";
      audio.play();
      break;
    case "gameOver":
      audio.src = "../sfx/game_over-sound.mp3";
      audio.play();
      break;
    case "hitSound":
      audio.src = "../sfx/hit-sound.mp3";
      audio.play();
      break;
    default:
      break;
  }
}

function startGame() {
  window.location.href =
    "http://yukinimon-space-sweepers.s3-website-us-east-1.amazonaws.com/main.html";
}

//restart button
document
  .getElementById("restart")
  .addEventListener("click", () => window.location.reload());

play.addEventListener("click", () => {
  if (!backgroundMusicPlaying) {
    playSound("bgm");
    backgroundMusicPlaying = true;
  }
});
