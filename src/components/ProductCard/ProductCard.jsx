import React from "react";
import styles from "./ProductCard.module.scss";
import CustomButton from "../CustomButton/CustomButton";
import SelectSVG from "../SelectSVG/SelectSVG";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = ({ product }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);

  const handleFavouriteClick = () => {
    setIsFavourite((prev) => !prev);
  };
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card__image-cover"]}>
          <img src={product.imageURL} alt={product.title} />
        </div>
        <div className={styles["card-info"]}>
          <h3>
            {product.title}, {product.store && product.store + "Гб, "}
            {product.color}
          </h3>
          <div className={styles["card-price"]}>
            <span>{product.price.toLocaleString("ru-Ru")}₽</span>
            {isFavourite ? (
              <AiFillHeart
                size={25}
                color="red"
                onClick={handleFavouriteClick}
              />
            ) : (
              <AiOutlineHeart size={25} onClick={handleFavouriteClick} />
            )}
          </div>
          <CustomButton title="В корзину" />
        </div>
      </div>
    </>
  );
};
