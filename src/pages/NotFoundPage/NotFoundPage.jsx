import React from "react";
import styles from './NotFoundPage.module.scss'
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <section className={styles['not-found-page']}>
        <div className="container">
          <h1>Page Not Found 😞</h1>
          <Link className={styles['back']} to="/">Вернуться на главную</Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
