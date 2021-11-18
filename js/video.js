var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 5;
	console.log("The new speed is = " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 5;
	console.log("The new speed is = " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("The original time was = " + video.currentTime)
	if (video.currentTime < video.duration - 15){
		video.currentTime = video.currentTime + 15;
		console.log("The new time is = " + video.currentTime)
	}
	else {
		video.currentTime = 0;
		console.log("Exceeded length of the video, starting from the beginning")
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false){  //remember this checks
		video.muted = true; //this assigns
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is now muted")
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is no longer muted")
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume =  this.value / 100;
	volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Filter added")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Displaying original")
	video.classList.remove("oldSchool")
});

