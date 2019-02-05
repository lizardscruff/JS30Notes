function playSound(event) {
	//uses a CSS attribute selector like a[title]
	//uses ES6 template literals(template strings) `` with a placeholder
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); 
	if (!audio) return; //stop function from running at all

	// KEY - this allows us to find the divs with class key
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	//currentTime works for audio and video
	//this is resetting the audio file to start at 0:00
	//that makes it so you can hit it repeatedly
	//otherwise you have to wait till the file finishes before you can hit it again
	//https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime
	audio.currentTime = 0;
	//.play() is a web API
	//https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
	audio.play();

	// KEY - here we add playing to the class of divs selected with key
	key.classList.add('playing');
	// here are some other ways to alter the class:
	// key.classList.remove('playing');
	// key.classList.toggle('playing');
}

//reasons why we are doing it this way:
//you have to loop on the keys with forEach 
//because addEventListener doesn't work with lists
//and if you were to use setTimeout it could become unsynced
//and it's easier for a designer to change the transition
//in CSS without it unsyncing with the JS.
function removeTransition(event) {
	if (event.propertyName !== 'transform') return; //skip it if it's not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
