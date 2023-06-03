export async function getAllEvents() {
  // Fetch all events from database
  const response = await fetch(
    "https://events-guide-49246-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  //   Transform all events into objects in array
  const allEvents = [];
  for (const key in data) {
    allEvents.push({ id: key, ...data[key] });
  }

  return allEvents;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getFrontEndEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.frontEnd);
}

export async function getBackEndEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.backEnd);
}

export async function getFullStackEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.fullStack);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
export async function getFilteredByDateEvents(dateFilter) {
  const { month, year } = dateFilter;

  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
