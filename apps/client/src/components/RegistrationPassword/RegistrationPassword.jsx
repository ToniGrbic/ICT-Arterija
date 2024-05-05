import { useRegistration } from "../../providers/RegistrationProvider";
import classes from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function RegistrationPassword() {
  const { updateStep, userData } = useRegistration();
  console.log(userData);

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
      />
      <button className={classes.registrationButton} onClick={updateStep}>
        Nastavi
      </button>
    </div>
  );
}
