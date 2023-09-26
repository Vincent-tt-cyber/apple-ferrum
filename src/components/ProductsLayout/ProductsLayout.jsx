import React from "react";
import styles from "./ProductLayout.module.scss";
import { products } from "../../data/dataProject";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductsLayout = ({ selectCategory }) => {
  return (
    <>
      <div className={styles["layout"]}>
        {products.map((product) =>
          product.category == selectCategory ? (
            <ProductCard product={product} />
          ) : null
        )}
      </div>
    </>
  );
};
