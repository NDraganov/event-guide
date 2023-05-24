import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import { getFullStackEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function FullStackEventsPage({ fullStackEvents }) {
  return (
    <Fragment>
      <Head>
        <title>Front-stack Events</title>
        <meta
          name="description"
          content="Explore full-stack programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={classes.full}>
        <h1>Full-stack events</h1>
        <EventsList eventsItems={fullStackEvents} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const fullStackEvents = await getFullStackEvents();

  return {
    props: {
      fullStackEvents: fullStackEvents,
    },
    revalidate: 300,
  };
}