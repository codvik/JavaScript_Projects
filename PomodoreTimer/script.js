//getting element
let settings = document.getElementsByClassName('settings')[0];
let start = document.getElementsByClassName('start')[0];


minutes = document.querySelectorAll('input')[0];
seconds = document.querySelectorAll('input')[1];

//start-stop
let timerId=null;





function startTimer(){

    function formatTime(input){
    if(input<10 && input>=0){
        input = "0" + input;
    }
    return input;
    }
   
    function isTimeValid(minutes,seconds){
        if(minutes<0 || seconds<0 || minutes>=60 || seconds>=60)return false;
        return true;
    }


    function makeRingRed(seconds,minutes){
        if(minutes==0 && seconds<=9) document.querySelectorAll('circle')[0].style.stroke="red";
        else document.querySelectorAll('circle')[0].style.stroke="#09A65A"; 
    }

    function isTimesUp(minutes){
            if(minutes<=0){initialSeconds.value = 00;return true;}
            return false;
    }
        
    initialMinutes = document.querySelectorAll('input')[0];
    initialSeconds = document.querySelectorAll('input')[1];
   

    if(isTimeValid(initialMinutes.value,initialSeconds.value)==false){
        alert("please provide a valid input");
        return;
    }

    let secondsCounter = initialSeconds.value;
    let minutesCounter = initialMinutes.value;


    function execute(){
        //     if(secondsCounter <= 1){ 
        //     minutesCounter--;
        //     initialMinutes.value = formatTime(minutesCounter);
        //     secondsCounter=60;
        //     initialSeconds.value = 59;
        //         if(minutesCounter<=0) {
        //              clearInterval(timerId);
        //              alert("timesUP");
        //             }
        //     }
        // else {
        //     secondsCounter--;
        //     initialSeconds.value = formatTime(secondsCounter);
        // }
       
        makeRingRed(secondsCounter,minutesCounter); 
         if(secondsCounter <=0){
            if(minutesCounter<=0){
                initialSeconds.value="0"+0;
                clearInterval(timerId);
                alert("timesUP"); 
                start.innerHTML="start";
document.querySelectorAll('circle')[0].style.stroke="#09A65A";
                timerId=null;
                return;  
             }
             minutesCounter--;
             initialMinutes.value = formatTime(minutesCounter);
             secondsCounter=60;
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
    if(start.innerHTML =='start'){
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

//settings

settings.addEventListener('click',function(){
    if(timerId===null){
            minutes.disabled = !minutes.disabled;
            seconds.disabled = !seconds.disabled;
    }
})

//color--change