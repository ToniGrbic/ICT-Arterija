export default async function fetchDonations(setData, user) {
  try {
    const schedulesResponse = await fetch(`/api/schedules/user/${user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    });

    if (!schedulesResponse.ok) {
      throw new Error("Failed to fetch user schedules");
    }

    const schedulesData = await schedulesResponse.json();

    // Fetch center data for each donation
    await Promise.all(
      schedulesData.map(async (donation) => {
        try {
          const centerResponse = await fetch(
            `/api/centers/${donation.center_id}`,
            {
              method: "GET",
            }
          );

          if (!centerResponse.ok) {
            throw new Error("Failed to fetch center data");
          }

          const centerData = await centerResponse.json();
          donation.centerAddress = centerData.address;
          donation.centerName = centerData.name;
        } catch (error) {
          console.error("Error fetching center data:", error);
        }
      })
    );

    // Fetch event data for each participant
    const participantsResponse = await fetch(
      `/api/participants/user/${user.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!participantsResponse.ok) {
      throw new Error("Failed to fetch user participants");
    }

    const participantsData = await participantsResponse.json();

    await Promise.all(
      participantsData.map(async (participant) => {
        try {
          const eventResponse = await fetch(
            `/api/events/${participant.event_id}`,
            {
              method: "GET",
            }
          );

          if (!eventResponse.ok) {
            throw new Error("Failed to fetch event data");
          }

          const eventData = await eventResponse.json();
          participant.centerAddress = eventData.location;
          participant.centerName = eventData.organizer;
          participant.date = eventData.date;
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
      })
    );

    setData({
      donations: schedulesData,
      events: participantsData,
    });
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}
