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
        mainURL= `https://api.funtranslations.com/translate/yoda.json?text=${textInput.value}`;
        console.log(mainURL);
    }else if(e.target.classList.contains('second-language')){
        
        // pirate
        mainURL= `	https://api.funtranslations.com/translate/pirate.json?text=${textInput.value}`;

        console.log(mainURL);
    }else if(e.target.classList.contains('third-language')){

        // minion
        mainURL= `https://api.funtranslations.com/translate/valyrian.json?text=${textInput.value}`;

        console.log(mainURL);
    }
   }
});






convertBtn.addEventListener('click',function(){

    console.log(mainURL);
   
    fetch(mainURL).then((response)=>response.json()).then((json)=> outputText.textContent=json.contents.translated)

    

  
});


// function errorHandle(error){
//     alert('try again after sometime');
// }