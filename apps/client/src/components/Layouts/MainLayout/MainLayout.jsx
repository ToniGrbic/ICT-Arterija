import React from "react";
import styles from "./index.module.css";
import ArteriaLogo from "../../../icons/ArteriaLogo/ArteriaLogo";
import Notifications from "../../../icons/Notifications/Notifications";
import MenuNavigation from "../../MenuNavigation/MenuNavigation";
import { Outlet } from "react-router";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className={styles["navigation"]}>
          <div>
            <ArteriaLogo />
          </div>
          <div>
            <h1>Početna</h1>
          </div>
          <div>
            <Notifications />
          </div>
        </nav>
      </header>
      <div className={styles["main-content"]}>
        <Outlet />
      </div>
      <MenuNavigation />
    </div>
  );
};

export default MainLayout;
