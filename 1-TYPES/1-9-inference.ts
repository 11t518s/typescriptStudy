{
    // type inference
    // 그냥 명확하게 작성해주는게 좋음
    // 원시타입같은거는 생략해줘도 괜츈
    let text = 'hello';
    function print(message: string) {
        console.log(message)
    }

    function add(x:number, y: number) {
        return x+y;
    }
}