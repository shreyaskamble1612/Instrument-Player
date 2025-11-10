

let drums = document.getElementsByClassName("drum");

 for(let i=0;i<drums.length;i++){
    drums[i].addEventListener("click",(e)=>{
        let buttonInnerHTML = e.target.innerHTML;
        eval("console.log('" + buttonInnerHTML + "')");
        makesound(buttonInnerHTML);
        buttonanimation(buttonInnerHTML);
    })
}

//detect key press
document.addEventListener("keypress",function(event){
    // alert("Key was pressed!");

    makesound(event.key);
    buttonanimation(event.key);
}) 
function makesound(key){

    switch (key) {
        case "w":
            let tom11 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break; 

        default:
            break;
    }

}

function buttonanimation(currentkey){

    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");

    },100)
}




