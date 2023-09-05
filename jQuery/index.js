
$("h1").css("color","lightblue");
$(document).keypress(
    function(event){
    $("h1").text(event.key);
});