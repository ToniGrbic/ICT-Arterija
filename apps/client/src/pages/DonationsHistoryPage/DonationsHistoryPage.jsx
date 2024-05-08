import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import classes from "./index.module.css";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import { useState, useEffect } from "react";
import Clock from "../../assets/Clock.svg";
import Events from "../../assets/Pin.svg";
import Calendar from "../../assets/Calendar.svg";

export default function DonationsHistoryPage() {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const data = cookies.get("donations");
  const [mergedData, setMergedData] = useState([]);
  const [hasExecutedEffect, setHasExecutedEffect] = useState(false); // New flag

  useEffect(() => {
    if (data && !hasExecutedEffect) {
      const mergedDonations = data.donations.map((donation) => ({
        centerName: donation.centerName,
        centerAddress: donation.centerAddress,
        date: donation.date,
        is_valid: donation.is_valid,
        is_finished: donation.is_finished,
      }));

      const mergedEvents = data.events.map((event) => ({
        centerName: event.centerName,
        centerAddress: event.centerAddress,
        date: event.date,
        is_valid: event.is_valid,
        is_finished: event.is_finished,
      }));

      const mergedDataArray = [...mergedDonations, ...mergedEvents];
      mergedDataArray.sort((a, b) => new Date(b.date) - new Date(a.date));

      setMergedData(mergedDataArray);
      setHasExecutedEffect(true);
    }
  }, [data, hasExecutedEffect]);

  console.log(mergedData);

  const EmptyDonations = () => (
    <div className={classes.donationCard}>
      <h2>Trenutačno nemate donacija</h2>
    </div>
  );

  return (
    <div className={classes.donationsHistoryPage}>
      <div className={classes.donationsHistoryPageHeader}>
        <button
          onClick={() => {
            navigate("/user");
          }}
        >
          {"<"}
        </button>
        <h1>Povijest Darivanja</h1>
      </div>
      <div>
        {!mergedData ? (
          <EmptyDonations />
        ) : (
          mergedData.map((donation, index) => (
            <div key={index} className={classes.donationCard}>
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
          ))
        )}
      </div>
      <MenuNavigation />
    </div>
  );
}
