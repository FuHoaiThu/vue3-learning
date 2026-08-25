import { computed, ref } from 'vue'

export function useCounter(initialValue = 0, step = 1) {
  const count = ref(initialValue)

  const double = computed(() => {
    return count.value * 2
  })

  const increase = () => {
    count.value += step
  }
  const decrease = () => {
    count.value -= step
  }
  const reset = () => {
    count.value = initialValue
  }

  return {
    count,
    double,
    increase,
    decrease,
    reset,
  }
}
