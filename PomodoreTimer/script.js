
import {formatTime,isTimeValid,stopClock} from './utility.js';
const circle = document.querySelectorAll('circle')[0];

const settings = document.getElementsByClassName('settings')[0];
const start = document.getElementsByClassName('start')[0];
const minutes = document.querySelectorAll('input')[0];
const seconds = document.querySelectorAll('input')[1];


let timerId=null;

const startTimer=()=>{  
    let initialMinutes = document.querySelectorAll('input')[0];
    let initialSeconds = document.querySelectorAll('input')[1];
    circle.style.stroke="#09A65A";
   
    let minutesCounter = initialMinutes.value;
    let secondsCounter = initialSeconds.value;

    if(!isTimeValid(minutesCounter,secondsCounter)){
        alert("Please provide a valid input. ");
        start.innerHTML="start";
        return;
    }

    const execute=()=>{
         if(secondsCounter <=0){
            if(minutesCounter<=0){
                stopClock(initialSeconds,timerId);
                timerId=null;
                start.innerHTML="start";
                return;  
             }
             minutesCounter--;
             initialMinutes.value = formatTime(minutesCounter);
             secondsCounter=59;
             initialSeconds.value=59;
         }
         else{
            secondsCounter--;
            initialSeconds.value = formatTime(secondsCounter);
         }

    }

    timerId = setInterval(execute,1000);
}


start.addEventListener('click',function(){
    if(start.innerHTML ==='start'){
        start.innerHTML="stop";
        minutes.disabled = true;
        seconds.disabled = true;
        startTimer();
    }
    else{ 
        start.innerHTML ="start";
        clearInterval(timerId);
        timerId=null;
    }
})



settings.addEventListener('click',function(){
    if(timerId===null){
            minutes.disabled = !minutes.disabled;
            seconds.disabled = !seconds.disabled;
    }
})

