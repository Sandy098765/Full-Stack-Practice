class BankBalance {
    #balance;
    constructor(balance) {
    this.#balance = balance;
    }

    getBalance() {
    return this.#balance;
    }

    
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited : ${amount}`);
    }

}

let b = new BankBalance(2000);
b.deposit(500);
console.log(b.getBalance());

