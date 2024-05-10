import classes from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function LogOffPopup({ onConfirm, onCancel }) {
  return (
    <div className={classes.logOffPopupContainer}>
      <h2>Jeste li sigurni da se želite odjaviti?</h2>
      <button className={classes.noButton} onClick={onCancel}>
        Ne
      </button>
      <button className={classes.yesButton} onClick={onConfirm}>
        Da
      </button>
    </div>
  );
}
