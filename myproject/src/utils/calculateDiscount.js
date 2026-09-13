export const calculateDiscount = (price, discountPercent) => {
  if (price <= 0) return 0
  if (discountPercent <= 0) return price
  if (discountPercent >= 100) return 0
  return price - price * (discountPercent / 100)
}
