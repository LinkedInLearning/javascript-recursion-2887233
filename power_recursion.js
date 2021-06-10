// recursion

function expo(base, exponent){
	if (exponent === 0){
		return 1
	}else {
		console.trace()
		return base * expo(base, exponent - 1)
	}

}

console.time("expo-recursion")
// console.profile("exporecu")
console.log(expo(5,6))
console.timeEnd("expo-recursion")
// console.profileEnd("exporecu")

