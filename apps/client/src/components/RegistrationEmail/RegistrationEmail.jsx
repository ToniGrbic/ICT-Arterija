import { useState } from "react";
import classes from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function RegistrationEmail({ getData }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    if (newEmail === "" || newEmail === null || newEmail === undefined) {
      return;
    }
    setEmail(newEmail);
    getData(newEmail, "email");
  };

  return (
    <div className={classes.registrationEmailContainer}>
      <h1>Koja je Vaša adresa e-pošte?</h1>
      <p>
        Unesite Vašu e-poštu kako <br /> biste izradili račun.
      </p>
      <input
        type="email"
        placeholder="Email"
        className={classes.emailInput}
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
}
