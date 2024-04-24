const songs = [
  "./assets/music/yeat_cali.mp3",
  "./assets/music/Ingenting_At_Sige.mp3",
  "./assets/music/detokay.mp3",
  "./assets/music/Goteo.mp3",
  "./assets/music/StillTrappin.mp3",
  "./assets/music/MATRIX.mp3",
  "./assets/music/Virtual.mp3"
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledSongs = shuffle(songs);
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  const videoBackground = document.getElementById("video-background");
  const enterButton = document.querySelector(".enter-button");
  const backgroundMusic = document.getElementById("background-music");
  const landingPage = document.getElementById("landing-page");

  // backgroundMusic.addEventListener('ended', function() {
  //   playNextSong();
  // });

  if (!sessionStorage.getItem('captchaPassed')) {
    enterButton.addEventListener("click", function() {
      backgroundMusic.src = shuffledSongs[currentIndex];
      backgroundMusic.volume = 0.1;
      backgroundMusic.play();
  
      videoBackground.style.display = "block";
      videoBackground.play();
  
      landingPage.style.transition = "opacity 1s";
      landingPage.style.opacity = 0;

      sessionStorage.setItem('captchaPassed', true);
  
      setTimeout(function () {
        landingPage.style.display = "none";
      }, 1000);
    });
  } else {
    backgroundMusic.src = shuffledSongs[currentIndex];
    backgroundMusic.volume = 0.1;
    backgroundMusic.play();

    videoBackground.style.display = "block";
    videoBackground.play();

    landingPage.style.transition = "opacity 1s";
    landingPage.style.opacity = 0;
    
    landingPage.style.display = "none";
  }
});

function playNextSong() {
  currentIndex = (currentIndex + 1) % shuffledSongs.length;
  backgroundMusic.src = shuffledSongs[currentIndex];
  backgroundMusic.play();
}