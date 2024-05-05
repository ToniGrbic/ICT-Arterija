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
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handlePasswordRegistration = () => {
    const validation = validatePassword(password);
    if (validation !== true) {
      setIsPasswordValid(false);
      setValidationMessage(validation);
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
        onChange={handlePasswordChange}
        className={`${classes.passwordInput} ${!isPasswordValid ? classes.registrationInputInvalid : ""}`}
      />
      {!isPasswordValid && (
        <p className={classes.errorMessage}>{validationMessage}</p>
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
