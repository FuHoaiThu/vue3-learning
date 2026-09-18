import ProductCard from '@/components/ProductCard.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ProductCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(ProductCard)
  })
  it('should render product name', () => {
    const productName = wrapper.find('[data-test="product-name"]')
    expect(productName.exists()).toBe(true)
    expect(productName.text()).toBe('Laptop')
  })
  it('should render product price', () => {
    const productPrice = wrapper.find('[data-test="product-price"]')
    expect(productPrice.exists()).toBe(true)
    expect(productPrice.text()).toBe('1000 USD')
  })
  it('should render buy button', () => {
    const button = wrapper.find('[data-test="buy-button"]')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Buy Now')
  })
})
