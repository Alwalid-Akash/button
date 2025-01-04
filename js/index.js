var numberOfDrumButtons = document.querySelectorAll(".btn").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var innerHtml = this.innerHTML; // Corrected typo

       makeSound(innerHtml);
    });
}



document.addEventListener("keypress", function (event){
    makeSound(event.key);
})




function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("audieos/sound-1-167181.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("audieos/strange-notification-36458.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("audieos/censor-beep-102309.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("audieos/drum-dj-foisal-fk-181555.mp3");
            audio.play();
            break;

        default: console.log("wrong key");
            
    }
    
}