const keys = document.querySelectorAll(".key");

export function getKeyName(event){
    //shfit key prevent default
    event.preventDefault();
    const keyName = event.key.toUpperCase();
    return keyName;
}

export function getElementWithKey(keyName){ 
    let element =null;
    if(keyName =='\\'){
        element = document.querySelector('[data-key="bs"]');
        console.log("hfdsaj");
    }
     else  element = document.querySelector('[data-key="' + keyName + '"]');

     return element;
}

export function makeKeyUnjiggle(element){
    element.setAttribute('class','key');
}

export function makeRandomKeyJiggle(){
    let randomNumber = Math.floor(Math.random() * keys.length);
    let randomKey = keys[randomNumber];
    randomKey.setAttribute("class", "key jiggle");
}

export function makeKeyRed(element){
    element.setAttribute('class','key red');
}