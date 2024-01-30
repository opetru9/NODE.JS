function typeControl(array) {
    let numbers = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            numbers.push(array[i])
        }
    }
    return numbers
}
module.exports = typeControl