var firstName=prompt("enter first name");
var secondName=prompt("enter second name name");
firstName=normalizedName(firstName);
secondName=normalizedName(secondName);
var precent=Math.random();
precent*=100;
precent=Math.floor(precent)+1;
alert(firstName+" and "+secondName+" have "+precent+"% of being togther");

function normalizedName(name) {
    var firstLetter=name.slice(0,1);
var nameWithoutFirstLetter=name.slice(1,name.length+1);
    firstLetter=firstLetter.toLocaleUpperCase();
nameWithoutFirstLetter=nameWithoutFirstLetter.toLocaleLowerCase();
    return (firstLetter+nameWithoutFirstLetter);
}