window.addEventListener("keydown", play)
function play(e){
    let key = e.key.toLowerCase();
    let theAudio = document.querySelector(`[data-sound="${key}"]`)
    if(!theAudio)return;
    theAudio.currentTime = 0;
    theAudio.play();
    let div = document.querySelector(`section .${key}`);
    div.classList.add("played")
    setTimeout(() => {
        div.classList.remove("played")
    }, 10);
}
