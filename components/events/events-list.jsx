import EventItem from "./event-item";

export default function EventsList({ eventItems }) {
  return (
    <ul>
      {eventItems.map((event, index) => {
        return (
          <li key={event.index}>
            <EventItem
              title={event.title}
              image={event.image}
              description={event.description}
              location={event.location}
              date={event.date}
            />
          </li>
        );
      })}
    </ul>
  );
}
