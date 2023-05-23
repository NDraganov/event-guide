import EventItem from "./event-item";

export default function EventsList({ eventsItems }) {
  return (
    <ul>
      {eventsItems.map((event) => (
        <li key={event.id}>
          <EventItem
            title={event.title}
            image={event.image}
            description={event.description}
            location={event.location}
            date={event.date}
          />
        </li>
      ))}
    </ul>
  );
}
