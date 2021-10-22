
let inputCp = document.querySelector('#form').cp;
inputCp.addEventListener('input', function(){
    if(this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=code,nom,codeDepartement,departement,codeRegion,population&format=json&geometry=centre`;

        fetch(url).then(response => 
            response.json().then((data) => {
                let ul = document.querySelector('ul');
                for (let i of data){
                    
                    ul.innerHTML += `<li>${i.nom}</li>`
                      
                }
            }
            ))

           
    }
})



