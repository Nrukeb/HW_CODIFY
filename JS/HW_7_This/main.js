//! Задание 1
// let User = {
//     name: 'Nrukeb',
//     age: 18,
//     logInfo: function(){
//             console.log("Имя: " + this.name + ", Возраст: " + this.age);
//         }
// }

// User.logInfo()

//! Задание 2
// let auto = {
//     brand: "Toyota",
//     logAutoBrand: function(){
//         console.log(`Моя машина - ${this.brand}`)
//     }
// }

// auto.logAutoBrand()

//! Задание 3
// let circle = {
//     radius: 10,
//     logRadius: function(){
//         console.log(`Радиус круга - ${this.radius}`);
//     }
// }
// circle.logRadius()

//! Задание 4
// let calculator = {
//     num1: +prompt(),
//     num2: +prompt(),
//     logSum: function(){
//         let sum= this.num1 + this.num2
//         console.log('Сумма - ', sum);
//     },
//     logMult: function(){
//         let mult= this.num1 * this.num2
//         console.log('Произведение - ', mult);
//     }
// }
// calculator.logSum()
// calculator.logMult()

//! Задание 5
// function getDayOfWeek() {
//     const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     const dayIndex = this.getDay();
//     return daysOfWeek[dayIndex];
//   }
  
// const today = new Date();
// const currentDayOfWeek = getDayOfWeek.call(today);
// console.log('Сегодня ' + currentDayOfWeek);

//! Задание 6
// let product = {
//     title: 'M&M',
//     price: 65,
//     logInfoAboutProduct: function(){
//         console.log(`Продукт ${this.title} стоит ${this.price} сомов`);
//     }
// }
// product.logInfoAboutProduct()

//! Задание 7
// let animal = {
//     animalName: 'Cat',
//     animalsSound: 'MewUwU',
//     whatSoundDoesAnimalDo: function(){
//         console.log(`${this.animalName} издает звук ${this.animalsSound}`);
//     }
// }
// animal.whatSoundDoesAnimalDo()

//! Доп Задание
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
      
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
    };
    
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
    
    Array.prototype.mySort = function() {
    const length = this.length;
    
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
        if (this[j] > this[j + 1]) {
            const temp = this[j];
            this[j] = this[j + 1];
            this[j + 1] = temp;
        }
        }
    }
    return this;
    };
    
    const unsortedNumbers = [5, 2, 9, 1, 5, 6];
    const sortedNumbers = unsortedNumbers.mySort();
    console.log(sortedNumbers);
      