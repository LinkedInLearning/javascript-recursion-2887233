function recursive_factorial(index) {
    if (index === 0) {
        return 1
    } else {
        return index * recursive_factorial(index - 1)
    }
}

console.log(recursive_factorial(0))

console.log(recursive_factorial(1))
console.log(recursive_factorial(2))
console.log(recursive_factorial(3))
console.log(recursive_factorial(4))
console.log(recursive_factorial(5))


console.log(recursive_factorial(50))


const t0 = performance.now();

console.log(recursive_factorial(5))

const t1 = performance.now();
console.log(`Time to complete operation ${
    Math.round((t1 - t0) / 1000)
} seconds.`);
