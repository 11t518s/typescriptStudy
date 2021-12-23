{
    // type assertions
    // 권장하진 않음
    // 그런데 불가피하게 사용할 떄가

    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length)
    console.log(<string>result.length)

    function findNumbers(): number[] | undefined {
        return undefined
    }

    const numbers = findNumbers();
    numbers!.push(2)
}