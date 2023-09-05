var cubic1=Math.random();
cubic1*=6;
cubic1=Math.floor(cubic1)+1;

var cubic2=Math.random();
cubic2*=6;
cubic2=Math.floor(cubic2)+1;

document.querySelector(".img1").setAttribute("src"
,"./images/dice"+cubic1+".PNG");
document.querySelector(".img2").setAttribute("src"
,"./images/dice"+cubic2+".PNG");

var msg="it's a tie";
if(cubic1>cubic2){
msg="player 1 won!"
}
else if(cubic1<cubic2){
    msg="player 2 won!"
}
document.querySelector("h1").innerText=msg;