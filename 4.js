function numbersInInterval(start, finish) {
    const intervalId = setInterval(function () {
        if (start > finish) {
            clearInterval(intervalId)
        } else {
            console.log(start)
            start++
        }
    }, 1000)
}
numbersInInterval(5, 9) // <- сюда вводить чиселки
