// Условия - if else

// let age = prompt('Сколько вам лет?', '');

// if (age < 18) {
//     alert('Рановато еще');
// } else if (age > 100) {
//     alert('Поздновато уже', '');
// } else {
//     alert('Вы можете войти');
// }

// Switch case

// switch (age) {
//     case '18':
//         alert('Вы можете войти');
//         break;
//     case '100':
//         alert('Поздновато уже');
//         break;
//     default:
//         alert('Значение не известно');
// } // ответы выводит на экран

// Пример правильного кода без alert

// let expr = prompt('What do you want to buy?')
//
// switch (expr) {
//     case "Oranges":
//         console.log("Oranges are $0.59 a pound.");
//         break;
//     case "Apples":
//         console.log("Apples are $0.32 a pound.");
//         break;
//     case "Bananas":
//         console.log("Bananas are $0.48 a pound.");
//         break;
//     case "Cherries":
//         console.log("Cherries are $3.00 a pound.");
//         break;
//     case "Mangoes":
//     case "Papayas":
//         console.log("Mangoes and papayas are $2.79 a pound.");
//         break;
//     default:
//         console.log("Sorry, we are out of " + expr + ".");
// }
//
// console.log("Is there anything else you'd like?"); // ответы выводит в консоль

// Цепочки case

var Animal = 'Giraffe';
switch (Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log('This animal is not extinct.');
        break;
    case 'Dinosaur':
    default:
        console.log('This animal is extinct.');
}