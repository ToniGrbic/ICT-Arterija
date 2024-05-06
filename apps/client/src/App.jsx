import LandingPage from "./pages/LandingPage/LandingPage";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
