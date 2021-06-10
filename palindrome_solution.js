
function isPalindrome( phrase ) {

	let size = phrase.length
    
    if (size == 0 || size == 1){
        return true;
    } else {
        if (phrase[0] !== phrase[size - 1]){
            return false;
        } else {
        	const convergingString = phrase.substr(1, size - 2)
        	console.log( convergingString )
            return isPalindrome( convergingString );
        }
    }
}

console.log("motor: " +  isPalindrome("motor"))
console.log("rotor: " +  isPalindrome("rotor"))
console.log("a man a plan a canal panama:" +  isPalindrome("amanaplanacanalpanama"))