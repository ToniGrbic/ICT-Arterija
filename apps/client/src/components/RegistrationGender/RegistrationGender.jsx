import { useState } from "react";
import classes from "./index.module.css";
import { useRegistration } from "../../providers/RegistrationProvider";
import RegistrationConfirmPopup from "../registrationConfirmPopup/registrationConfirmPopup";

export default function RegistrationGender() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [error, setError] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { updateData, userData } = useRegistration();

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    updateData(gender, "gender");
  };

  const handleRegistration = () => {
    if (!selectedGender) {
      setError("Please select a gender.");
      return;
    }

    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.message;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPopupVisible(true); // Show the popup after successful registration
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  return (
    <div className={classes.registrationGenderContainer}>
      <h1>Odaberite spol</h1>
      <button
        className={`${classes.genderButton} ${selectedGender === "Male" && classes.selectedMale}`}
        onClick={() => handleGenderSelection("Male")}
      >
        Muško
      </button>
      <button
        className={`${classes.genderButton} ${selectedGender === "Female" && classes.selectedFemale}`}
        onClick={() => handleGenderSelection("Female")}
      >
        Žensko
      </button>
      <p className={classes.error}>{error}</p>
      <button
        className={classes.registrationButton}
        onClick={handleRegistration}
      >
        Registracija
      </button>
      {isPopupVisible && (
        <div className={classes.registrationPopupContainer}>
          <RegistrationConfirmPopup />
        </div>
      )}
    </div>
  );
}
