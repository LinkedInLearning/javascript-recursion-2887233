function recursive_fibonnaci(index){
	if (index === 0 || index == 1 ){
		return index
	}else {
		return recursive_fibonnaci(index - 1) + recursive_fibonnaci(index -2)
	}
}

console.log(recursive_fibonnaci(0))
console.log(recursive_fibonnaci(1))
console.log(recursive_fibonnaci(2))
console.log(recursive_fibonnaci(3))
console.log(recursive_fibonnaci(4))
console.log(recursive_fibonnaci(5))
console.log(recursive_fibonnaci(10))