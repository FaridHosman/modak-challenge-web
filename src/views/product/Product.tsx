import { getProduct } from "@api/productsApi";
import { ProductDetail } from "@containers/productDetail/ProductDetail";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@utils/types";
import { useParams } from "react-router-dom";

export function Product() {
  const params = useParams();
  const { isLoading, data, error } = useQuery<ProductType>({
    queryKey: ['product-detail', params.id],
    queryFn: () => getProduct(params.id),
    staleTime: 30000,
  });

  return (
    <ProductDetail product={data} isLoading={isLoading} error={error} />
  );
}