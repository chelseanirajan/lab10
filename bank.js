"use strict";
class Bank {
  constructor() {
    this.arrayBank = [];
  }
  addAccount() {
    const acc = new Account(Bank.nextNumber());
    this.arrayBank.push(acc);
    return acc;
  }
  addSavingsAccount(interest) {
    const savAcc = new SavingAccount(Bank.nextNumber(), interest);
    this.arrayBank.push(savAcc);
    return savAcc;
  }
  addCheckingAccount(overdraft) {
    const checAccc = new CheckingAccount(Bank.nextNumber(), overdraft);
    this.arrayBank.push(checAccc);
    return checAccc;
  }
  closeAccount(number) {
    const objWithIdIndex = this.arrayBank.findIndex(
      (obj) => obj._number === number
    );
    this.arrayBank.splice(objWithIdIndex, 1);
    console.log("ffff", this.arrayBank);
    return this.arrayBank;
  }

  accountReport() {
    return this.arrayBank.map((m) => m).join("\n");
    // return this.arrayBank[0].toString();
    // for (let i of this.arrayBank) {
    //   ps.concat(this.arrayBank[i].toString());
    // }
  }
  static nextNumber() {
    return Math.trunc(Math.random() * 10000);
  }
  endOfMonth() {
    return this.accountReport();
  }
}
// const accounts1 = new Account("001");
// const chAccou = new CheckingAccount("002");
// console.log("=+++++", accounts1.toString());
const bank = new Bank();
bank.addAccount();
bank.addCheckingAccount();
bank.addSavingsAccount(12);
console.log(bank.arrayBank);
// bank.closeAccount("222");
console.log(bank.accountReport());
