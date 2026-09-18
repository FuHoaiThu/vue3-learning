import { describe, it, expect, test } from 'vitest'
import { getShippingFee } from './getShippingFee'

describe('getShippingFee', () => {
  it('should return 0 when total is 0', () => {
    expect(getShippingFee(0)).toBe(0)
  })

  it('should return 50 when total is 200', () => {
    expect(getShippingFee(200)).toBe(50)
  })

  it('should return 30 when total is 500', () => {
    expect(getShippingFee(500)).toBe(30)
  })

  it('should return 30 when total is 999', () => {
    expect(getShippingFee(999)).toBe(30)
  })

  it('should return 0 when total is 1000', () => {
    expect(getShippingFee(1000)).toBe(0)
  })
  test.each([
    {
      total: 0,
      expected: 0,
    },
    {
      total: 200,
      expected: 50,
    },
    {
      total: 500,
      expected: 30,
    },
    {
      total: 999,
      expected: 30,
    },
    {
      total: 1000,
      expected: 0,
    },
  ])('should return $expected when total is $total', ({ total, expected }) => {
    expect(getShippingFee(total)).toBe(expected)
  })
})
