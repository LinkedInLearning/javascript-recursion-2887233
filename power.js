function power(base, exponent){
    let result = 1;
    
    for(let i = 1; i <= exponent; i++){
        result *= base;
    }
    return result;
}