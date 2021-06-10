function sum( start, end ){
    function addNext( newStart, currentSum ){
        if ( newStart > end ){
            return currentSum
        }
        else {
            return addNext(newStart + 1, newStart + currentSum)
        }
    }
    return addNext( start, 0 )
}

console.log( sum( 2, 5) )