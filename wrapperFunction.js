function addition(firstOperand, secondOperand){
	return firstOperand + secondOperand
}

function multiplication(firstOperand, secondOperand){
	return firstOperand * secondOperand
}

function subtraction(firstOperand, secondOperand){
	return firstOperand / secondOperand
}

function division(firstOperand, secondOperand){
	return firstOperand / secondOperand
}

function isCommuntative(testFunction, testOperandOne, testOperandTwo){
	const firstResult = testFunction(testOperandOne, testOperandTwo)
	const secondResult = testFunction(testOperandTwo, testOperandOne)

	return firstResult == secondResult
}