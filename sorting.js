function swapElements(array, leftIndex, rightIndex) {
	const temp = array[leftIndex]
	array[leftIndex] = array[rightIndex]
	array[rightIndex] = temp
	return array
}

function partition(arrayPartition, left, right){
	let leftPointer = left
	
	let rightPointer = right
	
	let pivot = arrayPartition[Math.floor((right + left) / 2)]
	// let pivot = arrayPartition[ arrayPartition.length - 1 ]
	
   
    while (leftPointer <= rightPointer) {
      while (arrayPartition[leftPointer] < pivot) {
         leftPointer++;
      };
      while (arrayPartition[rightPointer] > pivot) {
         rightPointer--;
      };
      if (leftPointer <= rightPointer) {
         swapElements(arrayPartition, leftPointer, rightPointer); //sawpping two elements
         leftPointer++;
         rightPointer--;
      };
    };

    // console.log(arrayPartition, pivot, leftPointer, rightPointer)
	return leftPointer;
}

function quickSort  (array, start = 0, end = array.length - 1) {
   let pivot;
   if (array.length > 1) {
      pivot = partition(array, start, end);
      if (start < pivot - 1) {
         quickSort(array, start, pivot - 1);
      };
      if (pivot < end) {
         quickSort(array, pivot, end);
      };
   }
   return array;
}

function quickSorter(array, startIndex = 0, endIndex = array.lenght - 1 ) {

   let pivot;
   
   if (array.length > 1) {

      pivot = partition(array, startIndex, endIndex);
   
      if (startIndex < pivot - 1) {
         quickSorter(array, startIndex, pivot - 1);
      };
   
      if (pivot < endIndex) {
         quickSorter(array, pivot, endIndex);
      };
   }

   return array;
}

const testArray = [6,2,30,45,1,5,8,98,32,21]

console.log( quickSort(testArray) )
// console.log( quickSorter(testArray) )