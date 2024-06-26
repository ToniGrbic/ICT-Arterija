import { useState } from "react"; // Import useState hook
import { useNavigate } from "react-router";
import classes from "./index.module.css";
import EmailBlack from "../../assets/EmailBlack.svg";
import PasswordBlack from "../../assets/PasswordBlack.svg";
import LogOffBlack from "../../assets/LogOffBlack.svg";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import ConfirmPopup from "../../components/Popups/ConfirmPopup/ConfirmPopup";
import Cookies from "universal-cookie";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [showLogOffPopup, setShowLogOffPopup] = useState(false);
  const cookies = new Cookies();

  const handleLogOff = () => {
    setShowLogOffPopup(true);
  };

  const handleConfirmLogOff = () => {
    cookies.remove("user");
    navigate("/");
  };

  const handleCancelLogOff = () => {
    setShowLogOffPopup(false);
  };

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
      <div
        className={classes.settingContainer}
        onClick={() => navigate("/change-email")}
      >
        <img src={EmailBlack} alt="" />
        <p>Promjenite Vaš email</p>
      </div>
      <div
        className={classes.settingContainer}
        onClick={() => {
          navigate("/change-password");
        }}
      >
        <img src={PasswordBlack} alt="" />
        <p>Promjenite Vašu zaporku</p>
      </div>
      <div className={classes.settingContainer} onClick={handleLogOff}>
        <img src={LogOffBlack} alt="" />
        <p>Odjava</p>
      </div>
      <MenuNavigation />
      {showLogOffPopup && ( // Render ConfirmPopup if showLogOffPopup is true
        <ConfirmPopup
          onConfirm={handleConfirmLogOff}
          onCancel={handleCancelLogOff}
          title="Jeste li sigurni da se želite odjaviti?"
        />
      )}
    </div>
  );
}
