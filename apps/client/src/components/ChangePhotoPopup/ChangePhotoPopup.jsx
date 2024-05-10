import { useState, useRef } from "react";
import classes from "./index.module.css";
import Galery from "../../assets/Galery.svg";
import ConfirmPhotoPopup from "../ConfirmPhotoPopup/ConfirmPhotoPopup";
import Cookies from "universal-cookie";
import TrashCan from "../../assets/TrashCan.svg";
import DeletePhotoPopup from "../DeletePhotoPopup/DeletePhotoPopup";

// eslint-disable-next-line react/prop-types
export default function ChangePhotoPopup({ setIsVisible }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const fileInputRef = useRef(null);
  const cookies = new Cookies();
  const user = cookies.get("user");
  const [message, setMessage] = useState("");
  const [deletePopup, setDeletePopup] = useState(false);

  const handleFileChange = (event) => {
    setMessage("");
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file && file.type.startsWith("image/")) {
      setPreviewSrc(URL.createObjectURL(file));
    } else {
      setPreviewSrc(null);
    }
  };

  return (
    <div className={classes.changePhotoPage}>
      <button
        className={classes.backButton}
        onClick={() => setIsVisible(false)}
      >
        {"X"}
      </button>
      <h1 className={classes.changePhotoHeadline}>
        Promjena fotografije profila
      </h1>
      <div className={classes.changePhotoOptionContainer}>
        <img src={Galery} alt="" />
        <label htmlFor="fileInput" className={classes.chooseFileLabel}>
          Galerija fotografija
        </label>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          className={classes.chooseFileInput}
        />
      </div>
      <div className={classes.changePhotoOptionContainer}>
        <img src={TrashCan} alt="" />
        <p
          className={classes.deleteImageLabel}
          onClick={() => {
            setDeletePopup(true);
          }}
        >
          Obriši sliku profila
        </p>
      </div>
      {deletePopup && <DeletePhotoPopup setIsVisible={setDeletePopup} />}
      {previewSrc && (
        <ConfirmPhotoPopup
          user={user}
          setMessage={setMessage}
          selectedFile={selectedFile}
          setPreviewSrc={setPreviewSrc}
          setSelectedFile={setSelectedFile}
          message={message}
          previewSrc={previewSrc}
        />
      )}
    </div>
  );
}
