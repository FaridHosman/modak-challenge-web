import { ProductCard } from "@components/productCard/ProductCard";
import { ProductType } from "@utils/types";
import styles from './ProductList.module.css';
import Loader from "@components/loader/Loader";
import { ErrorMessage } from "@components/errorMessage/ErrorMessage";

interface ProductListProps {
  products?: ProductType[]
  isLoading?: boolean
  error: Error | null
}

export function ProductList({ products, isLoading, error }: ProductListProps) {

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <>
      {isLoading ?
        <Loader /> :
        <main className={styles.productCards}>
          {products?.map((product) => {
            return <ProductCard product={product} key={product.id} />
          })}
        </main>}
    </>
  )
}