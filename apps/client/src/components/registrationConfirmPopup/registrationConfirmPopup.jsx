import registrationConfirm from "../../assets/registrationConfirm.svg";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";

export default function RegistrationConfirmPopup() {
  const navigate = useNavigate();

  return (
    <div className={classes.popupContainer} onClick={() => navigate("/")}>
      <button className={classes.closeButton}>X</button>
      <img src={registrationConfirm} alt="" />
    </div>
  );
}
