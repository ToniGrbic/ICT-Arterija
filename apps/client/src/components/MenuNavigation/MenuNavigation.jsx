import React from "react";
import Home from "../../icons/Home/Home";
import Events from "../../icons/Events/Events";
import Rewards from "../../icons/Rewards/Rewards";
import Profile from "../../icons/Profile/Profile";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const MenuNavigation = () => {
  return (
    <div className={styles["menu-container"]}>
      <nav>
        <ul className={styles["menu-navigation-list"]}>
          <li>
            <Link to="/">
              <Home />
            </Link>
          </li>
          <li>
            <Link to="/events">
              <Events />
            </Link>
          </li>
          <li>
            <Rewards />
          </li>
          <li>
            <Profile />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuNavigation;
