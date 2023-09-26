import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import SelectSVG from "../SelectSVG/SelectSVG";

export const Header = () => {
  const links = [
    {
      id: 1,
      iconName: "favourite",
      path: "favourite",
    },
    {
      id: 2,
      iconName: "cart",
      path: "orders",
    },
  ];
  return (
    <>
      <header className={styles["header"]}>
        <div className="container">
          <div className={styles["header-row"]}>
            <div className={styles["header__logo"]}>
              <h1 className={styles["header__logo-text"]}>
                <span>Apple</span> Ferrum
              </h1>
              <small className={styles["header__logo-description"]}>
                Только оригинальная техника <span>Apple</span>
              </small>
            </div>
            <nav className={styles["header-nav"]}>
              {links.map((link) => (
                <Link
                  className={styles["header__link"]}
                  key={link.id}
                  to={link.path}
                >
                  <SelectSVG id={link.iconName} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
