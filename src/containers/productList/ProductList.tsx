import { ProductCard } from "@components/productCard/ProductCard";
import { ProductType } from "@utils/types";
import styles from './ProductList.module.css';

interface ProductListProps {
  products?: ProductType[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <main className={styles.productCards}>
      {products?.map((product) => {
        return (
          <div data-testid="product-card" key={product.id}>
            <ProductCard product={product} />
          </div>
        )
      })}
    </main>
  )
}