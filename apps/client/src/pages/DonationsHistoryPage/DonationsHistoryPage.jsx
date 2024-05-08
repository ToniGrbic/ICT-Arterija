import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

export default function DonationsHistoryPage() {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const donations = cookies.get("donations");
  console.log(donations);

  return (
    <>
      Donations History
      <button
        onClick={() => {
          navigate("/user");
        }}
      >
        {"<"}
      </button>
    </>
  );
}
