const t0 = performance.now();

console.log(factorial_for_loop(5))

const t1 = performance.now();
console.log(`Time to complete operation ${
    Math.round((t1 - t0) / 1000)
} seconds.`);
