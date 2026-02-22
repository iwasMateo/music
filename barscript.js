async function trackProgress() {
    let progressBar = document.getElementById("progress");
    let audio = document.getElementById("audio");
    let currenttime = document.getElementById("time");
    let maxtime = document.getElementById("duration");
    audio.addEventListener("timeupdate", () => 
        {
            if (!isDragging) {
                currenttime.innerText = formatTime(audio.currentTime);
                progressBar.value = audio.currentTime / audio.duration * 500;
            }
        }
    );
    let isDragging = false;
    progressBar.addEventListener("input", () => 
        {
            isDragging = true;
        }
    );
    progressBar.addEventListener("change", () =>
        {
            let newTime = progressBar.value / 500 * audio.duration;
            audio.currentTime = newTime;
            isDragging = false;
        }
    );
    audio.addEventListener("loadedmetadata", () => 
        {
            maxtime.innerText = formatTime(audio.duration);
        }
    );
}
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = "0" + secs;
    return mins + ":" + secs;
}
trackProgress();