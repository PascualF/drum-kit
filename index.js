var buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', () => {

        var buttonKey = this.buttons[i]
        //buttonKey.style.color = 'white';

        drumKit(buttonKey.innerHTML);
        buttonAnimation(buttonKey.innerHTML);
    })
}

document.addEventListener("keydown", (event)=> {
    
    drumKit(event.key);
    buttonAnimation(event.key);
})



const drumKit = (buttonKey) => {
    switch (buttonKey) {
        case 'w':
            var audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break;
        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break;
        case 's':
            var audio = new Audio('./sounds/snare.mp3')
            audio.play()
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break;
        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break;
        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break;
        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break;
        default: console.log(buttonKey)
    }
}

const buttonAnimation = (currentKey) => {
    var activeButton = document.querySelector("." + currentKey);
    console.log(activeButton);
    activeButton.classList.add("pressed");

    setTimeout(buttonOriginal, 100)

    function buttonOriginal () {
        activeButton.classList.remove("pressed");
    }
 

}