function swapElements(array, leftIndex, rightIndex) {
	const temp = array[leftIndex]
	array[leftIndex] = array[rightIndex]
	array[rightIndex] = temp
	return array
}

const testArray = [1,2,3,45,6,7,8,98,32,21]

console.log( swapElements(testArray,  1, 4) )