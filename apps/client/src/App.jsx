import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </>
  );
}

export default App;
