function tailFactorial(n, a = 1) {
    if (n === 0) 
        return a
    
    console.trace()
    return tailFactorial(n - 1, n * a)
}

// you can also test time perfomance with code in the execution_time_test.js
