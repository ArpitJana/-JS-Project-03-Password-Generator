const resultBox = document.getElementById('result');
const passwordLengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const copyBtn = document.getElementById('clipboard');
const generatePasswordBtn = document.getElementById('generate-password-btn');


const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = upperChars.toLowerCase();
const numbers = '012345678901234567890123456789';
const specialChars = '!@#$%^&*(){}[]=<>!@#$%^&*(){}[]=<>!@#$%^&*(){}[]=<>';

generatePasswordBtn.addEventListener('click', getRandomPassword);

function getRandomPassword() {
    let passwordCars = '';
    (uppercaseEl.checked) ? passwordCars += upperChars: passwordCars;
    (lowercaseEl.checked) ? passwordCars += lowerChars: passwordCars;
    (numbersEl.checked) ? passwordCars += numbers: passwordCars;
    (symbolsEl.checked) ? passwordCars += specialChars: passwordCars;

    const passLength = +passwordLengthEl.value;

    let password = '';

    for (let i = 0; i < passLength; i++) {
        var randomNumber = Math.floor(Math.random() * passwordCars.length);
        password += passwordCars.substring(randomNumber, randomNumber + 1);
    }
    resultBox.innerText = password;
}

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultBox.innerText;

    if (!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});