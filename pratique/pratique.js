const apiBeer = 'https://random-data-api.com/api/beer/random_beer?size=5';
const listContainer = document.querySelector('.main-container');
const savedBeersContainer = document.querySelector('.saved-beers')
const initial = document.querySelector('.initial');
const added = document.querySelector('.added')
const delBtn = document.querySelectorAll('.del-btn');



let tabData = []
let nb = 0;
/// affichage des bières favorites 
// si il y a quelque chose dans le localstorage on affiche
// sinon on fait un tableau vide
let favoriteBeersTab = []
if (localStorage.getItem('favoriteBeers') !== null){
    favoriteBeersTab = JSON.parse(localStorage.getItem('favoriteBeers'))
    favoriteBeersTab.forEach((beer, index) => {
        console.log(beer)
        initial.innerHTML += `
            <ul class="fav-beer-container" id="${beer.id}">
                <li class="beer-name">Nom : ${beer.name}</li>
                <li class="beer-brand">Fabriquant : ${beer.brand}</li>
                <li class="percent">Taux d'alcool : ${beer.alcohol}</li>
                <li class="malt">Malt : ${beer.malts}</li> 
                <button class="del-btn"></button>
            </ul>`
    })

}

const fetchAndPush = () =>{
   return fetch(apiBeer)
    .then(res => res.json())
    .then(data => {
        tabData = []
        data.forEach(d => tabData.push(d))
    })
}


const addBeer = () => {

    const getLi = (index, key) => tabData[index][key] 
    const noDuplicates = i => JSON.stringify(favoriteBeersTab).includes(JSON.stringify(tabData[i]))
    BeersContainer = document.querySelectorAll('.beer-container')
    BeersContainer.forEach((Beerdiv, index) => {
        console.log(Beerdiv)
       Beerdiv.addEventListener('click', () =>{
        if (noDuplicates(index)){
            console.log('déjà présent')
            console.log(Beerdiv[index])
            Beerdiv[index].classList.add('alert')
        }else{
        favoriteBeersTab.push(tabData[index])
        localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeersTab))
        savedBeersContainer.innerHTML += `
            <ul class="fav-beer-container" id="${getLi(index, 'id')}">
                <li class="beer-name">Nom : ${getLi(index, 'name')}</li>
                <li class="beer-brand">Fabriquant : ${getLi(index, 'brand')}</li>
                <li class="percent">Taux d'alcool : ${getLi(index, 'alcohol')}</li>
                <li class="malt">Malt : ${getLi(index, 'malts')}</li>
                <button type"button" class="del-btn"></button> 
            </ul>`
        }
        })
        
    })
    }  

// afficher les bières de l'api dans le dom

const TabDataDom = (tab, location) =>{
    location.innerHTML = ''
    tab.forEach(beer =>{
        location.innerHTML += `
            <ul class="beer-container" id="${beer.id}">
                <li class="beer-name">Nom : ${beer.name}</li>
                <li class="beer-brand">Fabriquant: ${beer.brand}</li>
                <li class="percent">Taux d'alcool: ${beer.alcohol}</li>
                <li class="malt">Malt: ${beer.malts}</li> 
            </ul>`
    })
} 

const delBeer = () =>{
    const favBeersContainer = document.querySelectorAll('.fav-beer-container')
    const delBtn = document.querySelectorAll('.del-btn');
    favBeersContainer.forEach((elem, index) => {
        delBtn[index].addEventListener('click', () => {
            for (let j = 0; j < favoriteBeersTab.length; j++){
                if(elem.id == favoriteBeersTab[j].id){
                    console.log('match !')
                    elem.remove()
                    favoriteBeersTab.splice(j, 1)
                    localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeersTab))
                }
            }

        })
        
    })
}

fetchAndPush()
    .then(() => TabDataDom(tabData, listContainer))
    .then(() => {
    
    const getLi = (index, key) => tabData[index][key] 
    const noDuplicates = i => JSON.stringify(favoriteBeersTab).includes(JSON.stringify(tabData[i]))
    const BeersContainer = document.querySelectorAll('.beer-container')
    BeersContainer.forEach((Beerdiv, index) => {
       Beerdiv.addEventListener('click', () =>{
        if (noDuplicates(index)){
            console.log('déjà présent')
            Beerdiv.classList.add('alert');
            setTimeout(() =>{
                Beerdiv.classList.remove('alert');
            }, 1200)
        }else{
        favoriteBeersTab.push(tabData[index])
        localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeersTab))
        added.innerHTML += `
            <ul class="fav-beer-container" id="${getLi(index, 'id')}">
                <li class="beer-name">Nom : ${getLi(index, 'name')}</li>
                <li class="beer-brand">Fabriquant : ${getLi(index, 'brand')}</li>
                <li class="percent">Taux d'alcool : ${getLi(index, 'alcohol')}</li>
                <li class="malt">Malt : ${getLi(index, 'malts')}</li>
                <button type"button" class="del-btn"></button> 
            </ul>`
        console.log(document.querySelectorAll('.del-btn'))
        }
        })
        
    })
        
    const favBeersContainer = document.querySelectorAll('.fav-beer-container')
    favBeersContainer.forEach(i => {
        i.addEventListener('click', () =>{
            console.log('gg')
        })
    })
    // const delBtn = document.querySelectorAll('.del-btn');
    document.querySelectorAll('.del-btn').forEach((elem, index) => {
        console.log(elem)
        elem.addEventListener('click', () => {
        console.log('salut')
        for (let j = 0; j < favoriteBeersTab.length; j++){
            if(favBeersContainer[index].id == favoriteBeersTab[j].id){
                console.log('match !')
                favBeersContainer[index].classList.add('del');
                setTimeout(() =>{
                    favBeersContainer[index].remove()
                    favoriteBeersTab.splice(j, 1)
                    localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeersTab))
                }, 1000)
                
            }
        }

    })
    
})
    })
    





// bouton random

const randomBtn = document.querySelector('.random');

// randomBtn.addEventListener('click', () =>{
//     fetchAndPush()
//         .then(() => TabDataDom(favoriteBeersTab, savedBeersContainer))
// })
        





