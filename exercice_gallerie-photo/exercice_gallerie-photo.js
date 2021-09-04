let images = document.querySelectorAll('.img');
let button = document.querySelectorAll('.button')
let buttonRight = document.querySelector('.right-arrow');
let buttonLeft = document.querySelector('.left-arrow');
let buttonPlay = document.querySelector('.play');
let buttonPause = document.querySelector('.pause');

// for(let i = 0; i<images.length; i++ ){
    
    
// })
// }

var i = 0;


console.log(images[0])


buttonRight.addEventListener('click', function(){
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
})

buttonLeft.addEventListener('click', function(){
    if (i <= (images.length -1) && i > 0){
        i--;  
    }else{
       i = (images.length -1)
   }

   console.log(i)

   for (let j=0; j < images.length; j++){
    if (j !== i){
        images[j].classList.add('display')
    }else{
        images[i].classList.remove('display')
    } 
}
})

// buttonLeft.addEventListener('click', function(){
//     i--;
//     // images[i].classList.remove('display')
//     if (i < 0){
//          i = images.length - 1;
//     }
//     console.log(i)
//  })

 