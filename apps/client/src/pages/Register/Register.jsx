import ArteriaLogo from "../../icons/ArteriaLogo/ArteriaLogo";
import classes from "./index.module.css";
import RegistrationPassword from "../../components/RegistrationPassword/RegistrationPassword";
import RegistrationDate from "../../components/RegistrationDate/RegistrationDate";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../../providers/RegistrationProvider";
import RegistrationEmail from "../../components/RegistrationEmail/RegistrationEmail";

export default function Register() {
  const navigate = useNavigate();
  const { step, userData } = useRegistration();

  const stepsComponents = [
    {
      step: 1,
      component: <RegistrationEmail />,
      title: "E-pošta",
    },
    {
      step: 2,
      component: <RegistrationPassword />,
      title: "Zaporka",
    },
    {
      step: 3,
      component: <RegistrationDate />,
      title: "Datum Rođenja",
    },
    {
      step: 4,
      component: <div>Step 4</div>,
      title: "Osobni podaci",
    },
  ];
  console.log(userData);
  return (
    <div className={classes.registerPage}>
      <div className={classes.registerHeader}>
        <ArteriaLogo />
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
