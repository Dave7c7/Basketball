let GuessCounter = document.getElementById('GuessCounter');
let HomeCounter = document.getElementById('HomeCounter');
//single function
let guestcount = 0;
let homecount = 0;
function increment(player, amount) {
    if(player === 'forGuess') {
        guestcount += amount;
        GuessCounter.textContent = guestcount;
    }
    else if(player === 'forHome') {
        homecount += amount;
        HomeCounter.textContent = homecount;
    }
}