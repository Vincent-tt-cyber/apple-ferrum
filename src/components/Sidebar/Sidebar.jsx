import React from "react";
import styles from "./Sidebar.module.scss";
import { sidebarCategories } from "../../data/dataProject";
import SelectSVG from "../SelectSVG/SelectSVG.jsx";

export const Sidebar = ({ onCategoryChange }) => {
  return (
    <section className={styles["sidebar"]}>
      <div className={styles["sidebar-row"]}>
        {sidebarCategories.map((item) => (
          <div
            key={item.id}
            className={styles["sidebar__category"]}
            onClick={() => onCategoryChange(item.category)}
          >
            {item.iconName && <SelectSVG id={item.iconName} />}
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};
