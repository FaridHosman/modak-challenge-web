import { ProductList } from "@containers/productList/ProductList";
import { ProductListResponseType, SortOptionsValueType } from "@utils/types";
import { Dropdown } from "@components/dropdown/Dropdown";
import { productCategories, sortOptions } from "@utils/constants";
import styles from './Home.module.css';
import { useState } from "react";
import { ErrorAndLoadingHandler } from "@components/errorAndLoadingHandler/ErrorAndLoadingHandler";
import { useProductQuery } from "@utils/hooks";
import { getProducts } from "@api/productsApi";

export function Home() {
  const [filterBy, setFilterBy] = useState<string>()
  const [sortBy, setSortBy] = useState<SortOptionsValueType>()
  const { isLoading, data, error } = useProductQuery<ProductListResponseType>(() => getProducts(filterBy, sortBy), 'products')

  return (
    <div className={styles.Home}>
      <header>
        <h1>
          Dummy Store
        </h1>
        <div className={styles.SortAndFilter}>
          <Dropdown label="Filter by category" defaultString="none" options={productCategories} onChange={setFilterBy} />
          <Dropdown label="Sort by" defaultString="default order" options={sortOptions} onChange={setSortBy} />
        </div>
      </header>
      <ErrorAndLoadingHandler isLoading={isLoading} error={error}>
        <ProductList products={data?.products} />
      </ErrorAndLoadingHandler>
    </div>
  );
};