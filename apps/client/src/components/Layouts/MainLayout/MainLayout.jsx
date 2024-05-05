import React from "react";
import styles from "./index.module.css";
import ArteriaLogo from "../../../icons/ArteriaLogo/ArteriaLogo";
import Notifications from "../../../icons/Notifications/Notifications";
import MenuNavigation from "../../MenuNavigation/MenuNavigation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className={styles["navigation"]}>
          <div>
            <ArteriaLogo />
          </div>
          <div>
            <h1>Arteria</h1>
          </div>
          <div>
            <Notifications />
          </div>
        </nav>
      </header>
      <div className={styles["main-content"]}>{children}</div>
      <MenuNavigation />
    </div>
  );
};

export default MainLayout;
