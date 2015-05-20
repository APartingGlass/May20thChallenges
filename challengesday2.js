// write a function randomInRange(a,b)
// that returns a random number between a and b
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a, b) {
    return (Math.random() * (Math.max(a, b) - Math.min(a, b))) + Math.min(a, b)

}

var x = randomInRange(5, 100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25, 30)
console.assert(y >= -25 && y <= 30)

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0

function increaseScore(playerScore) {
    return playerScore++
}

function decreaseScore(playerScore) {
    return playerScore--
}

// Challenge one
// 
// Write a function that takes a string as input, and returns a copy of that string reversed.
// 
// remember that:
// - you can get and set characters in a string at specific indices
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a String.reverse() method)

function reverse(str) {
    return str.split('').reverse().join('')
}

console.assert(reverse('hello') === 'olleh')
console.assert(reverse('hello, world') === 'dlrow ,olleh')

// Write a method primes() which returns 
// an array of the first n primes, where 
// n is provided to the method as a 
// parameter.
// 
// Remember that the % operator 
// (modulo) is your friend.  It returns 
// a zero if one number is divisible 
// by another number.  
// 
// In other words, 4 % 2 == 0.

function primes(n) {
    var primeArray = []
    var potential = 1
    while (primeArray.length < n) {
        var prime = true
        for (i = 2; i < potential; i++) {
            if (potential % i === 0) {
                prime = false
            }
        }
        if (prime === true) {
            primeArray.push(potential)
        }
        potential++
    }
    return primeArray
}
    // tests
    // primes(6) --> [1, 2, 3, 5, 7, 11]
console.assert(primes(0).length === 0)
console.assert(primes(1)[0] === 1)
console.assert(primes(2)[1] === 2)
console.assert(primes(3)[2] === 3)
console.assert(primes(6)[5] === 11)

// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
// 
// Palindromes are words that are the same
// going forwards and backwards. Examples:
// 
// i
// dod
// meeteem
// TrickirT

function isPalindrome(x) {
    return (reverse(x) === x)
}

// tests

console.assert(isPalindrome("tacocat") === true)
console.assert(isPalindrome("Tacocat") === false)
console.assert(isPalindrome("racecar") === true)
console.assert(isPalindrome("cowboy") === false)

// // Challenge two
// // 
// // The function below takes the spanish word for
// // the colors red, white, blue, green, and black
// // and returns the hex code for that color.
// // Refactor this function to use metaprogramming
// // instead of an if/else statement to return
// // the hex.

var colorDict = {
    'rojo': "#ff0000",
    'blanco': "#ffffff",
    'azul': "#0000ff",
    'verde': "#00ff00",
    'negro': "#000000"
}

function spanishColor(colorName) {
    return colorDict[colorName.toLowerCase()]
}

console.assert(spanishColor('rojo') === '#ff0000')
console.assert(spanishColor('blanco') === '#ffffff')
console.assert(spanishColor('verde') === '#00ff00')

// // write a method names() 
// // which takes a string of
// // comma-separated names 
// // (first and last) and then 
// // returns an object where each
// // firstname is a key, and each 
// // lastname is a value
// // 
// // i.e. names("George Washington, John Adams, Kanye West")
// //   .. --> {
// //     George: "Washington",
// //     John: "Adams",
// //     Kanye: "West"
// //   }

function names(str) {
    var nameOl = {}
    str.split(', ').forEach(function(v) {
        var full = v.split(' ')
        nameOl[full[0]] = full[1]
    })
    return nameOl
}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")

// // Array.forEach(callback) passes 
// // (value, index, array) to the 
// // callback each iteration
// // 
// // i.e.
// // 
// // function log(v, i){
// //      console.log(v, i)
// // }
// // 
// // ['a', 'b', 'c'].forEach(log)
// // 
// // --> a, 0
// // --> b, 1
// // --> c, 2
// // 
// // Write a function forEach(array, callback)
// // that takes an array and callback function,
// // and passes each (value, index, array) to
// // the callback

function forEach(array, callback) {
    for (i=0;i<array.length; i++) {
    	callback(array[i], i, array)
    }
}

// tests
function IHazValue(value, index, array) {
    console.assert(typeof value !== "undefined")
}
forEach([1, 2, 3], IHazValue)

function IHazIndex(value, index, array) {
    console.assert(typeof index === "number")
}
forEach([1, 2, 3], IHazIndex)

function IHazArray(value, index, array) {
    console.assert(array instanceof Array)
}
forEach([1, 2, 3], IHazArray)
