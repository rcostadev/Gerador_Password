const NumeroCaractR = document.getElementById('NumeroCaractR');
const NumeroCaractN = document.getElementById('NumeroCaractN');
const incluLM_Element = document.getElementById('inLM');
const incluN_Element = document.getElementById('inN');
const incluS_Element = document.getElementById('inS');

const form = document.getElementById('PassGer')
const DisplayPassword = document.getElementById('Display-Password')

const UPPERCASE = arrayFrom(65,90)
const LOWERCASE = arrayFrom(97,122)
const NUMERO = arrayFrom(48,57)
const SIMBULO = arrayFrom(33, 47).concat(
    arrayFrom(58, 64)
).concat(
    arrayFrom(91, 96)
).concat(
    arrayFrom(123, 126)
)

NumeroCaractN.addEventListener('input', sincronisar)
NumeroCaractR.addEventListener('input', sincronisar)

form.addEventListener('submit', e => {
    e.preventDefault()
    const Numero = NumeroCaractN.value
    const incluirMauiscula = incluLM_Element.checked
    const incluirNumero = incluN_Element.checked
    const incluirSimbolo = incluS_Element.checked
    const password = gerarPass(Numero, incluirMauiscula, incluirNumero, incluirSimbolo)
    DisplayPassword.innerText = password
})

function gerarPass(Numero, incluirMauiscula, incluirNumero, incluirSimbolo){
    let carcCode = LOWERCASE
    if (incluirMauiscula) carcCode = carcCode.concat(UPPERCASE)
    if(incluirNumero) carcCode = carcCode.concat(NUMERO)
    if(incluirSimbolo) carcCode = carcCode.concat(SIMBULO)
    
    const passwordcaracter = []

    for(let i = 0; i < Numero; i++){
        const caracterCode = carcCode[Math.floor(Math.random()* carcCode.length)]
        passwordcaracter.push(String.fromCharCode(caracterCode))

    }
    return passwordcaracter.join('')
}

function arrayFrom(low, high){
    const array = [];
    for(let i = low; i<= high; i++){
        array.push(i)
    }
    return array
}

function sincronisar(e) {
    const valor = e.target.value
    NumeroCaractR.value = valor
    NumeroCaractN.value = valor
  }