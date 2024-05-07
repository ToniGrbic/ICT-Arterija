import ProfileSvg from "../../assets/Profile.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Profile = () => {
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user == null) {
      navigate("/login");
    }
    navigate("/user");
  };

  return <img src={ProfileSvg} alt="Profile" onClick={handleProfileClick} />;
};

export default Profile;
