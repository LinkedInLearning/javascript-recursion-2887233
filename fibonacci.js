function fibo(index) {
    if (index === 0 || index == 1) {
        return index
    } else {
        return fibo(index - 1) + fibo(index - 2)
    }
}


let d1 = new Date()
console.log("fibo: " + fibo(50))
console.log(new Date() - d1)
