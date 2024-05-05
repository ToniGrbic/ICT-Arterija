import classes from "./index.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function RegistrationPassword({ getData }) {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    getData(newPassword, "password");
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
        className={classes.passwordInput}
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
}
