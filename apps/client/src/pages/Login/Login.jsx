import { useState } from "react";
import arteriaLogo from "../../assets/arteriaLogo.svg";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ShowPass from "../../icons/ShowPass/ShowPass";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const cookies = new Cookies(null, { path: "/" });
  const [inputType, setInputType] = useState("password");

  const toggleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Molimo unesite email i lozinku");
      return;
    }

    const requestBody = {
      email: email,
      password: password,
    };

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        cookies.set("user", data, { path: "/" }, { maxAge: 86400 });
        navigate("/");
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
        setError("Pogrešan mail ili lozinka");
      });
  };

  return (
    <div className={classes.loginPage}>
      <div className={classes.loginHeader}>
        <button className={classes.exitButton} onClick={() => navigate("/")}>
          {"<"}
        </button>
      </div>
      <img
        className={classes.logoImg}
        width={73}
        height={66}
        src={arteriaLogo}
        alt="logo"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={classes.textInput}
        type={inputType}
        placeholder="Lozinka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        className={classes.toggleShowPassBtn}
        onClick={() => toggleShowPassword()}
      >
        <ShowPass />{" "}
      </div>
      <button className={classes.loginButton} onClick={handleLogin}>
        Prijava
      </button>
      <p className={classes.forgotPassText}>Zaboravili ste lozinku?</p>
      {error && <p className={classes.errorMessage}>{error}</p>}
      <button
        className={classes.registerButton}
        onClick={() => navigate("/register")}
      >
        Izradite račun
      </button>
    </div>
  );
}
