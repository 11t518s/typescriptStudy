////////////////////////////////////////////////////////////
{
  interface IStack<T> {
    readonly size: number;

    push(value: T): void;

    pop(): T;
  }

  type TStackNode<T> = {
    readonly value: T;
    readonly next?: TStackNode<T>;
  };

  class StackImpl<T> implements IStack<T> {
    private head?: TStackNode<T>;

    constructor(private capacity: number) {}

    private _size: number = 0;

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full");
      }
      const node: TStackNode<T> = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("IStack is empty!");
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
}

////
{
  interface IStack<T> {
    readonly size: number;

    push(value: T): void;

    pop(): T;
  }

  type TStackNode<T> = {
    readonly value: T;
    readonly next?: TStackNode<T>;
  };

  class StackImpl<T> implements IStack<T> {
    private head?: TStackNode<T>;

    constructor(private capacity: number) {}

    private _size: number = 0;

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full");
      }
      const node = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(5);
  stack.push("bong1");
  stack.push("123");
  stack.push("4324234");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(5);
  stack2.push(1);
  stack2.push(123);
  stack2.push(4324234);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
