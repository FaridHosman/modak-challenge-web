import { SortOptionsValueType } from "@utils/types";

const API_URL = "https://dummyjson.com/productss";

export async function getProducts<ProductListResponseType>(filterBy?: string, sortBy?: SortOptionsValueType) {
  let sortParams = ""
  let filterParams = ""
  if (sortBy) {
    const sortOption = sortBy.split('-')[0]
    const sortOrder = sortBy.split('-')[1]
    sortParams = `?sortBy=${sortOption}&order=${sortOrder}`
  }
  if (filterBy) {
    filterParams = `/category/${filterBy}`
  }
  const response = await fetch(`${API_URL}${filterParams}${sortParams}`)
  const data = await response.json()
  return data as ProductListResponseType
}

export async function getProduct<ProductType>(productId?: string) {
  const response = await fetch(`${API_URL}/${productId}`)
  const data = await response.json()
  return data as ProductType
}