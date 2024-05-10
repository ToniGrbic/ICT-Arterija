/* eslint-disable react/prop-types */
import Cookies from "universal-cookie";
import classes from "./index.module.css";

export default function ConfirmPhotoPopup({
  setMessage,
  setPreviewSrc,
  setSelectedFile,
  selectedFile,
  message,
  previewSrc,
}) {
  const cookies = new Cookies();
  const user = cookies.get("user");

  const onCancel = () => {
    setPreviewSrc(null);
    setSelectedFile(null);
  };

  const onConfirm = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("filename", selectedFile.name);
    formData.append("mimeType", selectedFile.type);
    formData.append("image", selectedFile);

    try {
      const url =
        user.photos_id === null
          ? "/api/photos/upload"
          : `/api/photos/${user.photos_id}`;
      const method = user.photos_id === null ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Dogodila se greška pri promjeni slike.");
      }

      const responseData = await response.json();
      setMessage("Profilna slika uspješno promjenjena.");
      setPreviewSrc(null);

      window.location.reload();

      return responseData;
    } catch (error) {
      setMessage("Error uploading file: " + error.message);
      throw error;
    }
  };

  return (
    <div className={classes.confirmPhotoPopup}>
      <div className={classes.popupContent}>
        <h1>
          Da li ste sigurni da želite postaviti ovu fotografiju kao profilnu?
        </h1>
        <img src={previewSrc} alt="" className={classes.previewImage} />
        <div className={classes.popupButtons}>
          <button onClick={onConfirm}>Da</button>
          <button onClick={onCancel}>Ne</button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
