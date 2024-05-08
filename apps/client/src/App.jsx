import Home from "./pages/Home/Home";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import DonationsHistoryPage from "./pages/DonationsHistoryPage/DonationsHistoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/donations-history" element={<DonationsHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
