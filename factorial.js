function factorial(position) {
    let answer = 1;

    for(let num = position; num > 0; num--){
        answer *= num;
    }
    return answer;
}