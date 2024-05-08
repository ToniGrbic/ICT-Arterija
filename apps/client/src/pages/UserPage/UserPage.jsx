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
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");

  const [data, setData] = useState({ events: [], donations: [] });
  const { events, donations } = data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const schedulesResponse = await fetch(
          `/api/schedules/user/${user.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!schedulesResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const schedulesData = await schedulesResponse.json();
        setData((prevData) => ({ ...prevData, donations: schedulesData }));

        await Promise.all(
          schedulesData.map(async (donation) => {
            try {
              const centerResponse = await fetch(
                `/api/centers/${donation.center_id}`,
                {
                  method: "GET",
                }
              );

              if (!centerResponse.ok) {
                throw new Error("Network response was not ok");
              }

              const centerData = await centerResponse.json();
              setData((prevData) => ({
                ...prevData,
                donations: prevData.donations.map((prevDonation) =>
                  prevDonation.id === donation.id
                    ? {
                        ...prevDonation,
                        centerAddress: centerData.address,
                        centerName: centerData.name,
                      }
                    : prevDonation
                ),
              }));
            } catch (error) {
              console.error("Error fetching center address:", error);
            }
          })
        );

        const participantsResponse = await fetch(
          `/api/participants/user/${user.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!participantsResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const participantsData = await participantsResponse.json();
        setData((prevData) => ({ ...prevData, events: participantsData }));

        await Promise.all(
          participantsData.map(async (participant) => {
            try {
              const eventResponse = await fetch(
                `/api/events/${participant.event_id}`,
                {
                  method: "GET",
                }
              );

              if (!eventResponse.ok) {
                throw new Error("Network response was not ok");
              }

              const eventData = await eventResponse.json();
              setData((prevData) => ({
                ...prevData,
                events: prevData.events.map((prevEvent) =>
                  prevEvent.event_id === eventData.id
                    ? {
                        ...prevEvent,
                        centerAddress: eventData.location,
                        centerName: eventData.organizer,
                        date: eventData.date,
                      }
                    : prevEvent
                ),
              }));
            } catch (error) {
              console.error("Error fetching event data:", error);
            }
          })
        );
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchData();
  }, [user.id, user.token]);

  const verifiedDonations = donations
    .filter(
      (donation) => donation.is_valid === true && donation.is_finished === true
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const verifiedEvents = events
    .filter((event) => event.is_valid === true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(data);
  cookies.set("donations", { donations, events }, { path: "/" });

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
            {verifiedDonations.length < 2 ? "Novi korisnik" : "Regularan donor"}{" "}
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
    </div>
  );
}
