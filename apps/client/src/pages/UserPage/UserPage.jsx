import Cookies from "universal-cookie";
import classes from "./index.module.css";
import UserPageBackground from "../../assets/UserPageBackground.svg";
import Profile from "../../assets/Profile.svg";
import { useNavigate } from "react-router";
import Settings from "../../assets/Settings.svg";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import { useState, useEffect } from "react";
import DonationsHistory from "../../components/DonationsHistory/DonationsHistory";
import fetchDonations from "../../fetchDonations";
import fetchPhoto from "../../fetchPhoto";
import ChangePhotoPopup from "../../components/ChangePhotoPopup/ChangePhotoPopup";

export default function UserPage() {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");
  const [data, setData] = useState({ events: [], donations: [] });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const { events, donations } = data;

  useEffect(() => {
    if (user === null || user === undefined) {
      navigate("/login");
      return;
    }

    fetchDonations(setData, user);
    const fetchUserPhoto = async () => {
      if (user.photo_id === 0) {
        return;
      }
      const profilePhoto = await fetchPhoto(user.photos_id);
      if (profilePhoto) {
        setProfilePhoto(profilePhoto);
      }
    };

    fetchUserPhoto();
  }, [user, navigate]);

  const verifiedDonations = donations
    .filter(
      (donation) => donation.is_valid === true && donation.is_finished === true
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const verifiedEvents = events
    .filter((event) => event.is_valid === true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    user && (
      <div>
        <div className={classes.userHeader}>
          <div className={classes.userPageBackground}>
            <img src={UserPageBackground} alt="" />
          </div>
          <img
            src={!profilePhoto ? Profile : profilePhoto}
            alt=""
            className={classes.profilePicture}
          />
          <img
            src={Settings}
            alt=""
            className={classes.settingsButton}
            onClick={() => {
              navigate("/settings");
            }}
          />
        </div>
        <div className={classes.userInfoContainer}>
          <div>
            <h1 className={classes.userName}>
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
              {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}
            </h1>
            <p className={classes.userPoints}>
              {verifiedDonations.length < 2
                ? "Novi korisnik"
                : "Regularan donor"}{" "}
              | {user.points} bodova
            </p>
          </div>
          <div className={classes.donationsContainer}>
            <div>
              <h2>Darivanja</h2>
              <p>
                {verifiedDonations.length + verifiedEvents.length} put
                {verifiedDonations.length === 1 ? "" : "a"}
              </p>
            </div>
            <div className={classes.userBloodTypeBorder}></div>
            <div>
              <h2>Krvna grupa</h2>
              <p>{user.blood_type === null ? "nepoznato" : user.blood_type}</p>
            </div>
          </div>
          <DonationsHistory donation={verifiedDonations[0]} />
        </div>
        <MenuNavigation />
        <ChangePhotoPopup />
      </div>
    )
  );
}
