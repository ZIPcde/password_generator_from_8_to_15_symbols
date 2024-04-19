const readline = require('readline');
const crypto = require('crypto');

function generatePassword() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Введите число от 8 до 15: ', (answer) => {
        const passwordLength = parseInt(answer);
        if (passwordLength >= 8 && passwordLength <= 15) {
            const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
            const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

            let allCharacters = lowercaseLetters + uppercaseLetters + specialCharacters;
            let password = '';

            for (let i = 0; i < passwordLength; i++) {
                let randomIndex = crypto.randomInt(0, allCharacters.length);
                password += allCharacters[randomIndex];
            }

            console.log('Сгенерированный пароль:', password);
        } else {
            console.log('Введенное число не соответствует числовому диапазону от 8 до 15.');
        }

        rl.close();
    });
}

module.exports = { generatePassword };
