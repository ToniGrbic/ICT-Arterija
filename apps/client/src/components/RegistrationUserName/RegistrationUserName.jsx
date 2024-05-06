import { useState } from "react";
import classes from "./index.module.css";
import { useRegistration } from "../../providers/RegistrationProvider";

export default function RegistrationUserName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const { updateData, updateStep } = useRegistration();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleButtonClick = () => {
    if (firstName.trim() === "" && lastName.trim() === "") {
      setError("Molimo unesite ime i prezime.");
    } else if (firstName.trim() === "") {
      setError("Molimo unesite ime.");
    } else if (lastName.trim() === "") {
      setError("Molimo unesite prezime.");
    } else {
      setError("");
      updateData(firstName, "name");
      updateData(lastName, "surname");
      updateStep();
    }
  };

  return (
    <div className={classes.registrationUserNameContainer}>
      <h1>Unesite Vaše podatke</h1>
      <p>
        Unesite Vaše ime i prezime kako biste započeli s korištenjem aplikacije.
      </p>
      <input
        type="text"
        placeholder="Ime"
        value={firstName}
        onChange={handleFirstNameChange}
        className={`${classes.userNameInput} ${firstName.trim() === "" && error && classes.errorInput}`}
      />
      <input
        type="text"
        placeholder="Prezime"
        value={lastName}
        onChange={handleLastNameChange}
        className={`${classes.userNameInput} ${lastName.trim() === "" && error && classes.errorInput}`}
      />
      {error && <p className={classes.error}>{error}</p>}
      <button
        className={classes.registrationButton}
        onClick={handleButtonClick}
      >
        Nastavi
      </button>
    </div>
  );
}
