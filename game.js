let userGuess = document.getElementById("user_number");
let randomNumber = Math.floor(Math.random() * 101);
const userResult = document.getElementById("result");
const btnGuess = document.getElementById("btn-validate");

function guessNumber() {
    let guess;

    do {
        guess = userGuess.value;
        console.log(guess, randomNumber);

        if(randomNumber > guess) {
            userResult.textContent = "Essaie plus grand!";
            userResult.style.color = "#A41807"
            return;
        } else if(randomNumber < guess) {
            userResult.textContent = "Essaie plus petit...";
            userResult.style.color = "#A41807";
            return;
        } else if(randomNumber == guess) {
            userResult.textContent = "CHAMPIOOOOON !!!";
            userResult.style.color = "#5AC674";
            return;
        }
    } while (guess != randomNumber);
    return;
}; 

