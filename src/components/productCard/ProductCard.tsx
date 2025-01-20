import { Product } from "@utils/types"
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.Card}>
      <img src={product.thumbnail} width={200} height={200} alt={product.title} />
      <div className={styles.Content}>
        <h1>
          {product.title}
        </h1>
        <div>
          ★ {product.rating} / 5
        </div>
        <p className={styles.Price}>
          ${product.price}
        </p>
        <p className={styles.Discount}>
          {product.discountPercentage} % Off!
        </p>
        <p>
          {product.stock} Left in Stock
        </p>
      </div>
    </div>
  )
}