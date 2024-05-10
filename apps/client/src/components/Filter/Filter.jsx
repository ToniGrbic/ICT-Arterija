import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Cookies from "universal-cookie";

const Filter = ({ tags, setFilteredTags, filterOptions }) => {
  const [activeFilter, setActiveFilter] = useState("Sve");
  const cookies = new Cookies();
  const { id: userId } = cookies.get("user");
  const filters = Object.entries(filterOptions);

  useEffect(() => {
    let filteredTags;

    if (activeFilter === "Osvojene") {
      filteredTags = tags.filter((tag) => tag.userId === userId);
    } else if (activeFilter === "Dostupne") {
      filteredTags = tags.filter((tag) => tag.userId !== userId);
    } else filteredTags = tags;

    setFilteredTags(filteredTags);
  }, [activeFilter]);

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
