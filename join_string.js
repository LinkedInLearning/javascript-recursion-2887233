function join(content, seperatedValue){
	function padContent(index, currentString){
		currentString += content[index]
		if(index === content.length - 1){
			return currentString
		} else {
			console.log(currentString, index, content.length)

			return padContent(index + 1, currentString + seperatedValue)
		}
	}
	return padContent(0, '')
}

console.log( join(['p','h', 'o', 'n', 'e'], '1') )
console.log( join('shinbain', '1') )