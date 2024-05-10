import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import RewardsCard from "../../components/RewardsCard/RewardsCard";
import { useOutletContext } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import Cookies from "universal-cookie";
const filterOptions = {
  Sve: "Sve",
  Osvojene: "Osvojene",
  Dostupne: "Dostupne",
};

const Rewards = () => {
  const [_, setPageName] = useOutletContext();
  const [filteredRewards, setFilteredRewards] = useState([]);
  const cookies = new Cookies();
  const { points: userPoints } = cookies.get("user");

  const rewards = [
    {
      id: 1,
      title: "Putovanje u Istru",
      points: 1000,
      image: "https://i.ibb.co/hm6r8cq/reward-1.jpg",
      userId: 1,
    },
    {
      id: 2,
      title: "Rucak u baste",
      points: 200,
      image: "https://via.placeholder.com/116x105",
      userId: 1,
    },
    {
      id: 3,
      title: "Amphora",
      points: 500,
      image: "https://via.placeholder.com/116x105",
      userId: 2,
    },
  ];

  useEffect(() => {
    setPageName("Nagrade");
  }, []);

  return (
    <div className={styles["rewards-wrapper"]}>
      <div className={styles["rewards-container"]}>
        <Filter
          tags={rewards}
          setFilteredTags={setFilteredRewards}
          filterOptions={filterOptions}
        />
        <h3>
          Vaši bodovi:{" "}
          <span className={styles["rewards-user-points"]}>{userPoints}</span>
        </h3>
        {filteredRewards.map((reward) => (
          <RewardsCard
            key={reward.id}
            reward={reward}
            userPoints={userPoints}
          />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
