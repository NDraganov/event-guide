import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import EventsSearchTitle from "@/components/events-search/events-search-title";
import { getAllEvents, getEventsByTitle } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function AllEventsPage({ allEvents, eventsByTitle }) {
  const router = useRouter();

  const findEventByTitleHandler = (title) => {
    const pathTitle = `all-events/${title}`;
    router.push(pathTitle);
  };

  if (!allEvents || !eventsByTitle) {
    return <p>Events not found!</p>;
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
        <EventsSearchTitle
          title={eventsByTitle}
          onSearch={findEventByTitleHandler}
        />
        <EventsList eventsItems={allEvents} />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  const eventsByTitle = await getEventsByTitle();
  return {
    props: {
      allEvents: allEvents,
      eventsByTitle: eventsByTitle,
    },
    revalidate: 60,
  };
}
