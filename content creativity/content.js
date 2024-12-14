document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const playButton = document.getElementById('playButton');

    // Initially hide controls and play button
    video.controls = false;
    playButton.style.display = 'block';

    // Play button click handler
    playButton.addEventListener('click', () => {
        if (!video.paused) {
            // If video is playing, pause it and show the play button
            video.pause();
        } else {
            // If video is paused, show controls, play video, and hide the play button
            video.controls = true;
            video.play();
            playButton.style.display = 'none';
        }
    });

    // Handle video end
    video.addEventListener('ended', () => {
        video.controls = false; // Hide controls
        playButton.style.display = 'block'; // Show play button
        video.currentTime = 0; // Reset video to the start
    });

    // Handle manual pause
    video.addEventListener('pause', () => {
        if (video.currentTime < video.duration) {
            playButton.style.display = 'block'; // Show play button if video is paused
        }
    });

    // Handle manual play
    video.addEventListener('play', () => {
        playButton.style.display = 'none';
    });
});

window.addEventListener('scroll', () => {
    const section = document.querySelector('.last');
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionPosition = section.offsetTop;
  
    if (scrollPosition > sectionPosition) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
        
    
  const navToggle = document.querySelector(".bar");
  const links = document.querySelector(".links")

  navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links")
  })

  let logoImg = document.querySelector(".img")
  logoImg.addEventListener("click", ()=>{
    location.reload() 
  })
  
  