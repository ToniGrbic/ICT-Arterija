import React from "react";
import styles from "./index.module.css";
import BlogSvg from "../../../assets/Blog1.svg";

const BlogsPreview = () => {
  return (
    <>
      <h2>Blogovi</h2>
      <div className={styles["blogs-preview-container"]}>
        <div className={styles["blog-preview-card"]}>
          <img src={BlogSvg} className={styles["blog-preview-card-img"]} />
          <p className={styles["blog-preview-title"]}>
            Nit'sam niti ću! Hmm, ili pak hoću? Doniraj krv i budi kapljica koja
            život znači!
          </p>
        </div>
        <div className={styles["blog-preview-card"]}>
          <img src={BlogSvg} className={styles["blog-preview-card-img"]} />
          <p className={styles["blog-preview-title"]}>
            Darivanjem krvi do spašenog života više
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogsPreview;