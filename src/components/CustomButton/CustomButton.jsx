import React from "react";
import styles from './CustomButton.module.scss'

const CustomButton = ({ title }) => {
  return (
    <>
      <button className={styles['button']}>{title}</button>
    </>
  );
};

export default CustomButton;
