import EventTitle from "@/components/event-details/event-title";
import EventLogistics from "@/components/event-details/event-logistics";
import EventDescription from "@/components/event-details/event-description";

import { getAllEvents, getEventById } from "@/helpers/api-util";

export default function EventDetailsPage({ selectedEvent }) {
  if (!selectedEvent) {
    return <p>Event not found!</p>;
  }
  return (
    <main>
      <EventTitle title={selectedEvent.title} />
      <EventLogistics
        image={selectedEvent.image}
        date={selectedEvent.date}
        location={selectedEvent.location}
      />
      <EventDescription description={selectedEvent.description} />
    </main>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent: selectedEvent,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
