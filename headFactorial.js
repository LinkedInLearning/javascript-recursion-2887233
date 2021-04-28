function headFactorial(index){
 if (index === 0)
    return 1
 else{
     console.trace()
     return index * headFactorial(index -1)       
 }
}


console.time("headFactorial") // start timer
console.log( headFactorial(50) )
console.timeEnd("headFactorial") // stop timer
