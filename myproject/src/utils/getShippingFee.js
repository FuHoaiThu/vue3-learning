export const getShippingFee = (total) => {
  if (total <= 0) return 0
  if (total < 500) return 50
  if (total < 1000) return 30
  return 0
}
