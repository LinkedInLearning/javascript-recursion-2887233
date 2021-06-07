function fibo(index) {
    let previousNumber = 0
    let lastNumber = 1
    let currentNumber

    let count = 0

    let fiboSequence = []

    while (count < index) {
        fiboSequence.push(previousNumber)

        currentNumber = previousNumber + lastNumber
        previousNumber = lastNumber
        lastNumber = currentNumber

        count++ // step
    }
    return fiboSequence
}

console.table(fibo(30))
