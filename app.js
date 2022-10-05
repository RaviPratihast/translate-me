'use strict';


// variables

const textInput=document.querySelector('#input-text');
const yodaSpeak=document.querySelector('.first-language');
const pirateSpeak=document.querySelector('.second-language');
const minionSpeak=document.querySelector('.third-language');
const outputText=document.querySelector('.converted-text');
const convertBtn=document.querySelector('#convert');

// languages
const firstLanguage=document.querySelector('.first-language');
const secondLanguage=document.querySelector('.second-language');
const thirdLanguage=document.querySelector('.third-language');


let mainURL='';



// event delegation

document.querySelector('.language-container').addEventListener('click',function(e){
   if(e.target.classList.contains('lang')){
    
    

   
    if(e.target.classList.contains('first-language')){

       firstLanguage.classList.add('active');
      
        secondLanguage.classList.remove('active');
        thirdLanguage.classList.remove('active');


        mainURL= `https://api.funtranslations.com/translate/yoda.json?text=${textInput.value}`;
        console.log(mainURL);
    }else if(e.target.classList.contains('second-language')){
       
        secondLanguage.classList.add('active');
        firstLanguage.classList.remove('active');
        thirdLanguage.classList.remove('active');

        // pirate
        mainURL= `	https://api.funtranslations.com/translate/pirate.json?text=${textInput.value}`;

        console.log(mainURL);
    }else if(e.target.classList.contains('third-language')){

        thirdLanguage.classList.add('active');
        secondLanguage.classList.remove('active');
        firstLanguage.classList.remove('active');
        // minion
        mainURL= `https://api.funtranslations.com/translate/ferb-latin.json?text=${textInput.value}`;

        console.log(mainURL);
    }
   }
});






convertBtn.addEventListener('click',function(){

    console.log(mainURL);
   
    fetch(mainURL).then((response)=>response.json()).then((json)=> outputText.textContent=json.contents.translated).catch((error)=> alert(`${error.message}, Try again after sometime`));

    

  
});


// function errorHandle(error){
//     alert('try again after sometime');
// }