//list of what computer can choose from
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//list of what player can choose from
var playerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var playerSelected = [];


        document.onkeyup = function(event) {

        var userGuess = event.key;

        var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                    
        if (playerOptions.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {  
                wins++;
                alert("You guessed --> " + userGuess + " <-- and it's RIGHT!");
                guessesLeft = 10;
                playerSelected = [];
            }

            if (userGuess != computerGuess) {
                guessesLeft --;
                playerSelected.push(userGuess);
            }

            if (guessesLeft === 0) {
            
                guessesLeft = 10;
                losses ++;
                playerSelected = [];
                alert("You're out of Guesses! Click OK to try again.");
                
                losses ++;
                playerSelected = [];
            }   
        
        //appending to html page
        var stats = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses: " + playerSelected.join(", ") + "</p>";

        document.querySelector("#stats").innerHTML = stats;

        
        }
    };