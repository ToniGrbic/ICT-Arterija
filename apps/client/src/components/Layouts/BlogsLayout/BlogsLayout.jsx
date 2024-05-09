import React from "react";
import styles from "./index.module.css";

const BlogsLayout = ({ children, title = "", image = null }) => {
  return (
    <div className={styles["blogs-layout-wrapper"]}>
      <div className={styles["blogs-layout-img-container"]}>
        <img src={image || "https://via.placeholder.com/355x188"} />
      </div>

      <div className={styles["blogs-layout-content"]}>
        <h2 className={styles["blogs-layout-title"]}>{title || "Blog"}</h2>
        {children}
      </div>
    </div>
  );
};

export default BlogsLayout;
