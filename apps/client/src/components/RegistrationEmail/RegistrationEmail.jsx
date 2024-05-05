import classes from "./index.module.css";
import { useRegistration } from "../../providers/RegistrationProvider";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegistrationEmail() {
  const { updateStep, updateData } = useRegistration();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(emailRegex.test(newEmail));
  };

  async function isEmailUsed(email) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/email/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const text = await response.text();
      if (!text) {
        return { error: "Empty response" };
      }
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return { error: error.message };
    }
  }

  const handleEmailRegistration = () => {
    if (email.trim() === "" || !validEmail) {
      setValidEmail(false);
      return;
    }
    isEmailUsed(email).then((data) => {
      if (data.error) {
        updateData(email, "email");
        updateStep();
      } else {
        setValidEmail(false);
        alert("Email se već koristi.");
      }
    });
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
        value={email}
        onChange={handleEmailChange}
        className={`${classes.emailInput} ${validEmail ? "" : classes.invalidEmail}`}
      />
      {!validEmail && (
        <p className={classes.errorMessage}>Unesite važeću e-poštu.</p>
      )}
      <button
        className={classes.registrationButton}
        onClick={handleEmailRegistration}
      >
        Nastavi
      </button>
    </div>
  );
}
