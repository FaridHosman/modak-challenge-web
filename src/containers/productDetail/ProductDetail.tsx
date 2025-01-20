import { ErrorMessage } from "@components/errorMessage/ErrorMessage";
import Loader from "@components/loader/Loader";
import { ProductType } from "@utils/types";

interface ProductDetailProps {
  product?: ProductType
  isLoading?: boolean
  error: Error | null
}

export function ProductDetail({ product, isLoading, error }: ProductDetailProps) {
  if (error) {
    return <ErrorMessage error={error} />
  }

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