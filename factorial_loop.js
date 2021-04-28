function factorial_for_loop(num) {
	let answer = 1
	if (num == 0 || num === 1) {
		return 1
	} else {
		for ( let i = num; i > 0; i--) {
			answer *= i
			console.log(i)
		}
	}
	return answer
}

function factorial_while_loop(num) {

	let answer = 1
	let counter = num

	if (num == 0 || num === 1) {
		return 1
	} else {
		while( counter > 0 ){
			answer *= counter
			counter--
		}
	}
	return answer
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

const t0 = performance.now();
// console.time("fac")
console.log(factorial(50))
// console.timeEnd("fac")
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);