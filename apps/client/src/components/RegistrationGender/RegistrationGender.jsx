import { useState } from "react";
import classes from "./index.module.css";
import { useRegistration } from "../../providers/RegistrationProvider";

export default function RegistrationGender() {
  const [selectedGender, setSelectedGender] = useState(null);
  const { updateData, userData } = useRegistration();

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const handleRegistration = () => {
    console.log("Selected gender:", selectedGender);
    updateData(selectedGender, "gender");
    console.log(userData);
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
      <button
        className={classes.registrationButton}
        onClick={handleRegistration}
      >
        Registracija
      </button>
    </div>
  );
}
