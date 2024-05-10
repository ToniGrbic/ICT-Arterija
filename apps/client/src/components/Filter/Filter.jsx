import React from "react";

import styles from "./index.module.css";
const Filter = ({ filterOptions, activeFilter, setActiveFilter }) => {
  const filters = Object.entries(filterOptions);

  return (
    <div className={styles.filter_parent}>
      {filters.map(([_, filter]) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`${styles.filter_btn} 
              ${activeFilter === filter ? styles.filter_btn_active : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
