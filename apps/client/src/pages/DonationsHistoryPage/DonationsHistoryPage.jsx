import { useNavigate } from "react-router";

export default function DonationsHistoryPage() {
  const navigate = useNavigate();

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
