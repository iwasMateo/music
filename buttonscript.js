let playbutton = document.getElementById("playbutton");
let skipbutton = document.getElementById("skipbutton");
let backbutton = document.getElementById("backbutton");
let playbuttonimg = playbutton.querySelector("img");
var audio = document.getElementById("audio");
function switchPlay() {
    if (playbuttonimg.src.includes("images/pause.png")){
        playbuttonimg.src = "/images/play.png";
        audio.pause()
    } else if (playbuttonimg.src.includes("images/play.png")) {
        playbuttonimg.src="/images/pause.png";
        audio.play();
    } else {
        playbuttonimg.src = "/images/play.png";
        audio.pause();
    }
}
playbutton.addEventListener("click", switchPlay);