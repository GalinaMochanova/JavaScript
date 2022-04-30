// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge(age) {

    if (age < 18) {
        console.log ('You don\'t have access cause your age is ' + age + ' It\'s less then')
} else if (age >= 18 && age < 60) {
    console.log ('Welcome !')
} else if (age > 60) {
    console.log ('Keep calm and look Culture channel')
    }else {
        console.log ('Technical work')
    }
 };

console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));

// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка.

function checkAge(age) {
    if (typeof age === 'number') {
        if (age < 18) {
            return ('You don\'t have access cause your age is ' + age + ' It\'s less then')
    } else if (age >= 18 && age < 60) {
        return ('Welcome !')
    } else if (age > 60) {
            return ('Keep calm and look Culture channel')
        }else {
            return ('Technical work')
        }
     } else {
         return ('Error')
     }
    }

    console.log(checkAge(19));

// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

function checkAge(age) {
    if (isNaN(age) || !age) {
        return (age + ' is not a number')
    }
    if (age < 18) {
        return ('You don\'t have access cause your age is ' + age + ' It\'s less then')
    } else if (age >= 18 && age < 60) {
        return ('Welcome !')
    } else if (age > 60) {
        return ('Keep calm and look Culture channel')
    } else {
        return ('Technical work')
    }
}

console.log(checkAge('25s'));

//// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>How old are you?</title>
</head>

<body>
    <script>

        let age = prompt('Сколько тебе лет', '')
        if (isNaN(age) || !age) {
            throw Error(age + ' is not a number')
        }
        if (age < 18) {
            alert('You don\'t have access cause your age is ' + age + ' It\'s less then')
        } else if (age >= 18 && age < 60) {
            alert('Welcome !')
        } else if (age > 60) {
            alert('Keep calm and look Culture channel')
        } else {
            alert('Technical work')
        };
    </script>
</body>

</html>

