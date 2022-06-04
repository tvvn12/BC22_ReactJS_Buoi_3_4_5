import React from "react";
import ProductsItem from "./ProductsItem";

export default function ProductList(props) {
  const { products, getData } = props;
  
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductsItem  productDetailsWhenClick={getData}  productDetails={product} />
            
          </div>
        );
      })}
    </div>
  );
}
