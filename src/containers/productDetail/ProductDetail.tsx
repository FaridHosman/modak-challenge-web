import { ProductType } from "@utils/types";

interface ProductDetailProps {
  product?: ProductType
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div>
      <h1>Product {product?.id}</h1>
      <p>{product?.description}</p>
      <p>{product?.brand}</p>
      <p>{product?.stock}</p>
      {product?.images.map((image, index) => (
        <img key={index} src={image} alt={`Product ${product?.id}`} />
      ))}
    </div>
  );
}