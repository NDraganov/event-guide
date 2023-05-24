import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import { getBackEndEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function BackEndPage({ backEndEvents }) {
  return (
    <Fragment>
      <Head>
        <title>Back-end Events</title>
        <meta
          name="description"
          content="Explore back-end programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={classes.back}>
        <h1>Back-end events</h1>
        <EventsList eventsItems={backEndEvents} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const backEndEvents = await getBackEndEvents();

  return {
    props: {
      backEndEvents: backEndEvents,
    },
    revalidate: 300,
  };
}
