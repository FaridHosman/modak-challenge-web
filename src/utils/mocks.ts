import { CategoryType, ProductType } from "./types";

export const mockProduct: ProductType = {
  id: 1,
  title: "Wireless Mouse",
  description: "A high-quality wireless mouse with ergonomic design.",
  category: "Electronics",
  price: 29.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 150,
  tags: ["wireless", "mouse", "electronics"],
  brand: "TechBrand",
  sku: "TB-WM-001",
  weight: 0.2,
  dimensions: {
    width: 10,
    height: 5,
    depth: 3
  },
  warrantyInformation: "2 years warranty",
  shippingInformation: "Ships in 3-5 business days",
  availabilityStatus: "In Stock",
  reviews: [
    {
      rating: 5,
      comment: "Excellent mouse, very comfortable!",
      date: "2023-01-15",
      reviewerName: "John Doe",
      reviewerEmail: "john.doe@example.com"
    },
    {
      rating: 4,
      comment: "Good value for the price.",
      date: "2023-02-20",
      reviewerName: "Jane Smith",
      reviewerEmail: "jane.smith@example.com"
    }
  ],
  returnPolicy: "30-day return policy",
  minimumOrderQuantity: 1,
  meta: {
    createdAt: "2023-01-01",
    updatedAt: "2023-01-10",
    barcode: "123456789012",
    qrCode: "https://example.com/qrcode"
  },
  thumbnail: "https://example.com/images/wireless-mouse-thumbnail.jpg",
  images: [
    "https://example.com/images/wireless-mouse-1.jpg",
    "https://example.com/images/wireless-mouse-2.jpg"
  ]
};

export const mockCategories: CategoryType[] = [
  {
    "slug": "beauty",
    "name": "Beauty",
    "url": "https://dummyjson.com/products/category/beauty"
  },
  {
    "slug": "fragrances",
    "name": "Fragrances",
    "url": "https://dummyjson.com/products/category/fragrances"
  },
  {
    "slug": "furniture",
    "name": "Furniture",
    "url": "https://dummyjson.com/products/category/furniture"
  },
  {
    "slug": "groceries",
    "name": "Groceries",
    "url": "https://dummyjson.com/products/category/groceries"
  },
  {
    "slug": "home-decoration",
    "name": "Home Decoration",
    "url": "https://dummyjson.com/products/category/home-decoration"
  },
  {
    "slug": "kitchen-accessories",
    "name": "Kitchen Accessories",
    "url": "https://dummyjson.com/products/category/kitchen-accessories"
  },
  {
    "slug": "laptops",
    "name": "Laptops",
    "url": "https://dummyjson.com/products/category/laptops"
  },
  {
    "slug": "mens-shirts",
    "name": "Mens Shirts",
    "url": "https://dummyjson.com/products/category/mens-shirts"
  },
  {
    "slug": "mens-shoes",
    "name": "Mens Shoes",
    "url": "https://dummyjson.com/products/category/mens-shoes"
  },
  {
    "slug": "mens-watches",
    "name": "Mens Watches",
    "url": "https://dummyjson.com/products/category/mens-watches"
  },
  {
    "slug": "mobile-accessories",
    "name": "Mobile Accessories",
    "url": "https://dummyjson.com/products/category/mobile-accessories"
  },
  {
    "slug": "motorcycle",
    "name": "Motorcycle",
    "url": "https://dummyjson.com/products/category/motorcycle"
  },
  {
    "slug": "skin-care",
    "name": "Skin Care",
    "url": "https://dummyjson.com/products/category/skin-care"
  },
  {
    "slug": "smartphones",
    "name": "Smartphones",
    "url": "https://dummyjson.com/products/category/smartphones"
  },
  {
    "slug": "sports-accessories",
    "name": "Sports Accessories",
    "url": "https://dummyjson.com/products/category/sports-accessories"
  },
  {
    "slug": "sunglasses",
    "name": "Sunglasses",
    "url": "https://dummyjson.com/products/category/sunglasses"
  },
  {
    "slug": "tablets",
    "name": "Tablets",
    "url": "https://dummyjson.com/products/category/tablets"
  },
  {
    "slug": "tops",
    "name": "Tops",
    "url": "https://dummyjson.com/products/category/tops"
  },
  {
    "slug": "vehicle",
    "name": "Vehicle",
    "url": "https://dummyjson.com/products/category/vehicle"
  },
  {
    "slug": "womens-bags",
    "name": "Womens Bags",
    "url": "https://dummyjson.com/products/category/womens-bags"
  },
  {
    "slug": "womens-dresses",
    "name": "Womens Dresses",
    "url": "https://dummyjson.com/products/category/womens-dresses"
  },
  {
    "slug": "womens-jewellery",
    "name": "Womens Jewellery",
    "url": "https://dummyjson.com/products/category/womens-jewellery"
  },
  {
    "slug": "womens-shoes",
    "name": "Womens Shoes",
    "url": "https://dummyjson.com/products/category/womens-shoes"
  },
  {
    "slug": "womens-watches",
    "name": "Womens Watches",
    "url": "https://dummyjson.com/products/category/womens-watches"
  }
]