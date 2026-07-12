// ===============================
// LOADER
// ===============================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});

// ===============================
// AMBIL NAMA TAMU DARI URL
// contoh:
// ?to=Keluarga%20Ahmad
// ===============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {
    document.getElementById("guestName").innerHTML = guest;
}

// ===============================
// MUSIK
// ===============================

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", function () {

    if (playing) {

        music.pause();

        musicButton.innerHTML = "🎵";

    } else {

        music.play();

        musicButton.innerHTML = "⏸";

    }

    playing = !playing;

});

// ===============================
// BUKA UNDANGAN
// ===============================

document.getElementById("openInvitation")
.addEventListener("click", function(){

document.querySelector(".cover").style.display="none";

document.getElementById("mainContent").style.display="block";

music.play();

playing=true;

musicButton.innerHTML="⏸";

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// COUNTDOWN
// ===============================

const targetDate = new Date("July 19, 2026 10:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance % (1000*60*60))/ (1000*60));

const seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);

// ===============================
// BACK TO TOP
// ===============================

const back = document.getElementById("backToTop");

window.onscroll = function(){

if(document.documentElement.scrollTop>400){

back.style.display="block";

}else{

back.style.display="none";

}

}

back.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
