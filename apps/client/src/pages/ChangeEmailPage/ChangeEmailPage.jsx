import { useState } from "react";
import classes from "./index.module.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

export default function ChangeEmailPage() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const user = cookies.get("user");

  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isCurrentEmailValid, setIsCurrentEmailValid] = useState(true);
  const [isNewEmailValid, setIsNewEmailValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

  const handleChangeEmail = async () => {
    // Reset validation message and states
    setValidationMessage("");
    setIsCurrentEmailValid(true);
    setIsNewEmailValid(true);

    // Validate current email
    if (currentEmail !== user.email) {
      setIsCurrentEmailValid(false);
      setValidationMessage("Trenutna e-pošta nije ispravna");
      return;
    }

    // Validate new email format
    // eslint-disable-next-line no-useless-escape
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!newEmail.match(emailFormat)) {
      setIsNewEmailValid(false);
      setValidationMessage("Unesite ispravnu novu e-poštu");
      return;
    }

    fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ email: newEmail }),
    });

    setValidationMessage("E-pošta uspješno promijenjena");
  };

  return (
    <div className={classes.changeEmailContainer}>
      <div className={classes.changeEmailHeader}>
        <button
          className={classes.backButton}
          onClick={() => navigate("/settings")}
        >
          {"<"}
        </button>
        <h1>Promjena e-pošte</h1>
      </div>
      <input
        type="email"
        placeholder="Trenutna e-pošta"
        value={currentEmail}
        onChange={(event) => setCurrentEmail(event.target.value)}
        className={`${classes.emailInput} ${
          !isCurrentEmailValid ? classes.inputInvalid : ""
        }`}
      />
      <input
        type="email"
        placeholder="Nova e-pošta"
        value={newEmail}
        onChange={(event) => setNewEmail(event.target.value)}
        className={`${classes.emailInput} ${
          !isNewEmailValid ? classes.inputInvalid : ""
        }`}
      />
      <p className={classes.errorMessage}>{validationMessage}</p>
      <button className={classes.changeEmailButton} onClick={handleChangeEmail}>
        Change Email
      </button>
    </div>
  );
}
