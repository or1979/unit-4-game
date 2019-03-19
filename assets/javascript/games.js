console.log("YESSS I POPULATED");


var targetNumber = 0;
var Win = 0;
var Losses = 0;
var Guesses = 0;

targetNumber = Math.floor(Math.random() * 120) + 20;
    console.log(targetNumber);


 var updateDom = function() {
    $("#target").text (targetNumber);
    $("#guesses").text (Guesses);
    $("#wins").text (Win);
    $("#losses").text (Losses);
    $(".images").text (randomNumber);
 }


var updateWin = function () {
    Win++; 
    $("#wins").html(Win);
}

updateDom();


for (var i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 16);     
        console.log(randomNumber);
}
     $(".images").on("click", function() {    
             
            
    if (Guesses === targetNumber) {
            Win++;
            updateWin();
           }
            else if  (Guesses >= targetNumber)    {
               Losses++;
               updateLosses();

           }
        
           console.log('working');

});