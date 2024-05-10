import classes from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function ConfirmPopup({ onConfirm, onCancel, title }) {
  return (
    <div className={classes.logOffPopupContainer}>
      <h2>{title}</h2>
      <button className={classes.noButton} onClick={onCancel}>
        Ne
      </button>
      <button className={classes.yesButton} onClick={onConfirm}>
        Da
      </button>
    </div>
  );
}
