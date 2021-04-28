function swapElements(array, leftIndex, rightIndex) {
	const temp = array[leftIndex]
	array[leftIndex] = array[rightIndex]
	array[rightIndex] = temp
	return array
}

function partition(array, left, right){
	let leftPointer = left
	
	let rightPointer = right
	
	// let pivot = array[Math.floor((right + left) / 2)]
	let pivot = array[ array.length - 1 ]
	
   
  while (leftPointer <= rightPointer) {
    
    while (array[leftPointer] < pivot) {
         leftPointer++;
    };
    
    while (array[rightPointer] > pivot) {
         rightPointer--;
    };
    
    if (leftPointer <= rightPointer) {
        swapElements(array, leftPointer, rightPointer); //sawpping two elements
        leftPointer++;
        rightPointer--;
    };
  
  };
    
  console.log(array, pivot, leftPointer, rightPointer)
	return leftPointer;
}

const testArray = [6,2,30,45,1,5,8,98,32,21]
// const testArray = [0, 5, 2, 1, 6, 3]

console.log( partition(testArray,  0, 6) )