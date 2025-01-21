import { ProductCard } from "@components/productCard/ProductCard";
import { ProductType } from "@utils/types";
import styles from './ProductList.module.css';
import { ErrorAndLoadingHandler } from "@components/errorAndLoadingHandler/ErrorAndLoadingHandler";

interface ProductListProps {
  products?: ProductType[]
  isLoading?: boolean
  error: Error | null
}

export function ProductList({ products, isLoading, error }: ProductListProps) {
  return (
    <ErrorAndLoadingHandler isLoading={isLoading} error={error}>
      <main className={styles.productCards}>
        {products?.map((product) => {
          return <ProductCard product={product} key={product.id} />
        })}
      </main>
    </ErrorAndLoadingHandler>
  )
}