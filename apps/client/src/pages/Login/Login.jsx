import { useState } from "react";
import arteriaLogo from "../../assets/arteriaLogo.svg";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const cookies = new Cookies(null, { path: "/" });

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
        cookies.set("token", data.token);
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
        <img src={arteriaLogo} alt="" />
        <button className={classes.exitButton} onClick={() => navigate("/")}>
          x
        </button>
      </div>
      <h1>Prijava</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Lozinka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="/register">Nemate račun? </a>
      <button className={classes.loginButton} onClick={handleLogin}>
        Prijava
      </button>
      {error && <p className={classes.errorMessage}>{error}</p>}
    </div>
  );
}
