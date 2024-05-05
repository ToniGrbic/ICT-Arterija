import LandingPage from "./pages/LandingPage/LandingPage";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import "./App.css";

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
