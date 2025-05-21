// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

// DOM elements
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts'); // FIXED name

// Focus input when page loads
window.onload = () => guessInput.focus();

// Event listeners
checkButton.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please Enter A Number Between 1 and 100!!';
        messageElement.style.color = '#e74c3c';
        return;
    }

    attempt++;
    attemptsElement.textContent = attempt;

    if (userGuess === randomNumber) {
        messageElement.textContent = `🎉 Congratulations! You guessed the correct number in ${attempt} attempts.`;
        messageElement.style.color = '#2ecc71';
        guessInput.disabled = true;
        checkButton.disabled = true;

        const playAgainBtn = document.createElement('button');
        playAgainBtn.textContent = 'Play again';
        playAgainBtn.style.marginTop = '20px';
        playAgainBtn.style.marginLeft = '10px';
        checkButton.insertAdjacentElement('afterend', playAgainBtn);
        playAgainBtn.addEventListener('click', () => location.reload());

    } else if (userGuess < randomNumber) {
        messageElement.textContent = '📉 Too low! Try a higher number.';
        messageElement.style.color = '#e67e22';
    } else {
        messageElement.textContent = '📈 Too high! Try a lower number.';
        messageElement.style.color = '#e67e22';
    }

    // Clear and refocus input after each guess
    guessInput.value = '';
    guessInput.focus();
}










