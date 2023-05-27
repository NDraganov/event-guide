import { Fragment } from "react";

import { getAllEvents, getEventById } from "@/helpers/api-util";

export default function EventDetailsPage({ selectedEvent }) {
  return <Fragment></Fragment>;
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent: selectedEvent,
    },
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
