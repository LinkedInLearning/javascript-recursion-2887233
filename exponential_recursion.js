// recursion

function power(base, exponent) {
    if (exponent === 0) {
        return 1
    } else {
        console.trace()
        return base * expo(base, exponent - 1)
    }

}


const t0 = performance.now();

console.log(power(5, 4))

const t1 = performance.now();
console.log(`Time to complete operation ${
    Math.round((t1 - t0) / 1000)
} seconds.`);
