import React from "react";
import styles from "./index.module.css";
import BlogSvg from "../../../assets/Blog1.svg";
import { useNavigate } from "react-router";

const BlogsPreview = () => {
  const navigate = useNavigate();

  const handleBlogOneClick = () => {
    navigate("/blogs/arteria");
  };

  const handleBlogTwoClick = () => {
    navigate("/blogs/doniranje-info");
  };

  return (
    <div className={styles["blogs-preview-wrapper"]}>
      <h2>Blogovi</h2>
      <div className={styles["blogs-preview-container"]}>
        <div
          className={styles["blog-preview-card"]}
          onClick={handleBlogOneClick}
        >
          <img src={BlogSvg} className={styles["blog-preview-card-img"]} />
          <p className={styles["blog-preview-title"]}>
            Nit'sam niti ću! Hmm, ili pak hoću? Doniraj krv i budi kapljica koja
            život znači!
          </p>
        </div>
        <div
          className={styles["blog-preview-card"]}
          onClick={handleBlogTwoClick}
        >
          <img src={BlogSvg} className={styles["blog-preview-card-img"]} />
          <p className={styles["blog-preview-title"]}>
            Darivanjem krvi do spašenog života više
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPreview;
