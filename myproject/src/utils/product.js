export async function fetchProduct(getProductApi) {
  try {
    const response = await getProductApi()

    return response.data
  } catch (error) {
    return null
  }
}
