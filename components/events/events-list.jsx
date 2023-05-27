import EventItem from "./event-item";

import classes from "./events-list.module.css";

export default function EventsList({ eventsItems }) {
  return (
    <ul className={classes.list}>
      {eventsItems.map((event) => (
        <li key={event.id}>
          <EventItem
            title={event.title}
            image={event.image}
            intro={event.intro}
            location={event.location}
            date={event.date}
          />
        </li>
      ))}
    </ul>
  );
}
