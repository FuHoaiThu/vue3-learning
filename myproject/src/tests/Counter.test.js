import Counter from '@/components/Counter.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Counter', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Counter)
  })
  it('should render initial count', () => {
    const counter = wrapper.find('[data-test="count"]')
    expect(counter.text()).toBe('Count: 0')
  })
  it('should increment count when clicked', async () => {
    
  })
})
