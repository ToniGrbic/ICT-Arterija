export default async function changeProfilePhoto(photo, user) {
  const response = await fetch(`/api/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ photos_id: photo.id }), // Corrected syntax
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
}
