{
    // Union Types: OR

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction)
    }
    move('right')

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // function : login => success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason : string;
    }

    type LoginState = SuccessState | FailState
    function login(): LoginState {
        return {
            response: {
                body: 'login'
            }
        }
    }

    function printLoginState(state: LoginState) {
        if('response' in state) { // 근데 이건 안좋은 방식임
            console.log(state.response.body)
        } else {
            console.log(state.reason)
        }
    }
}