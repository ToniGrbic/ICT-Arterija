import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router";

const LoginAndRegisterBtns = () => {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.stopPropagation();
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles["btns-container"]} onClick={handleRegisterClick}>
      <div onClick={handleLoginClick} className={styles["left-bar"]}></div>
      <h2>Prijava</h2>
      <h2>Registracija</h2>
    </div>
  );
};

export default LoginAndRegisterBtns;
