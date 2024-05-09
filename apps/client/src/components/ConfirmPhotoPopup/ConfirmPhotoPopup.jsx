/* eslint-disable react/prop-types */
import classes from "./index.module.css";

export default function ConfirmPhotoPopup({
  onConfirm,
  onCancel,
  photo,
  message,
}) {
  return (
    <div className={classes.confirmPhotoPopup}>
      <div className={classes.popupContent}>
        <h1>
          Da li ste sigurni da želite postaviti ovu fotografiju kao profilnu?
        </h1>
        <img src={photo} alt="" className={classes.previewImage} />
        <div className={classes.popupButtons}>
          <button onClick={onConfirm}>Da</button>
          <button onClick={onCancel}>Ne</button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
