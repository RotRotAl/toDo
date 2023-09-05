var msg="";
for(var i=1;i<101;i++){
    msg="";
    if(i%3===0){
        msg="fizz";
    }
    if(i%5===0){
        msg+="buzz"    
    }
    if(msg==="")
    {
        msg=i;
    }
    console.log(msg);
}