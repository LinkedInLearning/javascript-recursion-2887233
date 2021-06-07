function fibo( n ){
    if ( n === 0 || n === 1 ) {
        return n
    }
    else {
        return fibo( n- 1 ) + fibo( n - 2 )
    }
}

console.log ( fibo ( 5 ) )
console.log ( fibo ( 10 ) )
console.log ( fibo ( 20 ) )