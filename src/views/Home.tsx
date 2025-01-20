import { useEffect, useState } from "react";
import { ProductList } from "@containers/ProductList";
import { ProductListResponse } from "@utils/types";

export function Home() {
  const [productList, setProductList] = useState<ProductListResponse>();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(setProductList);
  }, []);

  console.log(productList?.products);
  return (
    <div>
      <ProductList products={productList?.products} />
    </div>
  );
};