import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ProductsLayout } from "../../components/ProductsLayout/ProductsLayout";

const Home = () => {
  const [selectCategory, setSelectCategory] = React.useState("phones");

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };

  useEffect(() => {
    console.log(selectCategory);
  }, [selectCategory]);
  return (
    <>
      <section className={styles["home"]}>
        <div className="container">
          <div className={styles["home-row"]}>
            <Sidebar onCategoryChange={handleCategoryChange} />
            <ProductsLayout selectCategory={selectCategory} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
