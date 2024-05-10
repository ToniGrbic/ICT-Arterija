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
      <h2>Za znatiželjne</h2>
      <div className={styles["blogs-preview-container"]}>
        <div
          className={styles["blog-preview-card"]}
          onClick={handleBlogOneClick}
        >
          <img src={BlogSvg} className={styles["blog-preview-card-img"]} />
          <p className={styles["blog-preview-title"]}>
            Arteria - doniraj krv i budi kapljica koja život znači!
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
