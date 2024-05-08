import classes from "./index.module.css";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

const validateCurrentPassword = async (currentPassword) => {
  const cookies = new Cookies();
  const user = cookies.get("user");

  try {
    const response = await fetch(
      `http://localhost:3000/api/users/check-password/${user.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ password: currentPassword }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return false;
  }
};

const validateNewPassword = (newPassword) => {
  if (newPassword.length < 8) {
    return "Nova lozinka mora biti barem 8 znakova dugačka.";
  }

  if (!/\d/.test(newPassword)) {
    return "Nova lozinka mora sadržavati barem jedan broj.";
  }

  // eslint-disable-next-line no-useless-escape
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword)) {
    return "Nova lozinka mora sadržavati barem jedan poseban znak.";
  }

  return true;
};

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isConfirmNewPasswordValid, setIsConfirmNewPasswordValid] =
    useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const user = cookies.get("user");

  const handleChangePassword = async () => {
    let allErrors = "";

    const currentPasswordValidation =
      await validateCurrentPassword(currentPassword);
    if (currentPasswordValidation === false) {
      setIsCurrentPasswordValid(false);
      allErrors += "Trenutna lozinka nije ispravna. ";
    }

    const newPasswordValidation = validateNewPassword(newPassword);
    if (newPassword !== confirmNewPassword || newPasswordValidation !== true) {
      setIsNewPasswordValid(newPasswordValidation !== true);
      setIsConfirmNewPasswordValid(false);
      allErrors +=
        newPassword !== confirmNewPassword
          ? "Nova lozinka i potvrda lozinke se ne podudaraju. "
          : newPasswordValidation + " ";
    }

    setValidationMessage(allErrors);

    if (allErrors === "") {
      fetch(`http://localhost:3000/api/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ password: newPassword }),
      });
      setValidationMessage("Lozinka uspješno promijenjena.");
    }
  };

  return (
    <div className={classes.changePasswordContainer}>
      <div className={classes.changePasswordHeader}>
        <button
          className={classes.backButton}
          onClick={() => navigate("/settings")}
        >
          {"<"}
        </button>
        <h1>Promijenite svoju zaporku.</h1>
      </div>
      <input
        type="password"
        placeholder="Trenutna lozinka"
        value={currentPassword}
        onChange={(event) => setCurrentPassword(event.target.value)}
        className={`${classes.passwordInput} ${
          !isCurrentPasswordValid ? classes.inputInvalid : ""
        }`}
      />
      <input
        type="password"
        placeholder="Nova lozinka"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
        className={`${classes.passwordInput} ${
          !isNewPasswordValid ? classes.inputInvalid : ""
        }`}
      />
      <input
        type="password"
        placeholder="Potvrdite novu lozinku"
        value={confirmNewPassword}
        onChange={(event) => setConfirmNewPassword(event.target.value)}
        className={`${classes.passwordInput} ${
          !isConfirmNewPasswordValid ? classes.inputInvalid : ""
        }`}
      />
      <p className={classes.errorMessage}>{validationMessage}</p>
      <button
        className={classes.changePasswordButton}
        onClick={handleChangePassword}
      >
        Promijenite lozinku
      </button>
    </div>
  );
}
