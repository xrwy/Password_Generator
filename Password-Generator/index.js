const PwEl = document.getElementById('pw');
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById('number');


const upperLetters = 'ABCDEFGHIJKLMNOPQSRTUVWXYZ'
const lowerLetters = 'ABCDEFGHIJKLMNOPQSRTUVWXYZ'.toLowerCase();
const numbers = '0123456789';
const sysmbol = '~!@#$%^&*()_+-=|';

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols(){
    return sysmbol[Math.floor(Math.random() * sysmbol.length)];
}


function generatePassword(){
    const len = lenEl.value;
    let password = '';

    for(let i = 0; i < len; i++){
        const result = generate();
        password += result;
    }
    PwEl.innerHTML = password;
}
function generate(){
    const passwordArray = [];

    if(upperEl.checked){
        passwordArray.push(getUpperCase());
    }
    if(lowerEl.checked){
        passwordArray.push(getLowerCase());
    }
    if(numberEl.checked){
        passwordArray.push(getNumber());
    }
    if(symbolEl.checked){
        passwordArray.push(getSymbols());
    }

    if(passwordArray.length === 0){
        return ""
    }
    return passwordArray[Math.floor(Math.random() * passwordArray.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = PwEl.innerText;
    if(!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    alert('Password Copied to Clipboard');
});






