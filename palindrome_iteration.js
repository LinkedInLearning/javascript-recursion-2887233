
function isPalindrome(phrase){
	const size = phrase.length

	for (let i = 0; i < size / 2; i++) {
		if (phrase[i] !== phrase[size - 1 -i]){
			console.log(`${i} ==> ${phrase[i]} : ${size - 1  - i} ==> ${phrase[size - 1  - i] }`)
			return false
		}
	}
	return true
}

console.log("motor: " +  isPalindrome("motor"))
console.log("rotor: " +  isPalindrome("rotor"))
console.log("a man a plan a canal panama:" +  isPalindrome("amanaplanacanalpanama"))