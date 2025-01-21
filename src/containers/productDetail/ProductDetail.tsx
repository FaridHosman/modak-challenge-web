import { ErrorAndLoadingHandler } from "@components/errorAndLoadingHandler/ErrorAndLoadingHandler";
import { ProductType } from "@utils/types";

interface ProductDetailProps {
  product?: ProductType
  isLoading?: boolean
  error: Error | null
}

export function ProductDetail({ product, isLoading, error }: ProductDetailProps) {
  return (
    <ErrorAndLoadingHandler isLoading={isLoading} error={error}>
      <div>
        <h1>Product {product?.id}</h1>
        <p>{product?.description}</p>
        <p>{product?.brand}</p>
        <p>{product?.stock}</p>
        {product?.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${product?.id}`} />
        ))}
      </div>
    </ErrorAndLoadingHandler>
  );
}