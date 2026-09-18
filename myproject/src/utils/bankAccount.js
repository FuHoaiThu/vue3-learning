export class BankAccount {
  constructor() {
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    if (amount > this.balance) return false

    this.balance -= amount
    return true
  }

  getBalance() {
    return this.balance
  }
}