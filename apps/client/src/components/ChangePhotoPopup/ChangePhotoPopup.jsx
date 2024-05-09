import { useState, useRef } from "react";
import classes from "./index.module.css";
import Galery from "../../assets/Galery.svg";
import ConfirmPhotoPopup from "../ConfirmPhotoPopup/ConfirmPhotoPopup";
import Cookies from "universal-cookie";

export default function ChangePhotoPopup() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState("");
  const cookies = new Cookies();
  const user = cookies.get("user");

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

  const handleCancel = () => {
    setPreviewSrc(null);
    setSelectedFile(null);
  };

  const handleConfirm = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("filename", selectedFile.name);
    formData.append("mimeType", selectedFile.type);
    formData.append("image", selectedFile);

    try {
      const url =
        user.photos_id === 0
          ? "/api/photos/upload"
          : `/api/photos/${user.photos_id}`;
      const method = user.photos_id === 0 ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Dogodila se greška pri promjeni slike.");
      }

      const responseData = await response.json();

      setMessage("Profilna slika uspješno promjenjena."); // Set the message

      return responseData;
    } catch (error) {
      setMessage("Error uploading file: " + error.message); // Set the message
      throw error;
    }
  };

  return (
    <div className={classes.changePhotoPage}>
      <button className={classes.backButton}>{"X"}</button>
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
      {previewSrc && (
        <ConfirmPhotoPopup
          photo={previewSrc}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message={message}
        />
      )}
    </div>
  );
}
