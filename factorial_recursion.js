function recursive_factorial(index){
	if (index === 0){
		return 1
	}else {
		return index * recursive_factorial(index -1)
	}
}

console.log(recursive_factorial(0))

console.log(recursive_factorial(1))
console.log(recursive_factorial(2))
console.log(recursive_factorial(3))
console.log(recursive_factorial(4))
console.log(recursive_factorial(5))

console.time("factorial")
console.log(recursive_factorial(50))
console.timeEnd("factorial")
