//one interface, many forms

class Animal {
    makeSound() {
        console.log("Animal make a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

let d = new Dog();
let c = new Cat();
d.makeSound();
c.makeSound();