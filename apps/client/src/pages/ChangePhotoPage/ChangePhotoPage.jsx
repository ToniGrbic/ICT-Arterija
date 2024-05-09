import { useState, useEffect } from "react";
import fetchPhoto from "../../fetchPhoto";

export default function ChangePhotoPage() {
  const [imgSrc, setImgSrc] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetchPhoto(2)
      .then((data) => setImgSrc(data))
      .catch((error) => setError(error.message));

    fetch("/api/cities")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCity(data[0].name))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {imgSrc && <img src={imgSrc} alt="Fetched from server" />}
      {error && <p>Error: {error}</p>}
      {city && <p>City: {city}</p>}
    </>
  );
}
