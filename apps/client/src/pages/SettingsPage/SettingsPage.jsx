import { useNavigate } from "react-router";
import classes from "./index.module.css";
import ProfileBlack from "../../assets/ProfileBlack.svg";
import EmailBlack from "../../assets/EmailBlack.svg";
import PasswordBlack from "../../assets/PasswordBlack.svg";
import LogOffBlack from "../../assets/LogOffBlack.svg";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";

export default function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className={classes.settingsPage}>
      <div className={classes.settingsHeader}>
        <button
          onClick={() => {
            navigate("/user");
          }}
          className={classes.backButton}
        >
          {"<"}
        </button>
        <h1>Postavke</h1>
      </div>
      <div className={classes.settingContainer}>
        <img src={ProfileBlack} alt="" />
        <p>Promjenite sliku profila</p>
      </div>
      <div className={classes.settingContainer}>
        <img src={EmailBlack} alt="" />
        <p>Promjenite Vaš email</p>
      </div>
      <div className={classes.settingContainer}>
        <img src={PasswordBlack} alt="" />
        <p>Promjenite Vašu zaporku</p>
      </div>
      <div className={classes.settingContainer}>
        <img src={LogOffBlack} alt="" />
        <p>Odjava</p>
      </div>
      <MenuNavigation />
    </div>
  );
}
