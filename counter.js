/*
	This function return the number of items in a list
*/
function counter(i, end){
	console.log(`counting from ${i} until ${end}`)
	if (i < end) {
		counter( i + 1, end )	
	}
}

counter(1, 4)