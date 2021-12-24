interface Stack1 {
    push(value: any): void;
    pop(): any;
    getCurrentList(): any[];
}


class stack1 implements Stack1 {
    constructor(private readonly stackItem: any, private STACK_ARRAY: any[]) {
    }
    push(stackItem: any) {
        this.STACK_ARRAY = [stackItem, ...this.STACK_ARRAY]
    }

    pop() {
        const popedValue = this.STACK_ARRAY[0];
        this.STACK_ARRAY = this.STACK_ARRAY.slice(2,this.STACK_ARRAY.length);
        return popedValue
    }
    getCurrentList() {
        return this.STACK_ARRAY
    }
}

const testStack = new stack1(2,[])
testStack.push('123123')
console.log(testStack.getCurrentList())


////////////////////////////////////////////////////////////

interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size() {
        return this._size
    }

    constructor(private capacity: number) {}

    push(value: string) {
        if (this.size === this.capacity) {
            throw new Error('Stack is full')
        }
        const node: StackNode = {
            value,
            next: this.head
        }
        this.head = node;
        this._size++;
    }

    pop(): string {
        if(this.head == null) {
            throw new Error('Stack is empty!')
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value
    }
}


const stack = new StackImpl(5);
stack.push('bong1');
stack.push('123');
stack.push('4324234');


while(stack.size !== 0) {
    console.log(stack.pop())
}