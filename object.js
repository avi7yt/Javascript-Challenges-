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

// 💡 Level 2 — Methods and this
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

// 💡Level 3 — Object.keys, values, entries

// 9. Print All Keys
const library = {
  "staff-member": ["rama tiwari", "suniil obraoi", "raghvendra teju"],
  NumberOfBooks: 10000,
  CategoriesOfBooks: {
    "major fiction categories": [
      "Romance",
      "Fantasy",
      "Science Fiction",
      "Mystery & Thriller",
      "Historical Fiction",
    ],
    "major non-fiction categories": [
      "Biography & Memoi",
      "Self-Help & Wellness",
      "true crime",
      "history",
    ],
  },
  numberOfSeats: {
    refenceSection: 100,
    individualZone: 500,
  },
};

const allKeysOfObject = Object.keys(library);
console.log(allKeysOfObject);
const allValuesOfObject = Object.values(library);
console.log(allValuesOfObject);
const entriesOfObject = Object.entries(library);
console.log(entriesOfObject);

// Level 4 — Object.freeze() and Object.seal()

// 12. Freeze an Object
Object.freeze(library);

// 13. Seal an Object
// Object.seal(library);
library.newProperty = "add new property";
library.CategoriesOfBooks = "changed"
delete library.CategoriesOfBooks;
console.log(library);

// Additional operation
// find only searched books
const books = Object.values(library["CategoriesOfBooks"]).flat(2);
const searchedBooks = (search) => {
    const result = books.filter((book) => {
        if (book.toLowerCase().includes(search)) {
            return book;
        }
    });
    return result;
};

const fictionBook = searchedBooks("fiction");
console.log(fictionBook);











