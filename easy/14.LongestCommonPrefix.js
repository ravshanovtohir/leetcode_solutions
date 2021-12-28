// let string = ""
// let olma = arr[0]
// let yigishtir = 0
// let bool = true
// for (let i = 0; i < arr[0].length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (olma[i] === arr[j][i]) {
//             yigishtir++
//         }

//         if (olma[i] !== arr[j][i]) {
//             bool = false
//         }
//     }
//     if (bool === false) {
//         return string
//     }
//     if (yigishtir == arr.length) {
//         string += olma[i]
//     }
//     yigishtir = 0
// }
// return string




//============================



// function longestCommonPrefix(arr) {
//     let str = ''
//     let solishtirish2 = arr[0]
//     let sum = 0
//     let check = true
//     for (let a = 0; a < arr[0].length; a++) {
//         for (let b = 0; b < arr.length; b++) {
//             if (solishtirish2[a] === arr[b][a]) {
//                 sum++
//             }
//             if (solishtirish2[a] != arr[b][a]) {
//                 check = false
//             }
//         }
//         if (check === false) return str
//         if (sum == arr.length) str += solishtirish2[a]
//         sum = 0
//     }
//     return str
// }