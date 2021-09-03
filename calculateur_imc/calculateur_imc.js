var poidsValue = document.getElementById('poids') 
var tailleValue = document.getElementById('taille')
var divResults = document.getElementById('results')
var resultat = document.getElementById('resultat')
var fixedResult = ''

//// CALCUL IMC ET AFFICHAGE

calculImc = () =>{

    //// CONVERSION CM  EN M

    if (tailleValue.value > 100){
        tailleValue.value = tailleValue.value / 100
    }
    
    //// CALCUL IMC ET LIMITATION DU RESULTAT A 2 DECIMALES

    var result = poidsValue.value / (tailleValue.value * tailleValue.value)
    fixedResult = result.toFixed(2);

    //// AFFICHAGE RESULTAT
    
    if (poidsValue.value == 0 || tailleValue.value == 0){
        divResults.innerText = 'Veuillez remplir les 2 champs';
        divResults.classList.remove('resultat-chiffre')
    }
    else if (isNaN (result)){
        divResults.innerHTML = "C'est des chiffres que tu dois rentrer...";
        divResults.classList.remove('resultat-chiffre')
    }
    else{
        divResults.innerHTML = `IMC : ${fixedResult}`;
        divResults.classList.add('resultat-chiffre');
    }
    
}


//// AFFICHAGE DU COMMENTAIRE LIE AU RESULTAT


var adj = ''


verdictImc = () =>{

        if (fixedResult < 18.4){
            adj = 'ULTRA SKINNY';
          }else if (fixedResult <= 18.5 && fixedResult <= 24.9){
             adj = 'NORMAL'
         }else if (fixedResult <= 25 && fixedResult <= 29.9){
             adj = 'CHUBBY'
         }else if (fixedResult <= 30 && fixedResult <= 34.9){
             adj = 'FAT'
         }else if (fixedResult <= 35 && fixedResult <= 39.9){
             adj = 'SUPER FAT'
         }else if (fixedResult > 40){
             adj = 'MEGA FAT'
         }else {
             return
         }

         document.querySelector('.verdict').id='verdict'
         var verdictLoc = document.getElementById('verdict')
         var verdict = `Ton IMC est de : ${fixedResult}. Tu es ${adj} `
         verdictLoc.innerHTML = verdict
}


//// LANCEMENT DES FONCTIONS AVEC LE BOUTON

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    calculImc();
    // console.log(fixedResult)
    verdictImc(); 
})







