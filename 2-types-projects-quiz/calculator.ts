/**
 * Let's make a calculator 🧮
 */

type CalculatorCommand = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

const calculate = (command: CalculatorCommand, firstNum: number, secondNum: number) => {
    // if (command === 'add') {
    //     return firstNum + secondNum
    // } else if (command === 'substract') {
    //     return firstNum - secondNum
    // } else if (command === 'multiply') {
    //     return firstNum * secondNum
    // } else if (command === 'divide') {
    //     return firstNum / secondNum
    // } else if (command === 'remainder') {
    //     return firstNum % secondNum
    // }
    switch (command) {
        case 'add':
            return firstNum + secondNum
        case 'substract':
            return firstNum - secondNum
        case 'multiply':
            return firstNum * secondNum
        case 'divide':
            return firstNum / secondNum
        case 'remainder':
            return firstNum % secondNum
        default:
            throw new Error('unknown command')
        }

}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

