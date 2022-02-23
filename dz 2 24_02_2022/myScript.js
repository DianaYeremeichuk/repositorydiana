//задание 1

// let result = document.getElementById("result")

// document.getElementById("btnStart").onclick = function () {
//
//     result.innerText = "Пользователь щелкнул на кнопку"
//     let userNumber = document.getElementById("userNumber").value
//     console.log("Пользователь ввел: " + userNumber)
//     if (userNumber <= 2) {
//         result.innerText = " Вы являетесь ребенком"
//     }
//     if (userNumber >= 12) {
//         result.innerText = " Вы являетесь подростком"
//     }
//     if (userNumber >= 18) {
//         result.innerText = " Вы являетесь взрослым"
//     }
//     if (userNumber >= 60) {
//         result.innerText = " Вы являетесь пенсионером"
//     }
// }

//задание 2

let result = document.getElementById("result")

document.getElementById("btnStart").onclick = function () {

    result.innerText = "Пользователь щелкнул на кнопку"
    let userNumber = document.getElementById("userNumber").value
    console.log("Пользователь ввел: " + userNumber)
    if (userNumber >= 1) {
        result.innerText = " !"
    }
    if (userNumber >= 2) {
        result.innerText = " @"
    }
    if (userNumber >= 3) {
        result.innerText = " #"
    }
    if (userNumber >= 4) {
        result.innerText = " $"
    }
    if (userNumber >= 5) {
        result.innerText = " %"
    }
    if (userNumber >= 6) {
        result.innerText = " ^"
    }
    if (userNumber >= 7) {
        result.innerText = " &"
    }
    if (userNumber >= 8) {
        result.innerText = " *"
    }
    if (userNumber >= 9) {
        result.innerText = " ("
    }
// как сделать чтобы вводить 0 и не писать >=? пробовала писать просто =

}


