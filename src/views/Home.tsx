import { useEffect, useState } from "react";
import Loader from "@components/loader/Loader";
import { ProductList } from "@containers/ProductList";
import { ProductListResponse } from "@utils/types";

export function Home() {
  const [productList, setProductList] = useState<ProductListResponse>();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(setProductList);
  }, []);

  const dataLoaded = Boolean(productList);

  console.log(productList?.products);
  return (
    <div>
      {dataLoaded
        ? <ProductList /> :
        <Loader />}
    </div>
  );
};