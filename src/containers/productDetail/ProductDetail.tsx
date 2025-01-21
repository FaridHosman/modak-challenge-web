import { ProductType } from "@utils/types";
import styles from './ProductDetail.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

interface ProductDetailProps {
  product?: ProductType
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className={styles.ProductDetail}>
      <div className={styles.Carousel}>
        <Carousel useKeyboardArrows showArrows={false} infiniteLoop centerMode autoPlay>
          {product?.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${product?.id}`} />
          ))}
        </Carousel>
      </div>
      <div className={styles.ProductInfo}>
        <h1>{product?.title}</h1>
        <p className={styles.Brand}>{product?.brand}</p>
        <p className={styles.Description}>{product?.description}</p>
        <p className={styles.Stock}>{product?.stock} left in stock</p>

        <button>
          Add to cart
        </button>
        <AddToCalendarButton
          name={`Remainder to buy ${product?.title}`}
          startDate={new Date().toISOString()}
          options={['Apple', 'Google', 'Yahoo', 'iCal']}
        />
      </div>
    </div>
  );
}