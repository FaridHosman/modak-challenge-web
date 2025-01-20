import { ProductCard } from "@components/productCard/ProductCard";
import { Product } from "@utils/types";
import styles from './ProductList.module.css';
import Loader from "@components/loader/Loader";
import { productCategories, sortOptions } from "@utils/constants";
import { Dropdown } from "@components/dropdown/Dropdown";

interface ProductListProps {
  products?: Product[]
}

export function ProductList({ products }: ProductListProps) {
  const dataLoaded = Boolean(products);
  return (
    <div className={styles.productList}>
      <header>
        <h1>
          Dummy Store
        </h1>
        <div className={styles.SortAndFilter}>
          <Dropdown label="Filter by category" defaultString="none" options={productCategories} />
          <Dropdown label="Sort by" defaultString="default order" options={sortOptions} />
        </div>
      </header>
      {dataLoaded ?
        <main className={styles.productCards}>
          {products?.map((product) => {
            return <ProductCard product={product} />
          })}
        </main> :
        <Loader />}
    </div>
  )
}