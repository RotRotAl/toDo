var text =prompt("type a tweet");
var left=140-text.length;
alert("you typed "+text.length+" charchters you have "+left+" left");
alert("your tweet will be posted like: "+text.slice(0,140));