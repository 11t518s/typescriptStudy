// Array;

type Student = {
  passed: boolean;
};

const student: Student[] = [{ passed: true }, { passed: false }];

console.log(student.every((student) => student.passed));
console.log(student.some((student) => student.passed));

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = true;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
