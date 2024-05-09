import { useState, useRef } from "react";
import classes from "./index.module.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

export default function ChangePhotoPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const fileInputRef = useRef(null);
  const cookies = new Cookies();
  const user = cookies.get("user");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setMessage(""); // Clear the message
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file && file.type.startsWith("image/")) {
      setPreviewSrc(URL.createObjectURL(file));
    } else {
      setPreviewSrc(null);
    }
  };

  const handleUpload = async () => {
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
      <h1 className={classes.changePhotoHeadline}>Promjena slike profila</h1>
      <button
        className={classes.backButton}
        onClick={() => navigate("/settings")}
      >
        {"<"}
      </button>
      <label htmlFor="fileInput" className={classes.chooseFileLabel}>
        Odaberite sliku
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        className={classes.chooseFileInput}
      />
      {!previewSrc ? (
        <>Uneseni file nije slika</>
      ) : (
        <img
          src={previewSrc}
          alt="Preview"
          className={classes.uploadFilePreview}
        />
      )}
      <p>{message}</p>
      <button className={classes.changePhotoButton} onClick={handleUpload}>
        Promijeni sliku
      </button>
    </div>
  );
}
