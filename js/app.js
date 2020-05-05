// Get all elements

const videoPlayer = document.querySelector('.video-player');
const togglePlayBtn = document.querySelector('.toggle-play');
const skipFwdBtn = document.querySelector('.skip-fwd');
const skipBackBtn = document.querySelector('.skip-back');
const progressBar = document.querySelector('.progress-bar');
const volumeSlider = document.querySelector('.volume');

// Create Functions

const togglePlay = () => {
  const method = videoPlayer.paused ? 'play' : 'pause';
  videoPlayer[method]();
}

const updateButton = () => {
  const icon = videoPlayer.paused ? '►' : '❚ ❚';
  console.log(icon);
  togglePlayBtn.textContent = icon;
}

const skipFwd = (event) => {
  console.log('event',event.target.dataset.skip);
  videoPlayer.currentTime += parseFloat(event.target.dataset.skip);
};

const skipBack = (event) => {
  console.log('event',event.target.dataset.skip);
  videoPlayer.currentTime += parseFloat(event.target.dataset.skip);
};

const handleProgress = () => {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

const scrub = (event) => {
  console.log('event', event);

  const scrubTime = (event.offsetX / progressBar.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
}

const handleRangeUpdate = (event) => {
  // console.log('event', event.target.value);
  videoPlayer[event.target.name] = event.target.value;
}

// Hookup functions to eventListeners

videoPlayer.addEventListener('click', togglePlay);
videoPlayer.addEventListener('play', updateButton);
videoPlayer.addEventListener('pause', updateButton);

videoPlayer.addEventListener('timeupdate', handleProgress);

togglePlayBtn.addEventListener('click', togglePlay);
skipFwdBtn.addEventListener('click', skipFwd);
skipBackBtn.addEventListener('click', skipBack);

let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);

volumeSlider.addEventListener('change', handleRangeUpdate);



// skipButtons.forEach(button => button.addEventListener('click', skip));
