function removePlay(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove("play");
}

function playIt(e) {
    if(e.keyCode > 64 && e.keyCode < 91){
        let audio = document.querySelector(`audio[class="${e.keyCode}"]`)
        let letter = document.querySelector(`li[data-key="${e.keyCode}"`);
        letter.classList.add('play');
        audio.currentTime = 0;
        audio.play();
    }
}

let letters = document.querySelectorAll("li");
letters.forEach(letter => letter.addEventListener("transitionend", removePlay));

window.addEventListener("keydown", playIt);