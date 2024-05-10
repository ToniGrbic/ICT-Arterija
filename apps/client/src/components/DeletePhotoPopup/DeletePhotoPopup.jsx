import classes from "./index.module.css";
import Cookies from "universal-cookie";

// eslint-disable-next-line react/prop-types
export default function DeletePhotoPopup({ setIsVisible }) {
  const cookies = new Cookies();
  const user = cookies.get("user");

  const handleDeletePhoto = async () => {
    await fetch(`/api/photos/${user.photos_id}`, {
      method: "DELETE",
    });
    user.photos_id = null; // or whatever value you want to set
    cookies.set("user", user, { path: "/" });
    setIsVisible(false);
    window.location.reload();
  };

  return (
    <div className={classes.deletePhotoPopup}>
      <button
        className={classes.backButton}
        onClick={() => {
          setIsVisible(false);
        }}
      >
        {"X"}
      </button>
      <div className={classes.popupContent}>
        <h1 className={classes.deleteImageHeadline}>
          Da li ste sigurni da želite obrisati ovu fotografiju?
        </h1>
        <div className={classes.buttonContainer}>
          <button
            className={classes.noButton}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Odustani
          </button>
          <button className={classes.yesButton} onClick={handleDeletePhoto}>
            Obriši
          </button>
        </div>
      </div>
    </div>
  );
}
