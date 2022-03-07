
var clicked = false

var button = document.querySelector(".click");

button.addEventListener("click", colorChange);

function colorChange() {

    if (clicked) {
        document.querySelector(".square").style.backgroundColor = "black";

        document.querySelector(".round").style.backgroundColor = "white";

        document.querySelector(".round").style.borderWidth = "black";
    }

    else {
        document.querySelector(".square").style.backgroundColor = "white";

        document.querySelector(".square").style.borderStyle = "solid";
    
        document.querySelector(".square").style.borderWidth = "1px";    
    
        document.querySelector(".round").style.backgroundColor = "black";
    }

    clicked = !clicked
   
}
