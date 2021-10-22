fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
}).then(function(data){
    
    let apiInfos = data.results[0];
    
    //// AFFICHAGE DU NOM ET PRENOM /////

    let apiFirstName = apiInfos.name.first;
    let apiSecondName = apiInfos.name.last;
    let nameSelector = document.querySelector('.name');
    nameSelector.innerText = apiFirstName + ' ' + apiSecondName

    //// AFFICHAGE DE LA PHOTO ////

    console.log(apiInfos.picture.large)
    let imageSelector = document.querySelector('.photo');
    let apiPhoto = apiInfos.picture.large;
    imageSelector.setAttribute('src', apiPhoto)
   

    //// AFFICHAGE INFOS ////

    let infoSelector = document.querySelector('.infos');

    /// GENRE ///

    infoSelector.innerHTML +=`<li><span>Gender: </span><span>${apiInfos.gender}</span></li>`;
    if(apiInfos.gender === 'female'){
        document.querySelector('.main__container').classList.add('female');
        console.log('fille')
    }else {
        console.log('male')
        document.querySelector('.main__container').classList.add('male')
    }

    //// LOCALISATION ////

    let apiLocation = apiInfos.location;
    infoSelector.innerHTML += `<li><span>Country: </span><span>${apiLocation.country}</span></li>`
    infoSelector.innerHTML += `<li><span>City: </span><span>${apiLocation.city}</span></li>`

})

