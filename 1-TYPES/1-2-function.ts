{
    // // javascript
    // function jsAdd(num1, num2) {
    //     return(num1 + num2)
    // }
    //
    // // typescript
    // function Add(num1: number, num2: number): number {
    //     return(num1 + num2)
    // }
    //
    // // javascript
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }
    //
    // // Typescript
    // function FetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // JavaScript => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('steve', 'jobs')
    printName('bong')

    // default parameter
    function printMessage(message: string = 'default message') {
        console.log(message)
    }
    printMessage()


    // rest parameter
    const addNumbers = (...numbers: number[]): number => {
        return numbers.reduce((acc,cur) => acc + cur);
    }

    console.log(addNumbers(1,2,3))
}