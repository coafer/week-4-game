$(document).ready(function(){
    //Initialize vars
    var additionFromCrystals = 0; 
    var userWins = 0;
    var userLoses = 0;
    var randomCrystalOne = 0;
    var randomCrystalTwo = 0;
    var randomCrystalThree = 0;
    var randomCrystalFour = 0;
    var randomNumberToMatch = 0;
    //Reset values              
    function resetAll() {
        numberToMatch();
        randomGenerator();
        additionFromCrystals = 0;
        $("#score").text(additionFromCrystals);
        $("#numero").text(numberToMatch);
    }
    //Generate random number to match between 19 - 120
    var numberToMatch = function(){
        randomNumberToMatch = Math.floor((Math.random() * 120) + 19); 
        //Place the number on the DOM
        $("#numero").html(randomNumberToMatch);
    }
    //Generate random numbers for each crystal
    var randomGenerator = function(){
        randomCrystalOne = Math.floor((Math.random() * 12) + 1);
        randomCrystalTwo = Math.floor((Math.random() * 12) + 1);
        randomCrystalThree = Math.floor((Math.random() * 12) + 1);
        randomCrystalFour = Math.floor((Math.random() * 12) + 1);
    }
    //Adding to the score
    function addingToScore(crystalNumber){
        additionFromCrystals = additionFromCrystals + crystalNumber;
     }
    //Calling functions
    numberToMatch();
    randomGenerator();
    //Make the sumatory from all numbers everytime the user clicks on crystals
    $("#crystal_one").on("click", function(){
        addingToScore(randomCrystalOne);
        $("#score").text(additionFromCrystals);
       checkScore(); 
    });
    $("#crystal_two").on("click", function(){
        addingToScore(randomCrystalTwo);
        $("#score").text(additionFromCrystals);
        checkScore();
    });
    $("#crystal_three").on("click", function(){
        addingToScore(randomCrystalThree);
        $("#score").text(additionFromCrystals);
        checkScore();
    });
    $("#crystal_four").on("click", function(){
        addingToScore(randomCrystalFour);
        $("#score").text(additionFromCrystals);
        checkScore();
    });
    /*Condition: if match is true 
    User wins and is reflected on screen, reset all
    If goes over all reset and increments loses*/
    var checkScore = function(){
        if (additionFromCrystals === randomNumberToMatch){
            resetAll();
            userWins++;
            $("#wins").text(userWins);
        } else if (additionFromCrystals > randomNumberToMatch){
            resetAll();
            userLoses++;
            $("#loses").text(userLoses);
        }
    }    
});