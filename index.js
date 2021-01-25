
// Detecting Button Press

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML= this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

});

}

// Dettecting Key Press

document.addEventListener("keypress" , function(event) {

  makeSound(event.key);

buttonAnimation(event.key);

});



function makeSound(key) {

  switch (key) {
    case "c":

    var tom1= new Audio("sounds/cat.mp3");
    tom1.play();
      break;

      case "d":
      var tom2= new Audio("sounds/duck.mp3");
      tom2.play();

     break;

     case "g":

     var tom3= new Audio("sounds/goat.mp3");
     tom3.play();
       break;

       case "h":

       var tom4= new Audio("sounds/horse.mp3");
       tom4.play();
         break;

         case "l":

         var snare= new Audio("sounds/lion.mp3");
         snare.play();
           break;

           case "m":

           var crash= new Audio("sounds/monkey.mp3");
           crash.play();
             break;


             case "r":

             var kick= new Audio("sounds/rouster.mp3");
             kick.play();
               break;

    default:console.log(key);

  }

}

function buttonAnimation (currentKey) {

  var  activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);

}
