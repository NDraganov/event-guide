import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import { getAllEvents } from "@/helpers/api-util";

export default function AllEventsPage({ allEvents }) {
  if (!allEvents) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Explore all programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <EventsList eventsItems={allEvents} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
}
