import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";

export default function AllEventsPage() {
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
        <EventsList />
      </div>
    </Fragment>
  );
}
