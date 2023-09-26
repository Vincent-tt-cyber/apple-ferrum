import React from "react";
import styles from "./ProductCard.module.scss";
import CustomButton from "../CustomButton/CustomButton";

export const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card__image-cover"]}>
          <img src={product.imageURL} alt={product.title} />
        </div>
        <h3>
          {product.title}, {product.store}Гб, {product.color}
        </h3>
        <div className={styles["card-price"]}>
          <span>{product.price.toLocaleString("ru-Ru")}₽</span>
          <CustomButton title="Купить" />
        </div>
      </div>
    </>
  );
};
