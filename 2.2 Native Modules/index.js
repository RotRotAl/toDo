const fs=require("fs");

fs.writeFile("message2.txt","hi lord u know im smart",errorHandler );

function errorHandler(event)
{
    console.log(event);
}