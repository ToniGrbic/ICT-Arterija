/* eslint-disable react/prop-types */
import classes from "./index.module.css";
import Clock from "../../assets/Clock.svg";
import Events from "../../assets/Pin.svg";
import Calendar from "../../assets/Calendar.svg";

const DonationsHistory = ({ donations }) => {
  return (
    <>
      <div className={classes.donationsHistorySection}>
        <p className={classes.donationsHistoryHeadline}>Povijest doniranja</p>
        {donations.map((donation) => (
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
        ))}
      </div>
    </>
  );
};

export default DonationsHistory;
