/**
 * @param {number} n
 * @return {number}
 */


function fibo(position) {
    let cache = {}

    if (cache[n]) {
        return cache[n]
    }

    let result = position
    if (position < 2) {
        result = position
    } else {

        result = fib(position - 1) + fib(position - 2)
    } cache[position] = result

    return result
}

let d2 = new Date()
console.log("fibo : " + fibo(50))
console.log(new Date() - d2)
