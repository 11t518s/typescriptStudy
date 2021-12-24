{
    function checkNotNull(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number')
        }
        return arg
    }
    function checkNotNullGeneric<T>(arg: T | null): T{
        if(arg == null) {
            throw new Error('not valid number')
        }
        return arg
    }
}