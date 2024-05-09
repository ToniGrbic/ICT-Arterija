import { useState, useEffect } from "react";

export default function ChangePhotoPage() {
  const [imgSrc, setImgSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/photos/4")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        setImgSrc(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {imgSrc && <img src={imgSrc} alt="Fetched from server" />}
      {error && <p>Error: {error}</p>}
    </>
  );
}
