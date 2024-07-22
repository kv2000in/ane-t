let soundEnabled = true;
function createDollarSign() {
    const dollarSign = document.createElement('div');
    dollarSign.classList.add('dollarSign');
    dollarSign.innerHTML = '$';
    document.querySelector('.container').appendChild(dollarSign);
    
    // Randomize the starting horizontal position within a range
    dollarSign.style.left = Math.random() * 100 + 'vw';
    
    // Add event listener to play sound when animation ends
    dollarSign.addEventListener('animationend', () => {
        dollarSign.remove();
        //(do not autoplay. sound won't play)
          if (soundEnabled) {
            playCoinSound();
        }
    });
}


function toggleSound() {
    soundEnabled = !soundEnabled;
    const button = document.getElementById('toggleSoundButton');
    button.innerText = soundEnabled ? 'Sound ON' : 'Sound OFF';
}

// Add event listener to the toggle button
document.getElementById('toggleSoundButton').addEventListener('click', toggleSound);



function playCoinSound() {
    const coinSound = document.getElementById('coinSound');
    coinSound.currentTime = 0; // Rewind to the start
    coinSound.play();
}

// Create dollar signs at intervals 
//setInterval(createDollarSign, 500);

//Start the fliper counter and rain
function letitrain(){
    
/*
const divElement = document.getElementById('tickerdiv');

// Add a custom attribute
divElement.setAttribute('data-did-init','handleTickInit');*/
    setInterval(createDollarSign, 500);
    
}