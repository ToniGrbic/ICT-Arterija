import Cookies from "universal-cookie";
import classes from "./index.module.css";
import UserPageBackground from "../../assets/UserPageBackground.svg";
import Profile from "../../assets/Profile.svg";
import { useNavigate } from "react-router";
import Settings from "../../assets/Settings.svg";

export default function UserPage() {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");
  console.log(user);

  return (
    <div className={classes.userHeader}>
      <div className={classes.userPageBackground}>
        <img src={UserPageBackground} alt="" />
      </div>
      <img src={Profile} alt="" className={classes.profilePicture} />
      <button
        className={classes.backButton}
        onClick={() => {
          navigate("/");
        }}
      >
        {"<"}
      </button>
      <img
        src={Settings}
        alt=""
        className={classes.settingsButton}
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}
