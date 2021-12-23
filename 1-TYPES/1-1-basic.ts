{
    // javascript
    // let
    let name = 'hello';
    name = 'hi';

    // const
    const test123 ='hello';

    // Primitive : number, string, boolean, bigint, symbol, null, undefined
    // number
    const num : number = 1;

    // string
    const str : string = 'test';

    //boolean
    const boal : boolean = true;

    // undefined
    // 값이 없음 아직 결정되지 않음
    let undname: undefined; // 이렇게는 단독적으로는 안쓰고
    let undage : number | undefined; // 이렇게 쓰는 경우는 있음, 이게 조금 더 보편적
    undage = 1;
    function find(): number | undefined {
        return undefined
    }

    // null
    // 값이 없음, 선언은 됐는데 값은 없음
    let nulperson: null; // 이렇게 단독으로 안씀
    let nulperson2 : string | null; // 이런식으로 쓰는 경우는 있음, 그런데 값이 있거나 없거나면 이게 더 보편적일수도..?

    // unknown
    // 가능하면 쓰지 않는 것이 좋음.. 앵간하면 무조건 타입을 지정해주는것이 좋음
    let notSure : unknown = 0;
    notSure = 'he';
    notSure = true;

    // any
    // 이것도 가능하면 쓰지 않는 것이 좋음
    let anything : any = 0;
    anything = 1;
    anything = 'str';

    // void
    // 함수가 아무런 값도 리턴하지 않을 때
    function print() : void {
        console.log('hello')
    }
    let unusable : void = undefined; // 이렇게 쓸순있는데 안씀

    // never
    // 절대 리턴되면 안됨 절대 아무것도 반환되지 않음
    function throwError(message: string): never {
        throw new Error(message)
        while(true) {

        }
        let neverEnding: never; //이런건 없음
    }

    // object
    // 조금 더 명확하게 타입을 명시해주는게 좋음
    let obj : object; 
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'bong'});
    acceptSomeObject({namianl:'dog'});
    // object : function, array



}