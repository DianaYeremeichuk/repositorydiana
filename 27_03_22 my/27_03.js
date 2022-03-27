// var foo = 42; // сейчас foo типа Number
// foo = "bar"; // а теперь foo типа String
// foo = true;  // foo становится типа Boolean

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// } // цифры от 0 до 9 в столбик

// // Вариант цикла №1
// let answers = [], // наш массив // тут запятая чтобы не писать много раз let
//     questions = [
//         "Как ваше имя?", // ставим запятую так как это массив
//         "Как ваша фамилия?",
//         "Сколько вам лет"
//     ];
//
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i], "");
// }
//
// document.write(answers); // получили ответы через запятую на страничке
// // console.log(answers); // получили ответы в консоли
// // questions.length - количество элементов в массиве // i < чем кол-во элементов в массиве, то цикл закончится
// // prompt(questions[i], ""); - задаем вопрос
// // answers[i] - помещаем ответ в каждый элемент массива по порядку


// // Вариант цикла № 2 - сначала что то делаем, потом что то проверяем
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10); // получили в консоли цифры от 0 до 9

//dz
// let answers = [], // наш массив // тут запятая чтобы не писать много раз let
//     questions = [
//         "Как ваше имя?", // ставим запятую так как это массив
//         "Как ваша фамилия?",
//         "Сколько вам лет"
//     ];
//
// let i = 0;
// do {
//     answers[i] = prompt(questions[i], "");
//     console.log(answers[i]);
//     i++;
// } while (i < questions.length);
// document.write(answers);


// // Вариант цикла № 2 - предысловие, сначала проверяем, потом выполняем
// let i = 0;
// while (i < 10) {
//     console.log(i); //0
//     i++; //10
// }


// dz не получилось
let answers = [], // наш массив // тут запятая чтобы не писать много раз let
    questions = [
        "Как ваше имя?", // ставим запятую так как это массив
        "Как ваша фамилия?",
        "Сколько вам лет"
    ];

let i = 0;
while (i < questions.length[i]) {
    answers[i] = prompt(questions[i], "");
    console.log(answers[i]);
    i++
}
document.write(answers);


