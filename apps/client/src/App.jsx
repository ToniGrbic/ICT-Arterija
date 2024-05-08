import Home from "./pages/Home/Home";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { EventsProvider } from "./providers/EventsProvider";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import UserPage from "./pages/UserPage/UserPage";
import DonationsHistoryPage from "./pages/DonationsHistoryPage/DonationsHistoryPage";
import ArteriaBlog from "./pages/Blogs/ArteriaBlog";
import DonationInfoBlog from "./pages/Blogs/DonationInfoBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <EventsProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="events" element={<Events />} />
              <Route path="events/:id" element={<Event />} />
              <Route path="blogs/arteria" element={<ArteriaBlog />} />
              <Route
                path="blogs/doniranje-info"
                element={<DonationInfoBlog />}
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<UserPage />} />
            <Route
              path="/donations-history"
              element={<DonationsHistoryPage />}
            />
          </Routes>
        </EventsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
