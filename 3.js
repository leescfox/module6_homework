function getNum(firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber
    }
}
console.log(getNum(8)(6)) //вау!