function steatmentPrint(i)
{
    console.log(i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.")
}
for(i=99;i>1;i--)
    {
        steatmentPrint(i);
    }
console.log("1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");