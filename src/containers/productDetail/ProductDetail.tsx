import Loader from "@components/loader/Loader";
import { ProductType } from "@utils/types";

interface ProductDetailProps {
  product?: ProductType
  isLoading?: boolean
}

export function ProductDetail({ product, isLoading }: ProductDetailProps) {
  console.log(product)
  return (
    <div>
      {isLoading ?
        <Loader /> :
        <div>
          <h1>Product {product?.id}</h1>
          <p>{product?.description}</p>
          <p>{product?.brand}</p>
          <p>{product?.stock}</p>
          {product?.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${product?.id}`} />
          ))}
        </div>}
    </div>
  );
}