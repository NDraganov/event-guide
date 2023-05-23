export async function getAllEvents() {
  // Fetch all events from database
  const response = await fetch(
    "https://events-guide-49246-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  //   Transform all events into objects in array
  const events = [];
  for (const key in data) {
    events.push({ ...data[key] });
  }

  return events;
}
