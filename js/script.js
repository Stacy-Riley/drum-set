 //This event listener is waiting for one of our "data-keys" to be pressed:
 window.addEventListener("keydown", function(e){
    //Here we are using an attribute selector with audio[]:
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //Here we are selecting the class of key to make it visually change:
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    
    //Stops function from running if non-data-key is pressed:
    if(!audio) return;
    
    //Rewind to the start if pressed over and over again:
    audio.currentTime = 0; 
    audio.play();

    key.classList.add("playing");
  });

  //Function removes the transition property from the key:
 function removeTransition(e){
    //Skip it if it doesn't have the propertyName of transform:
    if(e.propertyName !== 'transform') return;
    // console.log(e.propertyName)

    //This is referring to key:
    this.classList.remove('playing');
 }
 
 //Function to run after Transition end event in class of .keys is over:
 const keys = document.querySelectorAll(".key");
 //Here we are looping through the array and adding this addEventListener to every key in the array:
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 
 