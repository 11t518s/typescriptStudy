// {
//   const x = {};
//   const y = {};
//   console.log(x);
//   console.log(y);
//   console.log(x.toString());
//   console.log(x.__proto__ === y.__proto__);
//
//   const array = [];
//   console.log(array);
//
//   function CoffeeMachine(beans) {
//     this.beans = beans;
//     // instance member level
//     // this.makeCoffee = (shots) => {
//     //   console.log("making");
//     // };
//   }
//
//   // prototype level
//   CoffeeMachine.prototype.makeCoffee = function (shots) {
//     console.log("making");
//   };
//   const machine1 = new CoffeeMachine(10);
//   const machine2 = new CoffeeMachine(20);
//
//   console.log(machine1);
//   console.log(machine2);
//
//   function LatteMachine(milk) {
//     this.milk = milk;
//   }
//
//   LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
//   LatteMachine.prototype.makeCoffee();
//   const latteMachine = new LatteMachine(123);
//   latteMachine.makeCoffee();
//   console.log(latteMachine);
// }
