//debugger;
// ПРОСТОЙ ТАЙМЕР ОБРАТНОГО ОТСЧЕТА

const reverseTimer = document.getElementById("timer");
const addTimer = function () {
    if (reverseTimer.textContent > 0) {
        reverseTimer.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(endOfInterval);
    }
};


const endOfInterval = setInterval(addTimer, 1000);

// ФОРМАТ DD/HH/MM/SS

let endDate = new Date("Wed Nov 11 2022 15:30:30").getTime();
let timer = setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days +
            "<span class='label'>DAY(S)</span>";
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2) +
            "<span class='label'>HR(S)</span>";
        document.getElementById("min").innerHTML = ("0" + mins).slice(-2) +
            "<span class='label'>MIN(S)</span>";
        document.getElementById("sec").innerHTML = ("0" + secs).slice(-2) +
            "<span class='label'>SEC(S)</span>";
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
    }
}, 1000);



/*const reverseTimer = document.getElementById("timer");

const addTimer = function () {

    if (reverseTimer.textContent > 0) {
        reverseTimer.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
    }
};

const endOfInterval = setInterval(addTimer, 1000);*/



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