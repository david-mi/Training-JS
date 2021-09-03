// let liste = document.querySelectorAll('ul li');
// let listeUl = document.querySelector('ul');
// console.log(liste);

// // liste.classList.add('checklist');


// for(let li of liste){
//     li.addEventListener('click', function(){
//     this.classList.toggle('checklist');
//     if (li == 1 ){
//         margin();
//     }
    
// })
// }


// const margin = () => {
//     listeUl.classList.add('margin-left');
// }



// let profilDetail = [{
//     nom : 'Michel',
//     prenom : 'David',
//     sexe : 'masculin',
//     dateNaissance : '28/09/1992',
//     metier : 'Formation Dev WEB'
// },{
//     nom : 'Michel',
//     prenom : 'Jean Claude',
//     sexe : 'masculin',
//     dateNaissance: '03/03/1952',
//     metier : 'Retraité'
// },{
//     nom : 'Michel',
//     prenom : 'Viviane',
//     sexe : 'féminin',
//     dateNaissance: '26/06/1956',
//     metier : 'Retraitée'
// }];





// functionSah = (nomFamille) => {
//     console.log(`Salut ${nomFamille.prenom} ! Comment vas-tu en cette belle journée ??`)
//     console.log(`Tu es ${genre} le ${nomFamille.dateNaissance}`);
// }



// for (let nomFamille of profilDetail){
//     functionSah(nomFamille);
// }

// let i = 1;
// let j = 5;

// func = () => {
//     return i>j
// }

// console.log(func ());
// let tabFamily = ['David', 'Jean Claude', 'Viviane', 'Fabienne', 'Joel'];

// direBonjour = (texte) => {
//     console.log(texte + tabFamily[i]);
// }

// for (var i = 0 ; i < tabFamily.length ; i += 1){
    
//     switch (tabFamily[i]) {
//         case 'David':
//         case 'Viviane':
//         case 'Jean Claude':
//             direBonjour('De grandes salutations à : ');
//             break;     
            
//         case 'Joel': 
//         direBonjour('Salutations ');
//             break;
//         case 'Fabienne':
//             direBonjour('Hey Yo '); 
//             break;  
//     }
// }
//     // if (i === 'Viviane'){
//     //     console.log('Bonjour ' + i)
//     // }
//     // else if ( i === 'David'){
//     //     console.log ('Salut ' + i);
//     // }

//     // else {
//     //     console.log('Hello ' + i)
//     // }

// var count = 0;

// function cc(card) {
//   // Only change code below this line
// switch (card) {
//     case (card >= 2 && card < 7):
//             count += 1;
//             break;
//     case (card >= 7 && card <= 9):
//         count += 0;
//         break;
//     case (card == 10):
//     case (card === 'J'):
//     case (card === 'Q'):
//     case (card === 'K'):
//     case (card === 'A'):
//         count -= 1;
//         break;
// }

//   if (count >= 1){
//     return count + " Bet";
//   }else if (count == 0){
//      return count + " Hold"; 
//   }else {
//     return count + " Hold"
//   }

//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');



// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log

// Setup
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (i = 0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++)
         product *= arr[i][j]
    }
 
    // Only change code above this line
    return product;
  }
  
  var result =  multiplyAll([[1],[3,4],[5,6,7]]);
  console.log(result)

  multiplyAll([[1],[3,4],[5,6,7]]);