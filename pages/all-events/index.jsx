import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import PageIntro from "@/components/events/page-intro";
import EventsList from "@/components/events/events-list";
import EventsSearchTitle from "@/components/events-search/events-search-title";
import EventsSearchDate from "@/components/events-search/events-search-date";
import { getAllEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function AllEventsPage({ allEvents }) {
  const router = useRouter();

  const findEventsByTitleHandler = (title) => {
    const pathTitle = `all-events/${title}`;
    router.push(pathTitle);
  };

  const findEventsByDateHandler = (month, year) => {
    const pathDate = `all-events/${year}/${month}`;
    router.push(pathDate);
  };

  if (!allEvents) {
    return <p>Events not found!</p>;
  }
  return (
    <Fragment>
      <Head>
        <title>ALL EVENTS</title>
        <meta
          name="description"
          content="Explore all programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PageIntro title={"All events"} introduction={"Explore all events."} />
        <div className={classes.forms}>
          <EventsSearchTitle
            title={allEvents}
            onSearchTitle={findEventsByTitleHandler}
          />
          <EventsSearchDate onSearchDate={findEventsByDateHandler} />
        </div>
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
