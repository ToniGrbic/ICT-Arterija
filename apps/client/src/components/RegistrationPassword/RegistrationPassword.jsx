import { useRegistration } from "../../providers/RegistrationProvider";
import classes from "./index.module.css";
import { useState } from "react";

const validatePassword = (password) => {
  if (password.length < 8) {
    return "Lozinka mora biti barem 8 znakova dugačka.";
  }

  if (!/\d/.test(password)) {
    return "Lozinka mora sadržavati barem jedan broj.";
  }

  // eslint-disable-next-line no-useless-escape
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return "Lozinka mora sadržavati barem jedan poseban znak.";
  }

  return true;
};

export default function RegistrationPassword() {
  const { updateStep, updateData } = useRegistration();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const [isPasswordConfirmationValid, setIsPasswordConfirmationValid] =
    useState(true);

  const handlePasswordRegistration = () => {
    const validation = validatePassword(password);
    if (validation !== true) {
      setIsPasswordValid(false);
      setValidationMessage(validation);
      return;
    }
    if (password !== passwordConfirmation) {
      setIsPasswordConfirmationValid(false);
      return;
    }
    updateData(password, "password");
    updateStep();
  };

  return (
    <div className={classes.registrationPasswordContainer}>
      <h1>Kreirajte svoju zaporku.</h1>
      <p>
        Kreirajte svoju zaporku od najmanje 8 znakova od kojih jedan treba biti
        broj, a jedan poseban znak.
      </p>
      <input
        type="password"
        placeholder="Zaporka"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className={`${classes.passwordInput} ${!isPasswordValid ? classes.registrationInputInvalid : ""}`}
      />
      {!isPasswordValid && (
        <p className={classes.errorMessage}>{validationMessage}</p>
      )}
      <h2>Potvrdite zaporku</h2>
      <input
        type="password"
        placeholder="Potvrdi zaporku"
        value={passwordConfirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
        className={`${classes.passwordInput} ${!isPasswordConfirmationValid ? classes.registrationInputInvalid : ""}`}
      />
      {!isPasswordConfirmationValid && (
        <p className={classes.errorMessage}>
          Potvrda zaporke nije jednaka zaporki.
        </p>
      )}
      <button
        className={classes.registrationButton}
        onClick={handlePasswordRegistration}
      >
        Nastavi
      </button>
    </div>
  );
}
