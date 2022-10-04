'use strict';


// variables

const textInput=document.querySelector('#input-text');
const yodaSpeak=document.querySelector('.first-language');
const pirateSpeak=document.querySelector('.second-language');
const minionSpeak=document.querySelector('.third-language');
const outputText=document.querySelector('.converted-text');
const convertBtn=document.querySelector('#convert');


let mainURL='';



// event delegation

document.querySelector('.language-container').addEventListener('click',function(e){
   if(e.target.classList.contains('lang')){
    

   
    if(e.target.classList.contains('first-language')){

         // for yoda
        mainURL= `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput.value}`;
    }else if(e.target.classList.contains('second-language')){
        
        // pirate
        mainURL= `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput.value}`;
    }else if(e.target.classList.contains('third-language')){

        // minion
        mainURL= `https://api.funtranslations.com/translate/minion.json
        ?text=${textInput.value}`;
    }
   }
});




convertBtn.addEventListener('click',function(){

    let text;
    fetch(mainURL).then((response)=>response.json()).then((json)=>console.log(json)).catch((error)=>console.log(`error:${error}`));

  
});

