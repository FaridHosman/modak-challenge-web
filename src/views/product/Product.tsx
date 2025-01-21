import { getProduct } from "@api/productsApi";
import { ErrorAndLoadingHandler } from "@components/errorAndLoadingHandler/ErrorAndLoadingHandler";
import { ProductDetail } from "@containers/productDetail/ProductDetail";
import { useProductQuery } from "@utils/hooks";
import { ProductType } from "@utils/types";
import { useParams } from "react-router-dom";

export function Product() {
  const params = useParams();
  const { isLoading, data, error } = useProductQuery<ProductType>(() => getProduct(params.id), 'product-detail', params.id);

  return (
    <ErrorAndLoadingHandler isLoading={isLoading} error={error}>
      <ProductDetail product={data} />
    </ErrorAndLoadingHandler>
  );
}