const audioPlayer = document.querySelector('.audio-player');
const audio = new Audio('./assets/backsounds.wav');
// (to replace with .wav on launch)
console.dir(audio);

audio.addEventListener(
	'loadeddata',
	() => {
		audioPlayer.querySelector('.time .length').textContent = getTimeCodeFromNum(
			audio.duration
		);
		audio.volume = 0.75;
	},
	false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector('.timeline');
timeline.addEventListener(
	'click',
	(e) => {
		const timelineWidth = window.getComputedStyle(timeline).width;
		const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
		audio.currentTime = timeToSeek;
	},
	false
);

//click volume slider to change volume
// const volumeSlider = audioPlayer.querySelector('.controls .volume-slider');
// volumeSlider.addEventListener(
// 	'click',
// 	(e) => {
// 		const sliderWidth = window.getComputedStyle(volumeSlider).width;
// 		const newVolume = e.offsetX / parseInt(sliderWidth);
// 		audio.volume = newVolume;
// 		audioPlayer.querySelector('.controls .volume-percentage').style.width =
// 			newVolume * 100 + '%';
// 	},
// 	false
// );

//check audio percentage and update time accordingly
setInterval(() => {
	const progressBar = audioPlayer.querySelector('.progress');
	progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
	audioPlayer.querySelector('.time .current').textContent = getTimeCodeFromNum(
		audio.currentTime
	);
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector('.controls .toggle-play');
playBtn.addEventListener(
	'click',
	() => {
		if (audio.paused) {
			playBtn.classList.remove('play');
			playBtn.classList.add('pause');
			audio.play();
		} else {
			playBtn.classList.remove('pause');
			playBtn.classList.add('play');
			audio.pause();
		}
	},
	false
);

// audioPlayer.querySelector('.volume-button').addEventListener('click', () => {
// 	const volumeEl = audioPlayer.querySelector('.volume-container .volume');
// 	audio.muted = !audio.muted;
// 	if (audio.muted) {
// 		volumeEl.classList.remove('icono-volumeMedium');
// 		volumeEl.classList.add('icono-volumeMute');
// 	} else {
// 		volumeEl.classList.add('icono-volumeMedium');
// 		volumeEl.classList.remove('icono-volumeMute');
// 	}
// });

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
	let seconds = parseInt(num);
	let minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	const hours = parseInt(minutes / 60);
	minutes -= hours * 60;

	if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
	return `${String(hours).padStart(2, 0)}:${minutes}:${String(
		seconds % 60
	).padStart(2, 0)}`;
}

// all the time skips

var waterMelon = document.getElementById('time00'),
	atLantic = document.getElementById('time71'),
	aMor = document.getElementById('time138'),
	ovbomo = document.getElementById('time180'),
	stickyNotes = document.getElementById('time244'),
	exXit = document.getElementById('time284'),
	silverTape = document.getElementById('time305'),
	pinkCable = document.getElementById('timepink'),
	geeWiz = document.getElementById('timegee'),
	dearScience = document.getElementById('timedear'),
	blackRock = document.getElementById('timeradio'),
	underGround = document.getElementById('timemic'),
	plntGroove = document.getElementById('timegroove'),
	microWave = document.getElementById('timebg'),
	ruBber = document.getElementById('timerubber'),
	thanks = document.getElementById('timethx'),
	waterMelon2 = document.getElementById('stick1'),
	atLantic2 = document.getElementById('stick2'),
	aMor2 = document.getElementById('stick3'),
	ovbomo2 = document.getElementById('stick4'),
	stickyNotes2 = document.getElementById('stick5'),
	exXit2 = document.getElementById('stick6'),
	silverTape2 = document.getElementById('stick7'),
	pinkCable2 = document.getElementById('stick8'),
	geeWiz2 = document.getElementById('stick9'),
	dearScience2 = document.getElementById('stick10'),
	blackRock2 = document.getElementById('stick11'),
	underGround2 = document.getElementById('stick12'),
	plntGroove2 = document.getElementById('stick13'),
	microWave2 = document.getElementById('stick14'),
	ruBber2 = document.getElementById('stick15'),
	thanks2 = document.getElementById('stick16')
	;

waterMelon.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 0;
	},
	false
);

waterMelon2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 0;
	},
	false
);

atLantic.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 71.54;
	},
	false
);

atLantic2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 71.54;
	},
	false
);

aMor.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 138.76;
	},
	false
);

aMor2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 138.76;
	},
	false
);

ovbomo.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 180.82;
	},
	false
);

ovbomo2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 180.82;
	},
	false
);

stickyNotes.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 244.25;
	},
	false
);

stickyNotes2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 244.25;
	},
	false
);

exXit.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 284.01;
	},
	false
);

exXit2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 284.01;
	},
	false
);

silverTape.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 305.84;
	},
	false
);

silverTape2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 305.84;
	},
	false
);

pinkCable.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 416.42;
	},
	false
);

pinkCable2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 416.42;
	},
	false
);

geeWiz.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 563.41;
	},
	false
);

geeWiz2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 563.41;
	},
	false
);

dearScience.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 607.56;
	},
	false
);

dearScience2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 607.56;
	},
	false
);

blackRock.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 668.15;
	},
	false
);

blackRock2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 668.15;
	},
	false
);

underGround.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 737.137;
	},
	false
);

underGround2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 737.137;
	},
	false
);

plntGroove.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 793.277;
	},
	false
);

plntGroove2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 793.277;
	},
	false
);

microWave.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 977.443;
	},
	false
);

microWave2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 977.443;
	},
	false
);

ruBber.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 1158.482;
	},
	false
);

ruBber2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 1158.482;
	},
	false
);

thanks.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 1226.435;
	},
	false
);

thanks2.addEventListener(
	'click',
	() => {
		audio.play();
		audio.currentTime = 1226.435;
	},
	false
);