function CalculateAndLogNumber() {
    let x = 8
    x = x + 20
    x = x + 60

    console.log(x)

}
CalculateAndLogNumber()

//

function calculateNumber(initialValue) {
    let x = initialValue
    x = x + 20
    x = x + 60

    return x
}
const result = calculateNumber(8)
console.log(result)

//

const func = (a, b, c) => {
console.log(a + b + c)
}
func(8, 20, 60)

//

const func =(a, b, c) => {
    return a + b + c
}
console.log(func(8, 20, 60))