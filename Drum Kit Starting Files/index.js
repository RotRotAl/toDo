

document.querySelector(".w").addEventListener("click",wDrumClicked);
document.querySelector(".a").addEventListener("click",aDrumClicked);
document.querySelector(".s").addEventListener("click",sDrumClicked);
document.querySelector(".d").addEventListener("click",dDrumClicked);
document.querySelector(".j").addEventListener("click",jDrumClicked);
document.querySelector(".k").addEventListener("click",kDrumClicked);
document.querySelector(".l").addEventListener("click",lDrumClicked);
function wDrumClicked(){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    animateClick('w');
}
function aDrumClicked(){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    animateClick('a');
}
function sDrumClicked(){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    animateClick('s');
}
function dDrumClicked(){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    animateClick('d');
}
function jDrumClicked(){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    animateClick('j');
}
function kDrumClicked(){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    animateClick('k');
}
function lDrumClicked(){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    animateClick('l');
}

document.addEventListener("keypress",function(event){
switch(event.key){
    case 'w':
        wDrumClicked();
        break;
    case 'a':
        aDrumClicked();
        break;
    case 's':
        sDrumClicked();
        break;
    case 'd':
        dDrumClicked();
        break;
    case 'j':
        jDrumClicked();
        break;
    case 'k':
        kDrumClicked();
        break; 
    case 'l':
        lDrumClicked();
        break;           
}
});

function animateClick(currentKey)
{
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(
        function(){
              document.querySelector("."+currentKey).classList.remove("pressed");
            },100);
}