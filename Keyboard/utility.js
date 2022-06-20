const keys = document.querySelectorAll(".key");

export const getKeyName=(event)=>{
    event.preventDefault();
    const keyName = event.key.toUpperCase();
    return keyName;
}

export const getElementWithKey=(keyName)=>{ 
    let element =null;
    if(keyName =='\\'){
        element = document.querySelector('[data-key="bs"]');
        console.log("hfdsaj");
    }
     else  element = document.querySelector('[data-key="' + keyName + '"]');

     return element;
}

export const makeKeyUnjiggle=(element)=>{
    element.setAttribute('class','key');
}

export const makeRandomKeyJiggle=()=>{
    let randomNumber = Math.floor(Math.random() * keys.length);
    let randomKey = keys[randomNumber];
    randomKey.setAttribute("class", "key jiggle");
}

export function makeKeyRed(element){
    element.setAttribute('class','key red');
}