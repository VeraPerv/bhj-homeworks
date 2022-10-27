const reverseTimer = document.getElementById("timer");

const addTimer = function () {

    if (reverseTimer.textContent > 0) {
        reverseTimer.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
    }
};

const endOfInterval = setInterval(addTimer, 1000);



//clearTimeout(endOfInterval);

// В формате hh mm ss

/*const reverseTimerSec = document.getElementById('sec');
const reverseTimerMin = document.getElementById('min');
const reverseTimerHour = document.getElementById('hour');

addTimer2 = function () {
    if (reverseTimerSec.textContent <= 60 && reverseTimerSec.textContent > 0) {
        reverseTimerSec.textContent -= 1;
    }
        if(reverseTimerSec.textContent = 0 ) {
            reverseTimerMin.textContent -= 1;
            //reverseTimerSec.textContent = 60;
        }
       

    
};

const endInterval2 = setInterval(addTimer2, 1000);

//let endInterval3 = setInterval(addTimer3, 1000);

/* else if (reverseTimerSec.textContent == 0 && reverseTimerMin.textContent > 0) {
        reverseTimerMin.textContent -= 1;
      
    } else if (reverseTimerMin.textContent == 0 && reverseTimerHour.textContent > 0) {
        reverseTimerHour.textContent -= 1;
    }*/