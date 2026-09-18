import { describe, it, expect, test } from 'vitest'
import { calculateDiscount } from './calculateDiscount'

describe('calculateDiscount', () => {
  // it('should return 0 if price is less than or equal to 0', () => {
  //   expect(calculateDiscount(0, 10)).toBe(0)
  // })
  // it('should return the original price if discountPercent is less than or equal to 0', () => {
  //   expect(calculateDiscount(200, 0)).toBe(200)
  // })
  // it('should return 0 if discountPercent is greater than or equal to 100', () => {
  //   expect(calculateDiscount(200, 101)).toBe(0)
  // })
  // it('should return the correct discounted price for valid inputs', () => {
  //   expect(calculateDiscount(200, 10)).toBe(180)
  // })

  test.each([
    [0, 10, 0],
    [200, 0, 200],
    [200, 101, 0],
    [200, 10, 180],
  ])('calculateDiscount(%i, %i) should return %i', (price, discountPercent, expected) => {
    expect(calculateDiscount(price, discountPercent)).toBe(expected)
  })
})
