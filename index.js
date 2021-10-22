let a = 1
const dynamicText = (value) =>{
    const text = value
    a++
    return text
}

const test = document.querySelector('.test')

console.log(dynamicText('bonjour'))

let enculé = dynamicText('enculé') 

test.innerText = dynamicText ('salut')

console.log(a)