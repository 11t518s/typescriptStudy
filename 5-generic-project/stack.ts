////////////////////////////////////////////////////////////

interface Stack {
  readonly size: number;

  push(value: string): void;

  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private head?: StackNode;

  constructor(private capacity: number) {}

  private _size: number = 0;

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(5);
stack.push("bong1");
stack.push("123");
stack.push("4324234");

while (stack.size !== 0) {
  console.log(stack.pop());
}
