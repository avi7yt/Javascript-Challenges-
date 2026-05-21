// Part 1: Challenge Progression
// Level 1 — Object Fundamentals

// 1. Student Object
const student = {
    name: 'Rohit',
    age: 20,
    course: 'CSE'
}
console.log(`My name is Avi and I study ${student.course}.`);

// 2. Update Property
student.course = 'AI & ML';

// 3. Add Property
student.college = 'ABES Engineering College';
console.log(student);

// 4. Delete Property
delete student.age;
console.log(student);

// 5. Check Property
const isPropertyExist = (obj,prop) => {
    const properties = Object.keys(obj);
    if (properties.includes(prop)) {
        return true;
    }
    return false;
}
console.log(isPropertyExist(student, 'name'));

// Level 2 — Methods and this
// 6. Person Method
const person = {
    firstName: "Avi",
    lastName: "Vishwakarma",
    fullName() {
        return `${this.firstName} ${this.lastName}`;

    }
}
console.log(person.fullName());

// 7. Bank Account
const bankAccount = {
    name: "Rohit",
    age: 20,
    balance: 1000,
    email: "rohit@gmail.com",
    'adhar-number': 20384857685493,
    'acc-number': 29903484858594,
    deposit: function (amt) {
        this.balance += amt;
        return `Hi ${this.name} ₹${amt} is deposited in your bank ${this["acc-number"]} and your current balance is ₹${this.balance}.`;
    },
    withdraw: function (amt) {
        this.balance -= amt;
        return `Hi ${this.name} ₹${amt} is withdrawn from your bank ${this["acc-number"]} and your current balance is ₹${this.balance}.`;
    },
    getBalance: function () {
        return `Currently your balance is ₹${this.balance}`;
    }
};

console.log(bankAccount.deposit(5000));
console.log(bankAccount.withdraw(1000));
console.log(bankAccount.getBalance());

// 8. Counter Object
const Counter = {
    count: 0,
    increment: function (num) {
        return `count: ${this.count += num}`;
    },
    decrement: function (num) {
        return `count: ${(this.count -= num)}`;
    },
    
    reset: function () {
        this.count = 0;
        return `reset: ${this.count}`
    }
};
console.log(Counter.increment(50));
console.log(Counter.decrement(10));
console.log(Counter.reset());


