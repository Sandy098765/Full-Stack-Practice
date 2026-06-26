// class Employee {
//     constructor(name, age, role){
//         this.name=name;
//         this.age=age;
//         this.role=role;
//     }
//     dispaly(){
//         console.log("Employee name is:", this.name);
//         console.log("Employee age is:", this.age);
//         console.log("Employee role is:", this.role);
//     }
        
//     desgination(){
//         console.log("Employer")
//     }

// }

// class Developer extends Employee {
//     work(){
//         console.log("I do coding");
//     }

// }

// class Tester extends Employee {
//     work(){
//         console.log("I do debugging");
//     }

// }



// let d = new Developer("Anu", 21, "Developer");
// d.dispaly();
// d.work();
// d.desgination("JavaScript developer");
// console.log();

// let t = new Tester("Anushka", 19, "Tester");
// t.dispaly();
// t.desgination("Tester");
// t.work();
// console.log();

// //Method Overriding
// class Parent {
//     marry() {
//         console.log("Marry at 28");
//     }
// }
// class child extends Parent {
//     marry(){
//         console.log("Marry at 38");
//     }
// }


//Types of inhertance
//1) Single Inheritance
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }
// let d = new Dog();
// d.eat()
// d.bark();  

//2)Multilevel Inheritance
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// class Puppy extends Dog {
//     cry() {
//         console.log("Crying");
//     }
// }

// let puppy = new Puppy();
// puppy.eat();
// puppy.bark();
// puppy.cry();

//3)Hierarchical Inheritance
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }
 
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// class Cat extends Animal {
//      meow() {
//         console.log("Meowing");
//      }
// }

// let d = new Dog();
// let c = new Cat();

// d.eat();
// d.bark();

// c.eat();
// c.meow();

//4)Hybrid Inheritance

// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// class Puppy extends Dog {
//     cry() {
//         console.log("Crying");
//     }
// } 

// class Cat extends Animal {
//     meow() {
//         console.log("Meowing");
//     }
// }

// let d = new Dog();
// d.eat();
// d.bark();


// let p = new Puppy();
// p.eat();
// p.cry();
// p.bark();

// let c = new Cat();
// c.eat();
// c.meow();


//Super Keyword
class Parent {
    constructor(name) {
        this.name = name;
    }

    marry(){
        console.log("Marry at 28.");
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    marry() {
        super.marry();
        console.log("Marry at 23.");
    }
}
let c = new Child("Anu", 21);
console.log(c.name);
console.log(c.age);
c.marry();