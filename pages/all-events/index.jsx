import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import EventsSearchTitle from "@/components/events-search/events-search-title";
import { getAllEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

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
      <main>
        <h1>All events</h1>
        <EventsSearchTitle />
        <EventsList eventsItems={allEvents} />
      </main>
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
