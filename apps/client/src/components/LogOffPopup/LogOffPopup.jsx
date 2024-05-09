import classses from "./index.module.css";

// eslint-disable-next-line react/prop-types
export default function LogOffPopup({ onConfirm, onCancel }) {
  return (
    <div className={classses.logOffPopupContainer}>
      <h2>Jeste li sigurni da se želite odjaviti?</h2>
      <button className={classses.noButton} onClick={onCancel}>
        Ne
      </button>
      <button className={classses.yesButton} onClick={onConfirm}>
        Da
      </button>
    </div>
  );
}
