let progress = document.querySelector("#progress");
let ctrlIcon = document.querySelector("#play");
let song = document.querySelector("#song");

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function PlayPause(){
    let grow=0;
    if(ctrlIcon.classList.contains("bx bx-pause")){
        song.pause();
        ctrlIcon.classList.remove("bx bx-pause");
        ctrlIcon.classList.add("bx bx-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("bx bx-pause");
        ctrlIcon.classList.remove("bx bx-play");
        setInterval(()=>{
            grow++;
            document.querySelector("#start").textContent=grow;
        },1000)
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },100)
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.remove("bx bx-pause");
    ctrlIcon.classList.add("bx bx-play");
}

