import { describe, it, vi, expect } from 'vitest'
import { fetchProduct } from './product'

describe('fetchProduct', () => {
  it('should return product when API succeeds', async () => {
    const getProductApi = vi.fn().mockResolvedValue({
      data: {
        id: 1,
        name: 'Laptop',
        price: 1000,
      },
    })
    const result = await fetchProduct(getProductApi)
    expect(result.name).toBe('Laptop')
    expect(getProductApi).toHaveBeenCalled()
  })
  it('should return null when API fails', async () => {
    const getProductApi = vi.fn().mockRejectedValue(new Error('Fail to fetch product'))
    const result = await fetchProduct(getProductApi)
    expect(result).toBe(null)
  })
})
