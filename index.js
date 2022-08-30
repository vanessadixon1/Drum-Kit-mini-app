   let button = document.querySelectorAll("button.drum");

   let audio = new Audio();

   /**
    * detecting keyboard press
    */
   document.addEventListener('keydown', function(event) {
    let eventKey = event.key;
    makeSound(eventKey);
    buttonAnimation(eventKey);
  });

/**
 * detect button clicked
 */
   for(i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            let buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml)
        })
    }

  function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sound/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio('/sounds/crash.mp3');
            audio.play();
            break;
        case "s":
            audio = new Audio('/sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            audio = new Audio('/sounds/tom-2.mp3');
            audio.play();
            break;
        case "j":
            audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
            break;
        case "k":
            audio = new Audio('/sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            audio = new Audio('/sounds/tom-4.mp3');
            audio.play();
            break;
    }
  }

  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100)
    
  }