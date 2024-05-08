/* eslint-disable react/prop-types */
import classes from "./index.module.css";
import Clock from "../../assets/Clock.svg";
import Events from "../../assets/Pin.svg";
import Calendar from "../../assets/Calendar.svg";
import ThreeDots from "../../assets/ThreeDots.svg";
import { useNavigate } from "react-router-dom";

const DonationsHistory = ({ donation }) => {
  const navigate = useNavigate();

  const EmptyDonations = () => (
    <div className={classes.donationCard}>
      <h2>Trenutačno nemate donacija</h2>
    </div>
  );

  return (
    <>
      <div className={classes.donationsHistorySection}>
        <div className={classes.donationsHistoryHeader}>
          <p className={classes.donationsHistoryHeadline}>Povijest doniranja</p>
          <button
            className={classes.moreDonationsButton}
            onClick={() => {
              navigate("/donations-history");
            }}
          >
            <img src={ThreeDots} alt="" />
          </button>
        </div>
        {donation && (
          <div key={donation.id} className={classes.donationCard}>
            <h3>{donation.centerName}</h3>
            <div className={classes.donationCardBorder}></div>
            <div>
              <img src={Calendar} alt="" />
              <p>{new Date(donation.date).toLocaleDateString("UK")}</p>
            </div>
            <div>
              <img src={Events} alt="" />
              <p>{donation.centerAddress}</p>
            </div>
            <div>
              <img src={Clock} alt="" />
              <p>{new Date(donation.date).toLocaleTimeString("UK")}</p>
            </div>
          </div>
        )}
      </div>
      {!donation && <EmptyDonations />}
    </>
  );
};

export default DonationsHistory;
