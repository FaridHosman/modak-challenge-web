import { ProductList } from "@containers/productList/ProductList";
import { ProductListResponseType, SortOptionsValueType } from "@utils/types";
import { useState } from "react";
import { ErrorAndLoadingHandler } from "@components/errorAndLoadingHandler/ErrorAndLoadingHandler";
import { useProductQuery } from "@utils/hooks";
import { getProducts } from "@api/productsApi";
import { Header } from "@containers/header/Header";

export function Home() {
  const [filterBy, setFilterBy] = useState<string>()
  const [sortBy, setSortBy] = useState<SortOptionsValueType>()
  const { isLoading, data, error } = useProductQuery<ProductListResponseType>(() => getProducts(filterBy, sortBy), 'products', filterBy, sortBy);

  return (
    <div>
      <Header setFilterBy={setFilterBy} setSortBy={setSortBy} />
      <ErrorAndLoadingHandler isLoading={isLoading} error={error}>
        <ProductList products={data?.products} />
      </ErrorAndLoadingHandler>
    </div>
  );
};