import { describe, it, expect, beforeEach } from 'vitest'
import { BankAccount } from './bankAccount'
describe('Bank Account', () => {
  let account
  beforeEach(() => {
    account = new BankAccount()
  })
  it('check the default value of balance', () => {
    expect(account.getBalance()).toBe(0)
  })
  it('Check the value of the balance after calling the deposit function.', () => {
    account.deposit(500)
    expect(account.getBalance()).toBe(500)
  })
  it('Check the value of `balance` when `amount` <= `balance`.', () => {
    account.deposit(500)
    account.withdraw(200)
    expect(account.getBalance()).toBe(300)
  })
  it('Check the value of `balance` when `amount` > `balance`.', () => {
    account.deposit(500)
    account.withdraw(600)
    const result = account.withdraw(600)
    expect(result).toBe(false)
    expect(account.getBalance()).toBe(500)
  })
})
