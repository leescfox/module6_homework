function checkSimplicity(number) {
    let simplicity = true
    if (number < 1000 && number > 1 && typeof number === "number" && !isNaN(number)) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                simplicity = false
                break
            }
        }
        simplicity ? console.log(`Число ${number} - простое.`) : console.log(`Число ${number} - составное.`)
    } else {
        console.log('Введённые данные неверны.')
    }
}
checkSimplicity() // <- сюда писать чиселку