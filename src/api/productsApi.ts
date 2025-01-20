const API_URL = "https://dummyjson.com/products";

export async function getProducts(filterBy?: string, sortBy?: string) {
  let sortParams = ""
  let filterParams = ""
  if (sortBy) {
    console.log(sortBy)
    const sortOption = sortBy.split('-')[0]
    const sortOrder = sortBy.split('-')[1]
    console.log(sortOption, sortOrder)
    sortParams = `?sortBy=${sortOption}&order=${sortOrder}`
  }
  if (filterBy) {
    filterParams = `/category/${filterBy}`
  }
  const response = await fetch(`${API_URL}${filterParams}${sortParams}`)
  const data = await response.json()
  return data
}

export async function getProduct(productId?: string) {
  const response = await fetch(`${API_URL}/${productId}`)
  const data = await response.json()
  return data
}