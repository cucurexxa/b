/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://www.facebook.com/share/g/1J5sz2yHJj/", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://www.facebook.com/share/g/1J5sz2yHJj/");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/g/1J5sz2yHJj/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

// Overlay muncul di detik tertentu
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1 && !overlayClicked) {
        overlay.classList.add("show");
    }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("https://www.profitableratecpmnetwork.com/kn2r3tvxq?key=f253a3c1092f1f045c4300734967748e", "_blank");
});




