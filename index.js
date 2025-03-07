let GuessCounter = document.getElementById('GuessCounter');
let HomeCounter = document.getElementById('HomeCounter');
//single function
let guestcount = 0;
let homecount = 0;
    GuessCounter.classList.remove('highlight');
    HomeCounter.classList.remove('highlight'); 
function increment(player, amount) {
    if(player === 'forGuess') {
        guestcount += amount;
        GuessCounter.textContent = guestcount;
    }
    else if(player === 'forHome') {
        homecount += amount;
        HomeCounter.textContent = homecount;
    }
    cheackLeader();
}

function cheackLeader(){
    if(guestcount > homecount){
        GuessCounter.classList.add('highlight');
        HomeCounter.classList.remove('highlight'); 
    }
    else if(homecount > guestcount){
        HomeCounter.classList.add('highlight');
        GuessCounter.classList.remove('highlight');
    }
}
function newGame(){
    guestcount, homecount = 0;
    GuessCounter.textContent = 0;
    HomeCounter.textContent = 0;
    GuessCounter.classList.remove('highlight');
    HomeCounter.classList.remove('highlight');
}