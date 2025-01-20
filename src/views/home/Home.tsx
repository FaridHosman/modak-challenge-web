import { ProductList } from "@containers/productList/ProductList";
import { ProductListResponseType } from "@utils/types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@api/productsApi";
import { Dropdown } from "@components/dropdown/Dropdown";
import { productCategories, sortOptions } from "@utils/constants";
import styles from './Home.module.css';
import { useState } from "react";

export function Home() {
  const [filterBy, setFilterBy] = useState<string>()
  const [sortBy, setSortBy] = useState<string>()

  const { isLoading, data, error } = useQuery<ProductListResponseType>({
    queryKey: ['products', filterBy, sortBy],
    queryFn: () => getProducts(filterBy, sortBy),
    staleTime: 30000,
  })

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
      <ProductList products={data?.products} isLoading={isLoading} error={error} />
    </div>
  );
};