// let admin, name; // можно объявить две переменные через запятую
//
// name = "Джон";
//
// admin = name;
//
// alert(admin); // "Джон"
//
//
// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы
//
// const age = someCode(BIRTHDAY); // не использовать заглавные буквы
//
//
// let $ = 1; // объявили переменную с именем "$"
// let _ = 2; // а теперь переменную с именем "_"
//
// alert($ + _); // 3
//
// let myName = "Diana";
// let myAge = 21;
// let myMessage = "My name is";
// alert(myName + myAge + myMessage);

// // Урок 3

// let modal;
// console.log(modal); // undefined
// console.log(myAge); //21

// console.log(4 / 0); // Infinity
// console.log(-4 / 0); // -Infinity , тип данных - простые тип

// console.log("string" * 9); // NaN - not a number

// console.log(2 + 2 == 4); // true

// console.log("4" == 4); // true

// console.log("4" === 4); // false потому что сравнение идет по типу данных
//
// console.log(4 + "4"); // 44 , если мы что то складываем со строкой, то все выражение складывается в строку

let x = 5;
// x = x + 1; // варианты записи
// x += 1; // варианты записи
// x++; // инкримент ++ - добавляет +1 к предыдущему значению // 4
// x--; // забирает -1
// console.log(x); // 6

// alert(1); // 1
// confirm("Вам есть 18 лет?"); // ок или отмена

// let answer = confirm("Вам есть 18 лет?");
// console.log(answer); // сначала выполняется confirm и если нажали ок, то это будет true ответ в answer
//
// let answer = prompt("Вам есть 18 лет?", "");
// console.log(answer); // выводится ответ который напишет пользователь
// // если пользователь нажмет отмена, то в консоли будет null

let answers = []; // наш массив с ответами и он пока пустой

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет", "");

document.write(answers); // получили ответы через запятую на страничке
// console.log(answers); // получили ответы в консоли











