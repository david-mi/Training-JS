

/// CREATION DE LA PROMESSE POUR USERS

const promiseUsers = new Promise((resolve, reject)=>{
    if(prochesDavid !== 'undefined'){
        resolve(prochesDavid)
    }else{
        reject('Accès aux users impossible')
    }
});

/// RECUPERATION DE L'ETAT DE LA PROMESSE POUR USERS

promiseUsers.then((u) =>{
    let familleUl = document.querySelector('.famille');
for (let i in familleDavid){
    const number = parseInt(i)
    familleUl.innerHTML += `<li>
    <b>N°${number + 1}</b>  
    <b>NOM:</b> <span>${familleDavid[i].nom}</span>  
    <b>PRENOM:</b> <span>${familleDavid[i].prenom}</span>  
    <b>LIEN:</b> <span>${familleDavid[i].lien}</span>
    </li>`
}
}).catch((e) =>{
    console.log(e)
})

/// AFFICHAGE DES USERS DANS LE DOM


