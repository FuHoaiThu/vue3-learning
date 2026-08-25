import { computed, ref } from 'vue'

export function usePagination(initialPage = 1, pageSize = 10, total = 0) {
  const page = ref(initialPage)

  const totalPages = computed(() => {
    return Math.ceil(total / pageSize)
  })

  const nextPage = () => {
    if (page.value < totalPages.value) page.value++
  }
  const previousPage = () => {
    if (page.value !== 1) page.value--
  }
  const gotoPage = (value) => {
    if (value >= 1 && value <= totalPages.value) page.value = value
  }

  return {
    page,
    totalPages,
    nextPage,
    previousPage,
    gotoPage,
  }
}
