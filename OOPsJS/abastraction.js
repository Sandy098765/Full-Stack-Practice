// Example without Abstraction
// class CoffeeMachine {
//  boilWater() {
//     console.log("Boiling water");
//  }

//  addCoffee() {
//     console.log("Adding coffee");
//  }

//  addMilk() {
//     console.log("Adding milk");
//  }
 
//  serveCoffee() {
//     console.log("Serving coffee");
//  }
// }
// const machine = new CoffeeMachine();

// machine.boilWater();
// machine.addCoffee();
// machine.addMilk();
// machine.serveCoffee();


//Without abstraction
 class CoffeeMachine {
 boilWater() {
    console.log("Boiling water");
 }

 addCoffee() {
    console.log("Adding coffee");
 }

 addMilk() {
    console.log("Adding milk");
 }
 
 makingCoffee() {
    this.boilWater();
    this.addCoffee();
    this.addMilk();
    console.log("Coffee is ready!");
 }
}
const machine = new CoffeeMachine();
machine.makingCoffee();

