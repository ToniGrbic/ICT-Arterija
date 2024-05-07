import Cookies from "universal-cookie";
import classes from "./index.module.css";
import UserPageBackground from "../../assets/UserPageBackground.svg";
import Profile from "../../assets/Profile.svg";
import { useNavigate } from "react-router";
import Settings from "../../assets/Settings.svg";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import { useState, useEffect } from "react";
import DonationsHistory from "../../components/DonationsHistory/DonationsHistory";

export default function UserPage() {
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");

  useEffect(() => {
    fetch(`/api/schedules/user/${user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDonations(data);
        data.forEach((donation) => {
          fetch(`/api/centers/${donation.center_id}`, {
            method: "GET",
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((centerData) => {
              setDonations((prevDonations) =>
                prevDonations.map((prevDonation) =>
                  prevDonation.id === donation.id
                    ? {
                        ...prevDonation,
                        centerAddress: centerData.address,
                        centerName: centerData.name,
                      }
                    : prevDonation
                )
              );
            })
            .catch((error) => {
              console.error("Error fetching center address:", error);
            });
        });
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, [user.id, user.token]);

  const verifiedDonations = donations.filter((donation) => {
    return donation.is_valid === true && donation.is_finished === true;
  });

  console.log(verifiedDonations);

  return (
    <div>
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
      <div className={classes.userInfoContainer}>
        <div>
          <h1 className={classes.userName}>
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
            {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}
          </h1>
          <p className={classes.userPoints}>
            Regularan donor | {user.points} bodova
          </p>
        </div>
        <div className={classes.donationsContainer}>
          <div>
            <h2>Darivanja</h2>
            <p>
              {verifiedDonations.length} put
              {verifiedDonations.length === 1 ? "" : "a"}
            </p>
          </div>
          <div className={classes.userBloodTypeBorder}></div>
          <div>
            <h2>Krvna grupa</h2>
            <p>{user.blood_type === null ? "nepoznato" : user.blood_type}</p>
          </div>
        </div>
        <DonationsHistory donations={verifiedDonations} />
      </div>
      <MenuNavigation />
    </div>
  );
}
