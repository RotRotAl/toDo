var name=prompt("whats your name?");
var firstLetter=name.slice(0,1);
var nameWithoutFirstLetter=name.slice(1,name.length+1);
firstLetter=firstLetter.toLocaleUpperCase();
nameWithoutFirstLetter=nameWithoutFirstLetter.toLocaleLowerCase();
alert(firstLetter+nameWithoutFirstLetter);