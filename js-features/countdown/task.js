let reverseTimer = document.getElementById("timer");

let addTimer = function () {

    if (reverseTimer.textContent > 0) {
        reverseTimer.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
    }
};

let endOfInterval = setInterval(addTimer, 1000);



//clearTimeout(endOfInterval);

// В формате hh mm ss

let reverseTimerSec = document.getElementById('sec');
let reverseTimerMin = document.getElementById('min');
let reverseTimerHour = document.getElementById('hour');

addTimer2 = function () {
    if (reverseTimerSec.textContent <= 60 && reverseTimerSec.textContent > 0) {
        reverseTimerSec.textContent -= 1;
    } else if (reverseTimerSec.textContent == 0 && reverseTimerMin.textContent > 0) {
        reverseTimerMin.textContent -= 1;
    } else if (reverseTimerMin.textContent == 0 && reverseTimerHour.textContent > 0) {
        reverseTimerHour.textContent -= 1;
    }
};
let endInterval2 = setInterval(addTimer2, 1000);
//let endInterval3 = setInterval(addTimer3, 1000);