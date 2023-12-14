//! Задание №1
let age = 18

if (age >= 18) {
    console.log("Совершеннолетний")
} else {
    console.log("Несовершеннолетний")
}

//! Задание №2
let isStudent = true;   

if (isStudent) {
console.log("Студент")
} else {
console.log("Не студент")
}

//! Задание №3
let num1 = 134547
let num2 = 23547
console.log(num1 + num2)

//! Задание №4
let day = 2

switch (day) {
    case 1:
    console.log("Понедельник")
    break;
    case 2:
    console.log("Вторник")
    break;
    case 3:
    console.log("Среда")
    break;
    case 4:
    console.log("Четверг")
    break;
    case 5:
    console.log("Пятница")
    break;
    case 6:
    console.log("Суббота")
    break;
    case 7:
    console.log("Воскресенье")
    break;
    default:
    console.log("Error")
    break;
    }

//! Задание №5
let temp = -5

if (temp >= 40) {
console.log("Горячо")
} else if (temp >=20) {
    console.log("Тепло")
} else if (temp <= 15) {
    console.log("Холодно")
}

//! Задание №6
let score = 70

if (score > 100) {
    console.log("Error")
    } else if (score >= 60) {
        console.log("сдал")
    } else if (score < 60) {
        console.log("не сдал")
    }

//! Задание №7
let num = 56

if (num % 2 ===0) {
    console.log("чётное")
} else {
    console.log("не чётное")
}

//! Задание №8
let language = "JavaScript"

if (language === "JavaScript") {
console.log("Поддерживается")
} else {
console.log("Не поддерживается")
}

//! Задание №9
let userRole = "editor"

if (userRole === "admin") {
console.log("Доступ разрешен")
} else if (userRole === "editor") {
console.log("Доступ ограничен")
} else {
console.log("Доступ запрещен")
}

//! Задание №10
let a = 19
let b = 15
let c = 8

let max = a

if (b > max) {
max = b
} else if (c > max) {
max = c
}

console.log("Наибольшее число: " + max)

//! Задание №11
let fruit = "яблоко"

if (fruit === "яблоко") {
console.log("Красное")
} else if (fruit === "банан") {
console.log("Желтый")
} else if (fruit === "апельсин") {
console.log("Оранжевый")
} else {
console.log("Другой цвет")
}

//! Задание №12
let income = 50000

let incomeStatus = (income > 75000) ? "Высокий доход" :
(income > 30000) ? "Средний доход" :
"Низкий доход";

console.log(incomeStatus)

//! Задание №13
let grade = "B"

switch (grade) {
case "A":
console.log("Отличная оценка")
break;
case "B":
console.log("Хорошая оценка")
break;
case "C":
console.log("Удовлетворительная оценка")
break;
case "D":
console.log("Неудовлетворительная оценка")
break;
case "F":
console.log("Проваленный результат")
break;
default:
console.log("Некорректная оценка")
break;
}

//! Задание №14
let password = "myPassword"

if (password.length >= 8) {
console.log("Пароль надежный")
} else {
console.log("Пароль слишком короткий")
}

//! Задание №15
let x = 5654
let y = 468567

let result = (x > y) ? "x больше y" :
(y > x) ? "y больше x" :
"x и y равны"

console.log(result)

//! Задание №16
let isRaining = true

if (isRaining) {
console.log("Идет дождь")
} else {
console.log("Дождя нет")
}

//! Задание №17
let isLeapYear = true

if (isLeapYear) {
console.log("Год високосный")
} else {
console.log("Год не високосный")
}

//! Задание №18
let userInput = ""

if (userInput === "") {
console.log("Пустая строка")
} else {
console.log("Строка не пуста")
}

//! Задание №19
let num5 = -5

if (num5 > 0) {
console.log("Положительное")
} else if (num < 0) {
console.log("Отрицательное")
} else {
console.log("Ноль")
}

//! Задание №20
let dayOfWeek = "пн"

switch (dayOfWeek) {
case "пн":
case "вт":
case "ср":
case "чт":
case "пт":
console.log("Рабочий день")
break;
case "сб":
case "вс":
console.log("Выходной")
break;
default:
console.log("Некорректный день недели")
break;
}

//! Доп. задания

//! Задание №1
function isPrime(number) {
    if (number <= 1) {
    return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
    return false;
    }
    }
    
    return true;
    }
    
    let number = 17; // Замените на желаемое число для проверки
    
    if (isPrime(number)) {
    console.log(number + " - простое число");
    } else {
    console.log(number + " - не простое число");
    }

//! Задание №2
let examScore = 85
let homeworkScore = 75

let totalScore = examScore + homeworkScore;

if (totalScore >= 90) {
console.log("A")
} else if (totalScore >= 80 && totalScore <= 89) {
console.log("B")
} else if (totalScore >= 70 && totalScore <= 79) {
console.log("C")
} else if (totalScore >= 60 && totalScore <= 69) {
console.log("D")
} else {
console.log("F")
}

//! Задание №3
let balance = 1000
let withdrawal = 500

if (balance >= withdrawal) {
console.log("Средств достаточно")
} else {
console.log("Недостаточно средств")
}

//! Задание №4
let month = 6
let year = 2022

let season = ''

switch (month) {
case 1:
case 2:
case 12:
season = 'Зима'
break;
case 3:
case 4:
case 5:
season = 'Весна'
break;
case 6:
case 7:
case 8:
season = 'Лето'
break;
case 9:
case 10:
case 11:
season = 'Осень'
break;
default:
console.log('Некорректный номер месяца')
}

console.log(`Текущий сезон для ${month}.${year}: ${season}`)