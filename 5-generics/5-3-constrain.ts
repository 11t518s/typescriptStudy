interface Employee {
  pay(): void;
}

class FullTimeEmployee<T> implements Employee {
  pay() {
    console.log(`full time`);
  }

  workFullTime() {}
}

class PartTimeEmployee<T> implements Employee {
  pay() {
    console.log(`part time`);
  }

  workPartTime() {}
}

// 추상적인 타입으로 다시 리턴하는 함수는 별로다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const bongsu = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const bongsuAfterpay = pay(bongsu);
const bobAfterPay = pay(bob);

const obj = {
  name: "bongsu",
  age: 26,
};

const obj2 = {
  name: "bongsu2",
  age: 123,
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getValue(obj, "age");
