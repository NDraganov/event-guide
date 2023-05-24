import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import { getFrontEndEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function FrontEndPage({ frontEndEvents }) {
  return (
    <Fragment>
      <Head>
        <title>Front-end Events</title>
        <meta
          name="description"
          content="Explore front-end programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={classes.front}>
        <h1>Front-end events</h1>
        <EventsList eventsItems={frontEndEvents} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const frontEndEvents = await getFrontEndEvents();

  return {
    props: {
      frontEndEvents: frontEndEvents,
    },
    revalidate: 300,
  };
}
