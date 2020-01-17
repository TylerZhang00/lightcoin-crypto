let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
    console.log("test", this.account);
  }
  commit() {
    console.log("test2", this.account.balance);
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {
  get value() {
    // console.log("test3", this.amount);
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    // console.log("test3", this.amount);
    return -this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount.balance);
