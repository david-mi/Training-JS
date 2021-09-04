let images = document.querySelectorAll('.img');
let button = document.querySelectorAll('.button')
let buttonRight = document.querySelector('.right-arrow');
let buttonLeft = document.querySelector('.left-arrow');
let buttonPlay = document.querySelector('.play');
let buttonPause = document.querySelector('.pause');

var i = 0;


/// PASSE SUR LA PHOTO SUIVANTE

nextPicture = () =>{
  if (i < (images.length -1)){
        i++;  
    }else{
       i = 0
   }

   for (let j=0; j < images.length; j++){
    if (j !== i){
        images[j].classList.add('display')
    }else{
        images[i].classList.remove('display')
    } 
}
}
    
/// REVIENT SUR LA PHOTO PRECEDENTE

previousPicture = () =>{
    if (i <= (images.length -1) && i > 0){
        i--;  
    }else{
       i = (images.length -1)
   }

   for (let j=0; j < images.length; j++){
    if (j !== i){
        images[j].classList.add('display')
    }else{
        images[i].classList.remove('display')
    } 
}
}

/// BIND DES FONCTIONS RIGTH & LEFT SUR UN BOUTON

buttonRight.addEventListener('click', function(){
    nextPicture();
})

buttonLeft.addEventListener('click', function(){
    previousPicture();
})

// / BOUTON PLAY ET PAUSE AVEC INTERVALS

buttonPlay.addEventListener('click', function(e){
    if (e.detail > 1){
        console.log('mdr')
    }
    var interval = setInterval(nextPicture, 1500)
    buttonPause.addEventListener('click', function(){
        window.clearInterval(interval)
    })
    
})


