import React, { useState } from "react";
import styles from "./index.module.css";
import ArteriaLogo from "../../../icons/ArteriaLogo/ArteriaLogo";
import Notifications from "../../../icons/Notifications/Notifications";
import MenuNavigation from "../../MenuNavigation/MenuNavigation";
import { Outlet } from "react-router";
import { useEvents } from "../../../providers/EventsProvider";
import SplashScreen from "../../SplashScreen/SplashScreen";

const MainLayout = () => {
  const [pageName, setPageName] = useState("Početna");
  const { isLoading } = useEvents();

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <div>
      <header>
        <nav className={styles["navigation"]}>
          <div>
            <ArteriaLogo />
          </div>
          <div>
            <h1>{pageName}</h1>
          </div>
          <div>
            <Notifications />
          </div>
        </nav>
      </header>
      <div className={styles["main-content"]}>
        <Outlet context={[pageName, setPageName]} />
      </div>
      <MenuNavigation />
    </div>
  );
};

export default MainLayout;
