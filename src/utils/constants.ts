import { SortOptionsType } from "./types"

export const productCategories = [ // if these values are expected to change, they should be fetched from the API 'https://dummyjson.com/products/category-list'
  { value: "Beauty", label: "Beauty" },
  { value: "Fragrances", label: "Fragrances" },
  { value: "Furniture", label: "Furniture" },
  { value: "Groceries", label: "Groceries" },
  { value: "Home Decoration", label: "Home Decoration" },
  { value: "Kitchen Accessories", label: "Kitchen Accessories" },
  { value: "Laptops", label: "Laptops" },
  { value: "Mens Shirts", label: "Men's Shirts" },
  { value: "Mens Shoes", label: "Men's Shoes" },
  { value: "Mens Watches", label: "Men's Watches" },
  { value: "Mobile Accessories", label: "Mobile Accessories" },
  { value: "Motorcycle", label: "Motorcycle" },
  { value: "Skin Care", label: "Skin Care" },
  { value: "Smartphones", label: "Smartphones" },
  { value: "Sports Accessories", label: "Sports Accessories" },
  { value: "Sunglasses", label: "Sunglasses" },
  { value: "Tablets", label: "Tablets" },
  { value: "Tops", label: "Tops" },
  { value: "Vehicle", label: "Vehicle" },
  { value: "Womens Bags", label: "Women's Bags" },
  { value: "Womens Dresses", label: "Women's Dresses" },
  { value: "Womens Jewellery", label: "Women's Jewellery" },
  { value: "Womens Shoes", label: "Women's Shoes" },
  { value: "Womens Watches", label: "Women's Watches" },
]

export const sortOptions: SortOptionsType[] = [
  { value: "rating-desc", label: "Rating ↓" },
  { value: "rating-asc", label: "Rating ↑" },
  { value: "price-desc", label: "Price ↓" },
  { value: "price-asc", label: "Price ↑" }
]