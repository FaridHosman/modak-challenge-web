import { ProductType } from "./types";

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