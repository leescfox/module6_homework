const arr = [1, 2, null, 0, NaN, 5, '3', 86]
function oddEvenZeroCount(array) {
    let odd = 0
    let even = 0
    let zeros = 0
    array.forEach((element) => {
        if (typeof element === "number" && isNaN(element) === false) {
            element % 2 === 1 ? odd++ : even++
            if (element === 0) {
                zeros++
            }
        }
    })
    console.log(`Нечётных элементов - ${odd}`)
    console.log(`Чётных(включая нули) - ${even}`)
    console.log(`Нулей - ${zeros}`)
}
oddEvenZeroCount(arr)