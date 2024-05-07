import registrationPopupDecoration from "../../../assets/registrationPopupDecoration.svg";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";

export default function RegistrationConfirmPopup() {
  const navigate = useNavigate();

  return (
    <div className={classes.popupContainer}>
      <img src={registrationPopupDecoration} alt="" />
      <button className={classes.closeButton} onClick={() => navigate("/")}>
        X
      </button>
      <h2>Uspješno ste se prijavili!</h2>
      <p>Vaš račun je izrađen</p>
      <a href="/">NASTAVITE</a>
    </div>
  );
}
