export default async function fetchPhoto(id) {
  const response = await fetch(`/api/photos/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
}
