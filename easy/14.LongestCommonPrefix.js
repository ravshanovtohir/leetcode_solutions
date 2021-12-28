let string = ""
let olma = arr[0]
let yigishtir = 0
let bool = true
for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (olma[i] === arr[j][i]) {
            yigishtir++
        }

        if (olma[i] !== arr[j][i]) {
            bool = false
        }
    }
    if (bool === false) {
        return string
    }
    if (yigishtir == arr.length) {
        string += olma[i]
    }
    yigishtir = 0
}
return string