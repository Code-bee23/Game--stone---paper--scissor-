let song = new Audio("Songs/1.mp3");
let masterBtn = document.getElementById("masterBtn");
let gif = document.getElementById("gif");
let range = document.getElementById("range");
let upperAudio = document.querySelectorAll(".audio");
let SongName = document.getElementById("SongName");

// Play/Pause master button
masterBtn.addEventListener("click", function() {
    if (song.paused || song.currentTime <= 0) {
        song.play();
        masterBtn.classList.remove("fa-circle-play");
        masterBtn.classList.add("fa-circle-pause");
        gif.style.opacity = "1"; // Show gif when playing
    } else {
        song.pause();
        masterBtn.classList.add("fa-circle-play");
        masterBtn.classList.remove("fa-circle-pause");
        gif.style.opacity = "0"; // Hide gif when paused
    }
});

// Update range with song progress
song.addEventListener("timeupdate", function() {
    let percentage = (song.currentTime / song.duration) * 100;
    range.value = percentage;
});

// Handle range click (seeking)
range.addEventListener("click", function() {
    song.currentTime = (range.value * song.duration) / 100;
});

// Song change through individual buttons
upperAudio.forEach(function(element) {
    element.addEventListener("click", function(e) {
        let button = e.target;
        let songIndex = button.id;

        if (button.classList.contains("fa-circle-play")) {
            // If the button is in "play" state, change the song
            song.src = `Songs/${songIndex}.mp3`; // Update the source of the song

            // Ensure the song is loaded before playing
            song.load(); // This will make sure the song is fully loaded before playing
            song.play(); // Play the new song
            SongName.innerText = button.parentElement.previousElementSibling.innerText; // Update the song name
            range.value = 0; // Reset the range
            song.currentTime = 0; // Start from the beginning
            gif.style.opacity = "1"; // Show gif
            masterBtn.classList.remove("fa-circle-play");
            masterBtn.classList.add("fa-circle-pause"); // Sync master button with the song

            // Update play/pause icons for all buttons
            upperAudio.forEach(btn => {
                if (btn !== button) {
                    btn.classList.add("fa-circle-play");
                    btn.classList.remove("fa-circle-pause");
                }
            });

            // Update the clicked button's icon
            button.classList.remove("fa-circle-play");
            button.classList.add("fa-circle-pause");

        } else {
            // If the button is in "pause" state, pause the song
            song.pause();
            button.classList.add("fa-circle-play");
            button.classList.remove("fa-circle-pause");
            masterBtn.classList.add("fa-circle-play");
            masterBtn.classList.remove("fa-circle-pause");
            gif.style.opacity = "0"; // Hide gif
        }
    });
});
