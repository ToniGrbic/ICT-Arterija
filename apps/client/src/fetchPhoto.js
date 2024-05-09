export default async function fetchPhoto(id) {
  const response = await fetch(`http://localhost:3000/api/photos/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
}
