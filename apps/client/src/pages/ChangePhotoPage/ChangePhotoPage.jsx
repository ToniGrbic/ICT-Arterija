import { useState, useEffect } from "react";
import fetchPhoto from "../../fetchPhoto";

export default function ChangePhotoPage() {
  const [imgSrc, setImgSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhoto(1)
      .then((data) => setImgSrc(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {imgSrc && <img src={imgSrc} alt="Fetched from server" />}
      {error && <p>Error: {error}</p>}
    </>
  );
}
