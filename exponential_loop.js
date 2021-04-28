// loop

function expo_loop_for(base, exponent) {
	let result = 1
	
	for (let i = 1; i <= exponent; i++) {
		result *=  base
	}
	
	return result
}

function expo_loop_while(base, exponent) {
	let result = 1
	let count = 1
	
	while( count <= exponent ){
		result *= base
		count++
	}
	
	return result
}


console.time("expoloop")
console.log(expo(5,6))
console.timeEnd("expoloop")

