const str = 'phanteon'

console.log(str.charAt(4))

const func1 = (index,str) => {
    return str[index]
}

console.log(func1(4, str))

console.log(func1(5,str))
console.log(func1(0,str))
console.log(func1(7,str))