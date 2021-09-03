var lists = document.querySelectorAll('ul li');
var paragraphs = document.querySelectorAll('p');


for (let i=0 ; i<lists.length; i++){
    lists[i].addEventListener('click', function(){
        for (let j=0 ; j<paragraphs.length; j++){
            console.log('voici j ' + j)
            console.log('voici i ' + i)
            if (i !== j){
                console.log('diff')
                paragraphs[j].classList.add('display')

            }else if (i === j){
                paragraphs[j].classList.remove('display')
            }
        }
    })
}


// paragraphs[i].classList.add('display')