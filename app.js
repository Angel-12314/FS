// operators
var a=2
var b=10

//Arithmetic operators

console.log('a + b =', a+b)
console.log('a - b =', a-b)
console.log('a / b =', a/b)
console.log('a * b =', a*b)
console.log('a ** b =', a**b)
console.log('a % b =', a%b)

// Assignment Operators
console.log('b', b)
b +=10
console.log('b', b)
b++
console.log('b', b)
b--
console.log('b', b)

var c=10

console.warn(c++)
console.log(c)
//console.warn(++c)

//Comparision Operators

var d = 10
var e = 2
var f ='10'

console.log(d > e)
console.log(d < e)
console.log(d >= e)
console.log(d <= e)
console.log(d == e)

console.warn(d == f)
console.warn(d === f)

//Logical operators

console.log('true && true',true && true)
console.log('true && false',true && false)
console.log('false && true',false && true)
console.log('false && false',false && false)

console.log('true || true ',true || true)
console.log('true || false',true || false)
console.log('false || true',false || true)
console.log('false || false',false || false)