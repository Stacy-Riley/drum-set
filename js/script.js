 //This event listener is waiting for one of our "data-keys" to be pressed:
 window.addEventListener("keydown", function(e){
    //Here we are using an attribute selector with audio[]:
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //Here we are selecting the class of key to make it visually change:
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return; //Stops function from running if non-data-key is pressed:
    audio.currentTime = 0; //Rewind to the start if pressed over and over again:
    audio.play();

    key.classList.add("playing");
  })

