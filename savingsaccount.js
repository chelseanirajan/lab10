"use strict";

class SavingAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.interest = interest;
  }

  get interest() {
    return this._interest;
  }
  set interest(interest) {
    this._interest = interest;
  }
  addInterest() {
    this.deposit((this.getBalance() * this.interest) / 100);
    // return (this.getBalance() * this.interest) / 100;
    // (balance * interest) / 100;
  }
  toString() {
    return (
      "Account " +
      this.getNumber() +
      ": balance " +
      this.getBalance() +
      ": interest " +
      this.interest
    );
  }
  endOfMonth() {
    return `Interest added SavingsAccount ${
      (this.getBalance() * this.interest) / 100
    }: balance: ${this.getBalance()} interest: ${this.interest}`;
  }
}

const savingAccount = new SavingAccount("2345", 10);
savingAccount.deposit(500);
savingAccount.addInterest();
console.log(savingAccount.toString());
console.log("end of the months", savingAccount.endOfMonth());
