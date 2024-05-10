import React, { useEffect } from "react";
import AutoPlay from "../../components/Sliders/AutoPlay/AutoPlay";
import StatsBar from "../../components/StatsBar/StatsBar";
import styles from "./index.module.css";
import ScheduleReminder from "../../components/ScheduleReminder/ScheduleReminder";
import EventsPreview from "../../components/Events/EventsPreview/EventsPreview";
import ArrowRight from "../../icons/ArrowRight/ArrowRight";
import BlogsPreview from "../../components/Blogs/BlogsPreview/BlogsPreview";
import LoginAndRegisterBtns from "../../components/Buttons/LoginAndRegisterBtns/LoginAndRegisterBtns";
import Cookies from "universal-cookie";
import { useOutletContext, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [_, setPageName] = useOutletContext();
  useEffect(() => {
    setPageName("Početna");
  }, []);

  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");

  return (
    <>
      <AutoPlay />
      <div className={styles["landing-main-wrapper"]}>
        {user ? <StatsBar /> : <LoginAndRegisterBtns />}
        {user && <ScheduleReminder />}
        <EventsPreview />
        <div
          className={styles["rewards-teaser"]}
          onClick={() => navigate("/rewards")}
        >
          <h1>Puno bodova, puno nagrada</h1>
          <div className={styles["rewards-page-button"]}>
            <ArrowRight />
          </div>
        </div>
        <BlogsPreview />
      </div>
    </>
  );
};

export default Home;
