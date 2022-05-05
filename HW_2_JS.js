// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let str = 'asdf1F@'

function checkString(str) {
    if (typeof str != 'string') {
        return 'It\'s not a string';
    } else {
        return true
    }
}

function checkEmpty(str) {
    if (str) {
        if (str.length == 0) {
            return 'The string must not be empty';
        } else {
            return true
        }
    } else {
        return 'The string must not be empty';
    }
}

function checkLength(str) {
    if (str) {
        if (str.length < 5) {
            return 'The string must have at least 5 characters and no more than 64 characters';
        } else if (str.length > 64) {
            return 'The string must have at least 5 characters and no more than 64 characters';
        } else {
            return true
        }
    } else {
        return 'The string must have at least 5 characters and no more than 64 characters';
    }
}


function checkLetter(str) {
    if (str) {
        if (/[a-z]/.test(str) && /[A-Z]/.test(str)) {
            return true
        } else {
            return 'The string must have at least 1 uppercase letter and 1 capital letter';
        }
    } else {
        return 'The string must have at least 1 uppercase letter and 1 capital letter';
    }
}

function checkNumber(str) {
    if (/\d/.test(str)) {
        return true
    } else {
        return 'The string must have at least 1 number';
    }
}
function checkSymbol(str) {
    if (/@/.test(str)) {
        return true
    } else {
        return 'The string must have at least 1 "@"';
    }
}



function ValidateString(str) {
    const checks = [checkString, checkEmpty, checkLength, checkLetter, checkNumber, checkSymbol];
    const err = [];

    for (let check of checks) {
        let error = check(str)
        if (error != true) {
            err.push(error);

        } 
    } 
    if (err.length == 0) {
        console.log('Accepted!')
    } else { for (let i = 0; i < err.length; i += 1){
        console.log('The string doesn\'t meet the requirements: ' + err[i]);
    }
}
}

ValidateString(str);

