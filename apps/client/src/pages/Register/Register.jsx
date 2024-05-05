import ArteriaLogo from "../../icons/ArteriaLogo/ArteriaLogo";
import classes from "./index.module.css";
import { useState } from "react";
import RegitrationEmail from "../../components/RegistrationEmail/RegistrationEmail";
import RegistrationPassword from "../../components/RegistrationPassword/RegistrationPassword";

export default function Register() {
  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const getData = (data) => {
    console.log(data);
  };

  const stepsComponents = [
    {
      step: 1,
      component: <RegitrationEmail getData={getData} />,
      title: "E-pošta",
    },
    {
      step: 2,
      component: <RegistrationPassword />,
      title: "Zaporka",
    },
    {
      step: 3,
      component: <div>Step 3</div>,
      title: "Korisničko ime",
    },
    {
      step: 4,
      component: <div>Step 4</div>,
      title: "Osobni podaci",
    },
  ];

  const [step, setStep] = useState(0);

  return (
    <div className={classes.registerPage}>
      <div className={classes.registerHeader}>
        <ArteriaLogo />
        <div className={classes.stepsContainer}>
          <span
            className={`${classes.registerStepsSpan} ${step >= 0 ? classes.registerStepsSpanActive : ""}`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${step >= 1 ? classes.registerStepsSpanActive : ""}`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${step >= 2 ? classes.registerStepsSpanActive : ""}`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${step >= 3 ? classes.registerStepsSpanActive : ""}`}
          ></span>
        </div>
        <button className={classes.exitButton}>X</button>
      </div>
      <div className={classes.stepTitleContainer}>
        <p className={classes.stepLogo}>{step + 1}</p>
        <h1>{stepsComponents[step].title}</h1>
      </div>
      <div>{stepsComponents[step].component}</div>
      <button className={classes.registrationButton} onClick={handleNextStep}>
        {step === 3 ? "Registracija" : "Nastavi"}
      </button>
    </div>
  );
}
