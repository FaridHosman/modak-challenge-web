import { ProductType } from "@utils/types"
import styles from './ProductCard.module.css';
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ProductType
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.Card}>
      <img
        src={product.thumbnail}
        width={200} height={200}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <div className={styles.Content}>
        <h1 onClick={() => navigate(`/product/${product.id}`)}>
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