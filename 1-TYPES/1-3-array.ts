{
    // Array
    // 아래 두가지 방법으로 정의함
    const fruits: string[] = ['tomatos', 'bananas'];
    const scores: Array<number> = [1,2,3];
    function printArray(fruits: readonly string[]) {} // 이렇게 readonly해주려면 string[]해줘야됨
    // readonly 는 불변성을 보장하기 때문에 string[]으로 해주면 좋을듯!
    function printArray2(fruits: readonly Array<number>) {} // 이건 에러남

    // Tuple => interface, type alias, class 같은걸로 해주는게 더 좋음
    // 권장 되지 않음
    let student: [string, number];
    student = ['name', 3];
    // 인덱스로 이렇게 하는거는 가독성이 많이 떨어짐 ㅠㅠ
    student[0]
    student[1]

    const [name, age] = student; // 이렇게 desturecting 할 수도 있음 근데 선호하지 않음


}