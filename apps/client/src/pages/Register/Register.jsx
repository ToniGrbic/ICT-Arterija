import ArteriaLogo from "../../icons/ArteriaLogo/ArteriaLogo";
import classes from "./index.module.css";
import RegistrationPassword from "../../components/RegisterComponents/RegistrationPassword/RegistrationPassword";
import RegistrationDate from "../../components/RegisterComponents/RegistrationDate/RegistrationDate";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../../providers/RegistrationProvider";
import RegistrationEmail from "../../components/RegisterComponents/RegistrationEmail/RegistrationEmail";
import RegistrationUserName from "../../components/RegisterComponents/RegistrationUserName/RegistrationUserName";
import RegistrationGender from "../../components/RegisterComponents/RegistrationGender/RegistrationGender";

export default function Register() {
  const navigate = useNavigate();
  const { step, updateStepBack } = useRegistration();

  const stepsComponents = [
    {
      component: <RegistrationEmail />,
      title: "E-pošta",
    },
    {
      component: <RegistrationPassword />,
      title: "Zaporka",
    },
    {
      component: <RegistrationUserName />,
      title: "Postavljanje Profila",
    },
    {
      component: <RegistrationDate />,
      title: "Datum Rođenja",
    },
    {
      component: <RegistrationGender />,
      title: "Osobni podaci",
    },
  ];
  return (
    <div className={classes.registerPage}>
      <div className={classes.registerHeader}>
        {step === 0 ? (
          <ArteriaLogo />
        ) : (
          <button className={classes.stepBackButton} onClick={updateStepBack}>
            {"<"}
          </button>
        )}
        <div className={classes.stepsContainer}>
          <span
            className={`${classes.registerStepsSpan} ${
              step >= 0 ? classes.registerStepsSpanActive : ""
            }`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${
              step >= 1 ? classes.registerStepsSpanActive : ""
            }`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${
              step >= 2 ? classes.registerStepsSpanActive : ""
            }`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${
              step >= 3 ? classes.registerStepsSpanActive : ""
            }`}
          ></span>
          <span
            className={`${classes.registerStepsSpan} ${
              step >= 4 ? classes.registerStepsSpanActive : ""
            }`}
          ></span>
        </div>
        <button
          className={classes.exitButton}
          onClick={() => {
            navigate("/");
          }}
        >
          X
        </button>
      </div>
      <div className={classes.stepTitleContainer}>
        <p className={classes.stepLogo}>{step + 1}</p>
        <h1>{stepsComponents[step].title}</h1>
      </div>
      <div>{stepsComponents[step].component}</div>
    </div>
  );
}
