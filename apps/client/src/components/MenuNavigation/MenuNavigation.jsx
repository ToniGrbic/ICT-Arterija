import Home from "../../icons/Home/Home";
import Events from "../../icons/Events/Events";
import Rewards from "../../icons/Rewards/Rewards";
import Profile from "../../icons/Profile/Profile";
import styles from "./index.module.css";

const MenuNavigation = () => {
  return (
    <div className={styles["menu-container"]}>
      <nav>
        <ul className={styles["menu-navigation-list"]}>
          <li>
            <Home />
          </li>
          <li>
            <Events />
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
